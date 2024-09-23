const parametrosMeLiService = require('../services/ParametrosMeLiService');

class ParametrosMeLiController {
    async create(req, res) {
        try {
            const parametrosMeLi = await parametrosMeLiService.createParametrosMeLi(req.body);
            res.status(201).json(parametrosMeLi);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const parametrosMeLi = await parametrosMeLiService.getParametrosMeLiById(req.params.id);
            if (parametrosMeLi) {
                res.status(200).json(parametrosMeLi);
            } else {
                res.status(404).json({ message: 'Precio no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const parametrosMeLi = await parametrosMeLiService.updateParametrosMeLi(req.params.id, req.body);
            res.status(200).json(parametrosMeLi);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await parametrosMeLiService.deleteParametrosMeLi(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const parametrosMeLi = await parametrosMeLiService.getAllParametrosMeLi();
            res.status(200).json(parametrosMeLi);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ParametrosMeLiController();