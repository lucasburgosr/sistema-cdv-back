const productoService = require('../services/ProductoService');

class ProductoController {
    async create(req, res) {
        try {
            const producto = await productoService.createProducto(req.body);
            res.status(201).json(producto);
        } catch (error) {
            console.error('Error al crear producto:', error); // Esto mostrará más detalles en el log
        res.status(500).json({ message: 'Error al crear el producto', error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const producto = await productoService.getProductoById(req.params.id);
            if (producto) {
                res.status(200).json(producto);
            } else {
                res.status(404).json({ message: 'Producto no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const producto = await productoService.updateProducto(req.params.id, req.body);
            res.status(200).json(producto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await productoService.deleteProducto(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const productos = await productoService.getAllProductos();
            res.status(200).json(productos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ProductoController();
