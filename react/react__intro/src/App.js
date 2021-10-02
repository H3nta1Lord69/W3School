import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Introduction</h1>
      <hr/>
        <h2>What is React?</h2>
        <p>React sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.</p>
        <p>React is a tool for building UI components.</p>
      <hr/>
        <h2>How does React Work?</h2>
        <p><em><b>React creates a VIRTUAL DOM in memory.</b></em></p>
        <p>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
        <p><em><b>React only changes what needs to be changed!</b></em></p>
        <p>React finds out what changes have been made, and changes <b>only</b> what needs to be changed.</p>
    </div>
  );
}

export default App;
