// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ExpectedPaymentsAPI from './expected-payments';
import * as Shared from './shared';
import * as LedgerTransactionsAPI from './ledger-transactions/ledger-transactions';
import * as PaymentOrdersAPI from './payment-orders/payment-orders';
import * as TransactionsAPI from './transactions/transactions';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BulkRequests extends APIResource {
  /**
   * create bulk_request
   *
   * @example
   * ```ts
   * const bulkRequest = await client.bulkRequests.create({
   *   action_type: 'create',
   *   resource_type: 'payment_order',
   *   resources: [
   *     {
   *       amount: 0,
   *       direction: 'credit',
   *       originating_account_id:
   *         '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       type: 'ach',
   *     },
   *   ],
   * });
   * ```
   */
  create(body: BulkRequestCreateParams, options?: RequestOptions): APIPromise<BulkRequest> {
    return this._client.post('/api/bulk_requests', { body, ...options });
  }

  /**
   * get bulk_request
   *
   * @example
   * ```ts
   * const bulkRequest = await client.bulkRequests.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BulkRequest> {
    return this._client.get(path`/api/bulk_requests/${id}`, options);
  }

  /**
   * list bulk_requests
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const bulkRequest of client.bulkRequests.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: BulkRequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BulkRequestsPage, BulkRequest> {
    return this._client.getAPIList('/api/bulk_requests', Page<BulkRequest>, { query, ...options });
  }
}

export type BulkRequestsPage = Page<BulkRequest>;

export interface BulkRequest {
  id: string;

  /**
   * One of create, or update.
   */
  action_type: 'create' | 'update' | 'delete';

  created_at: string;

  /**
   * Total number of failed bulk results so far for this request
   */
  failed_result_count: number;

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
   * One of payment_order, expected_payment, or ledger_transaction.
   */
  resource_type:
    | 'payment_order'
    | 'ledger_account'
    | 'ledger_transaction'
    | 'expected_payment'
    | 'transaction'
    | 'transaction_line_item'
    | 'entity_link';

  /**
   * One of pending, processing, or completed.
   */
  status: 'pending' | 'processing' | 'completed';

  /**
   * Total number of successful bulk results so far for this request
   */
  success_result_count: number;

  /**
   * Total number of items in the `resources` array. Once a bulk request is
   * completed, `success_result_count` + `failed_result_count` will be equal to
   * `total_result_count`.
   */
  total_resource_count: number;

  updated_at: string;
}

export interface BulkRequestCreateParams {
  /**
   * One of create, or update.
   */
  action_type: 'create' | 'update' | 'delete';

  /**
   * One of payment_order, expected_payment, or ledger_transaction.
   */
  resource_type:
    | 'payment_order'
    | 'ledger_account'
    | 'ledger_transaction'
    | 'expected_payment'
    | 'transaction'
    | 'transaction_line_item'
    | 'entity_link';

  /**
   * An array of objects where each object contains the input params for a single
   * `action_type` request on a `resource_type` resource
   */
  resources: Array<
    | PaymentOrdersAPI.PaymentOrderAsyncCreate
    | ExpectedPaymentsAPI.ExpectedPaymentCreate
    | Shared.LedgerTransactionCreateRequest
    | Shared.LedgerAccountCreateRequest
    | TransactionsAPI.TransactionCreate
    | BulkRequestCreateParams.ID
    | BulkRequestCreateParams.PaymentOrderUpdateRequestWithID
    | BulkRequestCreateParams.ExpectedPaymentUpdateRequestWithID
    | BulkRequestCreateParams.TransactionUpdateRequestWithID
    | BulkRequestCreateParams.LedgerTransactionUpdateRequestWithID
  >;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };
}

export namespace BulkRequestCreateParams {
  export interface ID {
    id?: string;
  }

  export interface PaymentOrderUpdateRequestWithID extends PaymentOrdersAPI.PaymentOrderUpdate {
    id?: string;
  }

  export interface ExpectedPaymentUpdateRequestWithID extends ExpectedPaymentsAPI.ExpectedPaymentUpdate {
    id?: string;
  }

  export interface TransactionUpdateRequestWithID extends TransactionsAPI.TransactionUpdate {
    id?: string;
  }

  export interface LedgerTransactionUpdateRequestWithID
    extends LedgerTransactionsAPI.LedgerTransactionUpdate {
    id?: string;
  }
}

export interface BulkRequestListParams extends PageParams {
  /**
   * One of create, or update.
   */
  action_type?: 'create' | 'update' | 'delete';

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: { [key: string]: string };

  /**
   * One of payment_order, expected_payment, or ledger_transaction.
   */
  resource_type?:
    | 'payment_order'
    | 'ledger_account'
    | 'ledger_transaction'
    | 'expected_payment'
    | 'transaction'
    | 'transaction_line_item'
    | 'entity_link';

  /**
   * One of pending, processing, or completed.
   */
  status?: 'pending' | 'processing' | 'completed';
}

export declare namespace BulkRequests {
  export {
    type BulkRequest as BulkRequest,
    type BulkRequestsPage as BulkRequestsPage,
    type BulkRequestCreateParams as BulkRequestCreateParams,
    type BulkRequestListParams as BulkRequestListParams,
  };
}
