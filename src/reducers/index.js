const initialState = {
    menu: [],
    loading: false,
    error: false,
    cart: [],
    totalPrice: 0
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'MENU_REQUESTED':
            return {
                ...state,
                error: false,
                loading: true
            }
        case 'MENU_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            }
        case 'MENU_LOADED':
            return {
                ...state,
                loading: false,
                error: false,
                menu: action.payload
            }
        case 'ITEM_ADDED':
            const id = action.payload;
            //if item was in list
            const itemId = state.cart.findIndex(item => item.id === id);
            if (itemId >= 0) {
                const itemInState = state.cart.find(item => item.id === id);
                const newItem = {
                    ...itemInState,
                    quantity: ++itemInState.quantity
                }
                return {
                    ...state,
                    cart: [...state.cart.slice(0, itemId), newItem, ...state.cart.slice(itemId+1)],
                    totalPrice: state.totalPrice + newItem.price
                }
            }
            //item wasn't in list
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                ...item,
                quantity: 1
            }

            return {
                ...state,
                cart: [...state.cart, newItem],
                totalPrice: state.totalPrice+newItem.price
            }   
        case 'ITEM_REMOVED':
            const idx = action.payload;
            const itemIdx = state.cart.findIndex(item => item.id === idx);
            return {
                ...state,
                cart: [...state.cart.slice(0, itemIdx), ...state.cart.slice(itemIdx + 1)],
                totalPrice: state.totalPrice - (state.cart[itemIdx].price*state.cart[itemIdx].quantity)
            }
        default:
            return state
    }
}

export default reducer;