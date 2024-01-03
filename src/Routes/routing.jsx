import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import DriverList from '../pages/drivers/DriverList';
import DriverForm from '../pages/drivers/DriverForm';

const Routing = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<MainLayout />} />
                    <Route path="create-driver" element={<DriverForm />} />
                    <Route path="drivers" element={<DriverList />} />
                    {/* </Route> */}
                </Routes>
            </MainLayout >
        </Router>
    );
};

export default Routing;
