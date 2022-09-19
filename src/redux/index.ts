import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import user from './user'
import feed from './feed'

export type Store = {
    user: {
        name: string,
        persistant: boolean
    },
    feed: {
        id: string,
        title: string,
        author: string,
        publishedAt: Date,
        content: string
    }[]
}

// convert object to string and store in localStorage
function saveToLocalStorage(store: Store) {
    try {
        const serialisedState = JSON.stringify(store)
        localStorage.setItem("persistantState", serialisedState)
    } catch (e) {
        console.warn(e)
    }
}
  
// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("persistantState")
        if (serialisedState === null){
            return undefined
        }
        return JSON.parse(serialisedState)
    } catch (e) {
        console.warn(e)
        return undefined
    }
}

const store = configureStore({
    reducer: combineReducers({
        user,
        feed
    }),
    preloadedState: loadFromLocalStorage()
})

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store