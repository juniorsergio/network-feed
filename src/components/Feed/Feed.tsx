import { connect } from "react-redux";
import { Store } from "../../redux";
import Post from "../Post/Post";
import WritePost from "../WritePost/WritePost";
import { Container, Main } from "./styles";

interface FeedProps {
    posts: Store['feed']
}

function Feed({ posts }: FeedProps){
    return (
        <Container>
            <Main>
                <WritePost />

                {posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </Main>
        </Container>
    )
}

const mapStateToProps = (store: Store) => ({
    posts: store.feed
})

export default connect(mapStateToProps)(Feed)