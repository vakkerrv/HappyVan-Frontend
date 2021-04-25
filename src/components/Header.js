import React, { Component } from 'react';
import { Navbar, Nav, Container, Row, Image, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../actions/userActions'

const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }


    return (
        <header>
			<Navbar expand="lg">
			  <Container>
			  	  <LinkContainer to='/'>	
					  <Navbar.Brand>
					  	<Image src="/icon.svg" id='brand-icon' fluid/>
					  </Navbar.Brand>
			      </LinkContainer>

				  <Navbar.Toggle aria-controls="basic-navbar-nav" />

				  <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="navbar-base mr-auto">
				      <LinkContainer to='/catalog'>
				      	<Nav.Link>Our Toys</Nav.Link>
				      </LinkContainer>
				      <LinkContainer to='/about'>
				      	<Nav.Link>About Us</Nav.Link>
				      </LinkContainer>
				    </Nav>

				    <Nav className="navbar-base ml-auto">
		      
  				      <LinkContainer to='/'>
				      	<Nav.Link>
				      		<Container className='navbar-icon'>
						      	<i className="fas fa-heart"></i>
				      			<p>My Wishlist</p>
					      	</Container>
				      	</Nav.Link>
				      </LinkContainer>
  				      
  				      {userInfo ? (
	  				      <LinkContainer to='/cart'>
					      	<Nav.Link>
					      		<Container className='navbar-icon'>
							      	<i className="fas fa-shopping-cart"></i>
							     	<p>My Cart</p>
						      	</Container>
					      	</Nav.Link>
					      </LinkContainer>
					      ) : (void 0)
				  	  }
			      

				      {userInfo ? (
                    		<Container className='navbar-icon'>
                            	<i className="fas fa-user-alt"></i>
	                            <NavDropdown title='Аккаунт' id='username'>
	                                <LinkContainer to='/profile'>
		                                    <NavDropdown.Item>Управление аккаунтом</NavDropdown.Item>
	                                </LinkContainer>
                                	<NavDropdown.Item onClick={logoutHandler}>Выйти</NavDropdown.Item>
                            	</NavDropdown>
                            </Container>

                            ) : (
                            <LinkContainer to='/login'>
                                <Nav.Link><i className="fas fa-user"></i>Войти</Nav.Link>
                            </LinkContainer>
                        )}



				    </Nav>

				  </Navbar.Collapse>
	  		  </Container>

			</Navbar>
		</header>
    );
};

export default Header;
