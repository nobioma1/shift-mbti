import db from '../../db';

export async function createAndSave(email: string) {
  return db('users')
    .insert({ email })
    .then((res) => {
      return findByEmail(email);
    });
}

export async function findByEmail(email: string) {
  return db('users').where({ email }).first();
}
