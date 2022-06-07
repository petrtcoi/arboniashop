import React, { useEffect, useState, useContext } from 'react'

import { Box, Table, TableBody, TableCell, TableContainer, Typography, TableHead, TableRow } from "@mui/material"

import CartItemRow from './cartItemRow'
import ConsoleList from './consoleList'
import ConsoleSwitch from './consoleSwitch'

import getCartTotal from '../../utils/getCartTotal'

import { CartItemExtended } from '../../models/cartItemExtended.model'

import { ShoppingCartContext } from '../../contexts/shoppingCartContext'

import * as styles from './../../styles/styles'







type CartItemListProps = {
    items: CartItemExtended[]
    showSummary?: boolean
}

const CartItemList: React.FC<CartItemListProps> = ({ items, showSummary = true }) => {

    const shoppingCartContext = useContext(ShoppingCartContext)
    const consoleType = shoppingCartContext.state.consoleType

    const [total, setTotal] = useState<number>(0)
    useEffect(() => {
        setTotal(getCartTotal({ items, consoleType }))
    }, [items, consoleType])


    return (
        <Box>
            <TableContainer>
                <Table
                    sx={ { maxWidth: "1000px", minWidth: "500px" } }
                    size="small"
                >

                    <TableHead>
                        <TableRow>
                            <TableCell sx={ styles.smallTextBold }>Товар</TableCell>
                            <TableCell align="right" sx={ styles.smallTextBold } >Цена</TableCell>
                            <TableCell align="right" sx={ styles.smallTextBold }>Кол-во</TableCell>
                            <TableCell align="right" sx={ styles.smallTextBold } >Сумма</TableCell>
                            <TableCell align="right" sx={ { minWidth: "100px" } }></TableCell>
                        </TableRow>
                    </TableHead>


                    <TableBody >
                        { items.map((item, index) => {
                            return (
                                <CartItemRow
                                    key={ index }
                                    item={ item }
                                />
                            )
                        }) }
                        { consoleType !== 'none' &&
                            <ConsoleList
                                items={ items }
                            />

                        }

                        { showSummary === true &&
                            <TableRow >
                                <TableCell align="right" colSpan={ 3 } sx={ { ...styles.smallTextBold, borderBottom: 0 } } >Итого</TableCell>
                                <TableCell align="right" colSpan={ 1 } sx={ { ...styles.smallTextBold, borderBottom: 0 } }>{ total.toLocaleString() }</TableCell>
                                {/* <TableCell align="right" sx={ { ...styles.smallTextBold, borderBottom: 0 } }></TableCell>
                                <TableCell sx={ { borderBottom: 0 } }></TableCell> */}
                            </TableRow>
                        }

                    </TableBody>
                </Table>
            </TableContainer >
            <Box marginTop="10px">
                <Typography sx={ styles.smallTextThin }>
                    &#42;Цена может не соответствовать сумме из-за округления
                </Typography>
            </Box>
            <Box marginTop="60px">
                <Typography sx={ { ...styles.standardText } }>
                    Включать кронштейны в спецификацию:
                </Typography>
                <Box marginTop="20px" />
                <ConsoleSwitch />
                <Box marginTop="20px" />
                <Typography sx={ { ...styles.smallText } }>
                    *Автоматический подбор кронштейнов явялется приблизительным.<br/>Наличие конкретных кронштейнов и их необходимое количество уточнит<br/>продавец при согласовании заказа.
                </Typography>
            </Box>
        </Box>
    )
}

export default CartItemList

