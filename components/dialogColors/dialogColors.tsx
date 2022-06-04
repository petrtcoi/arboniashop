import React from 'react'

import { AppBar, Grid, Dialog, DialogContent, Box, IconButton, Toolbar, Typography, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import CloseIcon from '@mui/icons-material/Close'

import SingleColor from '../singleColor/singleColor'

import { ColorOrigin } from '../../models/colorOrigin.model'

import * as styles from '../../styles/styles'



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
            <Grid item xs={ 6 } sm={ 4 } md={ 3 } key={ color.name }>
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
                            Палитра цветов Zehnder
                        </Typography>
                    </Toolbar>
                </AppBar>
                <DialogContent>
                    <Box marginTop="20px" marginBottom="40px">
                        <Typography sx={ { ...styles.smallText } }>
                            Радиаторы Zehnder Charleston могут быть окрашены во все цвета RAL classic и NCS цвета, дополнительно могут быть использованы специальные цвета из палитры Zehnder.
                        </Typography>
                    </Box>
                    <Grid container spacing={ 2 }>
                        { colors.filter(x => !x.type).map((color) => {
                            return renderColor(color)
                        }) }
                    </Grid>
                    <Box marginTop="60px" marginBottom="20px">
                        <Typography sx={ { color: "#000000", fontSize: "16px" } } display="inline">
                            CORE
                        </Typography>
                        &nbsp;&nbsp;
                        <Typography sx={ { ...styles.smallText } } display="inline">
                            Кат.1 наценка 20%
                        </Typography>
                    </Box>
                    <Box marginBottom="20px">
                        <Typography sx={ { color: "#333333", fontSize: "14px" } } display="inline">
                            WARM COLOURS
                        </Typography>
                    </Box>
                    <Grid container spacing={ 2 }>
                        { colors
                            .filter(x => x.type === 'Core')
                            .filter(x => x.group === 'Warm Colours')
                            .map((color) => {
                                return renderColor(color)
                            }) }
                    </Grid>
                    <Box marginBottom="20px" marginTop="60px">
                        <Typography sx={ { color: "#333333", fontSize: "14px" } } display="inline">
                            COOL COLOURS
                        </Typography>
                    </Box>
                    <Grid container spacing={ 2 }>
                        { colors
                            .filter(x => x.type === 'Core')
                            .filter(x => x.group === 'Cool Colours')
                            .map((color) => {
                                return renderColor(color)
                            }) }
                    </Grid>
                    <Box marginTop="60px" marginBottom="20px">
                        <Typography sx={ { color: "#000000", fontSize: "16px" } } display="inline">
                            TREND
                        </Typography>
                        &nbsp;&nbsp;
                        <Typography sx={ { ...styles.smallText } } display="inline">
                            Кат.2 наценка 30%
                        </Typography>
                    </Box>
                    <Box marginBottom="20px">
                        <Typography sx={ { color: "#333333", fontSize: "14px" } } display="inline">
                            WARM COLOURS
                        </Typography>
                    </Box>
                    <Grid container spacing={ 2 }>
                        { colors
                            .filter(x => x.type === 'Trend')
                            .filter(x => x.group === 'Warm Colours')
                            .map((color) => {
                                return renderColor(color)
                            }) }
                    </Grid>
                    <Box marginBottom="20px" marginTop="60px">
                        <Typography sx={ { color: "#333333", fontSize: "14px" } } display="inline">
                            COOL COLOURS
                        </Typography>
                    </Box>
                    <Grid container spacing={ 2 }>
                        { colors
                            .filter(x => x.type === 'Trend')
                            .filter(x => x.group === 'Cool Colours')
                            .map((color) => {
                                return renderColor(color)
                            }) }
                    </Grid>
                </DialogContent>

            </Dialog>
        </Box>

    )
}

export default DialogColors