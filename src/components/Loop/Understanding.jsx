import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding() {

    const handleUnderstanding = (event) => {
        const action = {
            type: 'SET_UNDERSTANDING',
            payload: event.target.value,
        }
        dispatchEvent(action);
    }

    return (
        <>
            <h1>How are you standing the content?</h1>
            <input type="radio" onChange={handleUnderstanding} id="under" value="Under standing" />
            <label htmlFor="under">Under standing</label>
            <br />
            <input type="radio" onChange={handleUnderstanding} id="even" value="Evenly standing" />
            <label htmlFor="even">Evenly standing</label>
            <br />
            <input type="radio" onChange={handleUnderstanding} id="over" value="Over standing" />
            <label htmlFor="over">Over standing</label>
        </>
    );
}

export default Understanding;