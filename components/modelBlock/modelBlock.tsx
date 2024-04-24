import React, { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import RadiatorList from "../radiatorList/radiatorList";

import { ColorOrigin } from "../../models/colorOrigin.model";
import { ConnectionOrigin } from "../../models/connectionOrigin.model";
import { ModelOrigin } from "../../models/modelOrigin.model";

import { CurrencyContext } from "../../contexts/currencyContext";

import global from "../../variables/global";
import * as styles from "../../styles/styles";

type ModelBlockProps = {
  model: ModelOrigin;
  color: ColorOrigin;
  connection: ConnectionOrigin;

  onlyTable?: boolean;

  title: string;
  description?: string;
  modelLink?: string;
};

const ModelBlock: React.FC<ModelBlockProps> = ({
  model,
  color,
  connection,
  title,
  description = "",
  modelLink,
  onlyTable = false,
}) => {
  const { rateEuro, isFetching } = useContext(CurrencyContext);
  const imagePrimaryPath = global.imagesModelPath + model.imagePrimary;

  return (
    <Box marginTop={onlyTable ? "0px" : "70px"}>
      {!onlyTable && (
        <>
          <Box paddingY="10px">
            <Typography
              variant="h6"
              component="h3"
              sx={{ textTransform: "uppercase" }}
              textAlign="center"
            >
              {title}
            </Typography>
          </Box>
          <Box marginTop="20px">
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                xs={3}
                sm={2}
                lg={2}
              >
                <img
                  width={500}
                  height={500}
                  sizes="500px"
                  src={imagePrimaryPath}
                  alt={`Трубчатый радиатор ${model.name}`}
                />
              </Grid>
              <Grid
                item
                container
                xs={9}
                sm={6}
                lg={6}
                direction="column"
                display="flex"
                justifyContent={"center"}
              >
                <Box>
                  <Typography sx={styles.smallText}>{description}</Typography>

                  {modelLink && (
                    <Box marginTop="10px">
                      <Link href={`/models/${modelLink}`}>
                        <a style={{ textDecoration: "none" }}>
                          <Typography sx={styles.smallTextDotted}>
                            подробнее о модели
                          </Typography>
                        </a>
                      </Link>
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </>
      )}

      <Box visibility={isFetching ? "visible" : "hidden"}>
        <Typography sx={{ ...styles.smallTextThin, ...styles.smallTextRed }}>
          подождите, обновляется курс валют...
        </Typography>
      </Box>

      <Box marginTop={"20px"}>
        <RadiatorList
          model={model}
          color={color}
          connection={connection}
          currencyRate={rateEuro}
        />
      </Box>
    </Box>
  );
};

export default ModelBlock;
