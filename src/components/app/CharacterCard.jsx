/* eslint-disable indent */
import React, { useContext } from 'react';
import { ThemeContext } from '../../state/ThemeProvider';
import PropTypes from 'prop-types';
import style from './card.css';

export default function CharacterCard({ char }) {

    const { party } = useContext(ThemeContext);

    return (
        <div className={`${party ? style.charCardParty : style.charCardLight}`}>
            <h3>{char.name}</h3>
            <img src={char.image} />
            <h4>Nickname: {char.nickname}</h4>
            <ul>
                {char.roles.map((job) => <li key={job}>{job}</li>)}
            </ul>
        </div>
    );
}

CharacterCard.propTypes = {
    char: PropTypes.object.isRequired
};
