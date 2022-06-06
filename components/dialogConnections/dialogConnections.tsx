import React from 'react'
import { AppBar, Grid, Dialog, DialogContent, Box, IconButton, Toolbar, Typography, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import CloseIcon from '@mui/icons-material/Close'

import SingleConnection from '../singleConnection/singleConnection'

import { ConnectionOrigin } from '../../models/connectionOrigin.model'

import * as styles from '../../styles/styles'




const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ ref } { ...props } />
})




type DialogConnectionsProps = {
    show: boolean
    connections: ConnectionOrigin[]
    connectionCurrId: string
    closeDialog: () => void
    setConnection: (colorId: string) => void
}

const DialogConnections: React.FC<DialogConnectionsProps> = ({ show, connections, connectionCurrId, closeDialog, setConnection }) => {

    const handleSetConnection = (connId: string) => {
        setConnection(connId)
        closeDialog()
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
                            Варианты подключений Arbonia
                        </Typography>
                    </Toolbar>
                </AppBar>
                <DialogContent>
                    <Grid container spacing={ 3 }>
                        {
                            connections.map((connection) => {
                                return (
                                    <Grid item xs={ 6 } sm={ 4 } md={ 3 } key={ connection.id }>
                                        <SingleConnection 
                                            connection={connection}
                                            highlighted={connectionCurrId === connection.id}
                                            handleClick={handleSetConnection}
                                        />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    <Box marginY="20px">
                        <Typography sx={ { ...styles.smallTextThin } }>
                            &#42;Цены за подключения указаны в Евро. Оплата по курсу ЦБ +2%. Данные цены носят информативный характер. Пожалуйста, уточняйте акутальную стоимость у продавцов.
                        </Typography>
                    </Box>
                </DialogContent>

            </Dialog>
        </Box>

    )
}

export default DialogConnections