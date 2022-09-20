import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'


import { ConnectionOrigin } from '../../models/connectionOrigin.model'

import * as styles from '../../styles/styles'

type SingleConnectionProps = {
    connection: ConnectionOrigin
    highlighted: boolean
    handleClick: (connId: string) => void
}


const SingleConnection: React.FC<SingleConnectionProps> = ({ connection, highlighted = false, handleClick }) => {

    return (
        <Box
            sx={ { ...styles.textLinkBlock, color: highlighted ? 'red' : '' } }
            onClick={ () => handleClick(connection.id ? connection.id : 'none') }
        >
            <Box alignContent={ "center" }>
                <Image
                    src={ `/images/connections/${connection.img}` }
                    width="150px"
                    height="100px"
                    alt={ `Подключение радиатора Arbonia: ${connection.name}` }
                />
            </Box>
            <Box marginTop={ "-10px" }>
                <Typography sx={ { ...styles.smallText, color: 'inherit' } }>
                    { connection.description }
                </Typography>
                <Typography sx={ { ...styles.smallTextThin, color: 'inherit', } }>
                    { connection.cost }  €&#42;
                </Typography>
            </Box>
        </Box>
    )
}


export default SingleConnection