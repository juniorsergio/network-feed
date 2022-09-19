import { FormEvent, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import * as FeedActions from '../../actions/feed';
import { Container } from "./styles";

interface WritePostProps {
    updatePost: (title: string, content: string, postId: number) => void,
    onRequestClose: () => void,
    title: string,
    content: string,
    postId: number
}

function EditPost({ updatePost, onRequestClose, title, content, postId}: WritePostProps){  
    const [ newPostTitle, setNewPostTitle ] = useState(title)
    const [ newPostContent, setNewPostContent ] = useState(content)

    async function handleWritePost(event: FormEvent){
        event.preventDefault()

        const body = { title: newPostTitle, content: newPostContent }

        await fetch(`https://dev.codeleap.co.uk/careers/${postId}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        updatePost(newPostTitle, newPostContent, postId)
        if (onRequestClose){
            onRequestClose()
        }

        setNewPostTitle('')
        setNewPostContent('')
    }
    
    return (
        <Container>
            <h2>Edit item</h2>
            <span>Title</span>
            <input type='text' placeholder='Post title' value={newPostTitle} onChange={(e) => setNewPostTitle(e.target.value)} />
            <span>Content</span>
            <textarea placeholder='Post content' value={newPostContent} onChange={(e) => setNewPostContent(e.target.value)} />
            <button
                disabled={newPostTitle === '' || newPostContent === ''}
                onClick={handleWritePost}
            >
                SAVE
            </button>
        </Container>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators(FeedActions, dispatch)
)

export default connect(null, mapDispatchToProps)(EditPost)