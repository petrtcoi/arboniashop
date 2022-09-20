import { Box, Grid } from '@mui/material'
import React from 'react'

import global from '../../variables/global'


type ImagesOtherListProps = {
    imagesString: string
}

const ImagesOtherList: React.FC<ImagesOtherListProps> = ({ imagesString }) => {

    const imagesPath: string[] = imagesString.split(',').map(x => {
        return global.imagesModelPath + x.trim()
    })
    return (
        <Grid container spacing={ 2 }>
            { imagesPath.map((imagePath) => {
                return (
                    <Grid
                        key={ imagePath }
                        item
                        sm={ 12 }
                        md={ 6 }
                        lg={ 4 }
                    >
                        <Box
                            marginTop={ "20px" }
                            padding={ { sm: "20px", md: "0px" } }
                            textAlign={ { sm: "center", md: "left" } }
                        >
                            <img
                                src={ imagePath }
                                width="100%"
                                height="auto"
                                alt={ `Трубчатый радиатор Arbonia` }
                            />
                        </Box>
                    </Grid>
                )
            }) }

        </Grid>
    )

}

export default ImagesOtherList