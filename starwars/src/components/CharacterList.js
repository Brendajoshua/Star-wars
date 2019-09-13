import React, {useState, useEffect} from 'react';
import axios from 'axios';
import GetCharacters from './GetCharacters';
import CharacterCard from './Charactercard';
import styled from 'styled-components';

const CharList = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    margin-left: 5rem;
    `;



function CharacterList () {
    const [people, setpeople] = useState ([]);
    const [pageNum, setPageNum] = useState(1);

    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/?pages=${pageNum}`)
        .then(response => {
            const results = response.data.results
            console.log(response);
            setpeople(results);
        })
    
    },[pageNum])
    


return (
    <div>
        <GetCharacters
            pageNum={pageNum}
            setPageNum={setPageNum}
        />
        <CharList>
            {people.map(item=>{
                return(
                    <CharacterCard
                    id={item.id}
                    name={item.name}
                    gender={item.gender}
                    height={item.height}
                    mass={item.mass}
                    skinColor={item.skin_color}
                    />
                )
            })}
        </CharList>
    </div>
)

}

export default CharacterList;