import React from 'react';
import { Cart, Home, Login, ProductList, Register, Product } from "./pages";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./pages/srolltop/ScrollToTop";
import { useSelector } from "react-redux";


const App = () => {
    const user = useSelector((state)=>state.user.currentUser);
    console.log(user);

    return (
        <Router>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={user? <Navigate to="/"/>:<Login/>}/>
                    <Route path="/register" element={user? <Navigate to="/"/>:<Register/>}/>
                    <Route path="/cart" element={<Cart />}/>
                    <Route path="/products/:category" element={<ProductList />}/>
                    <Route path="/product/:id" element={<Product />}/>
                </Routes>
            </ScrollToTop>
        </Router>
    )
}

export default App