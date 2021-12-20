import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './topnav.css';
import notifications from '../../assets/JsonData/notification';
import { Link } from 'react-router-dom';
import user__image from '../../assets/images/tuat.png';
import user__menu from '../../assets/JsonData/user_menus';
import ThemeMenu from '../ThemeMenu/ThemeMenu';

const curr__user = {
    display_name: 'Tuat',
    image: user__image,
};

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
);

const renderUserToggle = (user) => (
    <div className="topnav__right--user">
        <div className="topnav__right--user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right--user__name">{user.display_name}</div>
    </div>
);

const renderUserMenu = (item, index) => {
    return (
        <Link to="/" key={index}>
            <div className="notification-item">
                <i className={item.icon}></i>
                <span>{item.content}</span>
            </div>
        </Link>
    );
};

const TopNav = () => {
    return (
        <div className="topnav">
            <div className="topnav__search">
                <input type="text" placeholder="Search here..." />
                <i className="bx bx-search"></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right--item">
                    <Dropdown
                        customToggle={() => renderUserToggle(curr__user)}
                        contentData={user__menu}
                        renderItems={(item, index) =>
                            renderUserMenu(item, index)
                        }
                    />
                </div>
                <div className="topnav__right--item">
                    <Dropdown
                        contentData={notifications}
                        renderItems={(item, index) =>
                            renderNotificationItem(item, index)
                        }
                        renderFooter={() => <Link to="/">View all</Link>}
                        icon="bx bx-bell"
                        badge="12"
                    />
                </div>
                <div className="topnav__right--item">
                    <ThemeMenu />
                </div>
            </div>
        </div>
    );
};

export default TopNav;
