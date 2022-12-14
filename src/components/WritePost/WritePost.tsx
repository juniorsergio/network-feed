import { FormEvent, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import * as FeedActions from '../../actions/feed';
import { Store } from "../../redux";
import { FeedType } from "../../redux/feed";

import { Container } from "./styles";

interface WritePostProps {
    createPost: (data: FeedType) => void,
    username: string
}

function WritePost({ createPost, username}: WritePostProps){  
    const [ newPostTitle, setNewPostTitle ] = useState('')
    const [ newPostContent, setNewPostContent ] = useState('')

    async function handleWritePost(event: FormEvent){
        event.preventDefault()

        const body = { username, title: newPostTitle, content: newPostContent }

        const response = await fetch('https://dev.codeleap.co.uk/careers/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const data = await response.json()

        createPost(data)
        setNewPostTitle('')
        setNewPostContent('')
    }
    
    return (
        <Container>
            <h2>What's on your mind?</h2>
            <span>Title</span>
            <input type='text' placeholder='Post title' value={newPostTitle} onChange={(e) => setNewPostTitle(e.target.value)} />
            <span>Content</span>
            <textarea placeholder='Post content' value={newPostContent} onChange={(e) => setNewPostContent(e.target.value)} />
            <button
                disabled={newPostTitle === '' || newPostContent === ''}
                onClick={handleWritePost}
            >
                CREATE
            </button>
        </Container>
    )
}

const mapStateToProps = (store: Store) => ({
	username: store.user.name
})

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators(FeedActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(WritePost)