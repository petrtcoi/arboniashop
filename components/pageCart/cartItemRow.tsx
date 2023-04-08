import React, { useContext } from "react";

import { TableCell, TableRow, IconButton } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

import { CartItemExtended } from "../../models/cartItemExtended.model";

import { ShoppingCartContext } from "../../contexts/shoppingCartContext";

import * as styles from "./../../styles/styles";

type CartItemRowProps = {
  item: CartItemExtended;
};

const CartItemRow: React.FC<CartItemRowProps> = ({ item }) => {
  const shoppingCartContext = useContext(ShoppingCartContext);
  const consoleQnty = item.consoles.w161h121;
  const consoleQntyString =
    consoleQnty > 0 ? `W161 + DS x ${consoleQnty}` : "нет вариантов";

  return (
    <TableRow sx={{ "&:hover": { backgroundColor: "#eeeeee" } }}>
      <TableCell component="th" scope="row" sx={styles.smallText}>
        {item.title}&nbsp;
        <span style={{ ...styles.smallTextThin }}>({consoleQntyString})</span>
      </TableCell>
      <TableCell component="th" scope="row" sx={styles.smallText} align="right">
        {item.price.noConsole.toLocaleString()}
      </TableCell>
      <TableCell component="th" scope="row" sx={styles.smallText} align="right">
        {item.qnty}
      </TableCell>
      <TableCell component="th" scope="row" sx={styles.smallText} align="right">
        {(item.price.noConsole * item.qnty).toLocaleString()}
      </TableCell>

      <TableCell
        component="th"
        scope="row"
        sx={styles.smallText}
        align="center"
      >
        <IconButton
          size="small"
          onClick={() =>
            shoppingCartContext.dispatch({
              type: "ADD_ITEM",
              value: {
                modelId: item.modelId,
                colorId: item.colorId,
                connectionId: item.connectionId,
                sectionQnty: item.sectionQnty,
                qnty: 1,
              },
            })
          }
        >
          <AddCircleOutlineOutlinedIcon color="success" />
        </IconButton>
        <IconButton
          size="small"
          onClick={() =>
            shoppingCartContext.dispatch({
              type: "REMOVE_ITEM",
              value: {
                modelId: item.modelId,
                colorId: item.colorId,
                connectionId: item.connectionId,
                sectionQnty: item.sectionQnty,
              },
            })
          }
        >
          <RemoveCircleOutlineOutlinedIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CartItemRow;
