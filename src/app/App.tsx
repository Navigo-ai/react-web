import {HashRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/home';

import 'bootstrap/dist/css/bootstrap.min.css';
import Create from '../pages/create';
import Print from '../pages/print';
import Ship from '../pages/ship';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/print' element={<Print />} />
        <Route path='/ship' element={<Ship />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
