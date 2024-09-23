const precioBuenosAiresService = require('../services/PrecioBuenosAiresService');

class PrecioBuenosAiresController {
    async create(req, res) {
        try {
            const precioBuenosAires = await precioBuenosAiresService.createPrecioDistribucion(req.body);
            res.status(201).json(precioBuenosAires);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const precioBuenosAires = await precioBuenosAiresService.getPrecioDistribucionById(req.params.id);
            if (precioBuenosAires) {
                res.status(200).json(precioBuenosAires);
            } else {
                res.status(404).json({ message: 'Precio no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const precioBuenosAires = await precioBuenosAiresService.updatePrecioDistribucion(req.params.id, req.body);
            res.status(200).json(precioBuenosAires);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await precioBuenosAiresService.deletePrecioDistribucion(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const precioBuenosAires = await precioBuenosAiresService.getAllPrecioDistribucions();
            res.status(200).json(precioBuenosAires);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PrecioBuenosAiresController();