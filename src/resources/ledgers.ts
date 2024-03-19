// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as LedgersAPI from 'modern-treasury/resources/ledgers';
import { Page, type PageParams } from 'modern-treasury/pagination';

export class Ledgers extends APIResource {
  /**
   * Create a ledger.
   */
  create(params: LedgerCreateParams, options?: Core.RequestOptions): Core.APIPromise<Ledger> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post('/api/ledgers', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * Get details on a single ledger.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Ledger> {
    return this._client.get(`/api/ledgers/${id}`, options);
  }

  /**
   * Update the details of a ledger.
   */
  update(id: string, body?: LedgerUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Ledger>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<Ledger>;
  update(
    id: string,
    body: LedgerUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Ledger> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.patch(`/api/ledgers/${id}`, { body, ...options });
  }

  /**
   * Get a list of ledgers.
   */
  list(query?: LedgerListParams, options?: Core.RequestOptions): Core.PagePromise<LedgersPage, Ledger>;
  list(options?: Core.RequestOptions): Core.PagePromise<LedgersPage, Ledger>;
  list(
    query: LedgerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgersPage, Ledger> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/ledgers', LedgersPage, { query, ...options });
  }

  /**
   * Delete a ledger.
   */
  del(id: string, options?: Core.RequestOptions): Core.APIPromise<Ledger> {
    return this._client.delete(`/api/ledgers/${id}`, options);
  }
}

export class LedgersPage extends Page<Ledger> {}

export interface Ledger {
  id: string;

  created_at: string;

  /**
   * An optional free-form description for internal use.
   */
  description: string | null;

  discarded_at: string | null;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata: Record<string, string>;

  /**
   * The name of the ledger.
   */
  name: string;

  object: string;

  updated_at: string;
  [k: string]: unknown;
}

export interface LedgerCreateParams {
  /**
   * The name of the ledger.
   */
  name: string;

  /**
   * An optional free-form description for internal use.
   */
  description?: string | null;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;
}

export interface LedgerUpdateParams {
  /**
   * An optional free-form description for internal use.
   */
  description?: string | null;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;

  /**
   * The name of the ledger.
   */
  name?: string;
}

export interface LedgerListParams extends PageParams {
  /**
   * If you have specific IDs to retrieve in bulk, you can pass them as query
   * parameters delimited with `id[]=`, for example `?id[]=123&id[]=abc`.
   */
  id?: Array<string>;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use
   * updated_at%5Bgt%5D=2000-01-01T12:00:00Z.
   */
  updated_at?: Record<string, string>;
}

export namespace Ledgers {
  export import Ledger = LedgersAPI.Ledger;
  export import LedgersPage = LedgersAPI.LedgersPage;
  export import LedgerCreateParams = LedgersAPI.LedgerCreateParams;
  export import LedgerUpdateParams = LedgersAPI.LedgerUpdateParams;
  export import LedgerListParams = LedgersAPI.LedgerListParams;
}
