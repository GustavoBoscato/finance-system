import {FixedIncome } from '../models/FixedIncome.mjs';
import { Op } from "sequelize";


    export async function getNameFixedIncomeService (data) {
        const {name} = data;
        if (!name) {
            throw new Error('Error sintax')
        }
        const Income  = await FixedIncome.findAll({where: {name: {[Op.iLike]: `%${name}%`}}});

        if (Income.length === 0) {
            throw new Error('Income not found');
        }
        return Income;
    } 
    export async function getAllFixedIncomeService() {
        const Incomes = await FixedIncome.findAll();
        return Incomes
    }
    export async function createFixedIncomeService(data) {
        const {name, description, color, value} = data.body;
        if (!name || !value) {
            throw new Error('Name or value invalid');
            
        }
        const IncomeCreate = await FixedIncome.create({
            name: name,
            description: description,
            color: color,
            value: value,
            userId: data.user.id,
        });

        return IncomeCreate;

    }
    export async function updateFixedIncomeService(dataParams, dataBody) {
        console.log("PARAMS:", dataParams);
        console.log("BODY:", dataBody);
        const {id} = dataParams;
        const {name, description, value, color} = dataBody;
        
        if (!name || !value) {
            throw new Error('Name or value invalid');
        }

        const Income = await FixedIncome.findByPk(id);

        if (!Income) {
            throw new Error('Income not found.');
        }

        const IncomeUpdated = await FixedIncome.update({
            name: name,
            description: description,
            value: value,
            color: color
        }, {where: {id}});

        return `Income changed with sucessfully`;

    }
    export async function deleteFixedIncomeService(data) {
        const {id} = data;
        const Income = await FixedIncome.findByPk(id);

        if (!Income) {
            throw new Error('Income not found');
        }
        const IncomeDestroy = await FixedIncome.destroy({where: {id}});

        return `Income deleted with sucessfully`;
        
    }