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
                   
                </Grid>
            </Box>
        </Box >
    )


}

export default ArticlesListPage