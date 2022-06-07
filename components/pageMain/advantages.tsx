import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

import * as styles from '../../styles/styles'


type AdvantagesProps = {}


const Advantages: React.FC<AdvantagesProps> = () => {

    return (
        <Box>
            <Typography variant="h5" component="h2" textAlign="center" sx={ { textTransform: 'uppercase' } }>
                Почему трубчатые радиаторы Arbonia
            </Typography>
            <Box marginTop="30px">
                <Grid container spacing={ 2 }>
                    <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                        <Box textAlign="center">
                            <img src="/images/advantages/1.jpg" style={ { ...styles.roundSquareImage } } />
                            <Typography variant="h6" component="h3">
                                Крупный производитель
                            </Typography>
                        </Box>
                        <Typography sx={ { ...styles.smallText } }>
                            Arbonia - известный европейский производитель, ведущий свою историю с 1954 года. Компания специализируется на производстве отопительного и вентиляционного оборудования.
                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                        <Box textAlign="center">
                            <img src="/images/advantages/2.jpg" style={ { ...styles.roundSquareImage } } />
                            <Typography variant="h6" component="h3">
                                Широкий ассортимент
                            </Typography>
                        </Box>
                        <Typography sx={ { ...styles.smallText } }>
                            В модельном ряде трубчатых радиаторов Arbonia имеется 5 вариантов глубины. Высота батарей возможна от 19 см до 3 м. Длина до 66 секций вместо 40 секций, как у большинства производителей.
                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                        <Box textAlign="center">
                            <img src="/images/advantages/3.jpg" style={ { ...styles.roundSquareImage } } />
                            <Typography variant="h6" component="h3">
                                Гигиеничность
                            </Typography>
                        </Box>
                        <Typography sx={ { ...styles.smallText } }>
                            Форма трубчатого радиатора позволяет его легко чистить щеткой или мыть. Базовая покраска имеет гладкую поверхность, на которой не накапливаются пыль и грязь.
                        </Typography>
                    </Grid>


                    <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                        <Box textAlign="center">
                            <img src="/images/advantages/4.jpg" style={ { ...styles.roundSquareImage } } />
                            <Typography variant="h6" component="h3">
                                Надежность
                            </Typography>
                        </Box>
                        <Typography sx={ { ...styles.smallText } }>
                            Гарантия на радиаторы Arbonia составляет 10 лет. Радиаторы подходят для работы в российских условиях и для установки в многоквартирные дома.
                        </Typography>
                    </Grid>


                    <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                        <Box textAlign="center">
                            <img src="/images/advantages/5.jpg" style={ { ...styles.roundSquareImage } } />
                            <Typography variant="h6" component="h3">
                                Наличие на складе
                            </Typography>
                        </Box>
                        <Typography sx={ { ...styles.smallText } } >
                            В наличии поддерживаются наиболее популяряные модели Arbonia. От небольших 2030, до больших и мощных 3180. Вертикальные модели также доступны в цветном исполнении.
                        </Typography>

                    </Grid>


                    <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                        <Box textAlign="center">
                            <img src="/images/advantages/6.jpg" style={ { ...styles.roundSquareImage } } />
                            <Typography variant="h6" component="h3">
                                Быстрая доставка по России
                            </Typography>
                        </Box>
                        <Typography sx={ { ...styles.smallText } }>
                            Arbonia отгружаются со складов, расположенных в Москве и Санкт-Петербурге. Доставка возможна в любой город России. Благодаря надежной заводской упаковке радиаторы будут доставлены без достадных повреждений.
                        </Typography>
                    </Grid>

                </Grid>
            </Box>

        </Box>
    )

}


export default Advantages