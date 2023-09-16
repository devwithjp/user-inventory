import './Header.scss';
import React from 'react';

export default function Header(props) {
    return (
        <div className="header">
            <h1 className="title">USER'S INVENTORY</h1>
            <img src='./usericon.svg' alt='user-icon'/>
        </div>
    );
}