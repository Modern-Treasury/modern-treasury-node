// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as PaymentOrders from '~/resources/payment-orders';
import { LineItems } from './line-items';
import * as Shared from '~/resources/shared';
import { Page, PageParams } from '~/pagination';

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

export interface Invoice {
  /**
   * The invoicer's contact details displayed at the top of the invoice.
   */
  contact_details: Array<Invoice.ContactDetails>;

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
  currency: Shared.Currency;

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

  id: string;

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
   * The payment orders created for paying the invoice through the invoice payment
   * UI.
   */
  payment_orders: Array<PaymentOrders.PaymentOrder>;

  /**
   * The URL where the invoice PDF can be downloaded.
   */
  pdf_url: string | null;

  /**
   * One of `draft`, `unpaid`, `payment_pending`, `paid`, `void`, or `closed`.
   */
  status: string;

  /**
   * Total amount due in specified currency's smallest unit, e.g., $10 USD would be
   * represented as 1000.
   */
  total_amount: number;

  updated_at: string;
}

export namespace Invoice {
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
   * Body param: The invoicer's contact details displayed at the top of the invoice.
   */
  contact_details?: Array<InvoiceCreateParams.ContactDetails>;

  /**
   * Body param: The counterparty's billing address.
   */
  counterparty_billing_address?: InvoiceCreateParams.CounterpartyBillingAddress | null;

  /**
   * Body param: The ID of the counterparty receiving the invoice.
   */
  counterparty_id: string;

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
   * Body param: A future date by when the invoice needs to be paid.
   */
  due_date: string;

  /**
   * Body param: The invoice issuer's business address.
   */
  invoicer_address?: InvoiceCreateParams.InvoicerAddress | null;

  /**
   * Body param: The ID of the internal account the invoice should be paid to.
   */
  originating_account_id: string;

  /**
   * Header param: This key should be something unique, preferably something like an
   * UUID.
   */
  'Idempotency-Key'?: string;
}

export namespace InvoiceCreateParams {
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
  contact_details?: Array<InvoiceUpdateParams.ContactDetails>;

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
   * When opening an invoice, whether to show the embedded payment UI with the
   * invoice. Default true.
   */
  include_payment_ui?: boolean;

  /**
   * The invoice issuer's business address.
   */
  invoicer_address?: InvoiceUpdateParams.InvoicerAddress | null;

  /**
   * The ID of the internal account the invoice should be paid to.
   */
  originating_account_id?: string;

  /**
   * Invoice status must be updated in a `PATCH` request that does not modify any
   * other invoice attributes. Valid state transitions are `draft` to `unpaid`,
   * `draft` or `unpaid` to `void` and `unpaid` to `closed`.
   */
  status?: string;
}

export namespace InvoiceUpdateParams {
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
