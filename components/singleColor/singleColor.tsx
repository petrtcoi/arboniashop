import { Box, Typography } from '@mui/material'
import React from 'react'

import { ColorOrigin } from '../../models/colorOrigin.model'

import * as styles from '../../styles/styles'


type SingleColorProps = {
    color: ColorOrigin
    highlighted: boolean
    handleClick: (colorId: string) => void
}

const SingleColor: React.FC<SingleColorProps> = ({ color, highlighted = false, handleClick }) => {
    return (
        <Box
            sx={ { ...styles.textLinkBlock, color: highlighted ? 'red' : '' } }
            onClick={ () => handleClick(color.id ? color.id : 'none') }
        >
            <Box>
                <img
                    src={ `/images/colors/${color.img}` }
                    width="150px"
                    height="100px"
                    style={ { borderRadius: "5px", border: "1px solid black" } }
                />
            </Box>
            <Box>
                <Typography sx={ { ...styles.smallText, color: 'inherit' } }>
                    { color.name }
                </Typography>
                <Typography sx={ { ...styles.smallTextThin, fontSize: "10px", color: 'inherit' } }>
                    Коэффициент { color.baseRate }
                </Typography>
            </Box>
        </Box>
    )

}

export default SingleColor