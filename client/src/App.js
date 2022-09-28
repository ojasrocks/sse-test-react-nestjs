import * as React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  React.useEffect(()=>{
    const sse = new EventSource('/sse');
    console.log('sse',sse);
    sse.onopen= (event)=>{
      console.log('open',typeof event)
    }
    sse.onmessage = ({data})=>{ 
      console.log('evnt received');
      alert('evnt received');
    }
    return ()=> {sse.close()}
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
