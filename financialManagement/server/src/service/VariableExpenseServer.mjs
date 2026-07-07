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
        return expenses
    }
    export async function createVariableExpenseService(data) {
        const {name, description, color, value, date} = data.body;
        if (!name || !value) {
            throw new Error('Name or value invalid');
            
        }
        console.log(data.user.id)
        const ExpenseCreate = await VariableExpense.create({
            name: name,
            description: description,
            color: color,
            value: value,
            userId: data.user.id,
            date: date
        });

        return ExpenseCreate;

    }
    export async function updateVariableExpenseService(dataParams, dataBody) {
        const {id} = dataParams;
        const {name, description, value, color, date} = dataBody;

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
            color: color,
            date: date
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