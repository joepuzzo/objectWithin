const expect = require('chai').expect;
const objectWithin = require('../index.js');
const objectWithinCheck = require('../index.js').objectWithinCheck;

describe('objectWithin', () => {

  describe('objectWithin(small, large)', () => {
    it('evaluates two complex objects to true when the smaller object is fully contained within the larger one', () => {

  		const largeObj = {
  			a: 1,
  			b: 2,
  			c: {
  				d: 3,
  				e: {
  					f: 4,
  					g: 6
  				},
  				h: 5
  			},
  			e: 7,
  			d: 3,
  			j: [
  				1,
  				2,
  				3,
  				{
  					a: 7,
  					b: 8
  				},
  				4
  			]
  		}

  		const smallObj = {
  			a: 1,
  			c: {
  				e: {
  					f: 4
  				},
  				h: 5
  			},
  			e: 7,
  			j: [
  				1,
  				2,
  				3,
  				{
  					a: 7
  				}
  			]
  		}

  		expect( objectWithin(smallObj, largeObj) ).to.be.true;

  	});

  	it('evaluates two complex objects to false when the smaller object is NOT fully contained within the larger one', () => {

  		const largeObj = {
  			a: 1,
  			b: 2,
  			c: {
  				d: 3,
  				e: {
  					f: 4,
  					g: 6
  				},
  				h: 5
  			},
  			e: 7,
  			d: 3,
  			j: [
  				1,
  				2,
  				3,
  				{
  					a: 7,
  					b: 8
  				},
  				4
  			]
  		}

  		const smallObj = {
  			a: 1,
  			i: 1, // <<<<<<<
  			c: {
  				e: {
  					f: 4
  				},
  				h: 5
  			},
  			e: 7,
  			j: [
  				1,
  				2,
  				3,
  				{
  					a: 7
  				}
  			]
  		}

  		expect( objectWithin(smallObj, largeObj) ).to.be.false;

  	});

  });


  describe('objectWithinCheck(small, large)', () => {
    it('evaluates two complex objects to true when the smaller object is fully contained within the larger one', () => {

  		const largeObj = {
  			a: 1,
  			b: 2,
  			c: {
  				d: 3,
  				e: {
  					f: 4,
  					g: 6
  				},
  				h: 5
  			},
  			e: 7,
  			d: 3,
  			j: [
  				1,
  				2,
  				3,
  				{
  					a: 7,
  					b: 8
  				},
  				4
  			]
  		}

  		const smallObj = {
  			a: 1,
  			c: {
  				e: {
  					f: 4
  				},
  				h: 5
  			},
  			e: 7,
  			j: [
  				1,
  				2,
  				3,
  				{
  					a: 7
  				}
  			]
  		}

  		expect( objectWithinCheck(smallObj, largeObj) ).to.deep.equal({result: true, failure: null});

  	});

  	it('evaluates two complex objects to false when the smaller object is NOT fully contained within the larger one', () => {

  		const largeObj = {
  			a: 1,
  			b: 2,
  			c: {
  				d: 3,
  				e: {
  					f: 4,
  					g: 6
  				},
  				h: 5
  			},
  			e: 7,
  			d: 3,
  			j: [
  				1,
  				2,
  				3,
  				{
  					a: 7,
  					b: 8
  				},
  				4
  			]
  		}

  		const smallObj = {
  			a: 1,
  			i: 1, // <<<<<<<
  			c: {
  				e: {
  					f: 4
  				},
  				h: 5
  			},
  			e: 7,
  			j: [
  				1,
  				2,
  				3,
  				{
  					a: 7
  				}
  			]
  		}

  		expect( objectWithinCheck(smallObj, largeObj) ).to.deep.equal({
        result: false,
        failure: {
          actual: 'object.i: undefined',
          expected: 'object.i: 1'
        }
      });

  	});


    it('evaluates two complex objects to false when the smaller object is NOT fully contained within the larger one', () => {

      const largeObj = {
        a: 1,
        b: 2,
        c: {
          d: 3,
          e: {
            f: 4,
            g: 6
          },
          h: 5
        },
        e: 7,
        d: 3,
        j: [
          1,
          2,
          3,
          {
            a: 7,
            b: 8
          },
          4
        ]
      }

      const smallObj = {
        a: 1,
        c: {
          e: {
            f: 4
          },
          h: 5
        },
        e: 7,
        j: [
          1,
          2,
          3,
          {
            a: 8
          }
        ]
      }

      expect( objectWithinCheck(smallObj, largeObj) ).to.deep.equal({
        result: false,
        failure: {
          actual: 'object.j[3].a: 7',
          expected: 'object.j[3].a: 8'
        }
      });

    });

  });


});
