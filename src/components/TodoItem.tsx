import { useState } from "react";
import Modal from "./Modal";

interface TodoItemProps {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  description,
  completed,
}) => {
  const [modal, setModal] = useState(false);
  const handleChange = () => {
    console.log(
      "there should be an event handler, but this was not in the task"
    );
  };
  return (
    <>
      <li onClick={() => setModal(true)}>
        <span>{id}</span>
        <span>{title}</span>
        <span>{description}</span>
        <span>
          <input
            type="checkbox"
            title="checkbox"
            checked={completed}
            onChange={handleChange}
          />
        </span>
      </li>
      {modal && (
        <Modal
          title={title}
          description={description}
          completed={completed}
          setModal={setModal}
        />
      )}
    </>
  );
};

export default TodoItem;
