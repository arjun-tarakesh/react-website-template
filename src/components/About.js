import React from 'react'
import { Container, Col, Row , Jumbotron} from 'reactstrap'
import Particles1 from './particles'
import "./about.css"

const about =()=> {
    return (
        <div>
             {/* reactstrap components */}
                <Jumbotron fluid className="content1" id="about">
                    <Container fluid className="content2">
                        <Row>
                            <Col  style={{marginLeft:"100px"}}>
                            {/* add img here */}
                                <img src="" alt="img"/>
                                </Col> 
                            <Col xs="6">
                                {/* content here */}
                                <h1>About</h1>
                                <p>lorem ipsum</p>
                            </Col>

                        </Row>
                    </Container>
                    
                </Jumbotron>
                
            
           
        </div>
    )
}

export default about;
