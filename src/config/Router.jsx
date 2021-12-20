import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Customers from '../pages/Customers/Customers';
import DashBoard from '../pages/DashBoard/DashBoard';

const Router = () => {
    return (
        <Routes>
            <Route index element={<DashBoard />} />
            <Route path="/customers" element={<Customers />} />
        </Routes>
    );
};

export default Router;
