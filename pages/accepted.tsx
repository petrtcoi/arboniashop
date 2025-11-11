import { Box, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'

import PageHeader from '../components/pageHeader/pageHeader'

import TelegramIcon from '@mui/icons-material/Telegram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

import global from '../variables/global'

type PageAcceptedProps = {}

const PageAccepted: NextPage<PageAcceptedProps> = () => {
	return (
		<Box sx={{ ...global.pagePadding }}>
			<PageHeader title={'Запрос на радиаторы Arbonia принят'} />

			<Typography
				variant='h5'
				component='h1'
				gutterBottom
				textAlign='center'
				marginTop='30px'
				sx={{ textTransform: 'uppercase' }}
			>
				Запрос был получен
			</Typography>
			<Typography
				sx={{ fontSize: '14px', lineHeight: '1.5', fontWeight: 300, opacity: 0.9, letterSpacing: '0.02em' }}
				marginTop='30px'
				variant='body1'
				textAlign='center'
				maxWidth='600px'
				marginX='auto'
			>
				Спасибо за ваш запрос. Мы подготовим расчет и отправим вам предложение{' '}
				<span style={{ fontWeight: 700, color: '#1976D2' }}>в ближайшие рабочие часы</span>. Если потребуются уточнения,
				мы свяжемся с вами.
			</Typography>

			<Typography
				sx={{ fontSize: '14px', lineHeight: '1.5', fontWeight: 300, opacity: 0.9, letterSpacing: '0.02em' }}
				marginTop='30px'
				variant='body1'
				textAlign='center'
				maxWidth='600px'
				marginX='auto'
			>
				Если вы выбрали <span style={{ fontWeight: 700, color: '#E53935' }}>связь через мессенджер</span>, то,
				пожалуйста <span style={{ fontWeight: 700, color: '#E53935' }}>отправьте нам любое сообщение</span> со своего
				аккаунта. Так диалог закрепится, и мы сможем связаться без риска, что ответ попадёт в спам.
			</Typography>

			<Grid
				container
				spacing={2}
				marginTop='30px'
				marginX='auto'
				maxWidth='600px'
			>
				<Grid
					item
					xs={12}
					md={6}
					padding='10px'
					width='100%'
					maxWidth={'400px'}
				>
					<a
						href={`https://wa.me/${global.whatsApp}?text=${encodeURIComponent(
							'Здравствуйте! Жду коммерческое предложение на радиаторы Arbonia.'
						)}`}
						style={{ textDecoration: 'none' }}
					>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: '100%',
								gap: '12px',
								backgroundColor: '#1ebe57',
								padding: '10px',
								color: 'white',
								borderRadius: '8px',
								cursor: 'pointer',
								transition: 'opacity 0.3s ease',
								'&:hover': {
									opacity: 0.85,
								},
							}}
						>
							<WhatsAppIcon />
							Написать WhatsApp
						</Box>
					</a>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					padding='10px'
					justifyContent={'center'}
					maxWidth={'400px'}
				>
					<a
						href={`https://t.me/RadiatorLuxBot`}
						style={{ textDecoration: 'none' }}
					>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: '100%',
								gap: '12px',
								backgroundColor: '#0088cc',
								padding: '10px',
								color: 'white',
								borderRadius: '8px',
								cursor: 'pointer',
								transition: 'opacity 0.3s ease',
								'&:hover': {
									opacity: 0.85,
								},
							}}
						>
							<TelegramIcon />
							Написать Telegram
						</Box>
					</a>
				</Grid>
			</Grid>
		</Box>
	)
}

export default PageAccepted

export async function getStaticProps() {
	return {
		props: {}, // will be passed to the page component as props
	}
}
