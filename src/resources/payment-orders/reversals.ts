// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

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
  create(paymentOrderID: string, body: ReversalCreateParams, options?: RequestOptions): APIPromise<Reversal> {
    return this._client.post(path`/api/payment_orders/${paymentOrderID}/reversals`, { body, ...options });
  }

  /**
   * Get details on a single reversal of a payment order.
   *
   * @example
   * ```ts
   * const reversal =
   *   await client.paymentOrders.reversals.retrieve(
   *     'reversal_id',
   *     { payment_order_id: 'payment_order_id' },
   *   );
   * ```
   */
  retrieve(
    reversalID: string,
    params: ReversalRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Reversal> {
    const { payment_order_id } = params;
    return this._client.get(path`/api/payment_orders/${payment_order_id}/reversals/${reversalID}`, options);
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
    paymentOrderID: string,
    query: ReversalListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ReversalsPage, Reversal> {
    return this._client.getAPIList(path`/api/payment_orders/${paymentOrderID}/reversals`, Page<Reversal>, {
      query,
      ...options,
    });
  }
}

export type ReversalsPage = Page<Reversal>;

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
   * One of `unreconciled`, `tentatively_reconciled` or `reconciled`.
   */
  reconciliation_status: 'reconciled' | 'unreconciled' | 'tentatively_reconciled';

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

export interface ReversalRetrieveParams {
  /**
   * The id of the payment order being reversed.
   */
  payment_order_id: string;
}

export interface ReversalListParams extends PageParams {}

export declare namespace Reversals {
  export {
    type Reversal as Reversal,
    type ReversalsPage as ReversalsPage,
    type ReversalCreateParams as ReversalCreateParams,
    type ReversalRetrieveParams as ReversalRetrieveParams,
    type ReversalListParams as ReversalListParams,
  };
}
