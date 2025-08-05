// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LedgerEntriesAPI from '../ledger-entries';
import * as Shared from '../shared';
import * as VersionsAPI from './versions';
import {
  LedgerTransactionVersion,
  LedgerTransactionVersionsPage,
  VersionListParams,
  Versions,
} from './versions';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class LedgerTransactions extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Create a ledger transaction.
   *
   * @example
   * ```ts
   * const ledgerTransaction =
   *   await client.ledgerTransactions.create({
   *     ledger_entries: [
   *       {
   *         amount: 0,
   *         direction: 'credit',
   *         ledger_account_id:
   *           '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       },
   *     ],
   *   });
   * ```
   */
  create(body: LedgerTransactionCreateParams, options?: RequestOptions): APIPromise<LedgerTransaction> {
    return this._client.post('/api/ledger_transactions', { body, ...options });
  }

  /**
   * Get details on a single ledger transaction.
   *
   * @example
   * ```ts
   * const ledgerTransaction =
   *   await client.ledgerTransactions.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<LedgerTransaction> {
    return this._client.get(path`/api/ledger_transactions/${id}`, options);
  }

  /**
   * Update the details of a ledger transaction.
   *
   * @example
   * ```ts
   * const ledgerTransaction =
   *   await client.ledgerTransactions.update('id');
   * ```
   */
  update(
    id: string,
    body: LedgerTransactionUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LedgerTransaction> {
    return this._client.patch(path`/api/ledger_transactions/${id}`, { body, ...options });
  }

  /**
   * Get a list of ledger transactions.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ledgerTransaction of client.ledgerTransactions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LedgerTransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LedgerTransactionsPage, LedgerTransaction> {
    return this._client.getAPIList('/api/ledger_transactions', Page<LedgerTransaction>, {
      query,
      ...options,
    });
  }

  /**
   * Create a ledger transaction that partially posts another ledger transaction.
   *
   * @example
   * ```ts
   * const ledgerTransaction =
   *   await client.ledgerTransactions.createPartialPost('id', {
   *     posted_ledger_entries: [
   *       {
   *         amount: 0,
   *         direction: 'credit',
   *         ledger_account_id:
   *           '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       },
   *     ],
   *   });
   * ```
   */
  createPartialPost(
    id: string,
    body: LedgerTransactionCreatePartialPostParams,
    options?: RequestOptions,
  ): APIPromise<LedgerTransaction> {
    return this._client.post(path`/api/ledger_transactions/${id}/partial_post`, { body, ...options });
  }

  /**
   * Create a ledger transaction reversal.
   *
   * @example
   * ```ts
   * const ledgerTransaction =
   *   await client.ledgerTransactions.createReversal('id');
   * ```
   */
  createReversal(
    id: string,
    body: LedgerTransactionCreateReversalParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LedgerTransaction> {
    return this._client.post(path`/api/ledger_transactions/${id}/reversal`, { body, ...options });
  }
}

export type LedgerTransactionsPage = Page<LedgerTransaction>;

export interface LedgerTransaction {
  id: string;

  /**
   * System-set reason why the ledger transaction was archived; currently only
   * 'balance_lock_failure' for transactions that violated balance constraints. Only
   * populated when archive_on_balance_lock_failure is true and a balance lock
   * violation occurs, otherwise null.
   */
  archived_reason: string | null;

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

  /**
   * An array of ledger entry objects.
   */
  ledger_entries: Array<LedgerEntriesAPI.LedgerEntry>;

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
    | 'expected_payment'
    | 'incoming_payment_detail'
    | 'payment_order'
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
  metadata: { [key: string]: string };

  object: string;

  /**
   * The ID of the ledger transaction that this ledger transaction partially posts.
   */
  partially_posts_ledger_transaction_id: string | null;

  /**
   * The time on which the ledger transaction posted. This is null if the ledger
   * transaction is pending.
   */
  posted_at: string | null;

  /**
   * The ID of the ledger transaction that reversed this ledger transaction.
   */
  reversed_by_ledger_transaction_id: string | null;

  /**
   * The ID of the original ledger transaction that this ledger transaction reverses.
   */
  reverses_ledger_transaction_id: string | null;

  /**
   * To post a ledger transaction at creation, use `posted`.
   */
  status: 'archived' | 'pending' | 'posted';

  updated_at: string;
}

export interface LedgerTransactionCreateParams {
  /**
   * An array of ledger entry objects.
   */
  ledger_entries: Array<Shared.LedgerEntryCreateRequest>;

  /**
   * An optional description for internal use.
   */
  description?: string | null;

  /**
   * The timestamp (ISO8601 format) at which the ledger transaction happened for
   * reporting purposes.
   */
  effective_at?: string;

  /**
   * The date (YYYY-MM-DD) on which the ledger transaction happened for reporting
   * purposes.
   */
  effective_date?: string;

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
  ledgerable_type?: 'expected_payment' | 'incoming_payment_detail' | 'payment_order' | 'return' | 'reversal';

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };

  /**
   * To post a ledger transaction at creation, use `posted`.
   */
  status?: 'archived' | 'pending' | 'posted';
}

export interface LedgerTransactionUpdateParams {
  /**
   * An optional description for internal use.
   */
  description?: string | null;

