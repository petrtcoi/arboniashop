import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

import RadiatorList from '../radiatorList/radiatorList'

import { ColorOrigin } from '../../models/colorOrigin.model'
import { ConnectionOrigin } from '../../models/connectionOrigin.model'
import { ModelOrigin } from '../../models/modelOrigin.model'

import { CurrencyContext } from '../../contexts/currencyContext'

import * as styles from '../../styles/styles'
import global from '../../variables/global'

type ModelBlockProps = {
	model: ModelOrigin
	color: ColorOrigin
	connection: ConnectionOrigin

	onlyTable?: boolean

	title: string
	description?: string
	modelLink?: string
}

const ModelBlock: React.FC<ModelBlockProps> = ({
	model,
	color,
	connection,
	title,
	description = '',
	modelLink,
	onlyTable = false,
}) => {
	const { rateEuro, isFetching } = useContext(CurrencyContext)
	const imagePrimaryPath = global.imagesModelPath + model.imagePrimary

	return (
        <Box sx={{
            marginTop: onlyTable ? '0px' : '70px'
        }}>
            {!onlyTable && (
				<>
					<Box sx={{
                        marginTop: '20px'
                    }}>
						<Grid
							container
							spacing={2}
							sx={{
                                alignItems: 'start'
                            }}
						>
							<Grid
                                size={{
                                    xs: 4,
                                    md: 4,
                                    lg: 3
                                }}>
								<img
									width={'100%'}
									height={'auto'}
									src={imagePrimaryPath}
									alt={`Трубчатый радиатор ${model.name}`}
								/>
							</Grid>
							<Grid
                                container
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}
                                size={{
                                    xs: 8,
                                    md: 6,
                                    lg: 6
                                }}>
								<Box>
									<Box sx={{
                                        marginBottom: '10px'
                                    }}>
										<Typography
                                            variant='h6'
                                            component='h3'
                                            sx={{
                                                textAlign: 'left',
                                                lineHeight: 1.2,
                                                fontWeight: 600
                                            }}>
											{title}
										</Typography>
									</Box>
									<Typography
										sx={{
                                            fontSize: { xs: '12px', sm: '14px' }
                                        }}
									>
										{description}
									</Typography>

									{modelLink && (
										<Box sx={{
                                            marginTop: '10px'
                                        }}>
											<a
												style={{ textDecoration: 'none' }}
												href={`/models/${modelLink}`}
											>
												<Typography sx={styles.smallTextDotted}>подробнее о модели</Typography>
											</a>
										</Box>
									)}
								</Box>
							</Grid>
						</Grid>
					</Box>
				</>
			)}

            <Box sx={{
                visibility: isFetching ? 'hidden' : 'hidden'
            }}>
				<Typography sx={{ ...styles.smallTextThin, ...styles.smallTextRed }}>
					подождите, обновляется курс валют...
				</Typography>
			</Box>

            <Box sx={{
                marginTop: '20px'
            }}>
				<RadiatorList
					model={model}
					color={color}
					connection={connection}
					currencyRate={rateEuro}
				/>
			</Box>
        </Box>
    );
}

export default ModelBlock
