import axios from "axios"

import readGoogleCsv from "./readGoogleCsv"
import { ConnectionOrigin } from "../models/connectionOrigin.model"

const docId = '1PkSoT3YYs8ja_ZQ2Q1CrjBgWN7K6St5Igkg9UmMjdM4'
const sheetLink = `https://docs.google.com/spreadsheets/d/${docId}/export?format=csv`


const getColorsData = async (): Promise<ConnectionOrigin[]> => {

    const csvFile = await axios.get(sheetLink)
    const data: ConnectionOrigin[] = readGoogleCsv(csvFile.data)

    return data
}

export default getColorsData