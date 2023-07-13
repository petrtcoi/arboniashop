import React from "react"
import Link from "next/link"
import { Box, Typography } from "@mui/material"

import ModelBlock from "../modelBlock/modelBlock"
import PageHeader from "../../components/pageHeader/pageHeader"
import Hero from "../../components/hero/hero"

import { SetComponentProps } from "../../models/setComponentProps.model"

import * as styles from "../../styles/styles"
import global from "../../variables/global"

const SetHighModel: React.FC<SetComponentProps> = ({
  models,
  colors,
  connections,
}) => {
  return (
    <Box>
      <PageHeader
        title={
          "Вертикальные Arbonia 2180 и 3180 купить в Москве, Петербурге и с доставкой по России в магазине ArboniaShop.ru"
        }
      />
      <Hero
        imgPath={"/images/sliders/high.jpeg"}
        header={"Вертикальные модели Arbonia"}
        subheader={"Складские модели радиаторов высотой 180 см"}
      />
      <Box sx={{ ...global.pagePadding }}>
        <Box marginTop="20px">
          <Typography sx={{ ...styles.standardText }}>
            Вертикальные радиаторы Arbonia - одна из самых популярных и любимых
            моделей среди владельцев квартир, домов, выбор профессиональных
            дизайнеров и архитекторов. Стальные трубчатые вертикальные радиаторы
            уже стали важным, а иногда и центральным элементом или акцентом в
            интерьере помещения. Забудьте те времена, когда радиатор скрывали в
            интерьерах. Arbonia Column не нужно скрывать под декоративными
            панелями.
          </Typography>
          <Box marginTop="20px">
            <Typography sx={{ ...styles.standardText }}>
              Если вас интересуют только 2-трубчатые модели, то посетите наш
              обзор &#160;
              <Link href="/catalog/2180-stock">
                <a style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{ ...styles.standardTextRedLink }}
                    component="span"
                  >
                    складских радиаторов Arbonia 2180
                  </Typography>
                </a>
              </Link>
              , где мы больше внимания уделяем именно этой модели.
            </Typography>
          </Box>
        </Box>
        <Box marginTop="20px">
          <Typography sx={{ ...styles.standardText }}>
            Стальные трубчатые вертикальные радиаторы функциональны, так как
            подходят для помещения с высокими окнами, их можно разместить на
            узких стенах по бокам от окон, в различных выступах, узких угловых
            пространствах. Вертикальные радиаторы Arbonia впишутся в любую
            концепцию интерьера – от минимализма и модерна до хайтека, лофта,
            фьюжн и многих других.
          </Typography>
        </Box>

        {/* 2180 белый*/}
        <ModelBlock
          title={"Arbonia 2180 RAL 9016, боковое подключение 3/4"}
          description={
            "Высокий 2-трубчатый радиатор в белом цвете и боковым подклчюением 3/4. Данная модель имеет стильный дизайн. Диаметр подключения 3/4 позволяет ставить радиатор в старые дома с однотрубной системой отопления."
          }
          model={models.find(x => x.id === "2180-9016-12") || models[0]}
          color={colors.find(x => x.id === "9016") || colors[0]}
          connection={connections.find(x => x.id === "12") || connections[0]}
        />
        <ModelBlock
          title={"Arbonia 2180 RAL 9016, №69 ТВВ"}
          description={
            "Высокий 2-трубчатый радиатор в белом цвете и нижним подключением со встроенным термовентилем. Радиатор подойдет для монтажа в современных домах с разводкой отопления по полу."
          }
          model={models.find(x => x.id === "2180-9016-69tvv") || models[0]}
          color={colors.find(x => x.id === "9016") || colors[0]}
          connection={connections.find(x => x.id === "69tvv") || connections[0]}
        />

        {/* 2180 RAL 7016*/}
        <ModelBlock
          title={"Arbonia 2180 RAL 7016, боковое подключение 3/4"}
          description={
            "Высокий 2-трубчатый радиатор в антрацитово-сером цвете (RAL 7016) и боковым подклчюением 3/4. Данная модель имеет стильный дизайн. Диаметр подключения 3/4 позволяет ставить радиатор в старые дома с однотрубной системой отопления."
          }
          model={models.find(x => x.id === "2180-7016-12") || models[0]}
          color={colors.find(x => x.id === "7016") || colors[0]}
          connection={connections.find(x => x.id === "12") || connections[0]}
        />
        <ModelBlock
          title={"Arbonia 2180 RAL 7016, №69 ТВВ"}
          description={
            "Высокий 2-трубчатый радиатор в антрацитово-сером цвете (RAL 7016) и нижним подключением со встроенным термовентилем. Радиатор подойдет для монтажа в современных домах с разводкой отопления по полу."
          }
          model={models.find(x => x.id === "2180-7016-69tvv") || models[0]}
          color={colors.find(x => x.id === "7016") || colors[0]}
          connection={connections.find(x => x.id === "69tvv") || connections[0]}
        />

        {/* 2180 SF-3*/}
        <ModelBlock
          title={
            "Arbonia 2180 SF-3 Anthrazit metallic, боковое подключение 3/4"
          }
          description={
            "Высокий 2-трубчатый радиатор в цвете SF-3 Anthrazit metallic и боковым подклчюением 3/4. Данная модель имеет стильный дизайн. Диаметр подключения 3/4 позволяет ставить радиатор в старые дома с однотрубной системой отопления."
          }
          model={models.find(x => x.id === "2180-sf3-12") || models[0]}
          color={colors.find(x => x.id === "sf3") || colors[0]}
          connection={connections.find(x => x.id === "12") || connections[0]}
        />
        <ModelBlock
          title={"Arbonia 2180 SF-3 Anthrazit metallic, №69 ТВВ"}
          description={
            "Высокий 2-трубчатый радиатор в цвете SF-3 Anthrazit metallic и нижним подключением со встроенным термовентилем. Радиатор подойдет для монтажа в современных домах с разводкой отопления по полу."
          }
          model={models.find(x => x.id === "2180-sf3-69tvv") || models[0]}
          color={colors.find(x => x.id === "sf3") || colors[0]}
          connection={connections.find(x => x.id === "69tvv") || connections[0]}
        />

        {/* 3180 белый*/}
        <ModelBlock
          title={"Arbonia 3180 RAL 9016, боковое подключение 3/4"}
          description={
            "Высокий 3-трубчатый радиатор в белом цвете и боковым подклчюением 3/4. Данная модель имеет стильный дизайн. Диаметр подключения 3/4 позволяет ставить радиатор в старые дома с однотрубной системой отопления."
          }
          model={models.find(x => x.id === "3180-9016-12") || models[0]}
          color={colors.find(x => x.id === "9016") || colors[0]}
          connection={connections.find(x => x.id === "12") || connections[0]}
        />
        <ModelBlock
          title={"Arbonia 3180 RAL 9016, №69 ТВВ"}
          description={
            "Высокий 3-трубчатый радиатор в белом цвете и нижним подключением со встроенным термовентилем. Радиатор подойдет для монтажа в современных домах с разводкой отопления по полу."
          }
          model={models.find(x => x.id === "3180-9016-69tvv") || models[0]}
          color={colors.find(x => x.id === "9016") || colors[0]}
          connection={connections.find(x => x.id === "69tvv") || connections[0]}
        />

        {/* 3180 RAL 7016*/}
        <ModelBlock
          title={"Arbonia 3180 RAL 7016, боковое подключение 3/4"}
          description={
            "Высокий 3-трубчатый радиатор в антрацитово-сером цвете (RAL 7016) и боковым подклчюением 3/4. Данная модель имеет стильный дизайн. Диаметр подключения 3/4 позволяет ставить радиатор в старые дома с однотрубной системой отопления."
          }
          model={models.find(x => x.id === "3180-7016-12") || models[0]}
          color={colors.find(x => x.id === "7016") || colors[0]}
          connection={connections.find(x => x.id === "12") || connections[0]}
        />
        <ModelBlock
          title={"Arbonia 3180 RAL 7016, №69 ТВВ"}
          description={
            "Высокий 3-трубчатый радиатор в антрацитово-сером цвете (RAL 7016) и нижним подключением со встроенным термовентилем. Радиатор подойдет для монтажа в современных домах с разводкой отопления по полу."
          }
          model={models.find(x => x.id === "3180-7016-69tvv") || models[0]}
          color={colors.find(x => x.id === "7016") || colors[0]}
          connection={connections.find(x => x.id === "69tvv") || connections[0]}
        />

        {/* 3180 SF-3*/}
        <ModelBlock
          title={
            "Arbonia 3180 SF-3 Anthrazit metallic, боковое подключение 3/4"
          }
          description={
            "Высокий 3-трубчатый радиатор в цвете SF-3 Anthrazit metallic и боковым подклчюением 3/4. Данная модель имеет стильный дизайн. Диаметр подключения 3/4 позволяет ставить радиатор в старые дома с однотрубной системой отопления."
          }
          model={models.find(x => x.id === "3180-sf3-12") || models[0]}
          color={colors.find(x => x.id === "sf3") || colors[0]}
          connection={connections.find(x => x.id === "12") || connections[0]}
        />
        <ModelBlock
          title={"Arbonia 3180 SF-3 Anthrazit metallic, №69 ТВВ"}
          description={
            "Высокий 3-трубчатый радиатор в цвете SF-3 Anthrazit metallic и нижним подключением со встроенным термовентилем. Радиатор подойдет для монтажа в современных домах с разводкой отопления по полу."
          }
          model={models.find(x => x.id === "3180-sf3-69tvv") || models[0]}
          color={colors.find(x => x.id === "sf3") || colors[0]}
          connection={connections.find(x => x.id === "69tvv") || connections[0]}
        />
      </Box>
    </Box>
  )
}

export default SetHighModel
