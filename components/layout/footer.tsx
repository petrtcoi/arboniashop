import { Box, Divider, Grid, Typography } from '@mui/material'
import { NextComponentType } from 'next'

import Image from 'next/image'
import Link from 'next/link'

import trackEvent from '../../utils/trackEvent'

import {
	footerText,
	footerTextBold,
	footerTextButton,
	footerTextButtonUnderline,
} from '../../styles/stylesNavbarFooter'
import global from './../../variables/global'

const pages: string[] = global.pages

type FooterProps = {}

const Footer: NextComponentType<FooterProps> = () => {
	return (
		<Box
			marginX={{ xs: '0px', md: '0px' }}
			paddingX={{ xs: '15px', md: '40px' }}
			paddingY={'30px'}
			bgcolor={'#E6E6E6'}
			itemScope
			itemType='https://schema.org/Organization'
		>
			<meta
				itemProp='address'
				content='192019, РОССИЯ, Г. САНКТ-ПЕТЕРБУРГ, ОБУХОВСКОЙ ОБОРОНЫ ПР-КТ, Д. 7, ЛИТЕРА С, ОФИС 6'
			/>
			<meta
				itemProp='name'
				content='ООО "ХОУМ КОМФОРТ"'
			/>
			<meta
				itemProp='image'
				content='/public/images/logo.png'
			/>

			<Box>
				<Link
					href='/'
					itemProp={'url'}
				>
					<img
						src='/images/logo.png'
						alt='Arbonia column radiators'
						width={'102px'}
						height={'50px'}
						itemProp={'logo'}
					/>
				</Link>
			</Box>
			<Grid
				container
				spacing={2}
			>
				<Grid
					item
					xs={6}
					md={4}
				>
					<Box>
						<Typography sx={footerTextBold}>Специализированный магазин</Typography>
						<Typography sx={footerTextBold}>трубчатых радиаторов Arbonia в России</Typography>
					</Box>
					<Box marginTop={'10px'}>
						<Typography sx={footerText}>
							<Link
								href={`tel:${global.phone495}`}
								style={footerTextButton}
							>
								<Typography
									sx={footerTextButtonUnderline}
									component='span'
									itemProp='telephone'
								>
									{global.phone495String}
								</Typography>
							</Link>
							<br />
							<Link
								href={`tel:${global.phone812}`}
								style={footerTextButton}
							>
								<Typography
									sx={footerTextButtonUnderline}
									component='span'
								>
									{global.phone812String}
								</Typography>
							</Link>
						</Typography>
					</Box>

					<Box marginTop={'10px'}>
						<Typography sx={footerText}>
							<Link
								href={`mailto:${global.email}`}
								style={footerTextButton}
							>
								<Typography
									sx={footerTextButtonUnderline}
									component='span'
									itemProp='email'
								>
									{global.email}
								</Typography>
							</Link>
						</Typography>
					</Box>
					<Box marginTop={'10px'}>
						<Typography sx={footerText}>пн. - пт. с 10:00 до 19:00</Typography>
					</Box>
				</Grid>
				<Grid
					item
					xs={6}
					md={4}
				>
					{pages.map((page, index) => (
						<Box key={page[0]}>
							<Link href={page[1]}>
								<Typography
									sx={footerTextButton}
									component='span'
								>
									{page[0]}
								</Typography>
							</Link>

							<br />
						</Box>
					))}
					<Box key={'faq'}>
						<Link href={'/articles/faq'}>
							<Typography
								sx={{ ...footerTextButton, lineHeight: 0.1 }}
								component='span'
							>
								<div style={{ marginTop: '10px', lineHeight: 1.2 }}>
									Ответы на часто задаваемые вопросы про радиаторы Arbonia
								</div>
							</Typography>
						</Link>

						<br />
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					md={4}
				>
					<Typography
						sx={footerText}
						itemProp='name'
					>
						ООО &quot;ХОУМ КОМФОРТ&quot;
					</Typography>
					<Typography sx={footerText}>&zwj;ИНН 7811788339 / КПП 781101001</Typography>
					<Typography sx={footerText}>ОГРН 1237800065865</Typography>
				</Grid>
			</Grid>
			<Box marginY={'15px'}>
				<Divider variant='middle' />
			</Box>
			<Grid
				container
				spacing={2}
			>
				<Grid
					item
					xs={12}
					md={4}
				>
					<Typography sx={footerTextButton}>
						<Link href='/privacy'>
							<Typography
								sx={footerTextButtonUnderline}
								component='span'
							>
								Политика конфиденциальности
							</Typography>
						</Link>
					</Typography>
					<Typography sx={footerTextButton}>
						<Link href='/oferta'>
							<Typography
								sx={footerTextButtonUnderline}
								component='span'
							>
								Публичная оферта
							</Typography>
						</Link>
					</Typography>
					<Typography sx={footerTextButton}>
						<Link href='/agreement'>
							<Typography
								sx={footerTextButtonUnderline}
								component='span'
							>
								Пользовательское соглашение
							</Typography>
						</Link>
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					md={8}
				>
					<Typography sx={footerText}>© 2025 ArboniaShop.ru – магазин радиаторов Arbonia</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Footer
