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
        <Typography sx={styles.smallText} display="inline">
          Наличие:&nbsp;
        </Typography>
        <Typography sx={styles.smallTextBold} display="inline">
          {model.inStock === "true" ? "склад" : "под заказ"}
        </Typography>
      </Box>
      <Box>
        <Typography sx={styles.smallText} display="inline">
          Модель:&nbsp;
        </Typography>
        <Typography sx={styles.smallTextBold} display="inline" itemProp="model">
          {model.nameShort}
        </Typography>
      </Box>
      <Box>
        <Typography sx={styles.smallText} display="inline">
          Цвет:&nbsp;
        </Typography>
        <Typography sx={styles.smallTextBold} display="inline" itemProp="color">
          {colorTitle}
        </Typography>
      </Box>
      <Box>
        <Typography sx={styles.smallText} display="inline">
          Подключение:&nbsp;
        </Typography>
        <Typography sx={styles.smallTextBold} display="inline">
          {connectionTitle}
        </Typography>
      </Box>
      <Box>
        <Typography sx={styles.smallText} display="inline">
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
        <Typography sx={styles.smallText} display="inline">
          Глубина:&nbsp;
        </Typography>
        <Typography sx={styles.smallTextBold} display="inline" itemProp="depth">
          {model.width} мм
        </Typography>
      </Box>
      <Box>
        <Typography sx={styles.smallText} display="inline">
          Длина секции:&nbsp;
        </Typography>
        <Typography sx={styles.smallTextBold} display="inline" itemProp="width">
          {model.lengthSection} мм
        </Typography>
      </Box>
      <Box>
        <Typography sx={styles.smallText} display="inline">
          Макс. число секций:&nbsp;
        </Typography>
        <Typography sx={styles.smallTextBold} display="inline">
          {model.sectionsMax} сек.
        </Typography>
      </Box>
      <Box>
        <Typography sx={styles.smallText} display="inline">
          Мощность секции (ΔT=50°):&nbsp;
        </Typography>
        <Typography sx={styles.smallTextBold} display="inline">
          {model.dt50} Вт
        </Typography>
      </Box>
      <Box>
        <Typography sx={styles.smallText} display="inline">
          Мощность секции (ΔT=60°):&nbsp;
        </Typography>
        <Typography sx={styles.smallTextBold} display="inline">
          {model.dt60} Вт
        </Typography>
      </Box>
      <Box>
        <Typography sx={styles.smallText} display="inline">
          Рабочее давление:&nbsp;
        </Typography>
        <Typography sx={styles.smallTextBold} display="inline">
          10 бар
        </Typography>
      </Box>
      <Box>
        <Typography sx={styles.smallText} display="inline">
          Испытательное давление:&nbsp;
        </Typography>
        <Typography sx={styles.smallTextBold} display="inline">
          15 бар
        </Typography>
      </Box>
      <Box>
        <Typography sx={styles.smallText} display="inline">
          Производитель:&nbsp;
        </Typography>
        <Typography
          sx={styles.smallTextBold}
          display="inline"
          itemProp="manufacturer"
        >
          Arbonia
        </Typography>
      </Box>
      <Box>
        <Typography sx={styles.smallText} display="inline">
          Гарантия:&nbsp;
        </Typography>
        <Typography sx={styles.smallTextBold} display="inline">
          10 лет
        </Typography>
      </Box>
    </Box>
  )
}

export default FeaturesTable
