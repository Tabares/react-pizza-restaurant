import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import Header from './components/Header';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import PizzaItem from './components/PizzaItem';

import { SearchContext } from './context/SearchContext';

function App() {
    return (
        <div className="wrapper">
            <Header />

            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path="" element={<Home />} />
                        <Route path="/pizza/:id" element={<PizzaItem />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
