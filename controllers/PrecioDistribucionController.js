const precioDistribucionService = require('../services/PrecioDistribucionService');

class PrecioDistribucionController {
    async create(req, res) {
        try {
            const precioDistribucion = await precioDistribucionService.createPrecioDistribucion(req.body);
            res.status(201).json(precioDistribucion);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const precioDistribucion = await precioDistribucionService.getPrecioDistribucionById(req.params.id);
            if (precioDistribucion) {
                res.status(200).json(precioDistribucion);
            } else {
                res.status(404).json({ message: 'Precio no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const precioDistribucion = await precioDistribucionService.updatePrecioDistribucion(req.params.id, req.body);
            res.status(200).json(precioDistribucion);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await precioDistribucionService.deletePrecioDistribucion(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const precioDistribucion = await precioDistribucionService.getAllPrecioDistribucions();
            res.status(200).json(precioDistribucion);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PrecioDistribucionController();