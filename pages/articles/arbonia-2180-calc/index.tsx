import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import Image from "next/legacy/image"
import Link from 'next/link'
import React from 'react'

import Hero from '../../../components/hero/hero'
import PageHeader from '../../../components/pageHeader/pageHeader'
import PageTitle from '../../../components/pageTitle/pageTitle'

import * as styles from '../../../styles/styles'
import global from '../../../variables/global'

type ArticlePageProps = {}

const ArticlePage: NextPage<ArticlePageProps> = () => {
	return (
		<Box>
			<PageHeader
				title={'Arbonia 2180 — таблица секций для комнаты 10–20 м²'}
				description={
					'Готовые примеры расчёта секций Arbonia 2180 для комнат 10, 12, 15, 16, 18 и 20 м². Таблица при ΔT=50 и 60 °C, выбор складского размера и ограничения метода.'
				}
			/>
			<PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{
						title: 'Сколько секций радиатора Arbonia 2180 нужно',
						link: '/articles/arbonia-2180-calc',
					},
				]}
			/>
			<Hero
				imgPath={'/images/sliders/high.jpeg'}
				header={'Сколько секций радиатора Arbonia 2180 нужно для комнаты 10–20 м²'}
			/>
			<Typography
				sx={{ ...global.pagePadding, maxWidth: '900px', margin: 'auto', ...styles.standardText }}
				marginY='20px'
				component={'div'}
			>
                <p>Ниже — готовые примеры для комнат 10–20 м² при условной нагрузке 100 Вт на 1 м².
                    Таблица показывает разницу между ΔT50 и ΔT60 для одной модели Arbonia 2180.
                    Если нужно менять площадь, высоту потолка и условия комнаты, используйте
                    <a href='/articles/arbonia-2180-po-ploshadi'> интерактивный калькулятор 2180</a>.
                    Эти примеры не заменяют расчёт теплопотерь.</p>

				<h2 style={{ marginTop: '40px' }}>Таблица секций для комнаты 10–20 м²</h2>
				<p>
					Ниже приведены готовые примеры для условной нагрузки 100 Вт на 1 м². Это исходное допущение для сравнения,
					а не расчёт теплопотерь вашего помещения. При известной проектной нагрузке используйте именно её.
					Для изменения площади, высоты потолков и условий комнаты есть
					<a href='/articles/arbonia-2180-po-ploshadi'> отдельный калькулятор Arbonia 2180</a>.
				</p>
				<p>
					По данным каталога одна секция Arbonia 2180 даёт 130 Вт при ΔT=50 °C и 164 Вт при ΔT=60 °C.
					Режим 75/65/20 соответствует ΔT=50 °C, а 85/75/20 — ΔT=60 °C. Поэтому одинаковая площадь комнаты
					может требовать разного числа секций при разной температуре воды.
				</p>
				<div style={{ overflowX: 'auto' }}>
					<table style={{ width: '100%', borderCollapse: 'collapse' }}>
						<thead><tr>
							<th style={{ padding: 12, border: '1px solid #ddd' }}>Площадь, м²</th>
							<th style={{ padding: 12, border: '1px solid #ddd' }}>Нагрузка в примере, Вт</th>
							<th style={{ padding: 12, border: '1px solid #ddd' }}>Секций не менее, ΔT=50 °C</th>
							<th style={{ padding: 12, border: '1px solid #ddd' }}>Секций не менее, ΔT=60 °C</th>
						</tr></thead>
						<tbody>{[10, 12, 15, 16, 18, 20].map(area => <tr key={area}>
							<td style={{ padding: 12, border: '1px solid #ddd' }}>{area}</td>
							<td style={{ padding: 12, border: '1px solid #ddd' }}>{area * 100}</td>
							<td style={{ padding: 12, border: '1px solid #ddd' }}>{Math.ceil(area * 100 / 130)}</td>
							<td style={{ padding: 12, border: '1px solid #ddd' }}>{Math.ceil(area * 100 / 164)}</td>
						</tr>)}</tbody>
					</table>
				</div>
				<h2 style={{ marginTop: '40px' }}>Как перейти от расчёта к складской модели</h2>
				<p>
					Для Arbonia 2180 в складской программе представлены 4, 6, 8, 10 и 12 секций. Расчётный минимум округляют
					вверх до доступного исполнения. Например, для нагрузки 1000 Вт при ΔT=60 °C нужно не менее 7 секций:
					ближайший больший складской размер — 8 секций, мощностью 1312 Вт. При ΔT=50 °C этот же прибор даёт 1040 Вт.
				</p>
				<p>
					Для 1500 Вт потребуется не менее 12 секций при ΔT=50 °C или 10 секций при ΔT=60 °C. Для 2000 Вт
					12 секций недостаточно даже при ΔT=60 °C: их мощность составляет 1968 Вт. В таком случае сравнивают
					заказной размер, два прибора или <a href='/models/3180'>трёхтрубчатый Arbonia 3180</a>.
				</p>
				<Box textAlign='center'>
					<img src='/images/articles/20250814.jpg' alt='Вертикальный трубчатый радиатор Arbonia 2180'
						width={700} height='auto' style={{ maxWidth: '100%', height: 'auto' }} />
				</Box>
				<h2 style={{ marginTop: '40px' }}>Что проверить перед покупкой</h2>
				<ul>
					<li>Проектные теплопотери комнаты и температуру подачи, обратки и воздуха.</li>
					<li>Свободную длину стены: в карточках магазина длина радиатора рассчитывается как 45 × N + 26 мм; место арматуры учитывают отдельно.</li>
					<li>Место для кронштейнов, арматуры и монтажных зазоров.</li>
					<li>Боковое или нижнее подключение и совместимость с существующей разводкой.</li>
				</ul>
				<p>
					Размеры и актуальные цены смотрите на <a href='/models/2180'>странице модели Arbonia 2180</a>.
					Для другого режима работы сначала пересчитайте <a href='/articles/delta-t-teplootdacha'>теплоотдачу по ΔT</a>.
					Расположение относительно пола, стены и окна разобрано в
					<a href='/articles/gde-razmestit-radiator-otopleniya'> рекомендациях по размещению радиатора</a>.
				</p>
				<p>
					Таблица помогает сравнить варианты. Окончательный подбор учитывает утепление, остекление, высоту потолков
					и фактический режим отопления. Для нестандартной комнаты передайте эти данные специалисту вместе с планом.
				</p>
			</Typography>
		</Box>
	)
}

export default ArticlePage

export async function getStaticProps() {
	return {
		props: {}, // will be passed to the page component as props
	}
}
