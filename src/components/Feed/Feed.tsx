import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Store } from "../../redux";
import { FeedType } from "../../redux/feed";
import * as FeedActions from '../../actions/feed';

import Post from "../Post/Post";
import WritePost from "../WritePost/WritePost";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";

import { Container, Main } from "./styles";

interface FeedProps {
    posts: FeedType[],
    getPosts: (data: FeedType[]) => void
}

function Feed({ posts, getPosts }: FeedProps){
    const [ isLoading, setIsLoading ] = useState(true)

    async function getPostsAsync(){
        const response = await fetch('https://dev.codeleap.co.uk/careers/')
        const data = await response.json()
        setIsLoading(false)
        return getPosts(data.results)
    }

    useEffect(() => {
        getPostsAsync()
    }, [])
    
    return (
        <Container>
            { isLoading
                ? <LoadingScreen />
                :
                <Main>
                    <WritePost />

                    {posts.map(post => (
                        <Post key={post.id} post={post} />
                    ))}
                </Main>
            }
            
        </Container>
    )
}

const mapStateToProps = (store: Store) => ({
    posts: store.feed
})

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators(FeedActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Feed)