/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_info', {
    product_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    product_describe: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    originator_userid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    originator_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    master_userid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    developer_userid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    observer_userid: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'product_info'
  });
};
