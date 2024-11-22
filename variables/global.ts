const global: { [key: string]: any } = {
	phone812String: '(812) 409-38-55',
	phone812: '+78124093855',
	phone495String: '(495)  204-29-55',
	phone495: '+74952042955',
	whatsAppString: '+79006522658',
	whatsApp: '79006522658',
	pages: [
		['Главная', '/'],
		['О магазине', '/about'],
		['Покраска', '/coloring'],
		['Доставка и оплата', '/delivery'],
		['Запрос на радиаторы', '/request'],
		['Информация', '/articles'],
		['Новости', '/news'],
		['Вопрос-Ответ', '/articles/faq'],
	],
	website: 'www.arboniashop.ru',
	email: 'mail@arboniashop.ru',
	emailFrom: 'ArboniaShop.ru <mail@arboniashop.ru>',
	imagesModelPath: '/images/models/',
	localStorageShoppingCartItemsKey: 'shoppingCartItems',
	emailNotifications: 'mail@arboniashop.ru',
	sectionsDefaultMin: 4,
	sectionsDefaultMax: 64,
	pagePadding: {
		paddingTop: '30px',
		paddingBottom: '40px',
		paddingX: { xs: '20px', md: '40px' },
	},
}

export default global
