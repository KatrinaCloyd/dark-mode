/* eslint-disable indent */
import React from 'react';
import style from './header.css';

export default function Header() {
    return (
        <div className={style.headLight}>
            <h1>Breaking Bad Character Party... < br />or not</h1>
            <div className={style.controls}>
                <h4>light</h4>
                <label className={style.switch}>
                    <input type="checkbox" />
                    <span className={style.slider}></span>
                </label>
                <h4>partay</h4>
            </div>
        </div>
    );
}
