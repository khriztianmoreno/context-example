import logo from './logo.svg';
import './App.css';

import { NumberProvider } from './NumberContext'

import { ComponentA } from './ComponentA';
import { ComponentB } from './ComponentB';

function App() {
  return (
    <div className="App">
      <NumberProvider>
        <ComponentA />
      </NumberProvider>


      <ComponentB />
    </div>
  );
}

export default App;
