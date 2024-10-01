const promocionService = require('../services/PromocionService');

class PromocionController {
    async create(req, res) {
        try {
            const promocion = await promocionService.createPromocion(req.body);
            res.status(201).json(promocion);
        } catch (error) {
            console.log('ESTE ES EL ERROR: ', error)
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const promocion = await promocionService.getPromocionById(req.params.id);
            if (promocion) {
                res.status(200).json(promocion);
            } else {
                res.status(404).json({ message: 'promocion no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const promocion = await promocionService.updatePromocion(req.params.id, req.body);
            res.status(200).json(promocion);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await promocionService.deletePromocion(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const promociones = await promocionService.getAllPromocions();
            res.status(200).json(promociones);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PromocionController();