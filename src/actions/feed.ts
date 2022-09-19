export function createPost(username: string, title: string, content: string){
    return {
        type: 'CREATE_POST',
        username,
        title,
        content
    }
}

export function updatePost(title: string, content: string, postId: string){
    return {
        type: 'UPDATE_POST',
        title,
        content,
        postId
    }
}

export function deletePost(postId: string){
    return {
        type: 'DELETE_POST',
        postId
    }
}