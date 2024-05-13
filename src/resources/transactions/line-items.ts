// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as LineItemsAPI from './line-items';
import { Page, type PageParams } from '../../pagination';

export class LineItems extends APIResource {
  /**
   * create transaction line items
   */
  create(body: LineItemCreateParams, options?: Core.RequestOptions): Core.APIPromise<TransactionLineItem> {
    return this._client.post('/api/transaction_line_items', { body, ...options });
  }

  /**
   * get transaction line item
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<TransactionLineItem> {
    return this._client.get(`/api/transaction_line_items/${id}`, options);
  }

  /**
   * list transaction_line_items
   */
  list(
    query?: LineItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransactionLineItemsPage, TransactionLineItem>;
  list(options?: Core.RequestOptions): Core.PagePromise<TransactionLineItemsPage, TransactionLineItem>;
  list(
    query: LineItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransactionLineItemsPage, TransactionLineItem> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/transaction_line_items', TransactionLineItemsPage, {
      query,
      ...options,
    });
  }

  /**
   * delete transaction line item
   */
  del(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/transaction_line_items/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export class TransactionLineItemsPage extends Page<TransactionLineItem> {}

export interface TransactionLineItem {
  id: string;

  /**
   * If a matching object exists in Modern Treasury, `amount` will be populated.
   * Value in specified currency's smallest unit (taken from parent Transaction).
   */
  amount: number;

  /**
   * The ID for the counterparty for this transaction line item.
   */
  counterparty_id: string | null;

  created_at: string;

  /**
   * If no matching object is found, `description` will be a free-form text field
   * describing the line item. This field may contain personally identifiable
   * information (PII) and is not included in API responses by default. Learn more
   * about changing your settings at
   * https://docs.moderntreasury.com/reference/personally-identifiable-information.
   */
  description: string;

  discarded_at: string | null;

  /**
   * The ID of the reconciled Expected Payment, otherwise `null`.
   */
  expected_payment_id: string | null;

  /**
   * This field will be true if this object exists in the live environment, or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  /**
   * Describes whether this line item should be counted towards the corresponding
   * transaction’s reconciliation.
   */
  reconcilable: boolean;

  /**
   * If a matching object exists in Modern Treasury, the ID will be populated here,
   * otherwise `null`.
   */
  transactable_id: string | null;

  /**
   * If a matching object exists in Modern Treasury, the type will be populated here,
   * otherwise `null`.
   */
  transactable_type:
    | 'incoming_payment_detail'
    | 'paper_item'
    | 'payment_order'
    | 'payment_order_attempt'
    | 'return'
    | 'reversal'
    | null;

  /**
   * The ID of the parent transaction.
   */
  transaction_id: string;

  /**
   * Indicates whether the line item is `originating` or `receiving` (see
   * https://www.moderntreasury.com/journal/beginners-guide-to-ach for more).
   */
  type: 'originating' | 'receiving';

  updated_at: string;
}

export interface LineItemCreateParams {
  /**
   * If a matching object exists in Modern Treasury, `amount` will be populated.
   * Value in specified currency's smallest unit (taken from parent Transaction).
   */
  amount: number;

  /**
   * The ID of the reconciled Expected Payment, otherwise `null`.
   */
  expected_payment_id: string;

  /**
   * The ID of the parent transaction.
   */
  transaction_id: string;
}

export interface LineItemListParams extends PageParams {
  id?: Record<string, string>;

  transaction_id?: string;

  type?: 'originating' | 'receiving' | null;
}

export namespace LineItems {
  export import TransactionLineItem = LineItemsAPI.TransactionLineItem;
  export import TransactionLineItemsPage = LineItemsAPI.TransactionLineItemsPage;
  export import LineItemCreateParams = LineItemsAPI.LineItemCreateParams;
  export import LineItemListParams = LineItemsAPI.LineItemListParams;
}
