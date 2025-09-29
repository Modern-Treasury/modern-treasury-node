// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LedgerEntries extends APIResource {
  /**
   * Get details on a single ledger entry.
   *
   * @example
   * ```ts
   * const ledgerEntry = await client.ledgerEntries.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: LedgerEntryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LedgerEntry> {
    return this._client.get(path`/api/ledger_entries/${id}`, { query, ...options });
  }

  /**
   * Update the details of a ledger entry.
   *
   * @example
   * ```ts
   * const ledgerEntry = await client.ledgerEntries.update('id');
   * ```
   */
  update(
    id: string,
    body: LedgerEntryUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LedgerEntry> {
    return this._client.patch(path`/api/ledger_entries/${id}`, { body, ...options });
  }

  /**
   * Get a list of all ledger entries.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ledgerEntry of client.ledgerEntries.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LedgerEntryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LedgerEntriesPage, LedgerEntry> {
    return this._client.getAPIList('/api/ledger_entries', Page<LedgerEntry>, { query, ...options });
  }
}

export type LedgerEntriesPage = Page<LedgerEntry>;

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
  metadata: { [key: string]: string };

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
  resulting_ledger_account_balances: Shared.LedgerBalances | null;

  /**
   * Equal to the state of the ledger transaction when the ledger entry was created.
   * One of `pending`, `posted`, or `archived`.
   */
  status: 'archived' | 'pending' | 'posted';

  updated_at: string;
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
  metadata?: { [key: string]: string };
}

export interface LedgerEntryListParams extends PageParams {
  /**
   * If you have specific IDs to retrieve in bulk, you can pass them as query
   * parameters delimited with `id[]=`, for example `?id[]=123&id[]=abc`.
   */
  id?: Array<string>;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by amount.
   */
  amount?: LedgerEntryListParams.Amount;

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
  effective_at?: { [key: string]: string };

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * transaction's effective date. Format YYYY-MM-DD
   */
  effective_date?: { [key: string]: string };

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
  ledger_account_lock_version?: { [key: string]: number };

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
  metadata?: { [key: string]: string };

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
   * `posted`, or `archived`. For multiple statuses, use
   * `status[]=pending&status[]=posted`.
   */
  status?: Array<'pending' | 'posted' | 'archived'>;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use
   * updated_at%5Bgt%5D=2000-01-01T12:00:00Z.
   */
  updated_at?: { [key: string]: string };
}

export namespace LedgerEntryListParams {
  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by amount.
   */
  export interface Amount {
    eq?: number;

    gt?: number;

    gte?: number;

    lt?: number;

    lte?: number;
  }

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

export declare namespace LedgerEntries {
  export {
    type LedgerEntry as LedgerEntry,
    type LedgerEntriesPage as LedgerEntriesPage,
    type LedgerEntryRetrieveParams as LedgerEntryRetrieveParams,
    type LedgerEntryUpdateParams as LedgerEntryUpdateParams,
    type LedgerEntryListParams as LedgerEntryListParams,
  };
}
