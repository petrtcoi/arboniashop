import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'


const MainPageCarousel = () => {
    const items = [
        {
            name: "Сделано в Германии",
            description: "Настоящие немецкие радиаторы. Полный ассортимент",
            buttonText: "В каталог",
            buttonLink: '/catalog/',
            image: 'slide-4.jpg'
        },
        {
            name: "Цвет RAL 9217",
            description: "В наличии поддерживаются радиаторы в черном матовом цвете",
            buttonText: "Перейти",
            buttonLink: '/catalog/blackcolor',
            image: 'slide-3.jpg'
        },
        {
            name: "Вертикальные радиаторы",
            description: "Радиаторы высотой 110-180 см в наличии",
            buttonText: "Перейти",
            buttonLink: '/catalog/high-models',
            image: 'slide-7.jpeg'
        },
        {
            name: "Цвет 0325 Technoline",
            description: "Радиаторы в стиле лофт в наличии",
            buttonText: "Перейти",
            buttonLink: '/catalog/technoline',
            image: 'tl.jpeg'
        },
        {
            name: "Любые цвета, размеры и подключения",
            description: "Радиаторы под заказ по индивидуальным требованиям",
            buttonText: "Перейти",
            buttonLink: '/catalog/#out_stock_section',
            image: 'slide-0.jpeg'
        }
    ]

    return (
        <Box>
            <Carousel

            >
                {
                    items.map((item, i) => (
                        <Box key={ i } sx={ { backgroundImage: `url('/images/sliders/${item.image}')`, backgroundSize: "cover", paddingTop: "50px" } }>
                            <Box sx={{backgroundColor: "rgba(0, 0, 0, .4)"}}>
                                <Box paddingTop="20px" paddingLeft={ { xs: "30px", sm: "50px" } }>
                                    <Typography variant="h4" component="h2"  sx={ { fontWeight: "600", color: "#ffffff" } }>{ item.name }</Typography>
                                </Box>
                                <Box paddingTop="0px" paddingBottom="20px" paddingLeft={ { xs: "30px", sm: "50px" } }>
                                    <Typography sx={ { color: "#ffffff", fontSize: "18px", lineHeight: "20px", fontWeight: "200" } }>{ item.description }</Typography>
                                </Box>
                            </Box>
                            <Box
                                paddingTop="250px"
                                paddingBottom="50px"
                                paddingRight={ { xs: "30px", sm: "50px" } } textAlign="right"
                            >
                                <Link
                                    href={ item.buttonLink as string }
                                    passHref
                                >
                                    <Button variant="contained">
                                        { item.buttonText }
                                    </Button>
                                </Link>
                            </Box>
                        </Box>)
                    )
                }
            </Carousel>
        </Box>
    )
}


export default MainPageCarousel