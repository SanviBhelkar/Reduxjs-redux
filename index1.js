//Combine Reducer
const redux = require('redux')
const createStore = redux.legacy_createStore
const combineReducers=redux.combineReducers

const applyMiddleware = redux.applyMiddleware;
const reduxlogger = require('redux-logger');

// console.log('From index1.js')
const logger=reduxlogger.createLogger();

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM="BUY_ICECREAM"

//Action creator 
function buyCake(){
    //Action
    return {
        type:BUY_CAKE,
        info:'First Redux action'
    }
}
function buyIceCream(){
    return{
        type:BUY_ICECREAM,
        info:'Second Redux action'
    }
}

const initialCakeState = {
    numofCakes :10
}

const initialIceCreamState = {
    numofIceCreams : 20
}

//create Reducer
const Cakereducer = (state = initialCakeState,action )=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numofCakes: state.numofCakes - 1
        }
        default: return state
    }
}
const IceCreamreducer = (state = initialIceCreamState,action )=>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
            numofIceCreams: state.numofIceCreams - 1
        }
        default: return state
    }
}

const rootReducer=redux.combineReducers({
    cake:Cakereducer,
    icecream:IceCreamreducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

// const store = createStore(rootReducer);
console.log('Initial state',store.getState());
// store.subscribe(()=> console.log('update state',store.getState()));

store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());