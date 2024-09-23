const precioMinoristaService = require('../services/PrecioMinoristaService');

class PrecioMinoristaController {
    async create(req, res) {
        try {
            const precioMinorista = await precioMinoristaService.createPrecioMinorista(req.body);
            res.status(201).json(precioMinorista);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const precioMinorista = await precioMinoristaService.getPrecioMinoristaById(req.params.id);
            if (precioMinorista) {
                res.status(200).json(precioMinorista);
            } else {
                res.status(404).json({ message: 'Precio no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const precioMinorista = await precioMinoristaService.updatePrecioMinorista(req.params.id, req.body);
            res.status(200).json(precioMinorista);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await precioMinoristaService.deletePrecioMinorista(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const preciosMinorista = await precioMinoristaService.getAllPrecioMinoristas();
            res.status(200).json(preciosMinorista);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PrecioMinoristaController();