
"use client"

import { useState ,  useMemo} from 'react';



export function factorialOf(n: number): number {
    console.log('factorialOf(n) called!');
    return n <= 0 ? 1 : n * factorialOf(n - 1);
  }


  const App: React.FC = () => {

    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);
    
    // const factorial = factorialOf(number);
    const factorial = useMemo(() => factorialOf(number), [number]);
  
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNumber(Number(event.target.value));
    };
    const onClick = () => setInc(i => i + 1);
  
    return (
      <div>
              Factorial of 
            <input type="number" value={number} onChange={onChange} />
            is {factorial}
            <button onClick={onClick}>Re-render</button> 
            <h2>Re render {inc}</h2>
           
      </div>
    );
  };

  export default App;


