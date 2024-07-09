// store.js
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_PEOPLE,
  SET_VEHICLES,
  SET_PLANETS
} from './components/Actions';

export const initialStore = () => ({
  message: null,
  cards: [],
  characters: [],
  vehicles: [],
  planets: [],
  favorites: [],
});

export default function storeReducer(store, action = {}) {
  switch(action.type) {
    case SET_PEOPLE:
      return {
        ...store,
        characters: action.payload
      };
    case SET_VEHICLES:
      return {
        ...store,
        vehicles: action.payload
      };
    case SET_PLANETS:
      return {
        ...store,
        planets: action.payload
      };
    case ADD_TO_FAVORITES:
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...store,
        favorites: store.favorites.filter(item => item.uid !== action.payload.uid)
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }    
}