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
				title={'Arbonia 2180 vs 3180: чем отличаются и когда что выбрать'}
				description={
					'Сравниваем 2- и 3-трубчатые модели высотой 1,8 м: толщина, мощность, где уместнее 2180, а где лучше 3180. Практические сценарии и советы под подбор.'
				}
			/>
            <PageTitle
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Полезная информация', link: '/articles' },
					{
						title: 'Сравнение 2180 и 3180',
						link: '/articles/2180-3180',
					},
				]}
			/>
            <Hero
				imgPath={'/images/sliders/slide-5.jpeg'}
				header={'Arbonia 2180 vs 3180: чем отличаются и когда что выбрать'}
			/>
            <Box sx={{ ...global.pagePadding, maxWidth: '900px', margin: 'auto' }}>
				<Typography
                    sx={{
                        marginY: '20px',
                        ...styles.standardText
                    }}>
					Ищете высокие трубчатые решения Arbonia высотой 1,8 м и сомневаетесь между 2180 и 3180? Мы сравнили
					теплоотдачу, толщину и сценарии применения. Для выбора и покупки переходите в каталог{' '}
					<a
						style={{ textDecoration: 'none' }}
						href='/catalog/high-models'
					>
						<Typography
							sx={{ ...styles.standardTextRedLink }}
							component='span'
						>
							Вертикальные радиаторы Arbonia
						</Typography>
					</a>
					. Ниже - именно разбор различий и практические кейсы.
				</Typography>

                <h2>Главные различия двух моделей высотой 1800 мм</h2>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                        <thead><tr><th>Параметр</th><th>2180</th><th>3180</th></tr></thead>
                        <tbody>
                            <tr><td>Глубина корпуса</td><td>65 мм</td><td>105 мм</td></tr>
                            <tr><td>Мощность секции при ΔT50</td><td>130 Вт</td><td>173 Вт</td></tr>
                            <tr><td>Мощность секции при ΔT60</td><td>164 Вт</td><td>219 Вт</td></tr>
                            <tr><td>Сухая масса секции</td><td>2,29 кг</td><td>3,43 кг</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>Данные приведены по карточкам моделей. 2180 уменьшает выступ корпуса, 3180 позволяет получить
                    больше мощности при одинаковой длине. Для выбора самого места и вертикальной формы используйте
                    <a href='/articles/high-arbonia'> руководство по простенку и планировке</a>.</p>

				<Typography
					variant='h5'
					component={'h2'}
					sx={{
                        marginTop: '40px'
                    }}
				>
					2180 или 3180? Что выбрать?
				</Typography>
				<Typography
                    sx={{
                        marginY: '20px',
                        ...styles.standardText
                    }}>
					Модели Arbonia 2180 и Arbonia 3180 относятся к одной серии, но различаются по конструкции и, как следствие, по
					тепловым характеристикам. Основное отличие заключается в числе трубок: радиатор 2180 - двухтрубчатый, а 3180 -
					трёхтрубчатый.
				</Typography>
				<Typography
                    sx={{
                        marginY: '20px',
                        ...styles.standardText
                    }}>
					При одинаковой высоте 1,8 метра радиатор Arbonia 2180 имеет толщину всего 65 мм, в то время как более мощная
					версия 3180 - 105 мм. Дополнительная трубка в каждой секции повышает теплоотдачу, поэтому модель 3180
					обеспечивает более интенсивный прогрев воздуха и лучше подходит для помещений с большими теплопотерями или
					высокими потолками.
				</Typography>
				<Typography
                    sx={{
                        marginY: '20px',
                        ...styles.standardText
                    }}>
					Тем не менее, выбор не всегда очевиден. Если площадь комнаты позволяет установить радиатор с большей шириной и
					тепловой мощности модели 2180 при рабочем режиме достаточно для расчётной нагрузки, именно она станет оптимальным решением. Эта
					модель легче, визуально изящнее и универсальнее в установке - её можно монтировать даже в узких пространствах,
					где каждый сантиметр важен.
				</Typography>
				<Typography
                    sx={{
                        marginY: '20px',
                        ...styles.standardText
                    }}>
					Радиатор Arbonia 2180 имеет следующие преимущества перед своим 3-трубчатым “родственником”:
					<ul>
						<li>
							<Box sx={{ ...styles.standardText }}>
								<strong>Стоимость для одинаковой нагрузки</strong>. Сравнивайте полные исполнения, которые покрывают одну нагрузку при одинаковом температурном режиме. Нужное число секций, арматура и покрытие могут изменить итоговую цену; универсально более дешёвой модели нет.
							</Box>
						</li>
						<li>
							<Box
                                sx={{
                                    paddingTop: '10px',
                                    ...styles.standardText
                                }}>
								<strong>Меньшая глубина корпуса</strong>. Разница в 4 см может показаться незначительной, но при монтаже
								рядом с дверными проёмами, в узких проходах или возле мебели она становится ощутимой. Радиатор 2180
								компактнее и аккуратнее смотрится в небольших помещениях.
							</Box>
						</li>
						<li>
							<Box
                                sx={{
                                    paddingTop: '10px',
                                    ...styles.standardText
                                }}>
								<strong>Простота ухода и чистки</strong>. Меньшее количество трубок облегчает доступ к внутренним
								поверхностям. Пыль и загрязнения удаляются быстрее, что особенно актуально в городских квартирах и
								помещениях с pets-friendly интерьером.
							</Box>
						</li>
					</ul>
					Если вы не уверены, какая модель будет оптимальной именно для ваших условий, можно заказать расчёт теплоотдачи
					для обоих вариантов. Сравнение в цифрах поможет принять точное решение, исходя из площади, высоты потолков и
					особенностей планировки.
				</Typography>
                <p>Таблицы при разных температурах и пример по известной нагрузке приведены в
                    <a href='/articles/vertical-radiator-power'> расчёте мощности 2180 и 3180</a>.
                    Нельзя назначать радиатору универсальную площадь обогрева без нагрузки помещения и режима системы.</p>

				<Box sx={{ mt: 4, p: 2, border: '1px solid #eee', borderRadius: '12px', textAlign: 'center' }}>
					<Typography sx={{ ...styles.standardText }}>Нужны цены, наличие и варианты подключений?</Typography>
					<a
						style={{ textDecoration: 'none' }}
						href='/catalog/high-models'
					>
						<Typography sx={{ ...styles.standardTextRedLink }}>
							Перейти в каталог вертикальных радиаторов Arbonia
						</Typography>
					</a>
				</Box>
				<Box
                    sx={{
                        textAlign: 'center',
                        marginTop: '30px'
                    }}>
					<img
						src='/images/articles/30.jpeg'
						alt='Вертикальные радиаторы Arbonia'
						width={600}
						height={600}
					/>
				</Box>
			</Box>
        </Box>
    );
}

export default ArticlePage

export async function getStaticProps() {
	return {
		props: {}, // will be passed to the page component as props
	}
}
