import { useState, useEffect } from 'react'
import axios from 'axios'
import { DISCOUNT, GET_RATE_URL } from '../variables/currency'



const useGetCurrency = (): { rateEuro: number } => {

    const [rateEuro, setRateEuro] = useState<number>(0)
    useEffect(() => {
        const getRate = async () => {
            try {
                const data = await axios.get(`${GET_RATE_URL}/ARBONIASHOP` )
                if (data.status !== 200 || data.data.rate <= 0) throw new Error()
                setRateEuro(data.data.rate * DISCOUNT)
            } catch (err){
                setRateEuro(0)
            }
        }
        getRate()
    }, [])

    return { rateEuro }
}

export default useGetCurrency