import { sequelize } from "../db/postgree.mjs";
import { Sequelize, DataTypes } from "sequelize";
    export const User = sequelize.define('user', {
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        photo: DataTypes.BLOB,
         id: {
            type: DataTypes.UUIDV4,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
            }

    

    });
    