import React, {useState} from 'react'
import './Toggle.css'

function Toggle() {

    const [toggle, setToggle] = useState(false);

    const toggler = () => {
        toggle ? setToggle(false): setToggle(true)
    }

    return (

        <div className="toggle_container">
           
           <h3>Lets See It In Action</h3>

            <label className='switch'>
                <input type='checkbox' />
                <span onClick={toggler} className='slider' />
            </label>

            {toggle ? <h5>This is the light on</h5> : <h5>This is the light off</h5>}

            {toggle ? <img src="https://pbs.twimg.com/media/E3agDn_VUAEA9A9?format=jpg&name=large" alt="" /> : <img src="https://pbs.twimg.com/media/E3agFG4VEAEDU-F?format=jpg&name=large" alt="" />}

            
        </div>
        
    )
}

export default Toggle;
