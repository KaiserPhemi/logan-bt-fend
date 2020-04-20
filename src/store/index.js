// redux libraries
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

// reducers
import rootReducer from "./rootReducer";

//store
export default configureStore({ reducer: rootReducer });
