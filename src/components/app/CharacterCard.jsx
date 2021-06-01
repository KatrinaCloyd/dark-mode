/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';

export default function CharacterCard({ char }) {
    return (
        <div>
            <h3>Name: {char.name}</h3>
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
