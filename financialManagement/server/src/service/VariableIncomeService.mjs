import { VariableIncome } from '../models/VariableIncome.mjs';
import { Op } from "sequelize";


    export async function getNameVariableIncomeService (data) {
        const {name} = data;
        if (!name) {
            throw new Error('Error sintax')
        }
        const income  = await VariableIncome.findAll({where: {name: {[Op.iLike]: `%${name}%`}}});

        if (income.length === 0) {
            throw new Error('Income not found');
        }
        return income;
    } 
    export async function getAllVariableIncomeService() {
        const Incomes = await VariableIncome.findAll();
        if (expenses.length === 0) {
            throw new Error('Income not found')
        };
        return Incomes
    }
    export async function createVariableIncomeService(data) {
        const {name, description, color, value} = data;
        if (!name || !value) {
            throw new Error('Name or value invalid');
            
        }
        const IncomeCreate = await VariableIncome.create({
            name: name,
            description: description,
            color: color,
            value: value
        });

        return IncomeCreate;

    }
    export async function updateVariableIncomeService(dataParams, dataBody) {
        const {id} = dataParams;
        const {name, description, value, color} = dataBody;

        if (!name || !value) {
            throw new Error('Name or value invalid');
        }

        const income = await VariableIncome.findByPk(id);

        if (!income) {
            throw new Error('Income not found.');
        }

        const IncomeUpdated = await VariableIncome.update({
            name: name,
            description: description,
            value: value,
            color: color
        }, {where: {id}});

        return `Income changed with sucessfully`;

    }
    export async function deleteVariableIncomeService(data) {
        const {id} = data;
        const Income = await VariableIncome.findByPk(id);

        if (!Income) {
            throw new Error('Income not found');
        }
        const IncomeDestroy = await VariableIncome.destroy({where: {id}});

        return IncomeDestroy;
        
    }