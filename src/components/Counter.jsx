import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className='w-4/12 mx-auto flex flex-col justify-center items-center bg-white rounded-lg shadow-md'>
      <h1 className='text-2xl mb-5 text-slate-900'>Counter</h1>
      <h2 className='text-lg text-slate-600 font-mono font-semibold p-5'>
        {count}
      </h2>
      <div className='flex'>
        <button
          onClick={increment}
          className='px-3 py-1 m-2 bg-yellow-300 hover:bg-yellow-500 rounded-lg text-center '
        >
          +
        </button>
        <button
          onClick={decrement}
          className='px-3 py-1 m-2 bg-yellow-300 hover:bg-yellow-500 rounded-lg text-center '
        >
          -
        </button>
        <button
          onClick={reset}
          className='px-3 py-1 m-2 bg-yellow-300 hover:bg-yellow-500 rounded-lg text-center '
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
