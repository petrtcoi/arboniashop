import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'

import * as styles from '../../styles/styles'

type DownloadsBlockProps = {}

const DownloadsBlock: React.FC<DownloadsBlockProps> = () => {

    const getPath = (file: string) => '/docs/' + file

    return (
        <Grid container spacing={ 2 }>
            <Grid item sm={ 12 } md={ 6 } lg={ 4 } marginTop={ "15px" }>
                <Box mr={ 1 } display="inline" >
                    <ArticleOutlinedIcon
                        color="secondary"
                        sx={ { fontSize: "16px", marginRight: "10px", verticalAlign: "middle" } }
                    />
                    <a
                        href={ getPath('doc.pdf') }
                        style={ { textDecoration: 'none' } }
                        download
                    >
                        <Typography sx={ styles.smallTextDotted } display="inline">
                            Каталог Arbonia
                        </Typography>
                    </a>
                </Box>
            </Grid>
            <Grid item sm={ 12 } md={ 6 } lg={ 4 } marginTop={ "15px" }>
                <Box mr={ 1 } display="inline" >
                    <ArticleOutlinedIcon
                        color="secondary"
                        sx={ { fontSize: "16px", marginRight: "10px", verticalAlign: "middle" } }
                    />

                    <a
                        href={ getPath('cert.pdf') }
                        download
                        style={ { textDecoration: 'none' } }
                    >
                        <Typography sx={ styles.smallTextDotted } display="inline">
                            Сертификат соответствия
                        </Typography>
                    </a>

                </Box>
            </Grid>
            <Grid item sm={ 12 } md={ 6 } lg={ 4 } marginTop={ "15px" }>
                <Box mr={ 1 } display="inline" >
                    <ArticleOutlinedIcon
                        color="secondary"
                        sx={ { fontSize: "16px", marginRight: "10px", verticalAlign: "middle" } }
                    />

                    <a
                        href={ getPath('expert.jpg') }
                        download
                        style={ { textDecoration: 'none' } }
                    >
                        <Typography sx={ styles.smallTextDotted } display="inline">
                            Экспертное заключение
                        </Typography>
                    </a>

                </Box>
            </Grid>
            
        </Grid>
    )

}


export default DownloadsBlock