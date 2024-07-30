import React, { useState } from 'react';
import './App.css';
import MainPage from './MainPage';
import Calculator from './Calculator';
import Maths from './Maths';
import Science from './Science';

function App() {
    const [page, setPage] = useState('main');

    const navigateTo = (page) => {
        setPage(page);
    };

    return (
        <div className="App">
            {page === 'main' && <MainPage navigateTo={navigateTo} />}
            {page === 'calculator' && <Calculator navigateTo={navigateTo} />}
            {page === 'maths' && <Maths navigateTo={navigateTo} />}
            {page === 'science' && <Science navigateTo={navigateTo} />}
        </div>
    );
}

export default App;

