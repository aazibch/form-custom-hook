import useForm from './hooks/useForm';
import { signupForm } from './utils/formConfig';

import classes from './App.module.css';

function App() {
    const { createFormInputs, isFormValid } = useForm(signupForm);

    return (
        <div className={classes.app}>
            {createFormInputs()}
            <button disabled={!isFormValid()}>Submit</button>
        </div>
    );
}

export default App;
