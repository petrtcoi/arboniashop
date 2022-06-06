import React, { useState, useEffect, useContext } from 'react'

import { Box, Grid, Typography } from '@mui/material'
import NativeSelect from '@mui/material/NativeSelect'

import AddToCartButton from '../addToCartButton/addToCartButton'
import DialogColors from '../dialogColors/dialogColors'
import SingleColor from '../singleColor/singleColor'
import DialogConnections from '../dialogConnections/dialogConnections'
import SingleConnection from '../singleConnection/singleConnection'


import range from '../../utils/range'
import calcRadiatorCost from '../../utils/calcRadiatorCost'

import { CurrencyContext } from '../../contexts/currencyContext'

import { ColorOrigin } from '../../models/colorOrigin.model'
import { ModelOrigin } from '../../models/modelOrigin.model'
import { ConnectionOrigin } from '../../models/connectionOrigin.model'

import global from '../../variables/global'
import * as styles from '../../styles/styles'




type RadiatorAllOptionsProps = {
    modelInit: ModelOrigin
    colorInit: ColorOrigin
    connectionInit: ConnectionOrigin
    modelFreeze?: boolean

    models: ModelOrigin[]
    colors: ColorOrigin[]
    connections: ConnectionOrigin[]
}


const MODELS_GROUPS = [
    { firstChar: '2', title: '2-трубчатые (65 мм)' },
    { firstChar: '3', title: '3-трубчатые (105 мм)' },
    { firstChar: '4', title: '4-трубчатые (145 мм)' },
    { firstChar: '5', title: '5-трубчатые (185 мм)' },
    { firstChar: '6', title: '6-трубчатые (225 мм)' }
]


