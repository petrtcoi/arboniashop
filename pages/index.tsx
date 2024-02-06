import type { NextPage } from "next";
import { Box } from "@mui/material";

import PageHeader from "../components/pageHeader/pageHeader";
import PageTitle from "../components/pageTitle/pageTitle";
import Advantages from "../components/pageMain/advantages";
import Bestsellers from "../components/pageMain/bestsellers";
import WhyMouseLite from "../components/pageMain/whyMouseLite";
import Portfolio from "../components/pageMain/portfolio";
import Hero from "../components/hero/hero";

const Home: NextPage = () => {
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
        header={"Магазин радиаторов Arbonia в России"}
        subheader={"Доставка со складов в Москве и Санкт-Петербурге"}
      />

      <Hero
        imgPath={"/images/sliders/high.jpeg"}
        header={"Магазин радиаторов Arbonia"}
        subheader={
          "Полный ассортимент стальных трубчатых радиаторов. В наличии и под заказ."
        }
      />
      <Box>

        <Box
          marginTop="50px"
          paddingX={{ xs: "10px", md: "20px" }}
        >
          <Bestsellers />
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
          paddingX={{ xs: "10px", md: "20px" }}
        >
          <Advantages />
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
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
