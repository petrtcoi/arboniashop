import { NextPage } from 'next'
import Link from 'next/link'

import { Box, Typography, Grid, Divider, Button } from '@mui/material'

import RadiatorAllOptions from '../../components/pageModels/radiatorAllOptions'
import RadiatorInCartList from '../../components/pageModels/radiatorInCartList'
import BlockHowReadModel from '../../components/blockHowReadModel/blockHowReadModel'
import PageHeader from '../../components/pageHeader/pageHeader'
import Hero from '../../components/hero/hero'

import getModelsData from '../../api_utils/getModelsData'
import getColorsData from '../../api_utils/getColorsData'
import getConnectionsData from '../../api_utils/getConnectionsData'

import { ModelOrigin } from '../../models/modelOrigin.model'
import { ColorOrigin } from '../../models/colorOrigin.model'
import { ConnectionOrigin } from '../../models/connectionOrigin.model'

import * as styles from '../../styles/styles'
import global from '../../variables/global'
import PageTitle from '../../components/pageTitle/pageTitle'



type CatalogProps = {
    models: ModelOrigin[]
    colors: ColorOrigin[]
    connections: ConnectionOrigin[]
}
const MODELS_GROUPS = [
    { firstChar: '2', title: '2-трубчатые (62 мм)' },
    { firstChar: '3', title: '3-трубчатые (100 мм)' },
    { firstChar: '4', title: '4-трубчатые (136 мм)' },
    { firstChar: '5', title: '5-трубчатые (173 мм)' },
    { firstChar: '6', title: '6-трубчатые (210 мм)' }
]


