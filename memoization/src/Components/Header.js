import React from 'react';

function Header() {
    return (
        console.log("Header rendered"),
        <div>
            <h2>React Memoization</h2>
        </div>
    );
}

export default React.memo(Header);