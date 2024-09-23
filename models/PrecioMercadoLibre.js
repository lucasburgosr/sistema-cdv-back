const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/database.js')
const Producto = require('./Producto.js')

class PrecioMercadoLibre extends Model { }

PrecioMercadoLibre.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    productoId: {
        type: DataTypes.INTEGER,
        references: {
            model: Producto,
            key: 'id'
        },
        allowNull: false,
        field: 'precio_mercadolibre',
    },
    criterioMinimo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'criterio_minimo',
    },
    precioMLIndividual: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'precio_individual',
    },
    precioMLCaja: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'precio_caja',
    },
    precioCompetencia: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'precio_competencia',
    },
    precioCuotas3Individual: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'precio_individual_3_cuotas'
    },
    precioCuotas6Individual: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'precio_individual_6_cuotas'
    },
    precioCuotas12Individual: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'precio_individual_12_cuotas'
    },
    precioCuotas3Caja: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'precio_caja_3_cuotas'
    },
    precioCuotas6Caja: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'precio_caja_6_cuotas'
    },
    precioCuotas12Caja: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'precio_caja_12_cuotas'
    },
    esMeLi: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: "es_mercado_libre"
    },
}, {
    sequelize,
    modelName: 'PrecioMercadoLibre',
    tableName: 'preciomercadolibre',
    timestamps: false
});

module.exports = PrecioMercadoLibre;