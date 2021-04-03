import * as cartActions from '../constants/actionTypes'


const cartReducer = (state = {}, action) => {
    switch(action.type){
        case cartActions.FETCH_CART:
        case cartActions.ADD_ITEM:
        case cartActions.EMPTY_CART:
        case cartActions.UPDATE_CART:
            return {...action.payload}

        default:
            return state
    }
}

export default cartReducer