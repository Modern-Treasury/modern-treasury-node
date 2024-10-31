// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { Page, type PageParams } from '../../pagination';

export class LineItems extends APIResource {
  /**
   * create invoice_line_item
   */
  create(
    invoiceId: string,
    params: LineItemCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvoiceLineItem> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post(`/api/invoices/${invoiceId}/invoice_line_items`, {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * get invoice_line_item
   */
  retrieve(invoiceId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<InvoiceLineItem> {
    return this._client.get(`/api/invoices/${invoiceId}/invoice_line_items/${id}`, options);
  }

  /**
   * update invoice_line_item
   */
  update(
    invoiceId: string,
    id: string,
    body?: LineItemUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvoiceLineItem>;
  update(invoiceId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<InvoiceLineItem>;
  update(
    invoiceId: string,
    id: string,
    body: LineItemUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvoiceLineItem> {
    if (isRequestOptions(body)) {
      return this.update(invoiceId, id, {}, body);
    }
    return this._client.patch(`/api/invoices/${invoiceId}/invoice_line_items/${id}`, { body, ...options });
  }

  /**
   * list invoice_line_items
   */
  list(
    invoiceId: string,
    query?: LineItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvoiceLineItemsPage, InvoiceLineItem>;
  list(
    invoiceId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvoiceLineItemsPage, InvoiceLineItem>;
  list(
    invoiceId: string,
    query: LineItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvoiceLineItemsPage, InvoiceLineItem> {
    if (isRequestOptions(query)) {
      return this.list(invoiceId, {}, query);
    }
    return this._client.getAPIList(`/api/invoices/${invoiceId}/invoice_line_items`, InvoiceLineItemsPage, {
      query,
      ...options,
    });
  }

  /**
   * delete invoice_line_item
   */
  del(invoiceId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<InvoiceLineItem> {
    return this._client.delete(`/api/invoices/${invoiceId}/invoice_line_items/${id}`, options);
  }
}

export class InvoiceLineItemsPage extends Page<InvoiceLineItem> {}

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
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata: Record<string, string>;

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
  metadata?: Record<string, string>;

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

export interface LineItemUpdateParams {
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
  metadata?: Record<string, string>;

  /**
   * The name of the line item, typically a product or SKU name.
   */
  name?: string;

  /**
   * The number of units of a product or service that this line item is for. Must be
   * a whole number. Defaults to 1 if not provided.
   */
  quantity?: number;

  /**
   * The cost per unit of the product or service that this line item is for,
   * specified in the invoice currency's smallest unit.
   */
  unit_amount?: number;

  /**
   * The cost per unit of the product or service that this line item is for,
   * specified in the invoice currency's smallest unit. Accepts decimal strings with
   * up to 12 decimals
   */
  unit_amount_decimal?: string;
}

export interface LineItemListParams extends PageParams {}

LineItems.InvoiceLineItemsPage = InvoiceLineItemsPage;

export declare namespace LineItems {
  export {
    type InvoiceLineItem as InvoiceLineItem,
    InvoiceLineItemsPage as InvoiceLineItemsPage,
    type LineItemCreateParams as LineItemCreateParams,
    type LineItemUpdateParams as LineItemUpdateParams,
    type LineItemListParams as LineItemListParams,
  };
}
