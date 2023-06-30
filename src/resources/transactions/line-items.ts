// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as API from './';
import { Page, PageParams } from 'modern-treasury/pagination';

export class LineItems extends APIResource {
  /**
   * list transaction_line_items
   */
  list(
    transactionId: string,
    query?: LineItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransactionLineItemsPage>;
  list(transactionId: string, options?: Core.RequestOptions): Core.PagePromise<TransactionLineItemsPage>;
  list(
    transactionId: string,
    query: LineItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransactionLineItemsPage> {
    if (isRequestOptions(query)) {
      return this.list(transactionId, {}, query);
    }
    return this.getAPIList(`/api/transactions/${transactionId}/line_items`, TransactionLineItemsPage, {
      query,
      ...options,
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
  counterparty_id: string;

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
  expected_payment_id: string;

  /**
   * This field will be true if this object exists in the live environment, or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

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
   * Indicates whether the line item is `originating` or `receiving` (see
   * https://www.moderntreasury.com/journal/beginners-guide-to-ach for more).
   */
  type: 'originating' | 'receiving';

  updated_at: string;
}

export interface LineItemListParams extends PageParams {
  type?: 'originating' | 'receiving' | null;
}

export namespace LineItems {
  export import TransactionLineItem = API.TransactionLineItem;
  export import TransactionLineItemsPage = API.TransactionLineItemsPage;
  export import LineItemListParams = API.LineItemListParams;
}
