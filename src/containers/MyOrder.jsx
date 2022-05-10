import React from 'react';
import OrderItem from '../components/OrderItem';
import '@styles/MyOrder.scss';
import flechita from '@icons/flechita.svg'
import AppContext from '../contexts/AppContext';

const MyOrder = () => {

	const { state } = React.useContext(AppContext);

	const sumTotal = () => { 
		const reducer = (acumlator, currentValue) => acumlator + currentValue.price
		const sum = state.cart.reduce(reducer, 0)
		return sum
	}
	const productOrderList = state.cart.map((item, index) => (
				<OrderItem 
					product={item} 
					key={`orderItem-${item.id}-${index}`}
					index={index}
				/>
			))

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{productOrderList}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
