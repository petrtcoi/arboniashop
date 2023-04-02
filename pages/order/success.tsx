import { NextPage } from "next";
import { Box, Typography } from "@mui/material";

import PageHeader from "../../components/pageHeader/pageHeader";

import * as style from "./../../styles/styles";

type SuccessPageProps = {};

const SuccessPage: NextPage<SuccessPageProps> = () => {
  return (
    <Box height="50vh" width="100hh">
      <PageHeader title={"Заказ оформлен!"} />
      <Box marginTop="20vh" width="400px" marginX="auto">
        <Typography
          variant="h5"
          component="h1"
          align="center"
          sx={{ textTransform: "uppercase" }}
        >
          Запрос принят
        </Typography>
        <Box marginTop="40px">
          <Typography sx={style.standardText}>
            Спасибо за заказ. Мы свяжемся с вами в ближайшие рабочие часы для
            уточнения и согласования деталей заказа.
          </Typography>
        </Box>
        <Box marginTop="40px" textAlign={"center"}>
          <Typography sx={style.standardText}>
            Команда ArboniaShop.ru
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SuccessPage;
