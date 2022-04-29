import {combineReducers, createStore} from "redux";
import {pageReducer} from "./pageReducer";
import {postReducer} from "./postReducer";

const rootReducers = combineReducers({
  page: pageReducer,
  post: postReducer
})


export const store = createStore(rootReducers)


