const request = require('supertest');
const app = require('../../src/app');

describe('Endpoint to check API availability', () => {
    const endpoint = '/v1/health';
    const methods = ['get', 'post', 'delete', 'patch', 'head', 'put'];

    methods.forEach((method) => {
        describe(`${method.toUpperCase()} ${endpoint}`, () => {
            test('should return 200 and empty body', async () => {
                const res = await request(app)[method](endpoint);

                expect(res.status).toBe(200);
                expect(res.body).toEqual({});
            });
        });
    });
});