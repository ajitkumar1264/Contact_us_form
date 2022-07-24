import {BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css';
import Home from './component/Home';
import Signin from './component/Signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

      <Route path="/" element={<Signin/>}/>  
      <Route path="/home" element={<Home/>}/>  

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
