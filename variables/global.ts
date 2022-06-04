const global: { [key: string]: any } = {
    phone812String: '(812) 648-40-12',
    phone812: '+78126484012',
    phone495String: '(495) 055-40-12',
    phone495: '+74950554012',
    whatsAppString: '+1 (218) 516-15-29',
    whatsApp: '12185161529',
    pages: [
        ['Каталог', '/catalog'],
        ['Доставка и оплата', '/delivery'],
        ['Запрос на радиаторы', '/request'],
        ['Информация', '/articles'],
        ['О магазине', '/about']
    ],
    website: 'www.zehnders.ru',
    email: 'mail@zehnders.ru',
    emailFrom: 'Zehnders.ru <mail@zehnders.ru>',
    imagesModelPath: '/images/models/',
    localStorageShoppingCartItemsKey: 'shoppingCartItems',
    emailNotifications: 'mail@zehnders.ru',
    sectionsDefaultMin: 4,
    sectionsDefaultMax: 64,
    pagePadding: { paddingTop: "30px", paddingBottom: "40px", paddingX: { xs: "20px", md: "40px" } }
}

export default global