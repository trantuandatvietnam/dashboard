import React, { useEffect, useRef } from 'react';
import './dropdown.css';

const clickOutsideRef = (content__ref, toggle__ref) => {
    document.addEventListener('mousedown', (e) => {
        // user click the toggle button
        if (toggle__ref.current && toggle__ref.current.contains(e.target)) {
            content__ref.current.classList.toggle('active');
        } else {
            // user click outside toggle
            content__ref.current.classList.remove('active');
        }
    });
};

const Dropdown = (props) => {
    const content__elm = useRef(null);
    const toggle__elm = useRef(null);

    useEffect(() => {
        clickOutsideRef(content__elm, toggle__elm);
    }, []);

    return (
        <div className="dropdown">
            <button ref={toggle__elm} className="dropdown__toggle">
                {props.icon ? <i className={props.icon}></i> : ''}
                {props.badge ? (
                    <span className="dropdown__toggle--badge">
                        {props.badge}{' '}
                    </span>
                ) : (
                    ''
                )}
                {props.customToggle ? props.customToggle() : ''}
            </button>

            <div ref={content__elm} className="dropdown__content">
                {props.contentData && props.renderItems
                    ? props.contentData.map((item, index) =>
                          props.renderItems(item, index)
                      )
                    : ''}

                {props.renderFooter ? (
                    <div className="dropdown__footer">
                        {props.renderFooter()}
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default Dropdown;
