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
          "Подбор радиаторов Arbonia на основе уже установленных радиаторов"
        }
        description={
          "При покупке радиаторов Arbonia необходимо определиться с требуемой мощностью. Только после этого можно переходить к выбору конкретной модели и его местоположению в помещении. В этой статье мы рассмотрим наиболее простой и эффективный вариант подбора радиаторов по мощности."
        }
      />
      <PageTitle
        breadcrumbs={[
          { title: "Главная", link: "/" },
          { title: "Полезная информация", link: "/articles" },
          {
            title:
              "Подбор радиаторов Arbonia на основе уже установленных радиаторов",
            link: "/articles/calc-radiators-by-old-ones",
          },
        ]}
      />
      <Hero
        imgPath={"/images/sliders/slide-5.jpeg"}
        header={
          "Подбор радиаторов Arbonia на основе уже установленных радиаторов"
        }
      />
      <Box sx={{ ...global.pagePadding, maxWidth: "900px", margin: "auto" }}>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          Правильно определить требуемую тепловую мощность радиаторов очень
          важно. Ведь недостаточная мощность приведет к тому, что в доме или
          квартире будет просто некомфортно жить в холодное время года. С другой
          стороны, радиатор с избыточной мощностью - это не только лишние
          расходы, но также и возможные корректировки в дизайн-проект квартиры,
          так как более мощный радиатор требует и больше места. .
        </Typography>

        <Typography marginTop="40px" variant="h5" component={"h2"}>
          Проверка мощности установленных радиаторов
        </Typography>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          Нашим клиентам, при покупке &#160;
          <Link href="/catalog">
            <a style={{ textDecoration: "none" }}>
              <Typography
                sx={{ ...styles.standardTextRedLink }}
                component="span"
              >
                радиаторов Arbonia
              </Typography>
            </a>
          </Link>
          , мы всегда рекомендуем в первую очередь обращать внимание на то,
          какие радиаторы уже установлены и, если есть возможность, проверять,
          хватает ли их мощности в зимнее время. Этот подход более надежен, чем
          подбор радиаторов по некоторым формулам из интернета, которые могут
          дать лишь примерное представление о том, какая мощность требуется.
        </Typography>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          Расчет мощности радиаторов, основанный на таких параметарх как площадь
          помещения, высота потолков, площадь и тип остекления и т.д. не
          учитывает два ключевых фактора:
          <ul>
            <li>реальный уровень теплоизоляции дома</li>
            <li>температуру воды в трубах отопления</li>
          </ul>
        </Typography>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          Последний является более важным, так как современные дома все имеют
          уже достаточно хороший уровень теплоизоляции, а вот разброс
          температуры подачи отопления разница очень сильно не только между
          домами разных конструкций и серий, но даже между домами одной серии и
          даже между подъездами внутри одного дома.
        </Typography>
        <Box textAlign={"center"}>
          <Image
            src="/images/articles/2022122701.jpg"
            alt="Горзонтальный 3-трубчатый радиаторы Arbonia"
            width={800}
            height={800}
          />
        </Box>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          Исходя из этого, простая проверка мощности уже установленных
          радиаторов - это отличный способ выяснить, какой радиатор вам
          требуется на каждое помещение.
        </Typography>

        <Typography marginTop="40px" variant="h5" component={"h2"}>
          Если это новостройка
        </Typography>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          В новых домах ситуация и проще и сложнее одновременно. С одной
          стороны, есть точная документация от застройщика или управляющей
          компании, где указаны требования к отопительным приборам. Управляющая
          компания ориентируется на заложенные в проект радиаторы при подаче
          тепла. Здесь невозможны ситуации, когда старый владелец квартиры
          поставил 10 лет назад алюминиевый радиатор с большим запасом и потому
          новый придется подбирать либо с такой же избыточной мощностью, либо
          пытаться “на глаз” определить, насколько его можно сделать слабее.
        </Typography>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          С другой, в новой квартире без ремонта не всегда можно адекватно
          определить, насколько там тепло или насколько будет тепло после
          окончания ремонта. Также здесь дополнительной сложности добавляют
          правки в планировку, особенно если речь идет о присоединении
          утепленного балкона или лоджии. В таких случаях лучше перестраховаться
          и взять радиаторы мощнее установленных застройщиком.
        </Typography>

        <Typography marginTop="40px" variant="h5" component={"h2"}>
          Что еще необходимо учесть
        </Typography>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          Мощность - это не единственная характеристика радиатора, хотя и
          наиболее важная из всех. Имея понимание того, какая вам требуется
          мощность радиаторы, вы уже можете подобрать модель радиатора и более
          точно определяться с его размещением в помещении.
        </Typography>
        <Typography sx={{ ...styles.standardText }} marginY="20px">
          Благодаря тому, что трубчатые радиаторы Arbonia могут быть как
          2-трубчатыми, так и 6-трубчатыми, у вас появляется возможность
          варьировать их мощность меняя толщину моделей, а не только их высоту и
          ширину, которые могут быть ограничены.
        </Typography>
        <Box textAlign={"center"}>
          <Image
            src="/images/articles/2022122702.jpg"
            alt="Вертикальный 3-трубчатый радиаторы Arbonia"
            width={800}
            height={800}
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
