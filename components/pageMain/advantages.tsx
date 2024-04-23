import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

import * as styles from "../../styles/styles";
import { textAlign } from "@mui/system";

type AdvantagesProps = {};

const Advantages: React.FC<AdvantagesProps> = () => {
  return (
    <Box paddingX={{ xs: "10px", md: "20px" }}>
      <Typography
        variant="h5"
        component="h2"
        textAlign="left"
      >
        Почему трубчатые радиаторы Arbonia
      </Typography>
      <Box marginTop="30px">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <Box textAlign="center">
              <div
                style={{ ...styles.roundSquareImage, display: "inline-block" }}
              >
                <Image
                  priority
                  src="/images/advantages/1.jpg"
                  width={"200px"}
                  height={"200px"}
                  sizes="200px"
                  alt="Завод радиаторов Arbonia"
                />
              </div>
              <Typography variant="h6" component="h3">
                Крупный производитель
              </Typography>
            </Box>
            <Typography sx={{ ...styles.smallText }} maxWidth={400} marginX="auto" marginTop="10px">
              Arbonia - известный европейский производитель, ведущий свою
              историю с 1954 года. Компания специализируется на производстве
              отопительного и вентиляционного оборудования. Помимо трубчатых
              радиаторов, компания занимается изготовлением полотенцесушителей и
              панельных радиаторов.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Box textAlign="center">
              <div
                style={{ ...styles.roundSquareImage, display: "inline-block" }}
              >
                <Image
                  priority
                  src="/images/advantages/2.jpg"
                  width={"200px"}
                  height={"200px"}
                  sizes="200px"
                  alt="Вертикальный трубчатый радиатор Arbonia"
                />
              </div>
              <Typography variant="h6" component="h3">
                Широкий ассортимент
              </Typography>
            </Box>
            <Typography sx={{ ...styles.smallText }} maxWidth={400} marginX="auto" marginTop="10px">
              В модельном ряде трубчатых радиаторов Arbonia имеется 5 вариантов
              глубины. Высота батарей возможна от 19 см до 3 м. Длина до 66
              секций вместо 40 секций, как у большинства производителей.
              Радиаторы Arbonia продолжают поставляться в Россию, в том числе и
              по индивидуальным заказам.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Box textAlign="center">
              <div
                style={{ ...styles.roundSquareImage, display: "inline-block" }}
              >
                <Image
                  priority
                  src="/images/advantages/3.jpg"
                  width={"200px"}
                  height={"200px"}
                  sizes="200px"
                  alt="Горизонтальный трубчатый радиатор Arbonia белого цвета"
                />
              </div>
              <Typography variant="h6" component="h3">
                Гигиеничность
              </Typography>
            </Box>
            <Typography sx={{ ...styles.smallText }} maxWidth={400} marginX="auto" marginTop="10px">
              Форма трубчатого радиатора позволяет его легко чистить щеткой или
              мыть. Базовая покраска имеет гладкую поверхность, на которой не
              накапливаются пыль и грязь. Это преимущество играет особенно
              важную роль в случаях, когда в доме живут люди, страдающие
              аллергией.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Box textAlign="center">
              <div
                style={{ ...styles.roundSquareImage, display: "inline-block" }}
              >
                <Image
                  priority
                  src="/images/advantages/4.jpg"
                  width={"200px"}
                  height={"200px"}
                  sizes="200px"
                  alt="Установка радиатора Arbonia"
                />
              </div>
              <Typography variant="h6" component="h3">
                Надежность
              </Typography>
            </Box>
            <Typography sx={{ ...styles.smallText }} maxWidth={400} marginX="auto" marginTop="10px">
              Гарантия на радиаторы Arbonia составляет 10 лет. Радиаторы
              подходят для работы в российских условиях и для установки в
              многоквартирные дома. Благодаря полностью автоматизированному
              процессу производства исключается человеческий фактор.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Box textAlign="center">
              <div
                style={{ ...styles.roundSquareImage, display: "inline-block" }}
              >
                <Image
                  priority
                  src="/images/advantages/5.jpg"
                  width={"200px"}
                  height={"200px"}
                  sizes="200px"
                  alt="Радиатор Arbonia с боковым подключением"
                />
              </div>
              <Typography variant="h6" component="h3">
                Наличие на складе
              </Typography>
            </Box>
            <Typography sx={{ ...styles.smallText }} maxWidth={400} marginX="auto" marginTop="10px">
              В наличии поддерживаются наиболее популярные модели Arbonia. От
              небольших 2030, до вертикальных и мощных 3180. Вертикальные модели
              также доступны в цветном исполнении: черный и темно-серый оттенки.
              В подавляющем большинству случаев наши покупатели находят
              радиаторы с требуемыми характеристиками у нас в наличии. Для
              исключительных случаев мы можем заказать изготовление радиаторов
              по индивидуальным требованиям.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Box textAlign="center">
              <div
                style={{ ...styles.roundSquareImage, display: "inline-block" }}
              >
                <Image
                  priority
                  src="/images/advantages/6.jpg"
                  width={"200px"}
                  height={"200px"}
                  sizes="200px"
                  alt="Низкий радиатор Arbonia с боковым подключением"
                />
              </div>
              <Typography variant="h6" component="h3">
                Быстрая доставка по России
              </Typography>
            </Box>
            <Typography sx={{ ...styles.smallText }} maxWidth={400} marginX="auto" marginTop="10px">
              Arbonia отгружаются со складов, расположенных в Москве и
              Санкт-Петербурге. Доставка возможна в любой город России.
              Благодаря надежной заводской упаковке радиаторы будут доставлены
              без досадных повреждений. Мы имеем опыт доставки радиаторов от
              Калининграда до Владивостока, а также в Казахстан.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Advantages;
