import { useState } from "react"

const Counter = () => {

  const [count, setCount] = useState(50);
  
  const increment = () => setCount((prev => prev+1));
  // const decrement = () => setCount(count-1);
  // const decrement = () => {
  //   if (count > 0) {
  //     setCount(prev => prev-1)
  //   }
  // };
  const decrement = () => {
    setCount(prev => {
      if(prev > 0) {
        return prev -1;
      }
      return 0;
    })
  };
  const reset = () => {
    setCount(0)
  }

  const decrement40 = () => {
    for(let i=0; i<40; i++) {
      decrement();
      console.log(i);
    }
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement40}>Increment 40</button>
    </div>
  )
}

export default Counter

// strict mode
// useState
// useState: using callback function in set function, difference