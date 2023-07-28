import type { NextPage } from "next"
import Link from "next/link"
import { Box, Typography, Grid, Divider } from "@mui/material"

import PageHeader from "../components/pageHeader/pageHeader"
import PageTitle from "../components/pageTitle/pageTitle"
import Hero from "../components/hero/hero"

import trackEvent from "../utils/trackEvent"

import * as styles from "../styles/styles"
import global from "../variables/global"

type PageAboutProps = {}

const PageAbout: NextPage<PageAboutProps> = () => {
  return (
    <Box
      itemScope
      itemType="https://schema.org/Organization"
    >
      <PageTitle
        header={"Специализированный магазин Arbonia в России"}
        subheader={"Доставка со складов в Москве и Санкт-Петербурге"}
        breadcrumbs={[
          { title: "Главная", link: "/" },
          { title: "О магазине", link: "/about" },
        ]}
      />
      <PageHeader title={"О магазине радиаторов Arbonia"} />
      <Hero
        imgPath={"/images/sliders/slide.jpeg"}
        header={"О магазине"}
      />
      <Box
        sx={{ ...global.pagePadding }}
        marginTop="20px"
      >
        <Box>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              md={7}
              lg={6}
            >
              <Typography
                sx={{ ...styles.standardText }}
                component={"span"}
              >
                Наша компания специализируется на отопительном оборудовании
                премиум-класса: стальные трубчатые радиаторы, внутрипольные
                конвекторы, дизайн-радиаторы и чугунные ретро-радиаторы. Мы
                работаем с большим количеством европейских заводов. В данном
                магазине представлена продукции группы компаний Arbonia Group,
                хорошо известной на российском рынке следующими товарами:
                <ul>
                  <li>Стальные трубчатые радиаторы Arbonia</li>
                  <li>Полотенцесушители и дизайн-радиаторы</li>
                  <li>Внутрипольные и напольные конвекторы</li>
                </ul>
                Мы имеем богатый опыт работы с радиаторами Arbonia (с 2009 года)
                и можем предоставить вам грамотную консультацию в подборе
                наиболее подходящих для вас радиаторов, а также комплектующих к
                ним. Каждому нашему клиенту мы гарантируем индивидуальный
                подход, учитывающий именно его пожелания, а также технические
                особенности системы отопления в его доме или квартире.
              </Typography>
              <Typography sx={{ ...styles.standardText, marginTop: "20px" }}>
                Доставку осуществляем по Москве и Санкт-Петербургу. В другие
                города доставка осуществляется через транспортные компании
                (Деловые Линии, Возовоз, Байкал-Сервис и др).
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={1}
              lg={1}
            >
              <Divider orientation="vertical" />
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              lg={3}
            >
              <Box>
                <Typography sx={{ ...styles.standardTextBold }}>
                  Контактная информация
                </Typography>
              </Box>
              <Box marginTop="20px">
                <Typography
                  sx={{ ...styles.smallTextBold }}
                  display="inline"
                >
                  тел.:&nbsp;
                </Typography>
                <Link href={`tel:${global.phone495}`}>
                  <a
                    style={{ textDecoration: "none" }}
                    onClick={() => trackEvent("phone_click")}
                  >
                    <Typography
                      sx={{ ...styles.standardTextLink }}
                      display="inline"
                      itemProp="telephone"
                    >
                      {global.phone495String}
                    </Typography>
                  </a>
                </Link>
                <br />
                <Typography
                  sx={{ ...styles.smallTextBold, color: "#ffffff" }}
                  display="inline"
                >
                  тел.:&nbsp;
                </Typography>
                <Link href={`tel:${global.phone812}`}>
                  <a
                    style={{ textDecoration: "none" }}
                    onClick={() => trackEvent("phone_click")}
                  >
                    <Typography
                      sx={{ ...styles.standardTextLink }}
                      display="inline"
                      itemProp="telephone"
                    >
                      {global.phone812String}
                    </Typography>
                  </a>
                </Link>
              </Box>
              <Box>
                <Typography
                  sx={{ ...styles.smallTextBold }}
                  display="inline"
                >
                  email:&nbsp;
                </Typography>
                <Link href={`mailto:${global.email}`}>
                  <a
                    style={{ textDecoration: "none" }}
                    onClick={() => trackEvent("email_click")}
                  >
                    <Typography
                      sx={{ ...styles.standardTextLink }}
                      display="inline"
                      itemProp="email"
                    >
                      {global.email}
                    </Typography>
                  </a>
                </Link>
              </Box>

              <Box>
                <Typography
                  sx={{ ...styles.smallTextBold }}
                  display="inline"
                >
                  whatsapp:&nbsp;
                </Typography>
                <Link href={`https://wa.me/${global.whatsApp}`}>
                  <a
                    style={{ textDecoration: "none" }}
                    onClick={() => trackEvent("whatsapp_click")}
                  >
                    <Typography
                      sx={{ ...styles.standardTextLink }}
                      display="inline"
                    >
                      {global.whatsAppString}
                    </Typography>
                  </a>
                </Link>
              </Box>

              <Box>
                <Typography
                  sx={{ ...styles.smallTextBold }}
                  display="inline"
                >
                  telegram:&nbsp;
                </Typography>
                <Link href={`https://t.me/Arboniashopbot`}>
                  <a
                    style={{ textDecoration: "none" }}
                    onClick={() => trackEvent("telegram_click")}
                  >
                    <Typography
                      sx={{ ...styles.standardTextLink }}
                      display="inline"
                    >
                      @Arboniashopbot
                    </Typography>
                  </a>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box marginY="30px">
          <Divider />
        </Box>
        <Box>
          <Typography
            variant="h5"
            component="h2"
          >
            Юридическая информация
          </Typography>
          <Box marginTop="20px">
            <Typography sx={{ ...styles.standardText }}>
              <span itemProp="name">
                <strong>ООО &#34;ХОУМ КОМФОРТ&#34;</strong>
              </span>
              <br />
              www.homekomfort.ru
              <br />
              Центральный офис: 193168, РОССИЯ, г САНКТ-ПЕТЕРБУРГ, пр-кт
              ИСКРОВСКИЙ, ДОМ 22, корпус литера А, оф 3 ПОМЕЩ. 33-Н
              <br />
              ОГРН: 1237800065865
              <br />
              &zwj;ИНН/КПП 7811788339 / 781101001
              <br />
              Р/с 40702810520000015671
              <br />
              в ООО &#34;Банк Точка&#34;
              <br />
              БИК 044525104
              <br />
              Корр/сч: 30101810745374525104
              <br />
              <br />
              <br />
              Мы работаем как с физическими, так и с юридическими лицами.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PageAbout

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}
