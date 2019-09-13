import React from 'react';

const CharacterCard = props=>{
    return(
        <div id={props.id}>
            <div>{props.name}</div>
            <div>Gender: {props.gender}</div>
            <div>Height: {props.height}</div>
            <div>Mass: {props.mass}</div>
            <div>Skin Color{props.skinColor}</div>
        </div>
    )
}

export default CharacterCard;