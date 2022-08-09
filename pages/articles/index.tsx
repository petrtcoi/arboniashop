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
            <PageHeader title={ "Полезная информация Arbonia" } />
            <PageTitle
                header={ "Специализированный магазин Arbonia в России" }
                subheader={ "Доставка со складов в Москве и Санкт-Петербурге" }
                breadcrumbs={ [
                    { title: "Главная", link: "/" },
                    { title: "Полезная информация", link: "/articles" }
                ] }
            />
            <Hero
                imgPath={ "/images/sliders/slide.jpeg" }
                header={ "Полезная информация Arbonia" }
            />
            <Box sx={ { ...global.pagePadding } } marginTop="50px">
                <Grid container spacing={ 5 }>

                    <Grid item md={ 6 }>
                        <Box>
                            <Link href="/articles/2-3-columns">
                                <a style={ { textDecoration: 'none' } }>
                                    <Box textAlign={ "center" }>
                                        <Image
                                            src="/images/articles/90-1.jpeg"
                                            alt="3-трубчатый радиатор Arbonia"
                                            width={ 300 }
                                            height={ 300 }
                                        />
                                    </Box>
                                    <Box textAlign={ "center" } marginTop="10px">

                                        <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                                            Отличия 2-трубчатых радиаторов Arbonia от 3-трубчатых
                                        </Typography>
                                    </Box>
                                    <Box textAlign={ "justify" } marginTop="10px">
                                        <Typography sx={ { ...styles.smallText } } component="span">
                                            Мы стараемся поддерживать в наличии наиболее популярные модели радиаторов Arbonia. Это наиболее универсальные модели, которые подходят для большинства случаев...
                                        </Typography>
                                    </Box>
                                </a>
                            </Link>
                        </Box>
                    </Grid>


                    <Grid item md={ 6 }>
                        <Box>
                            <Link href="/articles/arbonia-radiators">
                                <a style={ { textDecoration: 'none' } }>
                                    <Box textAlign={ "center" }>
                                        <Image
                                            src="/images/articles/1.jpg"
                                            alt="Трубчатый радиатор Arbonia"
                                            width={ 300 }
                                            height={ 300 }
                                        />
                                    </Box>
                                    <Box textAlign={ "center" } marginTop="10px">

                                        <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                                            Преимущества и недостатки трубчатых радиаторов Arbonia
                                        </Typography>
                                    </Box>
                                    <Box textAlign={ "justify" } marginTop="10px">
                                        <Typography sx={ { ...styles.smallText } } component="span">
                                            Arbonia является один из лидеров в производстве стальных трубчатых радиаторов. Бренд имеет давнюю историю и хорошо зарекомендовал себя на российском рынке...
                                        </Typography>
                                    </Box>
                                </a>
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item md={ 6 }>
                        <Box>
                            <Link href="/articles/consoles">
                                <a style={ { textDecoration: 'none' } }>
                                    <Box textAlign={ "center" }>
                                        <Image
                                            src="/images/articles/20.jpg"
                                            alt="Нижний упор Arbonia ZB0280"
                                            width={ 300 }
                                            height={ 300 }
                                        />
                                    </Box>
                                    <Box textAlign={ "center" } marginTop="10px">

                                        <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                                            Регулируемые кронштейны W161 или фиксирующий зажим ZB0281
                                        </Typography>
                                    </Box>
                                    <Box textAlign={ "justify" } marginTop="10px">
                                        <Typography sx={ { ...styles.smallText } } component="span">
                                            Радиаторы Arbonia  чаще всего комплектуются одним из двух вариантов кронштейнов: W161 + ZB0280 и ZB0280/ZB0281/ZB0282
                                        </Typography>
                                    </Box>
                                </a>
                            </Link>
                        </Box>
                    </Grid>


                    <Grid item md={ 6 }>
                        <Box>
                            <Link href="/articles/2180-3180">
                                <a style={ { textDecoration: 'none' } }>
                                    <Box textAlign={ "center" }>
                                        <Image
                                            src="/images/articles/30.jpeg"
                                            alt="Вертикальный радиатор Arbonia"
                                            width={ 300 }
                                            height={ 300 }
                                        />
                                    </Box>
                                    <Box textAlign={ "center" } marginTop="10px">

                                        <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                                            Вертикальные радиаторы Arbonia
                                        </Typography>
                                    </Box>
                                    <Box textAlign={ "justify" } marginTop="10px">
                                        <Typography sx={ { ...styles.smallText } } component="span">
                                            Вертикальные трубчатые радиаторы Arbonia  - один из наиболее популярных вариантов отопления помещений. Именно поэтому, в складскую программу входят сразу 2 модели высотой 1.8 м.                                        </Typography>
                                    </Box>
                                </a>
                            </Link>
                        </Box>
                    </Grid>


                    <Grid item md={ 6 }>
                        <Box>
                            <Link href="/articles/calculate">
                                <a style={ { textDecoration: 'none' } }>
                                    <Box textAlign={ "center" }>
                                        <Image
                                            src="/images/models/2-columns-3.jpeg"
                                            alt="Как подбирать радиаторы Zehnder Charleston по мощности"
                                            width={ 300 }
                                            height={ 300 }
                                        />
                                    </Box>
                                    <Box textAlign={ "center" } marginTop="10px">

                                        <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                                        Как подбирать радиаторы Arbonia по мощности
                                        </Typography>
                                    </Box>
                                    <Box textAlign={ "justify" } marginTop="10px">
                                        <Typography sx={ { ...styles.smallText } } component="span">
                                            Трубчатые радиаторы Arbonia  предоставляют широкие возможности по подбору конкретных моделей под каждый случай: практически любая высота и длина доступны для изготовления.
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