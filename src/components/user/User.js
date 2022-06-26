import React from 'react';

function User({item,userButton}) {
    return (
        <div>
            <h1>{item.id}</h1>
            <h2>{item.name}</h2>
            <button onClick={()=> userButton (item)}>Userr Details</button>
        </div>
    );
}

export {User};