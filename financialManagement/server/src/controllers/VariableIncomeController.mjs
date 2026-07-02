
import { getAllVariableIncomeService, createVariableIncomeService, deleteVariableIncomeService, getNameVariableIncomeService, 
    updateVariableIncomeService, } from "../service/VariableIncomeService.mjs"
export async function getNameVariableIncome(req, res) {
    
    try {
        const Income = await getNameVariableIncomeService(req.params);
        return res.status(200).json(Income)
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

export async function getAllVariableIncome(req, res) {
    try {
        const Incomes = await getAllVariableIncomeService();
    
        return res.status(200).json(Incomes)

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export async function createVariableIncome(req, res) {
   

    try {
        const IncomeCreate = await createVariableIncomeService(req);

        return res.status(201).json({
            name: IncomeCreate.name,
            description: IncomeCreate.description,
            value: IncomeCreate.value
        });

    } catch (error) {
        return res.status(400).json({message: error.message});
    }
    
}
export async function updateVariableIncome(req, res) {
    
    try {
        const IncomeUpdated = await IncomeService(req.params, req.body);
        return res.status(200).json(IncomeUpdated);
           
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}
export async function deleteVariableIncome(req, res) {
    try {
        await deleteVariableIncomeService(req.params);
        return res.status(200).json({message: 'Deleted with sucessfully'})
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}