import { sequelize } from "../db/postgree.mjs";
import { Sequelize, DataTypes } from "sequelize";
    export const User = sequelize.define('user', {
        name: {
                type: DataTypes.STRING,
                allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: DataTypes.STRING,
        photo: DataTypes.BLOB,
         id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
            }

    

    });
    