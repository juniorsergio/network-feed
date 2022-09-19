import { FeedType } from "../redux/feed"

export function getPosts(data: FeedType[]){
    return {
        type: 'GET_POSTS',
        data
    }
}

export function createPost(data: FeedType){    
    return {
        type: 'CREATE_POST',
        postId: data.id,
        title: data.title,
        username: data.username,
        created_datetime: data.created_datetime,
        content: data.content
    }
}

export function updatePost(title: string, content: string, postId: number){
    return {
        type: 'UPDATE_POST',
        title,
        content,
        postId
    }
}

export function deletePost(postId: number){    
    return {
        type: 'DELETE_POST',
        postId
    }
}