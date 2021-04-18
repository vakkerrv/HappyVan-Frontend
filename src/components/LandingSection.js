import React, { PropTypes } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import background from "../images/icon.svg";
import background from "../images/landing-section-image.svg";

const LandingSection = () => {
    return (
        <Container className='landing-section-background' style={{}} fluid>
        	<Container className='landing-section text-center'>
        		<h1>Share toys. Entertain your kids. Save your money.</h1>
        		
                <Container>
                    <Button type='submit' variant='primary' className='landing-button' size='lg'>
                        Login
                    </Button>
                    <Button type='submit' variant='primary' className='landing-button' size='lg'>
                        Find your toys
                    </Button>
                </Container>
        	</Container>
        </Container>
    );
};

export default LandingSection;
