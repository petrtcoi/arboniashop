import { createContext } from "react";

type CurrencyContextType = {
  rateEuro: number;
  isFetching: boolean;
};

const initialState: CurrencyContextType = { rateEuro: 0, isFetching: true };
const CurrencyContext = createContext<CurrencyContextType>({ ...initialState });

export { CurrencyContext };
export type { CurrencyContextType };
