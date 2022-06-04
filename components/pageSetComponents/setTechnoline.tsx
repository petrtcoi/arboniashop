import React from 'react'
import { Box, Typography } from '@mui/material'

import ModelBlock from '../modelBlock/modelBlock'
import PageHeader from '../../components/pageHeader/pageHeader'
import Hero from '../../components/hero/hero'

import { SetComponentProps } from '../../models/setComponentProps.model'

import * as styles from '../../styles/styles'
import global from '../../variables/global'



const SetTechnoline: React.FC<SetComponentProps> = ({ models, colors, connections }) => {
    return (
        <Box>
            <PageHeader title={ "Zehnder Charleston в цвете прозрачный лак 0325 TL (склад)" } />
            <Hero
                imgPath={ "/images/sliders/tl.jpeg" }
                header={ "Zehnder в цвете Tecnoline" }
                subheader={ "Складские модели Zehnder в цвете прозрачный лак" }
            />
            <Box sx={ { ...global.pagePadding } }>

                <Box marginTop="20px">
                    <Typography sx={ { ...styles.standardText } }>
                        Прозрачный лак Technoline – это порошковая эмаль, которая при запекании (полимеризации) в печи становиться прозрачной, и вы можете видеть все особенности технологии изготовления радиатора. Радиаторы в цвете TL не грунтуются, в отличие от остальных приборов Zehnder, покрытых порошковой эмалью цвета RAL.
                    </Typography>
                </Box>
                <Box marginTop="20px">
                    <Typography sx={ { ...styles.standardText } }>
                        Секции радиатора могут визуально отличатся оттенками стали, цветом стали в местах шлифовки сварных швов, следами механической и термической обработки, прочими различными индивидуальными особенностями, полученными в процессе изготовления.
                        Радиаторы разных типоразмеров могут визуально отличатся друг от друга используемыми технологиями сварки.
                    </Typography>
                </Box>
                <Box marginTop="20px">
                    <Typography sx={ { ...styles.standardText } }>
                        Важно: радиаторы в данном цвете не рекомендуется ставить в помещения с высоким уровнем влажности (бассейны, санузлы и др.).
                    </Typography>
                </Box>


                {/* 3057 */ }
                <ModelBlock
                    title={ "Zehnder 3057 Technoline, боковое подключение 3/4" }
                    description={ "Классическая модель в цвете прозрачный лак. Межосевое расстояние 50 см позволяет легко менять старые радиаторы на Zehnder." }

                    model={ models.find(x => x.id === '3057-0325-1270-34') || models[0] }
                    color={ colors.find(x => x.id === '0325') || colors[0] }
                    connection={ connections.find(x => x.id === '1270-34') || connections[0] }
                />
                <ModelBlock
                    title={ "Zehnder 3057 Technoline, Completto" }
                    description={ "Классическая модель в цвете прозрачный лак. Нижнее подключение слева / справа под стандартные узлы подключения." }

                    model={ models.find(x => x.id === '3057-0325-v001') || models[0] }
                    color={ colors.find(x => x.id === '0325') || colors[0] }
                    connection={ connections.find(x => x.id === 'v001') || connections[0] }
                />


                {/* 2180 */ }
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


                {/* 3180 */ }
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

export default SetTechnoline