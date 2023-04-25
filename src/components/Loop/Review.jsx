import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Review() {
    const feeling = useSelector(store => store.feelingValue);
    const understanding = useSelector(store => store.understandingValue);
    const support = useSelector(store => store.supportValue);
    const comments = useSelector(store => store.commentsValue);
    const dispatch = useDispatch();

    const submitValues = () => {
        const action = {
            type: 'ADD_VALUES',
            payload: {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments: comments,
            }
        };
        dispatch(action);
    }

    return (
        <>
            <h1>Review</h1>
            <br />
            <div>
                <p>Feeling: {feeling}</p>
                <p>Standing: {understanding}</p>
                <p style={{color: `${support}` }}>Support: {support}</p>
                <p>Comments: {comments}</p>
            </div>
            <button onClick={submitValues}>Submit Survey</button>
        </>
    );
}

export default Review;