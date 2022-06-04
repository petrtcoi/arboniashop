import * as csv from 'csv-string'

const parseGoogleSheetCsv = (data: string) => {
    
    const [csvHeaders, ...csvData] = csv.parse(data)

    const results: any[] = csvData.map(row => {
        const res: { [key: string]: string } = {}
        // eslint-disable-next-line array-callback-return
        csvHeaders.map((key: string, index: number) => { res[key] = row[index] })
        return res
    })
    return results
}

export default parseGoogleSheetCsv