import React from 'react';

function GetCharacters(props){
    return(
        <div>
            <button onClick={()=>props.setPageNum(props.pageNum - 1)}>Previous Page</button>
            <button onClick={()=>props.setPageNum(props.pageNum + 1)}>Next Page</button>
        </div>
    )
}

export default GetCharacters;