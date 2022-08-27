import { Client } from "@notionhq/client";
import {
  PageObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

const NOTION_AUTH = process.env.NEXT_PUBLIC_NOTION_AUTH!;
const DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID!;

export default class NotionService {
  private static _databaseId = DATABASE_ID;
  private static notion = new Client({
    auth: NOTION_AUTH,
  });

  public static async getDevDatabase(): Promise<PageObjectResponse[]> {
    const data = await this.notion.databases.query({
      database_id: this._databaseId,
      sorts: [
        {
          property: "createdAt",
          direction: "ascending",
        },
      ],
      page_size: 10,
    });

    if (this.isPageObjectResponse(data.results)) {
      return data.results;
    }

    return [];
  }

  public static async getPagePropertie(
    page_id: string,
    property_id: string
  ): Promise<string | number | string[] | null | undefined> {
    const data = await this.notion.pages.properties.retrieve({
      page_id,
      property_id,
    });

    if (data.object === "list") {
      const { property_item, results } = data;
      if (
        property_item.type === "title" ||
        (property_item.type === "rich_text" && results.length)
      ) {
        return results
          .map((r) => {
            switch (r.type) {
              case "title":
                return r.title.plain_text;
              case "rich_text":
                return r.rich_text.plain_text;
              default:
                return "";
            }
          })
          .join(" ");
      }

      return "";
    } else {
      switch (data.type) {
        case "number":
          return data["number"];

        case "select":
          return data["select"]?.name;

        case "multi_select":
          return data["multi_select"].map((select) => select.name);

        case "date":
          return data["date"]?.start;

        case "created_time":
          return data["created_time"];

        default:
          return "";
      }
    }
  }

  public static async getPageBlocks(id: string) {
    return await this.notion.blocks.children.list({
      block_id: id,
    });
  }

  private static isPageObjectResponse(
    params: Array<PageObjectResponse | PartialPageObjectResponse>
  ): params is Array<PageObjectResponse> {
    return (params as Array<PageObjectResponse>) !== undefined;
  }
}
