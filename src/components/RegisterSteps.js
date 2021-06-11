import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function RegisterSteps({ step1, step2, step3, step4 }) {

    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/login'>
                        <Nav.Link>Регистрация</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>Регистрация</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/shipping'>
                        <Nav.Link>Выбор подписки</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>Выбор подписки</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link>Адрес</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>Адрес</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link>Оплата</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>Оплата</Nav.Link>
                    )}
            </Nav.Item>
        </Nav>
    )
}

export default RegisterSteps;
