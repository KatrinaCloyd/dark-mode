/* eslint-disable indent */
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [party, setParty] = useState(false);

    const partyOn = () => setParty((party) => !party);

    return (
        <ThemeContext.Provider value={{ party, partyOn }}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
};
