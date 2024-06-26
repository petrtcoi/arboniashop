import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { Box, Typography, Grid, Divider } from "@mui/material";

import RadiatorAllOptions from "../../components/pageModels/radiatorAllOptions";
import RadiatorInCartList from "../../components/pageModels/radiatorInCartList";
import BlockHowReadModel from "../../components/blockHowReadModel/blockHowReadModel";
import PageHeader from "../../components/pageHeader/pageHeader";
import Hero from "../../components/hero/hero";
import PageTitle from "../../components/pageTitle/pageTitle";

import getModelsData from "../../api_utils/getModelsData";
import getColorsData from "../../api_utils/getColorsData";
import getConnectionsData from "../../api_utils/getConnectionsData";

import { ModelOrigin } from "../../models/modelOrigin.model";
import { ColorOrigin } from "../../models/colorOrigin.model";
import { ConnectionOrigin } from "../../models/connectionOrigin.model";

import * as styles from "../../styles/styles";
import global from "../../variables/global";

type CatalogProps = {
  models: ModelOrigin[];
  colors: ColorOrigin[];
  connections: ConnectionOrigin[];
};
const MODELS_GROUPS = [
  { firstChar: "2", title: "2-трубчатые (65 мм)" },
  { firstChar: "3", title: "3-трубчатые (105 мм)" },
  { firstChar: "4", title: "4-трубчатые (145 мм)" },
  { firstChar: "5", title: "5-трубчатые (185 мм)" },
  { firstChar: "6", title: "6-трубчатые (225 мм)" },
];

