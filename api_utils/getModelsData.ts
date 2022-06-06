import axios from "axios"

import readGoogleCsv from "./readGoogleCsv"
import { ModelOrigin } from "../models/modelOrigin.model"

const docId = '1BzzhQ_Ux6Q6-JZIHsQH9iECCc7EgJbAI82bM5ZeRsCU'
const sheetLink = `https://docs.google.com/spreadsheets/d/${docId}/export?format=csv`


const getModelsData = async (): Promise<ModelOrigin[]> => {

    const csvFile = await axios.get(sheetLink)
    const data: ModelOrigin[] = readGoogleCsv(csvFile.data)

    return data
}

export default getModelsData