import readGoogleCsv from "./readGoogleCsv";
import loadGoogleCsv from "./loadGoogleCsv";
import { ConnectionOrigin } from "../models/connectionOrigin.model";

const docId = "1YS2WH77yT-QHcIYgO2Rk7PS2Q6rdiyLH38HzVhdBc0s";

const getColorsData = async (): Promise<ConnectionOrigin[]> => {
  const csvFile = await loadGoogleCsv(docId, 'connections.csv');
  const data: ConnectionOrigin[] = readGoogleCsv(csvFile);

  return data;
};

export default getColorsData;
