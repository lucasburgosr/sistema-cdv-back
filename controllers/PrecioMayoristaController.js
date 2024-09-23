const precioMayoristaService = require('../services/PrecioMayoristaService');

class PrecioMayoristaController {
    async create(req, res) {
        try {
            const precioMayorista = await precioMayoristaService.createPrecioMayorista(req.body);
            res.status(201).json(precioMayorista);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const precioMayorista = await precioMayoristaService.getPrecioMayoristaById(req.params.id);
            if (precioMayorista) {
                res.status(200).json(precioMayorista);
            } else {
                res.status(404).json({ message: 'Precio no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const precioMayorista = await precioMayoristaService.updatePrecioMayorista(req.params.id, req.body);
            res.status(200).json(precioMayorista);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await precioMayoristaService.deletePrecioMayorista(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const preciosMayorista = await precioMayoristaService.getAllPrecioMayoristas();
            res.status(200).json(preciosMayorista);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PrecioMayoristaController();