import { ColorOrigin } from "../models/colorOrigin.model"
import { ModelOrigin } from "../models/modelOrigin.model"

type GetCvdBhQnty = {
    model: ModelOrigin
    sectionQnty: number
}

const getCvdBhQnty = ({ model, sectionQnty }: GetCvdBhQnty): number => {

    let qnty = 0

    switch (true) {


        case +model.height <= 1000:
            qnty = sectionQnty < 21 ? 4 :
                sectionQnty < 41 ? 6 :
                    sectionQnty < 61 ? 8 :
                        0
            break



        case +model.height <= 1500:
            qnty = sectionQnty < 21 ? 4 :
                sectionQnty < 41 ? 8 :
                    sectionQnty < 61 ? 10 :
                        0
            break


        case +model.height <= 2200:

            switch (true) {
                case +model.width <= 180:
                    qnty = sectionQnty < 11 ? 4 :
                        sectionQnty < 21 ? 6 :
                            sectionQnty < 31 ? 8 :
                                sectionQnty < 41 ? 10 :
                                    0
                    break

                default:
                    qnty = sectionQnty < 11 ? 4 :
                        sectionQnty < 21 ? 8 :
                            sectionQnty < 31 ? 10 :
                                sectionQnty < 41 ? 14 :
                                    0
            }



    }



    return qnty
}

export default getCvdBhQnty