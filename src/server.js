
const connect = require("./congigs/db")

const app = require("./index")

app.listen(5000, async (req , res) =>
{
    await connect()

    console.log("conncting to server")
})