import { useSelector, useDispatch } from "react-redux";

function Feeling() {
    //setting up dispatch to send value to redux
    const dispatch = useDispatch();
    const feeling = useSelector(store => store.feelingValue);

    const handleSelection = (event) => {

    }

    return (
        <>
            <h1>How are you feeling today? {feeling}</h1>
            <label for ="feeling">Select a feeling:</label>
            <br />
            <select onChange={handleSelection} id="feeling">
                <option value="great">Great!</option>
                <option value="reallygood">Really good!</option>
                <option value="fantastic">Fantastic!</option>
                <option value="news">I read the news and am insufferably sad!</option>
            </select>
        </>
    );
}

export default Feeling;