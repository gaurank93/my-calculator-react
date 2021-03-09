import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div><h1>My Calculator</h1></div>
      <div>
      <input type="text" readOnly/>
      </div> 
      <div >
      <input type="text" readOnly/> 
      </div>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
      <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </div>
      <div>
        <button>7</button>
        <button>8</button>
        <button>9</button>
      </div>
      </header>
    </div>
  );
}

export default App;
