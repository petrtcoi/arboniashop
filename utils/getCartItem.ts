import { ShoppingCartItem } from "../contexts/shoppingCartContext"
import { CartItemExtended } from "../models/cartItemExtended.model"
import { ColorOrigin } from "../models/colorOrigin.model"
import { ConnectionOrigin } from "../models/connectionOrigin.model"
import { ModelOrigin } from "../models/modelOrigin.model"

import calcRadiatorCost from './calcRadiatorCost'

type GetCartItemProps = {
    item: ShoppingCartItem
    models: ModelOrigin[]
    colors: ColorOrigin[]
    connections: ConnectionOrigin[]
    currencyRate: number
}


const getCartItem = ({ item, models, colors, connections, currencyRate }: GetCartItemProps): CartItemExtended => {

    const model = models.find(x => x.id === item.modelId)
    const color = colors.find(x => x.id === item.colorId)
    const connection = connections.find(x => x.id === item.connectionId)


    if (!model || !color || !connection) return {
        ...item,
        consoles: { w161h121: 0 },
        title: 'Error',
        price: { noConsole: 0, w161h121: 0 },
        colorName: 'цвет не определен'
    }


    const { price, consoles } = calcRadiatorCost({
        model,
        color,
        connection,
        currencyRate,
        sectionQnty: item.sectionQnty
    })
    const title = `${model.name} - ${item.sectionQnty > 9 ? item.sectionQnty : "0" + item.sectionQnty.toString()} сек. / ${connection.name} / ${color.name}`

    return {
        ...item,
        title,
        price,
        consoles,
        colorName: colors.find(x => x.id === item.colorId)?.nameShort || 'цвет не определен'
    }

}


export default getCartItem