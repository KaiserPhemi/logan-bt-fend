// redux libraries
import { configureStore } from "@reduxjs/toolkit";

// reducers
import rootReducer from "./rootReducer";

//store
export default configureStore({ reducer: rootReducer });
