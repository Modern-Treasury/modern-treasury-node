// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import { Page, type PageParams } from '../pagination';

export class LineItems extends APIResource {
  /**
   * Get a single line item
   *
   * @example
   * ```ts
   * const lineItem = await client.lineItems.retrieve(
   *   'expected_payments',
   *   'itemizable_id',
   *   'id',
   * );
   * ```
   */
  retrieve(
    itemizableType: 'expected_payments' | 'payment_orders',
    itemizableId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LineItem> {
    return this._client.get(`/api/${itemizableType}/${itemizableId}/line_items/${id}`, options);
  }

  /**
   * update line item
   *
   * @example
   * ```ts
   * const lineItem = await client.lineItems.update(
   *   'expected_payments',
   *   'itemizable_id',
   *   'id',
   * );
   * ```
   */
  update(
    itemizableType: 'expected_payments' | 'payment_orders',
    itemizableId: string,
    id: string,
    body?: LineItemUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LineItem>;
  update(
    itemizableType: 'expected_payments' | 'payment_orders',
    itemizableId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LineItem>;
  update(
    itemizableType: 'expected_payments' | 'payment_orders',
    itemizableId: string,
    id: string,
    body: LineItemUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LineItem> {
    if (isRequestOptions(body)) {
      return this.update(itemizableType, itemizableId, id, {}, body);
    }
    return this._client.patch(`/api/${itemizableType}/${itemizableId}/line_items/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * Get a list of line items
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const lineItem of client.lineItems.list(
   *   'expected_payments',
   *   'itemizable_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    itemizableType: 'expected_payments' | 'payment_orders',
    itemizableId: string,
    query?: LineItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LineItemsPage, LineItem>;
  list(
    itemizableType: 'expected_payments' | 'payment_orders',
    itemizableId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LineItemsPage, LineItem>;
  list(
    itemizableType: 'expected_payments' | 'payment_orders',
    itemizableId: string,
    query: LineItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LineItemsPage, LineItem> {
    if (isRequestOptions(query)) {
      return this.list(itemizableType, itemizableId, {}, query);
    }
    return this._client.getAPIList(`/api/${itemizableType}/${itemizableId}/line_items`, LineItemsPage, {
      query,
      ...options,
    });
  }
}

export class LineItemsPage extends Page<LineItem> {}

export interface LineItem {
  id: string;

  accounting: Shared.Accounting;

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
  metadata: { [key: string]: string };

  object: string;

  updated_at: string;
}

export interface LineItemUpdateParams {
  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };
}

export interface LineItemListParams extends PageParams {}

LineItems.LineItemsPage = LineItemsPage;

export declare namespace LineItems {
  export {
    type LineItem as LineItem,
    LineItemsPage as LineItemsPage,
    type LineItemUpdateParams as LineItemUpdateParams,
    type LineItemListParams as LineItemListParams,
  };
}
