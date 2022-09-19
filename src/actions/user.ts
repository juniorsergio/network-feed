export function setUsername(name: string, persistantUser = false){
    return {
        type: 'SET_USERNAME',
        name,
        persistantUser
    }
}

export function signOutUser(){
    return {
        type: 'SIGN_OUT_USER'
    }
}
