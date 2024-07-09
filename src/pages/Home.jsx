import React, { useEffect } from 'react';
import EntityList from '../components/EntityList';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { fetchPeople, fetchVehicles, fetchPlanets } from '../components/Actions';

const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    dispatch(fetchPeople());
    dispatch(fetchVehicles());
    dispatch(fetchPlanets());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Characters</h1>
      <EntityList entities={store.characters} entityType="characters" />
      <h1>Vehicles</h1>
      <EntityList entities={store.vehicles} entityType="vehicles" />
      <h1>Planets</h1>
      <EntityList entities={store.planets} entityType="planets" />
    </div>
  );
};

export default Home;