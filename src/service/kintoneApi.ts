//@ts-ignore
import { KintoneRestAPIClient } from "@kintone/rest-api-client";
const APP_ID = import.meta.env.VITE_APP_ID;

export class KintoneApi {
  client: KintoneRestAPIClient;
  constructor() {
    this.client = new KintoneRestAPIClient({
      baseUrl: `https://${import.meta.env.VITE_KINTONE_URL}`,
      auth: {
        apiToken: import.meta.env.VITE_API_TOKEN,
      },
    });
  }

  public async getAllRecords() {
    try {
      return await this.client.record.getAllRecords({ app: APP_ID });
    } catch (error) {
      return;
    }
  }
}
