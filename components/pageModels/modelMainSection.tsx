import React, { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";

import ModelBadges from "./modelBadges";
import ModelMinPrice from "./modelMinPrice";
import FeaturesTable from "./featuresTable";

import calcRadiatorCost from "../../utils/calcRadiatorCost";

import { ModelOrigin } from "../../models/modelOrigin.model";
import { ConnectionOrigin } from "../../models/connectionOrigin.model";
import { ColorOrigin } from "../../models/colorOrigin.model";

import { CurrencyContext } from "../../contexts/currencyContext";

import global from "../../variables/global";
import * as styles from "../../styles/styles";
import Image from "next/image";

type ModelMainSectionProps = {
  modelCurr: ModelOrigin;
  colorCurr: ColorOrigin;
  connectionCurr: ConnectionOrigin;

  modelTitle: string;
  colorTitle: string;
  connectionTitle: string;

  handleBuyButton: () => void;
};

const ModelMainSection: React.FC<ModelMainSectionProps> = ({
  modelCurr,
  colorCurr,
  connectionCurr,
  modelTitle,
  colorTitle,
  connectionTitle,
  handleBuyButton,
}) => {
  const imagePrimaryPath = global.imagesModelPath + modelCurr.imagePrimary;
  const { rateEuro, isFetching } = useContext(CurrencyContext);

  const { price } = calcRadiatorCost({
    model: modelCurr,
    color: colorCurr,
    connection: connectionCurr,
    sectionQnty: modelCurr.inStockSections
      ? +modelCurr.inStockSections.split(",")[0]
      : undefined,
    currencyRate: rateEuro,
  });
  const minPrice = price.noConsole;

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
          {modelCurr.badgesString && (
            <Box>
              <ModelBadges badgesString={modelCurr.badgesString} />
            </Box>
          )}
          <Box
            textAlign="center"
            marginTop="20px"
          >
            {/* <div style={ { width: '100%', height: '100%', position: 'relative' } }> */}

            <img
              width="100%"
              height="100%"
              src={imagePrimaryPath}
              itemProp="image"
              alt={`Трубчатый радиатор ${modelCurr.name}`}
              title={`Трубчатый радиатор ${modelCurr.name}`}
              sizes="(min-width: 800px) 400px, 500px"
            />
            {/* </div> */}
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
            {/* БЛОК ЦЕНЫ */}
            <Box marginBottom="10px">
              <Box visibility={isFetching ? "visible" : "hidden"}>
                <Typography
                  sx={{ ...styles.smallTextThin, ...styles.smallTextRed }}
                >
                  подождите, обновляется курс валют...
                </Typography>
              </Box>

              <ModelMinPrice
                model={modelCurr}
                minPrice={minPrice}
                setTabBuy={handleBuyButton}
              />
            </Box>

            {/* БЛОК ХАРАКТЕРИСТИК */}
            <FeaturesTable
              model={modelCurr}
              modelTitle={modelTitle}
              colorTitle={colorTitle}
              connectionTitle={connectionTitle}
            />
          </Box>
        </Grid>
      </Grid>
      {modelCurr.description && (
        <Box
          marginTop="40px"
          marginLeft="20px"
          itemProp="description"
        >
          <Typography sx={styles.standardText}>
            {modelCurr.description}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ModelMainSection;
