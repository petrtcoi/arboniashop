import React from 'react'
import { NextPage } from 'next'
import { Box, Typography, Grid } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'


import PageTitle from '../../components/pageTitle/pageTitle'
import PageHeader from '../../components/pageHeader/pageHeader'
import Hero from '../../components/hero/hero'

import * as styles from '../../styles/styles'
import global from '../../variables/global'

type ArticlesListPageProps = {}

const ArticlesListPage: NextPage<ArticlesListPageProps> = () => {


    return (
        <Box>
            <PageHeader title={ "Полезная информация Zehnder" } />
            <PageTitle
                header={ "Официальный партнер Zehnder в России" }
                subheader={ "Доставка со складов в Москве и Санкт-Петербурге" }
                breadcrumbs={ [
                    { title: "Главная", link: "/" },
                    { title: "Полезная информация", link: "/articles" }
                ] }
            />
            <Hero
                imgPath={ "/images/sliders/catalog.jpeg" }
                header={ "Полезная информация Zehnder" }
            />
            <Box sx={ { ...global.pagePadding } } marginTop="50px">
                <Grid container spacing={ 5 }>
                    <Grid item md={ 6 }>
                        <Box>
                            <Link href="/articles/consoles">
                                <a style={ { textDecoration: 'none' } }>
                                    <Box textAlign={ "center" }>
                                        <Image
                                            src="/images/articles/01.jpg"
                                            alt="Zehnder CVD + BH"
                                            width={ 300 }
                                            height={ 300 }
                                        />
                                    </Box>
                                    <Box textAlign={ "center" } marginTop="10px">

                                        <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                                            Кронштейны для Zehnder Charleston
                                        </Typography>
                                    </Box>
                                    <Box textAlign={ "justify" } marginTop="10px">
                                        <Typography sx={ { ...styles.smallText } } component="span">
                                            Одной из отличительных особенностей  радиаторов Zehnder Charleston  является обилие опций, доступных заказчику. В частности это касается и кронштейнов. Производитель предлагает крепежи на все случаи жизни...
                                        </Typography>
                                    </Box>
                                </a>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item md={ 6 }>
                        <Box>
                            <Link href="/articles/heating">
                                <a style={ { textDecoration: 'none' } }>
                                    <Box textAlign={ "center" }>
                                        <Image
                                            src="/images/articles/02.jpg"
                                            alt="Тепловое излучение. Zehnder в черном цвете"
                                            width={ 300 }
                                            height={ 300 }
                                        />
                                    </Box>
                                    <Box textAlign={ "center" } marginTop="10px">

                                        <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                                            Тепловое излучение и конвекция радиаторов
                                        </Typography>
                                    </Box>
                                    <Box textAlign={ "justify" } marginTop="10px">
                                        <Typography sx={ { ...styles.smallText } } component="span">
                                            Вокруг таких понятий как тепловое излучения, ИК-излучение, тепловые волны и т.д. сложилось немало мифов. С одной стороны, они довольно безобидные...
                                        </Typography>
                                    </Box>
                                </a>
                            </Link>
                        </Box>
                    </Grid>


                    <Grid item md={ 6 }>
                        <Box>
                            <Link href="/articles/technoline">
                                <a style={ { textDecoration: 'none' } }>
                                    <Box textAlign={ "center" }>
                                        <Image
                                            src="/images/articles/7.jpg"
                                            alt="Радиатор Zehnder в цвете Technoline"
                                            width={ 300 }
                                            height={ 300 }
                                        />
                                    </Box>
                                    <Box textAlign={ "center" } marginTop="10px">

                                        <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                                            Особенности цвета TechnoLine (0325 TL)
                                        </Typography>
                                    </Box>
                                    <Box textAlign={ "justify" } marginTop="10px">
                                        <Typography sx={ { ...styles.smallText } } component="span">
                                            Цвет “прозрачный лак” является одним из самых популярных для радиаторов Zehnder Charleston. Благодаря прозрачному покрытию радиатор предстает в своем натуральном стальном виде...
                                        </Typography>
                                    </Box>
                                </a>
                            </Link>
                        </Box>
                    </Grid>


                    <Grid item md={ 6 }>
                        <Box>
                            <Link href="/articles/vertical">
                                <a style={ { textDecoration: 'none' } }>
                                    <Box textAlign={ "center" }>
                                        <Image
                                            src="/images/articles/04.jpg"
                                            alt="Радиатор Zehnder в цвете Technoline"
                                            width={ 300 }
                                            height={ 300 }
                                        />
                                    </Box>
                                    <Box textAlign={ "center" } marginTop="10px">

                                        <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                                        Вертикальные радиаторы Zehnder Charleston
                                        </Typography>
                                    </Box>
                                    <Box textAlign={ "justify" } marginTop="10px">
                                        <Typography sx={ { ...styles.smallText } } component="span">
                                        Вертикальные радиаторы все чаще находят применение в современных интерьерах. Именно поэтому  высокие радиаторы Zehnder Charleston входят в складскую программу...
                                        </Typography>
                                    </Box>
                                </a>
                            </Link>
                        </Box>
                    </Grid>



                    <Grid item md={ 6 }>
                        <Box>
                            <Link href="/articles/power">
                                <a style={ { textDecoration: 'none' } }>
                                    <Box textAlign={ "center" }>
                                        <Image
                                            src="/images/sliders/slide-01.jpeg"
                                            alt="Радиатор Zehnder в цвете Technoline"
                                            width={ 300 }
                                            height={ 300 }
                                        />
                                    </Box>
                                    <Box textAlign={ "center" } marginTop="10px">

                                        <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                                        Как подбирать радиаторы Zehnder Charleston по мощности
                                        </Typography>
                                    </Box>
                                    <Box textAlign={ "justify" } marginTop="10px">
                                        <Typography sx={ { ...styles.smallText } } component="span">
                                        Трубчатые радиаторы Zehnder Charleston  предоставляют широкие возможности по подбору конкретных моделей под каждый случай: практически любая высота и длина доступны для изготовления...
                                        </Typography>
                                    </Box>
                                </a>
                            </Link>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Box >
    )


}

export default ArticlesListPage