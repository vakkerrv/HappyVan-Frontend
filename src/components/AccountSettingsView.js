import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function AccountSettingsView({ header, content, button }) {
    return (
		<Container pb-2>
			<h2 className='mb-3'>
				{header}
			</h2>
			<Row>
				<Col md={9} className='py-2'>
	                {content}
	            </Col>

	            <Col md={3} className='py-2 px-4'>
	                {button}
	            </Col>            
	        </Row>
        </Container>
    )
}

export default AccountSettingsView;
