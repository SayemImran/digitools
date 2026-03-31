import { useState } from 'react';
import './App.css'
import ProductCard from './components/ProductCard';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Stats from './components/Hero/Stats';
import SelectionToggle from './components/SelectionToggle';
import { ToastContainer } from 'react-toastify';

const getDataPromise = fetch('/data.json').then(res => res.json());
function App() {
  const [cartItems, setCartItems]=useState([]);
  return (
    <>
    <NavBar cartItems={cartItems} />
    <Hero/>
    <Stats/>
    <ToastContainer/>
    <SelectionToggle cartItems={cartItems} promise={getDataPromise} setCartItems={setCartItems} />
    </>
  )
}

export default App;
