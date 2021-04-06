import {commerce} from '../lib/commerce'
import * as cartActions from '../constants/actionTypes'

export const fetchCart = () => async (dispatch) => {
    try{
        const cart = await commerce.cart.retrieve();
        dispatch({
            type: cartActions.FETCH_CART,
            payload: cart,
        })
    }
    catch(error){
        console.log(error)
    }
}

export const addToCart = (productId, quantity = 1) => async (dispatch) => {
    try {
        const {cart} = await commerce.cart.add(productId, quantity)
        dispatch({
            type: cartActions.ADD_ITEM,
            payload: cart,
        })
    }
    catch(error){
        console.log(error)
    }
}

export const emptyCart = () => async(dispatch) => {
    try {
        const {cart} = await commerce.cart.empty();
        dispatch({
            type: cartActions.EMPTY_CART,
            payload: cart,
        })
    }
    catch(error){
        console.log(error)
    }
}

export const updateCart = (productId, quantity) => async(dispatch) => {
    try {
        const {cart} = await commerce.cart.update(productId, {quantity});
        dispatch({
            type: cartActions.UPDATE_CART,
            payload: cart,
        })
    }
    catch(error){
        console.log(error)
    }
}

export const refreshCart = () => async(dispatch) => {
    try {
        const {cart} = await commerce.cart.refresh();
        dispatch({
            type: cartActions.REFRESH_CART,
            payload: cart,
        })
    }
    catch(error){
        console.log(error)
    }
}
