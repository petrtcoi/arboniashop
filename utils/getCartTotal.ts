import { ConsoleType } from "../models/consoleType.model"
import { CartItemExtended } from "../models/cartItemExtended.model"

const getCartTotal = ({ items, consoleType }: { items: CartItemExtended[], consoleType: ConsoleType }): number => {
    return items.reduce((acc: number, item) => consoleType === 'cvd' ?
        (acc + item.qnty * item.price.cvd) :
        (acc + item.qnty * item.price.noConsole),
        0)
}

export default getCartTotal