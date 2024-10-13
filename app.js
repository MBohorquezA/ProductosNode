const express = require('express');
const productRoutes = require('./routes/productRoutes');
const { swaggerDocs, swaggerUi } = require('./swagger');
const app = express();

app.use(express.json());
app.use('/api', productRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
        console.log(`Documentación Swagger disponible en http://localhost:${PORT}/api-docs`);
    });
}

module.exports = app;