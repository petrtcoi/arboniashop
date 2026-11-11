import readGoogleCsv from "./readGoogleCsv";
import loadGoogleCsv from "./loadGoogleCsv";
import { ColorOrigin } from "../models/colorOrigin.model";

const docId = "1L5og5qEzzCttFXADZYsmM6auajhClMeVpHbOAX21ZnM";

const getColorsData = async (): Promise<ColorOrigin[]> => {
  const csvFile = await loadGoogleCsv(docId, 'colors.csv');
  const data: ColorOrigin[] = readGoogleCsv(csvFile);

  return data;
};

export default getColorsData;
