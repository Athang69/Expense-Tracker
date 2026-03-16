const User = require("../models/User");
const xlsx = require("xlsx");
const Expense = require("../models/Expense");

exports.addExpense = async (req, res) =>{
    const userId = req.user.id;

    try{
        const {icon, category, amount, date} = req.body;
        if(!category || !amount || !date){
            return res.status(400).json({message:"All fields are required"})
        }

        const newExpense = new Expense({
            userId, 
            icon,
            category,
            amount,
            date: new Date(date)
        })

        await newExpense.save();
        res.status(200).json(newExpense);
    }
    catch(err){
        console.error('Error in addExpense:', err);
        res.status(500).json({message: "Server Error", error: err.message})
    }
}

exports.getAllExpenses = async (req, res) =>{
    const userId = req.user.id;
    try{
        const expense = await Expense.find({userId}).sort({date: -1});
        res.json(expense);
    }catch(err){
        res.status(500).json({message:"Server Error"})
    }
}

exports.deleteExpense = async (req, res) =>{
    try{
        await Expense.findByIdAndDelete(req.params.id);
        res.json({message:"Expense deleted successfully"})
    }catch(err){
        res.status(500).json({message:"Server Error"})
    }
}

exports.downloadExpenseExcel = async (req, res) =>{
    const userId = req.user.id;
    try{
        const expense = await Expense.find({userId}).sort({date: -1});

        const data = expense.map((item)=>({
            Category: item.category,
            Amount: item.amount,
            Date: new Date(item.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
        }));
        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(data);
        ws['!cols'] = [{ wch: 20 }, { wch: 15 }, { wch: 20 }];
        xlsx.utils.book_append_sheet(wb, ws, 'Expense')
        xlsx.writeFile(wb, 'expense-details.xlsx')
        res.download('expense-details.xlsx');
    }catch(err){
        res.status(500).json({message: "Server Error"})
    }
}