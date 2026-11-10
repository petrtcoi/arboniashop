import JsonLd from '../../../components/seo/JsonLd'
import { Box, Checkbox, FormControlLabel, FormGroup, MenuItem, TextField, Typography } from '@mui/material'
import { NextPage } from 'next'
import React, { useMemo, useState } from 'react'

import Hero from '../../../components/hero/hero'
import PageHeader from '../../../components/pageHeader/pageHeader'
import PageTitle from '../../../components/pageTitle/pageTitle'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'

type ArticlePageProps = {}

const faqItems = [
  {
    "question": "Можно ли подобрать Arbonia 2180 только по площади?",
    "answer": "Площадь позволяет получить предварительный ориентир. Калькулятор использует условную базу и поправки; окончательный выбор сверяют с проектной нагрузкой и режимом отопления."
  },
  {
    "question": "Какую мощность секции использует калькулятор?",
    "answer": "При выборе ΔT50 используется 130 Вт на секцию, при ΔT60 — 164 Вт. Эти значения относятся к одной модели при разных температурах системы."
  },
  {
    "question": "Расчётное число секций означает готовое исполнение в наличии?",
    "answer": "Нет. Это минимальное число по выбранным допущениям. Для заказа выбирают ближайшее доступное исполнение с не меньшей мощностью и проверяют его длину с арматурой."
  },
  {
    "question": "Что делать, если есть нагрузка из проекта?",
    "answer": "Использовать актуальную проектную нагрузку вместо оценки по площади и разделить её на мощность секции при предусмотренном температурном режиме с округлением вверх."
  }
]

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

	const [deltaT, setDeltaT] = useState<50 | 60>(50)
	const sectionPower = deltaT === 50 ? 130 : 164
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
	const pageTitle = 'Калькулятор Arbonia 2180 — подбор секций по площади и температуре'
	const pageDescription =
		'Калькулятор секций Arbonia 2180: площадь, высота потолков, условия помещения и температурный режим ΔT=50 или 60 °C. Предварительный расчёт мощности перед подбором.'
	const pageImage = 'https://arboniashop.ru/images/articles/2180-4.jpeg'

	const handleFactorChange = (key: keyof typeof heatLossFactors) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setHeatLossFactors((prev) => ({ ...prev, [key]: event.target.checked }))
	}

	return (
		<Box>
			<PageHeader
				title={pageTitle}
				description={pageDescription}
				type='article'
				image={pageImage}
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
				header={'Калькулятор количества секций Arbonia 2180'}
			/>
			<Typography
				sx={{ ...global.pagePadding, maxWidth: '900px', margin: 'auto', ...styles.standardText }}
				marginY='20px'
				component={'div'}
			>
                <p>Калькулятор Arbonia 2180 позволяет менять площадь, высоту потолка, условия комнаты и ΔT50 или ΔT60,
                    чтобы получить предварительный минимум секций. База 100 Вт на 1 м² и поправочные коэффициенты —
                    условная модель оценки, а не индивидуальный расчёт теплопотерь. Если проектная нагрузка уже известна,
                    используйте её и <a href='/articles/vertical-radiator-power'> мощность 2180 при нужном режиме</a>.</p>

				<p>
					Этот калькулятор позволяет менять исходные данные и сравнивать результат. Если нужны готовые примеры,
					откройте <a href='/articles/arbonia-2180-calc'>таблицу секций Arbonia 2180 для комнат 10–20 м²</a>.
					При другом температурном режиме используйте <a href='/articles/delta-t-teplootdacha'>пояснение к расчёту ΔT</a>.
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

				<h2 style={{ marginTop: '40px' }}>Как проверить исходные данные калькулятора</h2>
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
					Мощность секции Arbonia 2180 при ΔT={deltaT} °C: <b>{sectionPower} Вт</b>.
					Режим 75/65/20 соответствует ΔT=50 °C, 85/75/20 — ΔT=60 °C.
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
						<TextField select label='Температурный режим' value={deltaT}
							onChange={e => setDeltaT(Number(e.target.value) as 50 | 60)} size='small'>
							<MenuItem value={50}>75/65/20 — ΔT=50 °C</MenuItem>
							<MenuItem value={60}>85/75/20 — ΔT=60 °C</MenuItem>
						</TextField>
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
							Расчётный минимум секций Arbonia 2180 при ΔT={deltaT} °C: <b>{sections}</b>
						</p>
						<p>Складские варианты: 4, 6, 8, 10 и 12 секций. Выбирайте ближайшее большее доступное число.
						Если требуется больше 12, рассмотрите заказное исполнение, два прибора или
						<a href='/models/3180'> более мощную модель Arbonia 3180</a>.</p>
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
					Перед заказом результат сопоставляют с проектной нагрузкой и доступным исполнением. Расчётный минимум не является подтверждением наличия: выберите ближайший больший размер и проверьте его полный габарит.
				</p>
                <h2 style={{ marginTop: '40px' }}>Частые вопросы о калькуляторе</h2>
                {faqItems.map(item => <React.Fragment key={item.question}>
                    <h3>{item.question}</h3><p>{item.answer}</p>
                </React.Fragment>)}
            </Typography>
            <JsonLd data={{
					'@context': 'https://schema.org',
					'@type': 'Article',
					mainEntityOfPage: {
						'@type': 'WebPage',
						'@id': pageUrl,
					},
					headline: pageTitle,
					description: pageDescription,
					dateModified: '2026-10-13',
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
				}} />
            <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage',
                mainEntity: faqItems.map(item => ({ '@type': 'Question', name: item.question,
                    acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
            }} />
		</Box>
	)
}

export default ArticlePage

export async function getStaticProps() {
	return {
		props: {},
	}
}
