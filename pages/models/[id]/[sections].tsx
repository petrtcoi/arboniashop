import { NextPage } from 'next';
import { useState } from 'react';
import { Box, Typography, Divider, Tabs, Tab } from '@mui/material';

import ImagesOtherList from '../../../components/pageModels/imagesOtherList';
import DownloadsBlock from '../../../components/pageModels/downloadsBlock';
import PageHeader from '../../../components/pageHeader/pageHeader';
import RadiatorInfo from '../../../components/pageRadiator/radiatorInfo';
import PageTitle from '../../../components/pageTitle/pageTitle';


import getModelsData from '../../../api_utils/getModelsData';
import getConnectionsData from '../../../api_utils/getConnectionsData';
import getColorsData from '../../../api_utils/getColorsData';


import { ModelOrigin } from '../../../models/modelOrigin.model';
import { ConnectionOrigin } from '../../../models/connectionOrigin.model';
import { ColorOrigin } from '../../../models/colorOrigin.model';

import * as styles from '../../../styles/styles';
import global from '../../../variables/global';
import GeneralTextAboutArboniaProps from '../../../components/generalTextAboutArbonia';






type RadiatorProps = {
    model: ModelOrigin;
    color: ColorOrigin;
    connection: ConnectionOrigin;
    sectionQnty: number;
};


const Radiator: NextPage<RadiatorProps> = ({ model, color, connection, sectionQnty }) => {

    const [tab, setTab] = useState<string>('docs');
    const handleChangeTab = (event: React.SyntheticEvent, newTab: string) => {
        setTab(newTab);
    };

    const radiatorTitle = `Радиатор Arbonia ${model.nameShort}-${sectionQnty}, ${color.nameShort}, ${connection.nameShort}`;

    return (
        <Box itemScope itemType="https://schema.org/IndividualProduct">
            <PageTitle
                header={ "Специализированный магазин Arbonia в России" }
                subheader={ "Доставка со складов в Москве и Санкт-Петербурге" }
                breadcrumbs={ [
                    { title: "Главная", link: "/" },
                    { title: "Каталог", link: "/catalog" },
                    { title: `Arbonia ${model.nameShort}, ${color.nameShort}, ${connection.nameShort}`, link: `/models/${model.id}` },
                    { title: `${sectionQnty >= 10 ? sectionQnty : "0" + sectionQnty} секции(й)`, link: "/catalog" }
                ] }
            />
            <Box sx={ { ...global.pagePadding } }>
                <PageHeader
                    title={ `Радиатор Arbonia ${model.nameShort} ${radiatorTitle} купить в Москве, Санкт-Петебурге или с доставкой по России в магазине ArboniaShop.ru` }
                    description={ `Arbonia ${model.nameShort} - ${sectionQnty} секций, ${model.nameShort[0]}-трубчатая модель, цвет ${color.name}, подключение ${connection.name}, габариты ${model.height}x${model.width}x${parseInt(model.lengthSection) * sectionQnty + 26} мм. Мощность ${parseInt(model.dt60) * sectionQnty} Вт (при dT=60C). Купить в магазине ArboniaShop по выгодынм ценам. Официальная гарантия на радиаторы 10 лет. Быстрая доставка в любой город России со складов в Москве и Санкт-Петербурге. Возможно изготовление радиаторов под заказ. Бесплатная консультация и помощь в подборе радиаторов. Огромный опыт работы.` }
                />
                <Box marginBottom={ "50px" } marginTop={ "20px" }>
                    <Typography variant="h5" component="h1" gutterBottom textAlign="center" itemProp="name">
                        { radiatorTitle }
                    </Typography>
                </Box>

                <RadiatorInfo
                    model={ model }
                    color={ color }
                    connection={ connection }
                    sectionQnty={ sectionQnty }
                />


                <Box marginTop="40px">
                    <Divider variant="middle" />
                </Box>


                {/* ВКЛАДКИ С ИНФОРМАЦИЕЙ */ }
                <Box marginTop="20px" marginBottom="40px" >
                    <Tabs value={ tab } onChange={ handleChangeTab }>
                        { model.imagesOther &&
                            <Tab label="Изображения" value="images" sx={ styles.smallText } />
                        }
                        <Tab label="Документы" value="docs" sx={ styles.smallText } />
                    </Tabs>
                </Box>




                { tab === 'images' && model.imagesOther &&
                    <Box>
                        <Typography variant="h4" component="h2" marginBottom="20px">Дополнительные изображения</Typography>
                        <ImagesOtherList
                            imagesString={ model.imagesOther }
                        />
                    </Box>
                }



                { tab === 'docs' &&
                    <Box>
                        <Typography variant="h4" component="h2" marginBottom="20px">Документы для скачивания</Typography>
                        <DownloadsBlock />
                    </Box>
                }

                <GeneralTextAboutArboniaProps />
            </Box >
        </Box>

    );
};

export default Radiator;





export async function getStaticProps(context: { params: { id: string, sections: string; }; }) {
    const modelId = context.params.id;
    const sectionQnty = +context.params.sections;

    const models: ModelOrigin[] = await getModelsData();
    const colors: ColorOrigin[] = await getColorsData();
    const connections: ConnectionOrigin[] = await getConnectionsData();

    const model = models.find(x => x.id === modelId) || models[0];
    const colorId = model.color || colors[0];
    const connectionId = model.connection || connections[0];

    const color = colors.find(x => x.id === colorId) || colors[0];
    const connection = connections.find(x => x.id === connectionId) || connections[0];

    return {
        props: {
            model,
            connection,
            color,
            sectionQnty
        }
    };
}


export async function getStaticPaths() {

    const models: ModelOrigin[] = await getModelsData();
    const paths = models.map(model => {
        if (!model.inStockSections) return [];
        return model.inStockSections.split(',').map(sections => { return { params: { id: model.id, sections: sections.trim(), } }; });
    }).flat();

    return {
        paths: paths,
        fallback: false // See the "fallback" section below
    };
}

