
const incomeSchema= require("../models/incomemodel")

exports.addIncome=async(req,res)=>{
   const{title,amount,type,description,date}=req.body
   const income = incomeSchema({
    title,
    amount,
    type,
    description,
    date
   })

   try {
    if(!title  || !type || !description || ! date){
        return res.status(400).json({message:"allfields are required"})
    }
    if(amount<=0 || !amount === 'number'){
        return res.status(400).json({message:"income should be only in positive"})
    }
    await income.save()
    res.status(200).json({message:"your income has been added!"})
   }
  catch (error) {
   
    res.status(500).json({message: 'server error!'})
   }
   console.log(income)
}

exports.getIncomes = async(req,res)=>{
    try{
        const incomes=await incomeSchema.find().sort({createdAt:-1})
        res.status(200).json(incomes)
    }catch(error){
        res.status(500).json({message: 'server error'})
    }
}

exports.deleteIncome = async(req,res)=>{
  const {id}= req.params;
  incomeSchema.findByIdAndDelete(id)
  .then((income)=>{
    res.status(200).json({message:"income deleted"})
  })
  .catch((err)=>{
    res.status(500).json({message:"server error"})
  })
}

