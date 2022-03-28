const express = require("express")

const app = express()

const {register , login } = require("./controllers/auth.controller")

const todocontroller = require("./controllers/todo.controller")

app.use(express.json())

app.use("/register",register)

app.use("/login",login)

app.use("todo",todocontroller)

module.exports = app