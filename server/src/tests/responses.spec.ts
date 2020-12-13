import supertest from 'supertest';

import { app } from '../app';

const request = supertest(app);

describe('Responses', () => {
  it('TEST CASE A - ENTP', async () => {
    const res = await request.post('/api/responses/new').send({
      email: 'testcasea@email.com',
      responses: {
        '1': 4,
        '2': 3,
        '3': 1,
        '4': 6,
        '5': 7,
        '6': 3,
        '7': 5,
        '8': 3,
        '9': 6,
        '10': 6,
      },
    });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ personality: 'ENTP' });
  });

  it('TEST CASE B - ESTJ', async () => {
    const res = await request.post('/api/responses/new').send({
      email: 'testcaseb@email.com',
      responses: {
        '1': 1,
        '2': 4,
        '3': 4,
        '4': 6,
        '5': 5,
        '6': 2,
        '7': 6,
        '8': 3,
        '9': 3,
        '10': 2,
      },
    });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ personality: 'ESTJ' });
  });

  it('TEST CASE D - INFP', async () => {
    const res = await request.post('/api/responses/new').send({
      email: 'testcased@email.com',
      responses: {
        '1': 3,
        '2': 2,
        '3': 6,
        '4': 1,
        '5': 7,
        '6': 3,
        '7': 2,
        '8': 5,
        '9': 2,
        '10': 7,
      },
    });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ personality: 'INFP' });
  });

  it('TEST CASE E - ISFP', async () => {
    const res = await request.post('/api/responses/new').send({
      email: 'testcasee@email.com',
      responses: {
        '1': 3,
        '2': 4,
        '3': 7,
        '4': 1,
        '5': 2,
        '6': 5,
        '7': 4,
        '8': 3,
        '9': 2,
        '10': 6,
      },
    });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ personality: 'ISFP' });
  });

  it('TEST CASE F - ESTJ', async () => {
    const res = await request.post('/api/responses/new').send({
      email: 'testcasef@email.com',
      responses: {
        '1': 4,
        '2': 4,
        '3': 4,
        '4': 4,
        '5': 4,
        '6': 4,
        '7': 4,
        '8': 4,
        '9': 4,
        '10': 4,
      },
    });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ personality: 'ESTJ' });
  });

  it('TEST CASE G - ISTJ', async () => {
    const res = await request.post('/api/responses/new').send({
      email: 'testcaseg@email.com',
      responses: {
        '1': 1,
        '2': 1,
        '3': 1,
        '4': 1,
        '5': 1,
        '6': 1,
        '7': 1,
        '8': 1,
        '9': 1,
        '10': 1,
      },
    });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ personality: 'ISTJ' });
  });
  it('TEST CASE H - ESTP', async () => {
    const res = await request.post('/api/responses/new').send({
      email: 'testcaseh@email.com',
      responses: {
        '1': 7,
        '2': 7,
        '3': 7,
        '4': 7,
        '5': 7,
        '6': 7,
        '7': 7,
        '8': 7,
        '9': 7,
        '10': 7,
      },
    });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ personality: 'ESTP' });
  });
});
