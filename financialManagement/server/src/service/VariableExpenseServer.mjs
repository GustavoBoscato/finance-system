import { VariableExpense } from '../models/VariableExpenseModel.mjs';
import { Op } from "sequelize";


    export async function getNameVariableExpenseService (data) {
        const {name} = data;
        if (!name) {
            throw new Error('Error sintax')
        }
        const expense  = await VariableExpense.findAll({where: {name: {[Op.iLike]: `%${name}%`}}});

        if (expense.length === 0) {
            throw new Error('Expense not found');
        }
        return expense;
    } 
    export async function getAllVariableExpenseService() {
        const expenses = await VariableExpense.findAll();
        if (expenses.length === 0) {
            throw new Error('Expense not found')
        };
        return expenses
    }
    export async function createVariableExpenseService(data) {
        const {name, description, color, value} = data;
        if (!name || !value) {
            throw new Error('Name or value invalid');
            
        }
        const ExpenseCreate = await VariableExpense.create({
            name: name,
            description: description,
            color: color,
            value: value
        });

        return ExpenseCreate;

    }
    export async function updateVariableExpenseService(dataParams, dataBody) {
        const {id} = dataParams;
        const {name, description, value, color} = dataBody;

        if (!name || !value) {
            throw new Error('Name or value invalid');
        }

        const expense = await VariableExpense.findByPk(id);

        if (!expense) {
            throw new Error('expense not found.');
        }

        const expenseUpdated = await VariableExpense.update({
            name: name,
            description: description,
            value: value,
            color: color
        }, {where: {id}});

        return `Expense changed with sucessfully`;

    }
    export async function deleteVariableUpdateService(data) {
        const {id} = data;
        const expense = await VariableExpense.findByPk(id);

        if (!expense) {
            throw new Error('Expense not found');
        }
        const expenseDestroy = await VariableExpense.destroy({where: {id}});

        return expenseDestroy;
        
    }