import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 30%;
    font-size: 30px;
    background: transparent;
    border-radius: 3px;
    border: 2px solid #eca637;
    color: #722120;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    cursor: pointer;
    &:hover{
        background: #722120;
        color: #eca637;
    } 
  `;

function GetCharacters(props){
    return(
        <div>
            <Button onClick={()=>props.setPageNum(props.pageNum - 1)}>Previous Page</Button>
            <Button onClick={()=>props.setPageNum(props.pageNum + 1)}>Next Page</Button>
        </div>
    )
}

export default GetCharacters;