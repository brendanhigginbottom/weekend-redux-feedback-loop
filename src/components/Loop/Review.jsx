import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Review() {
    const feeling = useSelector(store => store.feelingValue);
    const understanding = useSelector(store => store.understandingValue);
    const support = useSelector(store => store.supportValue);
    const comments = useSelector(store => store.commentsValue);

    return (
        <>
            <h1>Review</h1>
            <br />
            <div>
                <p>Feeling: {feeling}</p>
                <p>Standing: {understanding}</p>
                <p>Support: {support}</p>
                <p>Comments: {comments}</p>
            </div>
        </>
    );
}

export default Review;