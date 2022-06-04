import axios from "axios"

import getOrderConfirmationEmailHtml from "../utils/getOrderConfirmationEmailHtml"
import getOrderConfirmationEmailText from "../utils/getOrderConfirmationEmailText"

import { CartItemExtended } from "../models/cartItemExtended.model"
import { OrderData } from "../models/orderData.model"
import { ConsoleType } from '../models/consoleType.model'

import global from './../variables/global'


const API_URL = 'https://us-central1-mouselite-helpers.cloudfunctions.net/api/email/send'

type SendOrderConfirmationProps = OrderData & { items: CartItemExtended[], consoleType: ConsoleType }
type RequestProps = {
    from: string
    to: string
    bcc: string
    subject: string
    text: string
    html: string
}
type RequestResult = { data: 'ok' | 'error' }

const sendOrderConfirmation = async (props: SendOrderConfirmationProps): Promise<'ok' | 'error'> => {

    const text = getOrderConfirmationEmailText(props)
    const html = getOrderConfirmationEmailHtml(props)

    try {

        const res1 = (props.email && props.email.length > 0) ?
            await axios.post<RequestProps, RequestResult>(API_URL, {
                to: props.email,
                from: global.emailFrom,
                subject: 'Zehnders.ru: ваш запрос принят',
                text,
                html
            })
            : { data: 'ok' }


        const res2 = await axios.post<RequestProps, RequestResult>(API_URL, {
            to: global.emailNotifications,
            from: global.emailFrom,
            subject: 'НОВЫЙ ЗАКАЗ',
            text,
            html
        })

        return ((res1.data === 'ok' && res2.data === 'ok') ? 'ok' : 'error')
    } catch {
        return 'error'
    }
}

export default sendOrderConfirmation