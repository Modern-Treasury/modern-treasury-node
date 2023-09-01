// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as API from './index';
import { Page, PageParams } from 'modern-treasury/pagination';

export class Reversals extends APIResource {
  /**
   * Create a reversal for a payment order.
   */
  create(
    paymentOrderId: string,
    params: ReversalCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Reversal> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this.post(`/api/payment_orders/${paymentOrderId}/reversals`, {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * Get details on a single reversal of a payment order.
   */
  retrieve(
    paymentOrderId: string,
    reversalId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Reversal> {
    return this.get(`/api/payment_orders/${paymentOrderId}/reversals/${reversalId}`, options);
  }

  /**
   * Get a list of all reversals of a payment order.
   */
  list(
    paymentOrderId: string,
    query?: ReversalListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ReversalsPage, Reversal>;
  list(paymentOrderId: string, options?: Core.RequestOptions): Core.PagePromise<ReversalsPage, Reversal>;
  list(
    paymentOrderId: string,
    query: ReversalListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ReversalsPage, Reversal> {
    if (isRequestOptions(query)) {
      return this.list(paymentOrderId, {}, query);
    }
    return this.getAPIList(`/api/payment_orders/${paymentOrderId}/reversals`, ReversalsPage, {
      query,
      ...options,
    });
  }
}

export class ReversalsPage extends Page<Reversal> {}
// alias so we can export it in the namespace
type _ReversalsPage = ReversalsPage;

export interface Reversal {
  id: string;

  created_at: string;

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
   * The ID of the relevant Payment Order.
   */
  payment_order_id: string | null;

  /**
   * The reason for the reversal.
   */
  reason:
    | 'duplicate'
    | 'incorrect_amount'
    | 'incorrect_receiving_account'
    | 'date_earlier_than_intended'
    | 'date_later_than_intended';

  /**
   * The current status of the reversal.
   */
  status: 'completed' | 'failed' | 'pending' | 'processing' | 'returned' | 'sent';

  updated_at: string;
}

export interface ReversalCreateParams {
  /**
   * The reason for the reversal. Must be one of `duplicate`, `incorrect_amount`,
   * `incorrect_receiving_account`, `date_earlier_than_intended`,
   * `date_later_than_intended`.
   */
  reason:
    | 'duplicate'
    | 'incorrect_amount'
    | 'incorrect_receiving_account'
    | 'date_earlier_than_intended'
    | 'date_later_than_intended';

  /**
   * Specifies a ledger transaction object that will be created with the reversal. If
   * the ledger transaction cannot be created, then the reversal creation will fail.
   * The resulting ledger transaction will mirror the status of the reversal.
   */
  ledger_transaction?: ReversalCreateParams.LedgerTransaction;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;
}

export namespace ReversalCreateParams {
  /**
   * Specifies a ledger transaction object that will be created with the reversal. If
   * the ledger transaction cannot be created, then the reversal creation will fail.
   * The resulting ledger transaction will mirror the status of the reversal.
   */
  export interface LedgerTransaction {
    /**
     * An array of ledger entry objects.
     */
    ledger_entries: Array<LedgerTransaction.LedgerEntry>;

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

  export namespace LedgerTransaction {
    export interface LedgerEntry {
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
       * Additional data represented as key-value pairs. Both the key and value must be
       * strings.
       */
      metadata?: Record<string, string>;

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
}

export interface ReversalListParams extends PageParams {}

export namespace Reversals {
  export import Reversal = API.Reversal;
  export type ReversalsPage = _ReversalsPage;
  export import ReversalCreateParams = API.ReversalCreateParams;
  export import ReversalListParams = API.ReversalListParams;
}
