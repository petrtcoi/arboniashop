import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined'
import SquareFootOutlinedIcon from '@mui/icons-material/SquareFootOutlined'

import colors from '../../variables/colors'
import * as styles from '../../styles/styles'


type WhyBuyProps = {}

const WhyBuy: React.FC<WhyBuyProps> = () => {
    return (
        <Grid container spacing={ 2 }>
            <Grid item xs={ 6 } md={ 3 }>
                <Box textAlign="center" marginBottom="5px">
                    <LocalShippingOutlinedIcon sx={ { fontSize: "60px", color: colors.dark } } />
                </Box>
                <Typography sx={ styles.smallText } align="center">
                    Быстрая доставка
                </Typography>
            </Grid>
            <Grid item xs={ 6 } md={ 3 } >
                <Box alignItems="center">
                    <Box textAlign="center" marginBottom="5px">
                        <LocalPoliceOutlinedIcon sx={ { fontSize: "60px", color: colors.dark } } />
                    </Box>
                    <Typography sx={ styles.smallText} align="center" >
                        Гарантия 10 лет
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={ 6 } md={ 3 }>
                <Box textAlign="center" marginBottom="5px">
                    <PaymentOutlinedIcon sx={ { fontSize: "60px", color: colors.dark } } />
                </Box>
                <Typography sx={ styles.smallText } align="center">
                    Оплата для физ. и юр. лиц
                </Typography>
            </Grid>
            <Grid item xs={ 6 } md={ 3 }>
                <Box textAlign="center" marginBottom="5px">
                    <SquareFootOutlinedIcon sx={ { fontSize: "60px", color: colors.dark } } />
                </Box>
                <Typography sx={ styles.smallText } align="center">
                    Помощь в подборе
                </Typography>
            </Grid>
        </Grid>
    )
}

export default WhyBuy