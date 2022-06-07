import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'

import * as styles from '../../styles/styles'


type PortfolioProps = {}


const Portfolio: React.FC<PortfolioProps> = () => {

    return (
        <Box>
            <Typography variant="h5" component="h2">
                Наши клиенты
            </Typography>

            <Grid container spacing={ 2 }>
                <Grid item xs={ 6 } md={ 3 } textAlign="center">
                    <Box marginTop="20px">
                        <img src="/images/portfolio/2.jpg" width="200px" height="200px" />
                    </Box>
                    <Typography sx={ { ...styles.smallText } }>
                        ЖК Верещагинская дача<br />Сочи
                    </Typography>
                </Grid>
                <Grid item xs={ 6 } md={ 3 } textAlign="center">
                    <Box marginTop="20px">
                        <img src="/images/portfolio/0.jpg" width="200px" height="200px" />
                    </Box>
                    <Typography sx={ { ...styles.smallText } }>
                        Новая Голландия<br />
                        Санкт-Петербург
                    </Typography>
                </Grid>
                <Grid item xs={ 6 } md={ 3 } textAlign="center">
                    <Box marginTop="20px">
                        <img src="/images/portfolio/1.jpg" width="200px" height="200px" />
                    </Box>
                    <Typography sx={ { ...styles.smallText } }>
                        Beluga Group<br />
                        Москва
                    </Typography>
                </Grid>
                <Grid item xs={ 6 } md={ 3 } textAlign="center">
                    <Box marginTop="20px">
                        <img src="/images/portfolio/1.png" width="200px" height="200px" />
                    </Box>
                    <Typography sx={ { ...styles.smallText } }>
                        Оперный театр<br />
                        Новосибирск
                    </Typography>
                </Grid>
                <Grid item xs={ 6 } md={ 3 } textAlign="center">
                    <Box marginTop="20px">
                        <img src="/images/portfolio/2.png" width="200px" height="200px" />
                    </Box>
                    <Typography sx={ { ...styles.smallText } }>
                        Duo Bar<br />
                        Санкт-Петербург
                    </Typography>
                </Grid>
                <Grid item xs={ 6 } md={ 3 } textAlign="center">
                    <Box marginTop="20px">
                        <img src="/images/portfolio/4.png" width="200px" height="200px" />
                    </Box>
                    <Typography sx={ { ...styles.smallText } }>
                        ВАГНЕР Таллинский<br />
                        Санкт-Петербург
                    </Typography>
                </Grid>
                <Grid item xs={ 6 } md={ 3 } textAlign="center">
                    <Box marginTop="20px">
                        <img src="/images/portfolio/6.png" width="200px" height="200px" />
                    </Box>
                    <Typography sx={ { ...styles.smallText } }>
                        Ресторан GooseGoose<br />
                        Санкт-Петербург
                    </Typography>
                </Grid>
                <Grid item xs={ 6 } md={ 3 } textAlign="center">
                    <Box marginTop="20px">
                        <img src="/images/portfolio/7.png" width="200px" height="200px" />
                    </Box>
                    <Typography sx={ { ...styles.smallText } }>
                        Hotel Indigo<br />
                        Санкт-Петербург
                    </Typography>
                </Grid>
            </Grid>
            <Box textAlign="center" marginY="80px">
                <Typography sx={ { ...styles.standardText } }>
                    У нас богатый опыт работы с различными проектами:<br/>
                    От крупных коммерческих объектов, до замены единственного радиатора в комнате.<br/>
                    Свяжитесь с нами и мы гарантируем качественный сервис и поставку радиаторов в срок!<br/>
                    Команда ArboniaShop.ru
                </Typography>

            </Box>

        </Box>
    )

}


export default Portfolio