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
        title={"Регулируемые кронштейны W161 или фиксирующий зажим ZB0281"}
        description={
          "Для настенного монтажа радиаторов Arbonia чаще всего применяются регулируемые кронштейны W161 или нерегулируемые зажимы ZB0281 (скрытый монтаж). В этой статье мы рассмотрим их особенности, преимущества и недостатки."
        }
      />
      <PageTitle
        breadcrumbs={[
          { title: "Главная", link: "/" },
          { title: "Полезная информация", link: "/articles" },
          {
            title: "Регулируемые кронштейны W161 или фиксирующий зажим ZB0281",
            link: "/articles/consoles",
          },
        ]}
      />
      <Hero
        imgPath={"/images/sliders/slide-5.jpeg"}
        header={"Регулируемые кронштейны W161 или фиксирующий зажим ZB0281"}
      />
      <Box sx={{ ...global.pagePadding, maxWidth: "900px", margin: "auto" }}>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          <Link href="/catalog">
            <a style={{ textDecoration: "none" }}>
              <Typography
                sx={{ ...styles.standardTextRedLink }}
                component="span"
              >
                Радиаторы Arbonia
              </Typography>
            </a>
          </Link>
          &#160; чаще всего комплектуются одним из двух вариантов кронштейнов:
          <ul>
            <li>
              <Box sx={{ ...styles.standardText }}>
                Кронштейн W161 с регулируемым расстоянием от стены в паре с
                нижним упором ZB0280.
              </Box>
            </li>
            <li>
              <Box sx={{ ...styles.standardText }}>
                Фиксирующий зажим ZB0281 и настенный кронштейн ZB0282 в паре с
                тем же нижним упором ZB0280.
              </Box>
            </li>
          </ul>
          Чем они отличаются и в каком случае следует использовать тот или иной
          вариант?
        </Typography>

        <Typography marginTop="40px" variant="h5" component={"h2"}>
          Кронштейн W161 и упор ZB0280
        </Typography>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          Верхний кронштейн представляет собой обычный крючок на котором можно
          регулировать вынос оси радиатора от стены от 7 до 9 см. Внизу радиатор
          упирается в стену упорами ZB0280 - они отвечают за то, чтобы радиатор
          висел вертикально ровно и болтался.
        </Typography>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          Данный вариант крепления радиаторов близок к классическому. Он хорошо
          подходит для ситуаций, когда радиатор необходимо вывести на уже
          готовые трубы. Например, при замене старый чугунных радиаторов на
          модель Arbonia 3057 с боковым подключением. Данный радиатор имеет
          стандартное межосевое расстояние 50 см и его просто требуется
          разместить на нужном расстоянии от стены.
        </Typography>
        <Box textAlign={"center"}>
          <img
            src="/images/articles/21.png"
            alt="Arbonia W161 + ZB0280"
            width={700}
            height={350}
          />
        </Box>
        <Typography marginTop="40px" variant="h5" component={"h2"}>
          Кронштейн ZB0281/ZB0282 и упор ZB0280
        </Typography>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          Данный тип креплений относится к скрытому, так как зажим ZB0281 держит
          радиатор за трубки, расположенные ближе к стене. Кронштейн ZB0282
          крепится к стене и в него уже вставляется зажим. Упор выполняет ту же
          роль, что и в предыдущем случае - отвечает за ровное расположение
          радиатора.
        </Typography>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          Кронштейны менее заметны, чем стандартный крючок, также они имеют
          фиксированное расстояние от стены (33 мм), поэтому подходят только в
          том случае, если трубы будут переноситься под новый радиатор, исходя
          из его расположения, а не наоборот.
        </Typography>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          Другим отличием, которое наиболее важно для цветных радиаторов,
          является возможность изготовления кронштейнов в цвет радиатора. Если
          кронштейн W161 больше подходит только для моделей в белом цвете, то
          кронштейны ZB0281 / ZB0282 поставляются в том же цвете, что и
          радиатор.
        </Typography>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          Нижние упоры ZB0280 имеют только 2 цвета: белый и темно-серый.
        </Typography>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          Интересным бонусом скрытых кронштейнов является небольшая степень
          свободы в расположении радиатора по вертикали: зажимы можно крепить к
          радиатору выше или ниже, в зависимости от того, нужно расположить
          радиатор ниже или выше относительно настенных кронштейнов. Это может
          быть удобно в некоторых случаях. Например, если деревянный дом дал
          небольшую усадку.
        </Typography>
        <Box textAlign={"center"}>
          <img
            src="/images/articles/22.png"
            alt="Arbonia ZB0281 + ZB0282 + ZB0280"
            width={700}
            height={235}
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
