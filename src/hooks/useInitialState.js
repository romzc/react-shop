import React from 'react';

const initialState = {
    cart: []
}

const useInitialState = () => {
    const [state, setState] = React.useState(initialState)
    const addToCart = (playLoad) => {
        setState(prev => (
            {
                ...prev,
                 cart: [...prev.cart, playLoad]
            }
        ))
    }

    const removeFromCart = (payLoad, indexValue) => {
        
        setState(prev => (
            {
                ...prev,
                cart: state.cart.filter((items,index) => index !== indexValue)
            }
        ))
    }


    return {state, addToCart, removeFromCart}
}

export default useInitialState