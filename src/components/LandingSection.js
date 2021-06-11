import React, { } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import { Link } from 'react-router-dom';
import section1_image from "../images/landing-section-image.jpg";

import '../css/LandingPageStyle.css';


const LandingSection = () => {

    return (
        <Container className=''>
        <Row className='pt-4'>
            <Col className='d-flex justify-content-start align-items-center' col={7}>
                <div>
                    <h1>Swapie</h1>
                    <h2>Детские игрушки по подписке</h2>            

                </div>

            </Col>

            <Col className='d-flex justify-content-end' col={5}>
                <img id='main_image' src={section1_image} alt=""/>
            </Col>

        </Row>
        	<Container className='landing-section text-center'>
        		<h1>Share toys. Entertain your kids. Save your money.</h1>
        		
                <Container className='d-flex justify-content-left'>
                    <LinkContainer 
                        to='/login'
                        className='btn-primary landing-button' 
                    >
                        <div>
                            Логин
                        </div>

                    </LinkContainer>

                    <LinkContainer 
                        to='/catalog'
                        className='btn-primary landing-button' 
                    >
                        <div>
                            Каталог
                        </div>

                    </LinkContainer>
                </Container>
        	</Container>
        </Container>
    );
};

export default LandingSection;
