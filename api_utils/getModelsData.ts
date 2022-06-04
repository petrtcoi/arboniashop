import axios from "axios"

import readGoogleCsv from "./readGoogleCsv"
import { ModelOrigin } from "../models/modelOrigin.model"

const docId = '1vIL5-oS-fk8T5syIk1h-Zr_WcRzPrXcGRyQ1Sj2OBkc'
const sheetLink = `https://docs.google.com/spreadsheets/d/${docId}/export?format=csv`


const getModelsData = async (): Promise<ModelOrigin[]> => {

    const csvFile = await axios.get(sheetLink)
    const data: ModelOrigin[] = readGoogleCsv(csvFile.data)

    return data
}

export default getModelsData