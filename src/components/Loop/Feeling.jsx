import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Feeling() {
    //setting up dispatch to send value to redux
    const dispatch = useDispatch();
    //settig up history to send user to next page
    const history = useHistory();
    const feeling = useSelector(store => store.feelingValue);
    
    const handleSelection = (event) => {
        const action = {
            type: 'SET_FEELING',
            payload: event.target.value,
        }
        dispatch(action);
    }

    //validation and history push
    const nextPage = () => {
        if (feeling !== '') {
            history.push('/understanding');
        } else {
            alert('Please select an option.');
        }
        
    }

    return (
        <>
            <h1>How are you feeling today?</h1>
            <label htmlFor="feeling">Select a feeling:</label>
            <br />
            <select onChange={handleSelection} id="feeling">
                <option value="Great!">Great!</option>
                <option value="Really good!">Really good!</option>
                <option value="Fantastic!">Fantastic!</option>
                <option value="I read the news and am insufferably sad!">
                    I read the news and am insufferably sad!
                </option>
            </select>
            <button onClick={nextPage}>Next</button>
        </>
    );
}

export default Feeling;