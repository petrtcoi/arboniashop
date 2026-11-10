import Link from 'next/link';
import { useState } from 'react';

import { Box, Grid, Typography } from '@mui/material';

import PageHeader from '../components/pageHeader/pageHeader';
import PageTitle from '../components/pageTitle/pageTitle';

import trackEvent from '../utils/trackEvent';

import type { NextPage } from 'next';

import Hero from '../components/hero/hero';
import LeadWidget from '../components/leadWidget/LeadWidget'
import * as styles from '../styles/styles';
import global from '../variables/global';

type PageRequestProps = {}

const PageRequest: NextPage<PageRequestProps> = () => {
	const [show, setShow] = useState<boolean>(false)
	const toggleShow = () => setShow(!show)

	return (
		<Box>
			<PageTitle
				header={'Покраска Arbonia в ваш цвет с гарантией'}
				subheader={'Радиаторы Arbonia любого цвета на ваш выбор'}
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: 'Покраска радиаторов Arbonia', link: '/coloring' },
				]}
			/>
			<PageHeader
				title={'Порошковая покраска радиаторов Arbonia с гарантией'}
				description='Порошковая покраска радиатора Arbonia из наличия официальным дилером с сохранением гарантии. Выбранный цвет, сроки и стоимость для вашего исполнения.'
			/>
			<Hero
				imgPath={'/images/sliders/slide-colors.jpg'}
				header={'Покраска радиаторов Arbonia'}
			/>
			<Box sx={{ ...global.pagePadding }}>
				<Box sx={{ maxWidth: '900px', margin: 'auto' }}>
					<Typography sx={{ ...styles.standardText, marginTop: '20px' }}>
						В складскую программу входят наиболее популярные цвета радиаторов Arbonia. Если нужной конфигурации или
						покрытия нет в наличии, можно разместить заказ на заводе. Ориентир на изготовление и поставку — 2–4 месяца;
						актуальный срок зависит от выбранного исполнения и загрузки завода и согласуется при заказе.
					</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '20px' }}>
						Подходящий радиатор из наличия можно перекрасить порошковым способом в согласованный цвет.
						Покраску выполняет официальный дилер, гарантия сохраняется. Ориентир на покраску —{' '}
						<span style={{ ...styles.standardTextRed }}>1–2 недели</span>. Срок готовности, доставку, стоимость работ
						и совместимость выбранного покрытия согласуют для конкретного радиатора. Укажите модель, число секций,
						подключение и желаемый цвет в форме ниже или свяжитесь со специалистами магазина.
					</Typography>
					<Typography component='p' sx={{ ...styles.standardText, marginTop: '20px' }}>
						Способы заказа, образцы и состав стоимости разобраны в статье{' '}
						<a href='/articles/zavodskoy-cvet-arbonia-ili-perekraska-iz-nalichiya'>заводской цвет или перекраска из наличия: как выбрать</a>.
					</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '20px' }}>
						Для белого покрытия прочитайте <a href='/articles/ral-9016-9010-9003-kakoy-belyy-vybrat'>чем отличаются
						RAL 9016, RAL 9010 и RAL 9003</a>: вместе с оттенком нужно согласовать степень блеска и образец покрытия.
					</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '20px' }}>
						До заявки определите, должен ли прибор совпасть со стеной или стать акцентом, и проверьте оттенок при разном
						освещении. Пошаговый алгоритм, сравнение RAL 9016, антрацита и заказной палитры собраны в статье{' '}
						<Link href='/articles/kak-vybrat-cvet-radiatora-pod-interer' style={{ textDecoration: 'none' }}>
							<Typography component='span' sx={{ ...styles.standardTextRedLink }}>
								как выбрать цвет радиатора Arbonia под интерьер
							</Typography>
						</Link>
						.
					</Typography>
					<Typography sx={{ ...styles.standardText, marginTop: '20px' }}></Typography>
				</Box>
				<Box marginY={'30px'}>
					<Typography
						variant='h4'
						component='h2'
						gutterBottom
						textAlign='center'
						sx={{ textTransform: 'uppercase' }}
					>
						Запрос на подбор и покраску радиаторов
					</Typography>
				</Box>
				<Box
					marginY='20px'
					padding='10px'
					sx={{ backgroundColor: '#333333', borderRadius: '10px' }}
				>
					<Grid
						container
						spacing={2}
						alignItems={'center'}
					>
						<Grid
							item
							xs={12}
							sm={4}
							textAlign='center'
						>
							<Typography
								sx={{ ...styles.smallText, color: '#e6e6e6' }}
								display='inline'
							>
								тел.:&ensp;
							</Typography>
							<a
								style={{ textDecoration: 'none' }}
								href={`tel:${global.phone495}`}
							>
								<Typography
									sx={{ ...styles.standardTextLink, color: 'white' }}
									display='inline'
								>
									{global.phone495String}
								</Typography>
							</a>
							<Typography
								sx={{ ...styles.standardText, color: 'white' }}
								display='inline'
							>
								<br />
								<Typography
									sx={{ ...styles.smallText, color: '#333333' }}
									display='inline'
									component='span'
								>
									тел.:&ensp;
								</Typography>
							</Typography>
							<a
								style={{ textDecoration: 'none' }}
								href={`tel:${global.phone812}`}
							>
								<Typography
									sx={{ ...styles.standardTextLink, color: 'white' }}
									display='inline'
								>
									{global.phone812String}
								</Typography>
							</a>
						</Grid>
						<Grid
							item
							xs={12}
							sm={4}
							textAlign='center'
						>
							<Typography
								sx={{ ...styles.smallText, color: '#e6e6e6' }}
								display='inline'
							>
								электронная почта:&ensp;
							</Typography>
							<a
								style={{ textDecoration: 'none' }}
								href={`mailto:${global.email}`}
							>
								<Typography
									sx={{ ...styles.standardTextLink, color: 'white' }}
									display='inline'
								>
									{global.email}
								</Typography>
							</a>
						</Grid>
						<Grid
							item
							xs={12}
							sm={4}
							textAlign='center'
						>
							<Typography
								sx={{ ...styles.smallText, color: '#e6e6e6' }}
								display='inline'
							>
								whatsapp:&ensp;
							</Typography>
							<a
								style={{ textDecoration: 'none' }}
								href={`https://wa.me/${global.whatsApp}`}
							>
								<Typography
									sx={{ ...styles.standardTextLink, color: 'white' }}
									display='inline'
								>
									{global.whatsAppString}
								</Typography>
							</a>
						</Grid>
					</Grid>
				</Box>
				<Typography
					sx={{ ...styles.standardText }}
					textAlign='center'
				>
					Также вы можете заполнить форму, представленную ниже.
				</Typography>
				<Box marginTop='20px'>
					<a onClick={() => toggleShow()}>
						<Typography
							sx={styles.smallTextGreenUnderline}
							textAlign='center'
						>
							<span style={{ textDecorationStyle: 'dotted' }}>Какая информация нам нужна</span>
						</Typography>
					</a>
				</Box>

				{show && (
					<Box
						padding='20px'
						sx={{ backgroundColor: '#e6e6e6', borderRadius: '10px' }}
					>
						<Typography
							sx={{ ...styles.standardText }}
							component={'span'}
						>
							Информация, которая нужна для правильного побора радиаторов: (если каких-то данных пока нет - то можно
							отправить то, что уже известно)
							<ul>
								<li>Размеры помещений, высота потолков</li>
								<li>
									Желаемое место расположения радиаторов. Доступные габариты. Например, если радиатор ставится под окно,
									то: высота подоконника и длина окна
								</li>
								<li>Если возможно - план квартиры / дома, что упростит общение</li>
								<li>
									Тип подключения радиаторов в вашем доме: индивидуальная разводка труб по полу или общий стояк
									отопления
								</li>
								<li>Город доставки</li>
							</ul>
							Любую иную информацию, которая вам кажется важной и которую нам необходимо учесть. Оставьте ваши
							контактные данные, чтобы мы могли связаться с вами и получить дополнительную информацию в случае
							необходимости.
						</Typography>
					</Box>
				)}

				<Box marginTop='24px'>
					<LeadWidget
						store='ArboniaShop.ru'
						successUrl='/accepted'
						privacyUrl='/privacy'
						termsUrl='/agreement'
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default PageRequest

export async function getStaticProps() {
	return {
		props: {}, // will be passed to the page component as props
	}
}
