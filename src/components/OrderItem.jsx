import React from 'react';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png'
import AppContext from '../contexts/AppContext';

const OrderItem = ({ product, index }) => {

	const {removeFromCart} = React.useContext(AppContext)

	const handleRemove = (product, index) => {
		removeFromCart(product, index)
	} 

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} alt="close"  onClick={() => handleRemove(product, index)}/>
		</div>
	);
}

export default OrderItem;
