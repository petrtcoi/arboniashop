import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Box, Grid, Typography } from "@mui/material"

import ModelBlock from "../modelBlock/modelBlock"
import PageHeader from "../pageHeader/pageHeader"
import Hero from "../hero/hero"

import { SetComponentProps } from "../../models/setComponentProps.model"

import * as styles from "../../styles/styles"
import global from "../../variables/global"

const Set2180Stock: React.FC<SetComponentProps> = ({
  models,
  colors,
  connections,
}) => {
  return (
    <Box>
      <PageHeader
        title={
          "Радиаторы Arbonia 2180 в наличии | Выгодные цены и доставка в любой город России | ArboniaShop.ru"
        }
      />
      <Hero
        imgPath={"/images/sliders/high.jpeg"}
        header={"Радиаторы Arbonia 2180 (склад)"}
        subheader={"Все доступные варианты наиболее самой популярной модели"}
      />
      <Box sx={{ ...global.pagePadding }}>
        <Box marginTop="20px">
          <Typography sx={{ ...styles.standardText }}>
            <p>
              Радиатор Arbonia 2180 - это самая популярная модель от данного
              производителя. Она сочетает в себе высокую тепловую мощность (одна
              секция может обогреть в среднем от 1.5 до 3 кв.м.) и компактные
              размеры (толщина радиатора всего 65 мм). Если вас интересуют также
              3-трубчатые модели, то посмотрите нашу подборку&#160;
              <Link href="/catalog/high-models">
                <a style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{ ...styles.standardTextRedLink }}
                    component="span"
                  >
                    вертикальных радиаторов Arbonia
                  </Typography>
                </a>
              </Link>
              , входящих в складскую программу.
            </p>
            <h2 style={{ marginTop: "40px" }}>
              Технические характеристики Arbonia 2180
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
                Глубина секции: 65 мм.
              </span>{" "}
              Радиатор довольно плоский, поэтому его можно ставить даже в узких
              коридорах. Частым сценарием для использования Arbonia 2180
              является установка рядом с окном в спальне. Если кровать
              располагается близко от окна, то несколько сантиметров выигрыша по
              глубине могут быть существенными, ведь нужно еще оставить место
              для прикроватной тумбочки. Важно отметить, то радиатор
              располагается на некотором расстоянии от стены, в зависимости от
              модели кронштейна. Поэтому закладывайте полную глубину радиатора
              как 9-10 см и тогда вы точно не ошибетесь.
            </p>
            <p>
              <span style={{ ...styles.standardTextRed }}>
                Мощность секции: 164 Вт (ΔT=60°).
              </span>{" "}
              При среднем расчете 100 Вт/м2, такой секции будет достаточно для
              обогрева 1.6 кв.м. Если сравнивать с другими радиаторами, то ее
              мощность близка к мощности одной секции чугунного или алюминиевого
              радиатора, которые толще и длиннее. Если радиатор устанавливается
              в современном доме с хорошей теплоизоляцией или, наоборот, в
              старом кирпичном доме с толстыми стенами и хорошими
              стеклопакетами, то одна секция вполне может обогреть и 3-4 кв.м.
            </p>
          </Typography>
        </Box>

        {/* 2180 белый*/}
        <Box marginTop="40px">
          <Typography sx={{ ...styles.standardText }}>
            <h2>Arbonia 2180 в классическом белом цвете</h2>
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
                  src="/images/models/2180-1.jpeg"
                  alt="Белый радиатор Arbonia 2180"
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
                  вариант - берите Arbonia 2180 в белом цвете.
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
              model={models.find(x => x.id === "2180-9016-12") || models[0]}
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
                  src="/images/models/2180-tvv.jpeg"
                  alt="Белый радиатор Arbonia 2180 69 ТВВ"
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
        </Box>

        {/* 2180 RAL 7016*/}
        <Box marginTop="80px">
          <Typography sx={{ ...styles.standardText }}>
            <h2>Arbonia 2180 в темном цвете RAL7016</h2>
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
                  alt="Радиатор Arbonia 2180 RAL 7016"
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
              model={models.find(x => x.id === "2180-7016-12") || models[0]}
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
              model={models.find(x => x.id === "2180-7016-12") || models[0]}
              color={colors.find(x => x.id === "7016") || colors[0]}
              connection={
                connections.find(x => x.id === "69tvv") || connections[0]
              }
            />
          </Typography>
        </Box>

        {/* 2180 SF-3*/}
        <Box marginTop="80px">
          <Typography sx={{ ...styles.standardText }}>
            <h2>Arbonia 2180 в металлизированном цвете SF-3</h2>
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
                  alt="Радиатор Arbonia 2180 (SF-3 Anthrazit metallic)"
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
              model={models.find(x => x.id === "2180-sf3-12") || models[0]}
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
              model={models.find(x => x.id === "2180-sf3-12") || models[0]}
              color={colors.find(x => x.id === "sf3") || colors[0]}
              connection={
                connections.find(x => x.id === "69tvv") || connections[0]
              }
            />
          </Typography>
        </Box>

        {/* 2180 RAL 9005*/}
        <Box marginTop="80px">
          <Typography sx={{ ...styles.standardText }}>
            <h2>Arbonia 2180 в черном цвете RAL9005</h2>
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
                  src="/images/models/2180-9005.jpeg"
                  alt="Радиатор Arbonia 2180 RAL9005 matt"
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
                  Черный матовый цвет также является одним из самых популярных
                  для радиаторов Arbonia. Как и белый, черный цвет легко
                  встраивается в любой интерьер, а его матовость придает ему
                  особый шарм. Радиатор не дает таких бликов, как модели с
                  глянцевым покрытием, а потому лучше сливается с окружающим его
                  пространством.
                </p>

                <p>
                  Модель поддерживается на складе с боковым и нижним
                  подключением.
                </p>
              </Grid>
            </Grid>
            <p style={{ marginTop: "40px" }}>Боковое подключение:</p>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "2180-9005-12") || models[0]}
              color={colors.find(x => x.id === "9005") || colors[0]}
              connection={
                connections.find(x => x.id === "12") || connections[0]
              }
            />
            <p style={{ marginTop: "40px" }}>Нижнее подключение:</p>
            <ModelBlock
              title={""}
              description={""}
              onlyTable={true}
              model={models.find(x => x.id === "2180-9005-12") || models[0]}
              color={colors.find(x => x.id === "9005") || colors[0]}
              connection={
                connections.find(x => x.id === "69tvv") || connections[0]
              }
            />
          </Typography>
        </Box>
        <Box marginTop="50px">
          <Typography sx={{ ...styles.standardText }}>
            Здесь мы отобразили все модели Arbonia 2180 доступные к покупке со
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
      </Box>
    </Box>
  )
}

export default Set2180Stock
