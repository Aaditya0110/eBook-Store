import './App.css';
import Signin from './pages/Signin.js';
import Signup from './pages/Signup.js';
import Lib from './pages/Lib';
import Home from './pages/Home';
import Login from './pages/AccIcon/Login';
import Orders from './pages/AccIcon/Orders';
import { BrowserRouter as Router, Routes, 
  Route, Navigate,} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route exaxt path='/' Component={Home}></Route>
          <Route exaxt path='/Signin' Component={Signin}/>
          <Route exaxt path='/Signup' Component={Signup}/>
          <Route exaxt path='/Library' Component={Lib}></Route>
          <Route exaxt path='/Login' Component={Login}></Route>
          <Route exaxt path='/Orders' Component={Orders}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
