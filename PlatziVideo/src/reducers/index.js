import { actions } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      const exist = state.myList.find((item) => item.id === action.payload.id);
      if (exist) return { ...state };

      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case actions.deleteFavorite:
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload), //!Es importante tomar en cuenta el ID
      };
    case actions.loginRequest:
      return {
        ...state,
        user: action.payload,
      };
    case actions.logoutRequest:
      return {
        ...state,
        user: action.payload,
      };
    case actions.registerRequest:
      return {
        ...state,
        user: action.payload,
      };
    case actions.getVideoSource:
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
        state.original.find(() => item.id === Number(action.payload)) ||
        [], //*El valor llega como string así que hay que convertirlo a número.
        //*Si no coincide ningún valor, regresamos un array vacío.
      };
    default:
      return state;
  }
};

export default reducer;
