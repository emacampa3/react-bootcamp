import { useReducer } from "react"

import CartContext from "./cart-context"

const defaultCartState = {
	items: [],
	totalAmount: 0,
}

const cartReducerFunction = (state, action) => {
	if (action.type === "ADD_ITEM") {
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount
		
			const existingCartItemIndex = state.items.findIndex(
				(item) => item.id === action.item.id
			)
			const existingCartItem = state.items(existingCartItemIndex)
			let updatedItems
			
			if (existingCartItem) {
				const updatedItem = {
					...existingCartItem,
					amount: existingCartItem.amount + action.item.amount
				}
				updatedItems = [...state.items]
				updatedItems[existingCartItem] = updatedItem
			} else {
				updatedItems = state.items.concat(action.item)
			}
			
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		}
	}
	return defaultCartState
}

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducerFunction,
		defaultCartState
	)

	const addItemToCart = (item) => {
		dispatchCartAction({ type: "ADD_ITEM", item: item })
	}

	const removeItemFromCart = (id) => {
		dispatchCartAction({ type: "REMOVE_ITEM", id: id })
	}

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCart,
		removeItem: removeItemFromCart,
	}

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	)
}

export default CartProvider
