

import React, { useState } from 'react';

export const Counter: React.FC = () => {
	// state = {count:0}
	const [count, setCount] = useState<number>(0);

	return <>

		<p>{ count == 0 ? 'No hay plantas disponibles ': 'contamos con: ' }{ count }</p>
		<button onClick={()=> setCount(count+1)}>increment + 1</button> 
		<button onClick={()=> setCount(count-1)}>decrement - 1</button>
	</>
};