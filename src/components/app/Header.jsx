/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useContext } from 'react';
import { ThemeContext } from '../../state/ThemeProvider';
import style from './header.css';

export default function Header() {

    const { party, partyOn } = useContext(ThemeContext);

    return (
        <div aria-label={'hdr'} className={`${party ? style.headParty : style.headLight}`}>
            <h1>Breaking Bad Character Party... < br />or not</h1>
            <div className={style.controls}>
                <h4 className={style.boring}>boring</h4>
                <label className={style.switch}>
                    <input type="checkbox" onChange={partyOn} />
                    <span className={style.slider}></span>
                </label>
                <h4 className={style.partay}>partay</h4>
            </div>
        </div>
    );
}
