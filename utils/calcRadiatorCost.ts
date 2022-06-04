import { ColorOrigin } from "../models/colorOrigin.model"
import { ConnectionOrigin } from "../models/connectionOrigin.model"
import { ModelOrigin } from "../models/modelOrigin.model"
import { RadiatorConsoles } from "../models/radiatorConsoles.model"
import { RadiatorCost } from "../models/radiatorCost.model"

import global from './../variables/global'
import getCvdBhQnty from "./getCvdBhQnty"

import { cvd } from '../variablesPrices/consolePrices'


type CalcRadiatorCostProps = {
    model: ModelOrigin
    color: ColorOrigin
    connection: ConnectionOrigin
    sectionQnty?: number
    currencyRate: number
}
type CalcRadiatorCost = (props: CalcRadiatorCostProps) => { price: RadiatorCost, consoles: RadiatorConsoles }

const calcRadiatorCost: CalcRadiatorCost = ({ model, color, connection, sectionQnty = global.sectionsDefaultMin, currencyRate }) => {

    // console.log(sectionQnty)
    // console.log(model.priceSectionEuro)
    // console.log(currencyRate)

    const baseCost = +model.priceSectionEuro * sectionQnty
    const baseWithColorCost = color.baseRate ? baseCost * +color.baseRate : baseCost
  

    const consoles = {
        cvd: getCvdBhQnty({ model, sectionQnty })
    }

    const euroCostNoConsole =
        baseWithColorCost +
        +connection.cost
    

    const euroCostCvdBh = euroCostNoConsole + consoles.cvd * (color.id === '9016' ? cvd.ral9016 : cvd.colored)
    
    return ({
        price: {
            noConsole: Math.floor(euroCostNoConsole * currencyRate),
            cvd: Math.floor(euroCostCvdBh * currencyRate)
        },
        consoles
    })
}

export default calcRadiatorCost