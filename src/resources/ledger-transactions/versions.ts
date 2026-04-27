// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Versions extends APIResource {
  /**
   * Get a list of ledger transaction versions.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ledgerTransactionVersion of client.ledgerTransactions.versions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: VersionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LedgerTransactionVersionsPage, LedgerTransactionVersion> {
    return this._client.getAPIList('/api/ledger_transaction_versions', Page<LedgerTransactionVersion>, {
      query,
      ...options,
    });
  }
}

export type LedgerTransactionVersionsPage = Page<LedgerTransactionVersion>;

export interface LedgerTransactionVersion {
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
  ledger_entries: Array<LedgerTransactionVersion.LedgerEntry>;

  /**
   * The ID of the ledger this ledger transaction belongs to.
   */
  ledger_id: string;

  /**
   * The ID of the ledger transaction
   */
  ledger_transaction_id: string;

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
   * The ID of the original ledger transaction. that this ledger transaction
   * reverses.
   */
  reverses_ledger_transaction_id: string | null;

  /**
   * One of `pending`, `posted`, or `archived`.
   */
  status: 'archived' | 'pending' | 'posted';

  /**
   * Version number of the ledger transaction.
   */
  version: number;
}

export namespace LedgerTransactionVersion {
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

    /**
     * The timestamp (ISO8601 format) at which the ledger transaction happened for
     * reporting purposes.
     */
    effective_at: string;

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
  }
}

export interface VersionListParams extends PageParams {
  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * created_at timestamp. For example, for all dates after Jan 1 2000 12:00 UTC, use
   * created_at%5Bgt%5D=2000-01-01T12:00:00Z.
   */
  created_at?: { [key: string]: string };

  /**
   * Get all ledger transaction versions that are included in the ledger account
   * statement.
   */
  ledger_account_statement_id?: string;

  /**
   * Get all the ledger transaction versions corresponding to the ID of a ledger
   * transaction.
   */
  ledger_transaction_id?: string;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * version. For example, for all versions after 2, use version%5Bgt%5D=2.
   */
  version?: { [key: string]: number };
}

export declare namespace Versions {
  export {
    type LedgerTransactionVersion as LedgerTransactionVersion,
    type LedgerTransactionVersionsPage as LedgerTransactionVersionsPage,
    type VersionListParams as VersionListParams,
  };
}
