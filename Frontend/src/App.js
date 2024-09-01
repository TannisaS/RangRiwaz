import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import kid_banner from './Components/Assets/kid_banner.webp';
import men_banner from './Components/Assets/men_banner.avif';
import women_banner from './Components/Assets/women_banner.webp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/> 
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
