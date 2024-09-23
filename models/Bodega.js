const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/database.js')

class Bodega extends Model { }

Bodega.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    porcentajeDescuento: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'porcentaje_descuento'
    },
    porcentajeDescuentosProntoPago: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'porcentaje_descuento_prontopago'
    },
    accionTipica: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'accion_tipica'
    },
    margenMin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'margen_minorista'
    },
    margenMay: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'margen_mayorista'
    },
    margenDepo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'margen_deposito'
    },
    margenDistri: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'margen_distribuidora'
    },
    costoConIva: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'costo_con_iva'
    },
    costoSinIva: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'costo_sin_iva'
    },
    proveedor: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'proveedor',
    }

}, {
    sequelize,
    modelName: 'Bodega',
    tableName: 'bodega',
    timestamps: false,
});

module.exports = Bodega;