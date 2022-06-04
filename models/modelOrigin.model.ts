type ModelOrigin = {
    id: string
    name: string
    nameLong: string
    nameShort: string

    description?: string
    width: string
    height: string
    lengthSection: string

    badgesString?: string
    
    dt50: string
    dt60: string
    dt70: string
    priceSectionEuro: string

    imagePrimary: string
    imagesOther?: string

    inStock?: 'true'
    color?: string
    connection?: string
    inStockSections?: string

    exponentN: string  // Экспонента n
    weightSection: string //Вес (без воды) М кг / секцию
    volumeSection: string  // Объем воды V дм3 / секцию
    normalFlow: string // Нормальный расход одной секции qms кг / час секц.
}

export type { ModelOrigin }