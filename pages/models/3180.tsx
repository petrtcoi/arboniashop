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

const Model3180: React.FC<SetComponentProps> = ({
  models,
  colors,
  connections,
}: Props) => {
  const ref9016 = useRef<HTMLElement>(null);
  const refSf3 = useRef<HTMLElement>(null);
  const ref7016 = useRef<HTMLElement>(null);
  const refOrder = useRef<HTMLElement>(null);

  const model = models.find(model => model.id === "3180");
  if (!model) return null;

  return (
    <Box>
      <PageHeader
        title={"Радиаторы Arbonia 3180 | Выгодные цены | Гарантия"}
        description="Вертикальные радиаторы Arbonia 3180 в наличии (3-трубчатые). Большой выбор моделей. Официальная гарантия 10 лет. Доставка в любой город России."
      />
      <Hero
        imgPath={"/images/sliders/high.jpeg"}
        header={"Радиаторы Arbonia 3180 "}
        subheader={
          "Трехтрубчатые вертикальные радиаторы Arbonia (высота 180 см)"
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
              if (!ref9016.current) return;
              ref9016.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <Typography sx={{ ...styles.smallTextRedLink, cursor: "pointer" }}>
              Arbonia 3180 в белом цвете
            </Typography>
          </Box>
          <Box
            onClick={() => {
              if (!ref7016.current) return;
              ref7016.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <Typography sx={{ ...styles.smallTextRedLink, cursor: "pointer" }}>
              Arbonia 3180 в цвете RAL 7016
            </Typography>
          </Box>
          <Box
            onClick={() => {
              if (!refSf3.current) return;
              refSf3.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            <Typography sx={{ ...styles.smallTextRedLink, cursor: "pointer" }}>
              Arbonia 3180 в цвете SF-3 Antrazit metallic
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
              Радиаторы Arbonia 3180 под заказ
            </Typography>
          </Box>
        </Box>

        <Box marginTop="20px">
          <Typography sx={{ ...styles.standardText }}>
            <p>
              Радиатор Arbonia 3180 - это самая мощная модель от данного
              производителя, которую можно найти в наличии на складе. Она
              сочетает в себе высокую тепловую мощность (одна секция может
              обогреть в среднем от 2 до 4 кв.м.), и компактные размеры (толщина
              радиатора всего 105 мм, а длина секции всего 45 мм). Если вам
              требуется более плоский радиатор, то обратите внимание на
              2-трубчатую модель&#160;
              <Link href="/models/2180">
                <a style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{ ...styles.standardTextLinkUnderline }}
                    component="span"
                  >
                    Arbonia 2180
                  </Typography>
                </a>
              </Link>
              , имеющую толщину 62 мм.
            </p>

            <h2 style={{ marginTop: "40px" }}>
              Технические характеристики Arbonia 3180
            </h2>
            <p>
              <span style={{ ...styles.standardTextRed }}>
                Высота секции: 180 см.
              </span>{" "}
              Это идеальный размер для большинства современных квартир и домов.
              Радиаторы этой высоты не затеряются в просторных помещениях с
              высокими потолками, но и не будут слишком громоздкими в небольших
              комнатах.
            </p>
            <p>
              <span style={{ ...styles.standardTextRed }}>
                Глубина секции: 105 мм.
              </span>{" "}
              Радиатор имеет стандартную толщину для отопительного прибора и без
              проблем встанет в любую нишу.
            </p>
            <p>
              <span style={{ ...styles.standardTextRed }}>
                Мощность секции: 219 Вт (ΔT=60°).
              </span>{" "}
              При среднем расчете 100 Вт/м2, такой секции будет достаточно для
              обогрева 2.2 кв.м. Для хорошо утепленных домов площадь отопления
              может составить до 4-6 кв.м. Данные характеристики необходимо
              уточнять по проектной документации дома.
            </p>
          </Typography>
        </Box>

        {/* 3180 белый*/}
        <Box
          marginTop="40px"
          ref={ref9016}
        >
          <Typography sx={{ ...styles.standardText }}>
            <h2>Arbonia 3180 в классическом белом цвете</h2>
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                xs={12}
                md={5}
              >
                <Image
                  src="/images/models/3180-0.jpeg"
                  alt="Белый радиатор Arbonia 3180"
                  width={600}
                  height={600}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={7}
              >
                <p>
                  Белый свет по прежнему остается наиболее актуальным и
                  востребованным, когда речь идет о радиаторах отопления. Ведь
                  это самый нейтральный цвет. Он легко сочетается с любой
                  цветовой схемой помещения. Гармонично смотрится даже в
                  интерьерах, выполненных в темный тонах. Хотите беспроигрышный
                  вариант - берите Arbonia 3180 в белом цвете.
                </p>
                <h3 style={{ marginTop: "40px" }}>Боковое подключение 3/4</h3>
                <p>
                  В наличии поддерживаются модели на 4, 6, 8, 10 и 12 секций.
                  Базовым вариантом является боковое подключение с диаметром
                  внутренней резьбы 3/4". Это адаптация под российский рынок,
                  где часто используется вертикальная разводка отопления через
                  один стояк. Классические соединения на 1/2" здесь не подойдут,
                  так как не позволяют сделать эффективный байпас без потери в
                  мощности радиатора.
                </p>
              </Grid>
            </Grid>

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
            <h3 style={{ marginTop: "40px" }}>Нижнее подключение №69 ТВВ</h3>
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
                  src="/images/models/3180-1.jpeg"
                  alt="Белый радиатор Arbonia 3180 69 ТВВ"
                  width={600}
                  height={600}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={8}
              >
                <p>
                  Хотя боковое подключение можно использовать и при современной
                  разводке труб по полу, часто оно является не целесообразным и
                  использование радиаторов с нижним подключением является более
                  предпочтительным.
                </p>
                <p>
                  Радиаторы Arbonia с нижним подключением имеют выходы под
                  стандартный узел с межосевым расстоянием 50 мм. Так как
                  радиатор симметричный, то здесь нет разницы, слева или справа
                  подключатся радиатор, его можно просто развернуть нужной
                  стороной. Важно помнить, что подача воды всегда осуществляется
                  в крайнюю секцию. В нашем сообществе Вконтакте есть кроткая
                  заметка о том, как&#160;
                  <Link href="https://vk.com/lovehomekomfort?w=wall-86767719_2238">
                    <a
                      style={{ textDecoration: "none" }}
                      rel="nofollow"
                    >
                      <Typography
                        sx={{ ...styles.standardTextRedLink }}
                        component="span"
                      >
                        лучше подключать радиаторы с нижним подключением
                      </Typography>
                    </a>
                  </Link>
                  .
                </p>
                <p>
                  С той же стороны, где подключаются теплоноситель, расположен
                  встроенный термовентиль под стандартный термостат с резьбой
                  30х1.5. Здесь подойдет термоголовка от любого производителя,
                  например, от Oventrop, Herz, Giacomini, Danfoss и других.
                  Пытаться найти термоголовку именно от Arbonia не имеет смысла,
                  так как она будет стоить дороже и произведена одним из
                  перечисленных выше производителей, просто с другим логотипом.
                </p>
              </Grid>
            </Grid>

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

        {/* 3180 RAL 7016*/}
        <Box
          marginTop="80px"
          ref={ref7016}
        >
          <Typography sx={{ ...styles.standardText }}>
            <h2>Arbonia 3180 в темном цвете RAL7016</h2>
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                xs={12}
                md={5}
              >
                <Image
                  src="/images/models/7016-0.jpeg"
                  alt="Радиатор Arbonia 3180 RAL 7016"
                  width={600}
                  height={600}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={7}
              >
                <p>
                  Цвет можно охарактеризовать как темно-серый. Это не
                  стандартный белый цвет и, в то же время, не совсем черный. Он
                  хорошо сочетается с темными оттенками пола и мебели, а также с
                  белыми стенами. В отличие от белого или черного цвета,
                  темно-серый не требует частой уборки и не выглядит грязным,
                  если на нем появляются пыль. В то же время, он не такой
                  темный, как черный, и не создает впечатления того, что в
                  комнате слишком мало света.
                </p>
                <p>
                  Как и с белым цветом, для вас доступны четные секции от 4 до
                  12. Боковое и нижнее подключение. Цветные радиаторы стоят
                  дороже белых. Но не стоит забывать, что цветные радиаторы
                  выглядят дороже и за относительно небольшую доплату вы
                  значительно повышаете внешний вид вашего интерьера.
                </p>
              </Grid>
            </Grid>
            <p style={{ marginTop: "40px" }}>Боковое подключение:</p>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "3180-7016-12") || models[0]}
              color={colors.find(x => x.id === "7016") || colors[0]}
              connection={
                connections.find(x => x.id === "12") || connections[0]
              }
            />
            <p style={{ marginTop: "40px" }}>Нижнее подключение:</p>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "3180-7016-69tvv") || models[0]}
              color={colors.find(x => x.id === "7016") || colors[0]}
              connection={
                connections.find(x => x.id === "69tvv") || connections[0]
              }
            />
          </Typography>
        </Box>

        {/* 3180 SF-3*/}
        <Box
          marginTop="80px"
          ref={refSf3}
        >
          <Typography sx={{ ...styles.standardText }}>
            <h2>Arbonia 3180 в металлизированном цвете SF-3</h2>
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                xs={12}
                md={5}
              >
                <Image
                  src="/images/models/sf-3-2.jpeg"
                  alt="Радиатор Arbonia 3180 (SF-3 Anthrazit metallic)"
                  width={600}
                  height={600}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={7}
              >
                <p>
                  Да - это еще один темный, но не черный цвет. От предыдущего он
                  отличается тем, что имеет металлизированный блеск и внешне
                  выглядит более светлым. Данный вариант отлично подойдет,
                  например, для интерьеров в стиле лофт.
                </p>
                <p>
                  Популярным сценарием использования радиаторов Arbonia именно в
                  этом цвете - замена радиаторов, выполненных в цвете прозрачный
                  лак. С одной стороны - внешне он похож, хотя и не имеет
                  характерных видимых следов сварки и шлифовки. С другой -
                  радиатор имеет полноценного покрытие, надежно защищающее его
                  от проникновения влаги, чему подвержены радиаторы, покрытые
                  только прозрачным лаком. Более того, равномерная покраска
                  радиатора делает его более предсказуемым: вам проще
                  спланировать и встроить его в интерьер.
                </p>
                <p>
                  Традиционно: доступные боковое подключение 3/4 и нижнее со
                  встроенным термовентилем.
                </p>
              </Grid>
            </Grid>
            <p style={{ marginTop: "40px" }}>Боковое подключение:</p>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "3180-sf3-12") || models[0]}
              color={colors.find(x => x.id === "sf3") || colors[0]}
              connection={
                connections.find(x => x.id === "12") || connections[0]
              }
            />
            <p style={{ marginTop: "40px" }}>Нижнее подключение:</p>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "3180-sf3-69tvv") || models[0]}
              color={colors.find(x => x.id === "sf3") || colors[0]}
              connection={
                connections.find(x => x.id === "69tvv") || connections[0]
              }
            />
          </Typography>
        </Box>

        <Box marginTop="50px">
          <Typography sx={{ ...styles.standardText }}>
            Здесь мы отобразили все модели Arbonia 3180 доступные к покупке со
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
          <h2>Радиаторы Arbonia 3180 под заказ</h2>
          <Typography sx={{ ...styles.standardText }}>
            Если вы не нашли подходящего варианта из складской программы, то
            радиаторы Arbonia 3180 можно заказать на заводе в любом доступном
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
          <h2>Дополнительные изображения радиаторов Arbonia 3180</h2>
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

export default Model3180;

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
