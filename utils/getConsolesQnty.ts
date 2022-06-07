import { ColorOrigin } from "../models/colorOrigin.model"
import { ModelOrigin } from "../models/modelOrigin.model"

type getConsolesQnty = {
    model: ModelOrigin
    sectionQnty: number
}

const getConsolesQnty = ({ model, sectionQnty }: getConsolesQnty): number => {

    let qnty = 0

    switch (true) {


        case +model.width <= 145 && +model.height <= 1000:
            qnty = sectionQnty <= 28 ? 2 :
                sectionQnty <= 42 ? 3 :
                    sectionQnty <= 52 ? 4 :
                        sectionQnty <= 60 ? 5 :
                            6
            break



        case +model.width <= 145 && +model.height <= 2200:
            qnty = sectionQnty <= 16 ? 2 :
                sectionQnty <= 28 ? 3 :
                    sectionQnty <= 38 ? 4 :
                        sectionQnty <= 48 ? 5 :
                            sectionQnty <= 60 ? 6 :
                                7
            break

        case +model.width <= 145 && +model.height <= 3000:
            qnty = sectionQnty <= 16 ? 2 :
                sectionQnty <= 24 ? 3 :
                    sectionQnty <= 30 ? 4 :
                        5
            break

        case +model.width > 145 && +model.height <= 550:
            qnty = sectionQnty <= 12 ? 2 :
                sectionQnty <= 30 ? 3 :
                    sectionQnty <= 40 ? 4 :
                        sectionQnty <= 50 ? 5 :
                            sectionQnty <= 60 ? 6 :
                                7
            break

        case +model.width > 145 && +model.height <= 1500:
            qnty = sectionQnty <= 16 ? 2 :
                sectionQnty <= 26 ? 3 :
                    sectionQnty <= 36 ? 4 :
                        sectionQnty <= 46 ? 5 :
                            sectionQnty <= 56 ? 6 :
                                7
            break

        case +model.width > 145 && +model.height <= 3000:
            qnty = sectionQnty <= 10 ? 2 :
                sectionQnty <= 18 ? 3 :
                    sectionQnty <= 24 ? 4 :
                        sectionQnty <= 30 ? 5 :
                            6
            break

        default:
            qnty = 4

    }



    return qnty
}

export default getConsolesQnty