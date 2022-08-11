const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/github');

describe('oauth routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('should login and redirect users to github dashboard', async () => {
    const res = await request
      .agent(app)
      .get('/api/v1/github/callback?code=42')
      .redirects(1);

    expect(res.body).toEqual({
      id: expect.any(String),
      username: 'git-this',
      email: 'git-this@me.com',
      avatar: expect.any(String),
      iat: expect.any(Number),
      exp: expect.any(Number),
    });
  })

  it('DELETE - should log out a user', async () => {
    const res = await request(app).delete('/api/v1/github/sessions');
    expect(res.status).toBe(200);
  });

  afterAll(() => {
    pool.end();
  });
});
