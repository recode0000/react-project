import { useState } from 'react';

const TestUseEffect = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Learn useEffect</h1>
      <h2>Count: { count }</h2>
      <button onClick={() => setCount(count+1)}>+</button>
    </div>
  );
}

export default TestUseEffect;