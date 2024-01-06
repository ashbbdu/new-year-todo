const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
