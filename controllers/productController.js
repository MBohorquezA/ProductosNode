const { connectToDatabase, sql } = require('../config/dbconfig');

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { Name, Description, Price, Stock } = req.body;

    if (!Name || !Description || !Price || !Stock) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const pool = await connectToDatabase(); // Conectar a la BD
        await pool.request()
            .input('Id', sql.Int, id)
            .input('Name', sql.NVarChar(100), Name)
            .input('Description', sql.NVarChar(255), Description)
            .input('Price', sql.Decimal(18, 2), Price)
            .input('Stock', sql.Int, Stock)
            .execute('dbo.UpdateProduct');

        res.status(200).json({ message: 'Producto actualizado exitosamente' });
    } catch (err) {
        console.error('Error al actualizar producto:', err);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params; 

    if (!id) {
        return res.status(400).json({ message: 'El ID del producto es requerido' });
    }

    try {
        const pool = await connectToDatabase();
        await pool.request()
            .input('Id', sql.Int, id)
            .execute('dbo.DeleteProduct'); 

        res.status(200).json({ message: 'Producto eliminado exitosamente' });
    } catch (err) {
        console.error('Error al eliminar el producto:', err);
        res.status(500).json({ message: 'Error del servidor al eliminar el producto' });
    }
};