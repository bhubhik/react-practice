import { useEffect, useState, useRef } from 'react';
import TodoBox from './TodoBox';
import { v4 as uuidv4 } from 'uuid';

const Body = () => {
  const [todos, setTodos] = useState([]);
  const inputText = useRef();

  useEffect(() => {}, []);

  const addTodo = (e) => {
    const name = inputText.current.value;
    if (name !== '') {
      setTodos((prevTodos) => [...prevTodos, { id: uuidv4(), name: name }]);
      inputText.current.value = null;
      console.log(todos);
    }
    e.preventDefault();
  };

  return (
    <div className=' h-screen'>
      <h1 className='font-semibold font-mono text-blue-500 text-5xl text-center'>
        Todo app
      </h1>
      <div className=' flex flex-col justify-center items-center mt-20'>
        <input
          type='text'
          ref={inputText}
          placeholder='Type your todo'
          className='w-4/12 border-2 border-green-400 rounded-md py-2 px-1 mb-5 '
        />
        <button
          onClick={addTodo}
          className=' w-fit rounded-lg bg-green-400 px-3 text-white py-2'
        >
          Add
        </button>
      </div>
      <TodoBox todos={todos} />
    </div>
  );
};

export default Body;
