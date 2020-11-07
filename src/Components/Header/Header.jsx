import React from 'react';
import obj from './Header.module.css';

const Header = () => {
    return (
        <header className={obj.header}>
            <div className={obj.headerContent}>
                <p className={obj.logoVk}>VK</p>
            </div>
        </header>
    );
}

export default Header;