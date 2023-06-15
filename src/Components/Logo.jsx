import React from 'react';
import logoImg from '../assets/logo.svg';
import '../style/components/logo.scss';

export default function Logo() {
    return (
        <div className="logo">
            <img src={logoImg} alt="" />
        </div>
    );
}
