import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

import { ColorOrigin } from "../../models/colorOrigin.model";

import * as styles from "../../styles/styles";

type SingleColorProps = {
  color: ColorOrigin;
  highlighted: boolean;
  handleClick: (colorId: string) => void;
};

const SingleColor: React.FC<SingleColorProps> = ({
  color,
  highlighted = false,
  handleClick,
}) => {
  return (
    <Box
      sx={{
        ...styles.textLinkBlock,
        color: highlighted ? "red" : "",
        justifyItems: "center",
      }}
      onClick={() => handleClick(color.id ? color.id : "none")}
    >
      <Box
        sx={{
          height: 100,
          width: 150,
          borderRadius: "5px",
          border: "1px solid black",
          display: "inline-block",
        }}
      >
        <img
          src={`/images/colors/${color.img}`}
          width={150}
          height={100}
          sizes={"150px"}
          style={{ borderRadius: "5px", border: "1px solid black" }}
          alt={`Цвет радиаторов Arbonia`}
        />
      </Box>
      <Box>
        <Typography sx={{ ...styles.smallText, color: "inherit" }}>
          {color.name}
        </Typography>
        <Typography
          sx={{ ...styles.smallTextThin, fontSize: "10px", color: "inherit" }}
        >
          Коэффициент {color.baseRate}
        </Typography>
      </Box>
    </Box>
  );
};

export default SingleColor;
