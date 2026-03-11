import { FixedExpense } from "../models/FixedExpense.mjs";
import { Op } from "sequelize";


    export async function getNameFixedExpenseService (data) {
        const {name} = data;
        if (!name) {
            throw new Error('Error sintax')
        }
        const expense  = await FixedExpense.findAll({where: {name: {[Op.iLike]: `%${name}%`}}});

        if (expense.length === 0) {
            throw new Error('Expense not found');
        }
        return expense;
    } 
    export async function getAllFixedExpenseService() {
        const expenses = await FixedExpense.findAll();
        if (expenses.length === 0) {
            throw new Error('Expense not found')
        };
        return expenses
    }
    export async function createFixedExpenseService(data) {
        const {name, description, color, value} = data;
        if (!name || !value) {
            throw new Error('Name or value invalid');
            
        }
        const ExpenseCreate = await FixedExpense.create({
            name: name,
            description: description,
            color: color,
            value: value
        });

        return ExpenseCreate;

    }
    export async function updateFixedExpenseService(dataParams, dataBody) {
        const {id} = dataParams;
        const {name, description, value, color} = dataBody;

        if (!name || !value) {
            throw new Error('Name or value invalid');
        }

        const expense = await FixedExpense.findByPk(id);

        if (!expense) {
            throw new Error('expense not found.');
        }

        const expenseUpdated = await FixedExpense.update({
            name: name,
            description: description,
            value: value,
            color: color
        }, {where: {id}});

        return expenseUpdated;

    }
    export async function deleteFixedUpdateService(data) {
        const {id} = data;
        const expense = await FixedExpense.findByPk(id);

        if (!expense) {
            throw new Error('Expense not found');
        }
        const expenseDestroy = await FixedExpense.destroy({where: {id}});

        return expenseDestroy;
        
    }