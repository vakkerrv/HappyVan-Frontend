import React, {  } from 'react';
import { useDispatch } from 'react-redux'
import { Row, Col, Image, Button } from 'react-bootstrap';

import { removeFromWishlist } from '../actions/wishlistActions'

const WishItem = ({item_details, id}) => {
    const dispatch = useDispatch()

    const removeFromWishlistHandler = (id) => {
        dispatch(removeFromWishlist(id))
    }

    return (

        <Row>
            <Col md={3}>
                {item_details.image ? (
                    <Image src={item_details.image[0].image} alt={'image'} fluid rounded />
                    ) : (
                    <Image alt={'image'} fluid rounded />
                    )
                }
            </Col>

            <Col md={9}>
                <h4 className='cart-name'>
                    {item_details.name}
                </h4>

                <div className='d-flex flex-row'>
                    <div className='my-4'>
                        {parseFloat(item_details.price).toFixed(0)} токенов
                    </div>
                        

                        <Button
                            type='button'
                            variant='white'
                            onClick={() => removeFromWishlistHandler(id)}
                        >
                            <i className='fas fa-trash'></i>
                        </Button>
                </div>
                

            </Col>
        </Row>
    )
}


export default WishItem;
