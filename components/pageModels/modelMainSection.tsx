import React, { useContext } from 'react'
import { Box, Grid, Typography } from '@mui/material'

import ModelBadges from './modelBadges'
import ModelMinPrice from './modelMinPrice'
import FeaturesTable from './featuresTable'

import calcRadiatorCost from '../../utils/calcRadiatorCost'

import { ModelOrigin } from '../../models/modelOrigin.model'
import { ConnectionOrigin } from '../../models/connectionOrigin.model'
import { ColorOrigin } from '../../models/colorOrigin.model'

import { CurrencyContext } from '../../contexts/currencyContext'

import global from '../../variables/global'
import * as styles from '../../styles/styles'




type ModelMainSectionProps = {
    modelCurr: ModelOrigin
    colorCurr: ColorOrigin
    connectionCurr: ConnectionOrigin

    modelTitle: string
    colorTitle: string
    connectionTitle: string

    handleBuyButton: () => void

}


const ModelMainSection: React.FC<ModelMainSectionProps> = ({
    modelCurr, colorCurr, connectionCurr,
    modelTitle, colorTitle, connectionTitle,
    handleBuyButton
}) => {

    const imagePrimaryPath = global.imagesModelPath + modelCurr.imagePrimary
    const currencyContext = useContext(CurrencyContext)

    const { price } = calcRadiatorCost({
        model: modelCurr,
        color: colorCurr,
        connection: connectionCurr,
        sectionQnty: modelCurr.inStockSections ? +modelCurr.inStockSections.split(',')[0] : undefined,
        currencyRate: currencyContext.rateEuro
    })
    const minPrice = price.noConsole


    return (
        <Box>
            <Grid container spacing={ 2 }>


                {/* ИЗОБРАЖЕНИЕ */ }
                <Grid item xs={ 12 } sm={ 6 }>
                    { modelCurr.badgesString &&
                        <Box>
                            <ModelBadges
                                badgesString={ modelCurr.badgesString }
                            />
                        </Box>
                    }
                    <Box textAlign="center" marginTop="20px">
                        <img
                            width="90%"
                            src={ imagePrimaryPath }
                            itemProp="image"
                        />
                    </Box>
                    {/* <Hidden mdDown>
                        <Box marginTop="20px">
                            <WhyBuy />
                        </Box>
                    </Hidden> */}
                </Grid>

                <Grid item xs={ 12 } sm={ 6 }>
                    <Box marginTop="30px" marginLeft="20px">

                        {/* БЛОК ЦЕНЫ */ }
                        <Box marginBottom="20px">
                            <ModelMinPrice
                                model={ modelCurr }
                                minPrice={ minPrice }
                                setTabBuy={ handleBuyButton }
                            />
                        </Box>

                        {/* БЛОК ХАРАКТЕРИСТИК */ }
                        <FeaturesTable
                            model={ modelCurr }
                            modelTitle={ modelTitle }
                            colorTitle={ colorTitle }
                            connectionTitle={ connectionTitle }
                        />
                    </Box>
                </Grid>
            </Grid>
            { modelCurr.description &&
                <Box marginTop="40px" marginLeft="20px" itemProp="description">
                    <Typography sx={ styles.standardText }>
                        { modelCurr.description }
                    </Typography>
                </Box>
            }
        </Box>
    )
}

export default ModelMainSection