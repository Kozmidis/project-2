const initialState = { name: "asc", age: "asc" };
export const candidatesSortReduser = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_SORT":
      return { [action.payload.key]: action.payload.value };

    default:
      return state;
  }
};
