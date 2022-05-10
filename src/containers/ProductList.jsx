import React from 'react';
import ProductItem from '../components/ProductItem';
import '@styles/ProductList.scss';
import axios from 'axios'
import useGetProducts from '../hooks/useGetPrducts';

const API = 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {
	
	const products = useGetProducts(API)
	const productList = products.map((product) => (<ProductItem 
															key={product.id}
															product={product}
														/>))


	return (
		<section className="main-container">
			<div className="ProductList">
				{productList}
			</div>
		</section>
	);
}

export default ProductList;
