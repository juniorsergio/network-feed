import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as FeedActions from '../../actions/feed';
import { Container, ConfirmationButtons } from "./styles";

interface DeleteAlertProps {
    onRequestClose: () => void,
    deletePost: (postId: string) => void,
    postId: string
}

function DeleteAlert({ onRequestClose, deletePost, postId }: DeleteAlertProps){
    function handleDeletePost(){
        deletePost(postId)
        onRequestClose()
    }

    return (
        <Container>
            <p>Are you sure you want to delete this item?</p>
            <ConfirmationButtons>
                <button onClick={onRequestClose}>Cancel</button>
                <button onClick={handleDeletePost}>OK</button>
            </ConfirmationButtons>
        </Container>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators(FeedActions, dispatch)
)

export default connect(null, mapDispatchToProps)(DeleteAlert)