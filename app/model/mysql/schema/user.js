/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type : DataTypes.STRING,
      unique : true,
      primaryKey: true,
      defaultValue : DataTypes.UUIDV4,
      comment : '唯一标识',
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    // created_at: {
    //   type: DataTypes.DATE,
    //   allowNull: false
    // },
    // updated_at: {
    //   type: DataTypes.DATE,
    //   allowNull: false
    // },
    json_str: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'user',
    // 不使用驼峰式命令规则，这样会在使用下划线分隔
    underscored: true,
  });
};
