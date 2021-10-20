import React from 'react';
import {Container, Row , Col} from 'react-bootstrap';
import "./Styles/BSTC.css"
import video1 from '../Images/Video/Tongue_Twister.mov';

function Video(){
    return(
        <div id="experts">
            <h1 className='video-head'> Just For Fun </h1>
            <Container>
                    <video className = "vimmy"  src={video1} controls='controls' width='35%' height='10%' autoPlay='false' />
            </Container>
        </div>
    )
}

export default Video;
