// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "../reducers/index";
// import thunk from "redux-thunk";

// const store = createStore(
//     rootReducer,
//     // compose(applyMiddleware(thunk), 
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   );
  
//   export default store;
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window._REDUX_DEVTOOLS_EXTENSION_
            ? window._REDUX_DEVTOOLS_EXTENSION_()
            : f => f
    )
);

export default store;