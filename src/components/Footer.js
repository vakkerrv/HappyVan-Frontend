import React, { } from 'react';
import { Image, Container, Row, Col, ListGroup } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
    		<hr></hr>
        	<Container className='mb-5'>
                <Row>
                	<Col sm={12} md={3} lg={3} xl={3}>
                		<Image src="/icon.svg" id='brand-icon' fluid/>
                	</Col>
                	<Col sm={12} md={3} lg={3} xl={3}>	
                		<ListGroup variant="flush">
						  <ListGroup.Item className='footer-list-item'><h2>Services</h2></ListGroup.Item>
						  <ListGroup.Item>Our Toys</ListGroup.Item>
						  <ListGroup.Item>Donate Toys</ListGroup.Item>
						  <ListGroup.Item>Book Collection</ListGroup.Item>
						</ListGroup>
                	</Col>
                	<Col sm={12} md={3} lg={3} xl={3}>
                		<ListGroup variant="flush">
						  <ListGroup.Item><h2>About us</h2></ListGroup.Item>
						  <ListGroup.Item>Our Story</ListGroup.Item>
						  <ListGroup.Item>How it works</ListGroup.Item>
						  <ListGroup.Item>Why HappyVan</ListGroup.Item>
						</ListGroup>
                	</Col>
                	<Col sm={12} md={3} lg={3} xl={3}>
                		<ListGroup variant="flush">
						  <ListGroup.Item><h2>Contact us</h2></ListGroup.Item>
						  <ListGroup.Item>123456789</ListGroup.Item>
						  <ListGroup.Item>WhatsApp</ListGroup.Item>
						  <ListGroup.Item>helpdesk@happyvan.co.uk</ListGroup.Item>
						</ListGroup>
                	</Col>
                </Row>
        	</Container>
        </footer>
    );
};

export default Footer;
