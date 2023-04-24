import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support() {

    const testValue = (event) => {
        console.log(event.target.value);
    }


    return (
        <>
            <h1>How well are you feeling supported today?</h1>
            <br />
            <form>
                <label htmlFor="support">Describe your suport as a color:</label><br />
                <input onChange={testValue}type="color" id="support" name="support" />
            </form>
        </>
    );
}

export default Support;