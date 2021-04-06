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

export const captureCheckout = (token, orderData) => async(dispatch) => {
    
    try{
        const order = await commerce.checkout.capture(token.id, {
            line_items: token.live.line_items,
            customer: {
                firstname: orderData.firstName,
                lastname: orderData.lastName,
                email: orderData.email,
            },
            shipping: {
                name: `${orderData.firstName} ${orderData.lastName}`,
                street: orderData.street,
                town_city: orderData.city,
                county_state: orderData.shippingSubdivision,
                postal_zip_code: orderData.postalCode,
                country: orderData.shippingCountry
            },
            fulfillment: {
                shipping_method: orderData.shippingOption
            },
            payment: {
                gateway: "stripe",
                stripe: {
                    payment_method_id: orderData.paymentMethod.id
                }
            },
        });
        dispatch({
            type: checkoutActions.CAPTURE_CHECKOUT,
            payload: order,
        })
    }
    catch(error){
        console.log(error)
    }
}