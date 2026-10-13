/*import pg from 'pg';

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL
})*/

import pg from 'pg';

export const pool = new pg.Pool({
    connectionString: 'postgresql://activa:activa_dev@localhost:5432/libros'
});