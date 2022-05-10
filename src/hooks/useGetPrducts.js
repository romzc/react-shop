
import React from 'react'
import axios from 'axios'


const useGetProducts = (API) => {
    const [products, setProducts] = React.useState([])
    React.useEffect(()=>{
        async function fetchData() {
            const response = await axios.get(API)
            setProducts(response.data)
        }
        fetchData()
},[])
    return products
}

export default useGetProducts