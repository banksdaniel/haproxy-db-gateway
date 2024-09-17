const userPermissions = {
    'developer1': {
        databases: ['bd1'], 
        permissions: ['read', 'write']
    },
    'developer2': {
        databases: ['bd2'], 
        permissions: ['read']
    }
};

const databaseServerMapping = {
    'Rabin-Karp': 'bd1',
    'Boyer-Moore': 'bd2'
};

function authorizeUser(req, res, next) {
    const username = req.header('username');
    const dbName = req.header('db-name');

    if (!username || !dbName) {
        return res.status(400).send('Nome de usuário e banco de dados são necessários.');
    }

    const normalizedUsername = username.trim().toLowerCase();
    

    const user = userPermissions[normalizedUsername];

    if (!user) {
        return res.status(403).send('Usuário não autorizado.');
    }

    const server = databaseServerMapping[dbName];
    if (!server) {
        return res.status(400).send('Banco de dados especificado não é válido.');
    }

    if (!user.databases.includes(server)) {
        return res.status(403).send('Usuário não autorizado ou sem permissão para acessar este banco de dados.');
    }

    req.dbName = server;
    req.userPermissions = user.permissions;
    next();
}


module.exports = authorizeUser;
