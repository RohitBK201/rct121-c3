import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { Areducer } from "./app/reducer";
import thunk from "redux-thunk";
import { Authreducer } from "./auth/reducer";

const rootCombiner = combineReducers({

    app : Areducer,

    ath : Authreducer,

})



export const store = legacy_createStore(rootCombiner,applyMiddleware(thunk))


console.log(store.getState())