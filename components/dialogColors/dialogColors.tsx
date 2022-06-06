import React from 'react'

import { AppBar, Grid, Dialog, DialogContent, Box, IconButton, Toolbar, Typography, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import CloseIcon from '@mui/icons-material/Close'

import SingleColor from '../singleColor/singleColor'

import { ColorOrigin } from '../../models/colorOrigin.model'

import * as styles from '../../styles/styles'


const COLOR_GROUPS = [
    'Серийный цвет', 'RAL Classic', 'Серия Metallic', 'Серия Terra', 'Серия Pastell', 'Серия Nature'
]



const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ ref } { ...props } />
})


type DialogColorsProps = {
    show: boolean
    colors: ColorOrigin[]
    colorCurrId: string
    closeDialog: () => void
    setColor: (colorId: string) => void
}


const DialogColors: React.FC<DialogColorsProps> = ({ show, colors, colorCurrId, closeDialog, setColor }) => {

    const handleSetColor = (colorId: string) => {
        setColor(colorId)
        closeDialog()
    }


    const renderColor = (color: any) => {
        return (
            <Grid item xs={ 6 } sm={ 4 } md={ 3 } key={ color.id }>
                <SingleColor
                    color={ color }
                    highlighted={ colorCurrId === color.id }
                    handleClick={ handleSetColor }
                />
            </Grid>
        )
    }


    return (
        <Box>
            <Dialog
                onClose={ closeDialog }
                open={ show }
                fullScreen
                TransitionComponent={ Transition }
            >
                <AppBar sx={ { position: 'relative' } } color="transparent">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={ closeDialog }
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={ { ml: 2, flex: 1 } } variant="h6" component="div">
                            Палитра цветов Arbonia
                        </Typography>
                    </Toolbar>
                </AppBar>
                <DialogContent>
                    <Box marginTop="20px" >
                        <Typography sx={ { ...styles.smallText } }>
                            По техническим причинам не является возможным абсолютно точно передать цвета.
                        </Typography>
                    </Box>

                    {
                        COLOR_GROUPS.map(group => {
                            return (
                                <Box marginTop={ "50px" } key={group}>
                                    <Box marginBottom="20px">
                                        <Typography sx={ { color: "#333333", fontSize: "14px", textTransform: "uppercase" } } display="inline">
                                            { group }
                                        </Typography>
                                    </Box>
                                    <Grid container spacing={ 2 }>
                                        { colors
                                            .filter(x => x.group === group)
                                            .map((color) => {
                                                return renderColor(color)
                                            }) }
                                    </Grid>
                                </Box>
                            )

                        })
                    }

                    <Box marginTop="30px" />

                </DialogContent>

            </Dialog>
        </Box>

    )
}

export default DialogColors