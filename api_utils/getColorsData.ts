import axios from "axios"

import readGoogleCsv from "./readGoogleCsv"
import { ColorOrigin } from "../models/colorOrigin.model"

const docId = '1L5og5qEzzCttFXADZYsmM6auajhClMeVpHbOAX21ZnM'
const sheetLink = `https://docs.google.com/spreadsheets/d/${docId}/export?format=csv`


const getColorsData = async (): Promise<ColorOrigin[]> => {

    const csvFile = await axios.get(sheetLink)
    const data: ColorOrigin[] = readGoogleCsv(csvFile.data)

    return data
}

export default getColorsData