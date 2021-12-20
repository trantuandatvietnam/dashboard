import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from '../../config/Router';
import Sidebar from '../Sidebar/Sidebar';
import TopNav from '../TopNav/TopNav';
import './layout.css';
import themeActions from '../../redux/actions/ThemeActions';

const Layout = () => {
    const themeReducer = useSelector((state) => state.themeReducer);
    console.log(themeReducer.mode);
    const dispatch = useDispatch();
    useEffect(() => {
        const themeClass = localStorage.getItem(
            'themeMode',
            'theme-mode-light'
        );

        const colorClass = localStorage.getItem(
            'colorMode',
            'theme-mode-light'
        );

        dispatch(themeActions.setMode(themeClass));
        dispatch(themeActions.setColor(colorClass));
    }, [dispatch]);
    return (
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <Sidebar />
            <div className="layout__content">
                <TopNav />
                <div className="layout__content--main">
                    <Router />
                </div>
            </div>
        </div>
    );
};

export default Layout;
