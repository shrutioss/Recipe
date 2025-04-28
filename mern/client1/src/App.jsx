import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import AddRecipe from './components/AddRecipe';
import Saved from './components/Saved';
import Home from './components/Home';
import Profile from './components/Profile';
import FetchRecipeById from "./components/FetchRecipeById";
import Detail from './components/Detail';
import Contact from './components/contact';
import AboutPage from './components/Aboutpage';
import MyOrders from './components/MyOrder';
import OrderForm from './components/OrderForm';



const App = () => {
  return (
    <>
    <Router>
    <Navbar />
    
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/add" element={<AddRecipe />} />
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/:id" element={<Detail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/aboutpage" element={<AboutPage />} />
      <Route path="/myorders" element={<MyOrders />} />
      <Route path="/orderform" element={<OrderForm />} />
     

      </Routes>
    </Router>
    </>
  )
}

export default App
