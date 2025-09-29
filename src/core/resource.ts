// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { ModernTreasury } from '../client';

export abstract class APIResource {
  protected _client: ModernTreasury;

  constructor(client: ModernTreasury) {
    this._client = client;
  }
}
