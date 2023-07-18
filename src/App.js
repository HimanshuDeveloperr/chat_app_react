import './App.css';
import Register from './Pages/Register';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login'
function App() {
  return (
 
    <Router>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
        </Route>
      </Routes>
    </Router>

    );
}

export default App;
