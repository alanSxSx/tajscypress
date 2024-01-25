'use client'
import useCounter from "./hooks/useCounter";

export default function Home() {

	const { count, handleClick } = useCounter();

	return (
		<>
			<div className='flex flex-col p-36'>
				<button className='bg-blue-300 w-16' onClick={handleClick}>Add+1</button>
				<span>{count}</span>
			</div>
		</>
	);
}


