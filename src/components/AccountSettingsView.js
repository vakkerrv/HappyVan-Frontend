import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'

function AccountSettingsView({ header, content, button }) {
    return (
			<Row>
				<h2 className='mb-3'>
					{header}
				</h2>

				<Col md={9} className='py-2'>
	                {content}
	            </Col>

	            <Col md={3} className='py-2 px-4'>
	                {button}
	            </Col>            
	        </Row>
    )
}

export default AccountSettingsView;
