import React from 'react';
import ProductItem from '../components/ProductItem';
import '@styles/ProductList.scss';
import axios from 'axios'

const API = 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {
	const [products, setProducts] = React.useState([])

	React.useEffect(()=>{
		async function fetchData() {
			const response = await axios.get(API)
			setProducts(response.data)
		}
		fetchData()
	},[])

	const productList = products.map((prod, index) => (<ProductItem key={index} />))

	console.log(products)

	return (
		<section className="main-container">
			<div className="ProductList">
				{productList}
			</div>
		</section>
	);
}

export default ProductList;
