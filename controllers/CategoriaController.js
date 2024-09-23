const categoriaService = require('../services/CategoriaService');

class CategoriaController {
    async create(req, res) {
        try {
            const categoria = await categoriaService.createCategoria(req.body);
            res.status(201).json(categoria);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req, res) {
        try {
            const categoria = await categoriaService.getCategoriaById(req.params.id);
            if (categoria) {
                res.status(200).json(categoria);
            } else {
                res.status(404).json({ message: 'Categoría no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const categoria = await categoriaService.updateCategoria(req.params.id, req.body);
            res.status(200).json(categoria);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await categoriaService.deleteCategoria(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const categorias = await categoriaService.getAllCategorias();
            res.status(200).json(categorias);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new CategoriaController();
