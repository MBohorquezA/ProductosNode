const sql = require('mssql');

const config = {
    user: 'sa',
    password: '123456', 
    server: 'localhost',
    database: 'DBProductos', 
    port: 1434, 
    options: {
        trustedConnection: true, 
        trustServerCertificate: true 
    }
};

async function connectToDatabase() {
    try {
        return await sql.connect(config);
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err);
    }
}

module.exports = { connectToDatabase, sql };