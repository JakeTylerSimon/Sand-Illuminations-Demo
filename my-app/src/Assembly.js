import React from 'react'
import './Assembly.css'
import { YoutubePlayer } from "reactjs-media"

function Assembly() {
    return (
        <div id='assembly'>
            <h3 className='setUp'>Putting Together</h3>
            <YoutubePlayer
                src="https://youtu.be/2mV2bXqjku0" // Reqiured
                width={750}
                height={700}
            />        
        </div>
    )
}

export default Assembly
