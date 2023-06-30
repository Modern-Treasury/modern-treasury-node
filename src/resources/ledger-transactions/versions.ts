// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as API from './';
import { Page, PageParams } from 'modern-treasury/pagination';

export class Versions extends APIResource {
  /**
   * Get a list of ledger transaction versions.
   */
  list(
    query?: VersionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerTransactionVersionsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<LedgerTransactionVersionsPage>;
  list(
    query: VersionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerTransactionVersionsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/api/ledger_transaction_versions', LedgerTransactionVersionsPage, {
      query,
      ...options,
    });
  }
}

export class LedgerTransactionVersionsPage extends Page<LedgerTransactionVersion> {}

export interface LedgerTransactionVersion {
  id: string;

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
   * One of `pending`, `posted`, or `archived`
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
    direction: 'credit' | 'debit';

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
}

export interface VersionListParams extends PageParams {
  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * created_at timestamp. For example, for all dates after Jan 1 2000 12:00 UTC, use
   * created_at%5Bgt%5D=2000-01-01T12:00:00Z.
   */
  created_at?: Record<string, string>;

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
  version?: Record<string, number>;
}

export namespace Versions {
  export import LedgerTransactionVersion = API.LedgerTransactionVersion;
  export import LedgerTransactionVersionsPage = API.LedgerTransactionVersionsPage;
  export import VersionListParams = API.VersionListParams;
}
