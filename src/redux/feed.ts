import { v4 as uuidv4 } from 'uuid';

type Action = {
    type: 'CREATE_POST' | 'UPDATE_POST' | 'DELETE_POST',
    username?: string,
    title?: string,
    content?: string,
    postId?: string
}

const INITIAL_STATE = [
    {
        id: uuidv4(),
        title: 'My First Post at CodeLeap Network!',
        author: 'Junior',
        publishedAt: new Date('09-18-2022 20:00'),
        content: 'Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.\nDuis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.'
    }
]

export default function feed(state = INITIAL_STATE, action: Action){
    switch(action.type){
        case 'CREATE_POST':
            return [
                {
                    id: uuidv4(),
                    title: action.title,
                    author: action.username,
                    publishedAt: new Date(),
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
        default:
            return state
    }
}