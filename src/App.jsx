import { useState } from 'react';
import './App.css'
import ProductCard from './components/ProductCard';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Stats from './components/Hero/Stats';
import SelectionToggle from './components/SelectionToggle';
import { ToastContainer } from 'react-toastify';
import GettingStarted from './components/layout/GettingStarted';
import Pricing from './components/layout/Pricing';
import CallToAction from './components/layout/CallToAction';
import Footer from './components/layout/Footer';

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
    <GettingStarted/>
    <Pricing/>
    <CallToAction/>
    <Footer/>
    </>
  )
}

export default App;
