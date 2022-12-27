import React, { useState } from 'react'
import { Box, Button, Typography, Divider } from '@mui/material'

import { footerTextButtonUnderline } from '../../styles/stylesNavbarFooter'

import { ModelOrigin } from '../../models/modelOrigin.model'

import * as styles from '../../styles/styles'




type ModelMinPriceProps = {
    model: ModelOrigin
    minPrice: number
    setTabBuy: () => void
}



const ModelMinPrice: React.FC<ModelMinPriceProps> = ({ model, minPrice, setTabBuy }) => {

    const [hidePriceOffer, setHidePriceOffer] = useState<boolean>(true)
    const handlePriceOffer = () => {
        setHidePriceOffer(false)
    }

    return (
        <Box>
            <Box marginRight="10px">
                <Typography sx={ styles.standardText } display="inline">
                    Цена от:
                </Typography>
                <Typography display="inline" sx={ { fontSize: "30px", fontWeight: 600 } }>
                    <span itemProp="offers" itemScope itemType="https://schema.org/AggregateOffer">
                        &nbsp;<span itemProp="lowPrice">{ minPrice.toLocaleString() }</span> <span itemProp="priceCurrency">руб</span>
                    </span>
                </Typography>
            </Box>
            <Box display="inline" >
                <Button variant="contained" onClick={ () => setTabBuy() } href="#buy-section">Купить</Button>
            </Box>



            <Box marginTop="30px">
                <a onClick={ () => handlePriceOffer() }>
                    <Typography sx={ styles.smallTextGreenUnderline } >
                        <span style={ { textDecorationStyle: 'dotted' } }> Нашли дешевле? Сделаем дополнительную скидку</span>
                    </Typography>
                </a>
            </Box>

            { hidePriceOffer === false &&
                <Box marginTop="10px">
                    <Typography sx={ styles.smallText } >
                        Мы всегда стремимся дать выгодные цены для наших покупателей.
                        Если вы нашли радиаторы Arbonia по более низким ценам, то свяжитесь с нашими менеджерами
                        и предоставьте ссылку на соответствущую страницу или готовое коммерческое предложение.
                    </Typography>
                    <Box marginTop="10px">
                        <Divider variant="middle" />
                    </Box>
                </Box>
            }

        </Box>
    )

}

export default ModelMinPrice