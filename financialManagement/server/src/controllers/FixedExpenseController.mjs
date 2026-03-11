import { FixedExpense } from "../models/FixedExpense.mjs";
import { Op } from "sequelize";
import { deleteFixedUpdateService, getNameFixedExpenseService, updateFixedExpenseService, } from "../service/FIxedExpenseService.mjs";
import { getAllFixedExpenseService, createFixedExpenseService } from "../service/FIxedExpenseService.mjs";
export async function getNameFixedExpense(req, res) {
    
    try {
        const expense = await getNameFixedExpenseService(req.params);
        return res.status(200).json(expense)
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

export async function getAllFixedExpense(req, res) {
    try {
        const expenses = await getAllFixedExpenseService();
    
        return res.status(200).json(expenses)

    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

export async function createFixedExpense(req, res) {
   

    try {
        const ExpenseCreate = await createFixedExpenseService(req.body);

        return res.status(201).json({
            name: ExpenseCreate.name,
            description: ExpenseCreate.description,
            value: ExpenseCreate.value
        });

    } catch (error) {
        return res.status(400).json({message: error.message});
    }
    
}
export async function updateFixedExpense(req, res) {
    
    try {
        const fixedUpdated = await updateFixedExpenseService(req.params, req.body);
        return res.status(200).json(fixedUpdated);
           
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}
export async function deleteFixedExpense(req, res) {
    try {
        await deleteFixedUpdateService(req.params);
        return res.status(204).json({message: 'Deleted with sucessfully'})
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}