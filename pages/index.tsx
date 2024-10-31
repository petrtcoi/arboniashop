import { Box, Typography } from '@mui/material'
import type { NextPage } from 'next'

import getColorsData from '../api_utils/getColorsData'
import getConnectionsData from '../api_utils/getConnectionsData'
import getModelsData from '../api_utils/getModelsData'
import BlockHowReadModel from '../components/blockHowReadModel/blockHowReadModel'
import PageHeader from '../components/pageHeader/pageHeader'
import AboutArbonia from '../components/pageMain/aboutArbonia'
import AboutManufacturer from '../components/pageMain/aboutManufacturer'
import Advantages from '../components/pageMain/advantages'
import { AllModels } from '../components/pageMain/allModels'
import Bestsellers from '../components/pageMain/bestsellers'
import { InStockModels } from '../components/pageMain/inStockModels'
import Portfolio from '../components/pageMain/portfolio'
import WhyMouseLite from '../components/pageMain/whyMouseLite'
import PageTitle from '../components/pageTitle/pageTitle'
import { ColorOrigin } from '../models/colorOrigin.model'
import { ConnectionOrigin } from '../models/connectionOrigin.model'
import { ModelOrigin } from '../models/modelOrigin.model'

type Props = {
	models: ModelOrigin[]
	colors: ColorOrigin[]
	connections: ConnectionOrigin[]
}

const Home: NextPage<Props> = (props: Props) => {
	return (
		<Box>
			<PageHeader
				title={'Радиаторы Arbonia купить в Москве и Петербурге | доставка по Росси | Гарантия 10 лет'}
				description={
					'Радиаторы Arbonia в наличии и под заказ. Быстрая доставка в любой город России. Официальная гарантия 10 лет. В наличии наиболее популярные модели.'
				}
			/>
			<PageTitle
				header={'Радиаторы Arbonia с официальной гарантией 10 лет'}
				subheader={'Доставка со складов в Москве и Санкт-Петербурге в любой город России'}
			/>

			{/* <Hero
				imgPath={'/images/sliders/high.jpeg'}
				header={'Трубчатые радиаторы Arbonia'}
				subheader={'Полный ассортимент стальных трубчатых радиаторов. В наличии и под заказ.'}
			/> */}
			<Box>
				<Typography
					variant='h4'
					component={'h1'}
					align='center'
					sx={{ marginTop: '50px' }}
				>
					Трубчатые радиаторы <span style={{ color: '#EF7D00', fontWeight: 600 }}>Arbonia</span>
				</Typography>
				<Typography style={{ fontSize: '0.8rem', textAlign: 'center', opacity: 0.9 }}>
					Полный ассортимент стальных трубчатых радиаторов. В наличии и под заказ
				</Typography>
			</Box>

			<Box>
				<Box
					marginTop='50px'
					paddingX={{ xs: '10px', md: '20px' }}
				>
					<Bestsellers {...props} />
				</Box>

				<Box
					marginTop='50px'
					paddingX={{ xs: '10px', md: '40px' }}
				>
					<InStockModels />
					<Box marginTop='30px'>
						<BlockHowReadModel />
					</Box>
				</Box>

				<Box
					marginTop='50px'
					paddingX={{ xs: '10px', md: '20px' }}
				>
					<AboutArbonia />
				</Box>

				<Box
					marginTop='40px'
					paddingY='40px'
					sx={{ backgroundColor: '#e6e6e6' }}
				>
					<Box paddingX={{ xs: '10px', md: '20px' }}>
						<WhyMouseLite />
					</Box>
				</Box>

				<Box
					marginTop='50px'
					paddingX={{ xs: '20px', md: '30px' }}
				>
					<Advantages />
				</Box>

				<Box
					marginTop='40px'
					paddingY='40px'
				>
					<Box paddingX={{ xs: '20px', md: '20px' }}>
						<AboutManufacturer />
					</Box>
				</Box>

				<Box
					id='all-models'
					marginTop='-100px'
					paddingTop='50px'
					paddingX={{ xs: '10px', md: '20px' }}
				>
					<AllModels models={props.models} />
				</Box>

				<Box
					marginTop='40px'
					paddingX={{ xs: '10px', md: '20px' }}
				>
					<Portfolio />
				</Box>
			</Box>
		</Box>
	)
}

export async function getStaticProps() {
	const models: ModelOrigin[] = await getModelsData()
	const colors: ColorOrigin[] = await getColorsData()
	const connections: ConnectionOrigin[] = await getConnectionsData()

	return {
		props: {
			models,
			colors,
			connections,
		},
	}
}

export default Home
