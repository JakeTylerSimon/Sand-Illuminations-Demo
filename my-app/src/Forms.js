import React, {useState} from 'react'
import FormContact from './FormContact';
import './Forms.css'
import FormSuccess from './FormSuccess'

function Forms() {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <div className='form-container'>
            
            <div className='form-content-left'>
                <img className='form-img' src="https://pbs.twimg.com/media/E3JtDwOVoAAjfxJ?format=png&name=900x900" alt="" />
            </div>
            {!isSubmitted ? <FormContact submitForm={submitForm} /> : <FormSuccess />}
            
        </div>
    )
}

export default Forms
