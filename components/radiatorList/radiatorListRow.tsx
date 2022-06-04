import { NextPage } from 'next'
import { TableCell, TableRow, Hidden, Typography, Box } from "@mui/material"
import Link from 'next/link'

import AddToCartButton from '../addToCartButton/addToCartButton'

import getRadiatorData from '../../utils/getRadiatorData'

import { ModelOrigin } from "../../models/modelOrigin.model"
import { ConnectionOrigin } from '../../models/connectionOrigin.model'
import { ColorOrigin } from '../../models/colorOrigin.model'

import * as styles from '../../styles/styles'






type RadiatorListRowProps = {
    model: ModelOrigin
    color: ColorOrigin
    connection: ConnectionOrigin
    sectionQnty: number
    price: number
}

const RadiatorListRow: NextPage<RadiatorListRowProps> = ({ model, color, connection, sectionQnty, price }) => {


    const { titleString, skuString, lengthString, dt60String, priceString } = getRadiatorData({ model, color, connection, sectionQnty, price })


    return (
        <TableRow
            sx={ { "&:hover": { backgroundColor: '#eeeeee' } } }
        >
            <Hidden smDown>
                <TableCell align="left" sx={ styles.smallText } >{ skuString }</TableCell>
            </Hidden>
            <TableCell component="th" scope="row" >
                <Box padding={ { xs: "5px", sm: "5px", md: "0px" } }>
                    <Typography sx={ { ...styles.smallText } }>
                        <Link href={ `/models/${model.id}/${sectionQnty}` }>
                            <a style={ { textDecoration: "none" } }>
                                <Typography sx={ { ...styles.smallTextRedLink } } component="span">
                                    { titleString }
                                </Typography>
                            </a>
                        </Link>
                    </Typography>
                    {/* <Typography sx={ styles.smallTextRed }></Typography> */}
                    <Hidden mdUp>
                        <Typography sx={ styles.smallTextThin } component="span">
                            { lengthString } мм, { dt60String } Вт&#42;
                        </Typography>
                    </Hidden>
                </Box>
            </TableCell>
            <Hidden mdDown>
                <TableCell component="th" scope="row" sx={ styles.smallText } align="center">
                    { lengthString }
                </TableCell>
            </Hidden>
            <Hidden mdDown>
                <TableCell component="th" scope="row" sx={ styles.smallText } align="center">
                    { dt60String }
                </TableCell>
            </Hidden>
            <TableCell component="th" scope="row" sx={ styles.smallText } align="right">
                { priceString }
            </TableCell>
            <TableCell component="th" scope="row" sx={ styles.smallText } align="center">
                <Box paddingLeft="20px">
                    <AddToCartButton
                        model={ model }
                        colorId={ color.id }
                        connectionId={ connection.id }
                        sectionQnty={ sectionQnty }
                        qnty={ 1 }
                        buttonSize={ "small" }
                        buttonType={ "text" }
                        buttonColor={"dark"}
                    />
                </Box>
            </TableCell>
        </TableRow>
    )
}

export default RadiatorListRow