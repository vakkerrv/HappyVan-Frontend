import React, { PropTypes } from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import background from "../images/landing-section-image.svg";

const LandingSection = () => {

    return (
        <Container className='landing-section-background' style={{}} fluid>
        	<Container className='landing-section text-center'>
        		<h1>Share toys. Entertain your kids. Save your money.</h1>
        		
                <Container className='d-flex justify-content-center'>
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
