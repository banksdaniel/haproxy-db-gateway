const createPool = require('../config/dbConfig');

class DatabaseService {
    constructor(dbName) {
        this.pool = createPool(dbName);
    }

    async getCurrentTime() {
        try {
            const result = await this.pool.query('SELECT NOW()');
            return result.rows[0].now;
        } catch (error) {
            throw new Error('Erro ao executar a consulta no banco de dados');
        } finally {
            this.pool.end();
        }
    }
}

module.exports = DatabaseService;
