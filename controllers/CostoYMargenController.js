const costoYMargenService = require('../services/CostoYMargenService');

class CostoYMargenController {
    async create(req, res) {
        try {
            const costoYMargen = await costoYMargenService.createCostoYMargen(req.body);
            res.status(201).json(costoYMargen);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const costoYMargen = await costoYMargenService.getCostoYMargenById(req.params.id);
            if (costoYMargen) {
                res.status(200).json(costoYMargen);
            } else {
                res.status(404).json({ message: 'Costo y margen no encontrados' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const costoYMargen = await costoYMargenService.updateCostoYMargen(req.params.id, req.body);
            res.status(200).json(costoYMargen);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateMultiple(req, res) {
        try {
            const result = await costoYMargenService.updateCostosYMargenesMultiples(req.body);
            if (result) {
                res.status(200).json({ message: 'Actualización masiva exitosa' });
            } else {
                res.status(400).json({ message: 'Error en la actualización masiva' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async completarPreciosMercadoLibre(req, res) {
        try {
            const result = await costoYMargenService.completarTablaMercadoLibre(req.body);

            console.log(result);
            
            if (result) {
                res.status(200).json({ message: result.message });
            } else {
                res.status(400).json({ message: result ? result.message : 'Error en la actualización' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    

    async delete(req, res) {
        try {
            await costoYMargenService.deleteCostoYMargen(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const costoYMargen = await costoYMargenService.getAllCostoYMargens();
            res.status(200).json(costoYMargen);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new CostoYMargenController();