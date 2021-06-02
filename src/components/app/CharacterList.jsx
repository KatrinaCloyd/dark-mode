/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../state/ThemeProvider';
import { getBBcharacterList } from '../../services/bbApi';
import CharacterCard from './CharacterCard';
import Loading from './Loading';
import style from './list.css';

export default function CharacterList() {
    const [characters, setChars] = useState(null);
    const [loading, setLoading] = useState(true);

    const { party } = useContext(ThemeContext);

    useEffect(() => {
        getBBcharacterList()
            .then(setChars)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <Loading />;

    return (
        <div className={`${party ? style.charListParty : style.charListLight}`} >
            {characters.map((char) => <CharacterCard char={char} key={char.id} />)}
        </div>
    );
}
