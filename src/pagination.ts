// File generated from our OpenAPI spec by Stainless.

import { AbstractPage, Response, APIClient, FinalRequestOptions, coerceInteger, PageInfo } from './core';

export type PageResponse<Item> = Item[];

export interface PageParams {
  after_cursor?: string | null;

  per_page?: number;
}

export class Page<Item> extends AbstractPage<Item> {
  items: Array<Item>;

  per_page: number | null;

  after_cursor: string | null;

  constructor(client: APIClient, response: Response, body: PageResponse<Item>, options: FinalRequestOptions) {
    super(client, response, body, options);

    this.items = body || [];
    this.per_page = coerceInteger(this.response.headers.get('x-per-page') || null);
    this.after_cursor = this.response.headers.get('x-after-cursor') || null;
  }

  getPaginatedItems(): Item[] {
    return this.items;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    if (!this.after_cursor) return null;

    return { params: { after_cursor: this.after_cursor } };
  }
}
