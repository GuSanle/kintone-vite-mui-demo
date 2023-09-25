import { KintoneRestAPIClient } from '@kintone/rest-api-client'

export class KintoneApi {
  client: KintoneRestAPIClient
  constructor() {
    this.client = new KintoneRestAPIClient({})
  }

  public async getAllRecords(app: string) {
    return await this.client.record.getAllRecords<kintoneRest.GoodListAppRecord>({ app })
  }

  public async getRecords(
    app: string,
    fields?: Array<keyof kintone.types.Fields>,
    query?: string,
    totalCount?: boolean,
  ) {
    const result = await this.client.record.getRecords<Partial<kintoneRest.GoodListAppRecord>>({
      app,
      fields,
      query,
      totalCount,
    })
    return result.records
  }
}
