import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments() {
    const dispatch = useDispatch();
    const commentsLength = useSelector(store => store.commentsValue.length);
    const history = useHistory();

    return (
        <>
            <h1>Comments?</h1>
            <form>
                <textarea rows="4" cols="50" placeholder="Leave a comment..."></textarea>
                <br />
                <input type="submit" /> 
                <div>
                    Characters: {commentsLength}
                </div>
            </form>
        </>
    );
}

export default Comments;