  /**
   * The timestamp (ISO8601 format) at which the ledger transaction happened for
   * reporting purposes.
   */
  effective_at?: string;

  /**
   * An array of ledger entry objects.
   */
  ledger_entries?: Array<Shared.LedgerEntryCreateRequest>;

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
  ledgerable_type?: 'expected_payment' | 'incoming_payment_detail' | 'payment_order' | 'return' | 'reversal';

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };

  /**
   * To post a ledger transaction at creation, use `posted`.
   */
  status?: 'archived' | 'pending' | 'posted';
}

export interface LedgerTransactionListParams extends PageParams {
  /**
   * If you have specific IDs to retrieve in bulk, you can pass them as query
   * parameters delimited with `id[]=`, for example `?id[]=123&id[]=abc`.
   */
  id?: Array<string>;

  /**
   * Use "gt" (>), "gte" (>=), "lt" (<), "lte" (<=), or "eq" (=) to filter by
   * effective at. For example, for all transactions after Jan 1 2000, use
   * effective_at%5Bgt%5D=2000-01-01T00:00:00:00.000Z.
   */
  effective_at?: { [key: string]: string };

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by
   * effective date. For example, for all dates after Jan 1 2000, use
   * effective_date%5Bgt%5D=2000-01-01.
   */
  effective_date?: { [key: string]: string };

  external_id?: string;

  ledger_account_category_id?: string;

  ledger_account_id?: string;

  ledger_account_settlement_id?: string;

  ledger_id?: string;

  ledgerable_id?: string;

  ledgerable_type?: 'expected_payment' | 'incoming_payment_detail' | 'payment_order' | 'return' | 'reversal';

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
  order_by?: LedgerTransactionListParams.OrderBy;

  partially_posts_ledger_transaction_id?: string;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use
   * posted_at%5Bgt%5D=2000-01-01T12:00:00Z.
   */
  posted_at?: { [key: string]: string };

  reverses_ledger_transaction_id?: string;

  status?: 'pending' | 'posted' | 'archived' | Array<'pending' | 'posted' | 'archived'>;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use
   * updated_at%5Bgt%5D=2000-01-01T12:00:00Z.
   */
  updated_at?: { [key: string]: string };
}

export namespace LedgerTransactionListParams {
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

export interface LedgerTransactionCreatePartialPostParams {
  /**
   * An array of ledger entry objects to be set on the posted ledger transaction.
   * There must be one entry for each of the existing entries with a lesser amount
   * than the existing entry.
   */
  posted_ledger_entries: Array<LedgerTransactionCreatePartialPostParams.PostedLedgerEntry>;

  /**
   * An optional free-form description for the posted ledger transaction. Maximum of
   * 1000 characters allowed.
   */
  description?: string;

  /**
   * The timestamp (IS08601 format) at which the posted ledger transaction happened
   * for reporting purposes.
   */
  effective_at?: string;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };
}

export namespace LedgerTransactionCreatePartialPostParams {
  export interface PostedLedgerEntry {
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
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: { [key: string]: string };
  }
}

export interface LedgerTransactionCreateReversalParams {
  /**
   * An optional free-form description for the reversal ledger transaction. Maximum
   * of 1000 characters allowed.
   */
  description?: string;

  /**
   * The timestamp (ISO8601 format) at which the reversal ledger transaction happened
   * for reporting purposes. It defaults to the `effective_at` of the original ledger
   * transaction if not provided.
   */
  effective_at?: string | null;

  /**
   * Must be unique within the ledger.
   */
  external_id?: string;

  /**
   * Specify this if you'd like to link the reversal ledger transaction to a Payment
   * object like Return or Reversal.
   */
  ledgerable_id?: string;

  /**
   * Specify this if you'd like to link the reversal ledger transaction to a Payment
   * object like Return or Reversal.
   */
  ledgerable_type?: 'expected_payment' | 'incoming_payment_detail' | 'payment_order' | 'return' | 'reversal';

  /**
   * Additional data to be added to the reversal ledger transaction as key-value
   * pairs. Both the key and value must be strings.
   */
  metadata?: { [key: string]: string };

  /**
   * Status of the reversal ledger transaction. It defaults to `posted` if not
   * provided.
   */
  status?: 'archived' | 'pending' | 'posted';
}

LedgerTransactions.Versions = Versions;

export declare namespace LedgerTransactions {
  export {
    type LedgerTransaction as LedgerTransaction,
    type LedgerTransactionsPage as LedgerTransactionsPage,
    type LedgerTransactionCreateParams as LedgerTransactionCreateParams,
    type LedgerTransactionUpdateParams as LedgerTransactionUpdateParams,
    type LedgerTransactionListParams as LedgerTransactionListParams,
    type LedgerTransactionCreatePartialPostParams as LedgerTransactionCreatePartialPostParams,
    type LedgerTransactionCreateReversalParams as LedgerTransactionCreateReversalParams,
  };

  export {
    Versions as Versions,
    type LedgerTransactionVersion as LedgerTransactionVersion,
    type LedgerTransactionVersionsPage as LedgerTransactionVersionsPage,
    type VersionListParams as VersionListParams,
  };
}
