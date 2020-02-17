import React, { Component, useState} from 'react';
import {Link} from 'react-router-dom';
const Join = () => {
    const [name, setName] =useState('');
    const [room, setRoom] =useState('');

    return(
       <div className = "JoinOuterContainer">
       <div className = "JoinInnerContainer">
       <h1 className = "heading">Join</h1>
       <div><input placeholder="Name" className="joinInput" type = "text" onChange={(event) => setName(event.target.value)}></input></div>
       <div><input placeholder="Room" className="joinInput" type = "text" onChange={(event) =>setRoom(event.target.value) }></input></div>
<Link onClick = {event => (!name || !room) ? event.pre} = to ={`/chat?name=${name}&room=${room}`}>

<button className = "button mt-20" type = "submit">Sing In</button>
</Link>
       </div>
       </div>
    )
}

export default Join;