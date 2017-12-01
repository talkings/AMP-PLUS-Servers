/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_group', {
    product_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    product_version: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    product_group: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    api_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    api_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    api_describe: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    api_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    api_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    api_state: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'product_group'
  });
};
