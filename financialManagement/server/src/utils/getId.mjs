import { UUIDV4 } from "sequelize";

export const getId = () =>{
    return UUIDV4();
}