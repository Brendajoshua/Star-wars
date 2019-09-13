import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 300px;
    background: #e2e2e1;
    opacity: 0.7;
    color: #eca637;
    border-radius: 15% 0 15% 0;
    margin: 20px;
    box-shadow: 20px 10px 10px #5f6f77;
    `;

const CardTitle = styled.h3`
    margin-top: 5px;
    padding: 10px 0;
    font-size: 25px;
    color: #722120;
    border-bottom: 4px solid #eca637;
    `;

const CardDetails = styled.p`
    color: #121b26;
    font-size: 18px;
    `;

const CharacterCard = props=>{
    return(
        <Card id={props.id}>
            <CardTitle>{props.name}</CardTitle>
            <CardDetails>Gender: {props.gender}</CardDetails>
            <CardDetails>Height: {props.height}</CardDetails>
            <CardDetails>Mass: {props.mass}</CardDetails>
            <CardDetails>Skin Color{props.skinColor}</CardDetails>
        </Card>
    )
}

export default CharacterCard;