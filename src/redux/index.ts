import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import user from './user'
import feed from './feed'

export type Store = {
    user: {
        name: string,
        persistant: boolean
    },
    feed: []
}

// convert object to string and store in localStorage
function saveToLocalStorage(store: Store) {
    try {
        if (store.user.persistant){
            const storedUser = JSON.stringify(store.user)
            localStorage.setItem("user", storedUser)
        }
        else {
            localStorage.removeItem("user")
        }
    } catch (e) {
        console.warn(e)
    }
}
  
// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
    try {
        const storedUser = localStorage.getItem("user")
        if (storedUser === null){
            return undefined
        }
        return JSON.parse(storedUser)
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
    preloadedState: {
        user: loadFromLocalStorage()
    }
})

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store