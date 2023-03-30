import React from 'react';
import { NextPage } from 'next';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

import PageTitle from '../../../components/pageTitle/pageTitle';
import PageHeader from '../../../components/pageHeader/pageHeader';
import Hero from '../../../components/hero/hero';

import * as styles from '../../../styles/styles';
import global from '../../../variables/global';




type ArticlePageProps = {};

const ArticlePage: NextPage<ArticlePageProps> = () => {


    return (
        <Box >
            <PageHeader
                title={ "Радиаторы Arbonia 2-трубчатые и 3-трубчатые: в чем отличия моделей" }
                description={ "Среди радиаторов Arbonia наибольшей популярностью пользуются 2-трубчатые и 3-трубчатые модели. Именно они поддерживаются в наличии на складах и именно они, скорее всего,идеально подойдут для вашего дома. Разбираемся, какие отличия есть между ними и как правильно сделать выбор." }
            />
            <PageTitle
                breadcrumbs={ [
                    { title: "Главная", link: "/" },
                    { title: "Полезная информация", link: "/articles" },
                    { title: "Отличия 2-трубчатых радиаторов Arbonia от 3-трубчатых", link: "/articles/2-3-columns" }
                ] }
            />
            <Hero
                imgPath={ "/images/sliders/slide-5.jpeg" }
                header={ "Отличия 2-трубчатых радиаторов Arbonia от 3-трубчатых" }
            />
            <Box sx={ { ...global.pagePadding, maxWidth: "900px", margin: "auto" } }>

                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Мы стараемся поддерживать в наличии наиболее популярные модели радиаторов Arbonia. Это наиболее универсальные модели, которые подходят для большинства случаев. В складскую программу входят, как
                    &#160;
                    <Link href="/catalog/high-models">
                        <a style={ { textDecoration: "none" } }>
                            <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                                высокие радиаторы Arbonia высотой 1.8 м
                            </Typography>
                        </a>
                    </Link>
                    , так и
                    &#160;
                    <Link href="/catalog/low-models">
                        <a style={ { textDecoration: "none" } }>
                            <Typography sx={ { ...styles.standardTextRedLink } } component="span">
                                низкие радиаторы Arbonia высотой 30-37 см
                            </Typography>
                        </a>
                    </Link>
                    . Боковое или нижнее подключение, в зависимости от того, какая система отопления используется в доме.
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Также, складские модели радиаторов делятся на 2-трубчатые и 3-трубчатые. Отличия между ними заключается в соответствующем числе трубок в одной секции. Двух-трубчатые радиаторы имеют меньшую толщину (65 мм), трех-трубчатые на 4 см толще. Различие между данными модификациями хорошо видно невооруженным глазом. Но, помимо внешних различий, они имеют и существенные отличия в своих эксплуатационных характеристиках.

                </Typography>

                <Typography marginTop="40px" variant="h5" component={ "h2" }>
                    Мощность и габариты
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Секции 3-трубчатых радиаторов обладают большей мощностью, чем секции аналогичной высоту у 2-трубчатых батарей. Соответственно, при одинаковых высоте и длине более толстые 3-трубчатые модели будут мощнее, чем аналогичная 2-трубчатая модель.
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Например, радиатор Arbonia 3057 - 20 секций при длине 926 мм имеет мощность 1560 Вт.  Радиатор Arbonia 2057 - 20 секций при той же длине имеет мощность 1080 Вт. А мощностью, близкую к 1560 Вт имеет уже батарея длиной 28 секций: 1286 мм длина и 1512 Вт мощность.
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Таким образом, при подборе нужной модели по мощности, вы можете выбирать: взять более длинную и тонкую 2-трубчатую модель, или более короткую, но более толстую 3-трубчатую.
                </Typography>
                <Box textAlign={ "center" }>
                    <Image
                        src="/images/articles/90.png"
                        alt="2-трубчатый и 3-трубчатый радиаторы Arbonia"
                        width={ 800 }
                        height={ 400 }
                    />
                </Box>

                <Typography marginTop="40px" variant="h5" component={ "h2" }>
                    Стоимость
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Здесь нет однозначного ответа, какой радиатор стоит меньше. Одна секция 2-трубчатого радиатора Arbonia стоит дешевле 3-трубчатой секции аналогичной высоты. Но, при этом, она обладает и меньшей тепловой мощностью, поэтому, как мы обозначили ранее, для той же мощности нужно больше секций.
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Поэтому, более плоские радиаторы выходят дороже, чем более толстые. Это правило справедливо для невысоких радиаторов и радиаторов стандартной высоты. Для вертикальных высоких радиаторов Arbonia это соотношение работает уже в другую сторону: модели 2180 выходят дешевле, чем модели 3180 аналогичной мощности.
                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Отдельно можно отметить, что, так как вертикальные модели обладают большой тепловой мощностью, радиаторы 2180 проще подобрать подходящей мощности: из-за меньшей мощности секции они имеют меньший “шаг” при увеличении числа секций. С радиаторами Arbonia 3180 часто приходится брать заметно более мощные модели, что также способствует переплате.

                </Typography>


                <Typography marginTop="40px" variant="h5" component={ "h2" }>
                    Гигиена и уход

                </Typography>
                <Typography sx={ { ...styles.standardText } } marginY="20px">
                    Двухтрубчатые радиаторы проще в уходе, так как имеет более простую конструкцию. Их проще убирать от пыли и грязи. Этот фактор может быть определяющим для тех, у кого в доме проживают аллергики, чувствительные к качеству воздуха.
                </Typography>




            </Box>
        </Box>
    );
};

export default ArticlePage;

export async function getStaticProps() {
    return {
        props: {}, // will be passed to the page component as props
    };
}