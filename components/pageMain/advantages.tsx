import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

import * as styles from '../../styles/styles'


type AdvantagesProps = {}


const Advantages: React.FC<AdvantagesProps> = () => {

    return (
        <Box>
            <Typography variant="h5" component="h2" textAlign="center" sx={{textTransform: 'uppercase'}}>
                Почему трубчатые радиаторы Arbonia
            </Typography>
            <Box marginTop="30px">
                <Grid container spacing={ 2 }>
                    <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                        <Box textAlign="center">
                            <img src="/images/advantages/1.jpg" style={ { ...styles.roundSquareImage } } />
                            <Typography variant="h6" component="h3">
                                Первый в мире
                            </Typography>
                        </Box>
                        <Typography sx={ { ...styles.smallText } }>
                            Первый в мире. Когда Якоб Цендер зарегистрировал патент на первый в мире стальной трубчатый радиатор в 1930 году, никто не мог предположить, что и 90 лет спустя этот радиатор будет современен и все также будет являться вершиной совершенства формы и технологий. Zehnder Charleston был и остается вечной классикой.
                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                        <Box textAlign="center">
                            <img src="/images/advantages/2.jpg" style={ { ...styles.roundSquareImage } } />
                            <Typography variant="h6" component="h3">
                                Lazer Made Technology
                            </Typography>
                        </Box>
                        <Typography sx={ { ...styles.smallText } }>
                            Lazer made – новаторский способ лазерной сварки, который устанавливает новые стандарты качества и технологий.
                            Благодаря методу Lazer made в местах сварки не остается окалины, швы аккуратные, высокопрочные, с большим отношением глубины проплавления к ширине шва, что уменьшает деформацию или смещение деталей.
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
                            Форма трубчатого радиатора позволяет его легко чистить щеткой или мыть. Для помещений с повышенными требованиями к чистоте, доступна модель Zehnder Charleston Clinic.
                        </Typography>
                    </Grid>


                    <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                        <Box textAlign="center">
                            <img src="/images/advantages/4.jpg" style={ { ...styles.roundSquareImage } } />
                            <Typography variant="h6" component="h3">
                                Гарантия 10 лет
                            </Typography>
                        </Box>
                        <Typography sx={ { ...styles.smallText } }>
                            Гарантия на радиаторы Zehnder Charleston специально для российских и белорусских заказчиков – 10 лет.
                            Радиаторы прошли обязательную сертификацию на соответствие ГОСТ 31311-2005, сертификат № POCC DE.АГ16.В00083 от 21.08.2018. Радиаторы Zehnder Charleston застрахованы в России на 1 000 000 Евро.                        </Typography>
                    </Grid>


                    <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                        <Box textAlign="center">
                            <img src="/images/advantages/5.jpg" style={ { ...styles.roundSquareImage } } />
                            <Typography variant="h6" component="h3">
                                Застраховано на 1 000 000 Евро
                            </Typography>
                        </Box>
                        <Typography sx={ { ...styles.smallText } } >
                            Ответственность производителя застрахована в России. Радиаторы Zehnder застрахованы в страховой компании!&nbsp;
                            <a target="_blank" href="/docs/certificate_2021.pdf" style={ { textDecoration: "none" } }>
                                <span style={ { ...styles.smallTextRedLink } }>
                                    Cертификат о страховании ответственности продукции
                                </span>
                            </a>.
                        </Typography>

                    </Grid>


                    <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                        <Box textAlign="center">
                            <img src="/images/advantages/6.jpg" style={ { ...styles.roundSquareImage } } />
                            <Typography variant="h6" component="h3">
                                Более 700 цветов
                            </Typography>
                        </Box>
                        <Typography sx={ { ...styles.smallText } }>
                            <a target="_blank" href="/docs/zehnder-colors.pdf" style={ { textDecoration: "none" } }>
                                <span style={ { ...styles.smallTextRedLink } }>
                                    Палитра Zehnder Charleston
                                </span>
                            </a>
                            &nbsp;насчитывает более чем 700 цветов и несколько видов поверхности: от классических тонов до современных кварцевых оттенков.
                            Ни один из видов порошковой эмали и лака, используемых в Zehnder, не содержат растворителей или тяжелых металлов.
                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                        <Box textAlign="center">
                            <img src="/images/advantages/7.jpg" style={ { ...styles.roundSquareImage } } />
                            <Typography variant="h6" component="h3">
                                Множество форм - выбери свою
                            </Typography>
                        </Box>
                        <Typography sx={ { ...styles.smallText } }>
                            С Zehnder Charleston вы найдете верное решение для своего интерьера: радиатор, который может быть любым – таким, как видите его именно вы: низким или высоким, цветным или белым, радиусным или угловым.
                            Множество стандартных типоразмеров, а также специальные формы радиатора подойдут для различных архитектурных решений.
                        </Typography>
                    </Grid>


                    <Grid item xs={ 12 } md={ 6 } lg={ 4 }>
                        <Box textAlign="center">
                            <img src="/images/advantages/8.jpg" style={ { ...styles.roundSquareImage } } />
                            <Typography variant="h6" component="h3">
                                Прочная немецкая упаковка
                            </Typography>
                        </Box>
                        <Typography sx={ { ...styles.smallText } }>
                            Прочная немецкая упаковка из двойного гофрокартона предотвращает любые повреждения во время транспортировки и хранения и будет защищать радиатор во время ремонтных работ столько, сколько потребуется. Покрывающая радиатор стрейч-пленка также защищает оборудование во время и после установки.
                        </Typography>
                    </Grid>

                </Grid>
            </Box>

        </Box>
    )

}


export default Advantages