const { Pool } = require('pg');
const config = require('./env');

function createPool(dbName) {
    return new Pool({
        user: config.dbUser,
        host: config.proxyHost,
        database: dbName,
        password: config.dbPassword,
        port: config.dbPort,
    });
}

module.exports = createPool;
