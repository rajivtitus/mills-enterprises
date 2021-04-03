import * as checkoutActions from '../constants/actionTypes'

const checkoutReducer = (state={},action) => {
    switch (action.type){
        case checkoutActions.GENERATE_CHECKOUT_TOKEN:
            return {...action.payload}

        default:
            return state
    }
}

export default checkoutReducer