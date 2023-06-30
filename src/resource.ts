// File generated from our OpenAPI spec by Stainless.

import type { ModernTreasury } from './index';

export class APIResource {
  protected client: ModernTreasury;
  constructor(client: ModernTreasury) {
    this.client = client;

    this.get = client.get.bind(client);
    this.post = client.post.bind(client);
    this.patch = client.patch.bind(client);
    this.put = client.put.bind(client);
    this.delete = client.delete.bind(client);
    this.getAPIList = client.getAPIList.bind(client);
  }

  protected get: ModernTreasury['get'];
  protected post: ModernTreasury['post'];
  protected patch: ModernTreasury['patch'];
  protected put: ModernTreasury['put'];
  protected delete: ModernTreasury['delete'];
  protected getAPIList: ModernTreasury['getAPIList'];
}
