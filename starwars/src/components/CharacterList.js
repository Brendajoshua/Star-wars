import React, {useState, useEffect} from 'react';
import axios from 'axios';


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
}

export default CharacterList;