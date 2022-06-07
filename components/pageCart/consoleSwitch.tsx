import React, { useContext } from 'react'
import { Box, Typography, Grid } from '@mui/material'

import { ConsoleType } from '../../models/consoleType.model'

import { ShoppingCartContext } from '../../contexts/shoppingCartContext'

import * as styles from '../../styles/styles'


type ConsoleSwitchProps = {}

const boxStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid #e6e6e6"
}

const ConsoleSwitch: React.FC<ConsoleSwitchProps> = () => {

    const shoppingCartContext = useContext(ShoppingCartContext)
    const consoleType = shoppingCartContext.state.consoleType

    return (
        <Box>
            <Grid container spacing={ 2 }>
                <Grid item >
                    <Box
                        textAlign="center"

                        sx={ {
                            opacity: consoleType === 'w161h121' ? "1" : "0.4",
                            "&:hover": { cursor: 'pointer', opacity: "1" }
                        } }
                        onClick={ () => shoppingCartContext.dispatch({
                            type: 'SET_CONSOLE_TYPE',
                            value: 'w161h121'
                        })
                        }
                    >
                        <Box
                            marginX="auto"
                            sx={ {
                                ...boxStyle,
                                borderColor: consoleType === 'w161h121' ? "#000000" : "#e6e6e6",
                                backgroundImage: `url('/images/other/w161h121.jpg')`,
                                backgroundSize: "cover"
                            } }
                        />
                        <Typography sx={ { ...styles.smallTextThin } } >
                            W161 + DS<br />(кронштейн + упор)
                        </Typography>

                    </Box>
                </Grid>
                <Grid item >
                    <Box
                        textAlign="center"
                        sx={ {
                            opacity: consoleType === 'none' ? "1" : "0.4",
                            "&:hover": { cursor: 'pointer', opacity: "1" }
                        } }
                        onClick={ () => shoppingCartContext.dispatch({
                            type: 'SET_CONSOLE_TYPE',
                            value: 'none'
                        })
                        }
                    >

                        <Box
                            marginX="auto"
                            sx={ {
                                ...boxStyle,
                                borderColor: consoleType === 'none' ? "#000000" : "#e6e6e6",
                                backgroundImage: `url('/images/other/empty-wall.jpg')`,
                                backgroundSize: "cover"
                            } }


                        />
                        <Typography sx={ { ...styles.smallText } } >
                            Без кронштейнов
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

        </Box >
    )

}

export default ConsoleSwitch

