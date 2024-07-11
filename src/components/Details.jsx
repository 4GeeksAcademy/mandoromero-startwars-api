import React, {useEffect, useState} from 'react';
import EntityList from './EntityList'; 
import store from '../store'; 
import { useParams } from 'react-router-dom';

const Details = () => {
  const {id, type} = useParams()
  const [entity, setEntity] = useState({})

 useEffect(async()=>{
  let response = await fetch(`https://www.swapi.tech/api/${type}/${id}`)
  let data = await response.json()
  setEntity(data.results.property)
}, []) 
  // Render lists of entities if entityType and uid are not present
  return (
    <div className="container">
        {entity ? (
          <>
            <h1>{entity.name}</h1>
            <p>Details about the entity will go here.</p>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
  );
};

export default Details;