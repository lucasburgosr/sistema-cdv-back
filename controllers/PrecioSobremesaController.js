const precioSobremesaService = require('../services/PrecioSobremesaService');

class PrecioSobremesaController {
    async create(req, res) {
        try {
            const precioSobremesa = await precioSobremesaService.createPrecioSobremesa(req.body);
            res.status(201).json(precioSobremesa);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const precioSobremesa = await precioSobremesaService.getPrecioSobremesaById(req.params.id);
            if (precioSobremesa) {
                res.status(200).json(precioSobremesa);
            } else {
                res.status(404).json({ message: 'Precio no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const precioSobremesa = await precioSobremesaService.updatePrecioSobremesa(req.params.id, req.body);
            res.status(200).json(precioSobremesa);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await precioSobremesaService.deletePrecioSobremesa(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const preciosSobremesa = await precioSobremesaService.getAllPrecioSobremesas;
            res.status(200).json(preciosSobremesa);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PrecioSobremesaController();