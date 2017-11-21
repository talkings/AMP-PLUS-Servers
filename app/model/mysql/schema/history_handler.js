/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('history_handler', {
    product_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    opponent: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'history_handler',
    // 不使用驼峰式命令规则，这样会在使用下划线分隔
    underscored: true
  });
};
