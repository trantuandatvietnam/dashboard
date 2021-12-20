import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import './theme-menu.css';
import themeActions from '../../redux/actions/ThemeActions';

const mode_settings = [
    {
        id: 'light',
        name: 'Light',
        background: 'light-background',
        class: 'theme-mode-light',
    },
    {
        id: 'dark',
        name: 'Dark',
        background: 'dark-background',
        class: 'theme-mode-dark',
    },
];

const color_settings = [
    {
        id: 'blue',
        name: 'Blue',
        background: 'blue-color',
        class: 'theme-color-blue',
    },
    {
        id: 'red',
        name: 'Red',
        background: 'red-color',
        class: 'theme-color-red',
    },
    {
        id: 'cyan',
        name: 'Cyan',
        background: 'cyan-color',
        class: 'theme-color-cyan',
    },
    {
        id: 'green',
        name: 'Green',
        background: 'green-color',
        class: 'theme-color-green',
    },
    {
        id: 'orange',
        name: 'Orange',
        background: 'orange-color',
        class: 'theme-color-orange',
    },
];

const ThemeMenu = () => {
    const dispatch = useDispatch();
    const [currMode, setCurrMode] = useState('light');
    const [currColor, setCurrColor] = useState('blue');
    const themeMenuRef = useRef(null);
    const themeRef = useRef(null);
    const handleClickToggleColor = () => {
        themeMenuRef.current.classList.toggle('active');
    };

    const setMode = (mode) => {
        setCurrMode(mode.id);
        localStorage.setItem('themeMode', mode.class);
        dispatch(themeActions.setMode(mode.class));
    };

    const setColor = (color) => {
        setCurrColor(color.id);
        localStorage.setItem('colorMode', color.class);
        dispatch(themeActions.setColor(color.class));
    };

    useEffect(() => {
        const themeClass = mode_settings.find(
            (item) =>
                item.class ===
                localStorage.getItem('themeMode', 'theme-mode-light')
        );
        const colorClass = color_settings.find(
            (item) =>
                item.class ===
                localStorage.getItem('colorMode', 'theme-mode-light')
        );

        if (themeClass !== undefined) {
            setCurrMode(themeClass.id);
        }
        if (colorClass !== undefined) {
            setCurrColor(colorClass.id);
        }
    }, [currMode, currColor]);

    useEffect(() => {
        document.addEventListener('mousedown', (e) => {
            if (!themeRef.current.contains(e.target)) {
                themeMenuRef.current.classList.remove('active');
            }
        });
    }, []);
    return (
        <div ref={themeRef}>
            <button
                onMouseDown={handleClickToggleColor}
                className="dropdown__toggle"
            >
                <i className="bx bx-palette"></i>
            </button>
            <div ref={themeMenuRef} className="theme-menu">
                <h4>Theme setting</h4>
                <button
                    onMouseDown={() =>
                        themeMenuRef.current.classList.remove('active')
                    }
                    className="theme-menu__close"
                >
                    <i className="bx bx-x"></i>
                </button>
                <div className="theme-menu__select">
                    <span>Choose Mode</span>
                    <ul className="mode-list">
                        {mode_settings.map((item, index) => (
                            <li onClick={() => setMode(item)} key={index}>
                                <div
                                    className={`mode-list__color ${
                                        item.background
                                    } ${item.id === currMode ? 'active' : ''}`}
                                >
                                    <i className="bx bx-check"></i>
                                </div>
                                <span>{item.name} </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="theme-menu__select">
                    <span>Choose Color</span>
                    <ul className="mode-list">
                        {color_settings.map((item, index) => (
                            <li onClick={() => setColor(item)} key={index}>
                                <div
                                    className={`mode-list__color ${
                                        item.background
                                    } ${currColor === item.id ? 'active' : ''}`}
                                >
                                    <i className="bx bx-check"></i>
                                </div>
                                <span>{item.name} </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ThemeMenu;
