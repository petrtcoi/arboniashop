import readGoogleCsv from "./readGoogleCsv";
import loadGoogleCsv from "./loadGoogleCsv";
import { ModelOrigin } from "../models/modelOrigin.model";

const docId = "1BzzhQ_Ux6Q6-JZIHsQH9iECCc7EgJbAI82bM5ZeRsCU";

// Correct transcription errors in the feed for every finish and connection.
// Verified against Arbonia Prices and Technology 2021-N, PDF pages 14–16, 78.
const verifiedHeatOutputs: Record<string, Partial<Pick<ModelOrigin, "dt50" | "dt60">>> = {
  "2057": { dt60: "53" },
  "2100": { dt60: "93" },
  "3037": { dt60: "48" },
  "3057": { dt60: "73" },
  "5045": { dt50: "77", dt60: "98" },
};

const getModelsData = async (): Promise<ModelOrigin[]> => {
  const csvFile = await loadGoogleCsv(docId, 'models.csv');
  const data: ModelOrigin[] = readGoogleCsv(csvFile);

  return data.map(model => ({
    ...model,
    ...verifiedHeatOutputs[model.id.split("-")[0]],
  }));
};

export default getModelsData;
