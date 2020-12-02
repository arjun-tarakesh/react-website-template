import React from 'react'
import { Col, Container} from 'reactstrap'

import "./Herosec.css"
import Particles1 from './particles.js'
import Particles from 'react-particles-js';


const Herosection= () => {
    return (
        <div className="heroSec-main" style={{backgroundColor:"pink"}} >
            
        <Container className="heroSec" id="hsec" >
            
                <Col xs="6" >
                    <h1>image</h1>
                    
                </Col>
                
                <Col xs="6" >
                    <h1 >content</h1>
                    <p></p>
                    
                </Col>
                <Particles1 ></Particles1>
                
                     
        </Container>
       
    
    </div>
    )
}

export default Herosection
