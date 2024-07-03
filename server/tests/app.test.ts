import supertest from 'supertest';

import app from '../src/app';

describe('app', () => {
    let request: any;
    beforeEach(() => {
        request = supertest(app);
    });
    it('should return a successful response for GET /', done => {
        request.get('/').expect(200, done);
    });
});