import React, { useRef } from "react"
import { Box, Grid, Typography } from "@mui/material"

import ModelBlock from "../../components/modelBlock/modelBlock"
import PageHeader from "../../components/pageHeader/pageHeader"
import Hero from "../../components/hero/hero"

import { SetComponentProps } from "../../models/setComponentProps.model"

import global from "../../variables/global"
import getModelsData from "../../api_utils/getModelsData"
import { ColorOrigin } from "../../models/colorOrigin.model"
import { ModelOrigin } from "../../models/modelOrigin.model"
import { ConnectionOrigin } from "../../models/connectionOrigin.model"
import getColorsData from "../../api_utils/getColorsData"
import getConnectionsData from "../../api_utils/getConnectionsData"

import * as styles from "../../styles/styles"

type Props = {
  models: ModelOrigin[]
  colors: ColorOrigin[]
  connections: ConnectionOrigin[]
}

const SetRAL9016Model: React.FC<SetComponentProps> = ({
  models,
  colors,
  connections,
}: Props) => {
  const refUnder40 = useRef<HTMLElement>(null)
  const refAbout50 = useRef<HTMLElement>(null)
  const refHigh = useRef<HTMLElement>(null)

  return (
    <Box>
      <PageHeader
        title={
          "Arbonia RAL 9016 | трубчатые радиаторы белого цвета в наличии | ArboniaShop.ru"
        }
        description="Трубчатые радиаторы Arbonia в белом цвете в наличии. Выгодные цены и доставка в любой город России. Официальная гарантия на всю продукцию."
      />
      <Hero
        imgPath={"/images/sliders/slide.jpeg"}
        header={"Arbonia RAL 9016"}
        subheader={"Трубчатые радиаторы белого цвета в наличии"}
      />
      <Box sx={{ ...global.pagePadding }}>
        <Box
          marginBottom="30px"
          display="flex"
          flexDirection="row"
          gap="15px"
          flexWrap="wrap"
        >
          <Box
            onClick={() => {
              if (!refUnder40.current) return
              refUnder40.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            <Typography sx={{ ...styles.smallTextRedLink, cursor: "pointer" }}>
              Низкие радиаторы Arbonia (до 40 см)
            </Typography>
          </Box>
          <Box
            onClick={() => {
              if (!refAbout50.current) return
              refAbout50.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            <Typography sx={{ ...styles.smallTextRedLink, cursor: "pointer" }}>
              Радиаторы Arbonia стандартной высоты
            </Typography>
          </Box>
          <Box
            onClick={() => {
              if (!refHigh.current) return
              refHigh.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            <Typography sx={{ ...styles.smallTextRedLink, cursor: "pointer" }}>
              Высокие радиаторы Arbonia в белом цвете
            </Typography>
          </Box>
        </Box>

        {/* Невысокие радиаторы */}
        <Box
          marginTop="40px"
          ref={refUnder40}
        >
          <Typography sx={{ ...styles.standardText }}>
            <h2>Радиаторы Arbonia небольшой высоты (до 40 см)</h2>
            <Box
              marginTop="20px"
              maxWidth="400px"
            >
              <Typography sx={{ ...styles.standardText }}>
                <p>
                  В данную группу входят радиаторы высотой до 40 см. Основная
                  область их применения - установка под окна с низкими
                  подоконниками высотой 50-60 см.
                </p>
              </Typography>
            </Box>

            {/* ----------------- 2030 ----------------- */}

            <h3>Arbonia 2030</h3>
            <Typography
              sx={{ ...styles.smallText }}
              maxWidth="400px"
            >
              Самая маленькая модель среди складских радиаторов Arbonia. Это
              2-трубчатый радиатор высотой всего 30 см. В наличии доступен
              только с боковым подключением.
            </Typography>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "2030-9016-12") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "12") || connections[0]
              }
            />

            {/* ----------------- 3030 ----------------- */}

            <Box style={{ height: "30px" }} />
            <h3>Arbonia 3030</h3>
            <Typography
              sx={{ ...styles.smallText }}
              maxWidth="400px"
            >
              Трехтрубчатые радиаторы высотой 30 см обладают достаточной
              мощностью для отопления небольших и средних помещений. В наличии в
              белом цвете как с боковым, так и с нижним подключением.
            </Typography>
            <Typography
              sx={{ ...styles.smallTextBold, marginTop: "20px" }}
              maxWidth="400px"
            >
              Боковое подключение
            </Typography>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "3030-9016-12") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "12") || connections[0]
              }
            />

            <Typography
              sx={{ ...styles.smallTextBold, marginTop: "40px" }}
              maxWidth="400px"
            >
              Нижнее подключение
            </Typography>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "3030-9016-69tvv") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "69tvv") || connections[0]
              }
            />

            {/* ----------------- 3037 ----------------- */}

            <Box style={{ height: "30px" }} />
            <h3>Arbonia 3037</h3>
            <Typography
              sx={{ ...styles.smallText }}
              maxWidth="400px"
            >
              Трехтрубчатые радиаторы высотой 37 см - наиболее крупные и мощные
              радиаторы в данном классе. При боковом подключении имеют
              стандартное межосевое расстояние 30 см.
            </Typography>
            <Typography
              sx={{ ...styles.smallTextBold, marginTop: "20px" }}
              maxWidth="400px"
            >
              Боковое подключение
            </Typography>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "3037-9016-12") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "12") || connections[0]
              }
            />

            <Typography
              sx={{ ...styles.smallTextBold, marginTop: "40px" }}
              maxWidth="400px"
            >
              Нижнее подключение
            </Typography>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "3037-9016-69tvv") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "69tvv") || connections[0]
              }
            />
          </Typography>
        </Box>

        {/* Стандартные радиаторы */}
        <Box
          marginTop="40px"
          ref={refAbout50}
        >
          <Typography sx={{ ...styles.standardText }}>
            <h2>Радиаторы Arbonia RAL 9016 стандартной высоты</h2>
            <Box
              marginTop="20px"
              maxWidth="400px"
            >
              <Typography sx={{ ...styles.standardText }}>
                <p>
                  Предназначены для установки под окна с подоконниками высотой
                  80-90 см. Это наиболее востребованный тип радиаторов. В
                  наличии поддерживаются как 2-трубчатые, так и 3-трубчатые
                  модели.
                </p>
              </Typography>
            </Box>

            {/* ----------------- 2050 ----------------- */}

            <h3>Arbonia 2050</h3>
            <Typography
              sx={{ ...styles.smallText }}
              maxWidth="400px"
            >
              Элегантный 2-трубчатый радиатор высотой 50 см. Подойдет для
              помещений, не требующих установки отопительных приборов с большой
              тепловой мощностью (небольшая площадь или хорошая теплоизоляция).
              В наличии радиаторы как с боковым, так и с нижним подключением.
            </Typography>

            <Typography
              sx={{ ...styles.smallTextBold, marginTop: "20px" }}
              maxWidth="400px"
            >
              Боковое подключение
            </Typography>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "2050-9016-12") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "12") || connections[0]
              }
            />

            <Typography
              sx={{ ...styles.smallTextBold, marginTop: "20px" }}
              maxWidth="400px"
            >
              Нижнее подключение
            </Typography>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "2050-9016-69tvv") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "69tvv") || connections[0]
              }
            />

            {/* ----------------- 2057 ----------------- */}

            <Box style={{ height: "30px" }} />
            <h3>Arbonia 2057</h3>
            <Typography
              sx={{ ...styles.smallText }}
              maxWidth="400px"
            >
              Радиатор имеет высоту 57 см и имеет стандартное межосевое
              расстояние 50 см при боковом подключении. В наличии также имеются
              модели с нижним подключением.
            </Typography>
            <Typography
              sx={{ ...styles.smallTextBold, marginTop: "20px" }}
              maxWidth="400px"
            >
              Боковое подключение
            </Typography>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "3057-9016-12") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "12") || connections[0]
              }
            />

            <Typography
              sx={{ ...styles.smallTextBold, marginTop: "40px" }}
              maxWidth="400px"
            >
              Нижнее подключение
            </Typography>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "3057-9016-69tvv") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "69tvv") || connections[0]
              }
            />

            {/* ----------------- 3050 ----------------- */}

            <Box style={{ height: "30px" }} />
            <h3>Arbonia 3050</h3>
            <Typography
              sx={{ ...styles.smallText }}
              maxWidth="400px"
            >
              Трехтрубчатые радиаторы высотой 50 см - подойдут для установки под
              подоконники высотой от 70 см.
            </Typography>
            <Typography
              sx={{ ...styles.smallTextBold, marginTop: "20px" }}
              maxWidth="400px"
            >
              Боковое подключение
            </Typography>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "3050-9016-12") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "12") || connections[0]
              }
            />

            <Typography
              sx={{ ...styles.smallTextBold, marginTop: "40px" }}
              maxWidth="400px"
            >
              Нижнее подключение
            </Typography>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "3050-9016-69tvv") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "69tvv") || connections[0]
              }
            />

            {/* ----------------- 3057 ----------------- */}

            <Box style={{ height: "30px" }} />
            <h3>Arbonia 3057</h3>
            <Typography
              sx={{ ...styles.smallText }}
              maxWidth="400px"
            >
              Самая популярная модель среди радиаторов стандартной высоты. Это
              3-трубчатый радиатор высотой 57 см и с межосевым расстоянием 50 см
              при боковом подключении. Идеально подходит для замены старых
              чугунных или алюминиевых батарей.
            </Typography>
            <Typography
              sx={{ ...styles.smallTextBold, marginTop: "20px" }}
              maxWidth="400px"
            >
              Боковое подключение
            </Typography>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "3057-9016-12") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "12") || connections[0]
              }
            />

            <Typography
              sx={{ ...styles.smallTextBold, marginTop: "40px" }}
              maxWidth="400px"
            >
              Нижнее подключение
            </Typography>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "3057-9016-69tvv") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "69tvv") || connections[0]
              }
            />
          </Typography>
        </Box>
        {/* Вертикальные радиаторы */}
        <Box
          marginTop="40px"
          ref={refHigh}
        >
          <Typography sx={{ ...styles.standardText }}>
            <h2>Радиаторы Arbonia высотой 1.8 м</h2>
            <Box
              marginTop="20px"
              maxWidth="400px"
            >
              <Typography sx={{ ...styles.standardText }}>
                <p>
                  Вертикальные радиаторы Arbonia в классическом белом цвете -
                  это отличное решение для отопления помещений, когда доступные
                  ниши ограничены по ширине. Также они хорошо подходят для
                  выполнения роли элементов интерьера. В наличии имеются модели
                  с боковым и нижним подключением.
                </p>
              </Typography>
            </Box>

            {/* ----------------- 2180 ----------------- */}

            <Box style={{ height: "30px" }} />
            <h3>Arbonia 2180</h3>
            <Typography
              sx={{ ...styles.smallText }}
              maxWidth="400px"
            >
              Одна из наиболее популярных моделей. Сочетает в себе высокую
              тепловую мощность и плоскую форму.
            </Typography>
            <Typography
              sx={{ ...styles.smallTextBold, marginTop: "20px" }}
              maxWidth="400px"
            >
              Боковое подключение
            </Typography>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "2180-9016-12") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "12") || connections[0]
              }
            />

            <Typography
              sx={{ ...styles.smallTextBold, marginTop: "40px" }}
              maxWidth="400px"
            >
              Нижнее подключение
            </Typography>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "2180-9016-69tvv") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "69tvv") || connections[0]
              }
            />

            {/* ----------------- 3180 ----------------- */}

            <Box style={{ height: "30px" }} />
            <h3>Arbonia 3180</h3>
            <Typography
              sx={{ ...styles.smallText }}
              maxWidth="400px"
            >
              Трехтрубчатый радиатор Arbonia 3180 имеет высокую теплоотдачу и
              подходит для отопления помещений большой площади.
            </Typography>
            <Typography
              sx={{ ...styles.smallTextBold, marginTop: "20px" }}
              maxWidth="400px"
            >
              Боковое подключение
            </Typography>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "3180-9016-12") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "12") || connections[0]
              }
            />

            <Typography
              sx={{ ...styles.smallTextBold, marginTop: "40px" }}
              maxWidth="400px"
            >
              Нижнее подключение
            </Typography>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "3180-9016-69tvv") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "69tvv") || connections[0]
              }
            />
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default SetRAL9016Model

export async function getStaticProps(): Promise<{ props: Props }> {
  const models: ModelOrigin[] = await getModelsData()
  const colors: ColorOrigin[] = await getColorsData()
  const connections: ConnectionOrigin[] = await getConnectionsData()

  return {
    props: {
      models,
      colors,
      connections,
    },
  }
}
