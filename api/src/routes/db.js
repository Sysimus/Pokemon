const {Sequelize} = require("sequelize");
const { DataTypes } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`,
    {
      logging: false, 
      native: false, 
    }
  );

  const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  
  sequelize.define(
    "pokemon",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        defaultvalue:
          "https://i.postimg.cc/Qdwz52bZ/defaultimage-1.jpg",
        allowNull: false,
      },
      health: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      attack: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      defense: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      speed: {
        type: DataTypes.STRING,
      },
      height: {
        type: DataTypes.STRING,
      },
      weight: {
        type: DataTypes.STRING,
      },
      created: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};

  module.exports = {
    Sequelize
  }