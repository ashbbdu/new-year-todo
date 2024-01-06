import axios from "axios"
import { useState } from "react"

const CreateTodo = ({getAllTodos}) => {
    const [title , setTitle] = useState("")
    const [description , setDescription] = useState("")
    const submitHandler = async (e) => {
        e.preventDefault()
        const create = await axios.post("http://localhost:3000/todo" , {
            title,
            description
        })
    
        if(create.status) {
            getAllTodos();
            setTitle("")
            setDescription("")
        }
    } 
  return (
    <div>
        <form onSubmit={submitHandler}> 
            <input type="text" placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} required /> <br />
            <input type="text" placeholder='Enter Description' value={description} onChange={(e) => setDescription(e.target.value)} required /><br />
            <button type="submit">Add a todo</button>
        </form>
    </div>
  )
}

export default CreateTodo