import React, { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

import AddToCartButton from "../addToCartButton/addToCartButton";

import { ModelOrigin } from "../../models/modelOrigin.model";
import { ConnectionOrigin } from "../../models/connectionOrigin.model";
import { ColorOrigin } from "../../models/colorOrigin.model";

import { CurrencyContext } from "../../contexts/currencyContext";

import getRadiatorData from "../../utils/getRadiatorData";
import calcRadiatorCost from "../../utils/calcRadiatorCost";

import global from "../../variables/global";
import * as styles from "../../styles/styles";

// import FeaturesTable from './featuresTable'

type ModelMainSectionProps = {
  model: ModelOrigin;
  color: ColorOrigin;
  connection: ConnectionOrigin;
  sectionQnty: number;
};

const RadiatorInfo: React.FC<ModelMainSectionProps> = ({
  model,
  color,
  connection,
  sectionQnty,
}) => {
  const imagePrimaryPath = global.imagesModelPath + model.imagePrimary;
  const { rateEuro, isFetching } = useContext(CurrencyContext);

  const { price } = calcRadiatorCost({
    model,
    color,
    connection,
    sectionQnty,
    currencyRate: rateEuro,
  });
  const {
    skuString,
    lengthString,
    dt50String,
    dt60String,
    priceString,
    oldPriceString,
  } = getRadiatorData({
    model,
    color,
    connection,
    sectionQnty,
    price: price.noConsole,
  });

  return (
    <Box>
      <Grid
        container
        spacing={2}
      >
        {/* ИЗОБРАЖЕНИЕ */}
        <Grid
          item
          xs={12}
          sm={6}
        >
          <Box
            textAlign="center"
            marginTop="20px"
          >
            <img
              width={500}
              height={500}
              sizes={"500px"}
              src={imagePrimaryPath}
              itemProp="image"
              alt={`Трубчатый радиатор ${model.name}`}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <Box
            marginTop="30px"
            marginLeft="20px"
          >
            {/* АРТИКУЛ */}
            <Box>
              <Typography
                sx={{ ...styles.smallTextThin }}
                itemProp="sku"
              >
                арт.: {skuString}
              </Typography>
            </Box>

            {/* БЛОК ЦЕНЫ */}

            <Box
              marginTop="10px"
              padding="10px"
              // sx={{ border: "1px solid #333333", borderRadius: "10px" }}
              textAlign="left"
            >
              <Box visibility={isFetching ? "visible" : "hidden"}>
                <Typography
                  sx={{ ...styles.smallTextThin, ...styles.smallTextRed }}
                >
                  подождите, обновляется курс валют...
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={styles.standardText}
                  display="inline"
                >
                  Цена:{" "}
                </Typography>

                <Typography
                  sx={{ fontSize: "30px", fontWeight: 600 }}
                  display="inline"
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <span itemProp="price">
                    <meta
                      itemProp="priceCurrency"
                      content="RUB"
                    />
                    <meta
                      itemProp="price"
                      content={priceString
                        .replace(",", "")
                        .replace(" ", "")
                        .trim()}
                    />
                    {priceString}
                  </span>{" "}
                  руб
                </Typography>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: 200,
                    textDecoration: "line-through",
                    color: "gray",
                  }}
                  display="inline"
                  marginX="15px"
                >
                  {oldPriceString} руб
                </Typography>
              </Box>

              <Box marginTop="10px">
                <AddToCartButton
                  model={model}
                  colorId={color.id}
                  connectionId={connection.id}
                  sectionQnty={sectionQnty}
                  qnty={1}
                  buttonSize={"medium"}
                  buttonColor={"dark"}
                  align={"left"}
                />
              </Box>
            </Box>

            {/* БЛОК ХАРАКТЕРИСТИК */}
            <Box marginTop="30px">
              <Box>
                <Typography sx={{ ...styles.smallTextThin }}>
                  Общие характеристики
                </Typography>
                <Box paddingLeft="30px">
                  <Box>
                    <Typography
                      sx={styles.smallText}
                      display="inline"
                      itemProp="model"
                    >
                      Модель:&nbsp;
                    </Typography>
                    <Typography
                      sx={styles.smallTextBold}
                      display="inline"
                    >
                      {model.nameShort}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={styles.smallText}
                      display="inline"
                      itemProp="color"
                    >
                      Цвет:&nbsp;
                    </Typography>
                    <Typography
                      sx={styles.smallTextBold}
                      display="inline"
                    >
                      {color.nameShort}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={styles.smallText}
                      display="inline"
                    >
                      Подключение:&nbsp;
                    </Typography>
                    <Typography
                      sx={styles.smallTextBold}
                      display="inline"
                    >
                      {connection.name}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={styles.smallText}
                      display="inline"
                    >
                      Число секций:&nbsp;
                    </Typography>
                    <Typography
                      sx={styles.smallTextBold}
                      display="inline"
                    >
                      {sectionQnty}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={styles.smallText}
                      display="inline"
                    >
                      Рабочее давление:&nbsp;
                    </Typography>
                    <Typography
                      sx={styles.smallTextBold}
                      display="inline"
                    >
                      10 бар
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={styles.smallText}
                      display="inline"
                    >
                      Испытательное давление:&nbsp;
                    </Typography>
                    <Typography
                      sx={styles.smallTextBold}
                      display="inline"
                    >
                      15 бар
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={styles.smallText}
                      display="inline"
                    >
                      Гарантия:&nbsp;
                    </Typography>
                    <Typography
                      sx={styles.smallTextBold}
                      display="inline"
                    >
                      10 лет
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box marginTop="30px">
                <Typography sx={{ ...styles.smallTextThin }}>
                  Габариты
                </Typography>
                <Box paddingLeft="30px">
                  <Box>
                    <Typography
                      sx={styles.smallText}
                      display="inline"
                    >
                      Длина:&nbsp;
                    </Typography>
                    <Typography
                      sx={styles.smallTextBold}
                      display="inline"
                      itemProp="width"
                    >
                      {lengthString} мм
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={styles.smallText}
                      display="inline"
                    >
                      Высота:&nbsp;
                    </Typography>
                    <Typography
                      sx={styles.smallTextBold}
                      display="inline"
                      itemProp="height"
                    >
                      {model.height} мм
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={styles.smallText}
                      display="inline"
                    >
                      Глубина:&nbsp;
                    </Typography>
                    <Typography
                      sx={styles.smallTextBold}
                      display="inline"
                      itemProp="depth"
                    >
                      {model.width} мм
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box marginTop="30px">
                <Typography sx={{ ...styles.smallTextThin }}>
                  Мощность
                </Typography>
                <Box paddingLeft="30px">
                  <Box>
                    <Typography
                      sx={styles.smallText}
                      display="inline"
                    >
                      Мощность (ΔT=50°):&nbsp;
                    </Typography>
                    <Typography
                      sx={styles.smallTextBold}
                      display="inline"
                    >
                      {dt50String} Вт
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={styles.smallText}
                      display="inline"
                    >
                      Мощность (ΔT=60°):&nbsp;
                    </Typography>
                    <Typography
                      sx={styles.smallTextBold}
                      display="inline"
                    >
                      {dt60String} Вт
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box marginTop="30px">
                <Typography sx={{ ...styles.smallTextThin }}>Другое</Typography>
                <Box paddingLeft="30px">
                  <Box>
                    <Typography
                      sx={styles.smallText}
                      display="inline"
                    >
                      Вес (без воды):&nbsp;
                    </Typography>
                    <Typography
                      sx={styles.smallTextBold}
                      display="inline"
                      itemProp="weight"
                    >
                      {Math.floor(+model.weightSection * sectionQnty * 100) /
                        100}{" "}
                      кг
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={styles.smallText}
                      display="inline"
                    >
                      Экспонента n:&nbsp;
                    </Typography>
                    <Typography
                      sx={styles.smallTextBold}
                      display="inline"
                    >
                      {model.exponentN}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box marginTop="20px" />
            </Box>
          </Box>
        </Grid>
      </Grid>
      {model.description && (
        <Box
          marginTop="40px"
          marginLeft="20px"
        >
          <Typography
            sx={styles.standardText}
            itemProp="description"
          >
            {model.description}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default RadiatorInfo;
