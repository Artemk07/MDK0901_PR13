import { sequelize } from "../sequelize/Sequelize.js";
import { DataTypes } from "sequelize";

const Role = sequelize.define('Role', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    roleName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    level:{
        type: DataTypes.INTEGER,
    }
}, {});

export default Role;