// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as LedgerEntriesAPI from './ledger-entries';
import * as Shared from './shared';
import { Page, type PageParams } from '../pagination';

export class LedgerEntries extends APIResource {
  /**
   * Get details on a single ledger entry.
   */
  retrieve(
    id: string,
    query?: LedgerEntryRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerEntry>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerEntry>;
  retrieve(
    id: string,
    query: LedgerEntryRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerEntry> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/api/ledger_entries/${id}`, { query, ...options });
  }

  /**
   * Update the details of a ledger entry.
   */
  update(
    id: string,
    body?: LedgerEntryUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerEntry>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerEntry>;
  update(
    id: string,
    body: LedgerEntryUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerEntry> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.patch(`/api/ledger_entries/${id}`, { body, ...options });
  }

  /**
   * Get a list of all ledger entries.
   */
  list(
    query?: LedgerEntryListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerEntriesPage, LedgerEntry>;
  list(options?: Core.RequestOptions): Core.PagePromise<LedgerEntriesPage, LedgerEntry>;
  list(
    query: LedgerEntryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerEntriesPage, LedgerEntry> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/ledger_entries', LedgerEntriesPage, { query, ...options });
  }
}

export class LedgerEntriesPage extends Page<LedgerEntry> {}

export interface LedgerEntry {
  id: string;

  /**
   * Value in specified currency's smallest unit. e.g. $10 would be represented
   * as 1000. Can be any integer up to 36 digits.
   */
  amount: number;

  created_at: string;

  /**
   * One of `credit`, `debit`. Describes the direction money is flowing in the
   * transaction. A `credit` moves money from your account to someone else's. A
   * `debit` pulls money from someone else's account to your own. Note that wire,
   * rtp, and check payments will always be `credit`.
   */
  direction: Shared.TransactionDirection;

  discarded_at: string | null;

  /**
   * The currency of the ledger account.
   */
  ledger_account_currency: string;

  /**
   * The currency exponent of the ledger account.
   */
  ledger_account_currency_exponent: number;

  /**
   * The ledger account that this ledger entry is associated with.
   */
  ledger_account_id: string;

  /**
   * Lock version of the ledger account. This can be passed when creating a ledger
   * transaction to only succeed if no ledger transactions have posted since the
   * given version. See our post about Designing the Ledgers API with Optimistic
   * Locking for more details.
   */
  ledger_account_lock_version: number | null;

  /**
   * The ledger transaction that this ledger entry is associated with.
   */
  ledger_transaction_id: string;

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
   * The pending, posted, and available balances for this ledger entry's ledger
   * account. The posted balance is the sum of all posted entries on the account. The
   * pending balance is the sum of all pending and posted entries on the account. The
   * available balance is the posted incoming entries minus the sum of the pending
   * and posted outgoing amounts. Please see
   * https://docs.moderntreasury.com/docs/transaction-status-and-balances for more
   * details.
   */
  resulting_ledger_account_balances: LedgerEntry.ResultingLedgerAccountBalances | null;

  /**
   * Equal to the state of the ledger transaction when the ledger entry was created.
   * One of `pending`, `posted`, or `archived`.
   */
  status: 'archived' | 'pending' | 'posted';

  updated_at: string;
}

export namespace LedgerEntry {
  /**
   * The pending, posted, and available balances for this ledger entry's ledger
   * account. The posted balance is the sum of all posted entries on the account. The
   * pending balance is the sum of all pending and posted entries on the account. The
   * available balance is the posted incoming entries minus the sum of the pending
   * and posted outgoing amounts. Please see
   * https://docs.moderntreasury.com/docs/transaction-status-and-balances for more
   * details.
   */
  export interface ResultingLedgerAccountBalances {
    /**
     * The available_balance is the sum of all posted inbound entries and pending
     * outbound entries. For credit normal, available_amount = posted_credits -
     * pending_debits; for debit normal, available_amount = posted_debits -
     * pending_credits.
     */
    available_balance: ResultingLedgerAccountBalances.AvailableBalance;

    /**
     * The pending_balance is the sum of all pending and posted entries.
     */
    pending_balance: ResultingLedgerAccountBalances.PendingBalance;

    /**
     * The posted_balance is the sum of all posted entries.
     */
    posted_balance: ResultingLedgerAccountBalances.PostedBalance;
  }

  export namespace ResultingLedgerAccountBalances {
    /**
     * The available_balance is the sum of all posted inbound entries and pending
     * outbound entries. For credit normal, available_amount = posted_credits -
     * pending_debits; for debit normal, available_amount = posted_debits -
     * pending_credits.
     */
    export interface AvailableBalance {
      amount: number;

      credits: number;

      /**
       * The currency of the ledger account.
       */
      currency: string;

      /**
       * The currency exponent of the ledger account.
       */
      currency_exponent: number;

      debits: number;
    }

    /**
     * The pending_balance is the sum of all pending and posted entries.
     */
    export interface PendingBalance {
      amount: number;

      credits: number;

      /**
       * The currency of the ledger account.
       */
      currency: string;

      /**
       * The currency exponent of the ledger account.
       */
      currency_exponent: number;

      debits: number;
    }

    /**
     * The posted_balance is the sum of all posted entries.
     */
    export interface PostedBalance {
      amount: number;

      credits: number;

      /**
       * The currency of the ledger account.
       */
      currency: string;

      /**
       * The currency exponent of the ledger account.
       */
      currency_exponent: number;

      debits: number;
    }
  }
}

export interface LedgerEntryRetrieveParams {
  /**
   * If true, response will include the balances attached to the ledger entry. If
   * there is no balance available, null will be returned instead.
   */
  show_balances?: boolean;
}

export interface LedgerEntryUpdateParams {
  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;
}

export interface LedgerEntryListParams extends PageParams {
  /**
   * If you have specific IDs to retrieve in bulk, you can pass them as query
   * parameters delimited with `id[]=`, for example `?id[]=123&id[]=abc`.
   */
  id?: Array<string>;

  /**
   * Shows all ledger entries that were present on a ledger account at a particular
   * `lock_version`. You must also specify `ledger_account_id`.
   */
  as_of_lock_version?: number;

  /**
   * If true, response will include ledger entries that were deleted. When you update
   * a ledger transaction to specify a new set of entries, the previous entries are
   * deleted.
   */
  direction?: Shared.TransactionDirection;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * transaction's effective time. Format ISO8601
   */
  effective_at?: Record<string, string>;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * transaction's effective date. Format YYYY-MM-DD
   */
  effective_date?: Record<string, string>;

  /**
   * Get all ledger entries that match the direction specified. One of `credit`,
   * `debit`.
   */
  ledger_account_category_id?: string;

  ledger_account_id?: string;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * lock_version of a ledger account. For example, for all entries created at or
   * before before lock_version 1000 of a ledger account, use
   * `ledger_account_lock_version%5Blte%5D=1000`.
   */
  ledger_account_lock_version?: Record<string, number>;

  ledger_account_payout_id?: string;

  ledger_account_settlement_id?: string;

  /**
   * Get all ledger entries that are included in the ledger account statement.
   */
  ledger_account_statement_id?: string;

  ledger_transaction_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;

  /**
   * Order by `created_at` or `effective_at` in `asc` or `desc` order. For example,
   * to order by `effective_at asc`, use `order_by%5Beffective_at%5D=asc`. Ordering
   * by only one field at a time is supported.
   */
  order_by?: LedgerEntryListParams.OrderBy;

  /**
   * If true, response will include the balances attached to the ledger entry. If
   * there is no balance available, null will be returned instead.
   */
  show_balances?: boolean;

  /**
   * If true, response will include ledger entries that were deleted. When you update
   * a ledger transaction to specify a new set of entries, the previous entries are
   * deleted.
   */
  show_deleted?: boolean;

  /**
   * Get all ledger entries that match the status specified. One of `pending`,
   * `posted`, or `archived`.
   */
  status?: 'pending' | 'posted' | 'archived';

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use
   * updated_at%5Bgt%5D=2000-01-01T12:00:00Z.
   */
  updated_at?: Record<string, string>;
}

export namespace LedgerEntryListParams {
  /**
   * Order by `created_at` or `effective_at` in `asc` or `desc` order. For example,
   * to order by `effective_at asc`, use `order_by%5Beffective_at%5D=asc`. Ordering
   * by only one field at a time is supported.
   */
  export interface OrderBy {
    created_at?: 'asc' | 'desc';

    effective_at?: 'asc' | 'desc';
  }
}

export namespace LedgerEntries {
  export type LedgerEntry = LedgerEntriesAPI.LedgerEntry;
  export import LedgerEntriesPage = LedgerEntriesAPI.LedgerEntriesPage;
  export type LedgerEntryRetrieveParams = LedgerEntriesAPI.LedgerEntryRetrieveParams;
  export type LedgerEntryUpdateParams = LedgerEntriesAPI.LedgerEntryUpdateParams;
  export type LedgerEntryListParams = LedgerEntriesAPI.LedgerEntryListParams;
}
