import './App.css'
import './bootstrap.min.css'
import Home from './pages1/Home'
import View from './pages1/View'
import Wish from './pages1/Wish'
import Cart from './pages1/Cart'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/wish" element={<Wish />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
