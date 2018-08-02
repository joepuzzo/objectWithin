const expect = require('chai').expect;
const objectWithin = require('../index.js');

describe('objectWithin', () => {

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

