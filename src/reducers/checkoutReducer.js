import * as checkoutActions from '../constants/actionTypes'

const defaultState = {
    token: {},
    order: {},
}

const checkoutReducer = (state = defaultState, action) => {
    switch (action.type){
        case checkoutActions.GENERATE_CHECKOUT_TOKEN:
            return {
                ...state,
                token: {...action.payload},
            }
        
        case checkoutActions.CAPTURE_CHECKOUT:
            return {
                ...state,
                order: {...action.payload}
            }

        default:
            return state
    }
}

export default checkoutReducer