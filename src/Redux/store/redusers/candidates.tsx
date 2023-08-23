export const candidatesReduser = (state = [], action: any) => {
  console.log("reduser > ", action);

  switch (action.type) {
    case "SET":
      return [...state, 1];

    default:
      return state;
  }
};
