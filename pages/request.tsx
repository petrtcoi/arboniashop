import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'

import { Box, Grid, Typography } from '@mui/material'

import PageHeader from '../components/pageHeader/pageHeader'
import PageTitle from '../components/pageTitle/pageTitle'

import trackEvent from '../utils/trackEvent'

import type { NextPage } from 'next'

import * as styles from '../styles/styles'
import global from '../variables/global'

type PageRequestProps = {}

const PageRequest: NextPage<PageRequestProps> = () => {
	const [show, setShow] = useState<boolean>(false)
	const toggleShow = () => setShow(!show)

	return (
		<Box>
			<Script
				id={'ucalc'}
				strategy='lazyOnload'
				dangerouslySetInnerHTML={{
					__html: `
                    var widgetOptions472577 = { bg_color: "transparent" }; 
                    (function () { var a = document.createElement("script"), h = "head"; a.async = true; a.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ucalc.pro/api/widget.js?id=472577&t="+Math.floor(new Date()/18e5); document.getElementsByTagName(h)[0].appendChild(a) })();
                    `,
				}}
			/>
			<PageTitle
				header={'Специализированный магазин Arbonia в России'}
				subheader={'Доставка со складов в Москве и Санкт-Петербурге'}
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Запрос на подбор радиаторов', link: '/request' },
				]}
			/>
			<Box sx={{ ...global.pagePadding, maxWidth: '800px', margin: 'auto' }}>
				<Box marginTop={'40px'}>
					<Typography
						variant='h4'
						component='h1'
						gutterBottom
						// textAlign='center'
						// sx={{ textTransform: 'uppercase' }}
					>
						Получите персональный расчёт радиаторов Arbonia
					</Typography>
				</Box>
				<Typography
					sx={{ fontSize: '14px', lineHeight: '1.5', fontWeight: 300, opacity: 0.9, letterSpacing: '0.02em' }}
					marginTop='30px'
					variant='body1'
					textAlign='justify'
				>
					Опишите ваш проект ниже, и наши специалисты оперативно подготовят полный тепловой расчет и финальную смету (с
					учетом скидки и доставки). Мы отправим результат в выбранный Вами мессенджер или на почту в течение дня. Мы
					уважаем Ваше время и{' '}
					<span style={{ fontWeight: 700, color: '#ef7d00' }}>не будем звонить без Вашего прямого запроса</span>.
				</Typography>

				<Box
					marginTop='30px'
					border='1px solid gray'
					padding='20px'
					borderRadius='10px'
				>
					<div className='uCalc_472577'></div>
				</Box>
			</Box>
		</Box>
	)
}

export default PageRequest
