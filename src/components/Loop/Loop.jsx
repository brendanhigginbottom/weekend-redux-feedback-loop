import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Loop() {
    const dispatch = useDispatch();
    const history = useHistory();

    const loop = () => {
        const action = {
            type: 'CLEAR_FORM'
        }
        dispatch(action);
        history.push('/');
    }

    return (
        <>
            <h1>Thank you!</h1>
            <h2>Your responses have been recorded.</h2>
            <br />
            <button onClick={loop}>Take another survey</button>
        </>
    );
}

export default Loop;