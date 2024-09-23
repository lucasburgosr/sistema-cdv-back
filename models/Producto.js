const { Model, DataTypes } = require('sequelize');
const sequelize = require('../utils/database.js')
const  Bodega  = require('../models/Bodega.js')
const Categoria = require('../models/Categoria.js')

class Producto extends Model { }

Producto.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    bodegaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'bodega_id',
        references: {
            model: Bodega,  // Hace referencia al modelo Bodega
            key: 'id',
        },
    },
    varietalId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'varietal_id'
    },
    categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'categoria_id',
        references: {
            model: Categoria,
            key: 'id'
        }
    },
    linea: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'linea',
    },
    codigoFabrica: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'codigo_fabrica',
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'descripcion',
    },
    unidades: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'unidades',
    },
    unidadDeMedida: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'unidad_de_medida',
    },
    esMinorista: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'es_minorista',
    },
    esMayorista: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'es_mayorista',
    },
    esDistri: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'es_distribuidora',
    },
    esSobremesa: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'es_sobremesa',
    },
    esMeLi: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'es_mercadolibre',
    },
    esBsAs: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'es_buenosaires'
    },
    stock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'stock'
    },
    comercializado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'comercializado',
    },
}, {
    sequelize,
    modelName: 'Producto',
    tableName: 'producto',
    timestamps: false,
});

module.exports = Producto;
