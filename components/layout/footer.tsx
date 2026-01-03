import { Box, Divider, Grid, Typography } from '@mui/material'
import { NextComponentType } from 'next'
import Script from 'next/script'

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
		<>
			<Box
				marginX={{ xs: '0px', md: '0px' }}
				paddingX={{ xs: '15px', md: '40px' }}
				paddingY={'30px'}
				bgcolor={'#E6E6E6'}
			>
				<Box>
					<a
						style={{ ...footerTextButton, textDecoration: 'none' }}
						href='/'
					>
						<img
							src='/images/logo.png'
							alt='Arbonia column radiators'
							width={'102px'}
							height={'50px'}
						/>
					</a>
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
								<a
									style={{ ...footerTextButton, textDecoration: 'none' }}
									href={`tel:${global.phone495}`}
								>
									<Typography
										sx={{ ...footerTextButtonUnderline, textDecoration: 'none' }}
										component='span'
									>
										{global.phone495String}
									</Typography>
								</a>
								<br />
								<a
									style={{ ...footerTextButton, textDecoration: 'none' }}
									href={`tel:${global.phone812}`}
								>
									<Typography
										sx={footerTextButtonUnderline}
										component='span'
									>
										{global.phone812String}
									</Typography>
								</a>
							</Typography>
						</Box>

						<Box marginTop={'10px'}>
							<Typography sx={footerText}>
								<a
									style={{ ...footerTextButton, textDecoration: 'none' }}
									href={`mailto:${global.email}`}
								>
									<Typography
										sx={footerTextButtonUnderline}
										component='span'
									>
										{global.email}
									</Typography>
								</a>
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
								<a
									style={{ ...footerTextButton, textDecoration: 'none' }}
									href={page[1]}
								>
									<Typography
										sx={footerTextButton}
										component='span'
									>
										{page[0]}
									</Typography>
								</a>

								<br />
							</Box>
						))}
						<Box key={'faq'}>
							<a
								style={{ ...footerTextButton, textDecoration: 'none' }}
								href={'/articles/faq'}
							>
								<Typography
									sx={{ ...footerTextButton, lineHeight: 0.1 }}
									component='span'
								>
									<div style={{ marginTop: '10px', lineHeight: 1.2 }}>
										Ответы на часто задаваемые вопросы про радиаторы Arbonia
									</div>
								</Typography>
							</a>

							<br />
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}
					>
						<Typography sx={footerText}>ООО &quot;ХОУМ КОМФОРТ&quot;</Typography>
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
							<a
								style={{ ...footerTextButton, textDecoration: 'none' }}
								href='/privacy'
							>
								<Typography
									sx={footerTextButtonUnderline}
									component='span'
								>
									Политика конфиденциальности
								</Typography>
							</a>
						</Typography>
						<Typography sx={footerTextButton}>
							<a
								style={{ ...footerTextButton, textDecoration: 'none' }}
								href='/oferta'
							>
								<Typography
									sx={footerTextButtonUnderline}
									component='span'
								>
									Публичная оферта
								</Typography>
							</a>
						</Typography>
						<Typography sx={footerTextButton}>
							<a
								style={{ ...footerTextButton, textDecoration: 'none' }}
								href='/agreement'
							>
								<Typography
									sx={footerTextButtonUnderline}
									component='span'
								>
									Пользовательское соглашение
								</Typography>
							</a>
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						md={8}
					>
						<Typography sx={footerText}>© 2026 ArboniaShop.ru – магазин радиаторов Arbonia</Typography>
						<Typography sx={{ ...footerText, marginTop: '12px' }}>
							<Box
								marginTop={'12px'}
								display={'flex'}
								gap={'10px'}
							>
								Будьте в курсе:
								<a
									href='https://dtf.ru/id3140499'
									style={{ textDecoration: 'none' }}
									title='VC.ru'
									rel='noreferrer noopener'
									target='_blank'
								>
									<Typography
										sx={footerTextButtonUnderline}
										component='span'
									>
										DTF.ru
									</Typography>
								</a>
								<a
									href='https://medium.com/@arboniashop'
									style={{ textDecoration: 'none' }}
									title='VC.ru'
									rel='noreferrer noopener'
									target='_blank'
								>
									<Typography
										sx={footerTextButtonUnderline}
										component='span'
									>
										Medium
									</Typography>
								</a>
							</Box>
						</Typography>
					</Grid>
				</Grid>
			</Box>

			<Script
				id='organization-schema-arboniashop'
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(
						{
							'@context': 'https://schema.org',
							'@type': 'Organization',
							name: 'ArboniaShop',
							legalName: 'ООО «ХОУМ КОМФОРТ»',
							url: 'https://arboniashop.ru',
							logo: 'https://arboniashop.ru/images/logo.png',
							description: 'Интернет-магазин радиаторов Arbonia. Продажа и доставка по всей России.',
							email: 'mail@arboniashop.ru',
							telephone: ['+74952042955', '+78124093855'],
							sameAs: ['https://dtf.ru/id3140499', 'https://medium.com/@arboniashop'],
							areaServed: 'RU',
							parentOrganization: {
								'@type': 'Organization',
								name: 'ООО «ХОУМ КОМФОРТ»',
								url: 'https://www.homekomfort.ru',
							},
							identifier: [
								{
									'@type': 'PropertyValue',
									propertyID: 'OGRN',
									value: '1237800065865',
								},
								{
									'@type': 'PropertyValue',
									propertyID: 'INN',
									value: '7811788339',
								},
								{
									'@type': 'PropertyValue',
									propertyID: 'KPP',
									value: '781101001',
								},
								{
									'@type': 'PropertyValue',
									propertyID: 'CheckingAccount',
									value: '40702810432320000128',
								},
								{
									'@type': 'PropertyValue',
									propertyID: 'BankName',
									value: 'ООО «Банк Точка»',
								},
								{
									'@type': 'PropertyValue',
									propertyID: 'BIC',
									value: '044525104',
								},
								{
									'@type': 'PropertyValue',
									propertyID: 'CorrespondentAccount',
									value: '30101810745374525104',
								},
							],
							contactPoint: [
								{
									'@type': 'ContactPoint',
									telephone: '+74952042955',
									contactType: 'customer service',
									areaServed: 'RU',
									availableLanguage: ['Russian'],
								},
								{
									'@type': 'ContactPoint',
									telephone: '+78124093855',
									contactType: 'customer service',
									areaServed: 'RU',
									availableLanguage: ['Russian'],
								},
								{
									'@type': 'ContactPoint',
									contactType: 'WhatsApp',
									telephone: '+79667589202',
								},
								{
									'@type': 'ContactPoint',
									contactType: 'Telegram',
									url: 'https://t.me/RadiatorLuxBot',
								},
							],
						},
						null,
						2
					),
				}}
			/>
		</>
	)
}

export default Footer
