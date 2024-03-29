import React from 'react';
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={s.item}>
                <a href="/dialog">Messages</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href="/news">News</a>
            </div>
            <div className={s.item}>
                <a href="/music">Music</a>
            </div>
            <div className={s.item}>
                <a href="#s">Settings</a>
            </div>
        </nav>
    );
};

