const express = require('express');
const dbRoutes = require('./routes/dbRoutes');

const app = express();
const port = 3000;

app.use('/db', dbRoutes);

app.listen(port, () => {
    console.log(`Proxy app rodando em http://localhost:${port}`);
});
