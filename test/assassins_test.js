process.env.NODE_ENV = 'test';
const request = require('supertest');
const expect = require('chai').expect;
const app = require('../server');
const knex = require('../db/knex');

beforeEach(done => {
	Promise.all([
		knex('assassins').insert({
			assassins_id: 1,
			photo: 'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg',
			full_name: 'Boop',
			code_name: 'Snarl',
			weapon: 'Cattery',
			contact_info: 'meow@gmail.com',
			age: 3,
			price: 333,
			rating: 9,
			kills: 40,
			open_contracts: 3}),
			
		knex('assassins').insert({
			assassins_id: 2,
			photo: 'http://honesttopaws.com/wp-content/uploads/sites/5/2017/05/banana-cat-1.png',
			full_name: 'Meeps',
			code_name: 'Reep',
			weapon: 'Kitter',
			contact_info: 'cat@gmail.com',
			age: 200,
			price: 3,
			rating: 7,
			kills: 90,
			open_contracts: 2})
		]).then(() => done());
});

afterEach(done => { knex('assassins').del().then(() => done())});



xdescribe('GET /assassins', () => {
	it('responds with array of assassin objects', done => {
		request(app)
			.get('/assassins')
			.expect('Content-Type', /text/)
			.expect(200)
	});
});

describe('GET /assassins/:assassins_id', () => {
	it('responds with appropriate assassin', done => {
		request(app)
			.get('/assassins/1')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200)
			.expect(/Boop/, () => {
				throw new Error('THIS IS NOT OK');		
				done();		
			})
			// .end( (err, res) => { 
			// 	done(); 
			// })
	});

	xit('should throw error if assassins_id is null', done => {
		request(app)
			.get()
			.expect(404, done)
	});
});

// describe('GET /newAssassin', () => {
// 	it('responds with form for new assassins', done => {
// 		request(app)
// 			.get('/newAssassin')
// 			.expect('Content-Type', /text/)
// 			.expect(200, done);
// 	});
// });

// describe('POST /assassins', () => {
// 	let newAssassin = {
// 		assassin: {
// 			photo: 'https://pmcdeadline2.files.wordpress.com/2015/06/the-boondock-saints.jpg?w=446&h=299&crop=1',
// 			full_name: 'Unknown',
// 			code_name: 'Boondock Saints',
// 			weapon: 'Skill',
// 			contact_info: 'boondock@gmail.com',
// 			age: 23,
// 			price: 3,
// 			rating: 9,
// 			kills: 400,
// 			open_contracts: 3} 
// 	};
// 	it('adds the new assassin to the database', done => {
// 		request(app)
// 			.post('/assassins')
// 			.send(newAssassin)
// 			.expect(302, done)
// 	});
// });