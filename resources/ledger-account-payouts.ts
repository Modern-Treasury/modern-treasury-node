// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class LedgerAccountPayouts extends APIResource {
  /**
   * Create a ledger account payout.
   */
  create(
    body: LedgerAccountPayoutCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerAccountPayout>> {
    return this.post('/api/ledger_account_payouts', { body, ...options });
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
   * The maximum effective_at timestamp of the ledger entries to be included in the
   * ledger account payout. The default value is the created_at timestamp of the
   * ledger account payout.
   */
  effective_at_upper_bound: string;

  /**
   * The id of the funding ledger account that sends to or receives funds from the
   * payout ledger account.
   */
  funding_ledger_account_id: string;

  id: string;

  /**
   * The ledger transaction that this payout is associated with.
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
   * The description of the ledger account payout.
   */
  description?: string | null;

  /**
   * The maximum effective_at timestamp of the ledger entries to be included in the
   * ledger account payout. The default value is the created_at timestamp of the
   * ledger account payout.
   */
  effective_at_upper_bound?: string | null;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;

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
  payout_ledger_account_id?: string;
}
