const initialState = {
  value: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return { value: state.value + 1 }
    default:
      return state
  }
}
export default reducer;
