import React from 'react';
import Todo from './Todo';

const TodoBox = ({ todos }) => {
  return (
    <div className='w-4/12 mx-auto mt-10 bg-green-200 rounded-lg shadow-lg border-2 h-96 overflow-y-scroll'>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoBox;
