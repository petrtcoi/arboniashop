import axios from "axios";

import readGoogleCsv from "./readGoogleCsv";
import { ConnectionOrigin } from "../models/connectionOrigin.model";

const docId = "1YS2WH77yT-QHcIYgO2Rk7PS2Q6rdiyLH38HzVhdBc0s";
const sheetLink = `https://docs.google.com/spreadsheets/d/${docId}/export?format=csv`;

const getColorsData = async (): Promise<ConnectionOrigin[]> => {
  const csvFile = await axios.get(sheetLink);
  const data: ConnectionOrigin[] = readGoogleCsv(csvFile.data);

  return data;
};

export default getColorsData;
