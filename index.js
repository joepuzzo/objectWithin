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

const matchAndCheckObjects = ( small, large, path = 'object' ) => {

  // Base case1: we are not an object or array
  if( !anArray(small) && !anObject(small) ){
		const result = small === large;
    const match = { result, failure: { expected: `${path}: ${small}`, actual: `${path}: ${large}` } };
		return match;
	}

	if( anObject(small) ){
		// For every key in small regur
  	const keys = Object.keys( small );

    for( key of keys ){
			// Recur
			const match = matchAndCheckObjects( small[key], large[key], `${path}.${key}` );
			// If we did not match return early.. we are done
			if( !match.result ){
				return match;
			}
    }

		// We are good so return
		return { result: true, failure: null };
	}

	// We must be an array so itterate
	for( let i = 0; i < small.length; i++ ){
		// Recur
		const match = matchAndCheckObjects( small[i], large[i], `${path}[${i}]` );
		// If we did not match return early.. we are done
		if( !match.result ){
			return match;
		}
	}

	return { result: true, failure: null };

}

module.exports = matchObjects;
module.exports.objectWithinCheck = matchAndCheckObjects;
