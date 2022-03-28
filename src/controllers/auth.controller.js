const User = require("../models/user.model")

var jwt = require('jsonwebtoken');

const createtoken = (user) =>
{
    var token = jwt.sign({ user}, 'key');
    return token
}

const register = async (req , res) =>
{
    try
    {
        let user = await User.findOne({email : req.body.email})

        if(user)
        {
            return res.send("User already exist")
        }

        user = await User.create(req.body)

        const token = createtoken(user)

        res.send({user,token})
    }
    catch(err)
    {
        return res.send({message : err.message})
    }   
}

const login = async (req, res) =>
{
    const pass = await User.findOne({password : req.body.password})

    if(!pass)
    {
        return res.send("Wrong password")
    }
    
    const email = await User.findOne({email : req.body.email})

    if(!email)
    {
        return res.send("Wrong email")
    }

    const token = createtoken(email)

    return  res.send({email,token})

}

module.exports = {register,login}