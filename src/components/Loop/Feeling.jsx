import { useDispatch } from "react-redux";

function Feeling() {
    //setting up dispatch to send value to redux
    const dispatch = useDispatch();
    
    const handleSelection = (event) => {
        const action = {
            type: 'SET_FEELING',
            payload: event.target.value,
        }
        dispatch(action);
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
        </>
    );
}

export default Feeling;