import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'

import CartItemList from '../pageCart/carItemList'

import useGetCartItemsExtended from '../../hooks/useGetCartItemsExtended'

import { ColorOrigin } from '../../models/colorOrigin.model'
import { ConnectionOrigin } from '../../models/connectionOrigin.model'
import { ModelOrigin } from '../../models/modelOrigin.model'

import * as styles from '../../styles/styles'



type RadiatorInCartListProps = {
    models: ModelOrigin[]
    colors: ColorOrigin[]
    connections: ConnectionOrigin[]
    modelCurrentId?: string
}

const RadiatorInCartList: React.FC<RadiatorInCartListProps> = ({ models, colors, connections, modelCurrentId }) => {

    const { items } = useGetCartItemsExtended({ models, colors, connections })
    // const [modelItems, setModelItems] = useState<CartItemExtended[]>([])
    // useEffect(() => {
    //     setModelItems(itemsInCart.filter(x => modelCurrentId ? x.modelId === modelCurrentId : true))
    // }, [itemsInCart])

    if (items.length === 0) return <></>

    return (
        <Box>
            <Box marginTop="60px" marginBottom="20px">
                <Typography variant="h4" component="h3">
                    Ваша спецификация
                </Typography>
            </Box>
            <CartItemList
                items={ items }
                showSummary={ true }
            />

        </Box>
    )
}

export default RadiatorInCartList