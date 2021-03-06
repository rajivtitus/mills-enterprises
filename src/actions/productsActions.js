import {commerce} from '../lib/commerce'

import {FETCH_ALL_PRODUCTS} from '../constants/actionTypes'

export const fetchProducts = () => async (dispatch) => {
    
    try {
        const { data } = await commerce.products.list();

        dispatch({
            type: FETCH_ALL_PRODUCTS,
            payload: data,
        })
    }
    catch(error){
        console.log(error)
    }
}