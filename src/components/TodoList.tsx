import { useAppSelector } from "../hook";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.list);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "50px",
          justifyContent: "center",
          marginTop: "70px",
          backgroundColor:'lightgrey'
        }}
      >
        <span>ID</span>
        <span>TITLE</span>
        <span>DESCRIPTION</span>
        <span>STATUS</span>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
