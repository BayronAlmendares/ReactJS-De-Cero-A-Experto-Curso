import { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(
    {
        c1:10,
        c2:20,
        c3:30,
    }
  );
  const {c1, c2, c3} = counter;
  
  return ( 
  <>
  <h1>Numero de veces que se hizo Clik al boton: </h1>
  <h2>Counter 1 = { c1 }</h2>
  <h2>Counter 2 = { counter.c2 }</h2>
  <h2>Counter 3 = { c3 }</h2>

  <button onClick={
    ()=>{setCounter({
        ...counter, c1:c1 + 1 
    })}}>Click Me</button>
      
  </>
  )
}

export default App;

