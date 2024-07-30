import React from 'react';
import './App.css'; // Import the CSS file

function MainPage({ navigateTo }) {
    return (
        <div>
            <h1>Welcome to the Main Page</h1>
            <div className="button-container">
                <button onClick={() => navigateTo('calculator')}>Calculator</button>
                <button onClick={() => navigateTo('maths')}>Maths</button>
                <button onClick={() => navigateTo('science')}>Science</button>
            </div>
        </div>
    );
}

export default MainPage;

