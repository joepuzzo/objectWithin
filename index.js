// Util functions

function anArray (a) {
  return Array.isArray(a)
}

function anObject (a) {
  return !Array.isArray(a) && typeof a === 'object' && a !== null
}

// Everything in the small must exist in the large

const matchObjects = ( small, large ) => { 
 
  // Base case1: we are not an object or array
  if( !anArray(small) && !anObject(small) ){
		const result = small === large;
    return result;
	}

	if( anObject(small) ){
		// For every key in small regur
  	return Object.keys( small ).every((key)=>{
			// Recur
			const match = matchObjects( small[key], large[key] );
			// If we did not match return early.. we are done
			return match;
  	})
	}

	// We must be an array so itterate
	return small.every((e, i)=>{
		// Recur
		const match = matchObjects( e, large[i] );
		// If we did not match return early.. we are done
    return match;
	});

}

module.exports = matchObjects;
