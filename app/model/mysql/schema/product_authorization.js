/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_authorization', {
    id: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      comment: '项目唯一标识',
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
    tableName: 'product_authorization',
    // 不使用驼峰式命令规则，这样会在使用下划线分隔
    underscored: true
  });
};
