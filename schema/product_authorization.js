/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_authorization', {
    userid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    master: {
      type: DataTypes.INTEGER(255),
      allowNull: true
    },
    developer: {
      type: DataTypes.INTEGER(255),
      allowNull: true
    },
    observer: {
      type: DataTypes.INTEGER(255),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'product_authorization'
  });
};
