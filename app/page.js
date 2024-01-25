'use client'

import { useState } from 'react';

export default function Home() {

	const [count, setCount] = useState(0);

	function handleClick() {
    setCount(count + 2);
  }


  return (
		<>
		<div className='flex flex-col p-36'>
		<button  className='bg-blue-300 w-16'onClick={handleClick}>Add+1</button>
		<span>{count}</span>
		</div>
		</>
  );
}


