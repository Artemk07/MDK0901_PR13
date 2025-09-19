import { sequelize } from "../sequelize/Sequelize.js";
import { DataTypes } from "sequelize";

const User = sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
    },
}, {});
export default User;