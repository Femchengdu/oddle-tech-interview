import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";
import repoReducer from "./reposReducer";
import followersReducer from "./followersReducer";
import paginationReducer from "./paginationReducer";

//
const rootReducer = combineReducers({
  searchTerm: searchReducer,
  error: errorReducer,
  loading: loadingReducer,
  user: userReducer,
  repos: repoReducer,
  pagination: paginationReducer,
  followers: followersReducer,
});

export default rootReducer;
