// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as PaymentOrders from 'modern-treasury/resources/payment-orders/index';
import * as Shared from 'modern-treasury/resources/shared';
import { LineItems } from './line-items';
import * as API from './';
import { Page, PageParams } from 'modern-treasury/pagination';

export class Invoices extends APIResource {
  lineItems: LineItems = new LineItems(this.client);

  /**
   * create invoice
   */
  create(params: InvoiceCreateParams, options?: Core.RequestOptions): Promise<Core.APIResponse<Invoice>> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this.post('/api/invoices', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey || '', ...options?.headers },
    });
  }

  /**
   * get invoice
   */
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Invoice>> {
    return this.get(`/api/invoices/${id}`, options);
  }

  /**
   * update invoice
   */
  update(
    id: string,
    body?: InvoiceUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Invoice>>;
  update(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Invoice>>;
  update(
    id: string,
    body: InvoiceUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Invoice>> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this.patch(`/api/invoices/${id}`, { body, ...options });
  }

  /**
   * list invoices
   */
  list(query?: InvoiceListParams, options?: Core.RequestOptions): Core.PagePromise<InvoicesPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<InvoicesPage>;
  list(
    query: InvoiceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvoicesPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/api/invoices', InvoicesPage, { query, ...options });
  }
}

export class InvoicesPage extends Page<Invoice> {}
// alias so we can export it in the namespace
type _InvoicesPage = InvoicesPage;

export interface Invoice {
  id: string;

  /**
   * The invoicer's contact details displayed at the top of the invoice.
   */
  contact_details: Array<Invoice.ContactDetail>;

  /**
   * The counterparty's billing address.
   */
  counterparty_billing_address: Invoice.CounterpartyBillingAddress | null;

  /**
   * The ID of the counterparty receiving the invoice.
   */
  counterparty_id: string;

  /**
   * The counterparty's shipping address where physical goods should be delivered.
   */
  counterparty_shipping_address: Invoice.CounterpartyShippingAddress | null;

  created_at: string;

  /**
   * Currency that the invoice is denominated in. Defaults to `USD` if not provided.
   */
  currency: Shared.Currency | null;

  /**
   * A free-form description of the invoice.
   */
  description: string;

  /**
   * A future date by when the invoice needs to be paid.
   */
  due_date: string;

  /**
   * The URL of the hosted web UI where the invoice can be viewed.
   */
  hosted_url: string;

  /**
   * The invoice issuer's business address.
   */
  invoicer_address: Invoice.InvoicerAddress | null;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  /**
   * A unique record number assigned to each invoice that is issued.
   */
  number: string;

  object: string;

  /**
   * The ID of the internal account the invoice should be paid to.
   */
  originating_account_id: string;

  /**
   * Date transactions are to be posted to the participants' account. Defaults to the
   * current business day or the next business day if the current day is a bank
   * holiday or weekend. Format: yyyy-mm-dd.
   */
  payment_effective_date: string | null;

  /**
   * When opening an invoice, whether to show the embedded payment UI , automatically
   * debit the recipient, or rely on manual payment from the recipient.
   */
  payment_method: 'ui' | 'manual' | 'automatic' | null;

  /**
   * The payment orders created for paying the invoice through the invoice payment
   * UI.
   */
  payment_orders: Array<PaymentOrders.PaymentOrder>;

  /**
   * One of `ach` or `eft`
   */
  payment_type: 'eft' | 'ach' | null;

  /**
   * The URL where the invoice PDF can be downloaded.
   */
  pdf_url: string | null;

  /**
   * The receiving account ID. Can be an `internal_account`.
   */
  receiving_account_id: string | null;

  /**
   * The status of the invoice.
   */
  status: 'draft' | 'paid' | 'payment_pending' | 'unpaid' | 'voided';

  /**
   * Total amount due in specified currency's smallest unit, e.g., $10 USD would be
   * represented as 1000.
   */
  total_amount: number;

  updated_at: string;
}

export namespace Invoice {
  export interface ContactDetail {
    id: string;

    contact_identifier: string;

    contact_identifier_type: 'email' | 'phone_number' | 'website';

    created_at: string;

    discarded_at: string | null;

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

export interface InvoiceCreateParams {
  /**
   * Body param: The ID of the counterparty receiving the invoice.
   */
  counterparty_id: string;

  /**
   * Body param: A future date by when the invoice needs to be paid.
   */
  due_date: string;

  /**
   * Body param: The ID of the internal account the invoice should be paid to.
   */
  originating_account_id: string;

  /**
   * Body param: The invoicer's contact details displayed at the top of the invoice.
   */
  contact_details?: Array<InvoiceCreateParams.ContactDetail>;

  /**
   * Body param: The counterparty's billing address.
   */
  counterparty_billing_address?: InvoiceCreateParams.CounterpartyBillingAddress | null;

  /**
   * Body param: The counterparty's shipping address where physical goods should be
   * delivered.
   */
  counterparty_shipping_address?: InvoiceCreateParams.CounterpartyShippingAddress | null;

  /**
   * Body param: Currency that the invoice is denominated in. Defaults to `USD` if
   * not provided.
   */
  currency?: Shared.Currency | null;

  /**
   * Body param: A free-form description of the invoice.
   */
  description?: string;

  /**
   * Body param: The invoice issuer's business address.
   */
  invoicer_address?: InvoiceCreateParams.InvoicerAddress | null;

  /**
   * Body param: Date transactions are to be posted to the participants' account.
   * Defaults to the current business day or the next business day if the current day
   * is a bank holiday or weekend. Format: yyyy-mm-dd.
   */
  payment_effective_date?: string;

  /**
   * Body param: The method by which the invoice can be paid. `ui` will show the
   * embedded payment collection flow. `automatic` will automatically initiate
   * payment based upon the account details of the receiving_account id.\nIf the
   * invoice amount is positive, the automatically initiated payment order's
   * direction will be debit. If the invoice amount is negative, the automatically
   * initiated payment order's direction will be credit. One of `manual`, `ui`, or
   * `automatic`.
   */
  payment_method?: 'ui' | 'manual' | 'automatic';

  /**
   * Body param: One of `ach`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`, `sepa`,
   * `bacs`, `au_becs`, `interac`, `signet`, `provexchange`.
   */
  payment_type?:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'card'
    | 'check'
    | 'eft'
    | 'cross_border'
    | 'interac'
    | 'masav'
    | 'neft'
    | 'provxchange'
    | 'rtp'
    | 'sen'
    | 'sepa'
    | 'signet'
    | 'wire';

  /**
   * Body param: The receiving account ID. Can be an `external_account`.
   */
  receiving_account_id?: string;

  /**
   * Header param: This key should be something unique, preferably something like an
   * UUID.
   */
  'Idempotency-Key'?: string;
}

export namespace InvoiceCreateParams {
  export interface ContactDetail {
    id: string;

    contact_identifier: string;

    contact_identifier_type: 'email' | 'phone_number' | 'website';

    created_at: string;

    discarded_at: string | null;

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

export interface InvoiceUpdateParams {
  /**
   * The invoicer's contact details displayed at the top of the invoice.
   */
  contact_details?: Array<InvoiceUpdateParams.ContactDetail>;

  /**
   * The counterparty's billing address.
   */
  counterparty_billing_address?: InvoiceUpdateParams.CounterpartyBillingAddress | null;

  /**
   * The ID of the counterparty receiving the invoice.
   */
  counterparty_id?: string;

  /**
   * The counterparty's shipping address where physical goods should be delivered.
   */
  counterparty_shipping_address?: InvoiceUpdateParams.CounterpartyShippingAddress | null;

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
  invoicer_address?: InvoiceUpdateParams.InvoicerAddress | null;

  /**
   * The ID of the internal account the invoice should be paid to.
   */
  originating_account_id?: string;

  /**
   * Date transactions are to be posted to the participants' account. Defaults to the
   * current business day or the next business day if the current day is a bank
   * holiday or weekend. Format: yyyy-mm-dd.
   */
  payment_effective_date?: string;

  /**
   * The method by which the invoice can be paid. `ui` will show the embedded payment
   * collection flow. `automatic` will automatically initiate payment based upon the
   * account details of the receiving_account id.\nIf the invoice amount is positive,
   * the automatically initiated payment order's direction will be debit. If the
   * invoice amount is negative, the automatically initiated payment order's
   * direction will be credit. One of `manual`, `ui`, or `automatic`.
   */
  payment_method?: 'ui' | 'manual' | 'automatic';

  /**
   * One of `ach`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`, `sepa`, `bacs`,
   * `au_becs`, `interac`, `signet`, `provexchange`.
   */
  payment_type?:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'card'
    | 'check'
    | 'eft'
    | 'cross_border'
    | 'interac'
    | 'masav'
    | 'neft'
    | 'provxchange'
    | 'rtp'
    | 'sen'
    | 'sepa'
    | 'signet'
    | 'wire';

  /**
   * The receiving account ID. Can be an `external_account`.
   */
  receiving_account_id?: string;

  /**
   * Invoice status must be updated in a `PATCH` request that does not modify any
   * other invoice attributes. Valid state transitions are `draft` to `unpaid` and
   * `draft` or `unpaid` to `voided`.
   */
  status?: string;
}

export namespace InvoiceUpdateParams {
  export interface ContactDetail {
    id: string;

    contact_identifier: string;

    contact_identifier_type: 'email' | 'phone_number' | 'website';

    created_at: string;

    discarded_at: string | null;

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

export interface InvoiceListParams extends PageParams {}

export namespace Invoices {
  export import Invoice = API.Invoice;
  export type InvoicesPage = _InvoicesPage;
  export import InvoiceCreateParams = API.InvoiceCreateParams;
  export import InvoiceUpdateParams = API.InvoiceUpdateParams;
  export import InvoiceListParams = API.InvoiceListParams;

  export import LineItems = API.LineItems;
  export import InvoiceLineItem = API.InvoiceLineItem;
  export import InvoiceLineItemsPage = API.InvoiceLineItemsPage;
  export import LineItemCreateParams = API.LineItemCreateParams;
  export import LineItemUpdateParams = API.LineItemUpdateParams;
  export import LineItemListParams = API.LineItemListParams;
}
