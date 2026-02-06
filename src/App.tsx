import './App.css'
// import './carousel/carousel.css'
import { useCounter } from './TypeScriptPractice/counter'

function App() {
  const { count, increment, decrement, reset } = useCounter({
    initialValue: 10,
    step: 2
  })

  // type AddFn = (a : number , b: number) => number;
  // const add : AddFn = (a,b) => a + b;
  const add = (a: number, b: number): number => a + b;

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
        <p> add : {add(2, 3)}</p>
      </div>
    </div>
  )
}
export default App
