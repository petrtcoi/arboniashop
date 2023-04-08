import React from "react";
import { TableCell, TableRow } from "@mui/material";

import { CartItemExtended } from "../../models/cartItemExtended.model";

import getGroupedConsoles from "../../utils/getGroupedConsoles";

import * as styles from "./../../styles/styles";

type ConsoleListProps = {
  items: CartItemExtended[];
};

const ConsoleList: React.FC<ConsoleListProps> = ({ items }) => {
  return (
    <>
      {getGroupedConsoles({ items }).map((console, index) => {
        const consolePrice = Math.floor(console.totalSum / console.qnty);

        return (
          <TableRow sx={{ backgroundColor: "#eeeeee" }} key={index}>
            <TableCell component="th" scope="row" sx={styles.smallText}>
              Кронштейн {console.title}
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              sx={styles.smallText}
              align="right"
            >
              {Math.floor(consolePrice).toLocaleString()}
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              sx={styles.smallText}
              align="right"
            >
              {console.qnty}
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              sx={styles.smallText}
              align="right"
            >
              {console.totalSum.toLocaleString()}
            </TableCell>

            <TableCell
              component="th"
              scope="row"
              sx={styles.smallText}
              align="center"
            ></TableCell>
          </TableRow>
        );
      })}
    </>
  );
};

export default ConsoleList;
