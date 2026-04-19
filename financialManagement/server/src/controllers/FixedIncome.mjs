
import { createFixedIncomeService, deleteFixedIncomeService, updateFixedIncomeService, getAllFixedIncomeService, getNameFixedIncomeService } from "../service/FixedIncomeService.mjs";
export async function getNameFixedIncome(req, res) {
    
    try {
        const income = await getNameFixedIncomeService(req.params);
        return res.status(200).json(income)
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

export async function getAllFixedIncome(req, res) {
    try {
        const Incomes = await getAllFixedIncomeService();
    
        return res.status(200).json(Incomes)

    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

export async function createFixedIncome(req, res) {
   

    try {
        const IncomesCreate = await createFixedIncomeService(req.body);

        return res.status(201).json({
            name: IncomesCreate.name,
            description: IncomesCreate.description,
            value: IncomesCreate.value
        });

    } catch (error) {
        return res.status(400).json({message: error.message});
    }
    
}
export async function updateFixedIncome(req, res) {
    
    try {
        const fixedUpdated = await updateFixedIncomeService(req.params, req.body);
        
        return res.status(200).json(fixedUpdated);
           
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}
export async function deleteFixedIncome(req, res) {
    try {
        await deleteFixedIncomeService(req.params);
        return res.status(204).json({message: 'Deleted with sucessfully'})
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}