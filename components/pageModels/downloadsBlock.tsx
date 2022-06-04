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
                        href={ getPath('zehnder-prices.pdf') }
                        style={ { textDecoration: 'none' } }
                        download
                    >
                        <Typography sx={ styles.smallTextDotted } display="inline">
                            Полный каталог и цены Zehnder Charleston
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
                        href={ getPath('zehnder-promo-price.pdf') }
                        download
                        style={ { textDecoration: 'none' } }
                    >
                        <Typography sx={ styles.smallTextDotted } display="inline">
                            Промо каталог Zehnder Charleston
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
                        href={ getPath('zehnder-colors.pdf') }
                        download
                        style={ { textDecoration: 'none' } }
                    >
                        <Typography sx={ styles.smallTextDotted } display="inline">
                            Палитра Zehnder
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
                        href={ getPath('cvdbh.pdf') }
                        download
                        style={ { textDecoration: 'none' } }
                    >
                        <Typography sx={ styles.smallTextDotted } display="inline">
                            Инструкция. Кронштейны CVD + BH
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
                        href={ getPath('easyfix.pdf') }
                        download
                        style={ { textDecoration: 'none' } }
                    >
                        <Typography sx={ styles.smallTextDotted } display="inline">
                            Инструкция. Кронштейны EasyFix
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
                        href={ getPath('vitaterm.pdf') }
                        download
                        style={ { textDecoration: 'none' } }
                    >
                        <Typography sx={ styles.smallTextDotted } display="inline">
                            Протокол определительных испытаний ООО Витатерм
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
                        href={ getPath('vitaterm-recomendations.pdf') }
                        download
                        style={ { textDecoration: 'none' } }
                    >
                        <Typography sx={ styles.smallTextDotted } display="inline">
                            Рекомендации ВИТАТЕРМ - Zehnder Charleston
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
                        href={ getPath('zehnder-multi.pdf') }
                        download
                        style={ { textDecoration: 'none' } }
                    >
                        <Typography sx={ styles.smallTextDotted } display="inline">
                            Установка Zehnder Charleston в многоквартирных домах
                        </Typography>
                    </a>

                </Box>
            </Grid>
        </Grid>
    )

}


export default DownloadsBlock