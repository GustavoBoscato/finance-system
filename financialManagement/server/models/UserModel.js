import { sequelize } from "../db/postgree";
import { Sequelize, DataTypes } from "sequelize";
    export const User = sequelize.define('user', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        photo: DataTypes.BLOB

    });
    