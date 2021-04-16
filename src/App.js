import logo from './logo.svg';
import './App.css';
import Test1 from "./components/1-componentClass";
import Test2 from "./components/2-componentFunctional";
import QuizComponent from "./components/quiz-component";
import 'bootstrap/dist/css/bootstrap.min.css';

/*function App() {
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
}*/

/*function App() {
 return (
   <div>
     <Test1/>
     <Test2/>
   </div>
 );
}*/

function App() {
 return (
   <QuizComponent/>
 );
}



export default App;
