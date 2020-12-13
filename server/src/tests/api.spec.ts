import supertest from 'supertest';

import { app } from '../app';

const request = supertest(app);

describe('App ', () => {
  it('[GET] /', async (done) => {
    const res = await request.get('/api');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Welcome to Shift MBTI API' });
    done();
  });
});
