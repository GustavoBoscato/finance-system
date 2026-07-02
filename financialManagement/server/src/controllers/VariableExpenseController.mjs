
import { getAllVariableExpenseService, createVariableExpenseService, deleteVariableUpdateService, getNameVariableExpenseService, 
    updateVariableExpenseService, } from "../service/VariableExpenseServer.mjs"
export async function getNameVariableExpense(req, res) {
    
    try {
        const expense = await getNameVariableExpenseService(req.params);
        return res.status(200).json(expense)
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

export async function getAllVariableExpense(req, res) {
    try {
        const expenses = await getAllVariableExpenseService();
    
        return res.status(200).json(expenses)

    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

export async function createVariableExpense(req, res) {
   

    try {
        console.log(req.user)
        const ExpenseCreate = await createVariableExpenseService(req);
        
        return res.status(201).json({
            name: ExpenseCreate.name,
            description: ExpenseCreate.description,
            value: ExpenseCreate.value
        });

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    
}
export async function updateVariableExpense(req, res) {
    
    try {
        const expenseUpdated = await updateVariableExpenseService(req.params, req.body);
        return res.status(200).json(expenseUpdated);
           
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}
export async function deleteVariableExpense(req, res) {
    try {
        await deleteVariableUpdateService(req.params);
        return res.status(200).json({message: 'Deleted with sucessfully'})
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}