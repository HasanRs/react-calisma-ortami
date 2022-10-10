import React from 'react';

function Header(data) {
    return (
        console.log("Header rendered"),
        <div>
            <h2>React Memoization</h2>
            <code>{JSON.stringify(data)}</code>
        </div>
    );
}

export default React.memo(Header);