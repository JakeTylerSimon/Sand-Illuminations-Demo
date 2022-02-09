import React from 'react'
import useForms from './useForms'
import validate from './validateInfo'
import emailjs from 'emailjs-com'

const FormContact = ({submitForm}) => {

    const { handleChange, values, handleSubmit, errors} = useForms(submitForm, validate);

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'sand_Illuminations', e.target, 'user_t1hUN72rIdfJqIzBvKPbJ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div className="form-content-right">

            <form action="" className="form" onSubmit={(e) => {handleSubmit(e); sendEmail(e);}}>
                <h6>Get in contact with us!</h6>

                <div className="form-inputs">
                    <label htmlFor="name" className="form-label">
                       Full Name: 
                    </label>
                    <input id='name'
                        type="text" 
                        name='name' 
                        className="form-input" 
                        placeholder='Name'
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email Address:
                    </label>
                    <input id='email'
                        type="email" 
                        name='email' 
                        className="form-input" 
                        placeholder='Email'
                        value={values.email}
                        onChange={handleChange} 
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="number" className="form-label">
                        Contact Number:
                    </label>
                    <input id='number'
                        type="tel" 
                        name='number' 
                        className="form-input" 
                        placeholder='Contact number' />
                </div>
                <div className="form-inputs">
                    <label htmlFor="country" className="form-label">
                        Country:
                    </label>
                    <input id='country'
                        type="country" 
                        name='country' 
                        className="form-input" 
                        placeholder='Country' 
                        value={values.country}
                        onChange={handleChange}
                    />
                    {errors.country && <p>{errors.country}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="message" className="form-label">
                            Message:
                    </label>
                        <textarea id='message'
                            type="message" 
                            name='message' 
                            className="form-input" 
                            placeholder='Enter message here' 
                            value={values.message}
                            onChange={handleChange}
                        />
                </div>
                <button className="form-input-btn" type='submit' >
                    Contact Us
                </button>
            </form>

        </div>
    )
}

export default FormContact
