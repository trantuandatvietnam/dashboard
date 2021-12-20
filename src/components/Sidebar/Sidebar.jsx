import React from 'react';
import logo from '../../assets/images/logo.png';
import sidebar_items from '../../assets/JsonData/sidebar_routes.json';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';

const Sidebar = (props) => {
    const { pathname } = useLocation();
    const active = (route) => {
        return route === pathname;
    };
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src={logo} alt="logo" />
            </div>
            {sidebar_items.map((item, index) => (
                <Link key={index} to={item.route}>
                    <SidebarItem
                        icon={item.icon}
                        title={item.display_name}
                        active={active(item.route)}
                    />
                </Link>
            ))}
        </div>
    );
};

const SidebarItem = (props) => {
    const active = props.active ? 'active' : '';
    return (
        <div className="sidebar__item">
            <div className={`sidebar__item--inner ${active}`}>
                <i className={props.icon}></i>
                <span>{props.title}</span>
            </div>
        </div>
    );
};

export default Sidebar;
