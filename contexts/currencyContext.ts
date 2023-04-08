import { createContext } from "react";

type CurrencyContextType = {
  rateEuro: number;
};

const initialState: CurrencyContextType = { rateEuro: 0 };
const CurrencyContext = createContext<CurrencyContextType>({ ...initialState });

export { CurrencyContext };
export type { CurrencyContextType };
