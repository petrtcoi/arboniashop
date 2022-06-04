import React from 'react'
import { Box, Typography } from '@mui/material'

import ModelBlock from '../modelBlock/modelBlock'
import PageHeader from '../../components/pageHeader/pageHeader'
import Hero from '../../components/hero/hero'


import { SetComponentProps } from '../../models/setComponentProps.model'

import * as styles from '../../styles/styles'
import global from '../../variables/global'


const SetHighModel: React.FC<SetComponentProps> = ({ models, colors, connections }) => {
    return (
        <Box>
            <PageHeader title={ "Высокие модели радиаторов Zehnder (склад)" } />
            <Hero
                imgPath={ "/images/sliders/high.jpeg" }
                header={ "Вертикальные модели Zehnder" }
                subheader={ "Складские модели радиаторов высотой от 110 до 180 см" }
            />
            <Box sx={ { ...global.pagePadding } }>

                <Box marginTop="20px">
                    <Typography sx={ { ...styles.standardText } }>
                        Вертикальные радиаторы Zehnder - одна из самых популярных и любимых моделей среди владельцев квартир, домов, выбор профессиональных дизайнеров и архитекторов. Стальные трубчатые вертикальные радиаторы уже стали важным, а иногда и центральным элементом или акцентом в интерьере помещения. Забудьте те времена, когда радиатор скрывали в интерьерах. Zehnder Charleston не нужно скрывать под декоративными панелями.
                    </Typography>
                </Box>
                <Box marginTop="20px">
                    <Typography sx={ { ...styles.standardText } }>
                        Стальные трубчатые вертикальные радиаторы функциональны, так как подходят для помещения с высокими окнами, их можно разместить на узких стенах по бокам от окон, в различных выступах, узких угловых пространствах. Вертикальные радиаторы Zehnder Charleston впишутся в любую концепцию интерьера – от минимализма и модерна до хайтека, лофта, фьюжн и многих других.
                    </Typography>
                </Box>


                {/* 2110 */ }
                <ModelBlock
                    title={ "Zehnder 2110 RAL 9016, боковое подключение 3/4" }
                    description={ "2-трубчатый радиатор 110 см - это самая невысокая складская модель из высоких. Отлично подходт для ситуаций, когда радиатор высотой 1.8 м не входит по высоте." }

                    model={ models.find(x => x.id === '2180-9016-1270-34') || models[0] }
                    color={ colors.find(x => x.id === '9016') || colors[0] }
                    connection={ connections.find(x => x.id === '1270-34') || connections[0] }
                />
                <ModelBlock
                    title={ "Zehnder 2110 RAL 9016, Completto" }
                    description={ "2-трубчатый радиатор 110 см - это самая невысокая складская модель из высоких. Отлично подходт для ситуаций, когда радиатор высотой 1.8 м не входит по высоте. Нижнее подключение. Встроенный термовентиль вверху." }

                    model={ models.find(x => x.id === '2180-9016-v001') || models[0] }
                    color={ colors.find(x => x.id === '9016') || colors[0] }
                    connection={ connections.find(x => x.id === 'v001') || connections[0] }
                />


                {/* 2180 белый*/ }
                <ModelBlock
                    title={ "Zehnder 2180 RAL 9016, боковое подключение 3/4" }
                    description={ "Высокий 2-трубчатый радиатор в белом цвете и боковым подклчюением 3/4. Данная модель имеет стильный дизайн. Диаметр подключения 3/4 позволяет ставить радиатор в старые дома с однотрубной системой отопления." }

                    model={ models.find(x => x.id === '2180-9016-1270-34') || models[0] }
                    color={ colors.find(x => x.id === '9016') || colors[0] }
                    connection={ connections.find(x => x.id === '1270-34') || connections[0] }
                />
                <ModelBlock
                    title={ "Zehnder 2180 RAL 9016, Completto" }
                    description={ "Высокий 2-трубчатый радиатор в белом цвете и нижним подключением со встроенным термовентилем. Радиатор подойдет для монтажа в современных домах с разводкой отопления по полу." }

                    model={ models.find(x => x.id === '2180-9016-v001') || models[0] }
                    color={ colors.find(x => x.id === '9016') || colors[0] }
                    connection={ connections.find(x => x.id === 'v001') || connections[0] }
                />

                {/* 2180 черный*/ }
                <ModelBlock
                    title={ "Zehnder 2180 RAL 9217 (черный), боковое подключение 3/4" }
                    description={ "Высокий 2-трубчатый радиатор в черном цвете и боковым подклчюением 3/4. Данная модель имеет стильный дизайн. Диаметр подключения 3/4 позволяет ставить радиатор в старые дома с однотрубной системой отопления." }

                    model={ models.find(x => x.id === '2180-9217-1270-34') || models[0] }
                    color={ colors.find(x => x.id === '9217') || colors[0] }
                    connection={ connections.find(x => x.id === '1270-34') || connections[0] }
                />
                <ModelBlock
                    title={ "Zehnder 2180 RAL 9217 (черный), Completto" }
                    description={ "Высокий 2-трубчатый радиатор в черном цвете и нижним подключением со встроенным термовентилем. Радиатор подойдет для монтажа в современных домах с разводкой отопления по полу." }

                    model={ models.find(x => x.id === '2180-9217-v001') || models[0] }
                    color={ colors.find(x => x.id === '9217') || colors[0] }
                    connection={ connections.find(x => x.id === 'v001') || connections[0] }
                />


                {/* 2180 TL*/ }
                <ModelBlock
                    title={ "Zehnder 2180 Technoline, боковое подключение 3/4" }
                    description={ "Высокий 2-трубчатый радиатор в цвете прозрачный лак и боковым подклчюением 3/4. Данная модель имеет стильный дизайн. Диаметр подключения 3/4 позволяет ставить радиатор в старые дома с однотрубной системой отопления." }

                    model={ models.find(x => x.id === '2180-0325-1270-34') || models[0] }
                    color={ colors.find(x => x.id === '0325') || colors[0] }
                    connection={ connections.find(x => x.id === '1270-34') || connections[0] }
                />
                <ModelBlock
                    title={ "Zehnder 2180 Technoline, Completto" }
                    description={ "Высокий 2-трубчатый радиатор в цвете прозрачный лак и нижним подключением со встроенным термовентилем. Радиатор подойдет для монтажа в современных домах с разводкой отопления по полу." }

                    model={ models.find(x => x.id === '2180-0325-v001') || models[0] }
                    color={ colors.find(x => x.id === '0325') || colors[0] }
                    connection={ connections.find(x => x.id === 'v001') || connections[0] }
                />


                {/* 3180 белый */ }
                <ModelBlock
                    title={ "Zehnder 3180 RAL 9016, боковое подключение 3/4" }
                    description={ "Высокий 3-трубчатый радиатор в белом цвете и боковым подклчюением 3/4. Данная модель имеет стильный дизайн. Диаметр подключения 3/4 позволяет ставить радиатор в старые дома с однотрубной системой отопления." }

                    model={ models.find(x => x.id === '3180-9016-1270-34') || models[0] }
                    color={ colors.find(x => x.id === '9016') || colors[0] }
                    connection={ connections.find(x => x.id === '1270-34') || connections[0] }
                />
                <ModelBlock
                    title={ "Zehnder 3180 RAL 9016, Completto" }
                    description={ "Высокий 3-трубчатый радиатор в белом цвете и нижним подключением со встроенным термовентилем. Радиатор подойдет для монтажа в современных домах с разводкой отопления по полу." }

                    model={ models.find(x => x.id === '3180-9016-v001') || models[0] }
                    color={ colors.find(x => x.id === '9016') || colors[0] }
                    connection={ connections.find(x => x.id === 'v001') || connections[0] }
                />


                {/* 3180 черный */ }
                <ModelBlock
                    title={ "Zehnder 3180 RAL 9217 (черный), боковое подключение 3/4" }
                    description={ "Высокий 3-трубчатый радиатор в черном цвете и боковым подклчюением 3/4. Данная модель имеет стильный дизайн. Диаметр подключения 3/4 позволяет ставить радиатор в старые дома с однотрубной системой отопления." }

                    model={ models.find(x => x.id === '3180-9217-1270-34') || models[0] }
                    color={ colors.find(x => x.id === '9217') || colors[0] }
                    connection={ connections.find(x => x.id === '1270-34') || connections[0] }
                />
                <ModelBlock
                    title={ "Zehnder 3180 RAL 9217 (черный), Completto" }
                    description={ "Высокий 3-трубчатый радиатор в черном цвете и нижним подключением со встроенным термовентилем. Радиатор подойдет для монтажа в современных домах с разводкой отопления по полу." }

                    model={ models.find(x => x.id === '3180-9217-v001') || models[0] }
                    color={ colors.find(x => x.id === '9217') || colors[0] }
                    connection={ connections.find(x => x.id === 'v001') || connections[0] }
                />

                {/* 3180 TL */ }
                <ModelBlock
                    title={ "Zehnder 3180 Technoline, боковое подключение 3/4" }
                    description={ "Высокий 3-трубчатый радиатор в цвете прозрачный лак и боковым подклчюением 3/4. Данная модель имеет стильный дизайн. Диаметр подключения 3/4 позволяет ставить радиатор в старые дома с однотрубной системой отопления." }

                    model={ models.find(x => x.id === '3180-0325-1270-34') || models[0] }
                    color={ colors.find(x => x.id === '0325') || colors[0] }
                    connection={ connections.find(x => x.id === '1270-34') || connections[0] }
                />
                <ModelBlock
                    title={ "Zehnder 3180 Technoline, Completto" }
                    description={ "Высокий 3-трубчатый радиатор в цвете прозрачный лак и нижним подключением со встроенным термовентилем. Радиатор подойдет для монтажа в современных домах с разводкой отопления по полу." }

                    model={ models.find(x => x.id === '3180-0325-v001') || models[0] }
                    color={ colors.find(x => x.id === '0325') || colors[0] }
                    connection={ connections.find(x => x.id === 'v001') || connections[0] }
                />
            </Box>

        </Box>
    )
}

export default SetHighModel