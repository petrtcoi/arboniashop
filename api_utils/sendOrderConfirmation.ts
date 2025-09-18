import axios from 'axios'

import getOrderConfirmationEmailHtml from '../utils/getOrderConfirmationEmailHtml'
import getOrderConfirmationEmailText from '../utils/getOrderConfirmationEmailText'

import { CartItemExtended } from '../models/cartItemExtended.model'
import { ConsoleType } from '../models/consoleType.model'
import { OrderData } from '../models/orderData.model'

import global from './../variables/global'

// const API_URL = 'https://us-central1-mouselite-helpers.cloudfunctions.net/api/email/send'
// const API_URL = "https://docker.homekomfort.ru/email";

type SendOrderConfirmationProps = OrderData & {
	items: CartItemExtended[]
	consoleType: ConsoleType
}
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
		// const res1 =
		//   props.email && props.email.length > 0
		//     ? await axios.post<RequestProps, RequestResult>(API_URL, {
		//         to: props.email,
		//         from: global.emailFrom,
		//         subject: "ArboniaShop.ru: ваш запрос принят",
		//         text,
		//         html,
		//       })
		//     : { data: "ok" };

		// const res2 = await axios.post<RequestProps, RequestResult>(API_URL, {
		//   to: global.emailNotifications,
		//   from: global.emailFrom,
		//   subject: "НОВЫЙ ЗАКАЗ",
		//   text,
		//   html,
		// });

		// return res1.data === "ok" && res2.data === "ok" ? "ok" : "error";

		const result = await axios.post('https://arufefet.beget.app/webhook/homekomfort-email', {
			to: props.email,
			from: global.emailFrom,
			subject: 'ArboniaShop.ru: ваш запрос принят',
			text,
			html,
		})
		if (result.status !== 200) {
			return 'error'
		}
		return 'ok'
	} catch {
		return 'error'
	}
}

export default sendOrderConfirmation
