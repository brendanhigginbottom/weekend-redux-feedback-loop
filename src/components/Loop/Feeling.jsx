

function Feeling() {

    return (
        <>
            <h1>How are you feeling today?</h1>
            <label for ="feeling">Select a feeling:</label>
            <br />
            <select id="feeling">
                <option value="great">Great!</option>
                <option value="reallygood">Really good!</option>
                <option value="fantastic">Fantastic!</option>
                <option value="news">I read the news and am insufferably sad!</option>
            </select>
        </>
    );
}

export default Feeling;