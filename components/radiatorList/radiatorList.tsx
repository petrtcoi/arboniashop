import { Box, Table, Hidden, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

import { NextPage } from "next"

import RadiatorListRow from './radiatorListRow'

import { ModelOrigin } from '../../models/modelOrigin.model'
import { ColorOrigin } from '../../models/colorOrigin.model'
import { ConnectionOrigin } from '../../models/connectionOrigin.model'

import * as styles from '../../styles/styles'
import calcRadiatorCost from '../../utils/calcRadiatorCost'




type RadiatorListProps = {
    model: ModelOrigin
    color: ColorOrigin
    connection: ConnectionOrigin
    currencyRate: number
}

const RadiatorList: NextPage<RadiatorListProps> = ({ model, color, connection, currencyRate }) => {

    const sections: number[] = model.inStockSections ? model.inStockSections.split(',').map(x => parseInt(x)) : []

    return (
        <Box>
            <TableContainer>
                <Table
                    sx={ { maxWidth: "1200px" } }
                    size="small"
                    padding="none"
                >

                    <TableHead>
                        <TableRow sx={ { backgroundColor: "#e6e6e6" } }>

                            <Hidden smDown>

                                <TableCell align="left" sx={ styles.smallTextBold } >
                                    <Box padding="10px" borderBottom="1px solid #333333">
                                        Артикул
                                    </Box>
                                </TableCell>

                            </Hidden>
                            <TableCell sx={ styles.smallTextBold }>
                                <Box padding="10px" borderBottom="1px solid #333333">
                                    Радиатор
                                </Box>
                            </TableCell>
                            <Hidden mdDown>
                                <TableCell align="right" sx={ styles.smallTextBold } >
                                    <Box padding="10px" borderBottom="1px solid #333333">
                                        Длина, мм
                                    </Box>
                                </TableCell>
                            </Hidden>
                            <Hidden mdDown>
                                <TableCell align="right" sx={ styles.smallTextBold } >
                                    <Box padding="10px" borderBottom="1px solid #333333">
                                        Мощность, Вт&#42;
                                    </Box>
                                </TableCell>
                            </Hidden>
                            <TableCell align="right" sx={ styles.smallTextBold }>
                                <Box padding="10px" borderBottom="1px solid #333333">
                                    Цена&#42;&#42;
                                </Box>
                            </TableCell>
                            <TableCell align="right" sx={ styles.smallTextBold }>
                                <Box padding="10px" borderBottom="1px solid #333333">
                                    &nbsp;
                                </Box>
                            </TableCell>

                        </TableRow>
                    </TableHead>


                    <TableBody >
                        { sections.map(sectionQnty => {

                            const { price } = calcRadiatorCost({
                                model,
                                color,
                                connection,
                                currencyRate,
                                sectionQnty
                            })

                            return (
                                <RadiatorListRow
                                    key={ sectionQnty }
                                    model={ model }
                                    color={ color }
                                    connection={ connection }
                                    sectionQnty={ sectionQnty }
                                    price={ price.noConsole }
                                />
                            )
                        }) }

                    </TableBody>
                </Table>
            </TableContainer >
            <Box marginTop="10px">
                <Typography sx={ styles.smallTextThin }>
                    &#42;Мощность указана при (ΔT=60°). &#42;&#42;Цена указана в рублях (пересчитывается по курсу ЦБ Евро)
                </Typography>
            </Box>
        </Box>
    )

}

export default RadiatorList