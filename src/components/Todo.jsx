import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div className='w-9/12 bg-white rounded-md p-3 mt-3 mx-auto text-slate-800'>
      {todo.name}
    </div>
  );
};

export default Todo;
