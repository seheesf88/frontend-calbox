import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './Container/HomeContainer';
import ShippingContainer from './Container/ShippingContainer';
import PriceContainer from './Container/PriceContainer';




const My404 = () => {
  return (
    <div>
      ...404...
    </div>
  )
}


const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ HomeContainer } />
        <Route exact path="/shippingform" component={ ShippingContainer } />
        <Route exact path="/calculate" component={ PriceContainer } />
        <Route component={ My404 } />
      </Switch>
    </main>
  )
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
