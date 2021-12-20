import themeReducer from "./ThemeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ themeReducer });

export default rootReducer;