import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Router>

       <Nav/>
    <Routes>
     <Route  exact path="/" element={<Header/>}></Route>
     <Route exact path="/Main" element={<Main/>}></Route>
     <Route  exact path="/Footer" element={<Footer/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
