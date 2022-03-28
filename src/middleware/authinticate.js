var jwt = require('jsonwebtoken');

const verifytoken =(token) =>
{
    return new Promise((resolve , reject) =>
    {
        jwt.verify(token, "key" , function(err, decoded) {
            if(err)
            {
                return reject(err)
            }
            else{
                return resolve(decoded)
            }
          });
    })
}

const authintication = async (req,res,next) =>
{
    try
    {
        if(!req.headers.authorization)
        {
            return res.send("Authiontication token not found or incorrect")
        }
        if(!req.headers.authorization.startsWith("Bearer "))
        {
           return res.send("Authiontication token not found or incorrect")
        }
    
        const token = req.headers.authorization.trim().split(" ")[1]

        let decoded
        try
        {
            decoded = await verifytoken(token)
        }
        catch(err)
        {
            return res.send({message : err.message})
        }

        req.user = decoded.user
        console.log(decoded)
        next()
    }
    catch(err)
    {
        return res.send({message : err.message})
    }
}

module.exports = authintication

