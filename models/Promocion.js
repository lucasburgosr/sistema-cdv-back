const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Promocion = sequelize.define('Promocion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombrePromocion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productosSeleccionados: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  costoTotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  precioTotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  margenPromedio: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  },
  fechaCreacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
    sequelize,
    timestamps: false,
    tableName: 'promocion',
    modelName: 'Promocion',
});

module.exports = Promocion;
