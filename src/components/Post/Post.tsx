import { Markup } from "interweave";
import { formatDistanceToNow } from 'date-fns'
import enUS from 'date-fns/locale/en-US'
import { Trash, NotePencil } from "phosphor-react";
import { connect } from "react-redux";
import { useState } from "react";
import ReactModal from 'react-modal';

import { Store } from "../../redux";
import DeleteAlert from "../DeleteAlert/DeleteAlert";
import WritePost from "../WritePost/WritePost";

import { Container, Title, PostInfo, PostOptions } from "./styles";

export type PostType = {
    id: string,
    title: string,
    author: string,
    publishedAt: Date,
    content: string
}

interface PostProps {
    post: PostType,
    username: string
}

function Post({ post, username }: PostProps){
    const [ isDeleteAlertModalOpen, setIsDeleteAlertModalOpen ] = useState(false)
    const [ isEditPostModalOpen, setIsEditPostModalOpen ] = useState(false)

    const postContent = '<p>' + post.content.replace(/\n/g, '</p><p>') + '</p>' 
    const publishedDateRelativeToNow = formatDistanceToNow(new Date(post.publishedAt), {
        locale: enUS,
        addSuffix: true
    })

    function handleOpenDeleteAlertModal(){
        setIsDeleteAlertModalOpen(true)
    }

    function handleCloseDeleteAlertModal(){
        setIsDeleteAlertModalOpen(false)
    }

    function handleOpenEditPostModal(){
        setIsEditPostModalOpen(true)
    }

    function handleCloseEditPostModal(){
        setIsEditPostModalOpen(false)
    }

    return (
        <Container>
            <Title>
                <h2>{post.title}</h2>
                { username === post.author &&
                    <PostOptions>
                        <button title='Delete post' onClick={handleOpenDeleteAlertModal}>
                            <Trash size={24} />
                        </button>
                        <button title='Edit post' onClick={handleOpenEditPostModal}>
                            <NotePencil size={24} />
                        </button>
                    </PostOptions>
                }
            </Title>

            <PostInfo>
                <span>@{post.author}</span>
                <span>{publishedDateRelativeToNow}</span>
            </PostInfo>

            <Markup tagName='div' className='post-content' content={postContent} />

            <ReactModal
                isOpen={isDeleteAlertModalOpen}
                onRequestClose={handleCloseDeleteAlertModal}
                overlayClassName='react-modal-overlay'
                className='react-modal-content'
                ariaHideApp={false}
            >
                <DeleteAlert
                    onRequestClose={handleCloseDeleteAlertModal}
                    postId={post.id}
                />
            </ReactModal >

            <ReactModal
                isOpen={isEditPostModalOpen}
                onRequestClose={handleCloseEditPostModal}
                overlayClassName='react-modal-overlay'
                className='react-modal-content'
                ariaHideApp={false}
            >
                <WritePost
                    onRequestClose={handleCloseEditPostModal}
                    title={post.title}
                    content={post.content}
                    postId={post.id}
                />
            </ReactModal >
        </Container>
    )
}

const mapStateToProps = (store: Store) => ({
	username: store.user.name
})

export default connect(mapStateToProps)(Post)