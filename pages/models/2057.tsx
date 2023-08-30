import React, { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Box, Grid, Typography } from "@mui/material"

import ModelBlock from "../../components/modelBlock/modelBlock"
import PageHeader from "../../components/pageHeader/pageHeader"
import Hero from "../../components/hero/hero"

import { SetComponentProps } from "../../models/setComponentProps.model"

import * as styles from "../../styles/styles"
import global from "../../variables/global"
import getModelsData from "../../api_utils/getModelsData"
import { ColorOrigin } from "../../models/colorOrigin.model"
import { ModelOrigin } from "../../models/modelOrigin.model"
import { ConnectionOrigin } from "../../models/connectionOrigin.model"
import getColorsData from "../../api_utils/getColorsData"
import getConnectionsData from "../../api_utils/getConnectionsData"
import RadiatorInCartList from "../../components/pageModels/radiatorInCartList"
import RadiatorAllOptions from "../../components/pageModels/radiatorAllOptions"
import ImagesOtherList from "../../components/pageModels/imagesOtherList"
import DownloadsBlock from "../../components/pageModels/downloadsBlock"

type Props = {
  models: ModelOrigin[]
  colors: ColorOrigin[]
  connections: ConnectionOrigin[]
}

const Model2057: React.FC<SetComponentProps> = ({
  models,
  colors,
  connections,
}: Props) => {
  const refLateral = useRef<HTMLElement>(null)
  const refBottom = useRef<HTMLElement>(null)
  const refOrder = useRef<HTMLElement>(null)

  const model = models.find(model => model.id === "2057")
  if (!model) return null

  return (
    <Box>
      <PageHeader
        title={
          "Радиаторы Arbonia 2057 в наличии | Выгодные цены и доставка в любой город России | ArboniaShop.ru"
        }
        description="Радиаторы Arbonia 2057 в наличии. Выгодные цены и доставка в любой город России. Высота секции - 30 см. Глубина секции - всего 65 мм. Официальная гарантия на всю продукцию."
      />
      <Hero
        imgPath={"/images/sliders/slide.jpeg"}
        header={"Радиаторы Arbonia 2057 "}
        subheader={
          "Элегантный трубчатый радиатор от Arbonia со стандартным межосевым расстоянием"
        }
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
              if (!refLateral.current) return
              refLateral.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            <Typography sx={{ ...styles.smallTextRedLink, cursor: "pointer" }}>
              Arbonia 2057 с боковым подключением
            </Typography>
          </Box>
          <Box
            onClick={() => {
              if (!refBottom.current) return
              refBottom.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            <Typography sx={{ ...styles.smallTextRedLink, cursor: "pointer" }}>
              Arbonia 2057 с нижним подключением
            </Typography>
          </Box>
          <Box
            onClick={() => {
              if (!refOrder.current) return
              refOrder.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            <Typography sx={{ ...styles.smallTextRedLink, cursor: "pointer" }}>
              Arbonia 2057 под заказ
            </Typography>
          </Box>
        </Box>

        <Box marginTop="20px">
          <Typography sx={{ ...styles.standardText }}>
            <p>
              Arbonia 2057 - двухтрубчатый радиатор высотой 57 см. Он идеально
              подойдет для установки под стандартные окна, оставляя достаточно
              места для подключения снизу и под подоконником. Толщина радиатора
              составляет всего 65 мм, что придает ему изысканный внешний вид.
              При небольших габаритах, радиатор обладает достаточно высокой
              тепловой мощностью: 54 Вт (ΔT=60°). Модель доступна в наличии с
              боковым и с нижним подключением.
            </p>
            <p>
              Если вам требуется радиатор немного меньшей высоты, то рассмотрите
              модель&#160;
              <Link href="/models/2050">
                <a style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{ ...styles.standardTextLinkUnderline }}
                    component="span"
                  >
                    Arbonia 2050
                  </Typography>
                </a>
              </Link>
              , высотой 50 см.
            </p>

            <h2 style={{ marginTop: "40px" }}>
              Технические характеристики Arbonia 2057
            </h2>
            <p>
              <span style={{ ...styles.smallTextBold }}>
                Высота секции: 57 см.
              </span>{" "}
              Радиатор подходит для установки под стандартные окна (высота
              подоконника от 80 см). При боковом подключении радиатор имеет
              стандартное межосевое расстояние 50 см и идеально подойдет для
              замены старых чугунных или алюминиевых батарей.
            </p>
            <p>
              <span style={{ ...styles.smallTextBold }}>
                Глубина секции: 65 мм.
              </span>{" "}
              Важно отметить, то радиатор располагается на некотором расстоянии
              от стены, в зависимости от модели кронштейна. Поэтому закладывайте
              полную глубину радиатора как 9-10 см и тогда вы точно не
              ошибетесь.
            </p>
            <p>
              <span style={{ ...styles.smallTextBold }}>
                Мощность секции: 54 Вт (ΔT=60°).
              </span>{" "}
              При среднем расчете 100 Вт/м2, такой секции будет достаточно для
              обогрева 0.54 кв.м. В случае хорошей теплоизоляции дома, одной
              секции может быть достаточно для обогрева 1.5 кв.м.
            </p>
          </Typography>
        </Box>

        {/* 2057 белый*/}
        <Box
          marginTop="40px"
          ref={refLateral}
        >
          <Typography sx={{ ...styles.standardText }}>
            <h2>Arbonia 2057 с боковым подключением</h2>
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                xs={12}
                md={4}
              >
                <Image
                  src="/images/models/2050-12-2.jpeg"
                  alt="Белый радиатор Arbonia 2057 с боковым подключением"
                  width={400}
                  height={400}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
              >
                <p>
                  Боковое подключение является универсальным, так как подходит
                  для установки в домах с вертикальной разводкой труб, а также
                  для установки в квартирах с разводкой труб по полу. В наличии
                  поддерживаются модели с боковым подключением 3/4, подходящим
                  для российских домов. Межосевое расстояние 50 см является
                  стандартным для нашей страны.
                </p>
                <p>
                  Стоит упомянуть, что данный вид подключения является базовым и
                  поставляется без наценки. Поэтому, стоимость может стать
                  дополнительным аргументом в пользу бокового подключения.
                </p>
              </Grid>
            </Grid>

            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "2057-9016-12") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "12") || connections[0]
              }
            />
          </Typography>
        </Box>

        {/* 2057 нижнее*/}
        <Box
          marginTop="80px"
          ref={refBottom}
        >
          <Typography sx={{ ...styles.standardText }}>
            <h2>Arbonia 2057 с нижним подключением</h2>
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                xs={12}
                md={4}
              >
                <Image
                  src="/images/models/2050-69.jpg"
                  alt="Радиатор Arbonia 2057 69 ТВВ"
                  width={400}
                  height={300}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
              >
                <p>
                  Нижнее подключение является стандартом для всех современных
                  домов. Оно позволяет более свободно размещать радиаторы внутри
                  помещения, исходя из ваших нужд, а не из расположения стояков
                  отопления.
                </p>
                <p>
                  В наличии поддерживаются радиаторы Arbonia 2057 с нижним
                  подключением 69 ТВВ. Это одностороннее подключением слева или
                  справа под стандартный узел с межосевым расстоянием 50 мм. Так
                  как радиатор симметричный, то не имеет значения, с какой
                  стороны требуется подключение. ТВВ означает, что в модели
                  предусмотрен верхний термовентиль, отвечающий за
                  автоматическую регулировку мощности радиатора. Для него
                  подходит любой термостат с резьбой 30х1,5.
                </p>
              </Grid>
            </Grid>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "2057-9016-69tvv") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "69tvv") || connections[0]
              }
            />
          </Typography>
        </Box>

        <Box marginTop="50px">
          <Typography sx={{ ...styles.standardText }}>
            Здесь мы отобразили все модели Arbonia 2057 доступные к покупке со
            склада. Если среди предложенных вариантов не нашлось нужного цвета,
            то через нас вы можете как заказать радиатор в нужном исполнении на
            заводе. Также доступна опция с&#160;
            <Link href="/coloring">
              <a style={{ textDecoration: "none" }}>
                <Typography
                  sx={{ ...styles.standardTextRedLink }}
                  component="span"
                >
                  покраской белого радиатора Arbonia в любой цвет по шкале RAL
                </Typography>
              </a>
            </Link>
            &#160;на ваш выбор. Покраска производится на профессиональном
            оборудовании с сохранением официальной гарантии. Мы будем
            поддерживать список доступных вариантов в актуальном состоянии.
          </Typography>
        </Box>
        <Box
          marginTop="60px"
          ref={refOrder}
        >
          <h2>Радиаторы Arbonia 2057 под заказ</h2>
          <Typography sx={{ ...styles.standardText }}>
            Если вы не нашли подходящего варианта из складской программы, то
            радиаторы Arbonia 2057 можно заказать на заводе в любом доступном
            исполнении.
          </Typography>
          <RadiatorAllOptions
            modelInit={model}
            connectionInit={connections[0]}
            colorInit={colors[0]}
            models={models}
            colors={colors}
            connections={connections}
          />
          <RadiatorInCartList
            models={models}
            colors={colors}
            connections={connections}
          />
        </Box>
        <Box marginTop="80px">
          <h2>Дополнительные изображения радиаторов Arbonia 2057</h2>
          <ImagesOtherList imagesString={model.imagesOther || ""} />
        </Box>
        <Box marginTop="80px">
          <h2>Документы для скачивания</h2>
          <DownloadsBlock />
        </Box>
      </Box>
    </Box>
  )
}

export default Model2057

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
