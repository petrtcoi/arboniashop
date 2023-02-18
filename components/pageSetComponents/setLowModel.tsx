import React from 'react';
import { Box, Typography } from '@mui/material';

import ModelBlock from '../modelBlock/modelBlock';
import PageHeader from '../../components/pageHeader/pageHeader';
import Hero from '../../components/hero/hero';


import { SetComponentProps } from '../../models/setComponentProps.model';

import * as styles from '../../styles/styles';
import global from '../../variables/global';


const SetLowModel: React.FC<SetComponentProps> = ({ models, colors, connections }) => {
    return (
        <Box>
            <PageHeader title={ "Невысокие Arbonia в наличии купить по выгодным ценам в Москве, Санкт-Петербурге и с доставкой по России в магазине ArboniaShop" } />
            <Hero
                imgPath={ "/images/sliders/slide.jpeg" }
                header={ "Низкие модели Arbonia" }
                subheader={ "Складские модели радиаторов высотой до 40 см" }
            />
            <Box sx={ { ...global.pagePadding } }>

                <Box marginTop="20px">
                    <Typography sx={ { ...styles.standardText } }>
                        Низкие радиаторы Arbonia - отлично подходят для отопления помещений с низкими подоконниками (40-50 см). Из-за небольших габаритов они часто используются в качестве дополнительных источников тепла, направленных на обогрев остекления большой площади.
                    </Typography>
                </Box>
                <Box marginTop="20px">
                    <Typography sx={ { ...styles.standardText } }>
                        В наличии поддерживаются модели высотой 30 и 37 см в белом цвете. С нижним и боковым подключением. Радиаторы с боковым подключением могут быть установлены под более низкие подоконники, так как здесь не требуется дополнительное место для подвода труб снизу.
                    </Typography>
                </Box>




                {/* 2030 белый*/ }
                <ModelBlock
                    title={ "Arbonia 2030 RAL 9016, боковое подключение 3/4" }
                    description={ "Сама небольшая из складских моделей. Благодаря небольшой глубине (65 мм) радиатор Arbonia занимает мало места отлично подходит для обогрева небольших помещений." }

                    model={ models.find(x => x.id === '2030-9016-12') || models[0] }
                    color={ colors.find(x => x.id === '9016') || colors[0] }
                    connection={ connections.find(x => x.id === '12') || connections[0] }
                />


                {/* 3030 RAL 9016*/ }
                <ModelBlock
                    title={ "Arbonia 3030 RAL 9016, боковое подключение 3/4" }
                    description={ "Более мощная 3-трубчатая модель радиатора Arbonia. Подходит в тех случаях, когда мощности тонкого радиатора Arbonia 2030 оказывается недостаточно." }

                    model={ models.find(x => x.id === '3030-9016-12') || models[0] }
                    color={ colors.find(x => x.id === '9016') || colors[0] }
                    connection={ connections.find(x => x.id === '12') || connections[0] }
                />
                <ModelBlock
                    title={ "Arbonia 3030 RAL 9016, №69 ТВВ" }
                    description={ "Вариант с нижним подключением и встроенным термовентилем для установки в домах с разводкой труб по полу." }

                    model={ models.find(x => x.id === '3030-9016-69tvv') || models[0] }
                    color={ colors.find(x => x.id === '9016') || colors[0] }
                    connection={ connections.find(x => x.id === '69tvv') || connections[0] }
                />


                {/* 3037 RAL 9016*/ }
                <ModelBlock
                    title={ "Arbonia 3037 RAL 9016, боковое подключение 3/4" }
                    description={ "3-трубчатый радиатор с классическим межосевым расстоянием 300 мм. Отлично подходит для замены старых чугунных радиаторов или алюминиевых батарей аналогичной высоты. Возможна замена радиатора без переноса труб." }

                    model={ models.find(x => x.id === '3037-9016-12') || models[0] }
                    color={ colors.find(x => x.id === '9016') || colors[0] }
                    connection={ connections.find(x => x.id === '12') || connections[0] }
                />
                <ModelBlock
                    title={ "Arbonia 3037 RAL 9016, №69 ТВВ" }
                    description={ "Вариант с нижним подключением и встроенным термовентилем для установки в домах с разводкой труб по полу." }

                    model={ models.find(x => x.id === '3037-9016-69tvv') || models[0] }
                    color={ colors.find(x => x.id === '9016') || colors[0] }
                    connection={ connections.find(x => x.id === '69tvv') || connections[0] }
                />
            </Box>

        </Box>
    );
};

export default SetLowModel;