import React from 'react';

function Maths({ navigateTo }) {
    return (
        <div>
            <h1>Maths</h1>
            <p>Math is the study of numbers, shapes, and patterns. It is used in everything from building structures to understanding the universe.</p>
            <img src="https://www.shutterstock.com/shutterstock/photos/1859813464/display_1500/stock-vector-math-horizontal-banner-presentation-website-isolated-lettering-typography-idea-with-icons-1859813464.jpg" alt="Maths" />
            <button onClick={() => navigateTo('main')}>Back to Main Page</button>
        </div>
    );
}

export default Maths;

