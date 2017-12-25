/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('history_handler', {
    product_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
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
    tableName: 'history_handler'
  });
};
