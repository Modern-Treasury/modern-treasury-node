// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AccountEntriesAPI from './account-entries';
import { AccountEntries, AccountEntryDeleteParams, AccountEntryUpdateParams } from './account-entries';
import { Page, type PageParams } from '../../pagination';

export class LedgerAccountSettlements extends APIResource {
  accountEntries: AccountEntriesAPI.AccountEntries = new AccountEntriesAPI.AccountEntries(this._client);

  /**
   * Create a ledger account settlement.
   *
   * @example
   * ```ts
   * const ledgerAccountSettlement =
   *   await client.ledgerAccountSettlements.create({
   *     contra_ledger_account_id:
   *       '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     settled_ledger_account_id:
   *       '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   });
   * ```
   */
  create(
    params: LedgerAccountSettlementCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccountSettlement> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post('/api/ledger_account_settlements', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * Get details on a single ledger account settlement.
   *
   * @example
   * ```ts
   * const ledgerAccountSettlement =
   *   await client.ledgerAccountSettlements.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerAccountSettlement> {
    return this._client.get(`/api/ledger_account_settlements/${id}`, options);
  }

  /**
   * Update the details of a ledger account settlement.
   *
   * @example
   * ```ts
   * const ledgerAccountSettlement =
   *   await client.ledgerAccountSettlements.update('id');
   * ```
   */
  update(
    id: string,
    body?: LedgerAccountSettlementUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccountSettlement>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerAccountSettlement>;
  update(
    id: string,
    body: LedgerAccountSettlementUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccountSettlement> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.patch(`/api/ledger_account_settlements/${id}`, { body, ...options });
  }

  /**
   * Get a list of ledger account settlements.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ledgerAccountSettlement of client.ledgerAccountSettlements.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: LedgerAccountSettlementListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerAccountSettlementsPage, LedgerAccountSettlement>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerAccountSettlementsPage, LedgerAccountSettlement>;
  list(
    query: LedgerAccountSettlementListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerAccountSettlementsPage, LedgerAccountSettlement> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/ledger_account_settlements', LedgerAccountSettlementsPage, {
      query,
      ...options,
    });
  }
}

export class LedgerAccountSettlementsPage extends Page<LedgerAccountSettlement> {}

export interface LedgerAccountSettlement {
  id: string;

  /**
   * The amount of the ledger account settlement.
   */
  amount: number | null;

  /**
   * The id of the contra ledger account that sends to or receives funds from the
   * settled ledger account.
   */
  contra_ledger_account_id: string;

  created_at: string;

  /**
   * The currency of the ledger account settlement.
   */
  currency: string;

  /**
   * The currency exponent of the ledger account settlement.
   */
  currency_exponent: number | null;

  /**
   * The description of the ledger account settlement.
   */
  description: string | null;

  /**
   * The exclusive upper bound of the effective_at timestamp of the ledger entries to
   * be included in the ledger account settlement. The default value is the
   * created_at timestamp of the ledger account settlement.
   */
  effective_at_upper_bound: string;

  /**
   * The id of the ledger that this ledger account settlement belongs to.
   */
  ledger_id: string;

  /**
   * The id of the ledger transaction that this settlement is associated with.
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
  metadata: { [key: string]: string };

  object: string;

  /**
   * The id of the settled ledger account whose ledger entries are queried against,
   * and its balance is reduced as a result.
   */
  settled_ledger_account_id: string;

  /**
   * The direction of the ledger entry with the settlement_ledger_account.
   */
  settlement_entry_direction: string | null;

  /**
   * The status of the ledger account settlement. One of `processing`, `pending`,
   * `posted`, `archiving` or `archived`.
   */
  status: 'archived' | 'archiving' | 'drafting' | 'pending' | 'posted' | 'processing';

  updated_at: string;
}

export interface LedgerAccountSettlementCreateParams {
  /**
   * The id of the contra ledger account that sends to or receives funds from the
   * settled ledger account.
   */
  contra_ledger_account_id: string;

  /**
   * The id of the settled ledger account whose ledger entries are queried against,
   * and its balance is reduced as a result.
   */
  settled_ledger_account_id: string;

  /**
   * If true, the settlement amount and settlement_entry_direction will bring the
   * settlement ledger account's balance closer to zero, even if the balance is
   * negative.
   */
  allow_either_direction?: boolean | null;

  /**
   * The description of the ledger account settlement.
   */
  description?: string | null;

  /**
   * The exclusive upper bound of the effective_at timestamp of the ledger entries to
   * be included in the ledger account settlement. The default value is the
   * created_at timestamp of the ledger account settlement.
   */
  effective_at_upper_bound?: string | null;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };

  /**
   * It is set to `false` by default. It should be set to `true` when migrating
   * existing settlements.
   */
  skip_settlement_ledger_transaction?: boolean | null;

  /**
   * The status of the ledger account settlement. It is set to `pending` by default.
   * To post a ledger account settlement at creation, use `posted`.
   */
  status?: 'pending' | 'posted' | 'drafting' | null;
}

export interface LedgerAccountSettlementUpdateParams {
  /**
   * The description of the ledger account settlement.
   */
  description?: string | null;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };

  /**
   * To post a pending ledger account settlement, use `posted`. To archive a pending
   * ledger transaction, use `archived`.
   */
  status?: 'posted' | 'archived';
}

export interface LedgerAccountSettlementListParams extends PageParams {
  /**
   * If you have specific IDs to retrieve in bulk, you can pass them as query
   * parameters delimited with `id[]=`, for example `?id[]=123&id[]=abc`.
   */
  id?: Array<string>;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * created at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use
   * created_at%5Bgt%5D=2000-01-01T12:00:00Z.
   */
  created_at?: { [key: string]: string };

  ledger_id?: string;

  ledger_transaction_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: { [key: string]: string };

  settled_ledger_account_id?: string;

  settlement_entry_direction?: string;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * updated at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use
   * updated_at%5Bgt%5D=2000-01-01T12:00:00Z.
   */
  updated_at?: { [key: string]: string };
}

LedgerAccountSettlements.LedgerAccountSettlementsPage = LedgerAccountSettlementsPage;
LedgerAccountSettlements.AccountEntries = AccountEntries;

export declare namespace LedgerAccountSettlements {
  export {
    type LedgerAccountSettlement as LedgerAccountSettlement,
    LedgerAccountSettlementsPage as LedgerAccountSettlementsPage,
    type LedgerAccountSettlementCreateParams as LedgerAccountSettlementCreateParams,
    type LedgerAccountSettlementUpdateParams as LedgerAccountSettlementUpdateParams,
    type LedgerAccountSettlementListParams as LedgerAccountSettlementListParams,
  };

  export {
    AccountEntries as AccountEntries,
    type AccountEntryUpdateParams as AccountEntryUpdateParams,
    type AccountEntryDeleteParams as AccountEntryDeleteParams,
  };
}
