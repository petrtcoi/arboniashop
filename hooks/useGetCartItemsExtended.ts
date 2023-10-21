import { useState, useEffect, useContext } from "react";
import { ShoppingCartContext } from "../contexts/shoppingCartContext";
import { CurrencyContext } from "../contexts/currencyContext";

import getCartItem from "../utils/getCartItem";

import { CartItemExtended } from "../models/cartItemExtended.model";
import { ColorOrigin } from "../models/colorOrigin.model";
import { ConnectionOrigin } from "../models/connectionOrigin.model";
import { ModelOrigin } from "../models/modelOrigin.model";

type UseGetCartItemsExtendedProps = {
  models: ModelOrigin[];
  colors: ColorOrigin[];
  connections: ConnectionOrigin[];
};

const useGetCartItemsExtended = ({
  models,
  colors,
  connections,
}: UseGetCartItemsExtendedProps): { items: CartItemExtended[] } => {
  const shoppingCartContext = useContext(ShoppingCartContext);
  const { rateEuro } = useContext(CurrencyContext);

  const [items, setItems] = useState<CartItemExtended[]>(
    shoppingCartContext.state.items.map(item =>
      getCartItem({ item, models, colors, connections, currencyRate: rateEuro })
    )
  );
  useEffect(() => {
    setItems(
      shoppingCartContext.state.items.map(item =>
        getCartItem({
          item,
          models,
          colors,
          connections,
          currencyRate: rateEuro,
        })
      )
    );
  }, [shoppingCartContext.state.items, rateEuro]);

  return { items };
};

export default useGetCartItemsExtended;
