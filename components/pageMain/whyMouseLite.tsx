import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import * as styles from '../../styles/styles'

type WhyMouseLiteProps = {}

const WhyMouseLite: React.FC<WhyMouseLiteProps> = () => {
	return (
		<Box>
			<Grid
				container
				spacing={2}
			>
				<Grid
					item
					xs={12}
					md={6}
				>
					<Typography
						variant='h5'
						component='h2'
					>
						Покупайте Arbonia у профессионалов
					</Typography>
					<Box marginTop='20px' />
					<Typography sx={{ ...styles.standardText }}>
						Мы работаем с 2009 года и за это время накопили огромный опыт работы с продукцией фирмы Arbonia. Он
						позволяет нам подобрать оптимальный вариант для каждого заказчика, исходя из его предпочтений, желаемого
						бюджета и технических особенностей строительного объекта. Среди наших клиентов есть как частные лица, так и
						организации: строительные компании, рестораны, государственные учреждения.&nbsp;
						<a
							style={{ textDecoration: 'none' }}
							href='/about'
							target='_blank'
						>
							<Typography
								sx={{ ...styles.standardTextLink }}
								component='span'
							>
								Подбронее о нашей компании...
							</Typography>
						</a>
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
				>
					<Typography
						sx={{ ...styles.standardText, lineHeight: '2rem' }}
						component='span'
					>
						<ul>
							<li>Расчет и подбор радиаторов</li>
							<li>Доставка в любую точку России</li>
							<li>Склады в Москве и Санкт-Петербурге</li>
							<li>Большой выбор моделей в наличии</li>
							<li>Заказные радиаторы по индивидуальным требованиям</li>
							<li>Работаем как с физическими, так и юридическими лицами</li>
							<li>Сотрудничаем с дизайнерами и строителями</li>
						</ul>
					</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}

export default WhyMouseLite
