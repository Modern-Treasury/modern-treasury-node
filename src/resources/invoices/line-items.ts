// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class LineItems extends APIResource {
  /**
   * create invoice_line_item
   *
   * @example
   * ```ts
   * const invoiceLineItem =
   *   await client.invoices.lineItems.create('invoice_id', {
   *     name: 'name',
   *     unit_amount: 0,
   *   });
   * ```
   */
  create(
    invoiceID: string,
    body: LineItemCreateParams,
    options?: RequestOptions,
  ): APIPromise<InvoiceLineItem> {
    return this._client.post(path`/api/invoices/${invoiceID}/invoice_line_items`, { body, ...options });
  }

  /**
   * get invoice_line_item
   *
   * @example
   * ```ts
   * const invoiceLineItem =
   *   await client.invoices.lineItems.retrieve('id', {
   *     invoice_id: 'invoice_id',
   *   });
   * ```
   */
  retrieve(
    id: string,
    params: LineItemRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<InvoiceLineItem> {
    const { invoice_id } = params;
    return this._client.get(path`/api/invoices/${invoice_id}/invoice_line_items/${id}`, options);
  }

  /**
   * update invoice_line_item
   *
   * @example
   * ```ts
   * const invoiceLineItem =
   *   await client.invoices.lineItems.update('id', {
   *     invoice_id: 'invoice_id',
   *   });
   * ```
   */
  update(id: string, params: LineItemUpdateParams, options?: RequestOptions): APIPromise<InvoiceLineItem> {
    const { invoice_id, ...body } = params;
    return this._client.patch(path`/api/invoices/${invoice_id}/invoice_line_items/${id}`, {
      body,
      ...options,
    });
  }

  /**
   * list invoice_line_items
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const invoiceLineItem of client.invoices.lineItems.list(
   *   'invoice_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    invoiceID: string,
    query: LineItemListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InvoiceLineItemsPage, InvoiceLineItem> {
    return this._client.getAPIList(
      path`/api/invoices/${invoiceID}/invoice_line_items`,
      Page<InvoiceLineItem>,
      { query, ...options },
    );
  }

  /**
   * delete invoice_line_item
   *
   * @example
   * ```ts
   * const invoiceLineItem =
   *   await client.invoices.lineItems.delete('id', {
   *     invoice_id: 'invoice_id',
   *   });
   * ```
   */
  delete(id: string, params: LineItemDeleteParams, options?: RequestOptions): APIPromise<InvoiceLineItem> {
    const { invoice_id } = params;
    return this._client.delete(path`/api/invoices/${invoice_id}/invoice_line_items/${id}`, options);
  }
}

export type InvoiceLineItemsPage = Page<InvoiceLineItem>;

export interface InvoiceLineItem {
  id: string;

  /**
   * The total amount for this line item specified in the invoice currency's smallest
   * unit.
   */
  amount: number;

  created_at: string;

  /**
   * An optional free-form description of the line item.
   */
  description: string;

  /**
   * Either `debit` or `credit`. `debit` indicates that a client owes the business
   * money and increases the invoice's `total_amount` due. `credit` has the opposite
   * intention and effect.
   */
  direction: string;

  /**
   * The ID of the invoice for this line item.
   */
  invoice_id: string;

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

  /**
   * The name of the line item, typically a product or SKU name.
   */
  name: string;

  object: string;

  /**
   * The number of units of a product or service that this line item is for. Must be
   * a whole number. Defaults to 1 if not provided.
   */
  quantity: number;

  /**
   * The cost per unit of the product or service that this line item is for,
   * specified in the invoice currency's smallest unit.
   */
  unit_amount: number;

  /**
   * The cost per unit of the product or service that this line item is for,
   * specified in the invoice currency's smallest unit. Accepts decimal strings with
   * up to 12 decimals
   */
  unit_amount_decimal: string;

  updated_at: string;
}

export interface InvoiceLineItemCreate {
  /**
   * The name of the line item, typically a product or SKU name.
   */
  name: string;

  /**
   * The cost per unit of the product or service that this line item is for,
   * specified in the invoice currency's smallest unit.
   */
  unit_amount: number;

  /**
   * An optional free-form description of the line item.
   */
  description?: string;

  /**
   * Either `debit` or `credit`. `debit` indicates that a client owes the business
   * money and increases the invoice's `total_amount` due. `credit` has the opposite
   * intention and effect.
   */
  direction?: string;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };

  /**
   * The number of units of a product or service that this line item is for. Must be
   * a whole number. Defaults to 1 if not provided.
   */
  quantity?: number;

  /**
   * The cost per unit of the product or service that this line item is for,
   * specified in the invoice currency's smallest unit. Accepts decimal strings with
   * up to 12 decimals
   */
  unit_amount_decimal?: string;
}

export interface LineItemCreateParams {
  /**
   * The name of the line item, typically a product or SKU name.
   */
  name: string;

  /**
   * The cost per unit of the product or service that this line item is for,
   * specified in the invoice currency's smallest unit.
   */
  unit_amount: number;

  /**
   * An optional free-form description of the line item.
   */
  description?: string;

  /**
   * Either `debit` or `credit`. `debit` indicates that a client owes the business
   * money and increases the invoice's `total_amount` due. `credit` has the opposite
   * intention and effect.
   */
  direction?: string;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };

  /**
   * The number of units of a product or service that this line item is for. Must be
   * a whole number. Defaults to 1 if not provided.
   */
  quantity?: number;

  /**
   * The cost per unit of the product or service that this line item is for,
   * specified in the invoice currency's smallest unit. Accepts decimal strings with
   * up to 12 decimals
   */
  unit_amount_decimal?: string;
}

export interface LineItemRetrieveParams {
  /**
   * invoice_id
   */
  invoice_id: string;
}

export interface LineItemUpdateParams {
  /**
   * Path param: invoice_id
   */
  invoice_id: string;

  /**
   * Body param: An optional free-form description of the line item.
   */
  description?: string;

  /**
   * Body param: Either `debit` or `credit`. `debit` indicates that a client owes the
   * business money and increases the invoice's `total_amount` due. `credit` has the
   * opposite intention and effect.
   */
  direction?: string;

  /**
   * Body param: Additional data represented as key-value pairs. Both the key and
   * value must be strings.
   */
  metadata?: { [key: string]: string };

  /**
   * Body param: The name of the line item, typically a product or SKU name.
   */
  name?: string;

  /**
   * Body param: The number of units of a product or service that this line item is
   * for. Must be a whole number. Defaults to 1 if not provided.
   */
  quantity?: number;

  /**
   * Body param: The cost per unit of the product or service that this line item is
   * for, specified in the invoice currency's smallest unit.
   */
  unit_amount?: number;

  /**
   * Body param: The cost per unit of the product or service that this line item is
   * for, specified in the invoice currency's smallest unit. Accepts decimal strings
   * with up to 12 decimals
   */
  unit_amount_decimal?: string;
}

export interface LineItemListParams extends PageParams {}

export interface LineItemDeleteParams {
  /**
   * invoice_id
   */
  invoice_id: string;
}

export declare namespace LineItems {
  export {
    type InvoiceLineItem as InvoiceLineItem,
    type InvoiceLineItemCreate as InvoiceLineItemCreate,
    type InvoiceLineItemsPage as InvoiceLineItemsPage,
    type LineItemCreateParams as LineItemCreateParams,
    type LineItemRetrieveParams as LineItemRetrieveParams,
    type LineItemUpdateParams as LineItemUpdateParams,
    type LineItemListParams as LineItemListParams,
    type LineItemDeleteParams as LineItemDeleteParams,
  };
}
