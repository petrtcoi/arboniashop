import axios from 'axios';
import { googleSnapshots } from './googleSnapshots';

// Keep the last verified public catalog snapshot available when Google Sheets
// is unreachable from the hosting network.
export default async function loadGoogleCsv(docId: string, snapshot: string): Promise<string> {
  const url = `https://docs.google.com/spreadsheets/d/${docId}/export?format=csv`;
  const localSnapshot = () => {
    const csv = googleSnapshots[snapshot];
    if (!csv) throw new Error(`Missing Google Sheets snapshot: ${snapshot}`);
    return csv;
  };
  if (process.env.GOOGLE_SHEETS_OFFLINE === '1') return localSnapshot();
  try {
    const response = await axios.get<string>(url, { timeout: 5000 });
    return response.data;
  } catch {
    console.warn(`Google Sheets unavailable; using ${snapshot} snapshot`);
    return localSnapshot();
  }
}
