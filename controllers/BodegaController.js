const bodegaService = require('../services/BodegaService');

class BodegaController {
    async create(req, res) {
        try {
            const bodega = await bodegaService.createBodega(req.body);
            res.status(201).json(bodega);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const bodega = await bodegaService.getBodegaById(req.params.id);
            if (bodega) {
                res.status(200).json(bodega);
            } else {
                res.status(404).json({ message: 'Bodega no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const bodega = await bodegaService.updateBodega(req.params.id, req.body);
            res.status(200).json(bodega);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await bodegaService.deleteBodega(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const bodegas = await bodegaService.getAllBodegas();
            res.status(200).json(bodegas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new BodegaController();