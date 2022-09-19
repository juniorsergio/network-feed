import { FormEvent, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as FeedActions from '../../actions/feed';
import { Store } from "../../redux";
import { Container } from "./styles";

interface WritePostProps {
    createPost: (username: string, title: string, content: string) => void,
    updatePost: (title: string, content: string, postId: string) => void,
    username: string,
    onRequestClose?: () => void,
    title?: string,
    content?: string,
    postId?: string
}

function WritePost({ createPost, updatePost, username, onRequestClose, title = '', content = '', postId = ''}: WritePostProps){  
    const [ newPostTitle, setNewPostTitle ] = useState(title)
    const [ newPostContent, setNewPostContent ] = useState(content)

    function handleWritePost(event: FormEvent){
        event.preventDefault()

        if (title === ''){
            createPost(username, newPostTitle, newPostContent)
        }
        else {
            updatePost(newPostTitle, newPostContent, postId)
            if (onRequestClose) onRequestClose()
        }

        setNewPostTitle('')
        setNewPostContent('')
    }
    
    return (
        <Container>
            <h2>{title === '' ? 'What\'s on your mind?' : 'Edit item'}</h2>
            <span>Title</span>
            <input type='text' placeholder='Post title' value={newPostTitle} onChange={(e) => setNewPostTitle(e.target.value)} />
            <span>Content</span>
            <textarea placeholder='Post content' value={newPostContent} onChange={(e) => setNewPostContent(e.target.value)} />
            <button
                disabled={newPostTitle === '' || newPostContent === ''}
                onClick={handleWritePost}
            >
                {title === '' ? 'CREATE' : 'SAVE'}
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