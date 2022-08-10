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
        <Box >
            <PageHeader title={ "Радиаторы Arbonia с боковым и нижним подключением" } />
            <PageTitle
                breadcrumbs={ [
                    { title: "Главная", link: "/" },
                    { title: "Полезная информация", link: "/articles" },
                    { title: "Радиаторы Arbonia с боковым и нижним подключением", link: "/articles/connections" }
                ] }
            />
            <Hero
                imgPath={ "/images/sliders/slide.jpeg" }
                header={ "Радиаторы Arbonia с боковым и нижним подключением" }
            />
            <Box sx={ { ...global.pagePadding, maxWidth: "900px", margin: "auto" } }>

                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Два наиболее используемых варианта подключения для радиаторов Arbonia: боковое ¾” и нижнее со встроенным термовентилем. Именно они входят в нашу складскую программу.
                </Typography>
                <Typography marginTop="40px" variant="h5" component={ "h2" }>
                    Что такое боковое подключение
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Боковое подключение является базовым вариантом подключения радиатора. В коллекторах вместо заглушек с одной из сторон поставлены переходники для подключения с диаметром внутренней резьбы ¾ дюйма. Это стандартная резьба, поэтому радиатор легко подключить к уже существующей системе отопления, используя обычную запорную арматуру.
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Так как боковое подключение является базовым, то оно идет без наценки - это самый недорогой вариант для трубчатых радиаторов. Более того, оно же является и наиболее универсальным, так как его можно использовать как в системах отопления с вертикальной разводкой через стояки, так и с разводкой труб по полу.
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Почему диаметр ¾, а не ½. Это связано, опять же, с универсальностью. Дело в том, что подключение ½ не подходит для установки в домах, где отопление реализовано через единичные стояки: здесь требуется установка перемычки (байпаса), которая служит запасным ходом для теплоносителя, в тех случаях, когда вы перекрываете свой радиатор (таким образом вы не останавливаете проток теплоносителя по всем этажам). Диаметр перемычки делается ½ дюйма и если поставить радиатор с таким же диаметром, то сопротивление для воды у него будет выше и в нем будет хуже циркуляция, так как она пойдет в основном через перемычку.
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Самой популярной моделью с боковым подключением является
                    &#160;
                    <Link href="/models/3057-9016-12">
                        <a style={ { textDecoration: "none" } }>
                            <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                                Arbonia 3057
                            </Typography>
                        </a>
                    </Link>
                    - 3-трубчатый радиатор  с межосевым расстоянием 500 мм. Его популярность обусловлена высокой теплоотдачей и возможностью использовать его при замене старых чугунных илил алюминиевых радиаторов без переноса труб.
                </Typography>
                <Box textAlign={ "center" }>
                    <Image
                        src="/images/articles/100.jpg"
                        alt="Радиатор Arbonia с боковым подключением"
                        width={ 400 }
                        height={ 400 }
                    />
                </Box>
                <Typography marginTop="40px" variant="h5" component={ "h2" }>
                    Что такое нижнее подключение
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Радиаторы Arbonia с нижним подключением устанавливаются в современных домах, где используется поквартирная разводка труб по полу. Так как радиаторы не привязаны к стоякам, то здесь у заказчика имеется больше возможностей по выбору места размещения батарей. Встроенный термовентиль позволяет автоматически регулировать работу радиатора посредством термостата.
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Arbonia с подключением №69 ТВВ могут подключаться как справа, так и слева внизу (радиатор симметричный). Межосевое расстояние стандартное - 50 мм (под “бинокль”). Важной особенностью здесь является направление протока воды: теплоноситель должен поступать по крайней трубке. Для сравнения, в панельные радиаторы, которые чаще всего и меняют в новостройках на трубчатые Arbonia, теплоноситель подается по трубке, расположенной ближе к центру радиатора.
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Так как нижнее подключение используется в современных домах, то здесь и больше разнообразие используемых типоразмеров радиаторов Arbonia. Чаще всего для низких подоконников подходят
                    &#160;
                    <Link href="/models/3030-9016-69tvv">
                        <a style={ { textDecoration: "none" } }>
                            <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                                Arbonia 3030 №69 ТВВ
                            </Typography>
                        </a>
                    </Link>
                    . Для подоконников высотой 80-90 см чаще всего берут ту же модель
                    &#160;
                    <Link href="/models/3057-9016-69tvv">
                        <a style={ { textDecoration: "none" } }>
                            <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                                Arbonia 3057 №69 ТВВ
                            </Typography>
                        </a>
                    </Link>
                    . Если же используется вертикальный радиатор, то здесь два равноценных варианта:
                    &#160;
                    <Link href="/models/2180-9016-69tvv">
                        <a style={ { textDecoration: "none" } }>
                            <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                                Arbonia 2180
                            </Typography>
                        </a>
                    </Link>
                    &#160;
                    и
                    &#160;
                    <Link href="/models/3180-9016-69tvv">
                        <a style={ { textDecoration: "none" } }>
                            <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                                Arbonia 3180
                            </Typography>
                        </a>
                    </Link>
                    .
                </Typography>
                <Box textAlign={ "center" }>
                    <Image
                        src="/images/articles/101.jpg"
                        alt="Радиатор Arbonia с нижним подключением"
                        width={ 533 }
                        height={ 400 }
                    />
                </Box>



            </Box>
        </Box>
    )
}

export default ArticlePage