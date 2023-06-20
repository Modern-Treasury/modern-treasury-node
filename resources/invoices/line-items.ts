// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as Shared from '~/resources/shared';
import { Page, PageParams } from '~/pagination';

export class LineItems extends APIResource {
  /**
   * create invoice_line_item
   */
  create(
    invoiceId: string,
    params: LineItemCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<InvoiceLineItem>> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this.post(`/api/invoices/${invoiceId}/invoice_line_items`, {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey || '', ...options?.headers },
    });
  }

  /**
   * get invoice_line_item
   */
  retrieve(
    invoiceId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<InvoiceLineItem>> {
    return this.get(`/api/invoices/${invoiceId}/invoice_line_items/${id}`, options);
  }

  /**
   * update invoice_line_item
   */
  update(
    invoiceId: string,
    id: string,
    body?: LineItemUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<InvoiceLineItem>>;
  update(
    invoiceId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<InvoiceLineItem>>;
  update(
    invoiceId: string,
    id: string,
    body: LineItemUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<InvoiceLineItem>> {
    if (isRequestOptions(body)) {
      return this.update(invoiceId, id, {}, body);
    }
    return this.patch(`/api/invoices/${invoiceId}/invoice_line_items/${id}`, { body, ...options });
  }

  /**
   * list invoice_line_items
   */
  list(
    invoiceId: string,
    query?: LineItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvoiceLineItemsPage>;
  list(invoiceId: string, options?: Core.RequestOptions): Core.PagePromise<InvoiceLineItemsPage>;
  list(
    invoiceId: string,
    query: LineItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvoiceLineItemsPage> {
    if (isRequestOptions(query)) {
      return this.list(invoiceId, {}, query);
    }
    return this.getAPIList(`/api/invoices/${invoiceId}/invoice_line_items`, InvoiceLineItemsPage, {
      query,
      ...options,
    });
  }

  /**
   * delete invoice_line_item
   */
  del(
    invoiceId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<InvoiceLineItem>> {
    return this.delete(`/api/invoices/${invoiceId}/invoice_line_items/${id}`, options);
  }
}

export class InvoiceLineItemsPage extends Page<InvoiceLineItem> {}

export interface InvoiceLineItem {
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

  id: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

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

  updated_at: string;
}

export interface LineItemCreateParams {
  /**
   * Body param: The name of the line item, typically a product or SKU name.
   */
  name: string;

  /**
   * Body param: The cost per unit of the product or service that this line item is
   * for, specified in the invoice currency's smallest unit.
   */
  unit_amount: number;

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
   * Body param: The number of units of a product or service that this line item is
   * for. Must be a whole number. Defaults to 1 if not provided.
   */
  quantity?: number;

  /**
   * Header param: This key should be something unique, preferably something like an
   * UUID.
   */
  'Idempotency-Key'?: string;
}

export interface LineItemUpdateParams {
  /**
   * The invoicer's contact details displayed at the top of the invoice.
   */
  contact_details?: Array<LineItemUpdateParams.ContactDetails>;

  /**
   * The counterparty's billing address.
   */
  counterparty_billing_address?: LineItemUpdateParams.CounterpartyBillingAddress | null;

  /**
   * The ID of the counterparty receiving the invoice.
   */
  counterparty_id?: string;

  /**
   * The counterparty's shipping address where physical goods should be delivered.
   */
  counterparty_shipping_address?: LineItemUpdateParams.CounterpartyShippingAddress | null;

  /**
   * Currency that the invoice is denominated in. Defaults to `USD` if not provided.
   */
  currency?: Shared.Currency | null;

  /**
   * A free-form description of the invoice.
   */
  description?: string;

  /**
   * A future date by when the invoice needs to be paid.
   */
  due_date?: string;

  /**
   * The invoice issuer's business address.
   */
  invoicer_address?: LineItemUpdateParams.InvoicerAddress | null;

  /**
   * The ID of the internal account the invoice should be paid to.
   */
  originating_account_id?: string;
}

export namespace LineItemUpdateParams {
  export interface ContactDetails {
    contact_identifier: string;

    contact_identifier_type: 'email' | 'phone_number' | 'website';

    created_at: string;

    discarded_at: string | null;

    id: string;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    object: string;

    updated_at: string;
  }

  /**
   * The counterparty's billing address.
   */
  export interface CounterpartyBillingAddress {
    /**
     * Country code conforms to [ISO 3166-1 alpha-2]
     */
    country: string;

    line1: string;

    /**
     * Locality or City.
     */
    locality: string;

    /**
     * The postal code of the address.
     */
    postal_code: string;

    /**
     * Region or State.
     */
    region: string;

    line2?: string;
  }

  /**
   * The counterparty's shipping address where physical goods should be delivered.
   */
  export interface CounterpartyShippingAddress {
    /**
     * Country code conforms to [ISO 3166-1 alpha-2]
     */
    country: string;

    line1: string;

    /**
     * Locality or City.
     */
    locality: string;

    /**
     * The postal code of the address.
     */
    postal_code: string;

    /**
     * Region or State.
     */
    region: string;

    line2?: string;
  }

  /**
   * The invoice issuer's business address.
   */
  export interface InvoicerAddress {
    /**
     * Country code conforms to [ISO 3166-1 alpha-2]
     */
    country: string;

    line1: string;

    /**
     * Locality or City.
     */
    locality: string;

    /**
     * The postal code of the address.
     */
    postal_code: string;

    /**
     * Region or State.
     */
    region: string;

    line2?: string;
  }
}

export interface LineItemListParams extends PageParams {}
