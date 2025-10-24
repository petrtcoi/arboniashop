import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'

import Link from 'next/link'
import PageHeader from '../components/pageHeader/pageHeader'
import * as style from './../styles/styles'

type SuccessPageProps = {}

const SuccessPage: NextPage<SuccessPageProps> = () => {
	return (
		<Box
			height='50vh'
			width='100hh'
		>
			<PageHeader title={'Заказ оформлен!'} />
			<Box
				marginTop='10vh'
				width='400px'
				marginX='auto'
			>
				<Typography
					variant='h5'
					component='h1'
					align='center'
					sx={{ textTransform: 'uppercase' }}
				>
					Страница не найдена (404)
				</Typography>
				<Box
					marginTop='40px'
					paddingX={'1rem'}
				>
					<Typography sx={style.standardText}>
						<p>
							К сожалению, запрашиваемая страница не существует. Возможно, вы ввели неверный адрес или перешли по
							устаревшей ссылке.
						</p>
						<p>Что вы можете сделать:</p>
						<ul>
							<li>Проверьте правильность введённого URL.</li>
							<li>
								Вернитесь на{' '}
								<a
									style={{ textDecoration: 'none' }}
									href='/'
								>
									<span style={{ color: '#ef7d00', fontWeight: 600 }}>главную страницу</span>
								</a>{' '}
								и попробуйте найти нужную информацию оттуда.
							</li>
							<li>Воспользуйтесь меню навигации или поиском на сайте.</li>
						</ul>
						<p>Если проблема сохраняется, свяжитесь с нами, и мы постараемся помочь.</p>
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default SuccessPage
