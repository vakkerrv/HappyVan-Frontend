import React, { Component } from 'react';
import { Navbar, Nav, Container, Row, Image, NavDropdown, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
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
				      	<Nav.Link>Каталог</Nav.Link>
				      </LinkContainer>
				      <LinkContainer to='/about'>
				      	<Nav.Link>О нас</Nav.Link>
				      </LinkContainer>
				    </Nav>

				    <Nav className="navbar-base ml-auto">
		      
  				      <LinkContainer to='/'>
				      	<Nav.Link>
				      		<Container className='navbar-icon'>
						      	<i className="fas fa-heart"></i>
				      			<p>Избранное</p>
					      	</Container>
				      	</Nav.Link>
				      </LinkContainer>
  				      
  				      {userInfo ? (
	  				      <LinkContainer to='/cart'>
					      	<Nav.Link>
					      		<Container className='navbar-icon'>
							      	<i className="fas fa-shopping-cart"></i>
							     	<p>Коризна</p>
						      	</Container>
					      	</Nav.Link>
					      </LinkContainer>
					      ) : (void 0)
				  	  }
			      

{/*        	      	  <div className='navbar-icon'>
				      {userInfo ? (
                    		<div className='p-2'>
                            	<i className="fas fa-user-alt"></i>
	                            <NavDropdown title='Аккаунт' id='username'  className='account-dropdown dropdown-menu-end'>
	                                <LinkContainer to='/profile'>
		                                    <NavDropdown.Item>Управление аккаунтом</NavDropdown.Item>
	                                </LinkContainer>
                                	<NavDropdown.Item onClick={logoutHandler}>Выйти</NavDropdown.Item>
                            	</NavDropdown>
                            </div>

                            ) : (
                            <LinkContainer to='/login'>
                                <Nav.Link><i className="fas fa-user"></i>Войти</Nav.Link>
                            </LinkContainer>
                        )}
                        </div>*/}

                        {userInfo ? (
                        <div className='p-2'>
	                        <Dropdown>
							  <Dropdown.Toggle id="account-dropdown">
								  <Container className='navbar-icon'>
								      	<i className="fas fa-user-alt"></i>
								     	<p>Аккаунт</p>
							      </Container>
							  </Dropdown.Toggle>

							  <Dropdown.Menu align="right">
							    <Dropdown.Item as={Link} to="/profile/">
	                                Управление аккаунтом
	                            </Dropdown.Item>
							    <Dropdown.Item onClick={logoutHandler}>Выйти</Dropdown.Item>
							  </Dropdown.Menu>
							</Dropdown>
						</div>) : (
							<div className='navbar-icon'>
								<LinkContainer to='/login'>
	                                <Nav.Link><i className="fas fa-user"></i>
	                                	<p>Войти</p>
	                                </Nav.Link>
	                            </LinkContainer>
	                        </div>
						)}

				    </Nav>

				  </Navbar.Collapse>
	  		  </Container>

			</Navbar>
		</header>
    );
};

export default Header;
