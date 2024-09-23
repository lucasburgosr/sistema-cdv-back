const varietalService = require('../services/VarietalService');

class VarietalController {
    async create(req, res) {
        try {
            const varietal = await varietalService.createVarietal(req.body);
            res.status(201).json(varietal);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const varietal = await varietalService.getVarietalById(req.params.id);
            if (varietal) {
                res.status(200).json(varietal);
            } else {
                res.status(404).json({ message: 'Varietal no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const varietal = await varietalService.updateVarietal(req.params.id, req.body);
            res.status(200).json(varietal);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await varietalService.deleteVarietal(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const varietales = await varietalService.getAllVarietals();
            res.status(200).json(varietales);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new VarietalController();
