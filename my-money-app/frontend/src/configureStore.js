import { applyMiddleware, createStore } from "redux";
import multi from "redux-multi";
import promise from "redux-promise";
import thunk from "redux-thunk";
import reducers from "./main/reducers";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools);
