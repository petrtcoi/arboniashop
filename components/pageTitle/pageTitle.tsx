import Hidden from '../ui/Hidden'
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

import JsonLd from '../seo/JsonLd';
import * as styles from '../../styles/styles';

type PageTitleProps = {
	header?: string
	subheader?: string
	breadcrumbs?: { title: string; link: string }[]
}

const PageTitle: React.FC<PageTitleProps> = ({ header, subheader, breadcrumbs }) => {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: (breadcrumbs || []).map((c, i) => {
			const url = `https://arboniashop.ru${c.link}`
			return {
				'@type': 'ListItem',
				position: i + 1,
				item: {
					'@type': 'WebPage',
					'@id': url,
					name: c.title,
				},
			}
		}),
	}

	return (
        <>
            {!!breadcrumbs && breadcrumbs.length > 0 ? (
				<JsonLd data={jsonLd} />
			) : null}
            <Box
                sx={{
                    paddingY: '10px',
                    paddingX: { xs: '10px', md: '20px' },
                    backgroundColor: '#f6f6f6',
                    borderBottom: '1px solid #e5e5e5',
                    width: '100%'
                }}>
				{breadcrumbs && breadcrumbs.length > 0 ? (
					<Grid
						container
						sx={{
                            justifyContent: 'space-between'
                        }}
					>
						<Grid>
							{breadcrumbs?.map((item, index) => {
								return index + 1 < breadcrumbs.length ? (
									<Box
										key={index}
										sx={{
                                            display: 'inline'
                                        }}
									>
										<a
											style={{ textDecoration: 'none' }}
											href={item.link}
										>
											<Typography
                                                sx={{
                                                    display: 'inline',
                                                    ...styles.smallTextThinLink
                                                }}>
												{item.title}
											</Typography>
										</a>

										<Typography
                                            sx={{
                                                display: 'inline',
                                                ...styles.smallTextThin
                                            }}>
											&nbsp;&nbsp;&gt;&nbsp;&nbsp;
										</Typography>
									</Box>
								) : (
									<Box
										key={index}
										sx={{
                                            display: 'inline'
                                        }}
									>
										<Typography
                                            sx={{
                                                display: 'inline',
                                                ...styles.smallText
                                            }}>
											{item.title}
										</Typography>
									</Box>
								);
							})}
						</Grid>
						<Grid>
							<Hidden smDown>
								<Typography
                                    component='h2'
                                    sx={{
                                        textAlign: 'right',
                                        ...styles.smallTextBold
                                    }}>
									{header}
								</Typography>
								<Typography
                                    component='h2'
                                    sx={{
                                        textAlign: 'right',
                                        ...styles.smallTextThin
                                    }}>
									{subheader}
								</Typography>
							</Hidden>
						</Grid>
					</Grid>
				) : (
					<>
						<Typography
                            component='h2'
                            sx={{
                                textAlign: 'right',
                                ...styles.smallTextBold
                            }}>
							{header}
						</Typography>
						<Typography
                            component='h2'
                            sx={{
                                textAlign: 'right',
                                ...styles.smallTextThin
                            }}>
							{subheader}
						</Typography>
					</>
				)}
			</Box>
        </>
    );
}

export default PageTitle
