import axios from 'axios'
import { useEffect, useState } from 'react'
import { DISCOUNT, GET_RATE_URL } from '../variables/currency'

const DEFAULT_CURRENCY_RATE = 102.85

const DISCOUNTED_DEF_PRICE = DEFAULT_CURRENCY_RATE * DISCOUNT

const useGetCurrency = (): { rateEuro: number; isFetching: boolean } => {
	const [rateEuro, setRateEuro] = useState<number>(DISCOUNTED_DEF_PRICE)

	const [isFetching, setIsFetching] = useState<boolean>(true)

	useEffect(() => {
		const getRate = async () => {
			try {
				// const data = await axios.get(`${GET_RATE_URL}/ARBONIASHOP`)
				// if (data.status !== 200 || data.data.rate <= 0) throw new Error()
				setRateEuro(DEFAULT_CURRENCY_RATE * DISCOUNT)
				setIsFetching(false)
			} catch (err) {
				setRateEuro(DISCOUNTED_DEF_PRICE)
			}
		}
		getRate()
	}, [])

	return { rateEuro, isFetching }
}

export default useGetCurrency
