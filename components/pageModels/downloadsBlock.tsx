import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

import * as styles from '../../styles/styles'

type DownloadsBlockProps = {}

const DownloadsBlock: React.FC<DownloadsBlockProps> = () => {
	const getPath = (file: string) => '/docs/' + file

	return (
        <Grid
			container
			spacing={2}
		>
            <Grid
                sx={{
                    marginTop: '15px'
                }}
                size={{
                    sm: 12,
                    md: 6,
                    lg: 4
                }}>
				<Box
                    sx={{
                        mr: 1,
                        display: 'inline'
                    }}>
					<ArticleOutlinedIcon
						color='secondary'
						sx={{
							fontSize: '16px',
							marginRight: '10px',
							verticalAlign: 'middle',
						}}
					/>
					<a
						href={getPath('doc.pdf')}
						style={{ textDecoration: 'none' }}
						download
					>
						<Typography
                            sx={[{
                                display: 'inline'
                            }, styles.smallTextDotted]}>
							Каталог Arbonia
						</Typography>
					</a>
				</Box>
			</Grid>
            <Grid
                sx={{
                    marginTop: '15px'
                }}
                size={{
                    sm: 12,
                    md: 6,
                    lg: 4
                }}>
				<Box
                    sx={{
                        mr: 1,
                        display: 'inline'
                    }}>
					<ArticleOutlinedIcon
						color='secondary'
						sx={{
							fontSize: '16px',
							marginRight: '10px',
							verticalAlign: 'middle',
						}}
					/>

					<a
						href={getPath('cert.pdf')}
						download
						style={{ textDecoration: 'none' }}
					>
						<Typography
                            sx={[{
                                display: 'inline'
                            }, styles.smallTextDotted]}>
							Сертификат соответствия
						</Typography>
					</a>
				</Box>
			</Grid>
            <Grid
                sx={{
                    marginTop: '15px'
                }}
                size={{
                    sm: 12,
                    md: 6,
                    lg: 4
                }}>
				<Box
                    sx={{
                        mr: 1,
                        display: 'inline'
                    }}>
					<ArticleOutlinedIcon
						color='secondary'
						sx={{
							fontSize: '16px',
							marginRight: '10px',
							verticalAlign: 'middle',
						}}
					/>

					<a
						href={getPath('expert.jpg')}
						download
						style={{ textDecoration: 'none' }}
					>
						<Typography
                            sx={[{
                                display: 'inline'
                            }, styles.smallTextDotted]}>
							Экспертное заключение
						</Typography>
					</a>
				</Box>
			</Grid>

            <Grid
                sx={{
                    marginTop: '15px'
                }}
                size={{
                    sm: 12,
                    md: 6,
                    lg: 4
                }}>
				<Box
                    sx={{
                        mr: 1,
                        display: 'inline'
                    }}>
					<ArticleOutlinedIcon
						color='secondary'
						sx={{
							fontSize: '16px',
							marginRight: '10px',
							verticalAlign: 'middle',
						}}
					/>
					<a
						href={getPath('warranty.jpg')}
						download
						style={{ textDecoration: 'none' }}
					>
						<Typography
                            sx={[{
                                display: 'inline'
                            }, styles.smallTextDotted]}>
							Гарантия
						</Typography>
					</a>
				</Box>
			</Grid>

            <Grid
                sx={{
                    marginTop: '15px'
                }}
                size={{
                    sm: 12,
                    md: 6,
                    lg: 4
                }}>
				<Box
                    sx={{
                        mr: 1,
                        display: 'inline'
                    }}>
					<ArticleOutlinedIcon
						color='secondary'
						sx={{
							fontSize: '16px',
							marginRight: '10px',
							verticalAlign: 'middle',
						}}
					/>
					<a
						href={getPath('w161.pdf')}
						download
						style={{ textDecoration: 'none' }}
					>
						<Typography
                            sx={[{
                                display: 'inline'
                            }, styles.smallTextDotted]}>
							Инструкция. Кронштейны W161
						</Typography>
					</a>
				</Box>
			</Grid>

            <Grid
                sx={{
                    marginTop: '15px'
                }}
                size={{
                    sm: 12,
                    md: 6,
                    lg: 4
                }}>
				<Box
                    sx={{
                        mr: 1,
                        display: 'inline'
                    }}>
					<ArticleOutlinedIcon
						color='secondary'
						sx={{
							fontSize: '16px',
							marginRight: '10px',
							verticalAlign: 'middle',
						}}
					/>
					<a
						href={getPath('zb0251.pdf')}
						download
						style={{ textDecoration: 'none' }}
					>
						<Typography
                            sx={[{
                                display: 'inline'
                            }, styles.smallTextDotted]}>
							Инструкция. Кронштейны ZB0251
						</Typography>
					</a>
				</Box>
			</Grid>

            <Grid
                sx={{
                    marginTop: '15px'
                }}
                size={{
                    sm: 12,
                    md: 6,
                    lg: 4
                }}>
				<Box
                    sx={{
                        mr: 1,
                        display: 'inline'
                    }}>
					<ArticleOutlinedIcon
						color='secondary'
						sx={{
							fontSize: '16px',
							marginRight: '10px',
							verticalAlign: 'middle',
						}}
					/>
					<a
						href={getPath('zb0281.pdf')}
						download
						style={{ textDecoration: 'none' }}
					>
						<Typography
                            sx={[{
                                display: 'inline'
                            }, styles.smallTextDotted]}>
							Инструкция. Кронштейны ZB0281
						</Typography>
					</a>
				</Box>
			</Grid>
        </Grid>
    );
}

export default DownloadsBlock
