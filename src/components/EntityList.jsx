import React from 'react';
import { Link } from 'react-router-dom';
import useGlobalReducer from '/src/hooks/useGlobalReducer.jsx';
import { addToFavorites } from '../actions';

const EntityCard = ({ entity, addToFavorites, entityType }) => (
  <div>
    <div className="card mx-2" style={{ width: "300px", height: "410px", marginBottom: "10px", display: "flex", border: "3px black solid", color: "#ffe81f", backgroundColor: "#000000" }}>
    <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/${entityType}/${entity.uid}.jpg`} alt={entity.name} width="100" height="225" />
      <div className="card-body" style={{ height: "5px", paddingBottom: "0", marginBottom: "0" }}>
        <div style={{ display: "flex", marginBottom: "0" }}>
          <div style={{ width: "85%" }}>
            <h3 className="card-title" style={{ marginBottom: "0" }}>{entity.name}</h3>
          </div>
          <button style={{ border: "none", marginLeft: "5px", marginRight: "0", backgroundColor: "#000000" }} onClick={() => addToFavorites(entity)}>❤️</button>
        </div>
      </div>
      <Link to={`/details/${entityType}/${entity.uid}`} className="btn" style={{ width: "200px", fontSize: "14px", marginTop: "10px", marginRight: "auto", marginLeft: "auto", marginBottom: "10px", backgroundColor: "#ffe81f" }}>Learn more!</Link>
    </div>  
  </div>
);

const EntityList = ({ entities, entityType }) => {
  const { dispatch } = useGlobalReducer();

  return (
    <div className="card-deck d-flex col-10 overflow-auto mb-5 mx-auto">
      {entities.map(entity => {
        let derivedEntityType = entityType;

        if (typeof entityType === 'undefined') {
          if (entity.url.includes('people')) {
            derivedEntityType = 'characters';
          } else if (entity.url.includes('planets')) {
            derivedEntityType = 'planets';
          } else if (entity.url.includes('vehicles')) {
            derivedEntityType = 'vehicles';
          }
        }
        
        return (
          <EntityCard
            key={entity.uid}
            entityType={derivedEntityType}
            entity={entity}
            addToFavorites={(entity) => addToFavorites(dispatch, entity)}
          />
        );
      })}
    </div>
  );
};

export default EntityList;