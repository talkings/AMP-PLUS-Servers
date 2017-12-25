/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_info', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    version: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    product_describe: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    originator_userid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    originator_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    swigger: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'product_info'
  });
};
