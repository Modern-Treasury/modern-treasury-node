// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as LedgerAccountPayoutsAPI from 'modern-treasury/resources/ledger-account-payouts';
import { Page, type PageParams } from 'modern-treasury/pagination';

export class LedgerAccountPayouts extends APIResource {
  /**
   * Create a ledger account payout.
   */
  create(
    params: LedgerAccountPayoutCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccountPayout> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post('/api/ledger_account_payouts', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * Get details on a single ledger account payout.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerAccountPayout> {
    return this._client.get(`/api/ledger_account_payouts/${id}`, options);
  }

  /**
   * Update the details of a ledger account payout.
   */
  update(
    id: string,
    body?: LedgerAccountPayoutUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccountPayout>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerAccountPayout>;
  update(
    id: string,
    body: LedgerAccountPayoutUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccountPayout> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.patch(`/api/ledger_account_payouts/${id}`, { body, ...options });
  }

  /**
   * Get a list of ledger account payouts.
   */
  list(
    query?: LedgerAccountPayoutListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerAccountPayoutsPage, LedgerAccountPayout>;
  list(options?: Core.RequestOptions): Core.PagePromise<LedgerAccountPayoutsPage, LedgerAccountPayout>;
  list(
    query: LedgerAccountPayoutListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerAccountPayoutsPage, LedgerAccountPayout> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/ledger_account_payouts', LedgerAccountPayoutsPage, {
      query,
      ...options,
    });
  }

  /**
   * @deprecated use `retrieve` instead
   */
  retireve = this.retrieve;
}

export class LedgerAccountPayoutsPage extends Page<LedgerAccountPayout> {}

export interface LedgerAccountPayout {
  id: string;

  /**
   * The amount of the ledger account payout.
   */
  amount: number | null;

  created_at: string;

  /**
   * The currency of the ledger account payout.
   */
  currency: string;

  /**
   * The currency exponent of the ledger account payout.
   */
  currency_exponent: number | null;

  /**
   * The description of the ledger account payout.
   */
  description: string | null;

  /**
   * The exclusive upper bound of the effective_at timestamp of the ledger entries to
   * be included in the ledger account payout. The default value is the created_at
   * timestamp of the ledger account payout.
   */
  effective_at_upper_bound: string;

  /**
   * The id of the funding ledger account that sends to or receives funds from the
   * payout ledger account.
   */
  funding_ledger_account_id: string;

  /**
   * The id of the ledger that this ledger account payout belongs to.
   */
  ledger_id: string;

  /**
   * The id of the ledger transaction that this payout is associated with.
   */
  ledger_transaction_id: string | null;

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

  object: string;

  /**
   * The direction of the ledger entry with the payout_ledger_account.
   */
  payout_entry_direction: string | null;

  /**
   * The id of the payout ledger account whose ledger entries are queried against,
   * and its balance is reduced as a result.
   */
  payout_ledger_account_id: string;

  /**
   * The status of the ledger account payout. One of `processing`, `pending`,
   * `posted`, `archiving`, `archived`, `reversing` or `reversed`.
   */
  status: 'archived' | 'archiving' | 'pending' | 'posted' | 'processing' | 'reversed' | 'reversing';

  updated_at: string;
}

export interface LedgerAccountPayoutCreateParams {
  /**
   * The id of the funding ledger account that sends to or receives funds from the
   * payout ledger account.
   */
  funding_ledger_account_id: string;

  /**
   * The id of the payout ledger account whose ledger entries are queried against,
   * and its balance is reduced as a result.
   */
  payout_ledger_account_id: string;

  /**
   * If true, the payout amount and payout_entry_direction will bring the payout
   * ledger account's balance closer to zero, even if the balance is negative.
   */
  allow_either_direction?: boolean | null;

  /**
   * The description of the ledger account payout.
   */
  description?: string | null;

  /**
   * The exclusive upper bound of the effective_at timestamp of the ledger entries to
   * be included in the ledger account payout. The default value is the created_at
   * timestamp of the ledger account payout.
   */
  effective_at_upper_bound?: string | null;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;

  /**
   * It is set to `false` by default. It should be set to `true` when migrating
   * existing payouts.
   */
  skip_payout_ledger_transaction?: boolean | null;

  /**
   * The status of the ledger account payout. It is set to `pending` by default. To
   * post a ledger account payout at creation, use `posted`.
   */
  status?: 'pending' | 'posted' | null;
}

export interface LedgerAccountPayoutUpdateParams {
  /**
   * The description of the ledger account payout.
   */
  description?: string | null;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;

  /**
   * To post a pending ledger account payout, use `posted`. To archive a pending
   * ledger transaction, use `archived`.
   */
  status?: 'posted' | 'archived';
}

export interface LedgerAccountPayoutListParams extends PageParams {
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

  payout_entry_direction?: string;

  payout_ledger_account_id?: string;
}

export namespace LedgerAccountPayouts {
  export import LedgerAccountPayout = LedgerAccountPayoutsAPI.LedgerAccountPayout;
  export import LedgerAccountPayoutsPage = LedgerAccountPayoutsAPI.LedgerAccountPayoutsPage;
  export import LedgerAccountPayoutCreateParams = LedgerAccountPayoutsAPI.LedgerAccountPayoutCreateParams;
  export import LedgerAccountPayoutUpdateParams = LedgerAccountPayoutsAPI.LedgerAccountPayoutUpdateParams;
  export import LedgerAccountPayoutListParams = LedgerAccountPayoutsAPI.LedgerAccountPayoutListParams;
}
