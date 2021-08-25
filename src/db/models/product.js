import sequelize from "../sequelize.js";
import s from "sequelize"

const{DataTypes} = s

const products = sequelize.define("products",{
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      readTimeValue: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      readTimeUnit: {
        type: DataTypes.STRING,
        allowNull: false,
      },

})




    export default products