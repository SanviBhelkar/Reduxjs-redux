//Single Reducer
const redux = require('redux')
const createStore = redux.legacy_createStore

console.log('From index.js')

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

const initialState = {
    numofCakes :10,
    numofIceCreams: 20
}

//create Reducer
const reducer = (state = initialState,action )=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numofCakes: state.numofCakes - 1
        }
        case BUY_ICECREAM:return{
            ...state,
            numofIceCreams: state.numofIceCreams - 1
        }
        default: return state
    }
}
const store = createStore(reducer);
console.log('Initial state',store.getState());
store.subscribe(()=> console.log('update state',store.getState()));
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());