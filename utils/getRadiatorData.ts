import { ColorOrigin } from "../models/colorOrigin.model"
import { ConnectionOrigin } from "../models/connectionOrigin.model"
import { ModelOrigin } from "../models/modelOrigin.model"

type Props = {
    model: ModelOrigin
    color: ColorOrigin
    connection: ConnectionOrigin
    sectionQnty: number
    price: number
}
type Return = {
    titleString: string
    skuString: string
    lengthString: string
    dt50String: string
    dt60String: string
    dt70String: string
    priceString: string
}


const getRadiatorData = ({ model, color, connection, sectionQnty, price }: Props): Return => {

    const sectionQntyString: string = sectionQnty < 10 ? '0' + sectionQnty.toString() : sectionQnty.toString()
    return {
        titleString: `Zehnder Charleston ${model.nameShort} / ${sectionQntyString}`,
        skuString: `${model.nameShort}/${sectionQntyString}/${color.nameShort}/${connection.nameShort}`,
        lengthString: `${+model.lengthSection * sectionQnty + 26}`,
        dt50String: `${Math.floor(+model.dt50 * sectionQnty)}`,
        dt60String: `${Math.floor(+model.dt60 * sectionQnty)}`,
        dt70String: `${Math.floor(+model.dt70 * sectionQnty)}`,
        priceString: price.toLocaleString()
    }
}


export default getRadiatorData