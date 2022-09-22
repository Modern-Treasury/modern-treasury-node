// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class LedgerEntries extends APIResource {
  /**
   * Get details on a single ledger entry.
   */
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<LedgerEntry>> {
    return this.get(`/api/ledger_entries/${id}`, options);
  }

  /**
   * Get a list of all ledger entries.
   */
  list(query?: LedgerEntryListParams, options?: Core.RequestOptions): Core.PagePromise<LedgerEntriesPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<LedgerEntriesPage>;
  list(
    query: LedgerEntryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerEntriesPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/api/ledger_entries', LedgerEntriesPage, { query, ...options });
  }
}

export class LedgerEntriesPage extends Page<LedgerEntry> {}

export interface LedgerEntry {
  /**
   * Value in specified currency's smallest unit. e.g. $10 would be represented
   * as 1000. Can be any integer up to 30 digits.
   */
  amount: number;

  created_at: string;

  /**
   * One of `credit`, `debit`. Describes the direction money is flowing in the
   * transaction. A `credit` moves money from your account to someone else's. A
   * `debit` pulls money from someone else's account to your own. Note that wire,
   * rtp, and check payments will always be `credit`.
   */
  direction: 'credit' | 'debit';

  discarded_at: string | null;

  id: string;

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

  object: string;

  updated_at: string;
}

export interface LedgerEntryListParams extends PageParams {
  /**
   * If true, response will include ledger entries that were deleted. When you update
   * a ledger transaction to specify a new set of entries, the previous entries are
   * deleted.
   */
  direction?: 'credit' | 'debit';

  /**
   * Use "gt" (>), "gte" (>=), "lt" (<), "lte" (<=), or "eq" (=) to filter by the
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
   * Use "gt" (>), "gte" (>=), "lt" (<), "lte" (<=), or "eq" (=) to filter by the
   * lock_version of a ledger account. For example, for all entries created at or
   * before before lock_version 1000 of a ledger account, use
   * ledger_account_lock_version%5Blte%5D=1000
   */
  ledger_account_lock_version?: Record<string, number>;

  ledger_transaction_id?: string;

  /**
   * If true, response will include ledger entries that were deleted. When you update
   * a ledger transaction to specify a new set of entries, the previous entries are
   * deleted.
   */
  show_deleted?: boolean;

  /**
   * Use "gt" (>), "gte" (>=), "lt" (<), "lte" (<=), or "eq" (=) to filter by the
   * posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use
   * updated_at%5Bgt%5D=2000-01-01T12:00:00Z.
   */
  updated_at?: Record<string, string>;
}
