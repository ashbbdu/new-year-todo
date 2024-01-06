const express = require("express");
const mongoose = require("mongoose")
const { createTodo, updateTodo } = require("./types");
const cors = require("cors")
const Todo = require("./db")
const app = express()
const PORT = 3000;

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/todoAppNew')


app.post("/todo" , async (req, res) => {
  const createPayload =  req.body
  const parsePayload = createTodo.safeParse(createPayload)
  if(!parsePayload.success) {
    res.status(411).json({
        msg : "Invalid inputs"
    })
  } 

//   put in mongo
 const todo = await Todo.create({
    title : createPayload.title,
    description : createPayload.description,
    completed : false
 })

 res.status(200).json({
    msg : "Todo created successfully",
    todo
 })

})

app.get("/todo" , async (req, res) => {
      const todos = await Todo.find()

      res.status(200).json({
        msg : "Todos fetched successfully",
        todos
      })
})

app.put("/completed" , async (req, res) => {
  console.log(req.body , "body");
        const updatePayload  = req.body;
        const parsePayload = updateTodo.safeParse(updatePayload)
        if(!parsePayload.success) {
            res.status(411).json({
                msg : "Invalid inputs"
            })
          } 
        
        //   put in mongo
        const markComplete = await Todo.findByIdAndUpdate({
            _id : req.body.id,
        } , {completed  :true})

        res.status(200).json({
            msg : "Todo marked as done"
        })
})  

app.delete("/todo" , (req, res) => {
        
})

app.get("/" , (req , res) => {
    res.send("App is up and running")
})

app.listen(PORT , () => {
    console.log(`App is running on port ${PORT}`);
})