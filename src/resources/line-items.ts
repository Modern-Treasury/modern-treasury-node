// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LineItems extends APIResource {
  /**
   * Get a single line item
   *
   * @example
   * ```ts
   * const lineItem = await client.lineItems.retrieve('id', {
   *   itemizable_type: 'expected_payments',
   *   itemizable_id: 'itemizable_id',
   * });
   * ```
   */
  retrieve(id: string, params: LineItemRetrieveParams, options?: RequestOptions): APIPromise<LineItem> {
    const { itemizable_type, itemizable_id } = params;
    return this._client.get(path`/api/${itemizable_type}/${itemizable_id}/line_items/${id}`, options);
  }

  /**
   * update line item
   *
   * @example
   * ```ts
   * const lineItem = await client.lineItems.update('id', {
   *   itemizable_type: 'expected_payments',
   *   itemizable_id: 'itemizable_id',
   * });
   * ```
   */
  update(id: string, params: LineItemUpdateParams, options?: RequestOptions): APIPromise<LineItem> {
    const { itemizable_type, itemizable_id, ...body } = params;
    return this._client.patch(path`/api/${itemizable_type}/${itemizable_id}/line_items/${id}`, {
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
   *   'itemizable_id',
   *   { itemizable_type: 'expected_payments' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    itemizableID: string,
    params: LineItemListParams,
    options?: RequestOptions,
  ): PagePromise<LineItemsPage, LineItem> {
    const { itemizable_type, ...query } = params;
    return this._client.getAPIList(path`/api/${itemizable_type}/${itemizableID}/line_items`, Page<LineItem>, {
      query,
      ...options,
    });
  }
}

export type LineItemsPage = Page<LineItem>;

export interface LineItem {
  id: string;

  /**
   * @deprecated
   */
  accounting: LineItem.Accounting;

  /**
   * @deprecated The ID of one of your accounting categories. Note that these will
   * only be accessible if your accounting system has been connected.
   */
  accounting_category_id: string | null;

  /**
   * @deprecated The ID of one of the class objects in your accounting system. Class
   * objects track segments of your business independent of client or project. Note
   * that these will only be accessible if your accounting system has been connected.
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

export namespace LineItem {
  /**
   * @deprecated
   */
  export interface Accounting {
    /**
     * @deprecated The ID of one of your accounting categories. Note that these will
     * only be accessible if your accounting system has been connected.
     */
    account_id?: string | null;

    /**
     * @deprecated The ID of one of the class objects in your accounting system. Class
     * objects track segments of your business independent of client or project. Note
     * that these will only be accessible if your accounting system has been connected.
     */
    class_id?: string | null;
  }
}

export interface LineItemRetrieveParams {
  /**
   * One of `payment_orders` or `expected_payments`.
   */
  itemizable_type: 'expected_payments' | 'payment_orders';

  /**
   * The ID of the payment order or expected payment.
   */
  itemizable_id: string;
}

export interface LineItemUpdateParams {
  /**
   * Path param: One of `payment_orders` or `expected_payments`.
   */
  itemizable_type: 'expected_payments' | 'payment_orders';

  /**
   * Path param: The ID of the payment order or expected payment.
   */
  itemizable_id: string;

  /**
   * Body param: Additional data represented as key-value pairs. Both the key and
   * value must be strings.
   */
  metadata?: { [key: string]: string };
}

export interface LineItemListParams extends PageParams {
  /**
   * Path param: One of `payment_orders` or `expected_payments`.
   */
  itemizable_type: 'expected_payments' | 'payment_orders';
}

export declare namespace LineItems {
  export {
    type LineItem as LineItem,
    type LineItemsPage as LineItemsPage,
    type LineItemRetrieveParams as LineItemRetrieveParams,
    type LineItemUpdateParams as LineItemUpdateParams,
    type LineItemListParams as LineItemListParams,
  };
}
