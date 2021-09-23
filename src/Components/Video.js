import React from 'react';
import {Container, Row , Col} from 'react-bootstrap';
import "./Styles/BSTC.css"
import video1 from '../Images/Video/Mayank.mp4'

function Video(){
    return(
        <div id="experts">
            <h1 className='video-head'> Experts Corner</h1>
            <Container>
                <Row className='video'>
                    <Col>
                    <video  src={video1} controls='controls' width='87%' height='85%' autoPlay='false' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Video;
