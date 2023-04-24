import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support() {
    const dispatch = useDispatch();
    const support = useSelector(store => store.supportValue);
    const history = useHistory();

    const handleSupport = (event) => {
        const action = {
            type: 'SET_SUPPORT',
            payload: event.target.value,
        }
        dispatch(action);
    }


    return (
        <>
            <h1>How well are you feeling supported today?</h1>
            <br />
            <form>
                <label htmlFor="support">Describe your suport as a color:</label><br />
                <input onChange={handleSupport}type="color" id="support" name="support" />
            </form>
        </>
    );
}

export default Support;