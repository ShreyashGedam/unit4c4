const Todo = require("../models/todo.model")

const express = require("express")

const router = express.Router()

const authintication = require("../middleware/authinticate")
const userModel = require("../models/user.model")
const req = require("express/lib/request")


router.post("" , authintication ,  async (req , res) =>
{
    req.body.userid = req.user._id

    // console.log(req.user)

    const todo = await Todo.create(req.body)

    return res.send(todo)
})

router.get("" , authintication, async (req , res) =>
{
   
    const todo = await Todo.find()

    return res.send(todo)
})

router.patch(":id" , authintication , async(req,res)=>
{

    try
    {
        const todo = await Todo.findByIdAndUpdate(req.params.id , req.body , {new: true})

        return res.send(todo)
    }
    catch(err)
    {
        return res.status(401).send({message : err.message})
    }
})

router.get(":id" , authintication , async(req,res)=>
{

    try
    {
        const todo = await Todo.findOne(req.params.id)

        return res.send(todo)
    }
    catch(err)
    {
        return res.status(401).send({message : err.message})
    }
})

router.delete(":id" , authintication , async(req,res)=>
{
    try
    {
        const todo = await Todo.findByIdAndDelete(req.params.id)

        return res.send(todo)
    }
    catch(err)
    {
        return res.status(401).send({message : err.message})
    }
})




module.exports = router