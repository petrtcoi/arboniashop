import { Box, Grid, Hidden, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import Script from 'next/script'
import * as styles from '../../styles/styles'

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
			const url = `https://tubogshop.ru${c.link}`
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
			{!breadcrumbs || breadcrumbs.length === 0 ? (
				<Script
					id='jsonld'
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			) : null}
			<Box
				paddingY={'10px'}
				paddingX={{ xs: '10px', md: '20px' }}
				sx={{ backgroundColor: '#f6f6f6', borderBottom: '1px solid #e5e5e5', width: '100%' }}
			>
				{breadcrumbs && breadcrumbs.length > 0 ? (
					<Grid
						container
						justifyContent='space-between'
					>
						<Grid item>
							{breadcrumbs?.map((item, index) => {
								return index + 1 < breadcrumbs.length ? (
									<Box
										key={index}
										display='inline'
									>
										<a
											style={{ textDecoration: 'none' }}
											href={item.link}
											itemProp='item'
										>
											<a style={{ textDecoration: 'none' }}>
												<Typography
													sx={{ ...styles.smallTextThinLink }}
													display='inline'
												>
													{item.title}
												</Typography>
											</a>
										</a>

										<Typography
											sx={{ ...styles.smallTextThin }}
											display='inline'
										>
											&nbsp;&nbsp;&gt;&nbsp;&nbsp;
										</Typography>
									</Box>
								) : (
									<Box
										key={index}
										display='inline'
									>
										<Typography
											sx={{ ...styles.smallText }}
											display='inline'
										>
											{item.title}
										</Typography>
									</Box>
								)
							})}
						</Grid>
						<Grid item>
							<Hidden smDown>
								<Typography
									component='h2'
									sx={{ ...styles.smallTextBold }}
									textAlign='right'
								>
									{header}
								</Typography>
								<Typography
									component='h2'
									sx={{ ...styles.smallTextThin }}
									textAlign='right'
								>
									{subheader}
								</Typography>
							</Hidden>
						</Grid>
					</Grid>
				) : (
					<>
						<Typography
							component='h2'
							sx={{ ...styles.smallTextBold }}
							textAlign='right'
						>
							{header}
						</Typography>
						<Typography
							component='h2'
							sx={{ ...styles.smallTextThin }}
							textAlign='right'
						>
							{subheader}
						</Typography>
					</>
				)}
			</Box>
		</>
	)
}

export default PageTitle
