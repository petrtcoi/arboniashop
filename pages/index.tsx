import type { NextPage } from "next";
import { Box } from "@mui/material";

import PageHeader from "../components/pageHeader/pageHeader";
import PageTitle from "../components/pageTitle/pageTitle";
import Advantages from "../components/pageMain/advantages";
import Bestsellers from "../components/pageMain/bestsellers";
import WhyMouseLite from "../components/pageMain/whyMouseLite";
import Portfolio from "../components/pageMain/portfolio";
import Hero from "../components/hero/hero";
import getModelsData from "../api_utils/getModelsData";
import getColorsData from "../api_utils/getColorsData";
import getConnectionsData from "../api_utils/getConnectionsData";
import { ModelOrigin } from "../models/modelOrigin.model";
import { ColorOrigin } from "../models/colorOrigin.model";
import { ConnectionOrigin } from "../models/connectionOrigin.model";
import AboutArbonia from "../components/pageMain/aboutArbonia";
import AboutManufacturer from "../components/pageMain/aboutManufacturer";


type Props = {
  models: ModelOrigin[];
  colors: ColorOrigin[];
  connections: ConnectionOrigin[];
};

const Home: NextPage<Props> = (props: Props) => {

  return (
    <Box>
      <PageHeader
        title={
          "Радиаторы Arbonia купить в Москве и Петербурге | доставка по Росси | Гарантия 10 лет"
        }
        description={
          "Радиаторы Arbonia в наличии и под заказ. Быстрая доставка в любой город России. Официальная гарантия 10 лет. В наличии наиболее популярные модели."
        }
      />
      <PageTitle
        header={"Радиаторы Arbonia с официальной гарантией 10 лет"}
        subheader={"Доставка со складов в Москве и Санкт-Петербурге в любой город России"}
      />

      <Hero
        imgPath={"/images/sliders/high.jpeg"}
        header={"Трубчатые радиаторы Arbonia"}
        subheader={
          "Полный ассортимент стальных трубчатых радиаторов. В наличии и под заказ."
        }
      />
      <Box>

        <Box
          marginTop="50px"
          paddingX={{ xs: "10px", md: "20px" }}
        >
          <Bestsellers {...props} />
        </Box>

        <Box
          marginTop="50px"
          paddingX={{ xs: "10px", md: "20px" }}
        >
          <AboutArbonia />
        </Box>

        <Box
          marginTop="40px"
          paddingY="40px"
          sx={{ backgroundColor: "#e6e6e6" }}
        >
          <Box paddingX={{ xs: "10px", md: "20px" }}>
            <WhyMouseLite />
          </Box>
        </Box>

        <Box
          marginTop="50px"
          paddingX={{ xs: "20px", md: "30px" }}
        >
          <Advantages />
        </Box>

        <Box
          marginTop="40px"
          paddingY="40px"
        >
          <Box paddingX={{ xs: "20px", md: "20px" }}>
            <AboutManufacturer />
          </Box>
        </Box>

        <Box
          marginTop="40px"
          paddingX={{ xs: "10px", md: "20px" }}
        >
          <Portfolio />
        </Box>
      </Box>
    </Box>
  );
};

export async function getStaticProps() {
  const models: ModelOrigin[] = await getModelsData();
  const colors: ColorOrigin[] = await getColorsData();
  const connections: ConnectionOrigin[] = await getConnectionsData();

  return {
    props: {
      models,
      colors,
      connections,
    },
  };
}

export default Home;
