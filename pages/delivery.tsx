import type { NextPage } from 'next'
import { Box, Typography, Grid, Divider } from '@mui/material'

import PageHeader from '../components/pageHeader/pageHeader'
import PageTitle from '../components/pageTitle/pageTitle'
import Hero from '../components/hero/hero'

import * as styles from '../styles/styles'
import global from '../variables/global'



type PageDeliveryProps = {}

const PageDelivery: NextPage<PageDeliveryProps> = () => {

    return (
        <Box>
            <PageTitle
                header={ "Официальный партнер Zehnder в России" }
                subheader={ "Доставка со складов в Москве и Санкт-Петербурге" }
                breadcrumbs={ [
                    { title: "Главная", link: "/" },
                    { title: "Доставка и оплата", link: "/delivery" }
                ] }
            />
            <PageHeader title={ "Доставка и оплата радиаторов Zehnder" } />
            <Hero
                imgPath={ "/images/sliders/slide-main.jpeg" }
                header={ "Доставка и оплата" }
                subheader={ "Работаем с физическими и юридическими лицами. Склады в Москве и Санкт-Петербурге" }
            />
            <Box sx={ { ...global.pagePadding } }>
                <Box marginTop="30px">
                    <Grid container spacing={ 2 }>
                        <Grid item xs={ 12 } md={ 6 } lg={ 5 }>
                            <Typography variant="h4" component="h2" gutterBottom >
                                Доставка
                            </Typography>
                            <Typography sx={ { ...styles.standardText } } >
                                Мы осуществляем доставку в любой город России. В Москве и Санкт-Петербурге возможна доставка до двери. В остальные города доставка осуществляется через транспортные компании (Деловые Линии, Возовоз, Байкал-Сервис, ПЭК и т.д.).
                            </Typography>
                            <Typography variant="h6" component="h3" gutterBottom marginTop="20px">
                                Москва и Санкт-Петербург
                            </Typography>
                            <Typography sx={ { ...styles.standardText } } component={ "span" } >
                                <ul>
                                    <li>При наличии товара на складе, доставка осуществляется в течение 2 рабочих дней, по согласованию.</li>
                                    <li>В случае, если требуется перемещение товара между складами (из Москвы в Санкт-Петербург и наоборот), то срок доставки может быть увеличен н 1-1.5 недели, в зависимости от расписания транспорта.</li>
                                </ul>
                            </Typography>
                            <Typography variant="h6" component="h3" gutterBottom marginTop="20px">
                                Доставка по России
                            </Typography>
                            <Typography sx={ { ...styles.standardText } } component={ "span" }>
                                <ul>
                                    <li>Мы отправляем товар в любой город России через транспортные компании. Как правило, это - Деловые Линии, но возможна отправка любой другой компанией по желанию заказчика.</li>
                                    <li>Доставка до терминала компании в городе отправления осуществляется за наш счет.</li>
                                    <li>Груз в обязательном порядке отправляется с жесткой упаковкой, а также страховкой (если данная услуга предусмотрена транспортной компанией.</li>
                                </ul>
                            </Typography>
                        </Grid>
                        <Grid item xs={ 12 } md={ 1 } lg={ 1 }>
                            <Divider orientation="vertical" />
                        </Grid>
                        <Grid item xs={ 12 } md={ 5 } lg={ 4 } >
                            <Box >
                                <Typography variant="h4" component="h2" gutterBottom >
                                    Оплата
                                </Typography>
                                <Typography sx={ { ...styles.standardText } } >
                                    Вы можете оплатить товар любым удобным для вас способом. Мы работаем как с физическими, так и с юридическими лицами.
                                </Typography>
                                <Typography variant="h6" component="h3" gutterBottom marginTop="20px">
                                    Оплата наличными
                                </Typography>
                                <Typography sx={ { ...styles.standardText } } >
                                    При доставке по Санкт-Петербургу возможна оплата при получении (по договоренности, при наличии товара на складе в СПб)
                                </Typography>
                                <Typography variant="h6" component="h3" gutterBottom marginTop="20px">
                                    Безналичный перевод
                                </Typography>
                                <Typography sx={ { ...styles.standardText } } >
                                    Доступно как для юридических, так и для физических лиц
                                </Typography>
                                <Typography variant="h6" component="h3" gutterBottom marginTop="20px">
                                    Банковские карты
                                </Typography>
                                <Typography sx={ { ...styles.standardText } } >
                                    Оплата банковской картой онлайн
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box marginY="30px">
                    <Divider />
                </Box>
                <Box>
                    <Typography variant="h6" component="h2" >
                        Важно
                    </Typography>
                    <Box>
                        <Typography sx={ { ...styles.standardText } }>
                            При приеме товара (во время доставки курьером или при получении товара от транспортной компании): внимательно осмотрите товар, убедитесь в отсутствии видимых механических повреждений. Помните, что претензии по внешнему виду доставленного Вам товара, в соответствии со ст. 458 и 459 ГК РФ, Вы можете предъявить только до передачи Вам товара продавцом. Риск случайной утраты или повреждения изделия переходит к Покупателю с момента передачи товара Покупателю Продавцом.
                        </Typography>
                        <Typography sx={ { ...styles.standardText } } marginTop="20px">
                            Если товарный вид приобретаемой техники не соответствует надлежащему, Вы вправе не принимать товар. При возникновении проблемы такого характера настоятельно рекомендуем связаться с нашим оператором в момент обнаружения дефекта.
                        </Typography>
                    </Box>

                </Box>
            </Box>
        </Box>
    )

}


export default PageDelivery