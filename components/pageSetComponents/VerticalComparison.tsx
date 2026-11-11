import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { SetComponentProps } from '../../models/setComponentProps.model'
import { CurrencyContext } from '../../contexts/currencyContext'
import calcRadiatorCost from '../../utils/calcRadiatorCost'
import formatPrice from '../../utils/formatPrice'

const VerticalComparison: React.FC<SetComponentProps> = ({ models, colors, connections }) => {
	const { rateEuro } = useContext(CurrencyContext)
	const color = colors.find(x => x.id === '9016')
	const connection = connections.find(x => x.id === '12-34') || connections.find(x => x.id === '12')
	const selected = ['2180', '3180'].map(id => models.find(x => x.id === `${id}-9016-12`))
	if (!color || !connection || selected.some(x => !x)) return null
	const sectionCount = 8
	const rows = selected.map(model => {
		if (!model) return null
		const { price } = calcRadiatorCost({ model, color, connection, sectionQnty: sectionCount, currencyRate: rateEuro })
		return { model, price: price.noConsole }
	})
	return (
        <Box sx={{
            marginTop: '36px'
        }}>
            <Typography component='h2' variant='h5'>Сравнение Arbonia 2180 и 3180 на 8 секций</Typography>
            <p>Обе модели имеют высоту 180 см. Сравним белое боковое исполнение RAL 9016 при одинаковом числе секций.
			2180 занимает меньше места по глубине, а 3180 даёт больше мощности при той же длине корпуса.</p>
            <TableContainer>
				<Table size='small' sx={{ minWidth: 640 }}>
					<TableHead><TableRow>
						<TableCell>Модель</TableCell><TableCell>Высота / глубина / длина, мм</TableCell>
						<TableCell>Мощность ΔT=50 °C / ΔT=60 °C, Вт</TableCell><TableCell>Цена, руб.</TableCell>
					</TableRow></TableHead>
					<TableBody>{rows.map(row => row && <TableRow key={row.model.id}>
						<TableCell><a href={`/models/${row.model.id.split('-')[0]}`}>Arbonia {row.model.nameShort}</a></TableCell>
						<TableCell>{row.model.height} / {row.model.width} / {Number(row.model.lengthSection) * sectionCount + 26}</TableCell>
						<TableCell>{Math.floor(Number(row.model.dt50) * sectionCount)} / {Math.floor(Number(row.model.dt60) * sectionCount)}</TableCell>
						<TableCell><a href={`/models/${row.model.id}`}>{formatPrice(row.price)}</a></TableCell>
					</TableRow>)}</TableBody>
				</Table>
			</TableContainer>
            <p>ΔT=50 °C соответствует режиму 75/65/20, ΔT=60 °C — 85/75/20. Для другого режима мощность пересчитывают.
			Цена указана за радиатор на 8 секций. Кронштейны и арматуру подбирают отдельно.</p>
            <p>Если глубина стены ограничена, начните с <a href='/models/2180'>Arbonia 2180</a>.
			Если при доступной длине не хватает мощности, сравните <a href='/models/3180'>Arbonia 3180</a>.
			Для окончательного подбора используйте <a href='/articles/2180-3180'>подробное сравнение моделей</a>
			и <a href='/articles/vertical-radiator-power'>расчёт мощности вертикального радиатора</a>.</p>
        </Box>
    );
}

export default VerticalComparison
