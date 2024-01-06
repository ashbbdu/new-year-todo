// zod related authentication in this file
const Zod = require("zod")
const createTodo = Zod.object({
    title : Zod.string(),
    description : Zod.string()
})

const updateTodo = Zod.object({
    id : Zod.string()
})

module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo
}