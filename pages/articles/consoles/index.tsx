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
            <PageHeader title={ "Основные кронштейны радиаторов Zehnder Charleston" } />
            <PageTitle
                // header={ "Основные кронштейны радиаторов Zehnder Charleston" }
                // subheader={ "Доставка со складов в Москве и Санкт-Петербурге" }
                breadcrumbs={ [
                    { title: "Главная", link: "/" },
                    { title: "Полезная информация", link: "/articles" },
                    { title: "Основные кронштейны радиаторов Zehnder Charleston", link: "/articles/consoles" }
                ] }
            />
            <Hero
                imgPath={ "/images/sliders/high.jpeg" }
                header={ "Основные кронштейны радиаторов Zehnder Charleston" }
            />
            <Box sx={ { ...global.pagePadding } }>

                <Box>
                    <Typography sx={ { ...styles.standardText } } marginY="20px">
                        Одной из отличительных особенностей
                        &#160;
                        <Link href="/catalog">
                            <a style={ { textDecoration: "none" } }>
                                <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                                    радиаторов Zehnder Charleston
                                </Typography>
                            </a>
                        </Link>
                        &#160;
                        является обилие опций, доступных заказчику. В частности это касается и кронштейнов. Производитель предлагает крепежи на все случаи жизни.
                    </Typography>
                    <Typography sx={ { ...styles.standardText } } marginY="20px">
                        Из всего многообразия имеющихся вариантов наиболее популярными являются следующие 3 вида кронштейнов:
                        <ul>
                            <li>CVD + BH</li>
                            <li>EasyFix (SMB)</li>
                            <li>AKK + DS</li>
                        </ul>
                    </Typography>
                    <Typography sx={ { ...styles.standardText } } marginY="20px">
                        Разберем каждый из этих вариантов. В чем их преимущества и в каких ситуациях уместно применение.
                    </Typography>
                </Box>


                <Box marginTop="50px">
                    <Typography component={ "h2" } variant="h5">
                        Скрытые кронштейны CVD + BH
                    </Typography>
                    <Typography sx={ { ...styles.standardText } } marginY="20px">
                        Это базовый вариант крепежей, идущий по умолчанию. Подходит для радиаторов любых размеров. Крепеж состоит из двух частей. Зажим BH, который крепится к радиатору со стороны стены, и настенная консоль CVD, крепящаяся к стене.
                    </Typography>
                    <Typography sx={ { ...styles.standardText } } marginY="20px">
                        Имеется три типоразмера консолей, что позволяет выбирать расстояние радиатора от стены:
                        <ul>
                            <li>CVD0: радиатор будет на расстоянии <strong>23 или 28 мм </strong>от стены</li>
                            <li>CVD1: радиатор крепится на расстоянии <strong>38 или 43 мм</strong> от стены. Это оптимальное расстояние для прохождения теплого воздуха между радиатором и стеной</li>
                            <li>CVD2: расстояние <strong>43, 58 или 63 мм</strong>. Применяются в тех случаях, когда требуется большой вынос от стены
                            </li>
                        </ul>
                    </Typography>
                    <Box textAlign={ "center" }>
                        <Image
                            src="/images/articles/1.jpg"
                            alt="Кронштейны Zehnder CVD + BH"
                            width={ 500 }
                            height={ 417 }
                        />
                    </Box>
                    <Typography sx={ { ...styles.standardText } } marginY="20px">
                        В чем преимущества кронштейнов CVD+BH:
                        <ul>
                            <li>
                                <strong>Подвижность</strong>. Благодаря тому, что зажим BH можно двигать вверх-вниз вдоль радиатора, а также немного вправо-влево относительно консоли CVD, есть возможность немного смещать радиатор без перевешивания закрепленных к стене консолей. Это может оказаться полезно не только в тех случаях, когда рабочим сложно предугадать вывод труб, но также и для деревянных домов, которые еще дают усадку.
                            </li>
                            <li><strong>Универсальность</strong>. Данный тип крепежа подходит для радиаторов всех типоразмеров. Нет необходимости подбирать для каждой модели свой вариант креплений.
                                Скрытость. Так как зажимы BH держат радиаторы только за дальний ряд трубок кронштейны являются малозаметными и не выпирают за плоскость радиатора.
                            </li>
                        </ul>
                    </Typography>
                    <Box textAlign={ "center" }>
                        <Image
                            src="/images/articles/2.jpg"
                            alt="Кронштейны Zehnder CVD + BH"
                            width={ 500 }
                            height={ 417 }
                        />
                    </Box>
                </Box>

                <Box marginTop="50px">
                    <Typography component={ "h2" } variant="h5">
                        Кронштейны быстрого монтажа EasyFix (SMB)
                    </Typography>
                    <Typography sx={ { ...styles.standardText } } marginY="20px">
                        Визуально представляют из себя Г-образные консоли, которые крепятся к стене и на которые радиаторы просто надеваются. При этом низ радиатора упирается в Г-образный выступ, что создает дополнительную поддержку. Из-за простоты установки радиатора крепеж называется также EasyFix.
                    </Typography>
                    <Typography sx={ { ...styles.standardText } } marginY="20px">
                        Расстояние радиатора от стены здесь фиксированное - 35 мм. В зависимости от высоты радиатора подбирается соответствующая модификация SMB соответствующей высоты. Для радиаторов высотой более 1м кронштейн состоит из двух отдельных частей: верхней консоли с зажимом для радиатора и нижней с зажимом и упором под радиатор.
                    </Typography>
                    <Box textAlign={ "center" }>
                        <Image
                            src="/images/articles/4.png"
                            alt="Кронштейны Zehnder SMB"
                            width={ 500 }
                            height={ 412 }
                        />
                    </Box>
                    <Typography sx={ { ...styles.standardText } } marginY="20px">
                        Такая особенность делает крепеж менее универсальным и гибким, по сравнению с CVD + BH. Дополнительное ограничение здесь накладывает специфика использования EasyFix с узкими (до 6 секций) 2-х и 3-трубчатыми радиаторами Zehnder Charleston с нижним подключением. Дело в том, что нижний упор мешает подключению радиатора к трубам, если располагается на 1 или 2 секции (где располагается подключение радиатора). Поэтому потребуется его установка уже на 3 секцию. Для длинных радиаторов есть возможность аналогично сместить кронштейн с другой стороны. Но для узких радиаторов (например для радиатора Zehnder 2180 / 06 секций) симметрично расположить кронштейны уже не получится.
                    </Typography>
                    <Typography sx={ { ...styles.standardText } } marginY="20px">
                        Другим пунктом, который нужно упомянуть, является жесткая фиксация радиатора. Здесь нет возможности двигать радиатор ни в одном из направлений. Поэтому монтаж кронштейнов SMB более требователен.
                    </Typography>
                    <Typography sx={ { ...styles.standardText } } marginY="20px">
                        В чем же преимущества данного крепежа?
                        <ul>
                            <li>
                                Во-первых, благодаря нижнему выступу, радиатор более надежно фиксируется на стене. Это может быть особенно важно для крупных и тяжелых моделей.
                            </li>
                            <li>
                                Во-вторых, зажимы здесь имеют пластиковую вставку и более бережно держат радиатор. Если предполагается, что радиатор будет во время ремонта несколько раз ставиться на кронштейны и сниматься (например, для подготовки труб), то имеет смысл рассмотреть EasyFix, так как монтаж и демонтаж здесь наиболее простые и безопасные для радиатора (нет риска повредить покрытие).
                            </li>
                        </ul>
                    </Typography>
                </Box>


                <Box marginTop="50px">
                    <Typography component={ "h2" } variant="h5">
                        Комбинация кронштейна AKK и упора DS
                    </Typography>
                    <Typography sx={ { ...styles.standardText } } marginY="20px">
                        Наиболее простой и недорогой вариант монтажа радиаторов Zehnder: радиатор подвешивается за верхний коллектор на крючки AKK. Внизу он упирается в стену благодаря упору DS.
                    </Typography>
                    <Typography sx={ { ...styles.standardText } } marginY="20px">
                        AKK и DS позволяют регулировать расстояние радиатора от стены. Что может быть удобно, если Zehnder Charleston подключается к уже выведенным трубам и его требуется расположить ровно напротив выводов. Часто к такому решению прибегают при замене чугунных радиаторов в старом фонде на трубчатые Zehnder.
                    </Typography>
                    <Typography sx={ { ...styles.standardText } } marginY="20px">
                        У недостаткам можно отнести менее жесткую фиксацию радиатора, относительную заметность кронштейнов и доступность упора DS только в двух цветах: белом и сером.
                    </Typography>
                    <Typography sx={ { ...styles.standardText } } marginY="20px">
                        Когда можно применять AKK + DS:
                        <ul>
                            <li>
                                Как уже говорилось выше, кронштейны отлично подходят при замене старых радиаторов на новые без переноса труб.
                            </li>
                            <li>
                                Данный вариант имеет наименьшую стоимость из рассмотренных ранее
                            </li>
                            <li>
                                Он также менее требователен к качеству стены. Регулируемый вынос позволяет повесить радиатор ровно даже если стена немного “завалена”.
                            </li>
                        </ul>
                    </Typography>
                    <Typography sx={ { ...styles.standardText } } marginY="20px">
                        Здесь мы не рассматривали напольные кронштейны, которые имеют также свое разнообразие.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )


}

export default ArticlePage