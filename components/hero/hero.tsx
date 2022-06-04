import React from 'react'
import { Box, Typography } from '@mui/material'

import * as styles from '../../styles/styles'

type HeroProps = {
    imgPath: string
    header: string
    subheader?: string
}

const Hero: React.FC<HeroProps> = ({ imgPath, header, subheader }) => {

    return (
        <Box
            position="relative"
            width={ "100%" }
            height={ "400px" }
            sx={ {
                backgroundImage: `url("${imgPath}")`,
                backgroundSize: "cover",
                textShadow: "0px 0px 5px rgb(0 0 0 / 60%"
            } }
        >
            <Box position="absolute" sx={{bottom: "40px", left: "20px"}} paddingRight="20px">
                <Typography sx={ { ...styles.standardText, fontSize: "40px", lineHeight: "42px", color: "#ffffff", textShadow: "1px 1px 10px black" } } component="h1">
                    { header }
                </Typography>
                <Typography sx={ { ...styles.smallText, color: "#ffffff", textShadow: "1px 1px 10px black" } } component="h2">
                    { subheader }
                </Typography>
            </Box>
        </Box>
    )
}

export default Hero