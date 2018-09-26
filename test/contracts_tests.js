process.env.NODE_ENV = 'test';
const request = require('supertest');
const expect = require('chai').expect;
const app = require('../server');
const knex = require('../db/knex');

describe('GET /contracts', () => {
	it('responds with array of contract objects', done => {
		request(app)
			.get('/contracts')
			.expect('Content-Type', /text/)
			.expect(200, done);
	});
});

describe('GET /contracts/:contract_id', () => {
    it('responds with appropriate contract', done => {
		request(app)
			.get('/contracts/:contract_id')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.end(done)
	});
	xit('should throw error if contract_id is null', done => {
		request(app)
			.get()
			.expect(404, done)
	});
});

describe('GET /newContracts', () => {
	it('responds with form for new contracts', done => {
		request(app)
			.get('/newContract')
			.expect('Content-Type', /text/)
			.expect(200, done);
	});
});

xdescribe('POST /assassins', () => {
	it('should respond with array of all assassins including newly added', done => {

	})
})