const Catalog: NextPage<CatalogProps> = ({ models, colors, connections }) => {
  const outStockModels = models.filter(x => !x.inStock);

  return (
    <Box>
      <PageHeader
        title={
          "Каталог радиаторов Arbonia | Все модели | В наличии и под заказ"
        }
        description={
          "Полный каталог радиаторов Arbonia: складские и заказные модели. Выгодные цены и быстрая доставка по России. Гарантия 10 лет."
        }
      />
      <PageTitle
        header={"Радиаторы Arbonia - полный каталог"}
        subheader={"Доставка со складов в Москве и Санкт-Петербурге"}
        breadcrumbs={[
          { title: "Главная", link: "/" },
          { title: "Каталог радиаторов Arbonia", link: "/catalog" },
        ]}
      />
      <Hero
        imgPath={"/images/sliders/slide.jpeg"}
        header={"Каталог радиаторов Arbonia"}
        subheader={"Полный каталог Arbonia. Складские и заказные модели"}
      />
      <Box sx={{ ...global.pagePadding }}>
        <Box marginTop="20px">
          <Typography
            textAlign="center"
            sx={{ ...styles.standardText }}
          >
            В данном разделе представлен полный каталог радиаторов Arbonia.
            <br />
            Пожалуйста, свяжитесь с нами любым удобным вам способом
            <br />и мы с радостью поможем подобрать наиболее подходящие модели.
          </Typography>
        </Box>

        <Box textAlign="center">
          <BlockHowReadModel />
        </Box>

        {/* Складские модели */}
        <Box marginTop="70px">
          <Typography
            variant="h5"
            component="h2"
            id="in_stock_section"
            textAlign="center"
            sx={{ textTransform: "uppercase" }}
          >
            Складские модели Arbonia
          </Typography>

          {/* Стандартная высота */}
          <Box marginTop="40px">
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                xs={12}
              >
                <Divider
                  variant="fullWidth"
                  textAlign="left"
                >
                  <Typography
                    component="h3"
                    sx={{ ...styles.standardText, color: "#ef7d00" }}
                  >
                    Стандартная высота (50-60 см)
                  </Typography>
                </Divider>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >
                <Typography sx={{ ...styles.standardText }}>
                  Боковое подключение
                </Typography>
                <Box paddingLeft="10px">
                  <Box id="2050-9016-69tvv">
                    <Link href="/models/2050-9016-12">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 2050
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box id="2057-9016-69tvv">
                    <Link href="/models/2057-9016-12">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 2057
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box id="3050-9016-69tvv">
                    <Link href="/models/3050-9016-12">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 3050
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box id="3057-9016-69tvv">
                    <Link href="/models/3057-9016-12">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 3057
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >
                <Typography sx={{ ...styles.standardText }}>
                  Нижнее подключение
                </Typography>
                <Box paddingLeft="10px">
                  <Box id="2050-9016-12">
                    <Link href="/models/2050-9016-69tvv">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 2050
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box id="2057-9016-12">
                    <Link href="/models/2057-9016-69tvv">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 2057
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box id="3050-9016-12">
                    <Link href="/models/3050-9016-69tvv">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 3050
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box id="3057-9016-12">
                    <Link href="/models/3057-9016-69tvv">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 3057
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Высокие */}
          <Box marginTop="40px">
            <Divider
              variant="fullWidth"
              textAlign="left"
            >
              <Typography
                component="h3"
                sx={{ ...styles.standardText, color: "#ef7d00" }}
              >
                Высокие радиаторы (от 150 см)
              </Typography>
            </Divider>
            {/* <Typography component="h3" sx={ { ...styles.standardTextThin } }>
                    Такие радиаторы уже нельзя поставить под окна. Но они отлично подходят для установки на узкие ниши. Занимая мало места, высокие радиаторы обеспечивают высокую тепловую мощность.
                </Typography> */}
            <Grid
              container
              spacing={2}
              marginTop={"5px"}
            >
              <Grid
                item
                xs={12}
                md={6}
              >
                <Typography sx={{ ...styles.standardText }}>
                  Боковое подключение
                </Typography>
                <Box paddingLeft="10px">
                  <Box
                    id="2180-9016-12"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/2180-9016-12">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 2180
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box
                    id="2180-7016-12"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/2180-7016-12">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 2180 (RAL 7016)
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box
                    id="2180-sf3-12"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/2180-sf3-12">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 2180 (SF-3 Anthrazit metallic)
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box
                    id="2180-9005-12"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/2180-9005-12">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 2180 (RAL 9005 matt)
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box
                    id="3180-9016-12"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/3180-9016-12">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 3180
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box
                    id="3180-7016-12"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/3180-7016-12">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 3180 (RAL 7016)
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box
                    id="3180-sf3-12"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/3180-sf3-12">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 3180 (SF-3 Anthrazit metallic)
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >
                <Typography sx={{ ...styles.standardText }}>
                  Нижнее подключение
                </Typography>
                <Box paddingLeft="10px">
                  <Box
                    id="2180-9016-69tvv"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/2180-9016-69tvv">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 2180
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box
                    id="2180-7016-69tvv"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/2180-7016-69tvv">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 2180 (RAL 7016)
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box
                    id="2180-sf3-69tvv"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/2180-sf3-69tvv">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 2180 (SF-3 Anthrazit metallic)
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box
                    id="2180-9005-69tvv"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/2180-9005-69tvv">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 2180 (RAL 9005 matt)
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box
                    id="3180-9016-69tvv"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/3180-9016-69tvv">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 3180
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box
                    id="3180-7016-69tvv"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/3180-7016-69tvv">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 3180 (RAL 7016)
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box
                    id="3180-sf3-69tvv"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/3180-sf3-69tvv">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 3180 (SF-3 Anthrazit metallic)
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Низкие радиаторы */}
          <Box marginTop="40px">
            <Divider
              variant="fullWidth"
              textAlign="left"
            >
              <Typography
                component="h3"
                sx={{ ...styles.standardText, color: "#ef7d00" }}
              >
                Невысокие радиаторы (до 40 см)
              </Typography>
            </Divider>
            {/* <Typography component="h3" sx={ { ...styles.standardTextThin } }>
                    Радиаторы для установки под окна с низкими подоконниками (50-60 см), а также для монтажа на ножки перед панорамными окнами
                </Typography> */}
            <Grid
              container
              spacing={2}
              marginTop={"5px"}
            >
              <Grid
                item
                xs={12}
                md={6}
              >
                <Typography sx={{ ...styles.standardText }}>
                  Боковое подключение
                </Typography>
                <Box paddingLeft="10px">
                  <Box
                    id="2030-9016-12"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/2030-9016-12">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 2030
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box
                    id="3030-9016-12"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/3030-9016-12">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 3030
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box
                    id="3037-9016-12"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/3037-9016-12">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 3037
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >
                <Typography sx={{ ...styles.standardText }}>
                  Нижнее подключение
                </Typography>
                <Box paddingLeft="10px">
                  <Box
                    id="3030-9016-69tvv"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/3030-9016-69tvv">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 3030
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box
                    id="3030-9005-69tvv"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/3030-9005-69tvv">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 3030 (RAL 9005 matt)
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                  <Box
                    id="3037-9016-69tvv"
                    paddingTop="50px"
                    marginTop="-50px"
                  >
                    <Link href="/models/3037-9016-69tvv">
                      <a style={{ textDecoration: "none" }}>
                        <Typography sx={{ ...styles.standartTextThinLink }}>
                          Arbonia 3037
                        </Typography>
                      </a>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Популярные подборки */}
          <Box marginTop="40px">
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                xs={12}
              >
                <Divider
                  variant="fullWidth"
                  textAlign="left"
                >
                  <Typography
                    component="h3"
                    sx={{ ...styles.standardText, color: "#ef7d00" }}
                  >
                    Популярные подборки
                  </Typography>
                </Divider>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >
                {/* <Typography sx={ { ...styles.standardText } }>
                                    По цвету
                                </Typography> */}
                <Box paddingLeft="10px">
                  <Link href="/catalog/low-models">
                    <a style={{ textDecoration: "none" }}>
                      <Typography sx={{ ...styles.standartTextThinLink }}>
                        Низкие радиаторы (склад)
                      </Typography>
                    </a>
                  </Link>
                  <Link href="/catalog/high-models">
                    <a style={{ textDecoration: "none" }}>
                      <Typography sx={{ ...styles.standartTextThinLink }}>
                        Высокие радиаторы (склад)
                      </Typography>
                    </a>
                  </Link>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >
                <Box paddingLeft="10px">
                  <Link href="/catalog/ral9016">
                    <a style={{ textDecoration: "none" }}>
                      <Typography sx={{ ...styles.standartTextThinLink }}>
                        Arbonia RAL 9016 (склад)
                      </Typography>
                    </a>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Радиаторы под заказ */}
        <Box marginTop="100px">
          <Typography
            variant="h5"
            component="h2"
            id="out_stock_section"
            textAlign="center"
            sx={{ textTransform: "uppercase" }}
          >
            Радиаторы Arbonia под заказ
          </Typography>
          <Box marginTop={{ xs: "20px", md: "40px" }} />
          <Grid
            container
            spacing={2}
          >
            {MODELS_GROUPS.map(group => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={group.title}
                >
                  <Box
                    textAlign="center"
                    marginTop="20px"
                  >
                    <div style={{ height: "150px" }}>
                      <img
                        // layout='fill'
                        height={150}
                        width={120}
                        src={`/images/schemas/${group.firstChar}.png`}
                        alt={`Радиаторы Arbonia ${group.title}`}
                      />
                    </div>
                    <Typography sx={{ ...styles.standardText }}>
                      {group.title}
                    </Typography>
                  </Box>
                  <Box
                    paddingLeft="10px"
                    textAlign="center"
                  >
                    {outStockModels
                      .filter(
                        (model: ModelOrigin) => model.id[0] === group.firstChar
                      )
                      .sort((a, b) => (+a.id > +b.id ? 1 : -1))
                      .map((model: ModelOrigin) => {
                        return (
                          <Box
                            key={model.id}
                            id={model.id}
                            paddingTop="50px"
                            marginTop="-50px"
                          >
                            <Link href={`/models/${model.id}`}>
                              <a style={{ textDecoration: "none" }}>
                                <Typography
                                  sx={{ ...styles.standartTextThinLink }}
                                >
                                  Arbonia {model.nameShort}
                                </Typography>
                              </a>
                            </Link>
                          </Box>
                        );
                      })}
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Box marginTop="100px">
          <Typography
            variant="h5"
            component="h2"
            id="all_models_section"
            textAlign="center"
            sx={{ textTransform: "uppercase" }}
          >
            Произвольная модель Arbonia
          </Typography>
          <Box marginTop="20px" />
          <Typography
            sx={styles.standardText}
            textAlign="center"
          >
            Выберете произвольную модель Arbonia Column для оформления заказа.
            <br />
            Также,если у вас есть готовая спецификация, вы можете прислать нам
            ее на почту
            <br />
            для подготовки коммерческого предложения.
          </Typography>
          <Box marginTop="20px" />
          <RadiatorAllOptions
            modelInit={models.filter(x => !x.inStock)[0]}
            colorInit={colors[0]}
            connectionInit={connections[0]}
            modelFreeze={false}
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
      </Box>
    </Box>
  );
};

export default Catalog;

export async function getStaticProps() {
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
