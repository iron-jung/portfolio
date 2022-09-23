import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export interface DefaultProps {
  children: JSX.Element[] | JSX.Element | null | undefined;
}

export interface PageTypeInPageObjectResponse extends PageObjectResponse {
  pageTitle: string;
  createdAt: string;
  tag: string[];
  subTitle: string;
}

export interface PageType {
  id: string;
  pageTitle: string;
  subTitle: string;
  createdAt: string;
  tag: string[];
}
