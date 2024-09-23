const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/database.js')

class ParametrosMeLi extends Model {}

ParametrosMeLi.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        defaultValue: 1,
        allowNull: false
    },
    margenLimite: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'margen_limite',
    },
    precioLimite1: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'precio_limite_1',
    },
    precioLimite2: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'precio_limite_2',
    },
    costoEnvio: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'costo_envio'
    },
    cf1: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'cf_1',
    },
    cf2: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'cf_2',
    },
    tasa3: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'tasa_3_cuotas',
    },
    tasa6: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'tasa_6_cuotas',
    },
    tasa12: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: 'tasa_12_cuotas',
    }
}, {
    sequelize,
    modelName: 'ParametrosMeLi',
    tableName: 'parametrosml',
    timestamps: false,
});

module.exports = ParametrosMeLi;