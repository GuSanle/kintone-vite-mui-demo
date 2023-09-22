//@ts-ignore
import { KintoneRestAPIClient } from '@kintone/rest-api-client'
import type { GoodListAppRecord } from '@/types/restApiRecords'

export class KintoneApi {
  client: KintoneRestAPIClient
  constructor() {
    this.client = new KintoneRestAPIClient({})
  }

  public async getAllRecords(app: string) {
    try {
      return await this.client.record.getAllRecords<GoodListAppRecord>({ app })
    } catch (error) {
      return
    }
  }
}
