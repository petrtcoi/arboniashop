import { Box } from '@mui/material'
import { NextPage } from 'next'

import PageTitle from '../../components/pageTitle/pageTitle'

import getColorsData from '../../api_utils/getColorsData'
import getConnectionsData from '../../api_utils/getConnectionsData'
import getModelsData from '../../api_utils/getModelsData'

import SetHighModel from '../../components/pageSetComponents/setHighModel'
import SetLowModel from '../../components/pageSetComponents/setLowModel'
import SetRAL9016Model from '../../components/pageSetComponents/setRAL9016Model'
import Set2180Stock from '../models/2180'

import { ColorOrigin } from '../../models/colorOrigin.model'
import { ConnectionOrigin } from '../../models/connectionOrigin.model'
import { ModelOrigin } from '../../models/modelOrigin.model'
import { SetComponentProps } from '../../models/setComponentProps.model'

const SETS_MAP: {
	[key: string]: { title: string; component: React.FC<SetComponentProps> }
} = {
	'low-models': {
		title: 'Низкие радиаторы ArboniaColumn',
		component: SetLowModel,
	},
	'high-models': {
		title: 'Высокие радиаторы ArboniaColumn',
		component: SetHighModel,
	},
	ral9016: {
		title: 'Arbonia  RAL 9016',
		component: SetRAL9016Model,
	},
	'2180-stock': {
		title: 'Радиаторы Arbonia 2180 (склад)',
		component: Set2180Stock,
	},
}

type SetPageProps = {
	models: ModelOrigin[]
	colors: ColorOrigin[]
	connections: ConnectionOrigin[]
	setId: string
}

const SetPage: NextPage<SetPageProps> = ({
	models,
	colors,
	connections,
	setId,
}) => {
	const Component: React.FC<SetComponentProps> | null = SETS_MAP[setId]
		? SETS_MAP[setId].component
		: null

	if (Component === null) return <></>

	return (
		<Box>
			<PageTitle
				header={'Специализированный магазин Arbonia в России'}
				subheader={'Доставка со складов в Москве и Санкт-Петербурге'}
				breadcrumbs={[
					{ title: 'Главная', link: '/' },
					{ title: SETS_MAP[setId].title, link: `/catalog/${setId}` },
				]}
			/>
			<Box>
				<Component
					models={models}
					connections={connections}
					colors={colors}
				/>
			</Box>
		</Box>
	)
}

export default SetPage

export async function getStaticProps(context: { params: { id: string } }) {
	const setId = context.params.id

	const models: ModelOrigin[] = await getModelsData()
	const colors: ColorOrigin[] = await getColorsData()
	const connections: ConnectionOrigin[] = await getConnectionsData()

	return {
		props: {
			models,
			colors,
			connections,
			setId,
		},
	}
}

export async function getStaticPaths() {
	return {
		paths: Object.keys(SETS_MAP).map(setId => {
			return { params: { id: setId } }
		}),
		fallback: false, // See the "fallback" section below
	}
}
