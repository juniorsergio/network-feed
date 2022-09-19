import { Store } from "."

type Action = {
    type: 'GET_POSTS' | 'CREATE_POST' | 'UPDATE_POST' | 'DELETE_POST',
    postId?: number,
    username?: string,
    created_datetime?: Date,
    title?: string,
    content?: string,
    data?: FeedType[]
}

export type FeedType = {
    id: number,
    title: string,
    username: string,
    created_datetime: Date,
    content: string
}

export default function feed(state: FeedType[], action: Action){
    switch(action.type){
        case 'CREATE_POST':
            return [
                {
                    id: action.postId,
                    title: action.title,
                    username: action.username,
                    created_datetime: action.created_datetime,
                    content: action.content
                },
                ...state
            ]
        case 'UPDATE_POST':
            return state.map(post => {
                if (post.id === action.postId) {
                    return {
                        ...post,
                        title: action.title,
                        content: action.content
                    }
                }
                else {
                    return post
                }
            })
        case 'DELETE_POST':
            return state.filter(post => post.id !== action.postId)
        case 'GET_POSTS':
            return action.data
        default:
            return null
    }
}