import { useState } from 'react';

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../utils/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmits = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);

            resetFormFields();

        } catch(error) {
            switch(error.code) {
                case "auth/wrong-password":
                    alert('incorrect password');
                    break;
                case "auth/usernot-found":
                    alert('incorrect email');
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value})
    }
    
    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmits}>

                <label></label>

                <FormInput label="Email" type='email' required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type='password' required onChange={handleChange} name="password" value={password}/>

                <div className='buttons-container'>
                    <Button type='submit'>Sign in</Button>
                    <Button type='button' onClick={signInWithGoogle} buttonType='google'>Google sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;