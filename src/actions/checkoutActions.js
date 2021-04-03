import {commerce} from '../lib/commerce'
import * as checkoutActions from '../constants/actionTypes'


export const generateCheckoutToken = (cartId) => async(dispatch) => {
    try{
        const token = await commerce.checkout.generateToken(cartId, {type: 'cart'});
        dispatch({
            type: checkoutActions.GENERATE_CHECKOUT_TOKEN,
            payload: token,
        })
    }
    catch(error){
        console.log(error)
    }
}