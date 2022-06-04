import { CartItemExtended } from "../models/cartItemExtended.model"
import { ConsoleGroup } from '../models/consoleGroup.model'

const getGroupedConsoles = ({ items }: { items: CartItemExtended[] }): ConsoleGroup[] => {

    return items
        .reduce((acc: ConsoleGroup[], item) => {

            const oldConsole = acc.find(x => x.colorId === item.colorId)
            return oldConsole ?
                acc.map(console => console.colorId !== oldConsole.colorId ?
                    console
                    :
                    {
                        ...console,
                        qnty: console.qnty + item.consoles.cvd * item.qnty,
                        totalSum: console.totalSum + (item.price.cvd - item.price.noConsole) * item.qnty

                    })
                :
                [
                    ...acc,
                    {
                        title: 'CVD + BH',
                        colorId: item.colorId,
                        qnty: item.consoles.cvd * item.qnty,
                        totalSum: (item.price.cvd - item.price.noConsole) * item.qnty,
                        colorName: item.colorName
                    }]
        }, [])
        .filter(console => console.qnty > 0)

}

export default getGroupedConsoles