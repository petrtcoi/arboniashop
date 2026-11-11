import { ColorOrigin } from '../models/colorOrigin.model'
import { ConnectionOrigin } from '../models/connectionOrigin.model'
import { ModelOrigin } from '../models/modelOrigin.model'
import { DISCOUNT } from '../variables/currency'
import calcRadiatorCost from './calcRadiatorCost'
import formatPrice from './formatPrice'

/** Курс, с которым считает цены клиент (useGetCurrency): постоянный, поэтому SSR-title совпадает с ценой на странице. */
export const DEFAULT_CURRENCY_RATE = 104.54
export const PRICE_RATE = DEFAULT_CURRENCY_RATE * DISCOUNT

function stockSections(model: ModelOrigin): number[] {
	return (model.inStockSections || '')
		.split(',')
		.map(item => Number(item.trim()))
		.filter(item => Number.isFinite(item) && item > 0)
}

/** Цена складского исполнения при минимальном складском числе секций — как первая строка таблицы ModelBlock. */
export function getStockModelPrice(model: ModelOrigin, colors: ColorOrigin[], connections: ConnectionOrigin[]): number | null {
	const color = colors.find(item => item.id === model.color)
	const connection = connections.find(item => item.id === model.connection)
	const sections = stockSections(model)
	if (!color || !connection || sections.length === 0) return null
	const price = calcRadiatorCost({ model, color, connection, sectionQnty: Math.min(...sections), currencyRate: PRICE_RATE }).price.noConsole
	return Number.isFinite(price) && price > 0 ? price : null
}

/** Минимальная цена среди складских исполнений: по списку id или по коду серии (`2050` → `2050-*`). */
export function getStockPriceFrom({
	models,
	colors,
	connections,
	ids,
	familyCodes,
}: {
	models: ModelOrigin[]
	colors: ColorOrigin[]
	connections: ConnectionOrigin[]
	ids?: string[]
	familyCodes?: string[]
}): number | null {
	const selected = models.filter(model =>
		model.inStock === 'true' &&
		((ids && ids.includes(model.id)) || (familyCodes && familyCodes.some(code => model.id.startsWith(`${code}-`)))),
	)
	const prices = selected.map(model => getStockModelPrice(model, colors, connections)).filter((p): p is number => p !== null)
	return prices.length ? Math.min(...prices) : null
}

export function formatPriceFrom(value: number) {
	return `${formatPrice(value)} ₽`
}
