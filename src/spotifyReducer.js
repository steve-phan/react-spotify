export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
