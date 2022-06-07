import { ColorOrigin } from "../models/colorOrigin.model"
import { ModelOrigin } from "../models/modelOrigin.model"

type getConsolesQnty = {
    model: ModelOrigin
    sectionQnty: number
}

const getConsolesQnty = ({ model, sectionQnty }: getConsolesQnty): number => {

    const qnty = sectionQnty < 21 ? 2 :
        sectionQnty < 31 ? 3 :
            sectionQnty < 41 ? 4 :
                sectionQnty < 51 ? 5 :
                    0


    return qnty
}

export default getConsolesQnty