import React from "react";
import { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import PageTitle from "../../../components/pageTitle/pageTitle";
import PageHeader from "../../../components/pageHeader/pageHeader";
import Hero from "../../../components/hero/hero";

import * as styles from "../../../styles/styles";
import global from "../../../variables/global";

type ArticlePageProps = {};

const ArticlePage: NextPage<ArticlePageProps> = () => {
  return (
    <Box>
      <PageHeader
        title={
          "Вертикальные радиаторы Arbonia 2180 и 3180: когда лучше применять и чем отличаются друг от друга"
        }
        description={
          "Радиаторы Arbonia 2180 и 3180 - являются стандартом, если речь идет об установке вертикальных дизайн-радиаторов. Они не только здорово выглядят, но также обладают и высокой теплоотдачей. Что выбрать: 2180 или 3180? Разбираемся в этой статье."
        }
      />
      <PageTitle
        breadcrumbs={[
          { title: "Главная", link: "/" },
          { title: "Полезная информация", link: "/articles" },
          {
            title: "Вертикальные радиаторы Arbonia",
            link: "/articles/2180-3180",
          },
        ]}
      />
      <Hero
        imgPath={"/images/sliders/slide-5.jpeg"}
        header={"Вертикальные радиаторы Arbonia"}
      />
      <Box sx={{ ...global.pagePadding, maxWidth: "900px", margin: "auto" }}>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          <Link href="/catalog">
            <a style={{ textDecoration: "none" }}>
              <Typography
                sx={{ ...styles.standardTextRedLink }}
                component="span"
              >
                Вертикальные трубчатые радиаторы Arbonia
              </Typography>
            </a>
          </Link>
          &#160; - один из наиболее популярных вариантов отопления помещений.
          Именно поэтому, в складскую программу входят сразу 2 модели высотой
          1.8 м:
          <ul>
            <li>
              <Box sx={{ ...styles.standardText }}>
                2-трубчатый радиатор Arbonia 2180
              </Box>
            </li>
            <li>
              <Box sx={{ ...styles.standardText }}>
                3-трубчатый радиатор Arbonia 3180
              </Box>
            </li>
          </ul>
          У нас есть как радиаторы с боковым, так и с нижним подключением. В
          универсальном белом цвете, а также в темном Anthrazit metallic. От 4
          до 12 секций (четное количество).
        </Typography>

        <Typography marginTop="40px" variant="h5" component={"h2"}>
          В чем преимущества вертикальных радиаторов
        </Typography>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          Вертикальные радиаторы не “прячутся” под окнами и являются настоящим
          украшением интерьера. Их классический внешний вид подходит под
          помещения, выполненных в любом стиле.
        </Typography>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          Кроме того, вертикальные радиаторы Arbonia обладают высокой тепловой
          мощностью, занимая при этом совсем немного места на стене. Так
          радиатор 3180 - 12 секций при длине всего 57 см может обогреть
          помещение площадью 27 кв.м. (в среднем).
        </Typography>

        <Typography marginTop="40px" variant="h5" component={"h2"}>
          2180 или 3180? Что выбрать?
        </Typography>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          Модели отличаются толщиной и мощностью. Если 2180 - это двухтрубчатый
          радиатор толщиной всего 65 мм, то 3180 имеет толщину уже 105 мм.
          Благодаря дополнительной трубке в каждой секции Arbonia 3180 имеет
          большую теплоотдачу, что может играть решающую роль. Но, если ваше
          помещение может быть обгрето 2-трубчатой моделью и для нее есть место,
          то мы рекомендуем рассматривать именно 2180 в качестве базового
          варианта (вопрос внешнего вида здесь мы не затрагиваем).{" "}
        </Typography>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          Радиатор Arbonia 2180 имеет следующие преимущества перед своим
          3-трубчатым “родственником”:
          <ul>
            <li>
              <Box sx={{ ...styles.standardText }}>
                Более низкая цена при аналогичной мощности. 2-трубчатая модель
                будет иметь большую ширину, чем радиатор 3180, но стоить при
                этом будет немного меньше.
              </Box>
            </li>
            <li>
              <Box sx={{ ...styles.standardText }}>
                Занимает меньше места, если смотреть по расстоянию от стены. 4
                см разница может казаться небольшой. Но, если радиатор
                установлен в узком проходе (например, выход на балкон), то она
                может быть заметна.
              </Box>
            </li>
            <li>
              <Box sx={{ ...styles.standardText }}>
                Легче в уборке. Несмотря на то, что все трубчатые радиаторы
                относительно просты в уборке, ухаживать за радиатором, секции
                которого состоят всего лишь из двух трубок, заметно легче.
              </Box>
            </li>
          </ul>
          Также, вы можете запросить расчет у нас на оба варианта, чтобы уже
          более наглядно сравнить и выбрать наиболее подходящий для вас.
        </Typography>
        <Box textAlign={"center"}>
          <Image
            src="/images/articles/30.jpeg"
            alt="Вертикальные радиаторы Arbonia"
            width={600}
            height={600}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ArticlePage;

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
