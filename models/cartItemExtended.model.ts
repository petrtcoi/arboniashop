import { ShoppingCartItem } from "../contexts/shoppingCartContext";
import { RadiatorConsoles } from "./radiatorConsoles.model";
import { RadiatorCost } from "./radiatorCost.model";

type CartItemExtended = ShoppingCartItem & {
  title: string;
  price: RadiatorCost;
  consoles: RadiatorConsoles;
  colorName: string;
};

export type { CartItemExtended };
