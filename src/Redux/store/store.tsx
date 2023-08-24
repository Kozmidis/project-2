import { combineReducers, createStore } from "redux";
import { candidatesReduser } from "./redusers/candidates";
import { jobsReduser } from "./redusers/jobs";
import { candidatesFilterReduser } from "./redusers/candidatesFilter";
import { candidatesSortReduser } from "./redusers/candidatesSort";

const store = createStore(
  combineReducers({
    jobs: jobsReduser,
    candidates: candidatesReduser,
    filter: candidatesFilterReduser,
    sort: candidatesSortReduser,
  })
);

export default store;
