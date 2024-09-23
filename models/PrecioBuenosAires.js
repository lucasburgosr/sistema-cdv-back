const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/database.js')
const Producto = require('./Producto.js')

class PrecioBuenosAires extends Model { }

PrecioBuenosAires.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    productoId: {
        type: DataTypes.INTEGER,
        references: {
            model: Producto,
            key: 'id',
        },
        allowNull: false,
        field: 'producto_id',
    },
    precioUnidad: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'precio_unidad'
    },
    precioCaja: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'precio_caja'
    },
    esBsAs: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'es_buenos_aires'
    }
}, {
    sequelize,
    modelName: 'PrecioBuenosAires',
    tableName: 'preciobuenosaires',
    timestamps: false
});

module.exports = PrecioBuenosAires;