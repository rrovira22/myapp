import React from 'react';

function Science({ navigateTo }) {
    return (
        <div>
            <h1>Science</h1>
            <p>Science is the systematic study of the structure and behavior of the physical and natural world through observation and experimentation.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVZzNebaPCe_O_GJtHNmnZDM1lC91b0sAvaw&s" alt="Science" />
            <button onClick={() => navigateTo('main')}>Back to Main Page</button>
        </div>
    );
}

export default Science;

//please work
