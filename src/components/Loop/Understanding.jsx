import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding() {
    const dispatch = useDispatch();
    const understanding = useSelector(store => store.understandingValue);
    const history = useHistory();

    const handleUnderstanding = (event) => {
        const action = {
            type: 'SET_UNDERSTANDING',
            payload: event.target.value,
        }
        dispatch(action);
    }

    const nextPage = () => {
        if (understanding !== '') {
            history.push('/support');
        } else {
            alert('Please select a value!');
        }
    };

    return (
        <>
            <h1>How are you standing the content?</h1>
            {/* <h2>{understanding}</h2> */}
            <input type="radio" onChange={handleUnderstanding} name="standing" id="under" value="Under standing" />
            <label htmlFor="under">Under standing</label>
            <br />
            <input type="radio" onChange={handleUnderstanding} name="standing" id="even" value="Evenly standing" />
            <label htmlFor="even">Evenly standing</label>
            <br />
            <input type="radio" onChange={handleUnderstanding} name="standing" id="over" value="Over standing" />
            <label htmlFor="over">Over standing</label>
            <br />
            <button onClick={nextPage}>Next</button>
        </>
    );
}

export default Understanding;