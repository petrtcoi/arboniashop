import axios from "axios"

import readGoogleCsv from "./readGoogleCsv"
import { ColorOrigin } from "../models/colorOrigin.model"

const docId = '1uaeNcLo2ei8XIvV-SyCDXO3KxkcnLzQD9hjA-3KF5G8'
const sheetLink = `https://docs.google.com/spreadsheets/d/${docId}/export?format=csv`


const getColorsData = async (): Promise<ColorOrigin[]> => {

    const csvFile = await axios.get(sheetLink)
    const data: ColorOrigin[] = readGoogleCsv(csvFile.data)

    return data
}

export default getColorsData