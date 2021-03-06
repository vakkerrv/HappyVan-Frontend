import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Container, ListGroup, Row, Col } from 'react-bootstrap';

import WishItem from '../components/WishItem'
import { fetchWishlist } from '../actions/wishlistActions'

const WishlistScreen = (  ) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const wishlist = useSelector(state => state.wishlist)
    const { wishlistItems } = wishlist

    // useEffect(() => {
    //     if (userInfo && wishlistItems===0){
    //         dispatch(fetchWishlist())
    //     }
    // }, [userInfo, dispatch])
    
    useEffect(() => {
        dispatch(fetchWishlist())
    }, [userInfo, dispatch])
    
    return (
        <Container>
        	<h1>Избранное</h1>
                <Row>
                    <Col sm={8} id='new-items'>

                    {wishlistItems.length === 0 ? (
                        <Container></Container>
                        ) : (

                            <Container>
                                    
                                    <ListGroup variant='flush'>
                                        {wishlistItems.filter(x=>x.item_id).map(item => (
                                            <ListGroup.Item key={item.id}>
                                                <WishItem item_details = {item.item_id} id = {item.id}/>
                                            </ListGroup.Item>
                                            ))
                                        }
                                    </ListGroup>

                            </Container>
                        )
                    }
                    </Col>

                </Row>
        </Container>

    );
};

export default WishlistScreen;
