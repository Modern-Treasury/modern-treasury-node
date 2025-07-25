// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ExpectedPaymentsAPI from '../expected-payments';
import * as Shared from '../shared';
import * as LineItemsAPI from './line-items';
import {
  InvoiceLineItem as LineItemsAPIInvoiceLineItem,
  InvoiceLineItemsPage,
  LineItemCreateParams,
  LineItemListParams,
  LineItemUpdateParams,
  LineItems,
} from './line-items';
import * as PaymentOrdersAPI from '../payment-orders/payment-orders';
import { Page, type PageParams } from '../../pagination';

export class Invoices extends APIResource {
  lineItems: LineItemsAPI.LineItems = new LineItemsAPI.LineItems(this._client);

  /**
   * create invoice
   *
   * @example
   * ```ts
   * const invoice = await client.invoices.create({
   *   counterparty_id: 'counterparty_id',
   *   due_date: '2019-12-27T18:11:19.117Z',
   *   originating_account_id: 'originating_account_id',
   * });
   * ```
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
   *
   * @example
   * ```ts
   * const invoice = await client.invoices.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Invoice> {
    return this._client.get(`/api/invoices/${id}`, options);
  }

  /**
   * update invoice
   *
   * @example
   * ```ts
   * const invoice = await client.invoices.update('id');
   * ```
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
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const invoice of client.invoices.list()) {
   *   // ...
   * }
   * ```
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
   *
   * @example
   * ```ts
   * await client.invoices.addPaymentOrder(
   *   'id',
   *   'payment_order_id',
   * );
   * ```
   */
  addPaymentOrder(id: string, paymentOrderId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/api/invoices/${id}/payment_orders/${paymentOrderId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
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
  contact_details: Array<Shared.ContactDetail>;

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
   * An optional free-form description of the invoice.
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
   * The name of the issuer for the invoice. Defaults to the name of the
   * Organization.
   */
  invoicer_name: string | null;

  /**
   * The ledger account settlement object linked to the invoice.
   */
  ledger_account_settlement_id: string | null;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata: { [key: string]: string } | null;

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
   * Number of days after due date when overdue reminder emails will be sent out to
   * invoice recipients.
   */
  remind_after_overdue_days: Array<number> | null;

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
   * When true, the invoice will progress to unpaid automatically and cannot be
   * edited after entering that state. If the invoice fails to progress to unpaid,
   * the errors will be returned and the invoice will not be created.
   */
  auto_advance?: boolean | null;

  /**
   * The invoicer's contact details displayed at the top of the invoice.
   */
  contact_details?: Array<Shared.ContactDetail>;

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
  currency?: Shared.Currency;

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
   * Whether to ingest the ledger_entries to populate the invoice line items. If this
   * is false, then a line item must be provided. If this is true, line_items must be
   * empty. Ignored if ledger_account_settlement_id is empty.
   */
  ingest_ledger_entries?: boolean | null;

  /**
   * An array of invoice line items. The API supports a maximum of 50 invoice line
   * items per invoice. If a greater number of invoice line items is required, please
   * contact support.
   */
  invoice_line_items?: Array<InvoiceCreateParams.InvoiceLineItem> | null;

  /**
   * The invoice issuer's business address.
   */
  invoicer_address?: InvoiceCreateParams.InvoicerAddress | null;

  /**
   * The ID of the virtual account the invoice should be paid to.
   */
  ledger_account_settlement_id?: string | null;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string } | null;

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
   * One of `ach`, `se_bankgirot`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`,
   * `sepa`, `bacs`, `au_becs`, `interac`, `neft`, `nics`,
   * `nz_national_clearing_code`, `sic`, `signet`, `provexchange`, `zengin`.
   */
  payment_type?: PaymentOrdersAPI.PaymentOrderType;

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
   * Number of days after due date when overdue reminder emails will be sent out to
   * invoice recipients.
   */
  remind_after_overdue_days?: Array<number> | null;

  /**
   * The ID of the virtual account the invoice should be paid to.
   */
  virtual_account_id?: string | null;
}

export namespace InvoiceCreateParams {
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

  export interface InvoiceLineItem {
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
  contact_details?: Array<Shared.ContactDetail>;

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
  currency?: Shared.Currency;

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
   * Whether to ingest the ledger_entries to populate the invoice line items. If this
   * is false, then a line item must be provided. If this is true, line_items must be
   * empty. Ignored if ledger_account_settlement_id is empty.
   */
  ingest_ledger_entries?: boolean | null;

  /**
   * An array of invoice line items. The API supports a maximum of 50 invoice line
   * items per invoice. If a greater number of invoice line items is required, please
   * contact support.
   */
  invoice_line_items?: Array<InvoiceUpdateParams.InvoiceLineItem> | null;

  /**
   * The invoice issuer's business address.
   */
  invoicer_address?: InvoiceUpdateParams.InvoicerAddress | null;

  /**
   * The ID of the virtual account the invoice should be paid to.
   */
  ledger_account_settlement_id?: string | null;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string } | null;

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
   * One of `ach`, `se_bankgirot`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`,
   * `sepa`, `bacs`, `au_becs`, `interac`, `neft`, `nics`,
   * `nz_national_clearing_code`, `sic`, `signet`, `provexchange`, `zengin`.
   */
  payment_type?: PaymentOrdersAPI.PaymentOrderType;

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
   * Number of days after due date when overdue reminder emails will be sent out to
   * invoice recipients.
   */
  remind_after_overdue_days?: Array<number> | null;

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

  export interface InvoiceLineItem {
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

export interface InvoiceListParams extends PageParams {
  counterparty_id?: string;

  /**
   * An inclusive upper bound for searching due_date
   */
  due_date_end?: string;

  /**
   * An inclusive lower bound for searching due_date
   */
  due_date_start?: string;

  expected_payment_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: { [key: string]: string };

  /**
   * A unique record number assigned to each invoice that is issued.
   */
  number?: string;

  originating_account_id?: string;

  payment_order_id?: string;

  status?: 'draft' | 'paid' | 'partially_paid' | 'payment_pending' | 'unpaid' | 'voided';
}

Invoices.InvoicesPage = InvoicesPage;
Invoices.LineItems = LineItems;
Invoices.InvoiceLineItemsPage = InvoiceLineItemsPage;

export declare namespace Invoices {
  export {
    type Invoice as Invoice,
    InvoicesPage as InvoicesPage,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
  };

  export {
    LineItems as LineItems,
    type LineItemsAPIInvoiceLineItem as InvoiceLineItem,
    InvoiceLineItemsPage as InvoiceLineItemsPage,
    type LineItemCreateParams as LineItemCreateParams,
    type LineItemUpdateParams as LineItemUpdateParams,
    type LineItemListParams as LineItemListParams,
  };
}
