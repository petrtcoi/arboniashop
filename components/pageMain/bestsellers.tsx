import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

import * as styles from "../../styles/styles";
import Link from "next/link";
import { footerTextButtonUnderline } from "../../styles/stylesNavbarFooter";

export const linkStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontSize: "16px",
  fontWeight: "400",
  textDecoration: "none",
  color: "#333333",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
};

type BestsellersProps = {};

const Bestsellers: React.FC<BestsellersProps> = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        component="h2"
        textAlign="center"
        sx={{ textTransform: "uppercase" }}
      >
        Лидеры продаж
      </Typography>
      <Box marginTop="20px" maxWidth="700px">
        <Typography sx={{ ...styles.smallText }}>
          Наша компания может предложить широкий ассортимент трубчатых радиаторов Arbonia, включая модели, поставляемые под заказ. Наиболее популярные модели радиаторов Arbonia, которые мы поставляем в Россию, представлены ниже. Они поддерживаются в наличии на складах в Москве и Санкт-Петербурге. Склад регулярно пополняется. Поэтому модели могут быть поставлены в кратчайшие сроки в любой город России.
        </Typography>
      </Box>
      <Box marginTop="40px">

        <Grid container spacing={4}>
          <Grid item xs={12} md={4} >
            <Box textAlign="center" >
              <Link href="/models/2180">
                <a style={{ textDecoration: "none" }}>
                  <div
                    style={{ ...styles.roundSquareImage, display: "inline-block" }}
                  >
                    <Image
                      priority
                      src="/images/models/2180-0.jpeg"
                      width={"200px"}
                      height={"200px"}
                      sizes="200px"
                      alt="Трубчатый радиатор Arbonia 2180"
                    />
                  </div>

                  <Typography
                    sx={linkStyle}
                    component="h3"
                  >
                    Радиатор Arbonia 2180
                  </Typography>
                </a>
              </Link>

            </Box>
            <Typography sx={{ ...styles.smallText, paddingLeft: "15px", paddingRight: "15px", }}>
              Лидер продаж. Вертикальный 2-трубчатый радиатор. Высота: 180 см. Боковое и нижнее подключение. В наличии в белом цвете, а также RAL7016 и SF-3 Anthrazit metallic.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} >
            <Box textAlign="center" >
              <Link href="/models/3057">
                <a style={{ textDecoration: "none" }}>
                  <div
                    style={{ ...styles.roundSquareImage, display: "inline-block" }}
                  >
                    <Image
                      priority
                      src="/images/models/3057-0.jpeg"
                      width={"200px"}
                      height={"200px"}
                      sizes="200px"
                      alt="Трубчатый радиатор Arbonia 3057"
                    />
                  </div>
                  <Typography
                    sx={linkStyle}
                    component="h3"
                  >
                    Радиатор Arbonia 3057
                  </Typography>
                </a>
              </Link>

            </Box>
            <Typography sx={{ ...styles.smallText, paddingLeft: "15px", paddingRight: "15px" }}>
              Горизонтальный 3-трубчатый радиатор. Высота: 57 см. Боковое и нижнее подключение. В наличии в белом цвете. Подходит для замены старых алюминиевых или чугунных батарей.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} >
            <Box textAlign="center" >
              <Link href="/models/3180">
                <a style={{ textDecoration: "none" }}>
                  <div
                    style={{ ...styles.roundSquareImage, display: "inline-block" }}
                  >
                    <Image
                      priority
                      src="/images/models/3057-2.jpeg"
                      width={"200px"}
                      height={"200px"}
                      sizes="200px"
                      alt="Трубчатый радиатор Arbonia 3180"
                    />
                  </div>
                  <Typography
                    sx={linkStyle}
                    component="h3"
                  >
                    Радиатор Arbonia 3180
                  </Typography>
                </a>
              </Link>
            </Box>
            <Typography sx={{ ...styles.smallText, paddingLeft: "15px", paddingRight: "15px" }}>
              Вертикальный 3-трубчатый радиатор. Высота: 180 см. Боковое и нижнее подключение. В наличии в белом цвете. Наиболее мощная модель из поддерживаемых в наличии.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} >
            <Box textAlign="center" >
              <Link href="/models/3030">
                <a style={{ textDecoration: "none" }}>
                  <div
                    style={{ ...styles.roundSquareImage, display: "inline-block" }}
                  >
                    <Image
                      priority
                      src="/images/models/3030-0.jpeg"
                      width={"200px"}
                      height={"200px"}
                      sizes="200px"
                      alt="Трубчатый радиатор Arbonia 3030"
                    />
                  </div>
                  <Typography
                    sx={linkStyle}
                    component="h3"
                  >
                    Радиатор Arbonia 3030
                  </Typography>
                </a>
              </Link>
            </Box>
            <Typography sx={{ ...styles.smallText, paddingLeft: "15px", paddingRight: "15px" }}>
              Низкий 3-трубчатый радиатор. Высота: 30 см. Боковое и нижнее подключение. В наличии в белом цвете. Подходит для установки под окна с низкими подоконниками.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} >
            <Box textAlign="center" >
              <Link href="/models/2050">
                <a style={{ textDecoration: "none" }}>
                  <div
                    style={{ ...styles.roundSquareImage, display: "inline-block" }}
                  >
                    <Image
                      priority
                      src="/images/models/2050-0.jpg"
                      width={"200px"}
                      height={"200px"}
                      sizes="200px"
                      alt="Трубчатый радиатор Arbonia 2050"
                    />
                  </div>
                  <Typography
                    sx={linkStyle}
                    component="h3"
                  >
                    Радиатор Arbonia 2050
                  </Typography>
                </a>
              </Link>
            </Box>
            <Typography sx={{ ...styles.smallText, paddingLeft: "15px", paddingRight: "15px" }}>
              Двух-трубчатый радиатор высотой 50 см. Боковое и нижнее подключение. В наличии в белом цвете.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} >
            <Box textAlign="center" >
              <Link href="/models/3050">
                <a style={{ textDecoration: "none" }}>
                  <div
                    style={{ ...styles.roundSquareImage, display: "inline-block" }}
                  >
                    <Image
                      priority
                      src="/images/models/3057-3.jpeg"
                      width={"200px"}
                      height={"200px"}
                      sizes="200px"
                      alt="Трубчатый радиатор Arbonia 3050"
                    />
                  </div>
                  <Typography
                    sx={linkStyle}
                    component="h3"
                  >
                    Радиатор Arbonia 3050
                  </Typography>
                </a>
              </Link>
            </Box>
            <Typography sx={{ ...styles.smallText, paddingLeft: "15px", paddingRight: "15px" }}>
              Трех-трубчатый радиатор высотой 50 см. Боковое и нижнее подключение. В наличии в белом цвете. Модель является более мощной, чем 2050.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Bestsellers;
