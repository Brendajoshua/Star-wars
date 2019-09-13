import React, {useState, useEffect} from 'react';
import axios from 'axios';
import GetCharacters from './GetCharacters';
import CharacterCard from './Charactercard';


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
    .catch(error => console.error(error));


return (
    <div>
        <GetCharacters
            pageNum={pageNum}
            setPageNum={setPageNum}
        />
        <div>
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
        </div>
    </div>
)

}

export default CharacterList;