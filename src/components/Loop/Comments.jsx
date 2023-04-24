import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments() {
    const dispatch = useDispatch();
    const commentsLength = useSelector(store => store.commentsValue.length);
    const history = useHistory();

    const handleComments = (event) => {
        const action = {
            type: 'SET_COMMENTS',
            payload: event.target.value,
        }
        dispatch(action);
    }

    return (
        <>
            <h1>Comments?</h1>
            <form>
                <textarea onChange={handleComments} rows="4" cols="50" placeholder="Leave a comment..."></textarea>
                <br />
                <input type="submit" /> 
                <div>
                    Characters: {commentsLength}<br />
                    Hint: There's not actually a character limit and a comment isn't required.
                </div>
            </form>
        </>
    );
}

export default Comments;