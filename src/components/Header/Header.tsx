import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.img} src="https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/good-icon.png" alt="" />
        </header>
    );
};

