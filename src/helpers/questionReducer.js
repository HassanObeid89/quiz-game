export default function questionReducer(state, action) {
  switch (action.type) {
    case "SET_QUESTION":
      return setQuestion(state, action);
    default:
      throw new Error("no action type found");
  }

  function setQuestion(state, action) {
    const { payload } = action;
    if (payload !== null) return payload;
    return state;
  }
}
