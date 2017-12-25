/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_info', {
    id: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      comment: '项目唯一标识',
    },
    version: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    product_describe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    originator_userid: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    originator_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    swigger: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    tableName: 'product_info',
    // 不使用驼峰式命令规则，这样会在使用下划线分隔
    underscored: true
  });
};