const Catalog: NextPage<CatalogProps> = ({ models, colors, connections }) => {

    const outStockModels = models.filter(x => !x.inStock)

    return (
        <Box>
            <PageHeader title={ "Каталог радиаторов Zehnder" } />
            <PageTitle
                header={ "Официальный партнер Zehnder в России" }
                subheader={ "Доставка со складов в Москве и Санкт-Петербурге" }
                breadcrumbs={ [
                    { title: "Главная", link: "/" },
                    { title: "Каталог радиаторов Zehnder", link: "/catalog" }
                ] }
            />
            <Hero
                imgPath={ "/images/sliders/catalog.jpeg" }
                header={ "Каталог радиаторов Zehnder" }
                subheader={ "Полный ассортимент производителя.Складские и заказные модели" }
            />
            <Box sx={ { ...global.pagePadding } }>
                <Box marginTop="20px">
                    <Typography textAlign="center" sx={ { ...styles.standardText } }>
                        В данном разделе представлен полный ассортимент радиаторов Zehnder Charleston.<br />
                        Пожалуйста, свяжитесь с нами любым удобным вам способом<br />
                        и мы с радостью поможем подобрать наиболее подходящие модели.
                    </Typography>
                </Box>

                <Box textAlign="center">
                    <BlockHowReadModel />
                </Box>

                {/* Складские модели */ }
                <Box marginTop="70px" >
                    <Typography variant="h5" component="h2" id="in_stock_section" textAlign="center" sx={ { textTransform: 'uppercase' } }>
                        Складские модели Zehnder
                    </Typography>


                    {/* Стандартная высота */ }
                    <Box marginTop="40px">

                        <Grid container spacing={ 2 } >
                            <Grid item xs={ 12 }>
                                <Divider variant="fullWidth" textAlign="left">
                                    <Typography component="h3" sx={ { ...styles.standardTextThin, color: "red" } }>
                                        Стандартная высота (50-60 см)
                                    </Typography>
                                </Divider>
                            </Grid>
                            <Grid item xs={ 12 } md={ 6 }>
                                <Typography sx={ { ...styles.standardText } }>
                                    Боковое подключение
                                </Typography>
                                <Box paddingLeft="10px" >
                                    <Box id="2056-9016-1270-34">
                                        <Link href="/models/2056-9016-1270-34">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } } >
                                                    Zehnder 2056
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="3057-9016-1270-34">
                                        <Link href="/models/3057-9016-1270-34" >
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 3057
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="3057-9217-1270-34">
                                        <Link href="/models/3057-9217-1270-34" >
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 3057 RAL 9217 (черный)
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="3057-0325-1270-34">
                                        <Link href="/models/3057-0325-1270-34">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 3057 0325 TL (прозрачный лак)
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>

                                </Box>

                            </Grid>
                            <Grid item xs={ 12 } md={ 6 }>
                                <Typography sx={ { ...styles.standardText } }>
                                    Нижнее подключение
                                </Typography>
                                <Box paddingLeft="10px">
                                    <Box id="2050-9016-v001">
                                        <Link href="/models/2050-9016-v001">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 2050
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="2056-9016-v001">
                                        <Link href="/models/2056-9016-v001">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 2056
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="3050-9016-v001">
                                        <Link href="/models/3050-9016-v001">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 3050
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="3057-9016-1270-34">
                                        <Link href="/models/3057-9016-v001">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 3057
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="3057-9217-1270-34">
                                        <Link href="/models/3057-9217-v001">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 3057 RAL 9217 (черный)
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="3057-0325-1270-34">
                                        <Link href="/models/3057-0325-v001">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 3057 0325 TL (прозрачный лак)
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>

                                </Box>
                            </Grid>
                        </Grid>

                    </Box>

                    {/* Высокие */ }
                    <Box marginTop="40px">
                        <Divider variant="fullWidth" textAlign="left">
                            <Typography component="h3" sx={ { ...styles.standardTextThin, color: 'red' } }>
                                Высокие радиаторы (от 100 см)
                            </Typography>
                        </Divider>
                        {/* <Typography component="h3" sx={ { ...styles.standardTextThin } }>
                    Такие радиаторы уже нельзя поставить под окна. Но они отлично подходят для установки на узкие ниши. Занимая мало места, высокие радиаторы обеспечивают высокую тепловую мощность.
                </Typography> */}
                        <Grid container spacing={ 2 } marginTop={ "5px" }>
                            <Grid item xs={ 12 } md={ 6 }>
                                <Typography sx={ { ...styles.standardText } }>
                                    Боковое подключение
                                </Typography>
                                <Box paddingLeft="10px">
                                    <Box id="2110-9016-1270-34" paddingTop="50px" marginTop="-50px">
                                        <Link href="/models/2110-9016-1270-34">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 2110
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="2180-9016-1270-34" paddingTop="50px" marginTop="-50px">
                                        <Link href="/models/2180-9016-1270-34">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 2180
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="3180-9016-1270-34" paddingTop="50px" marginTop="-50px">
                                        <Link href="/models/3180-9016-1270-34">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 3180
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="2180-9217-1270-34" paddingTop="50px" marginTop="-50px">
                                        <Link href="/models/2180-9217-1270-34">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 2180 RAL 9217 (черный)
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="3180-9217-1270-34" paddingTop="50px" marginTop="-50px">
                                        <Link href="/models/3180-9217-1270-34">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 3180 RAL 9217 (черный)
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="2180-0325-1270-34" paddingTop="50px" marginTop="-50px">
                                        <Link href="/models/2180-0325-1270-34">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 2180 0325 TL (прозрачный лак)
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="3180-0235-1270-34" paddingTop="50px" marginTop="-50px">
                                        <Link href="/models/3180-0235-1270-34">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 3180 0325 TL (прозрачный лак)
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                </Box>

                            </Grid>
                            <Grid item xs={ 12 } md={ 6 }>
                                <Typography sx={ { ...styles.standardText } }>
                                    Нижнее подключение
                                </Typography>
                                <Box paddingLeft="10px">
                                    <Box id="2110-9016-v001" paddingTop="50px" marginTop="-50px">
                                        <Link href="/models/2110-9016-v001">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 2110
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="2180-9016-v001" paddingTop="50px" marginTop="-50px">
                                        <Link href="/models/2180-9016-v001">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 2180
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="3180-9016-v001" paddingTop="50px" marginTop="-50px">
                                        <Link href="/models/3180-9016-v001">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 3180
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="2180-9217-v001">
                                        <Link href="/models/2180-9217-v001">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 2180 RAL 9217 (черный)
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="3180-9217-v001" paddingTop="50px" marginTop="-50px">
                                        <Link href="/models/3180-9217-v001">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 3180 RAL 9217 (черный)
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="2180-0325-v001" paddingTop="50px" marginTop="-50px">
                                        <Link href="/models/2180-0325-v001">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 2180 0325 TL (прозрачный лак)
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="3180-0235-v001" paddingTop="50px" marginTop="-50px">
                                        <Link href="/models/3180-0235-v001">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 3180 0325 TL (прозрачный лак)
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>

                                </Box>
                            </Grid>
                        </Grid>
                    </Box>


                    {/* Низкие радиаторы */ }
                    <Box marginTop="40px">
                        <Divider variant="fullWidth" textAlign="left">
                            <Typography component="h3" sx={ { ...styles.standardTextThin, color: "red" } }>
                                Невысокие радиаторы (до 40 см)
                            </Typography>
                        </Divider>
                        {/* <Typography component="h3" sx={ { ...styles.standardTextThin } }>
                    Радиаторы для установки под окна с низкими подоконниками (50-60 см), а также для монтажа на ножки перед панорамными окнами
                </Typography> */}
                        <Grid container spacing={ 2 } marginTop={ "5px" }>
                            <Grid item xs={ 12 } md={ 6 }>
                                <Typography sx={ { ...styles.standardText } }>
                                    Боковое подключение
                                </Typography>
                                <Box paddingLeft="10px">
                                    <Box id="3037-9016-1270-34" paddingTop="50px" marginTop="-50px">
                                        <Link href="/models/3037-9016-1270-34">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 3037
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>

                                </Box>

                            </Grid>
                            <Grid item xs={ 12 } md={ 6 }>
                                <Typography sx={ { ...styles.standardText } }>
                                    Нижнее подключение
                                </Typography>
                                <Box paddingLeft="10px">
                                    <Box id="2030-9016-v001" paddingTop="50px" marginTop="-50px">
                                        <Link href="/models/2030-9016-v001">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 2030
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="3030-9016-v001" paddingTop="50px" marginTop="-50px">
                                        <Link href="/models/3030-9016-v001">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 3030
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="3030-9217-v001" paddingTop="50px" marginTop="-50px">
                                        <Link href="/models/3030-9217-v001">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 3030 RAL 9217 (черный)
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>
                                    <Box id="3037-9016-v001" paddingTop="50px" marginTop="-50px">
                                        <Link href="/models/3037-9016-v001">
                                            <a style={ { textDecoration: "none" } }>
                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                    Zehnder 3037
                                                </Typography>
                                            </a>
                                        </Link>
                                    </Box>

                                </Box>
                            </Grid>
                        </Grid>
                    </Box>


                    {/* Популярные подборки */ }
                    <Box marginTop="40px">
                        <Grid container spacing={ 2 } >
                            <Grid item xs={ 12 }>
                                <Divider variant="fullWidth" textAlign="left">
                                    <Typography component="h3" sx={ { ...styles.standardTextThin, color: "red" } }>
                                        Популярные подборки
                                    </Typography>
                                </Divider>
                            </Grid>
                            <Grid item xs={ 12 } md={ 6 }>
                                <Typography sx={ { ...styles.standardText } }>
                                    По цвету
                                </Typography>
                                <Box paddingLeft="10px">

                                    <Link href="/catalog/blackcolor">
                                        <a style={ { textDecoration: "none" } }>
                                            <Typography sx={ { ...styles.standartTextThinLink } }>
                                                Радиаторы черного цвета в наличии
                                            </Typography>
                                        </a>
                                    </Link>
                                    <Link href="/catalog/technoline">
                                        <a style={ { textDecoration: "none" } }>
                                            <Typography sx={ { ...styles.standartTextThinLink } }>
                                                Zehnder в цвете TL в наличии
                                            </Typography>
                                        </a>
                                    </Link>

                                </Box>
                            </Grid>
                            <Grid item xs={ 12 } md={ 6 }>
                                <Typography sx={ { ...styles.standardText } }>
                                    По габаритам
                                </Typography>
                                <Box paddingLeft="10px">

                                    <Link href="/catalog/high-models">
                                        <a style={ { textDecoration: "none" } }>
                                            <Typography sx={ { ...styles.standartTextThinLink } }>
                                                Высокие радиаторы в наличии
                                            </Typography>
                                        </a>
                                    </Link>



                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>

                {/* Радиаторы под заказ */ }
                <Box marginTop="100px" >
                    <Typography variant="h5" component="h2" id="out_stock_section" textAlign="center" sx={ { textTransform: 'uppercase' } }>
                        Радиаторы Zehnder под заказ
                    </Typography>
                    <Box marginTop={ { xs: "20px", md: "40px" } } />
                    <Grid container spacing={ 2 } >
                        { MODELS_GROUPS.map((group) => {
                            return (
                                <Grid item xs={ 12 } sm={ 6 } md={ 4 } key={ group.title }>
                                    <Box textAlign="center" marginTop="20px">
                                        <img src={ `/images/schemas/${group.firstChar}.png` } height="130px" width="auto" />
                                        <Typography sx={ { ...styles.standardText } }>
                                            { group.title }
                                        </Typography>
                                    </Box>
                                    <Box paddingLeft="10px" textAlign="center">
                                        { outStockModels
                                            .filter((model: ModelOrigin) => (model.id[0] === group.firstChar))
                                            .sort((a, b) => +a.id > +b.id ? 1 : -1)
                                            .map((model: ModelOrigin) => {
                                                return (
                                                    <Box key={ model.id } id={ model.id } paddingTop="50px" marginTop="-50px">
                                                        <Link href={ `/models/${model.id}` } >
                                                            <a style={ { textDecoration: "none" } }>
                                                                <Typography sx={ { ...styles.standartTextThinLink } }>
                                                                    Zehnder { model.nameShort }
                                                                </Typography>
                                                            </a>
                                                        </Link>
                                                    </Box>

                                                )
                                            })
                                        }
                                    </Box>
                                </Grid>
                            )
                        }) }
                    </Grid>
                </Box>


                <Box marginTop="100px" >
                    <Typography variant="h5" component="h2" id="all_models_section" textAlign="center" sx={ { textTransform: 'uppercase' } }>
                        Произвольная модель Zehnder
                    </Typography>
                    <Box marginTop="20px" />
                    <Typography sx={ styles.standardText } textAlign="center">
                        Выберете произвольную модель Zehnder Charleton для оформления заказа.<br />Также,если у вас есть готовая спецификация, вы можете прислать нам ее на почту<br />для подготовки коммерческого предложения.
                    </Typography>
                    <Box marginTop="20px" />
                    <RadiatorAllOptions
                        modelInit={ models.filter(x => !x.inStock)[0] }
                        colorInit={ colors[0] }
                        connectionInit={ connections[0] }
                        modelFreeze={ false }
                        models={ models }
                        colors={ colors }
                        connections={ connections }
                    />
                    <RadiatorInCartList
                        models={ models }
                        colors={ colors }
                        connections={ connections }
                    />
                </Box>

            </Box>
        </Box>
    )
}

export default Catalog





export async function getStaticProps() {
    const models: ModelOrigin[] = await getModelsData()
    const colors: ColorOrigin[] = await getColorsData()
    const connections: ConnectionOrigin[] = await getConnectionsData()
    return {
        props: {
            models,
            colors,
            connections
        }
    }
}