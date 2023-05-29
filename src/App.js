import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Players from './components/Players';
import  {
    Routes,
    Route,
}   from  "react-router-dom" ;
import Contact from './components/Contact';
import { Detail } from './components/Detail';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
            <Route path='/' element={<Players/>}></Route>  
            <Route path='/detail/:id' element={<Detail/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
