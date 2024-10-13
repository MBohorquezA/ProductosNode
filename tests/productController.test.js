const request = require('supertest');
const app = require('../app'); 

describe('PUT /api/products/:id', () => {
    it('debería actualizar un producto correctamente', async () => {
        const product = {
            Name: 'Producto Actualizado',
            Description: 'Descripción Actualizada',
            Price: 150.00,
            Stock: 30
        };

        const response = await request(app)
            .put('/api/products/1')
            .send(product);

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Producto actualizado exitosamente');
    });

    it('debería devolver 400 si falta un campo requerido', async () => {
        const product = {
            Name: '', 
            Description: 'Descripción Actualizada',
            Price: 150.00,
            Stock: 30
        };

        const response = await request(app)
            .put('/api/products/1')
            .send(product);

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe('Todos los campos son obligatorios');
    });
});

describe('DELETE /api/products/:id', () => {

    it('debería eliminar un producto correctamente', async () => {
        const response = await request(app)
            .delete('/api/products/1');

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Producto eliminado exitosamente');
    });

    it('debería devolver 400 si el ID no está presente en la solicitud', async () => {
        const response = await request(app)
            .delete('/api/products/');

        expect(response.statusCode).toBe(404);
    });
});