import { useState } from 'react';
import './App.css'
// import './carousel/carousel.css'
import { useCounter } from './TypeScriptPractice/counter'

function App() {
  const { count, increment, decrement, reset } = useCounter({
    initialValue: 10,
    step: 2
  })
  console.log("inside of:", count);
  // type AddFn = (a : number , b: number) => number;
  // const add : AddFn = (a,b) => a + b;
  const add = (a: number, b: number): number => {
    if(a && b){
      console.log("inside of:", a , b)
return a + b
    }
    else{
      return 0;
    }
    };
  const [inputA, setInputA] = useState<number>();
  const [inputB, setInputB] = useState<number>();

  const handleAddA = (inputA : number) => {
    setInputA(inputA)
  };

  const handleAddB = (inputB : number) => {
    setInputB(inputB)
  };

  return (
    <div>
      <div style={{padding: '10px'}}>
        <p>Count : {count}</p>
      </div>
      <div style={{padding: '10px', display: 'flex', gap: '15px'}}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <p>{add(inputA ?? 0, inputB ?? 0)}</p>
        <input
          type="number"
          placeholder="Enter Number"
          onChange={(e) => handleAddA(e.target.value === '' ? 0 : Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Enter Number"
          onChange={(e) => handleAddB(e.target.value === '' ? 0 : Number(e.target.value))}
        />
      </div>
    </div>
  )
}
export default App