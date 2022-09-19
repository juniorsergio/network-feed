type Action = {
    type: 'SET_USERNAME' | 'SIGN_OUT_USER',
    name: string,
    persistantUser: boolean
}

const INITIAL_STATE = {
    name: '',
    persistant: false
}

export default function user(state = INITIAL_STATE, action: Action){
    switch(action.type){
        case 'SET_USERNAME':
            return { ...state, name: action.name, persistant: action.persistantUser}
        case 'SIGN_OUT_USER':
            return { ...state, name: '', persistant: false}
        default:
            return state
    }
}