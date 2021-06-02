/* eslint-disable indent */
import React from 'react';
import CharacterList from './CharacterList';
import Header from './Header';
import style from './app.css';

export default function App() {
  return (
    <div className={style.mainPageLight}>
      <Header />
      <CharacterList />
    </div>
  );
}
