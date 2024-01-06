import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
import axios from "axios"
import {useEffect, useState}  from "react"

function App() {
  const [allTodos , setAllTodos] = useState([])
  const getAllTodos = async () => {
      const todos = await axios.get("http://localhost:3000/todo")
      setAllTodos(todos.data.todos)
      // console.log(todos);
  }
  useEffect(() => {
      getAllTodos()
  },[])
  return (
    <>
      <CreateTodo getAllTodos={getAllTodos} />
      <Todos todos={allTodos} />
    </>
  );
}

export default App;
