// imports para usar redux
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// importar reducers desde la carpeta de reducers
// crear nuevo reducer en esa carpeta
import { authReducer, chatReducer } from "../reducers";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// añadir todos los reducers para combinarlos en uno solo
const reducers = combineReducers({
  auth: authReducer,
  chat: chatReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
