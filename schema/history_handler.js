/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('history_handler', {
    product_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    userid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    opponent: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'history_handler'
  });
};
