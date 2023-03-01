import { useState } from 'react';
import { useAppDispatch } from './hook';

import { addTodo } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

import './App.css';


function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [emptyTitle, setEmptyTitle] = useState(false);
  const [emptyDescription, setEmptyDescription] = useState(false);
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if  (!title.trim().length) {setEmptyTitle(true); return} else{setEmptyTitle(false);}
    if (!description.trim().length) {setEmptyDescription(true); return} else{setEmptyDescription(false);}
    // if (title.trim().length && description.trim().length) {
      dispatch(addTodo([title, description]));
      setTitle('');
      setDescription('');
      setEmptyTitle(false);
      setEmptyDescription(false);
    // }
  }

  return (
    <div className='App'>
      <NewTodoForm
        emptyDescription={emptyDescription}
        emptyTitle={emptyTitle}
        title={title}
        description={description}
        updateTitle={setTitle}
        updateDescription={setDescription}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
}

export default App;

