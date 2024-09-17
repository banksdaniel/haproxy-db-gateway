const DatabaseService = require('../services/databaseService');

async function getTime(req, res) {
    const dbName = req.dbName;
    const dbService = new DatabaseService(dbName);

    try {
        const currentTime = await dbService.getCurrentTime();
        res.send(`Current time from ${dbName}: ${currentTime}`);
    } catch (error) {
        res.status(500).send(error.toString());
    }
}

module.exports = { getTime };
