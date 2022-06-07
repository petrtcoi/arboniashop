import { ConsoleType } from "../models/consoleType.model"
import { CartItemExtended } from "../models/cartItemExtended.model"

const getCartTotal = ({ items, consoleType }: { items: CartItemExtended[], consoleType: ConsoleType }): number => {
    return items.reduce((acc: number, item) => consoleType === 'w161h121' ?
        (acc + item.qnty * item.price.w161h121) :
        (acc + item.qnty * item.price.noConsole),
        0)
}

export default getCartTotal