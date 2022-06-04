type ColorOrigin = {
    id: string
    name: string
    nameShort: string
    description: string
    baseRate: string

    img: string
    type?: "Core" | "Trend"
    group?: "Warm Colours" | "Cool Colours"
}

export type { ColorOrigin }