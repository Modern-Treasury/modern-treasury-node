// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as API from './';
import { Page, PageParams } from '~/pagination';

export class LedgerAccountPayouts extends APIResource {
  /**
   * Create a ledger account payout.
   */
  create(
    params: LedgerAccountPayoutCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerAccountPayout>> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this.post('/api/ledger_account_payouts', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey || '', ...options?.headers },
    });
  }

  /**
   * Update the details of a ledger account payout.
   */
  update(
    id: string,
    body?: LedgerAccountPayoutUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerAccountPayout>>;
  update(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<LedgerAccountPayout>>;
  update(
    id: string,
    body: LedgerAccountPayoutUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerAccountPayout>> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this.patch(`/api/ledger_account_payouts/${id}`, { body, ...options });
  }

  /**
   * Get a list of ledger account payouts.
   */
  list(
    query?: LedgerAccountPayoutListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerAccountPayoutsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<LedgerAccountPayoutsPage>;
  list(
    query: LedgerAccountPayoutListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerAccountPayoutsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/api/ledger_account_payouts', LedgerAccountPayoutsPage, { query, ...options });
  }

  /**
   * Get details on a single ledger account payout.
   */
  retireve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<LedgerAccountPayout>> {
    return this.get(`/api/ledger_account_payouts/${id}`, options);
  }
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
   * The id of the payout ledger account whose ledger entries are queried against,
   * and its balance is reduced as a result.
   */
  payout_ledger_account_id: string;

  /**
   * The status of the ledger account payout. One of `processing`, `pending`,
   * `posted`, `archiving` or `archived`.
   */
  status: 'archived' | 'archiving' | 'pending' | 'posted' | 'processing';

  updated_at: string;
}

export interface LedgerAccountPayoutCreateParams {
  /**
   * Body param: The id of the funding ledger account that sends to or receives funds
   * from the payout ledger account.
   */
  funding_ledger_account_id: string;

  /**
   * Body param: The id of the payout ledger account whose ledger entries are queried
   * against, and its balance is reduced as a result.
   */
  payout_ledger_account_id: string;

  /**
   * Body param: The description of the ledger account payout.
   */
  description?: string | null;

  /**
   * Body param: The exclusive upper bound of the effective_at timestamp of the
   * ledger entries to be included in the ledger account payout. The default value is
   * the created_at timestamp of the ledger account payout.
   */
  effective_at_upper_bound?: string | null;

  /**
   * Body param: Additional data represented as key-value pairs. Both the key and
   * value must be strings.
   */
  metadata?: Record<string, string>;

  /**
   * Body param: The status of the ledger account payout. It is set to `pending` by
   * default. To post a ledger account payout at creation, use `posted`.
   */
  status?: 'pending' | 'posted' | null;

  /**
   * Header param: This key should be something unique, preferably something like an
   * UUID.
   */
  'Idempotency-Key'?: string;
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
  payout_ledger_account_id?: string;
}

export namespace LedgerAccountPayouts {
  export import LedgerAccountPayout = API.LedgerAccountPayout;
  export import LedgerAccountPayoutsPage = API.LedgerAccountPayoutsPage;
  export import LedgerAccountPayoutCreateParams = API.LedgerAccountPayoutCreateParams;
  export import LedgerAccountPayoutUpdateParams = API.LedgerAccountPayoutUpdateParams;
  export import LedgerAccountPayoutListParams = API.LedgerAccountPayoutListParams;
}
