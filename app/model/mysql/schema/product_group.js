/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_group', {
    api_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      comment : '接口唯一标识'
    },
    api_name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '接口唯一标识'
    },
    api_describe: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '接口描述'
    },
    api_url: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '接口路径'
    },
    api_type: {
      type: DataTypes.STRING,
      allowNull: true,
      comment : '请求类型'
    },
    api_state: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment : '接口状态'
    },
    api_originator_id: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '创建人',
    },
    id: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '项目唯一标识',
    },
    product_version: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '项目版本号',
    },
    product_group: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '分组'
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
    tableName: 'product_group',
    // 不使用驼峰式命令规则，这样会在使用下划线分隔
    underscored: true
  });
};
