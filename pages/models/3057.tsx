import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";

import ModelBlock from "../../components/modelBlock/modelBlock";
import PageHeader from "../../components/pageHeader/pageHeader";
import Hero from "../../components/hero/hero";

import { SetComponentProps } from "../../models/setComponentProps.model";

import * as styles from "../../styles/styles";
import global from "../../variables/global";
import getModelsData from "../../api_utils/getModelsData";
import { ColorOrigin } from "../../models/colorOrigin.model";
import { ModelOrigin } from "../../models/modelOrigin.model";
import { ConnectionOrigin } from "../../models/connectionOrigin.model";
import getColorsData from "../../api_utils/getColorsData";
import getConnectionsData from "../../api_utils/getConnectionsData";
import RadiatorInCartList from "../../components/pageModels/radiatorInCartList";
import RadiatorAllOptions from "../../components/pageModels/radiatorAllOptions";
import ImagesOtherList from "../../components/pageModels/imagesOtherList";
import DownloadsBlock from "../../components/pageModels/downloadsBlock";

type Props = {
  models: ModelOrigin[];
  colors: ColorOrigin[];
  connections: ConnectionOrigin[];
};

const Model3057: React.FC<SetComponentProps> = ({
  models,
  colors,
  connections,
}: Props) => {
  const refLateral = useRef<HTMLElement>(null);
  const refBottom = useRef<HTMLElement>(null);
  const refOrder = useRef<HTMLElement>(null);

  const model = models.find(model => model.id === "3057");
  if (!model) return null;

  return (
    <Box
      itemScope
      itemType="https://schema.org/ProductModel"
    >
      <meta
        itemProp="countryOfOrigin"
        content="Чехия"
      />
      <meta
        itemProp="material"
        content="Сталь"
      />
      <PageHeader
        title={"Радиаторы Arbonia 3057 | Выгодные цены | Гарантия"}
        description="Трехтрубчатые радиаторы Arbonia 3057 в наличии (высота 57 см). Склады в Мск и СПб. Официальная гарантия 10 лет. Доставка в любой город России."
      />
      <Hero
        imgPath={"/images/sliders/slide.jpeg"}
        header={"Радиаторы Arbonia 3057 "}
        subheader={
          "Трехтурбчатые радиаторы Arbonia высотой 57 см и межосевым расстоянием 50 см"
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
              if (!refLateral.current) return;
              refLateral.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <Typography sx={{ ...styles.smallTextRedLink, cursor: "pointer" }}>
              Arbonia 3057 с боковым подключением
            </Typography>
          </Box>
          <Box
            onClick={() => {
              if (!refBottom.current) return;
              refBottom.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <Typography sx={{ ...styles.smallTextRedLink, cursor: "pointer" }}>
              Arbonia 3057 с нижним подключением
            </Typography>
          </Box>
          <Box
            onClick={() => {
              if (!refOrder.current) return;
              refOrder.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <Typography sx={{ ...styles.smallTextRedLink, cursor: "pointer" }}>
              Arbonia 3057 под заказ
            </Typography>
          </Box>
        </Box>

        <Box marginTop="20px">
          <Typography sx={{ ...styles.standardText }}>
            <p>
              Arbonia 3057 - является наиболее универсальной моделью от Arbonia.
              С одной стороны, он обладает высокой тепловой мощностью в 78 Вт /
              секция (ΔT=60°). С другой, его толщина составляет всего 105 мм.
              При подборе радиатора взамен старых панельных или чугунных
              батарей, Arbonia 3057 должен быть вашим базовым вариантом. Еще
              одним преимуществом 3-трубчатого радиатора является более низкая
              стоимость по сравнению с более тонкими 2-трубчатыми радиаторами
              аналогичной мощности. Модель доступна в наличии с боковым и с
              нижним подключением.
            </p>
            <p>
              Если вас интересует радиатор меньшей глубины, то обратите внимание
              на аналогичную 2-трубчатую модель &#160;
              <Link href="/models/2057-9016-12">
                <a style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{ ...styles.standardTextLinkUnderline }}
                    component="span"
                  >
                    Arbonia 2057 с боковым подключением
                  </Typography>
                </a>
              </Link>
              &#160;и&#160;
              <Link href="/models/2057-9016-69tvv">
                <a style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{ ...styles.standardTextLinkUnderline }}
                    component="span"
                  >
                    Arbonia 2057 с нижним подключением
                  </Typography>
                </a>
              </Link>
              .
            </p>

            <h2 style={{ marginTop: "40px" }}>
              Технические характеристики Arbonia 3057
            </h2>
            <p>
              <span style={{ ...styles.smallTextBold }}>
                Высота секции: 57 см.
              </span>{" "}
              Радиатор подходит для установки под стандартные окна (высота
              подоконника от 80 см). При боковом подключении он имеет межосевое
              расстояние 50 см, поэтому возможна замена старых алюминиевых или
              чугунных батарей без переноса труб.
            </p>
            <p>
              <span style={{ ...styles.smallTextBold }}>
                Глубина секции: 105 мм.
              </span>{" "}
              Радиатор имеет стандартную глубину, сопоставимую с большинством
              современных моделей.
            </p>
            <p>
              <span style={{ ...styles.smallTextBold }}>
                Мощность секции: 78 Вт (ΔT=60°).
              </span>{" "}
              При среднем расчете 100 Вт/м2, такой секции будет достаточно для
              обогрева 0.8 кв.м. В случае хорошей теплоизоляции дома, одной
              секции может быть достаточно для обогрева 2.5 кв.м.
            </p>
          </Typography>
        </Box>

        {/* 3057 боковое*/}
        <Box
          marginTop="40px"
          ref={refLateral}
        >
          <Typography sx={{ ...styles.standardText }}>
            <h2>Arbonia 3057 с боковым подключением</h2>
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
                  src="/images/models/3057-0.jpeg"
                  alt="Белый радиатор Arbonia 3057 с боковым подключением"
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
                  для российских домов.
                </p>
                <p>
                  Благодаря тому, что Arbonia 3057 имеет межосевое расстояние 50
                  см, вам не потребуется переносить трубы при замене старых
                  чугунных или алюминиевых батарей, что является большим
                  преимуществом. Касательно мощности: 2 секции Arbonia 3057 по
                  габаритам и по мощности примерно соответствуют 1 секции
                  чугунного радиатора.
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
              model={models.find(x => x.id === "3057-9016-12") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "12") || connections[0]
              }
            />
          </Typography>
        </Box>

        {/* 3057 нижнее*/}
        <Box
          marginTop="80px"
          ref={refBottom}
        >
          <Typography sx={{ ...styles.standardText }}>
            <h2>Arbonia 3057 с нижним подключением</h2>
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
                  src="/images/models/3057-4.jpeg"
                  alt="Радиатор Arbonia 3057 69 ТВВ"
                  width={400}
                  height={307}
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
                  В наличии поддерживаются радиаторы Arbonia 3057 с нижним
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
              model={models.find(x => x.id === "3057-9016-69tvv") || models[0]}
              color={colors.find(x => x.id === "9016") || colors[0]}
              connection={
                connections.find(x => x.id === "69tvv") || connections[0]
              }
            />
          </Typography>
        </Box>

        <Box marginTop="50px">
          <Typography sx={{ ...styles.standardText }}>
            Здесь мы отобразили все модели Arbonia 3057 доступные к покупке со
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
          <h2>Радиаторы Arbonia 3057 под заказ</h2>
          <Typography sx={{ ...styles.standardText }}>
            Если вы не нашли подходящего варианта из складской программы, то
            радиаторы Arbonia 3057 можно заказать на заводе в любом доступном
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
          <h2>Дополнительные изображения радиаторов Arbonia 3057</h2>
          <ImagesOtherList imagesString={model.imagesOther || ""} />
        </Box>
        <Box marginTop="80px">
          <h2>Документы для скачивания</h2>
          <DownloadsBlock />
        </Box>
      </Box>
    </Box>
  );
};

export default Model3057;

export async function getStaticProps(): Promise<{ props: Props }> {
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
