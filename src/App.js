import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import Profile from './components/profile/Profile';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/notFound/NotFound';
import Product from './components/products/Product';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<Product/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
