import './App.css';
import NavBar from './components/NavBar';
import ItemsListContainer from './components/ItemsListContainer';
import Home from './components/Home'
import ItemDetailContainer from './components/ItemDetailContainer';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Carrito from './components/Carrito';

import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
        <div className="App">
              <BrowserRouter>
                  <NavBar/>
                  <Routes>
                        <Route path="/" element={<Home title={ "LISBOA" } subtitle={"MAKE YOUR DREAM"} />}  /> 
                        <Route path="/productos" element={<ItemsListContainer  />} ></Route>
                        <Route path="/category/:catId" element={<ItemsListContainer />}/>
                        <Route path="/product/:itemId" element={<ItemDetailContainer />} />
                        <Route path="/nosotros" element={<Nosotros />}/>
                        <Route path="/contacto" element={<Contacto />}/>
                        <Route path="/carrito" element={<Carrito />}/>
                  </Routes>
           </BrowserRouter>
        </div>       
   );
}


export default App;
