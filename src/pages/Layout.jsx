import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import Home from './Home';
import Details from '../components/Details';
import Favorites from '../components/Favorites';
import { fetchPeople, fetchVehicles, fetchPlanets } from './Actions';
import useGlobalReducer from '../hooks/useGlobalReducer';

export const Layout = () => {
    const { dispatch } = useGlobalReducer();

    useEffect(() => {
        fetchPeople(dispatch);
        fetchVehicles(dispatch);
        fetchPlanets(dispatch);
    }, [dispatch]);

    return (
        <ScrollToTop>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:id" element={<Detail />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </div>
            <Footer />
        </ScrollToTop>
    );
};

export default Layout;