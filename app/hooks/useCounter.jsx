'use client'
import { useState } from 'react';


export default function useCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return { count, handleClick };
}