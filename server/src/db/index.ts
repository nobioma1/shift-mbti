import knex from 'knex';
import knexfile from '../../knexfile';

const env = process.env.NODE_ENV || 'development';
// @ts-ignore
const configOptions = knexfile[env];

export default knex(configOptions);
