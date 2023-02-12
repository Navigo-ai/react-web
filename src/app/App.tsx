import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';

import "bootstrap/dist/css/bootstrap.min.css";
import Create from '../pages/create';
import Print from '../pages/print';
import Ship from '../pages/ship';
import './App.css';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}  />
          <Route path="/create" element={<Create></Create>}  />
          <Route path="/print" element={<Print></Print>}  />
          <Route path="/ship" element={<Ship></Ship>}  />
        </Routes>
      </HashRouter>
    </>
  );
}

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.tsx</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
    
export default App;
