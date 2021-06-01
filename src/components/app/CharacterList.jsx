/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { getBBcharacterList } from '../../services/bbApi';
import CharacterCard from './CharacterCard';
import Loading from './Loading';

export default function CharacterList() {
    const [characters, setChars] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBBcharacterList()
            .then(setChars)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <Loading />;

    return (
        <div>
            {characters.map((char) => <CharacterCard char={char} key={char.id} />)}
        </div>
    );
}
