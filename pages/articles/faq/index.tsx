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
          "Радиаторы Arbonia: ответы на частые вопросы"
        }
        description={
          "Собрали наиболее частые вопросы, которые нам задают про радиаторы Arbonia, и подготовили на них ответы. Где можно устанавливать радиаторы Arbonia? Где их производят? Какое давление они выдерживают? И т.д."
        }
      />
      <PageTitle
        breadcrumbs={[
          { title: "Главная", link: "/" },
          { title: "Полезная информация", link: "/articles" },
          {
            title: "Радиаторы Arbonia: ответы на частые вопросы",
            link: "/articles/faq",
          },
        ]}
      />
      <Hero
        imgPath={"/images/sliders/slide-5.jpeg"}
        header={"Горизонтальный радиатор Arbonia"}
      />
      <Box
        sx={{ ...global.pagePadding, maxWidth: "900px", margin: "auto" }}
        itemScope
        itemType="https://schema.org/FAQPage"
      >

        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <Typography marginTop="40px" variant="h5" component={"h2"} itemProp="name">
            Где производят радиаторы Arbonia?
          </Typography>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              <Typography sx={{ ...styles.standardText }} marginY="20px">
                Холдинг, который управляет брендом Arbonia, располагает несколькими производственными мощностями. Завод, расположенный в городе Стршибро, Чехия, специализируется на изготовлении трубчатых радиаторов для систем отопления.
              </Typography>
            </div>
          </div>
        </div>

        {/* --- */}

        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <Typography marginTop="40px" variant="h5" component={"h2"} itemProp="name">
            Какие вертикальные радиаторы Arbonia поддерживаются в наличии?
          </Typography>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              <Typography sx={{ ...styles.standardText }} marginY="20px">
                На складе постоянно поддерживаются радиаторы{" "}<Link href="/models/2180">
                  <a style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{ ...styles.standardTextRedLink }}
                      component="span"
                    >
                      Arbonia 2180
                    </Typography>
                  </a>
                </Link>{" "}и{" "}<Link href="/models/3180">
                  <a style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{ ...styles.standardTextRedLink }}
                      component="span"
                    >
                      Arbonia 3180
                    </Typography>
                  </a>
                </Link>{" "}- это батареи высотой 180 см в 2-трубчатом и 3-трубчатом исполнении. Вы можете приобрести радиаторы как с нижним, так и с боковым подключением. В большинстве случаев подходит модель 2180. Но если вам требуется более мощный радиатор, то следует обратить внимание на Arbonia 3180.
              </Typography>
            </div>
          </div>
        </div>

        {/* --- */}

        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <Typography marginTop="40px" variant="h5" component={"h2"} itemProp="name">
            Подходят ли радиаторы Arbonia для центрального отопления?
          </Typography>

          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              <Typography sx={{ ...styles.standardText }} marginY="20px">
                Радиаторы Arbonia подходят как для установки в многоквартирные дома с централизованной системой отопления, так и для использования в частных домах с собственным отопительным котлом. Они предназначены для работы в системах с закрытым контуром, где отсутствует прямой доступ кислорода к воде.
              </Typography>
              <Typography sx={{ ...styles.standardText }} marginY="20px">
                В обычных условиях работы центральной отопительной системы давление обычно не превышает 8 атмосфер. Однако радиаторы спроектированы таким образом, что могут непрерывно работать при давлении до 10 атмосфер и выдерживать кратковременные повышения до 16 атмосфер, что обеспечивает их надежность и долговечность в широком диапазоне рабочих условий.
              </Typography>
            </div>
          </div>
        </div>

        {/* --- */}

        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <Typography marginTop="40px" variant="h5" component={"h2"} itemProp="name">
            Возможно ли радиусное исполнение радиаторов Arbonia?
          </Typography>

          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              <Typography sx={{ ...styles.standardText }} marginY="20px">
                Радиусное исполнение радиаторов Arbonia предполагает индивидуальный подход к каждому заказу, начиная с точного замера радиуса стены на месте установки и заканчивая контрольной проверкой утвержденного шаблона перед началом производства. Этот процесс гарантирует, что радиатор будет идеально соответствовать кривизне стены и интерьеру помещения. Особенностью является то, что каждый этап требует участия квалифицированных специалистов, от замерщика до инженеров конструкторского бюро, что, безусловно, влияет на стоимость и сроки изготовления такого радиатора.

                <Box textAlign={"center"} marginTop="20px">
                  <Image
                    src="/images/articles/radius1.png"
                    alt="Радиатор Arbonia в радиусном исполнении"
                    width={502}
                    height={213}
                  />
                </Box>
              </Typography>
            </div>
          </div>
        </div>

        {/* --- */}

        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <Typography marginTop="40px" variant="h5" component={"h2"} itemProp="name">
            Какое должно быть расстояние радиатора от стены
          </Typography>

          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              <Typography sx={{ ...styles.standardText }} marginY="20px">
                Установка радиатора на рекомендованном минимальном расстоянии от стены позволяет достичь оптимального теплообмена и распределения воздуха в помещении.
              </Typography>
              <Typography sx={{ ...styles.standardText }} marginY="20px">
                На выбор кронштейнов влияет не только тип радиатора (количество трубок), но и необходимое расстояние от стены. Кронштейны с фиксированной глубиной установки (ZB 0251, ZB 0257, ZB 0280) подойдут, если точно известно расстояние, необходимое для установки радиатора. В то же время, кронштейны с регулируемой глубиной (W161, W162, W163, W164) предоставляют большую гибкость при монтаже, позволяя адаптировать установку под конкретные условия и требования к расстоянию от стены.
              </Typography>
              <Typography sx={{ ...styles.standardText }} marginY="20px">
                Для разных типов радиаторов требуются разные минимальные расстояния от стены, что связано с их тепловой мощностью и способностью к распределению тепла в помещении. Чем больше количество трубок в радиаторе, тем больше места необходимо для обеспечения эффективного теплообмена, поскольку более массивные радиаторы генерируют и распределяют больше тепла. Эти рекомендации помогают обеспечить, чтобы радиаторы работали наиболее эффективно, не теряя тепловую мощность из-за слишком близкого расположения к стене.
              </Typography>
            </div>
          </div>
        </div>

        {/* --- */}

        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <Typography marginTop="40px" variant="h5" component={"h2"} itemProp="name">
            Какое нужно расстояние от пола и от подоконника?
          </Typography>

          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              <Typography sx={{ ...styles.standardText }} marginY="20px">
                Соблюдение минимального расстояния как от подоконника, так и от пола гарантирует, что воздух свободно циркулирует вокруг радиатора, что способствует более эффективному распределению тепла.
                <ul>
                  <li><strong>От подоконника до радиатора</strong>: Минимум 10 см расстояние позволяет горячему воздуху подниматься от радиатора вверх, не создавая теплового затора под подоконником. Это уменьшает риск конденсации и повышает эффективность отопления.</li>
                  <li><strong>От пола до радиатора</strong>: Такое же минимальное расстояние в 10 см обеспечивает адекватную циркуляцию воздуха под радиатором, что способствует более равномерному распределению тепла по комнате. Это также позволяет удобно убирать пыль и грязь, которые могут скапливаться под радиатором.</li>
                </ul>
              </Typography>
            </div>
          </div>
        </div>

        {/* --- */}

        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <Typography marginTop="40px" variant="h5" component={"h2"} itemProp="name">
            Возможно ли проходное подключение радиаторов Arbonia
          </Typography>

          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              <Typography sx={{ ...styles.standardText }} marginY="20px">
                Последовательное подключение нескольких радиаторов Arbonia – это распространенный метод в системах отопления, позволяющий эффективно распределять тепло в нескольких помещениях или в большом пространстве. Использование проходных радиаторов и комплектующих, таких как переходники с отбортовкой и прокладки, обеспечивает герметичность и надежность такого подключения.
              </Typography>
              <Typography sx={{ ...styles.standardText }} marginY="20px">
                Выбор между 1/2" и 3/4" зависит от расчетной тепловой мощности системы и требуемого расхода воды через радиаторы. Более крупный диаметр позволяет обеспечить больший расход и, соответственно, может быть предпочтителен для систем с высокой тепловой нагрузкой.
              </Typography>
            </div>
          </div>
        </div>

        {/* --- */}

        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <Typography marginTop="40px" variant="h5" component={"h2"} itemProp="name">
            Как работает циркуляция теплоносителя в радиаторах большой длины
          </Typography>

          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              <Typography sx={{ ...styles.standardText }} marginY="20px">
                Когда радиатор получается особенно длинным (1500 мм и более), без дополнительных мер может произойти снижение эффективности отопления из-за недостаточного распределения горячей воды по всей его длине. В таких случаях внутрь радиатора устанавливается трубка-удлинитель, которая помогает воде равномерно распределиться, повышая тем самым общую теплоотдачу радиатора.
              </Typography>
              <Typography sx={{ ...styles.standardText }} marginY="20px">
                Длина трубки составляет 2/3 от длины радиатора, что позволяет горячей воде достигать дальних участков радиатора, тем самым улучшая его теплоотдачу и обеспечивая более равномерный нагрев помещения.
              </Typography>
            </div>
          </div>
        </div>

        {/* --- */}

        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <Typography marginTop="40px" variant="h5" component={"h2"} itemProp="name">
            Возможна ли покраска радиаторов в свой цвет?
          </Typography>

          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              <Typography sx={{ ...styles.standardText }} marginY="20px">
                Вы можете выбрать между заказом радиатора прямо с завода в нужном цвете, что может занять от 2 до 4 месяцев, либо воспользоваться услугой покраски радиаторов в выбранный цвет из палитры RAL, что значительно быстрее – всего 1-2 недели.
              </Typography>
            </div>
          </div>
        </div>

      </Box>
    </Box >
  );
};

export default ArticlePage;

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
