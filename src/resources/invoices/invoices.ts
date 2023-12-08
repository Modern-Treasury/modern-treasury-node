// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as InvoicesAPI from 'modern-treasury/resources/invoices/invoices';
import * as ExpectedPaymentsAPI from 'modern-treasury/resources/expected-payments';
import * as Shared from 'modern-treasury/resources/shared';
import * as LineItemsAPI from 'modern-treasury/resources/invoices/line-items';
import * as PaymentOrdersAPI from 'modern-treasury/resources/payment-orders/payment-orders';
import { Page, type PageParams } from 'modern-treasury/pagination';

export class Invoices extends APIResource {
  lineItems: LineItemsAPI.LineItems = new LineItemsAPI.LineItems(this._client);

  /**
   * create invoice
   */
  create(params: InvoiceCreateParams, options?: Core.RequestOptions): Core.APIPromise<Invoice> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post('/api/invoices', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * get invoice
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Invoice> {
    return this._client.get(`/api/invoices/${id}`, options);
  }

  /**
   * update invoice
   */
  update(id: string, body?: InvoiceUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Invoice>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<Invoice>;
  update(
    id: string,
    body: InvoiceUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Invoice> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.patch(`/api/invoices/${id}`, { body, ...options });
  }

  /**
   * list invoices
   */
  list(query?: InvoiceListParams, options?: Core.RequestOptions): Core.PagePromise<InvoicesPage, Invoice>;
  list(options?: Core.RequestOptions): Core.PagePromise<InvoicesPage, Invoice>;
  list(
    query: InvoiceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvoicesPage, Invoice> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/invoices', InvoicesPage, { query, ...options });
  }

  /**
   * Add a payment order to an invoice.
   */
  addPaymentOrder(id: string, paymentOrderId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/api/invoices/${id}/payment_orders/${paymentOrderId}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }
}

export class InvoicesPage extends Page<Invoice> {}

export interface Invoice {
  id: string;

  /**
   * Amount paid on the invoice in specified currency's smallest unit, e.g., $10 USD
   * would be represented as 1000.
   */
  amount_paid: number;

  /**
   * Amount remaining due on the invoice in specified currency's smallest unit, e.g.,
   * $10 USD would be represented as 1000.
   */
  amount_remaining: number;

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
   * The expected payments created for an unpaid invoice.
   */
  expected_payments: Array<ExpectedPaymentsAPI.ExpectedPayment>;

  /**
   * When payment_method is automatic, the fallback payment method to use when an
   * automatic payment fails. One of `manual` or `ui`.
   */
  fallback_payment_method: string | null;

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
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata: Record<string, string>;

  /**
   * Emails in addition to the counterparty email to send invoice status
   * notifications to. At least one email is required if notifications are enabled
   * and the counterparty doesn't have an email.
   */
  notification_email_addresses: Array<string> | null;

  /**
   * If true, the invoice will send email notifications to the invoice recipients
   * about invoice status changes.
   */
  notifications_enabled: boolean;

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
  payment_orders: Array<PaymentOrdersAPI.PaymentOrder>;

  /**
   * One of `ach` or `eft`.
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
   * The email of the recipient of the invoice. Leaving this value as null will
   * fallback to using the counterparty's name.
   */
  recipient_email: string | null;

  /**
   * The name of the recipient of the invoice. Leaving this value as null will
   * fallback to using the counterparty's name.
   */
  recipient_name: string | null;

  /**
   * The status of the invoice.
   */
  status: 'draft' | 'paid' | 'partially_paid' | 'payment_pending' | 'unpaid' | 'voided';

  /**
   * Total amount due in specified currency's smallest unit, e.g., $10 USD would be
   * represented as 1000.
   */
  total_amount: number;

  /**
   * IDs of transaction line items associated with an invoice.
   */
  transaction_line_item_ids: Array<string>;

  updated_at: string;

  /**
   * The ID of the virtual account the invoice should be paid to.
   */
  virtual_account_id: string | null;
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
   * The ID of the counterparty receiving the invoice.
   */
  counterparty_id: string;

  /**
   * A future date by when the invoice needs to be paid.
   */
  due_date: string;

  /**
   * The ID of the internal account the invoice should be paid to.
   */
  originating_account_id: string;

  /**
   * The invoicer's contact details displayed at the top of the invoice.
   */
  contact_details?: Array<InvoiceCreateParams.ContactDetail>;

  /**
   * The counterparty's billing address.
   */
  counterparty_billing_address?: InvoiceCreateParams.CounterpartyBillingAddress | null;

  /**
   * The counterparty's shipping address where physical goods should be delivered.
   */
  counterparty_shipping_address?: InvoiceCreateParams.CounterpartyShippingAddress | null;

  /**
   * Currency that the invoice is denominated in. Defaults to `USD` if not provided.
   */
  currency?: Shared.Currency | null;

  /**
   * A free-form description of the invoice.
   */
  description?: string;

  /**
   * When payment_method is automatic, the fallback payment method to use when an
   * automatic payment fails. One of `manual` or `ui`.
   */
  fallback_payment_method?: string | null;

  /**
   * The invoice issuer's business address.
   */
  invoicer_address?: InvoiceCreateParams.InvoicerAddress | null;

  /**
   * Emails in addition to the counterparty email to send invoice status
   * notifications to. At least one email is required if notifications are enabled
   * and the counterparty doesn't have an email.
   */
  notification_email_addresses?: Array<string> | null;

  /**
   * If true, the invoice will send email notifications to the invoice recipients
   * about invoice status changes.
   */
  notifications_enabled?: boolean;

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
   * One of `ach`, `bankgirot`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`, `sepa`,
   * `bacs`, `au_becs`, `interac`, `neft`, `nics`, `nz_national_clearing_code`,
   * `sic`, `signet`, `provexchange`, `zengin`.
   */
  payment_type?:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'card'
    | 'chats'
    | 'check'
    | 'cross_border'
    | 'dk_nets'
    | 'eft'
    | 'hu_ics'
    | 'interac'
    | 'masav'
    | 'mx_ccen'
    | 'neft'
    | 'nics'
    | 'nz_becs'
    | 'pl_elixir'
    | 'provxchange'
    | 'ro_sent'
    | 'rtp'
    | 'sg_giro'
    | 'se_bankgirot'
    | 'sen'
    | 'sepa'
    | 'sic'
    | 'signet'
    | 'sknbi'
    | 'wire'
    | 'zengin';

  /**
   * The receiving account ID. Can be an `external_account`.
   */
  receiving_account_id?: string;

  /**
   * The email of the recipient of the invoice. Leaving this value as null will
   * fallback to using the counterparty's name.
   */
  recipient_email?: string | null;

  /**
   * The name of the recipient of the invoice. Leaving this value as null will
   * fallback to using the counterparty's name.
   */
  recipient_name?: string | null;

  /**
   * The ID of the virtual account the invoice should be paid to.
   */
  virtual_account_id?: string | null;
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
   * When payment_method is automatic, the fallback payment method to use when an
   * automatic payment fails. One of `manual` or `ui`.
   */
  fallback_payment_method?: string | null;

  /**
   * The invoice issuer's business address.
   */
  invoicer_address?: InvoiceUpdateParams.InvoicerAddress | null;

  /**
   * Emails in addition to the counterparty email to send invoice status
   * notifications to. At least one email is required if notifications are enabled
   * and the counterparty doesn't have an email.
   */
  notification_email_addresses?: Array<string> | null;

  /**
   * If true, the invoice will send email notifications to the invoice recipients
   * about invoice status changes.
   */
  notifications_enabled?: boolean;

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
   * One of `ach`, `bankgirot`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`, `sepa`,
   * `bacs`, `au_becs`, `interac`, `neft`, `nics`, `nz_national_clearing_code`,
   * `sic`, `signet`, `provexchange`, `zengin`.
   */
  payment_type?:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'card'
    | 'chats'
    | 'check'
    | 'cross_border'
    | 'dk_nets'
    | 'eft'
    | 'hu_ics'
    | 'interac'
    | 'masav'
    | 'mx_ccen'
    | 'neft'
    | 'nics'
    | 'nz_becs'
    | 'pl_elixir'
    | 'provxchange'
    | 'ro_sent'
    | 'rtp'
    | 'sg_giro'
    | 'se_bankgirot'
    | 'sen'
    | 'sepa'
    | 'sic'
    | 'signet'
    | 'sknbi'
    | 'wire'
    | 'zengin';

  /**
   * The receiving account ID. Can be an `external_account`.
   */
  receiving_account_id?: string;

  /**
   * The email of the recipient of the invoice. Leaving this value as null will
   * fallback to using the counterparty's name.
   */
  recipient_email?: string | null;

  /**
   * The name of the recipient of the invoice. Leaving this value as null will
   * fallback to using the counterparty's name.
   */
  recipient_name?: string | null;

  /**
   * Invoice status must be updated in a `PATCH` request that does not modify any
   * other invoice attributes. Valid state transitions are `draft` to `unpaid`,
   * `draft` or `unpaid` to `voided`, and `draft` or `unpaid` to `paid`.
   */
  status?: string;

  /**
   * The ID of the virtual account the invoice should be paid to.
   */
  virtual_account_id?: string | null;
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
  export import Invoice = InvoicesAPI.Invoice;
  export import InvoicesPage = InvoicesAPI.InvoicesPage;
  export import InvoiceCreateParams = InvoicesAPI.InvoiceCreateParams;
  export import InvoiceUpdateParams = InvoicesAPI.InvoiceUpdateParams;
  export import InvoiceListParams = InvoicesAPI.InvoiceListParams;
  export import LineItems = LineItemsAPI.LineItems;
  export import InvoiceLineItem = LineItemsAPI.InvoiceLineItem;
  export import InvoiceLineItemsPage = LineItemsAPI.InvoiceLineItemsPage;
  export import LineItemCreateParams = LineItemsAPI.LineItemCreateParams;
  export import LineItemUpdateParams = LineItemsAPI.LineItemUpdateParams;
  export import LineItemListParams = LineItemsAPI.LineItemListParams;
}
