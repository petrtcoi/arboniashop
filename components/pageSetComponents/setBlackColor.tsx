import React from 'react'
import { Box, Typography } from '@mui/material'

import ModelBlock from '../modelBlock/modelBlock'
import PageHeader from '../../components/pageHeader/pageHeader'
import Hero from '../../components/hero/hero'


import { SetComponentProps } from '../../models/setComponentProps.model'

import * as styles from '../../styles/styles'
import global from '../../variables/global'



const SetBlackColor: React.FC<SetComponentProps> = ({ models, colors, connections }) => {
    return (
        <Box>

            <PageHeader title={ "Zehnder Charleston черного цвета RAL 9217 (склад)" } />
            <Hero
                imgPath={ "/images/sliders/black.jpeg" }
                header={ "Zehnder Charleston черного цвета RAL 9217" }
                subheader={ "Складские модели радиаторов в черном цвете. Низкие и высокие модели." }
            />
            <Box sx={ { ...global.pagePadding } }>

                <Box marginTop="20px">
                    <Typography sx={ { ...styles.standardText } }>
                        Стальные трубчатые радиаторы в черном матовом цвете RAL 9217.
                        Черный цвет, как и белый, является универсальным и подходит для большинства интерьеров.
                        В наличии поддерживаются модели всех трех категорий: низкие радиаторы, высокие, а таже радиаторы стандартной высоты.
                    </Typography>
                </Box>


                {/* 3057 */ }
                <ModelBlock
                    title={ "Zehnder 3057 RAL 9217, боковое 3/4" }
                    description={ "Классическая модель в черном цвете. Межосевое расстояние 50 см позволяет легко менять старые радиаторы на Zehnder." }

                    model={ models.find(x => x.id === '3057-9217-1270-34') || models[0] }
                    color={ colors.find(x => x.id === '9217') || colors[0] }
                    connection={ connections.find(x => x.id === '1270-34') || connections[0] }
                />
                <ModelBlock
                    title={ "Zehnder 3057 RAL 9217, V001" }
                    description={ "Классическая модель в черном цвете. Нижнее подключение слева / справа под стандартные узлы подключения." }

                    model={ models.find(x => x.id === '3057-9217-v001') || models[0] }
                    color={ colors.find(x => x.id === '9217') || colors[0] }
                    connection={ connections.find(x => x.id === 'v001') || connections[0] }
                />


                {/* 2180 */ }
                <ModelBlock
                    title={ "Zehnder 2180 RAL 9217, боковое 3/4" }
                    description={ "Высокий 2-трубчатый радиатор в черном цвете и боковым подклчюением 3/4. Данная модель имеет стильный дизайн. Диаметр подключения 3/4 позволяет ставить радиатор в старые дома с однотрубной системой отопления." }

                    model={ models.find(x => x.id === '2180-9217-1270-34') || models[0] }
                    color={ colors.find(x => x.id === '9217') || colors[0] }
                    connection={ connections.find(x => x.id === '1270-34') || connections[0] }
                />
                <ModelBlock
                    title={ "Zehnder 2180 RAL 9217, V001" }
                    description={ "Высокий 2-трубчатый радиатор в черном цвете и нижним подключением со встроенным термовентилем. Радиатор подойдет для монтажа в современных домах с разводкой отопления по полу." }

                    model={ models.find(x => x.id === '2180-9217-v001') || models[0] }
                    color={ colors.find(x => x.id === '9217') || colors[0] }
                    connection={ connections.find(x => x.id === 'v001') || connections[0] }
                />


                {/* 3180 */ }
                <ModelBlock
                    title={ "Zehnder 3180 RAL 9217, боковое 3/4" }
                    description={ "Высокий 3-трубчатый радиатор в черном цвете и боковым подклчюением 3/4. Данная модель имеет стильный дизайн. Диаметр подключения 3/4 позволяет ставить радиатор в старые дома с однотрубной системой отопления." }

                    model={ models.find(x => x.id === '3180-9217-1270-34') || models[0] }
                    color={ colors.find(x => x.id === '9217') || colors[0] }
                    connection={ connections.find(x => x.id === '1270-34') || connections[0] }
                />
                <ModelBlock
                    title={ "Zehnder 3180 RAL 9217, V001" }
                    description={ "Высокий 3-трубчатый радиатор в черном цвете и нижним подключением со встроенным термовентилем. Радиатор подойдет для монтажа в современных домах с разводкой отопления по полу." }

                    model={ models.find(x => x.id === '3180-9217-v001') || models[0] }
                    color={ colors.find(x => x.id === '9217') || colors[0] }
                    connection={ connections.find(x => x.id === 'v001') || connections[0] }
                />


                {/* 3030 */ }
                <ModelBlock
                    title={ "Zehnder Charleston 3030 RAL 9217, V001" }
                    description={ "Невысокие 3-трубчатые радиаторы для монтажа под окнами с низкими подоконниками. Высота модели 30 см." }
                    modelLink={ "3030-9217-v001" }

                    model={ models.find(x => x.id === '3030-9217-v001') || models[0] }
                    color={ colors.find(x => x.id === '9217') || colors[0] }
                    connection={ connections.find(x => x.id === 'v001') || connections[0] }
                />
            </Box>
        </Box>
    )
}

export default SetBlackColor