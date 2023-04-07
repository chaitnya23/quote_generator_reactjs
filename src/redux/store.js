import {legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';


const initialState = {
    current:{},
    bookmarks:[]
}

 export const rootReducer = (state = initialState, action) => {
 
    const { type, payload } = action;

    switch (type) {
        case "ADD":
            return {...state ,bookmarks:[...state.bookmarks ,payload]};
            break;
        
        case "SET_BOOKMARKS":
            return {...state ,bookmarks:payload};
            break;

        case "SET":
            return {...state ,current:payload};
            break;

        default:
            return initialState;
            break;
    }
}

const reducers = combineReducers({rootReducer});

export const store = createStore(reducers);