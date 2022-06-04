import { createContext, Dispatch } from 'react'

import { ConsoleType } from '../models/consoleType.model'
import { ShoppingCartItem } from '../models/shoppingCartItem.model'


type ShoppingCartState = {
    items: ShoppingCartItem[]
    itemsFetched: boolean
    consoleType: ConsoleType
}

type ActionAddItem = { type: 'ADD_ITEM', value: ShoppingCartItem }
type ActionRemoveItem = { type: 'REMOVE_ITEM', value: Omit<ShoppingCartItem, "qnty"> }
type ActionSetFetchedItems = { type: 'SET_FETCHED_ITEMS', value: ShoppingCartItem[] }
type ActionSetConsoleType = { type: 'SET_CONSOLE_TYPE', value: ConsoleType }
type ActionReset = { type: 'RESET' }

type ShoppingCartAction =
    ActionAddItem
    | ActionRemoveItem
    | ActionSetFetchedItems
    | ActionSetConsoleType
    | ActionReset

type ShoppingCartContextType = {
    state: ShoppingCartState,
    dispatch: Dispatch<ShoppingCartAction>
}

const initialState: ShoppingCartState = { items: [], consoleType: 'cvd', itemsFetched: false }
const ShoppingCartContext = createContext<ShoppingCartContextType>({ state: initialState, dispatch: () => null })



const reducer = (state: ShoppingCartState, action: ShoppingCartAction): ShoppingCartState => {
    switch (action.type) {
        case 'ADD_ITEM':
            return actionAddItem(state, action.value)
        case 'REMOVE_ITEM':
            return actionRemoveItem(state, action.value)
        case 'SET_FETCHED_ITEMS':
            return actionSetFetchedItems(state, action.value)
        case 'SET_CONSOLE_TYPE':
            return actionSetConsoleType(state, action.value)
        case 'RESET':
            return actionReset(state)
        default:
            return state
    }
}




const actionAddItem = (state: ShoppingCartState, newItem: ShoppingCartItem) => {

    if (!state.itemsFetched) return state
    if (newItem.modelId.length < 2 ||
        newItem.colorId.length < 2 ||
        newItem.connectionId.length < 2 ||
        newItem.sectionQnty <= 0) return state

    const oldItemIndex = state.items.findIndex(oldItem =>
        oldItem.modelId === newItem.modelId &&
        oldItem.colorId === newItem.colorId &&
        oldItem.connectionId === newItem.connectionId &&
        oldItem.sectionQnty === newItem.sectionQnty
    )

    if (oldItemIndex === -1) return { ...state, items: [...state.items, newItem] }

    return {
        ...state,
        items: state.items.map((item, index) => {
            if (index !== oldItemIndex) return item
            return { ...item, qnty: item.qnty + 1 }
        })
    }
}


const actionRemoveItem = (state: ShoppingCartState, removedItem: Omit<ShoppingCartItem, "qnty">) => {

    if (!state.itemsFetched) return state

    const oldItemIndex = state.items.findIndex(oldItem =>
        oldItem.modelId === removedItem.modelId &&
        oldItem.colorId === removedItem.colorId &&
        oldItem.connectionId === removedItem.connectionId &&
        oldItem.sectionQnty === removedItem.sectionQnty
    )
    if (oldItemIndex === -1) return state

    return {
        ...state,
        items: state.items.map((item, index) => {
            if (index !== oldItemIndex) return item
            if (item.qnty > 1) {
                return { ...item, qnty: item.qnty - 1 }
            }
        }).filter(x => x !== undefined) as ShoppingCartItem[]
    }
}


const actionSetFetchedItems = (state: ShoppingCartState, items: ShoppingCartItem[]) => {
    if (state.itemsFetched) return state
    return { ...state, items, itemsFetched: true }
}

const actionSetConsoleType = (state: ShoppingCartState, consoleType: ConsoleType) => {
    return {...state, consoleType}
}

const actionReset = (state: ShoppingCartState) => {
    return { ...state, items: [] }
}




export { reducer, initialState, ShoppingCartContext }
export type { ShoppingCartContextType, ShoppingCartItem, ActionReset, ShoppingCartAction }