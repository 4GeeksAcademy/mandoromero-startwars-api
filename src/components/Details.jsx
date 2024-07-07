export const removeFromFavorites = (entity) => ({
    type: REMOVE_FROM_FAVORITES,
    payload: entity,
  });
  src>components>details.jsx
  if (entityType && uid) {
    return (
      <div className="container">
        {entity ? (
          <>
            <h1>{entity.name}</h1>
            {/* Render additional details about the entity */}
            <p>Details about the entity will go here.</p>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
  
  // Render lists of entities if entityType and uid are not present
  return (
    <div className="container">
      <h1>People</h1>
      <EntityList entities={store.characters} entityType="characters" />
  
      <h1>Vehicles</h1>
      <EntityList entities={store.vehicles} entityType="vehicles" />
  
      <h1>Planets</h1>
      <EntityList entities={store.planets} entityType="planets" />
    </div>
  );
  
  
  export default Details;