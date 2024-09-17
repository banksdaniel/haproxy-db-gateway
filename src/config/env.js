require('dotenv').config();

const config = {
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT,
    proxyHost: process.env.PROXY_HOST,
};

module.exports = config;
