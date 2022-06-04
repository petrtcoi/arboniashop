import { NextPage } from 'next'
import { useContext } from 'react'
import { Box, Typography } from '@mui/material'

import CartItemList from '../../components/pageCart/carItemList'
import CartOrderData from '../../components/pageCart/cartOrderData'
import EmptyCartMessage from '../../components/pageCart/emptyCartMessage'
import PageHeader from '../../components/pageHeader/pageHeader'


import getModelsData from '../../api_utils/getModelsData'
import getConnectionsData from '../../api_utils/getConnectionsData'
import getColorsData from '../../api_utils/getColorsData'
import useGetCartItemsExtended from '../../hooks/useGetCartItemsExtended'

import { ShoppingCartContext } from '../../contexts/shoppingCartContext'

import { ColorOrigin } from '../../models/colorOrigin.model'
import { ConnectionOrigin } from '../../models/connectionOrigin.model'
import { ModelOrigin } from '../../models/modelOrigin.model'

import global from '../../variables/global'


type CartPageProps = {
    models: ModelOrigin[]
    colors: ColorOrigin[]
    connections: ConnectionOrigin[]
}

const CartPage: NextPage<CartPageProps> = ({ models, colors, connections }) => {

    const { items } = useGetCartItemsExtended({ models, connections, colors })

    return (
        <Box sx={ { ...global.pagePadding } }>
            <PageHeader title={ "Коризна покупок" } />
            <Box paddingTop="20px">
                <Typography variant="h4" component="h1" gutterBottom textAlign="center" sx={ { textTransform: 'uppercase' } }>
                    Корзина
                </Typography>
                <Box paddingTop="30px">
                    <CartItemList
                        items={ items }
                    />
                </Box>


                { items.length === 0 ?
                    <EmptyCartMessage />
                    :
                    <Box marginTop="50px">
                        <CartOrderData
                            items={ items }
                        />
                    </Box>
                }
            </Box>
        </Box>
    )
}

export default CartPage


export async function getStaticProps(context: { params: { id: string } }) {
    const models: ModelOrigin[] = await getModelsData()
    const colors: ColorOrigin[] = await getColorsData()
    const connections: ConnectionOrigin[] = await getConnectionsData()



    return {
        props: {
            models,
            colors,
            connections
        }
    }
}