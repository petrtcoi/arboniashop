import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

import * as styles from "../../styles/styles";

type EmptyCartMessageProps = {};

const EmptyCartMessage: React.FC<EmptyCartMessageProps> = () => {
  return (
    <Box
      marginTop="40px"
      marginBottom="100px"
      sx={{ maxWidth: "500px", marginX: "auto" }}
    >
      <Typography sx={styles.standardTextBold}>Ваша коризина пуста!</Typography>
      <Box marginTop="20px">
        <Typography sx={styles.standardText}>
          Вы можете добавить в нее товары из раздела{" "}
          {
            <Link href="/catalog">
              <a>Каталог</a>
            </Link>
          }{" "}
          или связаться с нами для консультации. Мы с радостью поможем подобрать
          наиболее подходящие радиаторы для вас.
        </Typography>
      </Box>
    </Box>
  );
};

export default EmptyCartMessage;
