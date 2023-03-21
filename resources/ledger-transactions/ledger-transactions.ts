// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as LedgerEntries from '~/resources/ledger-entries';
import { Page, PageParams } from '~/pagination';
import { Versions } from './versions';

export class LedgerTransactions extends APIResource {
  versions: Versions = new Versions(this.client);

  /**
   * Create a ledger transaction.
   */
  create(
    body: LedgerTransactionCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerTransaction>> {
    return this.post('/api/ledger_transactions', { body, ...options });
  }

  /**
   * Get details on a single ledger transaction.
   */
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<LedgerTransaction>> {
    return this.get(`/api/ledger_transactions/${id}`, options);
  }

  /**
   * Update the details of a ledger transaction.
   */
  update(
    id: string,
    body?: LedgerTransactionUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerTransaction>>;
  update(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<LedgerTransaction>>;
  update(
    id: string,
    body: LedgerTransactionUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerTransaction>> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }

    return this.patch(`/api/ledger_transactions/${id}`, { body, ...options });
  }

  /**
   * Get a list of ledger transactions.
   */
  list(
    query?: LedgerTransactionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerTransactionsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<LedgerTransactionsPage>;
  list(
    query: LedgerTransactionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerTransactionsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/api/ledger_transactions', LedgerTransactionsPage, { query, ...options });
  }
}

export class LedgerTransactionsPage extends Page<LedgerTransaction> {}

export interface LedgerTransaction {
  created_at: string;

  /**
   * An optional description for internal use.
   */
  description: string | null;

  /**
   * The timestamp (ISO8601 format) at which the ledger transaction happened for
   * reporting purposes.
   */
  effective_at: string;

  /**
   * The date (YYYY-MM-DD) on which the ledger transaction happened for reporting
   * purposes.
   */
  effective_date: string;

  /**
   * A unique string to represent the ledger transaction. Only one pending or posted
   * ledger transaction may have this ID in the ledger.
   */
  external_id: string | null;

  id: string;

  /**
   * An array of ledger entry objects.
   */
  ledger_entries: Array<LedgerEntries.LedgerEntry>;

  /**
   * The ID of the ledger this ledger transaction belongs to.
   */
  ledger_id: string;

  /**
   * If the ledger transaction can be reconciled to another object in Modern
   * Treasury, the id will be populated here, otherwise null.
   */
  ledgerable_id: string | null;

  /**
   * If the ledger transaction can be reconciled to another object in Modern
   * Treasury, the type will be populated here, otherwise null. This can be one of
   * payment_order, incoming_payment_detail, expected_payment, return, or reversal.
   */
  ledgerable_type:
    | 'counterparty'
    | 'expected_payment'
    | 'incoming_payment_detail'
    | 'internal_account'
    | 'line_item'
    | 'paper_item'
    | 'payment_order'
    | 'payment_order_attempt'
    | 'return'
    | 'reversal'
    | null;

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
   * The time on which the ledger transaction posted. This is null if the ledger
   * transaction is pending.
   */
  posted_at: string | null;

  /**
   * To post a ledger transaction at creation, use `posted`.
   */
  status: 'archived' | 'pending' | 'posted';

  updated_at: string;
}

export interface LedgerTransactionCreateParams {
  /**
   * The date (YYYY-MM-DD) on which the ledger transaction happened for reporting
   * purposes.
   */
  effective_date: string;

  /**
   * An array of ledger entry objects.
   */
  ledger_entries: Array<LedgerTransactionCreateParams.LedgerEntries>;

  /**
   * An optional description for internal use.
   */
  description?: string | null;

  /**
   * A unique string to represent the ledger transaction. Only one pending or posted
   * ledger transaction may have this ID in the ledger.
   */
  external_id?: string;

  /**
   * If the ledger transaction can be reconciled to another object in Modern
   * Treasury, the id will be populated here, otherwise null.
   */
  ledgerable_id?: string;

  /**
   * If the ledger transaction can be reconciled to another object in Modern
   * Treasury, the type will be populated here, otherwise null. This can be one of
   * payment_order, incoming_payment_detail, expected_payment, return, or reversal.
   */
  ledgerable_type?:
    | 'counterparty'
    | 'expected_payment'
    | 'incoming_payment_detail'
    | 'internal_account'
    | 'line_item'
    | 'paper_item'
    | 'payment_order'
    | 'payment_order_attempt'
    | 'return'
    | 'reversal';

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;

  /**
   * To post a ledger transaction at creation, use `posted`.
   */
  status?: 'archived' | 'pending' | 'posted';
}

export namespace LedgerTransactionCreateParams {
  export interface LedgerEntries {
    /**
     * Value in specified currency's smallest unit. e.g. $10 would be represented
     * as 1000. Can be any integer up to 36 digits.
     */
    amount: number;

    /**
     * One of `credit`, `debit`. Describes the direction money is flowing in the
     * transaction. A `credit` moves money from your account to someone else's. A
     * `debit` pulls money from someone else's account to your own. Note that wire,
     * rtp, and check payments will always be `credit`.
     */
    direction: 'credit' | 'debit';

    /**
     * The ledger account that this ledger entry is associated with.
     */
    ledger_account_id: string;

    /**
     * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the
     * account’s available balance. If any of these conditions would be false after the
     * transaction is created, the entire call will fail with error code 422.
     */
    available_balance_amount?: Record<string, number> | null;

    /**
     * Lock version of the ledger account. This can be passed when creating a ledger
     * transaction to only succeed if no ledger transactions have posted since the
     * given version. See our post about Designing the Ledgers API with Optimistic
     * Locking for more details.
     */
    lock_version?: number | null;

    /**
     * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the
     * account’s pending balance. If any of these conditions would be false after the
     * transaction is created, the entire call will fail with error code 422.
     */
    pending_balance_amount?: Record<string, number> | null;

    /**
     * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the
     * account’s posted balance. If any of these conditions would be false after the
     * transaction is created, the entire call will fail with error code 422.
     */
    posted_balance_amount?: Record<string, number> | null;

    /**
     * If true, response will include the balance of the associated ledger account for
     * the entry.
     */
    show_resulting_ledger_account_balances?: boolean | null;
  }
}

export interface LedgerTransactionUpdateParams {
  /**
   * An optional description for internal use.
   */
  description?: string | null;

  /**
   * An array of ledger entry objects.
   */
  ledger_entries?: Array<LedgerTransactionUpdateParams.LedgerEntries>;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;

  /**
   * To post a ledger transaction at creation, use `posted`.
   */
  status?: 'archived' | 'pending' | 'posted';
}

export namespace LedgerTransactionUpdateParams {
  export interface LedgerEntries {
    /**
     * Value in specified currency's smallest unit. e.g. $10 would be represented
     * as 1000. Can be any integer up to 36 digits.
     */
    amount: number;

    /**
     * One of `credit`, `debit`. Describes the direction money is flowing in the
     * transaction. A `credit` moves money from your account to someone else's. A
     * `debit` pulls money from someone else's account to your own. Note that wire,
     * rtp, and check payments will always be `credit`.
     */
    direction: 'credit' | 'debit';

    /**
     * The ledger account that this ledger entry is associated with.
     */
    ledger_account_id: string;

    /**
     * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the
     * account’s available balance. If any of these conditions would be false after the
     * transaction is created, the entire call will fail with error code 422.
     */
    available_balance_amount?: Record<string, number> | null;

    /**
     * Lock version of the ledger account. This can be passed when creating a ledger
     * transaction to only succeed if no ledger transactions have posted since the
     * given version. See our post about Designing the Ledgers API with Optimistic
     * Locking for more details.
     */
    lock_version?: number | null;

    /**
     * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the
     * account’s pending balance. If any of these conditions would be false after the
     * transaction is created, the entire call will fail with error code 422.
     */
    pending_balance_amount?: Record<string, number> | null;

    /**
     * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the
     * account’s posted balance. If any of these conditions would be false after the
     * transaction is created, the entire call will fail with error code 422.
     */
    posted_balance_amount?: Record<string, number> | null;

    /**
     * If true, response will include the balance of the associated ledger account for
     * the entry.
     */
    show_resulting_ledger_account_balances?: boolean | null;
  }
}

export interface LedgerTransactionListParams extends PageParams {
  /**
   * Use "gt" (>), "gte" (>=), "lt" (<), "lte" (<=), or "eq" (=) to filter by
   * effective at. For example, for all transactions after Jan 1 2000, use
   * effective_at%5Bgt%5D=2000-01-01T00:00:00:00.000Z.
   */
  effective_at?: Record<string, string>;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by
   * effective date. For example, for all dates after Jan 1 2000, use
   * effective_date%5Bgt%5D=2000-01-01.
   */
  effective_date?: Record<string, string>;

  external_id?: string;

  ledger_account_category_id?: string;

  ledger_account_id?: string;

  ledger_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;

  /**
   * Order by `created_at` and/or `effective_at` in `asc` or `desc` order. For
   * example, to order by `effective_at asc`, use `order_by%5Beffective_at%5D=asc`.
   * Ordering by only one field at a time is supported.
   */
  order_by?: LedgerTransactionListParams.OrderBy;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use
   * posted_at%5Bgt%5D=2000-01-01T12:00:00Z.
   */
  posted_at?: Record<string, string>;

  status?: 'pending' | 'posted' | 'archived';

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use
   * updated_at%5Bgt%5D=2000-01-01T12:00:00Z.
   */
  updated_at?: Record<string, string>;
}

export namespace LedgerTransactionListParams {
  export interface OrderBy {
    created_at?: 'asc' | 'desc';

    effective_at?: 'asc' | 'desc';
  }
}
