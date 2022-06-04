import React from 'react'
import { NextPage } from 'next'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'

import PageTitle from '../../../components/pageTitle/pageTitle'
import PageHeader from '../../../components/pageHeader/pageHeader'
import Hero from '../../../components/hero/hero'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'




type ArticlePageProps = {}

const ArticlePage: NextPage<ArticlePageProps> = () => {


    return (
        <Box>
            <PageHeader title={ "Вертикальные радиаторы Zehnder Charleston" } />
            <PageTitle
                // header={ "Тепловое излучение и конвекция радиаторов Zehnder Charleston" }
                // subheader={ "Доставка со складов в Москве и Санкт-Петербурге" }
                breadcrumbs={ [
                    { title: "Главная", link: "/" },
                    { title: "Полезная информация", link: "/articles" },
                    { title: "Вертикальные радиаторы Zehnder Charleston", link: "/articles/vertical" }
                ] }
            />
            <Hero
                imgPath={ "/images/sliders/high.jpeg" }
                header={ "Вертикальные радиаторы Zehnder Charleston" }
            />
            <Box sx={ { ...global.pagePadding } }>

                <Box>
                    <Typography sx={ { ...styles.standardText } } marginY="20px">
                        Вертикальные радиаторы все чаще находят применение в современных интерьерах. Именно поэтому
                        &#160;
                        <Link href="/catalog/high-models">
                            <a style={ { textDecoration: "none" } }>
                                <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                                    высокие радиаторы Zehnder Charleston
                                </Typography>
                            </a>
                        </Link>
                        &#160;входят в складскую программу и поддерживаются в наличии в трех наиболее популярных цветах: белый, черный и прозрачный лак.
                        <Box marginTop="20px" />
                        Высокие батареи имеют как чисто утилитарные, так и эстетические преимущества.
                        <Box marginTop="20px" />
                        Если рассматривать исключительно практическую сторону вопроса, то подобные отопительные приборы обладают достаточно высокой тепловой мощностью при относительно небольшой ширине. Часто они являются единственным вариантом, когда имеется лишь ограниченное место под них.
                        <Box marginTop="20px" />
                        <Box textAlign={ "center" }>
                                <Image
                                    src="/images/articles/9.jpeg"
                                    alt="Zehnder 2180 в черном цвете"
                                    width={ 500 }
                                    height={ 518 }
                                />
                            </Box>
                            <Box marginTop="20px" />
                        Типовым является расположение вертикальных радиаторов рядом с выходом на балкон, когда происходит демонтаж оконного блока и, соответственно, исчезает место под батарею стандартный размеров. Похожим случаем является замена стандартного радиатора под окном на высокий рядом с окном, если требуется освободить место непосредственно у окна. Например, для кухонной столешницы.
                        <Box marginTop="20px" />
                        В загородных домах высокие батареи используются в прихожих: не съедая итак ограниченное пространство, они дают достаточно тепла, чтобы обеспечить комфортную температуру даже зимой.
                        <Box marginTop="20px" />
                        Сушить одежду на них, кстати, тоже удобнее, если подобное нестандартное применение имеет место быть.
                        <Box marginTop="20px" />
                        Эстетически вертикальные трубчатые радиаторы также выигрывают у более низких “коллег”. Это не те батареи, которые хочется спрятать за шторой или закрыть экраном. Наоборот, их хочется выставить напоказ и сделать важным элементом дизайна вашего дома. Возможность изготовить радиаторы практически в любом цвете по желанию заказчика еще больше расширяет ваши возможности по добавлению в интерьер ярких акцентов.
                    </Typography>



                </Box>
            </Box >
        </Box >
    )



}

export default ArticlePage