import { useState, useEffect, useLayoutEffect } from 'react';
import axios from 'axios';
import { DISCOUNT, GET_RATE_URL } from '../variables/currency';



const useGetCurrency = (): { rateEuro: number; } => {

    const [rateEuro, setRateEuro] = useState<number>(0);
    useLayoutEffect(() => {
        const getRate = async () => {
            try {
                console.log('FETCH DATA');
                const data = await axios.get(`${GET_RATE_URL}/ARBONIASHOP`);
                if (data.status !== 200 || data.data.rate <= 0) throw new Error();
                setRateEuro(data.data.rate * DISCOUNT);
            } catch (err) {
                setRateEuro(0);
            }
        };
        getRate();
    }, []);

    return { rateEuro };
};

export default useGetCurrency;