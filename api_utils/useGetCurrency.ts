import { useState, useEffect } from "react";
import axios from "axios";
import { DISCOUNT, GET_RATE_URL } from "../variables/currency";

const DEFAULT_CURRENCY_RATE = 102;

const DISCOUNTED_DEF_PRICE = DEFAULT_CURRENCY_RATE * DISCOUNT;

const useGetCurrency = (): { rateEuro: number; isFetching: boolean } => {
  const [rateEuro, setRateEuro] = useState<number>(DISCOUNTED_DEF_PRICE);

  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    const getRate = async () => {
      try {
        const data = await axios.get(`${GET_RATE_URL}/ARBONIASHOP`);
        if (data.status !== 200 || data.data.rate <= 0) throw new Error();
        setRateEuro(data.data.rate * DISCOUNT);
        setIsFetching(false);
      } catch (err) {
        setRateEuro(DISCOUNTED_DEF_PRICE);
      }
    };
    getRate();
  }, []);

  return { rateEuro, isFetching };
};

export default useGetCurrency;
