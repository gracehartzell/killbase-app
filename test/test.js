process.env.NODE_ENV = 'test';

const request = require('supertest');
const expect = require('chai').expect;
const app = require('../server');
const knex = require('../db/knex');

describe('GET /assassins', () => {
	it('responds with array of assassin objects', done => {
		request(app)
			.get('/assassins')
			.expect('Content-Type', /text/)
			.expect(200, done);
	});
});

describe('GET /assassins/:assassins_id', () => {
	it('responds with appropriate assassin', done => {
		request(app)
			.get('/assassins/:assassins_id')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.end(done)
	});
	xit('should throw error if assassins_id is null', done => {
		request(app)
			.get()
			.expect(404, done)
	});
});

describe('GET /newAssassin', () => {
	it('responds with form for new assassins', done => {
		request(app)
			.get('/newAssassin')
			.expect('Content-Type', /text/)
			.expect(200, done);
	});
});

xdescribe('POST /assassins', () => {
	it('should respond with array of all assassins including newly added', done => {

	})
})