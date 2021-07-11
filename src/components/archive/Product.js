import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../actions/cartActions'
import { addToWishlist } from '../actions/wishlistActions'
import { addToWaitlist } from '../actions/waitlistActions'

const Product = ({product}) => {
	const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const addToCartHandler = (id) => {
        dispatch(addToCart(id))
    }

    const addToWishlistHandler = (id) => {
        dispatch(addToWishlist(id))
    }

    const addToWaitlistHandler = (id) => {
        dispatch(addToWaitlist(id))
    }

	return(
		<Card 
		style={{ width: '18rem' }}
		className = 'm-2 border-0'
		>
			<Link to={`/product/${product.id}`} className='d-flex justify-content-center'>
				<Card.Img 
					variant="top" 
					src={(product.image).length > 0 && product.image.filter(x=>x.main===true)[0].image}
					alt={'image'} 
				/>	  	
			</Link>

			<Link to={`/product/${product.id}`}>
				<Card.Body>
					<Card.Title>{product.name}</Card.Title>
					{product.price ? parseFloat(product.price).toFixed(0) : 0} токенов
				</Card.Body>
			</Link>
			
			<Button 
				onClick = {() => addToCartHandler(product.id)} 
				variant="primary" block
			>
				В корзину
			</Button>

			{userInfo && (
				<Button 
					onClick = {() => addToWishlistHandler(product.id)} 
					variant="primary" block
				>
				В избранное
			</Button>
				)}
			
			<Button 
				onClick = {() => addToWaitlistHandler(product.id)} 
				variant="primary" block
			>
				В лист ожидания
			</Button>

		</Card>
		
	)
}

export default Product
