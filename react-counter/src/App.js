import { useState } from 'react';

const App = () => {
  const [number, setNumber] = useState(0);

  const add = () => setNumber((n) => n + 1);
  const minus = () => setNumber((n) => n - 1);

  return (
    <div className="App">
      <button onClick={minus}>-</button>
      <input type="text" value={number} />
      <button onClick={add}>+</button>
    </div>
  );
};

export default App;