const RadiatorAllOptions: React.FC<RadiatorAllOptionsProps> = ({ modelInit, colorInit, connectionInit, modelFreeze = true, models, connections, colors }) => {

    const SECTIONS = range(global.sectionsDefaultMin, modelInit.sectionsMax || global.sectionsDefaultMax)

    const { rateEuro } = useContext(CurrencyContext)
    const [colorCurr, setColorCurr] = useState<ColorOrigin>(colorInit)
    const setColorById = (colorId: string) => {
        const newColor = colors.find(x => x.id === colorId)
        if (newColor) setColorCurr(newColor)
    }


    const [connectionCurr, setConnectionCurr] = useState<ConnectionOrigin>(connectionInit)
    const setConnectionById = (connId: string) => {
        const newConnection = connections.find(x => x.id === connId)
        if (newConnection) setConnectionCurr(newConnection)
    }
 

    const [modelCurr, setModelCurr] = useState<ModelOrigin>(modelInit)
    const handleChangeModel = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newModel = models.find(x => x.id === e.target.value)
        if (newModel) setModelCurr(newModel)
    }


    const [sectionsCurr, setSectionsCurr] = useState<number>(SECTIONS[0])
    const [radiatorTitle, setRadiatorTitle] = useState<string>('')
    useEffect(() => {
        const sectionQntyString: string = sectionsCurr < 10 ? '0' + sectionsCurr.toString() : sectionsCurr.toString()
        setRadiatorTitle(`Arbonia Column ${modelCurr.nameShort}-${sectionQntyString}, ${colorCurr.name}, ${connectionCurr.name}`)
    }, [modelCurr, colorCurr, connectionCurr, sectionsCurr])



    const [radiatorCost, setRadiatorCost] = useState<number>(0)
    useEffect(() => {
        setRadiatorCost(calcRadiatorCost({
            model: modelCurr,
            color: colorCurr,
            connection: connectionCurr,
            sectionQnty: sectionsCurr,
            currencyRate: rateEuro
        }).price.noConsole)
    }, [colorCurr, connectionCurr, sectionsCurr, rateEuro, modelCurr])



    const [showColors, setShowColors] = useState<boolean>(false)
    const toggleShowColors = () => { setShowColors(!showColors) }

    const [showConnections, setShowConnections] = useState<boolean>(false)
    const toggleShowConnections = () => { setShowConnections(!showConnections) }


    return (
        <Box>
            <DialogColors
                closeDialog={ toggleShowColors }
                setColor={ setColorById }
                show={ showColors }
                colors={ colors }
                colorCurrId={ colorCurr.id }
            />
            <DialogConnections
                closeDialog={ toggleShowConnections }
                connections={ connections }
                setConnection={ setConnectionById }
                show={ showConnections }
                connectionCurrId={ connectionCurr.id }
            />
            { modelFreeze && modelCurr &&
                <Box marginY="20px">

                    <Typography sx={ styles.standardText }>
                        Выберете интересующие вас характеристики для модели радиатора { modelCurr.name }.
                    </Typography>
                    <Typography sx={ styles.standardText }>
                        Если вам нужна помощь в подборе радиаторов,то мы с радостью проконсультируем и поможем с выбором наиболее подходящих моделей
                    </Typography>
                </Box>
            }
            <Box sx={ { border: "1px solid black", borderRadius: "10px" } } padding="30px" borderRadius="5px">
                <Grid container spacing={ 2 }>

                    {/* ВЫБОР МОДЕЛИ */ }
                    <Grid item xs={ 12 } sm={ 2 } textAlign={ { xs: "left", md: "center" } }>
                        <Box marginTop="10px" />
                        <Typography sx={ styles.smallTextBold }>
                            модель
                        </Typography>
                        <Box marginTop="10px" />
                        { modelFreeze ?
                            <Typography variant="h5" component="span" color="primary" >
                                { modelCurr.nameShort }
                            </Typography>
                            :
                            <NativeSelect
                                value={ modelCurr.id }
                                onChange={ handleChangeModel }
                            >

                                {
                                    MODELS_GROUPS.map(group => {
                                        return (
                                            <optgroup label={ group.title } key={ group.title }>
                                                { models
                                                    .filter(x => !x.inStock)
                                                    .filter((model: ModelOrigin) => (model.id[0] === group.firstChar))
                                                    .map(model => <option key={ model.id } value={ model.id }>{ model.nameShort }</option>) }
                                            </optgroup>
                                        )
                                    })
                                }

                            </NativeSelect>
                        }
                    </Grid>

                    <Grid item xs={ 12 } sm={ 2 } textAlign={ { xs: "left", md: "center" } }>
                        <Box marginTop="10px" />
                        <Typography sx={ styles.smallTextBold } >
                            число секций
                        </Typography>
                        <Box marginTop="10px" />
                        <NativeSelect
                            value={ sectionsCurr }
                            onChange={ (e: React.ChangeEvent<HTMLSelectElement>) => setSectionsCurr(+e.target.value) }
                        >
                            { SECTIONS.map(sec => <option key={ sec } value={ sec }>{ sec }</option>) }
                        </NativeSelect>
                    </Grid>



                    <Grid item xs={ 12 } md={ 4 } textAlign={ { xs: "left", md: "center" } }>
                        <Box marginTop="10px" />
                        <Typography sx={ styles.smallTextBold } >
                            цвет
                        </Typography>
                        <Box marginTop="10px" />
                        <SingleColor
                            color={ colorCurr }
                            highlighted={ false }
                            handleClick={ (_colorId) => toggleShowColors() }
                        />
                    </Grid>

                    <Grid item xs={ 12 } sm={ 4 } textAlign={ { xs: "left", md: "center" } }>
                        <Box marginTop="10px" />
                        <Typography sx={ styles.smallTextBold } >
                            подключение
                        </Typography>
                        <Box marginTop="10px" />
                        <SingleConnection
                            connection={ connectionCurr }
                            highlighted={ false }
                            handleClick={ (_connId) => toggleShowConnections() }
                        />

                    </Grid>




                    {/* БЛОК ИНФОРМАЦИИ О МОДЕЛИ */ }
                    <Grid item xs={ 12 } >
                        <Box marginTop="50px">
                            {/* <Box>
                                <Typography sx={ styles.smallTextBold } textAlign="center">
                                    радиатор
                                </Typography>
                            </Box> */}
                            <Box marginTop="20px">
                                <Typography sx={ { ...styles.standardText, fontSize: "20px", fontWeight: 600 } } >
                                    { radiatorTitle }
                                </Typography>
                            </Box>

                            <Box marginTop="10px" paddingLeft="10px">
                                <Typography sx={ styles.standardTextThin } >
                                    высота: { modelCurr.height } мм
                                </Typography>
                                <Typography sx={ styles.standardTextThin } >
                                    глубина: { modelCurr.width } мм
                                </Typography>
                                <Typography sx={ styles.standardTextThin } >
                                    длина: { (+modelCurr.lengthSection * sectionsCurr + 26) } мм
                                </Typography>
                                <Typography sx={ styles.standardTextThin } >
                                    мощность (ΔT=50°C): { Math.floor(+modelCurr.dt50 * sectionsCurr) } Вт
                                </Typography>
                                <Typography sx={ styles.standardTextThin } >
                                    мощность (ΔT=60°C): { Math.floor(+modelCurr.dt60 * sectionsCurr) } Вт
                                </Typography>
                            </Box>
                            <Box marginTop="40px">
                                <Typography sx={ styles.standardTextThin } display="inline">
                                    цена:
                                </Typography>
                                <Typography display="inline" sx={ { fontSize: "20px", fontWeight: 600 } } >
                                    &nbsp;{ radiatorCost.toLocaleString() } руб
                                </Typography>
                                <Box marginLeft="20px" display="inline-block">
                                    <AddToCartButton
                                        model={ modelCurr }
                                        colorId={ colorCurr.id }
                                        connectionId={ connectionCurr.id }
                                        sectionQnty={ sectionsCurr }
                                        qnty={ 1 }
                                        buttonSize={ "small" }
                                        buttonColor={ "success" }

                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    )
}

export default RadiatorAllOptions