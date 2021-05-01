import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Row, Col, Image, Button } from 'react-bootstrap';

import { returnItem } from '../actions/bagActions'

import { BAG_STATUS_TO_RETURN, BAG_STATUS_ACTIVE } from '../constants/bagConstants'


const BagItem = ({item, id, status}) => {
    const [returnStatus, setReturnStatus] = useState(status)

    const dispatch = useDispatch()

    const returnItemHandler = (id) => {
        if(returnStatus === BAG_STATUS_ACTIVE){
            dispatch(returnItem(id, BAG_STATUS_TO_RETURN))
        }else{
            dispatch(returnItem(id, BAG_STATUS_ACTIVE))
        }
    }

    return (

            <Row>
                <Col md={3}>
                    {item.image ? (
                        <Image src={item.image[0].image} alt={'image'} fluid rounded />
                        ) : (
                        <Image alt={'image'} fluid rounded />
                        )
                    }
                </Col>

                <Col md={9}>
                    <h4 className='cart-name'>
                        {item.name}
                    </h4>

                    <div className='d-flex flex-row'>
                        <div className='my-4'>
                            {parseFloat(item.price).toFixed(0)} токенов
                        </div>

                        <Button
                                type='button'
                                variant='white'
                                onClick={() => returnItemHandler(id)}
                            >
                                <i className='fas fa-undo-alt'></i>
                            </Button>
                    </div>
                </Col>
            </Row>
    )
}


export default BagItem;
