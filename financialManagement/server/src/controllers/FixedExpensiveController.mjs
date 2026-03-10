import { FixedExpensive } from "../models/FixedExpensive.mjs";
import { Op } from "sequelize";
export async function getNameFixedExpensive(req, res) {
    const {name} = req.params;
    try {
        if (!name) {
            return res.status(400).json({message: 'Error sintax'})
        }
        const expense  = await FixedExpensive.findAll({where: {name: {[Op.iLike]: `%${name}%`}}});

        if (expense.length === 0) {
            return res.status(404).json({message: 'Expensive not found.'});
        }
        return res.status(200).json(expense)
    } catch (error) {
        return res.status(500).json({message: 'Error internal server'});
    }
}

export async function getAllFixedExpensive(req, res) {
    try {
        const expenses = await FixedExpensive.findAll();
        if (expenses.length === 0) {
            return res.status(404).json({message: 'Expensive not found'})
        };
        return res.status(200).json(expenses)

    } catch (error) {
        return res.status(500).json({message: 'Error internal server'});
    }
}

export async function createFixedExpensive(req, res) {
    const {name, description, color, value} = req.body;

    try {
        if (!name || !value) {
            return res.status(400).json({message: 'Name or value invalid'})
        }
        const ExpenseCreate = await FixedExpensive.create({
            name: name,
            description: description,
            color: color,
            value: value
        });

        return res.status(201).json({
            name: ExpenseCreate.name,
            description: ExpenseCreate.description,
            value: ExpenseCreate.value
        });

    } catch (error) {
        return res.status(500).json({message: 'Error internal server'});
    }
    
}