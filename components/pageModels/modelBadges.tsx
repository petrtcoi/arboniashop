import React from 'react'
import { Box, Chip } from '@mui/material'

import colors from '../../variables/colors'

type ModelBadgesProps = {
    badgesString: string
}


const ModelBadges: React.FC<ModelBadgesProps> = ({ badgesString }) => {
    const badges = badgesString.split(',').map(x => x.trim())

    return (
        <Box> 
            { badges.map((badge, i) => {
                return (
                    <Chip
                        key={ i }
                        label={ badge }
                        size="small"
                        sx={ {fontSize: "10px", backgroundColor: colors.dark, color: "white", marginRight: "10px", borderRadius: "5px" } }
                    />
                )
            }) }
        </Box>
    )


}


export default ModelBadges