import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Pages/Header';
import { Footer } from './Pages/Footer';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.bsseURL = "https://loginregisterpage-tmal.onrender.com";
axios.defaults.withCredentials = true;


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      <Footer/>  
      </BrowserRouter>      
    </div>
  );
}

export default App;
