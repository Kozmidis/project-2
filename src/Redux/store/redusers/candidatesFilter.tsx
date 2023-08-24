const defaultCheckedList = ["Male", "Female"];
const datePick = { before: "1980-01-01", after: "2000-01-01" };
const initialState = {
  gender: defaultCheckedList,

  date: datePick,
};

export const candidatesFilterReduser = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_GENDER":
      return { ...state, gender: action.payload };

    case "SET_DATE":
      return { ...state, date: action.payload };
    default:
      return state;
  }
};
