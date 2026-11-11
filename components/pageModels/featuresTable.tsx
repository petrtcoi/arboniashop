import { NextPage } from "next"

import { Box, Typography } from "@mui/material"

import { ModelOrigin } from "../../models/modelOrigin.model"

import * as styles from "../../styles/styles"

type FeaturesTableProps = {
  model: ModelOrigin
  modelTitle: string
  colorTitle: string
  connectionTitle: string
}

const FeaturesTable: NextPage<FeaturesTableProps> = ({
  model,
  colorTitle,
  connectionTitle,
}) => {
  return (
    <Box>
      <Box>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallText]}>
          Наличие:&nbsp;
        </Typography>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallTextBold]}>
          {model.inStock === "true" ? "склад" : "под заказ"}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallText]}>
          Модель:&nbsp;
        </Typography>
        <Typography
          itemProp="model"
          sx={[{
            display: "inline"
          }, styles.smallTextBold]}>
          {model.nameShort}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallText]}>
          Цвет:&nbsp;
        </Typography>
        <Typography
          itemProp="color"
          sx={[{
            display: "inline"
          }, styles.smallTextBold]}>
          {colorTitle}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallText]}>
          Подключение:&nbsp;
        </Typography>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallTextBold]}>
          {connectionTitle}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallText]}>
          Высота:&nbsp;
        </Typography>
        <Typography
          itemProp="height"
          sx={[{
            display: "inline"
          }, styles.smallTextBold]}>
          {model.height} мм
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallText]}>
          Глубина:&nbsp;
        </Typography>
        <Typography
          itemProp="depth"
          sx={[{
            display: "inline"
          }, styles.smallTextBold]}>
          {model.width} мм
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallText]}>
          Длина секции:&nbsp;
        </Typography>
        <Typography
          itemProp="width"
          sx={[{
            display: "inline"
          }, styles.smallTextBold]}>
          {model.lengthSection} мм
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallText]}>
          Макс. число секций:&nbsp;
        </Typography>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallTextBold]}>
          {model.sectionsMax} сек.
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallText]}>
          Мощность секции (ΔT=50°):&nbsp;
        </Typography>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallTextBold]}>
          {model.dt50} Вт
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallText]}>
          Мощность секции (ΔT=60°):&nbsp;
        </Typography>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallTextBold]}>
          {model.dt60} Вт
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallText]}>
          Рабочее давление:&nbsp;
        </Typography>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallTextBold]}>
          10 бар
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallText]}>
          Испытательное давление:&nbsp;
        </Typography>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallTextBold]}>
          15 бар
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallText]}>
          Производитель:&nbsp;
        </Typography>
        <Typography
          itemProp="manufacturer"
          sx={[{
            display: "inline"
          }, styles.smallTextBold]}>
          Arbonia
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallText]}>
          Гарантия:&nbsp;
        </Typography>
        <Typography
          sx={[{
            display: "inline"
          }, styles.smallTextBold]}>
          10 лет
        </Typography>
      </Box>
    </Box>
  );
}

export default FeaturesTable
