import React from 'react';
import '@styles/ProductItem.scss';
import btnAddCart from '@icons/bt_add_to_cart.svg'
import AppContext from '../contexts/AppContext';

const ProductItem = ({ product }) => {

	const {addToCart} = React.useContext(AppContext)

	function handleClick(item) {	
		addToCart(item)
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={btnAddCart} alt="cart-button" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
