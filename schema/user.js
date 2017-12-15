/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    login_token: {
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
    },
    json_str: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'user'
  });
};
