const { Model, DataTypes } = require('sequelize')
const sequelize = require('../utils/database.js')

class Varietal extends Model { }

Varietal.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'nombre',
    }
}, {
    sequelize,
    modelName: 'Varietal',
    tableName: 'varietal',
    timestamps: false
})

module.exports = Varietal