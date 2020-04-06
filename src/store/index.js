// redux libraries
import { createStore } from "redux";

// reducers
import rootReducer from "./rootReducer";

//store
export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
