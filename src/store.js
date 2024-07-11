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

export default function storeReducer(state = initialStore(), action = {}) {
  console.log('Reducer action:', action);  // Log the action with details

  switch(action.type) {
    case SET_PEOPLE:
      return {
        ...state,
        characters: action.payload
      };
    case SET_VEHICLES:
      return {
        ...state,
        vehicles: action.payload
      };
    case SET_PLANETS:
      return {
        ...state,
        planets: action.payload
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(item => item.uid !== action.payload.uid)
      };
    default:
      console.error(`Unknown action: ${action.type}`, action);  // Log unknown action types with action details
      return state;
  }
}

