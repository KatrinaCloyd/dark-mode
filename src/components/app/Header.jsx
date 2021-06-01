/* eslint-disable indent */
import React from 'react';
import style from './darkMode.css';

export default function Header() {
    return (
        <div>
            <h3>Breaking Bad Character Party... or not.</h3>
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
