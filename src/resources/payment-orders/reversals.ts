// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import { Page, type PageParams } from '../../pagination';

export class Reversals extends APIResource {
  /**
   * Create a reversal for a payment order.
   *
   * @example
   * ```ts
   * const reversal =
   *   await client.paymentOrders.reversals.create(
   *     'payment_order_id',
   *     { reason: 'duplicate' },
   *   );
   * ```
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
    return this._client.post(`/api/payment_orders/${paymentOrderId}/reversals`, {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * Get details on a single reversal of a payment order.
   *
   * @example
   * ```ts
   * const reversal =
   *   await client.paymentOrders.reversals.retrieve(
   *     'payment_order_id',
   *     'reversal_id',
   *   );
   * ```
   */
  retrieve(
    paymentOrderId: string,
    reversalId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Reversal> {
    return this._client.get(`/api/payment_orders/${paymentOrderId}/reversals/${reversalId}`, options);
  }

  /**
   * Get a list of all reversals of a payment order.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const reversal of client.paymentOrders.reversals.list(
   *   'payment_order_id',
   * )) {
   *   // ...
   * }
   * ```
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
    return this._client.getAPIList(`/api/payment_orders/${paymentOrderId}/reversals`, ReversalsPage, {
      query,
      ...options,
    });
  }
}

export class ReversalsPage extends Page<Reversal> {}

export interface Reversal {
  id: string;

  created_at: string;

  /**
   * The ID of the ledger transaction linked to the reversal.
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

  transaction_ids: Array<string | null>;

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
  ledger_transaction?: Shared.LedgerTransactionCreateRequest;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };
}

export interface ReversalListParams extends PageParams {}

Reversals.ReversalsPage = ReversalsPage;

export declare namespace Reversals {
  export {
    type Reversal as Reversal,
    ReversalsPage as ReversalsPage,
    type ReversalCreateParams as ReversalCreateParams,
    type ReversalListParams as ReversalListParams,
  };
}
