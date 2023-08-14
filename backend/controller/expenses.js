const ExpenseSchema= require("../models/expensemodel")

exports.addExpense=async(req,res)=>{
   const{title,amount,type,description,date}=req.body
   const expense = ExpenseSchema({
    title,
    amount,
    type,
    description,
    date
   })
   try {
    if(!title  || !type || !description || ! date || !amount){
        return res.status(400).json({message:"all fields are required"})
    }
    if(amount<=0 || !amount === 'number'){
        return res.status(400).json({message:"expense should be only in positive"})
    }
    await income.save()
    res.status(200).json({message:"your expense has been added!"})
   }
  catch (error) {
   
    res.status(500).json({message: 'server error!'})
   }
   console.log(income)
}

exports.getExpense = async(req,res)=>{
    try{
        const incomes=await ExpenseSchema.find().sort({createdAt:-1})
        res.status(200).json(incomes)
    }catch(error){
        res.status(500).json({message: 'server error'})
    }
}

exports.deleteExpense = async(req,res)=>{
  const {id}= req.params;
  ExpenseSchema.findByIdAndDelete(id)
  .then((income)=>{
    res.status(200).json({message:" deleted"})
  })
  .catch((err)=>{
    res.status(500).json({message:"server error"})
  })
}

