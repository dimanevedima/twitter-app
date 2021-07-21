import React from 'react';
import './app-header.css';

const AppHeader = ({count, liked}) => {
    return (
      <div className="app-header">
      <h1>Dmitry Filimonov Olegovich</h1>
      <h2>У тебя {count} записей. Из них понравилось: {liked}.</h2>
      </div>
    )
}

export default AppHeader;
