import { useState } from "react"
import Link from "next/link"
import Script from "next/script"

import { Box, Typography, Grid } from "@mui/material"

import PageHeader from "../components/pageHeader/pageHeader"
import PageTitle from "../components/pageTitle/pageTitle"

import trackEvent from "../utils/trackEvent"

import type { NextPage } from "next"

import * as styles from "../styles/styles"
import global from "../variables/global"

type PageRequestProps = {}

const PageRequest: NextPage<PageRequestProps> = () => {
  const [show, setShow] = useState<boolean>(false)
  const toggleShow = () => setShow(!show)

  return (
    <Box>
      <Script
        id={"ucalc"}
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
                    var widgetOptions403860 = { bg_color: "transparent" }; 
                    (function () { var a = document.createElement("script"), h = "head"; a.async = true; a.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ucalc.pro/api/widget.js?id=403860&t="+Math.floor(new Date()/18e5); document.getElementsByTagName(h)[0].appendChild(a) })();
                    `,
        }}
      />
      <PageTitle
        header={"Специализированный магазин Arbonia в России"}
        subheader={"Доставка со складов в Москве и Санкт-Петербурге"}
        breadcrumbs={[
          { title: "Главная", link: "/" },
          { title: "Запрос на подбор радиаторов", link: "/request" },
        ]}
      />
      <Box sx={{ ...global.pagePadding }}>
        <PageHeader title={"Запрос на подбор радиаторов Arbonia"} />
        <Box marginY={"30px"}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            textAlign="center"
            sx={{ textTransform: "uppercase" }}
          >
            Запрос на подбор радиаторов
          </Typography>
        </Box>
        <Typography
          sx={{ ...styles.standardText }}
          textAlign="center"
        >
          Если вам требуется консультация, расчет или подбор радиаторов по
          проекту,то свяжитесь с нами любым удобным вам способом.
        </Typography>
        <Box
          marginY="20px"
          padding="10px"
          sx={{ backgroundColor: "#333333", borderRadius: "10px" }}
        >
          <Grid
            container
            spacing={2}
            alignItems={"center"}
          >
            <Grid
              item
              xs={12}
              sm={4}
              textAlign="center"
            >
              <Typography
                sx={{ ...styles.smallText, color: "#e6e6e6" }}
                display="inline"
              >
                тел.:&ensp;
              </Typography>
              <Link href={`tel:${global.phone495}`}>
                <a
                  style={{ textDecoration: "none" }}
                  onClick={() => trackEvent("phone_click")}
                >
                  <Typography
                    sx={{ ...styles.standardTextLink, color: "white" }}
                    display="inline"
                  >
                    {global.phone495String}
                  </Typography>
                </a>
              </Link>
              <Typography
                sx={{ ...styles.standardText, color: "white" }}
                display="inline"
              >
                <br />
                <Typography
                  sx={{ ...styles.smallText, color: "#333333" }}
                  display="inline"
                  component="span"
                >
                  тел.:&ensp;
                </Typography>
              </Typography>
              <Link href={`tel:${global.phone812}`}>
                <a
                  style={{ textDecoration: "none" }}
                  onClick={() => trackEvent("phone_click")}
                >
                  <Typography
                    sx={{ ...styles.standardTextLink, color: "white" }}
                    display="inline"
                  >
                    {global.phone812String}
                  </Typography>
                </a>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              textAlign="center"
            >
              <Typography
                sx={{ ...styles.smallText, color: "#e6e6e6" }}
                display="inline"
              >
                email:&ensp;
              </Typography>
              <Link href={`mailto:${global.email}`}>
                <a
                  style={{ textDecoration: "none" }}
                  onClick={() => trackEvent("email_click")}
                >
                  <Typography
                    sx={{ ...styles.standardTextLink, color: "white" }}
                    display="inline"
                  >
                    {global.email}
                  </Typography>
                </a>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              textAlign="center"
            >
              <Typography
                sx={{ ...styles.smallText, color: "#e6e6e6" }}
                display="inline"
              >
                whatsapp:&ensp;
              </Typography>
              <Link href={`https://wa.me/${global.whatsApp}`}>
                <a
                  style={{ textDecoration: "none" }}
                  onClick={() => trackEvent("whatsapp_click")}
                >
                  <Typography
                    sx={{ ...styles.standardTextLink, color: "white" }}
                    display="inline"
                  >
                    {global.whatsAppString}
                  </Typography>
                </a>
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Typography
          sx={{ ...styles.standardText }}
          textAlign="center"
        >
          Также вы можете заполнить форму, представленную ниже.
        </Typography>
        <Box marginTop="20px">
          <a onClick={() => toggleShow()}>
            <Typography
              sx={styles.smallTextGreenUnderline}
              textAlign="center"
            >
              <span style={{ textDecorationStyle: "dotted" }}>
                Какая информация нам нужна
              </span>
            </Typography>
          </a>
        </Box>

        {show && (
          <Box
            padding="20px"
            sx={{ backgroundColor: "#e6e6e6", borderRadius: "10px" }}
          >
            <Typography
              sx={{ ...styles.standardText }}
              component={"span"}
            >
              Информация, которая нужна для правильного побора радиаторов: (если
              каких-то данных пока нет - то можно отправить то, что уже
              известно)
              <ul>
                <li>Размеры помещений, высота потолков</li>
                <li>
                  Желаемое место расположения радиаторов. Доступные габариты.
                  Например, если радиатор ставится под окно, то: высота
                  подоконника и длина окна
                </li>
                <li>
                  Если возможно - план квартиры / дома, что упростит общение
                </li>
                <li>
                  Тип подключения радиаторов в вашем доме: индивидуальная
                  разводка труб по полу или общий стояк отопления
                </li>
                <li>Город доставки</li>
              </ul>
              Любую иную информацию, которая вам кажется важной и которую нам
              необходимо учесть. Оставьте ваши контактные данные, чтобы мы могли
              связаться с вами и получить дополнительную информацию в случае
              необходимости.
            </Typography>
          </Box>
        )}

        <Box marginTop="50px">
          <div className="uCalc_403860"></div>
        </Box>
      </Box>
    </Box>
  )
}

export default PageRequest
