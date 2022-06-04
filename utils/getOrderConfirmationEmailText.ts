import getCartTotal from "./getCartTotal"
import getGroupedConsoles from "./getGroupedConsoles"

import { CartItemExtended } from "../models/cartItemExtended.model"

import { OrderData } from "../models/orderData.model"
import { ConsoleType } from "../models/consoleType.model"

import global from './../variables/global'




type Props = OrderData & { items: CartItemExtended[], consoleType: ConsoleType }


const getOrderConfirmationEmailText = (props: Props): string => {

    const { items, consoleType } = props
    const consoles = getGroupedConsoles({ items })

    let text = 'Спасибо за ваш запрос в нашем магазине\n'

    text += 'Мы свяжемся с вами в ближайшее время для уточнения деталей и согласования заказа.'
    text += '\n\n\n'
    text += 'ДЕТАЛИ ЗАКАЗА:'
    text += '\n\n'
    if (props.name.length > 0) text += `Имя:\t ${props.name}\n`
    if (props.city.length > 0) text += `Город:\t ${props.city}\n`
    if (props.address.length > 0) text += `Адрес:\t ${props.address}\n`
    if (props.phone.length > 0) text += `Тел:\t\t ${props.phone}\n`
    if (props.email.length > 0) text += `Email:\t ${props.email}\n`
    if (props.comments.length > 0) text += `Комментарий: ${props.comments}\n`

    if (items.length > 0) text += `\n\nЗАКАЗ:\n\n`
    items.forEach((item, index) => {
        text += `${index + 1}. ${item.title} \nцена: ${item.price.toLocaleString()} руб. \nкол-во: ${item.qnty} шт \nсумма: ${(item.price.noConsole * item.qnty).toLocaleString()} руб.\n\n`
    })

    if (consoleType === 'cvd') {
        text += '\nкронштейны:\n\n'
        consoles.forEach((console) => {
            const consolePrice = Math.floor(console.totalSum / console.qnty)
            text += `Кронштейн ${console.title}, ${console.colorName} \nцена: ${consolePrice.toLocaleString()} руб. \nкол-во: ${console.qnty} шт \nсумма: ${(console.totalSum).toLocaleString()} руб.\n\n`
        })
    }

    if (props.items.length > 0) text += `\nИтого: ${getCartTotal({ items, consoleType }).toLocaleString()} руб.\n\n`

    text += `С уважением,\nМагазин радиаторов Zehnder\n${global.website}\nтел.: +7 ${global.phone495String}\nтел.: +7 ${global.phone812String}`

    return text

}

export default getOrderConfirmationEmailText