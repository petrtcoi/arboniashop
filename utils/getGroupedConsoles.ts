import { CartItemExtended } from "../models/cartItemExtended.model"
import { ConsoleGroup } from '../models/consoleGroup.model'

const getGroupedConsoles = ({ items }: { items: CartItemExtended[] }): ConsoleGroup[] => {

    return items
        .reduce((acc: ConsoleGroup[], item) => {

            // const oldConsole = acc[.find(x => x.colorId === item.colorId)]
            const oldConsole = acc[0]
            return oldConsole ?
                acc.map(console => console.colorId !== oldConsole.colorId ?
                    console
                    :
                    {
                        ...console,
                        qnty: console.qnty + item.consoles.w161h121 * item.qnty,
                        totalSum: console.totalSum + (item.price.w161h121 - item.price.noConsole) * item.qnty

                    })
                :
                [
                    ...acc,
                    {
                        title: 'W161 + H121',
                        colorId: item.colorId,
                        qnty: item.consoles.w161h121 * item.qnty,
                        totalSum: (item.price.w161h121 - item.price.noConsole) * item.qnty,
                        colorName: item.colorName
                    }]
        }, [])
        .filter(console => console.qnty > 0)

}

export default getGroupedConsoles