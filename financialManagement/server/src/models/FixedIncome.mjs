import { DataTypes } from "sequelize";
import { sequelize } from "../db/postgree.mjs";
import { User } from "./UserModel.mjs";
export const FixedIncome = sequelize.define("fixedIncome", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: DataTypes.STRING,
  value: DataTypes.FLOAT,
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});
