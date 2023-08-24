export const candidatesReduser = (state = [], action: any) => {
  switch (action.type) {
    case "GET_API":
      return [...(action.payload || [])];
    default:
      return state;
  }
};
