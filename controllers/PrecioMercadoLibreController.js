const precioMercadoLibreService = require('../services/PrecioMercadoLibreService');

class PrecioMercadoLibreController {
    async create(req, res) {
        try {
            const precioMercadoLibre = await precioMercadoLibreService.createPrecioMercadoLibre(req.body);
            res.status(201).json(precioMercadoLibre);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const precioMercadoLibre = await precioMercadoLibreService.getPrecioMercadoLibreById(req.params.id);
            if (precioMercadoLibre) {
                res.status(200).json(precioMercadoLibre);
            } else {
                res.status(404).json({ message: 'Precio no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const precioMercadoLibre = await precioMercadoLibreService.updatePrecioMercadoLibre(req.params.id, req.body);
            res.status(200).json(precioMercadoLibre);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await precioMercadoLibreService.deletePrecioMercadoLibre(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const preciosMercadoLibre = await precioMercadoLibreService.getAllPrecioMercadoLibres();
            res.status(200).json(preciosMercadoLibre);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PrecioMercadoLibreController();