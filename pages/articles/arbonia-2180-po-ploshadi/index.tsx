import { Box, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material'
import Head from 'next/head'
import { NextPage } from 'next'
import React, { useMemo, useState } from 'react'

import Hero from '../../../components/hero/hero'
import PageHeader from '../../../components/pageHeader/pageHeader'
import PageTitle from '../../../components/pageTitle/pageTitle'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'

type ArticlePageProps = {}

const ArticlePage: NextPage<ArticlePageProps> = () => {
	const [area, setArea] = useState<number>(16)
	const [ceilingHeight, setCeilingHeight] = useState<number>(2.7)
	const [heatLossFactors, setHeatLossFactors] = useState({
		cornerRoom: false,
		northSide: false,
		largeWindows: false,
		poorWallInsulation: false,
		unheatedAbove: false,
		goodInsulation: false,
	})

	const sectionPower = 164
	const heightCoef = Math.max(0.8, ceilingHeight / 2.7)
	const heatLossCoef = useMemo(() => {
		let coef = 1.0
		if (heatLossFactors.cornerRoom) coef += 0.1
		if (heatLossFactors.northSide) coef += 0.1
		if (heatLossFactors.largeWindows) coef += 0.1
		if (heatLossFactors.poorWallInsulation) coef += 0.2
		if (heatLossFactors.unheatedAbove) coef += 0.1
		if (heatLossFactors.goodInsulation) coef -= 0.1
		return Math.max(0.8, coef)
	}, [heatLossFactors])
	const requiredPower = useMemo(() => area * 100 * heightCoef * heatLossCoef, [area, heightCoef, heatLossCoef])
	const sections = Math.max(1, Math.ceil(requiredPower / sectionPower))
	const pageUrl = 'https://arboniashop.ru/articles/arbonia-2180-po-ploshadi'
	const pageTitle = 'Подбор Arbonia 2180 по площади: как рассчитать мощность без переплаты'
	const pageDescription =
		'Онлайн калькулятор подбора радиатора Arbonia 2180 по площади и высоте потолков. Как считать мощность, почему расчет по площади ориентировочный и почему не стоит брать большой запас.'
	const pageImage = 'https://arboniashop.ru/images/articles/2180-4.jpeg'

	const handleFactorChange = (key: keyof typeof heatLossFactors) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setHeatLossFactors((prev) => ({ ...prev, [key]: event.target.checked }))
	}

	return (
		<Box>
			<Head>
				<link
					rel='canonical'
					href={pageUrl}
				/>
				<meta
					name='robots'
					content='index,follow,max-image-preview:large'
				/>
				<meta
					property='og:type'
					content='article'
				/>
				<meta
					property='og:site_name'
					content='ArboniaShop'
				/>
				<meta
					property='og:locale'
					content='ru_RU'
				/>
				<meta
					property='og:title'
					content={pageTitle}
				/>
				<meta
					property='og:description'
					content={pageDescription}
				/>
				<meta
					property='og:url'
					content={pageUrl}
				/>
				<meta
					property='og:image'
					content={pageImage}
				/>
				<meta
					name='twitter:card'
					content='summary_large_image'
				/>
				<meta
					name='twitter:title'
					content={pageTitle}
				/>
				<meta
					name='twitter:description'
					content={pageDescription}
				/>
				<meta
					name='twitter:image'
					content={pageImage}
				/>
			</Head>
			<PageHeader
				title={pageTitle}
				description={pageDescription}
			/>
			<PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{
						title: 'Подбор Arbonia 2180 по площади',
						link: '/articles/arbonia-2180-po-ploshadi',
					},
				]}
			/>
			<Hero
				imgPath={'/images/sliders/high.jpeg'}
				header={'Подбор радиатора Arbonia 2180 по мощности: как считать по площади'}
			/>
			<Typography
				sx={{ ...global.pagePadding, maxWidth: '900px', margin: 'auto', ...styles.standardText }}
				marginY='20px'
				component={'div'}
			>
				<p>
					Подбор мощности для{' '}
					<a
						href='/models/2180'
						style={{ textDecoration: 'none' }}
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component={'span'}
						>
							Arbonia 2180
						</Typography>
					</a>{' '}
					чаще всего начинают с расчета по площади: это простой и понятный ориентир, который помогает быстро выбрать
					диапазон секций. Для квартир со стандартной высотой потолков обычно используют базовое правило 100 Вт на 1 м².
					Например, для комнаты 16 м² нужно около 1600 Вт тепловой мощности.
				</p>

				<h2 style={{ marginTop: '40px' }}>Почему расчет по площади - это только ориентир</h2>
				<p>
					Формула по площади не учитывает важные факторы: высоту потолков, этаж, количество наружных стен, площадь
					остекления, качество утепления и фактическую температуру теплоносителя в стояке. Поэтому два помещения одинаковой
					площади могут требовать заметно разную мощность.
				</p>
				<p>
					Для комнаты 16 м² расчет может дать 1600 Вт, но в угловой квартире с большими окнами реальная потребность часто
					выше. А в хорошо утепленной квартире в центре дома - ниже. Именно поэтому подбор по площади стоит использовать как
					первый шаг, а не как окончательное инженерное решение.
				</p>

				<h2 style={{ marginTop: '40px' }}>Как уточнить мощность для Arbonia 2180</h2>
				<p>
					После базового расчета сравните его с фактическими данными объекта. Самый практичный путь для квартиры в
					многоквартирном доме - проверить проектные параметры отопления и согласовать замену с управляющей компанией.
					Обычно именно УК может подтвердить допустимую тепловую нагрузку, температурный график и особенности конкретного
					стояка.
				</p>
				<p>
					Полезно также посмотреть, какие радиаторы были установлены застройщиком и какая у них паспортная мощность. Если в
					комнате стоял прибор на 1.7-1.9 кВт, новый Arbonia 2180 обычно подбирают в сопоставимом диапазоне, а не «на глаз»
					с большим запасом.
				</p>

				<h2 style={{ marginTop: '40px' }}>Онлайн калькулятор подбора радиатора Arbonia 2180</h2>
				<p>
					Мощность секции Arbonia 2180 (ΔT=60): <b>164 Вт</b>.
				</p>
				<Box
					sx={{
						border: '1px solid #e5e5e5',
						borderRadius: '8px',
						padding: '16px',
						marginTop: '12px',
						marginBottom: '12px',
						fontSize: '14px',
					}}
				>
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
							gap: '12px',
						}}
					>
						<TextField
							label='Площадь, м²'
							type='number'
							value={area}
							onChange={(e) => setArea(Math.max(1, Number(e.target.value) || 1))}
							inputProps={{ min: 1, step: 0.1 }}
							size='small'
							sx={{
								'& .MuiInputBase-input': { fontSize: '14px' },
								'& .MuiInputLabel-root': { fontSize: '14px' },
							}}
						/>
						<TextField
							label='Высота потолков, м'
							type='number'
							value={ceilingHeight}
							onChange={(e) => setCeilingHeight(Math.max(2, Number(e.target.value) || 2))}
							inputProps={{ min: 2, step: 0.1 }}
							size='small'
							sx={{
								'& .MuiInputBase-input': { fontSize: '14px' },
								'& .MuiInputLabel-root': { fontSize: '14px' },
							}}
						/>
						<Box />
					</Box>

					<Box marginTop='12px'>
						<Typography sx={{ fontWeight: 600, marginBottom: '6px', fontSize: '14px' }}>
							Факторы теплопотерь (отметьте, что подходит):
						</Typography>
						<FormGroup sx={{ '& .MuiFormControlLabel-label': { fontSize: '14px' } }}>
							<FormControlLabel
								control={
									<Checkbox
										checked={heatLossFactors.cornerRoom}
										onChange={handleFactorChange('cornerRoom')}
									/>
								}
								label='Угловая комната (2 и более наружных стен)'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={heatLossFactors.northSide}
										onChange={handleFactorChange('northSide')}
									/>
								}
								label='Окна/стены выходят на север или северо-восток'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={heatLossFactors.largeWindows}
										onChange={handleFactorChange('largeWindows')}
									/>
								}
								label='Большая площадь остекления (примерно более 25% площади пола)'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={heatLossFactors.poorWallInsulation}
										onChange={handleFactorChange('poorWallInsulation')}
									/>
								}
								label='Слабое утепление стен / старые стены без доп. утепления'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={heatLossFactors.unheatedAbove}
										onChange={handleFactorChange('unheatedAbove')}
									/>
								}
								label='Сверху неотапливаемое помещение (чердак/техэтаж)'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={heatLossFactors.goodInsulation}
										onChange={handleFactorChange('goodInsulation')}
									/>
								}
								label='Хорошее утепление стен и современные стеклопакеты'
							/>
						</FormGroup>
					</Box>

					<Box marginTop='16px'>
						<p style={{ margin: '6px 0' }}>
							Коэффициент по высоте потолка: <b>{heightCoef.toFixed(2)}</b>
						</p>
						<p style={{ margin: '6px 0' }}>
							Коэффициент теплопотерь: <b>{heatLossCoef.toFixed(2)}</b>
						</p>
						<p style={{ margin: '6px 0' }}>
							Требуемая мощность: <b>{Math.round(requiredPower)} Вт</b>
						</p>
						<p style={{ margin: '6px 0' }}>
							Рекомендуемое количество секций Arbonia 2180: <b>{sections}</b>
						</p>
					</Box>
				</Box>

				<h2 style={{ marginTop: '40px' }}>Почему не стоит брать радиатор с большим запасом</h2>
				<p>
					Идея «взять максимально мощный, чтобы точно хватило» кажется безопасной, но на практике часто приводит к
					переплате. Более длинный или более многосекционный радиатор стоит дороже, занимает больше стены и сильнее
					ограничивает расстановку мебели.
				</p>
				<p>
					Кроме цены и габаритов, избыточная мощность не всегда улучшает комфорт. В реальной эксплуатации это нередко
					выражается в более резкой работе термоголовки и менее стабильном ощущении температуры возле прибора. Чаще всего
					рациональнее брать не «максимум», а расчетно достаточную мощность с умеренным запасом.
				</p>

				<h2 style={{ marginTop: '40px' }}>Практический подход к подбору</h2>
				<p>
					Оптимальная схема для Arbonia 2180: сначала определить ориентир по площади, затем сверить его с проектной
					информацией по дому, данными радиаторов от застройщика и условиями конкретной комнаты. Такой подход снижает риск
					ошибки в обе стороны: и недостатка тепла, и необоснованного завышения мощности.
				</p>
				<p>
					Итоговый выбор обычно получается технически обоснованным и более выгодным: радиатор обеспечивает комфортную
					температуру, не занимает лишнее место и не требует лишних затрат на оборудование.
				</p>
			</Typography>
			<script type='application/ld+json'>
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'Article',
					mainEntityOfPage: {
						'@type': 'WebPage',
						'@id': pageUrl,
					},
					headline: pageTitle,
					description: pageDescription,
					image: [pageImage],
					author: {
						'@type': 'Organization',
						name: 'ArboniaShop',
					},
					publisher: {
						'@type': 'Organization',
						name: 'ArboniaShop',
						logo: {
							'@type': 'ImageObject',
							url: 'https://arboniashop.ru/images/logo.png',
						},
					},
					inLanguage: 'ru-RU',
				})}
			</script>
			<script type='application/ld+json'>
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'BreadcrumbList',
					itemListElement: [
						{
							'@type': 'ListItem',
							position: 1,
							name: 'Главная',
							item: 'https://arboniashop.ru/',
						},
						{
							'@type': 'ListItem',
							position: 2,
							name: 'Полезная информация',
							item: 'https://arboniashop.ru/articles',
						},
						{
							'@type': 'ListItem',
							position: 3,
							name: 'Подбор Arbonia 2180 по площади',
							item: pageUrl,
						},
					],
				})}
			</script>
			<script type='application/ld+json'>
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'FAQPage',
					mainEntity: [
						{
							'@type': 'Question',
							name: 'Можно ли подобрать Arbonia 2180 только по площади?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'Можно, но это ориентировочный расчет. Для точного подбора нужно учитывать высоту потолков, утепление, остекление и фактические условия системы отопления.',
							},
						},
						{
							'@type': 'Question',
							name: 'Какой тепловой поток одной секции Arbonia 2180 использован в калькуляторе?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'В калькуляторе используется 164 Вт на секцию при ΔT=60.',
							},
						},
						{
							'@type': 'Question',
							name: 'Почему не рекомендуется брать радиатор с большим запасом мощности?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'Слишком большой запас обычно ведет к переплате и увеличивает габариты радиатора, что ухудшает использование пространства без заметной практической пользы.',
							},
						},
						{
							'@type': 'Question',
							name: 'Нужно ли согласовывать подбор радиатора с управляющей компанией?',
							acceptedAnswer: {
								'@type': 'Answer',
								text: 'Да, для квартиры в многоквартирном доме это надежный путь: управляющая компания может подтвердить параметры системы отопления и допустимую тепловую нагрузку.',
							},
						},
					],
				})}
			</script>
		</Box>
	)
}

export default ArticlePage

export async function getStaticProps() {
	return {
		props: {},
	}
}
