import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'

const ProductCarousel(image) {
		const [index, setIndex] = useState(0);

		const handleSelect = (selectedIndex, e) => {
			setIndex(selectedIndex);
		};

		return (
				<Carousel activeIndex={index} onSelect={handleSelect}>
						
						<Carousel.Item>
								{image}
						</Carousel.Item>
						{/*<Carousel.Item>
						<img
						className="d-block w-100"
						src="holder.js/800x400?text=Second slide&bg=282c34"
						alt="Second slide"
						/>

						<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
						<img
						className="d-block w-100"
						src="holder.js/800x400?text=Third slide&bg=20232a"
						alt="Third slide"
						/>

						<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
						</Carousel.Caption>
						</Carousel.Item>*/}
				</Carousel>
		);
		}

export default ProductCarousel
