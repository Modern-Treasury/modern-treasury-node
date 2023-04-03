// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class LineItems extends APIResource {
  /**
   * Get a single line item
   */
  retrieve(
    itemizableId: string,
    itemizableType: 'expected_payments' | 'payment_orders',
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LineItem>> {
    return this.get(`/api/${itemizableType}/${itemizableId}/line_items/${id}`, options);
  }

  /**
   * update line item
   */
  update(
    itemizableId: string,
    itemizableType: 'expected_payments' | 'payment_orders',
    id: string,
    body?: LineItemUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LineItem>>;
  update(
    itemizableId: string,
    itemizableType: 'expected_payments' | 'payment_orders',
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LineItem>>;
  update(
    itemizableId: string,
    itemizableType: 'expected_payments' | 'payment_orders',
    id: string,
    body: LineItemUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LineItem>> {
    if (isRequestOptions(body)) {
      return this.update(itemizableId, itemizableType, id, {}, body);
    }
    return this.patch(`/api/${itemizableType}/${itemizableId}/line_items/${id}`, { body, ...options });
  }

  /**
   * Get a list of line items
   */
  list(
    itemizableId: string,
    itemizableType: 'expected_payments' | 'payment_orders',
    query?: LineItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LineItemsPage>;
  list(
    itemizableId: string,
    itemizableType: 'expected_payments' | 'payment_orders',
    options?: Core.RequestOptions,
  ): Core.PagePromise<LineItemsPage>;
  list(
    itemizableId: string,
    itemizableType: 'expected_payments' | 'payment_orders',
    query: LineItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LineItemsPage> {
    if (isRequestOptions(query)) {
      return this.list(itemizableId, itemizableType, {}, query);
    }
    return this.getAPIList(`/api/${itemizableType}/${itemizableId}/line_items`, LineItemsPage, {
      query,
      ...options,
    });
  }
}

export class LineItemsPage extends Page<LineItem> {}

export interface LineItem {
  accounting: LineItem.Accounting;

  /**
   * The ID of one of your accounting categories. Note that these will only be
   * accessible if your accounting system has been connected.
   */
  accounting_category_id: string | null;

  /**
   * The ID of one of the class objects in your accounting system. Class objects
   * track segments of your business independent of client or project. Note that
   * these will only be accessible if your accounting system has been connected.
   */
  accounting_ledger_class_id: string | null;

  /**
   * Value in specified currency's smallest unit. e.g. $10 would be represented
   * as 1000.
   */
  amount: number;

  created_at: string;

  /**
   * A free-form description of the line item.
   */
  description: string | null;

  id: string;

  /**
   * The ID of the payment order or expected payment.
   */
  itemizable_id: string;

  /**
   * One of `payment_orders` or `expected_payments`.
   */
  itemizable_type: 'ExpectedPayment' | 'PaymentOrder';

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

  updated_at: string;
}

export namespace LineItem {
  export interface Accounting {
    /**
     * The ID of one of your accounting categories. Note that these will only be
     * accessible if your accounting system has been connected.
     */
    account_id?: string | null;

    /**
     * The ID of one of the class objects in your accounting system. Class objects
     * track segments of your business independent of client or project. Note that
     * these will only be accessible if your accounting system has been connected.
     */
    class_id?: string | null;
  }
}

export interface LineItemUpdateParams {
  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;
}

export interface LineItemListParams extends PageParams {}
