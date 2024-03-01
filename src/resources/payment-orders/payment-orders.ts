// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as PaymentOrdersAPI from 'modern-treasury/resources/payment-orders/payment-orders';
import * as ExternalAccountsAPI from 'modern-treasury/resources/external-accounts';
import * as ReturnsAPI from 'modern-treasury/resources/returns';
import * as Shared from 'modern-treasury/resources/shared';
import * as VirtualAccountsAPI from 'modern-treasury/resources/virtual-accounts';
import * as InternalAccountsAPI from 'modern-treasury/resources/internal-accounts/internal-accounts';
import * as ReversalsAPI from 'modern-treasury/resources/payment-orders/reversals';
import { type Uploadable, maybeMultipartFormRequestOptions } from 'modern-treasury/core';
import { Page, type PageParams } from 'modern-treasury/pagination';

export class PaymentOrders extends APIResource {
  reversals: ReversalsAPI.Reversals = new ReversalsAPI.Reversals(this._client);

  /**
   * Create a new Payment Order
   */
  create(params: PaymentOrderCreateParams, options?: Core.RequestOptions): Core.APIPromise<PaymentOrder> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post(
      '/api/payment_orders',
      maybeMultipartFormRequestOptions({
        body,
        ...options,
        headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
      }),
    );
  }

  /**
   * Get details on a single payment order
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<PaymentOrder> {
    return this._client.get(`/api/payment_orders/${id}`, options);
  }

  /**
   * Update a payment order
   */
  update(
    id: string,
    body?: PaymentOrderUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaymentOrder>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<PaymentOrder>;
  update(
    id: string,
    body: PaymentOrderUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaymentOrder> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.patch(`/api/payment_orders/${id}`, { body, ...options });
  }

  /**
   * Get a list of all payment orders
   */
  list(
    query?: PaymentOrderListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaymentOrdersPage, PaymentOrder>;
  list(options?: Core.RequestOptions): Core.PagePromise<PaymentOrdersPage, PaymentOrder>;
  list(
    query: PaymentOrderListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaymentOrdersPage, PaymentOrder> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/payment_orders', PaymentOrdersPage, { query, ...options });
  }

  /**
   * Create a new payment order asynchronously
   */
  createAsync(
    params: PaymentOrderCreateAsyncParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.AsyncResponse> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post('/api/payment_orders/create_async', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }
}

export class PaymentOrdersPage extends Page<PaymentOrder> {}

export interface PaymentOrder {
  id: string;

  accounting: PaymentOrder.Accounting;

  /**
   * The ID of one of your accounting categories. Note that these will only be
   * accessible if your accounting system has been connected.
   */
  accounting_category_id: string | null;

  /**
   * The ID of one of your accounting ledger classes. Note that these will only be
   * accessible if your accounting system has been connected.
   */
  accounting_ledger_class_id: string | null;

  /**
   * Value in specified currency's smallest unit. e.g. $10 would be represented as
   * 1000 (cents). For RTP, the maximum amount allowed by the network is $100,000.
   */
  amount: number;

  /**
   * The party that will pay the fees for the payment order. Only applies to wire
   * payment orders. Can be one of shared, sender, or receiver, which correspond
   * respectively with the SWIFT 71A values `SHA`, `OUR`, `BEN`.
   */
  charge_bearer: 'shared' | 'sender' | 'receiver' | null;

  /**
   * Custom key-value pair for usage in compliance rules. Please contact support
   * before making changes to this field.
   */
  compliance_rule_metadata: Record<string, unknown> | null;

  /**
   * If the payment order is tied to a specific Counterparty, their id will appear,
   * otherwise `null`.
   */
  counterparty_id: string | null;

  created_at: string;

  /**
   * Defaults to the currency of the originating account.
   */
  currency: Shared.Currency | null;

  /**
   * If the payment order's status is `returned`, this will include the return
   * object's data.
   */
  current_return: ReturnsAPI.ReturnObject | null;

  /**
   * The ID of the compliance decision for the payment order, if transaction
   * monitoring is enabled.
   */
  decision_id: string | null;

  /**
   * An optional description for internal use.
   */
  description: string | null;

  /**
   * One of `credit`, `debit`. Describes the direction money is flowing in the
   * transaction. A `credit` moves money from your account to someone else's. A
   * `debit` pulls money from someone else's account to your own. Note that wire,
   * rtp, and check payments will always be `credit`.
   */
  direction: 'credit' | 'debit';

  /**
   * Date transactions are to be posted to the participants' account. Defaults to the
   * current business day or the next business day if the current day is a bank
   * holiday or weekend. Format: yyyy-mm-dd.
   */
  effective_date: string;

  /**
   * RFP payments require an expires_at. This value must be past the effective_date.
   */
  expires_at: string | null;

  /**
   * If present, indicates a specific foreign exchange contract number that has been
   * generated by your financial institution.
   */
  foreign_exchange_contract: string | null;

  /**
   * Indicates the type of FX transfer to initiate, can be either
   * `variable_to_fixed`, `fixed_to_variable`, or `null` if the payment order
   * currency matches the originating account currency.
   */
  foreign_exchange_indicator: 'fixed_to_variable' | 'variable_to_fixed' | null;

  /**
   * Associated serialized foreign exchange rate information.
   */
  foreign_exchange_rate: PaymentOrder.ForeignExchangeRate | null;

  /**
   * The ID of the ledger transaction linked to the payment order.
   */
  ledger_transaction_id: string | null;

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
   * A boolean to determine if NSF Protection is enabled for this payment order. Note
   * that this setting must also be turned on in your organization settings page.
   */
  nsf_protected: boolean;

  object: string;

  /**
   * The ID of one of your organization's internal accounts.
   */
  originating_account_id: string;

  /**
   * If present, this will replace your default company name on receiver's bank
   * statement. This field can only be used for ACH payments currently. For ACH, only
   * the first 16 characters of this string will be used. Any additional characters
   * will be truncated.
   */
  originating_party_name: string | null;

  /**
   * Either `normal` or `high`. For ACH and EFT payments, `high` represents a
   * same-day ACH or EFT transfer, respectively. For check payments, `high` can mean
   * an overnight check rather than standard mail.
   */
  priority: 'high' | 'normal';

  /**
   * If present, Modern Treasury will not process the payment until after this time.
   * If `process_after` is past the cutoff for `effective_date`, `process_after` will
   * take precedence and `effective_date` will automatically update to reflect the
   * earliest possible sending date after `process_after`. Format is ISO8601
   * timestamp.
   */
  process_after: string | null;

  /**
   * For `wire`, this is usually the purpose which is transmitted via the
   * "InstrForDbtrAgt" field in the ISO20022 file. If you are using Currencycloud,
   * this is the `payment.purpose_code` field. For `eft`, this field is the 3 digit
   * CPA Code that will be attached to the payment.
   */
  purpose: string | null;

  /**
   * The receiving account ID. Can be an `external_account` or `internal_account`.
   */
  receiving_account_id: string;

  receiving_account_type: 'internal_account' | 'external_account';

  reference_numbers: Array<PaymentOrder.ReferenceNumber>;

  /**
   * For `ach`, this field will be passed through on an addenda record. For `wire`
   * payments the field will be passed through as the "Originator to Beneficiary
   * Information", also known as OBI or Fedwire tag 6000.
   */
  remittance_information: string | null;

  /**
   * Send an email to the counterparty when the payment order is sent to the bank. If
   * `null`, `send_remittance_advice` on the Counterparty is used.
   */
  send_remittance_advice: boolean | null;

  /**
   * An optional descriptor which will appear in the receiver's statement. For
   * `check` payments this field will be used as the memo line. For `ach` the maximum
   * length is 10 characters. Note that for ACH payments, the name on your bank
   * account will be included automatically by the bank, so you can use the
   * characters for other useful information. For `eft` the maximum length is 15
   * characters.
   */
  statement_descriptor: string | null;

  /**
   * The current status of the payment order.
   */
  status:
    | 'approved'
    | 'cancelled'
    | 'completed'
    | 'denied'
    | 'failed'
    | 'needs_approval'
    | 'pending'
    | 'processing'
    | 'returned'
    | 'reversed'
    | 'sent';

  /**
   * An additional layer of classification for the type of payment order you are
   * doing. This field is only used for `ach` payment orders currently. For `ach`
   * payment orders, the `subtype` represents the SEC code. We currently support
   * `CCD`, `PPD`, `IAT`, `CTX`, `WEB`, `CIE`, and `TEL`.
   */
  subtype: PaymentOrderSubtype | null;

  /**
   * The IDs of all the transactions associated to this payment order. Usually, you
   * will only have a single transaction ID. However, if a payment order initially
   * results in a Return, but gets redrafted and is later successfully completed, it
   * can have many transactions.
   */
  transaction_ids: Array<string>;

  /**
   * A flag that determines whether a payment order should go through transaction
   * monitoring.
   */
  transaction_monitoring_enabled: boolean;

  /**
   * One of `ach`, `bankgirot`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`, `sepa`,
   * `bacs`, `au_becs`, `interac`, `neft`, `nics`, `nz_national_clearing_code`,
   * `sic`, `signet`, `provexchange`, `zengin`.
   */
  type: PaymentOrderType;

  /**
   * The account to which the originating of this payment should be attributed to.
   * Can be a `virtual_account` or `internal_account`.
   */
  ultimate_originating_account:
    | VirtualAccountsAPI.VirtualAccount
    | InternalAccountsAPI.InternalAccount
    | null;

  /**
   * The ultimate originating account ID. Can be a `virtual_account` or
   * `internal_account`.
   */
  ultimate_originating_account_id: string | null;

  ultimate_originating_account_type: 'internal_account' | 'virtual_account' | null;

  /**
   * Identifier of the ultimate originator of the payment order.
   */
  ultimate_originating_party_identifier: string | null;

  /**
   * Name of the ultimate originator of the payment order.
   */
  ultimate_originating_party_name: string | null;

  ultimate_receiving_party_identifier: string | null;

  ultimate_receiving_party_name: string | null;

  updated_at: string;

  /**
   * This field will be populated if a vendor (e.g. Currencycloud) failure occurs.
   * Logic shouldn't be built on its value as it is free-form.
   */
  vendor_failure_reason: string | null;
}

export namespace PaymentOrder {
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

  /**
   * Associated serialized foreign exchange rate information.
   */
  export interface ForeignExchangeRate {
    /**
     * Amount in the lowest denomination of the `base_currency` to convert, often
     * called the "sell" amount.
     */
    base_amount: number;

    /**
     * Currency to convert, often called the "sell" currency.
     */
    base_currency: Shared.Currency | null;

    /**
     * The exponent component of the rate. The decimal is calculated as `value` / (10 ^
     * `exponent`).
     */
    exponent: number;

    /**
     * A string representation of the rate.
     */
    rate_string: string;

    /**
     * Amount in the lowest denomination of the `target_currency`, often called the
     * "buy" amount.
     */
    target_amount: number;

    /**
     * Currency to convert the `base_currency` to, often called the "buy" currency.
     */
    target_currency: Shared.Currency | null;

    /**
     * The whole number component of the rate. The decimal is calculated as `value` /
     * (10 ^ `exponent`).
     */
    value: number;
  }

  export interface ReferenceNumber {
    id: string;

    created_at: string;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    object: string;

    /**
     * The vendor reference number.
     */
    reference_number: string;

    /**
     * The type of the reference number. Referring to the vendor payment id.
     */
    reference_number_type:
      | 'ach_original_trace_number'
      | 'ach_trace_number'
      | 'bankprov_payment_activity_date'
      | 'bankprov_payment_id'
      | 'bnk_dev_prenotification_id'
      | 'bnk_dev_transfer_id'
      | 'bofa_end_to_end_id'
      | 'bofa_transaction_id'
      | 'check_number'
      | 'column_fx_quote_id'
      | 'column_reversal_pair_transfer_id'
      | 'column_transfer_id'
      | 'cross_river_payment_id'
      | 'cross_river_service_message'
      | 'cross_river_transaction_id'
      | 'currencycloud_conversion_id'
      | 'currencycloud_payment_id'
      | 'dc_bank_transaction_id'
      | 'dwolla_transaction_id'
      | 'eft_trace_number'
      | 'evolve_transaction_id'
      | 'fedwire_imad'
      | 'fedwire_omad'
      | 'first_republic_internal_id'
      | 'goldman_sachs_collection_request_id'
      | 'goldman_sachs_end_to_end_id'
      | 'goldman_sachs_payment_request_id'
      | 'goldman_sachs_request_id'
      | 'goldman_sachs_unique_payment_id'
      | 'interac_message_id'
      | 'jpmc_ccn'
      | 'jpmc_clearing_system_reference'
      | 'jpmc_customer_reference_id'
      | 'jpmc_end_to_end_id'
      | 'jpmc_firm_root_id'
      | 'jpmc_p3_id'
      | 'jpmc_payment_batch_id'
      | 'jpmc_payment_information_id'
      | 'jpmc_payment_returned_datetime'
      | 'lob_check_id'
      | 'other'
      | 'partial_swift_mir'
      | 'pnc_clearing_reference'
      | 'pnc_instruction_id'
      | 'pnc_multipayment_id'
      | 'pnc_payment_trace_id'
      | 'rspec_vendor_payment_id'
      | 'rtp_instruction_id'
      | 'signet_api_reference_id'
      | 'signet_confirmation_id'
      | 'signet_request_id'
      | 'silvergate_payment_id'
      | 'svb_end_to_end_id'
      | 'svb_payment_id'
      | 'svb_transaction_cleared_for_sanctions_review'
      | 'svb_transaction_held_for_sanctions_review'
      | 'swift_mir'
      | 'swift_uetr'
      | 'umb_product_partner_account_number'
      | 'usbank_payment_id'
      | 'wells_fargo_payment_id'
      | 'wells_fargo_trace_number';

    updated_at: string;
  }
}

/**
 * An additional layer of classification for the type of payment order you are
 * doing. This field is only used for `ach` payment orders currently. For `ach`
 * payment orders, the `subtype` represents the SEC code. We currently support
 * `CCD`, `PPD`, `IAT`, `CTX`, `WEB`, `CIE`, and `TEL`.
 */
export type PaymentOrderSubtype =
  | '0C'
  | '0N'
  | '0S'
  | 'CCD'
  | 'CIE'
  | 'CTX'
  | 'IAT'
  | 'PPD'
  | 'TEL'
  | 'WEB'
  | null;

/**
 * One of `ach`, `bankgirot`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`, `sepa`,
 * `bacs`, `au_becs`, `interac`, `neft`, `nics`, `nz_national_clearing_code`,
 * `sic`, `signet`, `provexchange`, `zengin`.
 */
export type PaymentOrderType =
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
  | 'se_bankgirot'
  | 'sen'
  | 'sepa'
  | 'sg_giro'
  | 'sic'
  | 'signet'
  | 'sknbi'
  | 'wire'
  | 'zengin';

export interface PaymentOrderCreateParams {
  /**
   * Value in specified currency's smallest unit. e.g. $10 would be represented as
   * 1000 (cents). For RTP, the maximum amount allowed by the network is $100,000.
   */
  amount: number;

  /**
   * One of `credit`, `debit`. Describes the direction money is flowing in the
   * transaction. A `credit` moves money from your account to someone else's. A
   * `debit` pulls money from someone else's account to your own. Note that wire,
   * rtp, and check payments will always be `credit`.
   */
  direction: 'credit' | 'debit';

  /**
   * The ID of one of your organization's internal accounts.
   */
  originating_account_id: string;

  /**
   * One of `ach`, `bankgirot`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`, `sepa`,
   * `bacs`, `au_becs`, `interac`, `neft`, `nics`, `nz_national_clearing_code`,
   * `sic`, `signet`, `provexchange`, `zengin`.
   */
  type: PaymentOrderType;

  accounting?: PaymentOrderCreateParams.Accounting;

  /**
   * The ID of one of your accounting categories. Note that these will only be
   * accessible if your accounting system has been connected.
   */
  accounting_category_id?: string | null;

  /**
   * The ID of one of your accounting ledger classes. Note that these will only be
   * accessible if your accounting system has been connected.
   */
  accounting_ledger_class_id?: string | null;

  /**
   * The party that will pay the fees for the payment order. Only applies to wire
   * payment orders. Can be one of shared, sender, or receiver, which correspond
   * respectively with the SWIFT 71A values `SHA`, `OUR`, `BEN`.
   */
  charge_bearer?: 'shared' | 'sender' | 'receiver' | null;

  /**
   * Defaults to the currency of the originating account.
   */
  currency?: Shared.Currency | null;

  /**
   * An optional description for internal use.
   */
  description?: string | null;

  /**
   * An array of documents to be attached to the payment order. Note that if you
   * attach documents, the request's content type must be `multipart/form-data`.
   */
  documents?: Array<PaymentOrderCreateParams.Document>;

  /**
   * Date transactions are to be posted to the participants' account. Defaults to the
   * current business day or the next business day if the current day is a bank
   * holiday or weekend. Format: yyyy-mm-dd.
   */
  effective_date?: string;

  /**
   * RFP payments require an expires_at. This value must be past the effective_date.
   */
  expires_at?: string | null;

  /**
   * A payment type to fallback to if the original type is not valid for the
   * receiving account. Currently, this only supports falling back from RTP to ACH
   * (type=rtp and fallback_type=ach)
   */
  fallback_type?: 'ach';

  /**
   * If present, indicates a specific foreign exchange contract number that has been
   * generated by your financial institution.
   */
  foreign_exchange_contract?: string | null;

  /**
   * Indicates the type of FX transfer to initiate, can be either
   * `variable_to_fixed`, `fixed_to_variable`, or `null` if the payment order
   * currency matches the originating account currency.
   */
  foreign_exchange_indicator?: 'fixed_to_variable' | 'variable_to_fixed' | null;

  /**
   * Specifies a ledger transaction object that will be created with the payment
   * order. If the ledger transaction cannot be created, then the payment order
   * creation will fail. The resulting ledger transaction will mirror the status of
   * the payment order.
   */
  ledger_transaction?: PaymentOrderCreateParams.LedgerTransaction;

  /**
   * Either ledger_transaction or ledger_transaction_id can be provided. Only a
   * pending ledger transaction can be attached upon payment order creation. Once the
   * payment order is created, the status of the ledger transaction tracks the
   * payment order automatically.
   */
  ledger_transaction_id?: string;

  /**
   * An array of line items that must sum up to the amount of the payment order.
   */
  line_items?: Array<PaymentOrderCreateParams.LineItem>;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;

  /**
   * A boolean to determine if NSF Protection is enabled for this payment order. Note
   * that this setting must also be turned on in your organization settings page.
   */
  nsf_protected?: boolean;

  /**
   * If present, this will replace your default company name on receiver's bank
   * statement. This field can only be used for ACH payments currently. For ACH, only
   * the first 16 characters of this string will be used. Any additional characters
   * will be truncated.
   */
  originating_party_name?: string | null;

  /**
   * Either `normal` or `high`. For ACH and EFT payments, `high` represents a
   * same-day ACH or EFT transfer, respectively. For check payments, `high` can mean
   * an overnight check rather than standard mail.
   */
  priority?: 'high' | 'normal';

  /**
   * If present, Modern Treasury will not process the payment until after this time.
   * If `process_after` is past the cutoff for `effective_date`, `process_after` will
   * take precedence and `effective_date` will automatically update to reflect the
   * earliest possible sending date after `process_after`. Format is ISO8601
   * timestamp.
   */
  process_after?: string | null;

  /**
   * For `wire`, this is usually the purpose which is transmitted via the
   * "InstrForDbtrAgt" field in the ISO20022 file. If you are using Currencycloud,
   * this is the `payment.purpose_code` field. For `eft`, this field is the 3 digit
   * CPA Code that will be attached to the payment.
   */
  purpose?: string | null;

  /**
   * Either `receiving_account` or `receiving_account_id` must be present. When using
   * `receiving_account_id`, you may pass the id of an external account or an
   * internal account.
   */
  receiving_account?: PaymentOrderCreateParams.ReceivingAccount;

  /**
   * Either `receiving_account` or `receiving_account_id` must be present. When using
   * `receiving_account_id`, you may pass the id of an external account or an
   * internal account.
   */
  receiving_account_id?: string;

  /**
   * For `ach`, this field will be passed through on an addenda record. For `wire`
   * payments the field will be passed through as the "Originator to Beneficiary
   * Information", also known as OBI or Fedwire tag 6000.
   */
  remittance_information?: string | null;

  /**
   * Send an email to the counterparty when the payment order is sent to the bank. If
   * `null`, `send_remittance_advice` on the Counterparty is used.
   */
  send_remittance_advice?: boolean | null;

  /**
   * An optional descriptor which will appear in the receiver's statement. For
   * `check` payments this field will be used as the memo line. For `ach` the maximum
   * length is 10 characters. Note that for ACH payments, the name on your bank
   * account will be included automatically by the bank, so you can use the
   * characters for other useful information. For `eft` the maximum length is 15
   * characters.
   */
  statement_descriptor?: string | null;

  /**
   * An additional layer of classification for the type of payment order you are
   * doing. This field is only used for `ach` payment orders currently. For `ach`
   * payment orders, the `subtype` represents the SEC code. We currently support
   * `CCD`, `PPD`, `IAT`, `CTX`, `WEB`, `CIE`, and `TEL`.
   */
  subtype?: PaymentOrderSubtype | null;

  /**
   * A flag that determines whether a payment order should go through transaction
   * monitoring.
   */
  transaction_monitoring_enabled?: boolean;

  /**
   * Identifier of the ultimate originator of the payment order.
   */
  ultimate_originating_party_identifier?: string | null;

  /**
   * Name of the ultimate originator of the payment order.
   */
  ultimate_originating_party_name?: string | null;

  /**
   * Identifier of the ultimate funds recipient.
   */
  ultimate_receiving_party_identifier?: string | null;

  /**
   * Name of the ultimate funds recipient.
   */
  ultimate_receiving_party_name?: string | null;
}

export namespace PaymentOrderCreateParams {
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

  export interface Document {
    /**
     * The unique identifier for the associated object.
     */
    documentable_id: string;

    documentable_type:
      | 'cases'
      | 'counterparties'
      | 'expected_payments'
      | 'external_accounts'
      | 'incoming_payment_details'
      | 'internal_accounts'
      | 'organizations'
      | 'paper_items'
      | 'payment_orders'
      | 'transactions'
      | 'decisions'
      | 'connections';

    file: Uploadable;

    /**
     * A category given to the document, can be `null`.
     */
    document_type?: string;
  }

  /**
   * Specifies a ledger transaction object that will be created with the payment
   * order. If the ledger transaction cannot be created, then the payment order
   * creation will fail. The resulting ledger transaction will mirror the status of
   * the payment order.
   */
  export interface LedgerTransaction {
    /**
     * An array of ledger entry objects.
     */
    ledger_entries: Array<LedgerTransaction.LedgerEntry>;

    /**
     * An optional description for internal use.
     */
    description?: string | null;

    /**
     * The timestamp (ISO8601 format) at which the ledger transaction happened for
     * reporting purposes.
     */
    effective_at?: string;

    /**
     * The date (YYYY-MM-DD) on which the ledger transaction happened for reporting
     * purposes.
     */
    effective_date?: string;

    /**
     * A unique string to represent the ledger transaction. Only one pending or posted
     * ledger transaction may have this ID in the ledger.
     */
    external_id?: string;

    /**
     * If the ledger transaction can be reconciled to another object in Modern
     * Treasury, the id will be populated here, otherwise null.
     */
    ledgerable_id?: string;

    /**
     * If the ledger transaction can be reconciled to another object in Modern
     * Treasury, the type will be populated here, otherwise null. This can be one of
     * payment_order, incoming_payment_detail, expected_payment, return, or reversal.
     */
    ledgerable_type?:
      | 'counterparty'
      | 'expected_payment'
      | 'incoming_payment_detail'
      | 'internal_account'
      | 'line_item'
      | 'paper_item'
      | 'payment_order'
      | 'payment_order_attempt'
      | 'return'
      | 'reversal';

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: Record<string, string>;

    /**
     * To post a ledger transaction at creation, use `posted`.
     */
    status?: 'archived' | 'pending' | 'posted';
  }

  export namespace LedgerTransaction {
    export interface LedgerEntry {
      /**
       * Value in specified currency's smallest unit. e.g. $10 would be represented
       * as 1000. Can be any integer up to 36 digits.
       */
      amount: number;

      /**
       * One of `credit`, `debit`. Describes the direction money is flowing in the
       * transaction. A `credit` moves money from your account to someone else's. A
       * `debit` pulls money from someone else's account to your own. Note that wire,
       * rtp, and check payments will always be `credit`.
       */
      direction: Shared.TransactionDirection;

      /**
       * The ledger account that this ledger entry is associated with.
       */
      ledger_account_id: string;

      /**
       * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the
       * account’s available balance. If any of these conditions would be false after the
       * transaction is created, the entire call will fail with error code 422.
       */
      available_balance_amount?: Record<string, number> | null;

      /**
       * Lock version of the ledger account. This can be passed when creating a ledger
       * transaction to only succeed if no ledger transactions have posted since the
       * given version. See our post about Designing the Ledgers API with Optimistic
       * Locking for more details.
       */
      lock_version?: number | null;

      /**
       * Additional data represented as key-value pairs. Both the key and value must be
       * strings.
       */
      metadata?: Record<string, string>;

      /**
       * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the
       * account’s pending balance. If any of these conditions would be false after the
       * transaction is created, the entire call will fail with error code 422.
       */
      pending_balance_amount?: Record<string, number> | null;

      /**
       * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the
       * account’s posted balance. If any of these conditions would be false after the
       * transaction is created, the entire call will fail with error code 422.
       */
      posted_balance_amount?: Record<string, number> | null;

      /**
       * If true, response will include the balance of the associated ledger account for
       * the entry.
       */
      show_resulting_ledger_account_balances?: boolean | null;
    }
  }

  export interface LineItem {
    /**
     * Value in specified currency's smallest unit. e.g. $10 would be represented
     * as 1000.
     */
    amount: number;

    /**
     * The ID of one of your accounting categories. Note that these will only be
     * accessible if your accounting system has been connected.
     */
    accounting_category_id?: string | null;

    /**
     * A free-form description of the line item.
     */
    description?: string | null;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: Record<string, string>;
  }

  /**
   * Either `receiving_account` or `receiving_account_id` must be present. When using
   * `receiving_account_id`, you may pass the id of an external account or an
   * internal account.
   */
  export interface ReceivingAccount {
    account_details?: Array<ReceivingAccount.AccountDetail>;

    /**
     * Can be `checking`, `savings` or `other`.
     */
    account_type?: ExternalAccountsAPI.ExternalAccountType;

    contact_details?: Array<ReceivingAccount.ContactDetail>;

    /**
     * Specifies a ledger account object that will be created with the external
     * account. The resulting ledger account is linked to the external account for
     * auto-ledgering Payment objects. See
     * https://docs.moderntreasury.com/docs/linking-to-other-modern-treasury-objects
     * for more details.
     */
    ledger_account?: ReceivingAccount.LedgerAccount;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: Record<string, string>;

    /**
     * A nickname for the external account. This is only for internal usage and won't
     * affect any payments
     */
    name?: string | null;

    /**
     * Required if receiving wire payments.
     */
    party_address?: ReceivingAccount.PartyAddress;

    party_identifier?: string;

    /**
     * If this value isn't provided, it will be inherited from the counterparty's name.
     */
    party_name?: string;

    /**
     * Either `individual` or `business`.
     */
    party_type?: 'business' | 'individual' | null;

    /**
     * If you've enabled the Modern Treasury + Plaid integration in your Plaid account,
     * you can pass the processor token in this field.
     */
    plaid_processor_token?: string;

    routing_details?: Array<ReceivingAccount.RoutingDetail>;
  }

  export namespace ReceivingAccount {
    export interface AccountDetail {
      account_number: string;

      account_number_type?: 'iban' | 'hk_number' | 'clabe' | 'wallet_address' | 'pan' | 'other';
    }

    export interface ContactDetail {
      contact_identifier?: string;

      contact_identifier_type?: 'email' | 'phone_number' | 'website';
    }

    /**
     * Specifies a ledger account object that will be created with the external
     * account. The resulting ledger account is linked to the external account for
     * auto-ledgering Payment objects. See
     * https://docs.moderntreasury.com/docs/linking-to-other-modern-treasury-objects
     * for more details.
     */
    export interface LedgerAccount {
      /**
       * The currency of the ledger account.
       */
      currency: string;

      /**
       * The id of the ledger that this account belongs to.
       */
      ledger_id: string;

      /**
       * The name of the ledger account.
       */
      name: string;

      /**
       * The normal balance of the ledger account.
       */
      normal_balance: Shared.TransactionDirection;

      /**
       * The currency exponent of the ledger account.
       */
      currency_exponent?: number | null;

      /**
       * The description of the ledger account.
       */
      description?: string | null;

      /**
       * The array of ledger account category ids that this ledger account should be a
       * child of.
       */
      ledger_account_category_ids?: Array<string>;

      /**
       * If the ledger account links to another object in Modern Treasury, the id will be
       * populated here, otherwise null.
       */
      ledgerable_id?: string;

      /**
       * If the ledger account links to another object in Modern Treasury, the type will
       * be populated here, otherwise null. The value is one of internal_account or
       * external_account.
       */
      ledgerable_type?: 'external_account' | 'internal_account' | 'virtual_account';

      /**
       * Additional data represented as key-value pairs. Both the key and value must be
       * strings.
       */
      metadata?: Record<string, string>;
    }

    /**
     * Required if receiving wire payments.
     */
    export interface PartyAddress {
      /**
       * Country code conforms to [ISO 3166-1 alpha-2]
       */
      country?: string | null;

      line1?: string | null;

      line2?: string | null;

      /**
       * Locality or City.
       */
      locality?: string | null;

      /**
       * The postal code of the address.
       */
      postal_code?: string | null;

      /**
       * Region or State.
       */
      region?: string | null;
    }

    export interface RoutingDetail {
      routing_number: string;

      routing_number_type:
        | 'aba'
        | 'au_bsb'
        | 'br_codigo'
        | 'ca_cpa'
        | 'chips'
        | 'cnaps'
        | 'dk_interbank_clearing_code'
        | 'gb_sort_code'
        | 'hk_interbank_clearing_code'
        | 'hu_interbank_clearing_code'
        | 'id_sknbi_code'
        | 'in_ifsc'
        | 'jp_zengin_code'
        | 'my_branch_code'
        | 'mx_bank_identifier'
        | 'nz_national_clearing_code'
        | 'pl_national_clearing_code'
        | 'se_bankgiro_clearing_code'
        | 'swift';

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
    }
  }
}

export interface PaymentOrderUpdateParams {
  accounting?: PaymentOrderUpdateParams.Accounting;

  /**
   * The ID of one of your accounting categories. Note that these will only be
   * accessible if your accounting system has been connected.
   */
  accounting_category_id?: string | null;

  /**
   * The ID of one of your accounting ledger classes. Note that these will only be
   * accessible if your accounting system has been connected.
   */
  accounting_ledger_class_id?: string | null;

  /**
   * Value in specified currency's smallest unit. e.g. $10 would be represented as
   * 1000 (cents). For RTP, the maximum amount allowed by the network is $100,000.
   */
  amount?: number;

  /**
   * The party that will pay the fees for the payment order. Only applies to wire
   * payment orders. Can be one of shared, sender, or receiver, which correspond
   * respectively with the SWIFT 71A values `SHA`, `OUR`, `BEN`.
   */
  charge_bearer?: 'shared' | 'sender' | 'receiver' | null;

  /**
   * Required when receiving_account_id is passed the ID of an external account.
   */
  counterparty_id?: string | null;

  /**
   * Defaults to the currency of the originating account.
   */
  currency?: Shared.Currency | null;

  /**
   * An optional description for internal use.
   */
  description?: string | null;

  /**
   * One of `credit`, `debit`. Describes the direction money is flowing in the
   * transaction. A `credit` moves money from your account to someone else's. A
   * `debit` pulls money from someone else's account to your own. Note that wire,
   * rtp, and check payments will always be `credit`.
   */
  direction?: 'credit' | 'debit';

  /**
   * Date transactions are to be posted to the participants' account. Defaults to the
   * current business day or the next business day if the current day is a bank
   * holiday or weekend. Format: yyyy-mm-dd.
   */
  effective_date?: string;

  /**
   * RFP payments require an expires_at. This value must be past the effective_date.
   */
  expires_at?: string | null;

  /**
   * A payment type to fallback to if the original type is not valid for the
   * receiving account. Currently, this only supports falling back from RTP to ACH
   * (type=rtp and fallback_type=ach)
   */
  fallback_type?: 'ach';

  /**
   * If present, indicates a specific foreign exchange contract number that has been
   * generated by your financial institution.
   */
  foreign_exchange_contract?: string | null;

  /**
   * Indicates the type of FX transfer to initiate, can be either
   * `variable_to_fixed`, `fixed_to_variable`, or `null` if the payment order
   * currency matches the originating account currency.
   */
  foreign_exchange_indicator?: 'fixed_to_variable' | 'variable_to_fixed' | null;

  /**
   * An array of line items that must sum up to the amount of the payment order.
   */
  line_items?: Array<PaymentOrderUpdateParams.LineItem>;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;

  /**
   * A boolean to determine if NSF Protection is enabled for this payment order. Note
   * that this setting must also be turned on in your organization settings page.
   */
  nsf_protected?: boolean;

  /**
   * The ID of one of your organization's internal accounts.
   */
  originating_account_id?: string;

  /**
   * If present, this will replace your default company name on receiver's bank
   * statement. This field can only be used for ACH payments currently. For ACH, only
   * the first 16 characters of this string will be used. Any additional characters
   * will be truncated.
   */
  originating_party_name?: string | null;

  /**
   * Either `normal` or `high`. For ACH and EFT payments, `high` represents a
   * same-day ACH or EFT transfer, respectively. For check payments, `high` can mean
   * an overnight check rather than standard mail.
   */
  priority?: 'high' | 'normal';

  /**
   * If present, Modern Treasury will not process the payment until after this time.
   * If `process_after` is past the cutoff for `effective_date`, `process_after` will
   * take precedence and `effective_date` will automatically update to reflect the
   * earliest possible sending date after `process_after`. Format is ISO8601
   * timestamp.
   */
  process_after?: string | null;

  /**
   * For `wire`, this is usually the purpose which is transmitted via the
   * "InstrForDbtrAgt" field in the ISO20022 file. If you are using Currencycloud,
   * this is the `payment.purpose_code` field. For `eft`, this field is the 3 digit
   * CPA Code that will be attached to the payment.
   */
  purpose?: string | null;

  /**
   * Either `receiving_account` or `receiving_account_id` must be present. When using
   * `receiving_account_id`, you may pass the id of an external account or an
   * internal account.
   */
  receiving_account?: PaymentOrderUpdateParams.ReceivingAccount;

  /**
   * Either `receiving_account` or `receiving_account_id` must be present. When using
   * `receiving_account_id`, you may pass the id of an external account or an
   * internal account.
   */
  receiving_account_id?: string;

  /**
   * For `ach`, this field will be passed through on an addenda record. For `wire`
   * payments the field will be passed through as the "Originator to Beneficiary
   * Information", also known as OBI or Fedwire tag 6000.
   */
  remittance_information?: string | null;

  /**
   * Send an email to the counterparty when the payment order is sent to the bank. If
   * `null`, `send_remittance_advice` on the Counterparty is used.
   */
  send_remittance_advice?: boolean | null;

  /**
   * An optional descriptor which will appear in the receiver's statement. For
   * `check` payments this field will be used as the memo line. For `ach` the maximum
   * length is 10 characters. Note that for ACH payments, the name on your bank
   * account will be included automatically by the bank, so you can use the
   * characters for other useful information. For `eft` the maximum length is 15
   * characters.
   */
  statement_descriptor?: string | null;

  /**
   * To cancel a payment order, use `cancelled`. To redraft a returned payment order,
   * use `approved`. To undo approval on a denied or approved payment order, use
   * `needs_approval`.
   */
  status?:
    | 'approved'
    | 'cancelled'
    | 'completed'
    | 'denied'
    | 'failed'
    | 'needs_approval'
    | 'pending'
    | 'processing'
    | 'returned'
    | 'reversed'
    | 'sent';

  /**
   * An additional layer of classification for the type of payment order you are
   * doing. This field is only used for `ach` payment orders currently. For `ach`
   * payment orders, the `subtype` represents the SEC code. We currently support
   * `CCD`, `PPD`, `IAT`, `CTX`, `WEB`, `CIE`, and `TEL`.
   */
  subtype?: PaymentOrderSubtype | null;

  /**
   * One of `ach`, `bankgirot`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`, `sepa`,
   * `bacs`, `au_becs`, `interac`, `neft`, `nics`, `nz_national_clearing_code`,
   * `sic`, `signet`, `provexchange`, `zengin`.
   */
  type?: PaymentOrderType;

  /**
   * This represents the identifier by which the person is known to the receiver when
   * using the CIE subtype for ACH payments. Only the first 22 characters of this
   * string will be used. Any additional characters will be truncated.
   */
  ultimate_originating_party_identifier?: string | null;

  /**
   * This represents the name of the person that the payment is on behalf of when
   * using the CIE subtype for ACH payments. Only the first 15 characters of this
   * string will be used. Any additional characters will be truncated.
   */
  ultimate_originating_party_name?: string | null;

  /**
   * This represents the name of the merchant that the payment is being sent to when
   * using the CIE subtype for ACH payments. Only the first 22 characters of this
   * string will be used. Any additional characters will be truncated.
   */
  ultimate_receiving_party_identifier?: string | null;

  /**
   * This represents the identifier by which the merchant is known to the person
   * initiating an ACH payment with CIE subtype. Only the first 15 characters of this
   * string will be used. Any additional characters will be truncated.
   */
  ultimate_receiving_party_name?: string | null;
}

export namespace PaymentOrderUpdateParams {
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

  export interface LineItem {
    /**
     * Value in specified currency's smallest unit. e.g. $10 would be represented
     * as 1000.
     */
    amount: number;

    /**
     * The ID of one of your accounting categories. Note that these will only be
     * accessible if your accounting system has been connected.
     */
    accounting_category_id?: string | null;

    /**
     * A free-form description of the line item.
     */
    description?: string | null;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: Record<string, string>;
  }

  /**
   * Either `receiving_account` or `receiving_account_id` must be present. When using
   * `receiving_account_id`, you may pass the id of an external account or an
   * internal account.
   */
  export interface ReceivingAccount {
    account_details?: Array<ReceivingAccount.AccountDetail>;

    /**
     * Can be `checking`, `savings` or `other`.
     */
    account_type?: ExternalAccountsAPI.ExternalAccountType;

    contact_details?: Array<ReceivingAccount.ContactDetail>;

    /**
     * Specifies a ledger account object that will be created with the external
     * account. The resulting ledger account is linked to the external account for
     * auto-ledgering Payment objects. See
     * https://docs.moderntreasury.com/docs/linking-to-other-modern-treasury-objects
     * for more details.
     */
    ledger_account?: ReceivingAccount.LedgerAccount;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: Record<string, string>;

    /**
     * A nickname for the external account. This is only for internal usage and won't
     * affect any payments
     */
    name?: string | null;

    /**
     * Required if receiving wire payments.
     */
    party_address?: ReceivingAccount.PartyAddress;

    party_identifier?: string;

    /**
     * If this value isn't provided, it will be inherited from the counterparty's name.
     */
    party_name?: string;

    /**
     * Either `individual` or `business`.
     */
    party_type?: 'business' | 'individual' | null;

    /**
     * If you've enabled the Modern Treasury + Plaid integration in your Plaid account,
     * you can pass the processor token in this field.
     */
    plaid_processor_token?: string;

    routing_details?: Array<ReceivingAccount.RoutingDetail>;
  }

  export namespace ReceivingAccount {
    export interface AccountDetail {
      account_number: string;

      account_number_type?: 'iban' | 'hk_number' | 'clabe' | 'wallet_address' | 'pan' | 'other';
    }

    export interface ContactDetail {
      contact_identifier?: string;

      contact_identifier_type?: 'email' | 'phone_number' | 'website';
    }

    /**
     * Specifies a ledger account object that will be created with the external
     * account. The resulting ledger account is linked to the external account for
     * auto-ledgering Payment objects. See
     * https://docs.moderntreasury.com/docs/linking-to-other-modern-treasury-objects
     * for more details.
     */
    export interface LedgerAccount {
      /**
       * The currency of the ledger account.
       */
      currency: string;

      /**
       * The id of the ledger that this account belongs to.
       */
      ledger_id: string;

      /**
       * The name of the ledger account.
       */
      name: string;

      /**
       * The normal balance of the ledger account.
       */
      normal_balance: Shared.TransactionDirection;

      /**
       * The currency exponent of the ledger account.
       */
      currency_exponent?: number | null;

      /**
       * The description of the ledger account.
       */
      description?: string | null;

      /**
       * The array of ledger account category ids that this ledger account should be a
       * child of.
       */
      ledger_account_category_ids?: Array<string>;

      /**
       * If the ledger account links to another object in Modern Treasury, the id will be
       * populated here, otherwise null.
       */
      ledgerable_id?: string;

      /**
       * If the ledger account links to another object in Modern Treasury, the type will
       * be populated here, otherwise null. The value is one of internal_account or
       * external_account.
       */
      ledgerable_type?: 'external_account' | 'internal_account' | 'virtual_account';

      /**
       * Additional data represented as key-value pairs. Both the key and value must be
       * strings.
       */
      metadata?: Record<string, string>;
    }

    /**
     * Required if receiving wire payments.
     */
    export interface PartyAddress {
      /**
       * Country code conforms to [ISO 3166-1 alpha-2]
       */
      country?: string | null;

      line1?: string | null;

      line2?: string | null;

      /**
       * Locality or City.
       */
      locality?: string | null;

      /**
       * The postal code of the address.
       */
      postal_code?: string | null;

      /**
       * Region or State.
       */
      region?: string | null;
    }

    export interface RoutingDetail {
      routing_number: string;

      routing_number_type:
        | 'aba'
        | 'au_bsb'
        | 'br_codigo'
        | 'ca_cpa'
        | 'chips'
        | 'cnaps'
        | 'dk_interbank_clearing_code'
        | 'gb_sort_code'
        | 'hk_interbank_clearing_code'
        | 'hu_interbank_clearing_code'
        | 'id_sknbi_code'
        | 'in_ifsc'
        | 'jp_zengin_code'
        | 'my_branch_code'
        | 'mx_bank_identifier'
        | 'nz_national_clearing_code'
        | 'pl_national_clearing_code'
        | 'se_bankgiro_clearing_code'
        | 'swift';

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
    }
  }
}

export interface PaymentOrderListParams extends PageParams {
  counterparty_id?: string;

  /**
   * An inclusive upper bound for searching created_at
   */
  created_at_end?: string;

  /**
   * An inclusive lower bound for searching created_at
   */
  created_at_start?: string;

  direction?: Shared.TransactionDirection;

  /**
   * An inclusive upper bound for searching effective_date
   */
  effective_date_end?: string;

  /**
   * An inclusive lower bound for searching effective_date
   */
  effective_date_start?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;

  originating_account_id?: string;

  /**
   * Either `normal` or `high`. For ACH and EFT payments, `high` represents a
   * same-day ACH or EFT transfer, respectively. For check payments, `high` can mean
   * an overnight check rather than standard mail.
   */
  priority?: 'high' | 'normal';

  /**
   * An inclusive upper bound for searching process_after
   */
  process_after_end?: string;

  /**
   * An inclusive lower bound for searching process_after
   */
  process_after_start?: string;

  /**
   * Query for records with the provided reference number
   */
  reference_number?: string;

  status?:
    | 'approved'
    | 'cancelled'
    | 'completed'
    | 'denied'
    | 'failed'
    | 'needs_approval'
    | 'pending'
    | 'processing'
    | 'returned'
    | 'reversed'
    | 'sent';

  /**
   * The ID of a transaction that the payment order has been reconciled to.
   */
  transaction_id?: string;

  type?:
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
    | 'se_bankgirot'
    | 'sen'
    | 'sepa'
    | 'sg_giro'
    | 'sic'
    | 'signet'
    | 'sknbi'
    | 'wire'
    | 'zengin';
}

export interface PaymentOrderCreateAsyncParams {
  /**
   * Value in specified currency's smallest unit. e.g. $10 would be represented as
   * 1000 (cents). For RTP, the maximum amount allowed by the network is $100,000.
   */
  amount: number;

  /**
   * One of `credit`, `debit`. Describes the direction money is flowing in the
   * transaction. A `credit` moves money from your account to someone else's. A
   * `debit` pulls money from someone else's account to your own. Note that wire,
   * rtp, and check payments will always be `credit`.
   */
  direction: 'credit' | 'debit';

  /**
   * The ID of one of your organization's internal accounts.
   */
  originating_account_id: string;

  /**
   * One of `ach`, `bankgirot`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`, `sepa`,
   * `bacs`, `au_becs`, `interac`, `neft`, `nics`, `nz_national_clearing_code`,
   * `sic`, `signet`, `provexchange`, `zengin`.
   */
  type: PaymentOrderType;

  accounting?: PaymentOrderCreateAsyncParams.Accounting;

  /**
   * The ID of one of your accounting categories. Note that these will only be
   * accessible if your accounting system has been connected.
   */
  accounting_category_id?: string | null;

  /**
   * The ID of one of your accounting ledger classes. Note that these will only be
   * accessible if your accounting system has been connected.
   */
  accounting_ledger_class_id?: string | null;

  /**
   * The party that will pay the fees for the payment order. Only applies to wire
   * payment orders. Can be one of shared, sender, or receiver, which correspond
   * respectively with the SWIFT 71A values `SHA`, `OUR`, `BEN`.
   */
  charge_bearer?: 'shared' | 'sender' | 'receiver' | null;

  /**
   * Defaults to the currency of the originating account.
   */
  currency?: Shared.Currency | null;

  /**
   * An optional description for internal use.
   */
  description?: string | null;

  /**
   * Date transactions are to be posted to the participants' account. Defaults to the
   * current business day or the next business day if the current day is a bank
   * holiday or weekend. Format: yyyy-mm-dd.
   */
  effective_date?: string;

  /**
   * RFP payments require an expires_at. This value must be past the effective_date.
   */
  expires_at?: string | null;

  /**
   * A payment type to fallback to if the original type is not valid for the
   * receiving account. Currently, this only supports falling back from RTP to ACH
   * (type=rtp and fallback_type=ach)
   */
  fallback_type?: 'ach';

  /**
   * If present, indicates a specific foreign exchange contract number that has been
   * generated by your financial institution.
   */
  foreign_exchange_contract?: string | null;

  /**
   * Indicates the type of FX transfer to initiate, can be either
   * `variable_to_fixed`, `fixed_to_variable`, or `null` if the payment order
   * currency matches the originating account currency.
   */
  foreign_exchange_indicator?: 'fixed_to_variable' | 'variable_to_fixed' | null;

  /**
   * Specifies a ledger transaction object that will be created with the payment
   * order. If the ledger transaction cannot be created, then the payment order
   * creation will fail. The resulting ledger transaction will mirror the status of
   * the payment order.
   */
  ledger_transaction?: PaymentOrderCreateAsyncParams.LedgerTransaction;

  /**
   * Either ledger_transaction or ledger_transaction_id can be provided. Only a
   * pending ledger transaction can be attached upon payment order creation. Once the
   * payment order is created, the status of the ledger transaction tracks the
   * payment order automatically.
   */
  ledger_transaction_id?: string;

  /**
   * An array of line items that must sum up to the amount of the payment order.
   */
  line_items?: Array<PaymentOrderCreateAsyncParams.LineItem>;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;

  /**
   * A boolean to determine if NSF Protection is enabled for this payment order. Note
   * that this setting must also be turned on in your organization settings page.
   */
  nsf_protected?: boolean;

  /**
   * If present, this will replace your default company name on receiver's bank
   * statement. This field can only be used for ACH payments currently. For ACH, only
   * the first 16 characters of this string will be used. Any additional characters
   * will be truncated.
   */
  originating_party_name?: string | null;

  /**
   * Either `normal` or `high`. For ACH and EFT payments, `high` represents a
   * same-day ACH or EFT transfer, respectively. For check payments, `high` can mean
   * an overnight check rather than standard mail.
   */
  priority?: 'high' | 'normal';

  /**
   * If present, Modern Treasury will not process the payment until after this time.
   * If `process_after` is past the cutoff for `effective_date`, `process_after` will
   * take precedence and `effective_date` will automatically update to reflect the
   * earliest possible sending date after `process_after`. Format is ISO8601
   * timestamp.
   */
  process_after?: string | null;

  /**
   * For `wire`, this is usually the purpose which is transmitted via the
   * "InstrForDbtrAgt" field in the ISO20022 file. If you are using Currencycloud,
   * this is the `payment.purpose_code` field. For `eft`, this field is the 3 digit
   * CPA Code that will be attached to the payment.
   */
  purpose?: string | null;

  /**
   * Either `receiving_account` or `receiving_account_id` must be present. When using
   * `receiving_account_id`, you may pass the id of an external account or an
   * internal account.
   */
  receiving_account?: PaymentOrderCreateAsyncParams.ReceivingAccount;

  /**
   * Either `receiving_account` or `receiving_account_id` must be present. When using
   * `receiving_account_id`, you may pass the id of an external account or an
   * internal account.
   */
  receiving_account_id?: string;

  /**
   * For `ach`, this field will be passed through on an addenda record. For `wire`
   * payments the field will be passed through as the "Originator to Beneficiary
   * Information", also known as OBI or Fedwire tag 6000.
   */
  remittance_information?: string | null;

  /**
   * Send an email to the counterparty when the payment order is sent to the bank. If
   * `null`, `send_remittance_advice` on the Counterparty is used.
   */
  send_remittance_advice?: boolean | null;

  /**
   * An optional descriptor which will appear in the receiver's statement. For
   * `check` payments this field will be used as the memo line. For `ach` the maximum
   * length is 10 characters. Note that for ACH payments, the name on your bank
   * account will be included automatically by the bank, so you can use the
   * characters for other useful information. For `eft` the maximum length is 15
   * characters.
   */
  statement_descriptor?: string | null;

  /**
   * An additional layer of classification for the type of payment order you are
   * doing. This field is only used for `ach` payment orders currently. For `ach`
   * payment orders, the `subtype` represents the SEC code. We currently support
   * `CCD`, `PPD`, `IAT`, `CTX`, `WEB`, `CIE`, and `TEL`.
   */
  subtype?: PaymentOrderSubtype | null;

  /**
   * A flag that determines whether a payment order should go through transaction
   * monitoring.
   */
  transaction_monitoring_enabled?: boolean;

  /**
   * Identifier of the ultimate originator of the payment order.
   */
  ultimate_originating_party_identifier?: string | null;

  /**
   * Name of the ultimate originator of the payment order.
   */
  ultimate_originating_party_name?: string | null;

  /**
   * Identifier of the ultimate funds recipient.
   */
  ultimate_receiving_party_identifier?: string | null;

  /**
   * Name of the ultimate funds recipient.
   */
  ultimate_receiving_party_name?: string | null;
}

export namespace PaymentOrderCreateAsyncParams {
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

  /**
   * Specifies a ledger transaction object that will be created with the payment
   * order. If the ledger transaction cannot be created, then the payment order
   * creation will fail. The resulting ledger transaction will mirror the status of
   * the payment order.
   */
  export interface LedgerTransaction {
    /**
     * An array of ledger entry objects.
     */
    ledger_entries: Array<LedgerTransaction.LedgerEntry>;

    /**
     * An optional description for internal use.
     */
    description?: string | null;

    /**
     * The timestamp (ISO8601 format) at which the ledger transaction happened for
     * reporting purposes.
     */
    effective_at?: string;

    /**
     * The date (YYYY-MM-DD) on which the ledger transaction happened for reporting
     * purposes.
     */
    effective_date?: string;

    /**
     * A unique string to represent the ledger transaction. Only one pending or posted
     * ledger transaction may have this ID in the ledger.
     */
    external_id?: string;

    /**
     * If the ledger transaction can be reconciled to another object in Modern
     * Treasury, the id will be populated here, otherwise null.
     */
    ledgerable_id?: string;

    /**
     * If the ledger transaction can be reconciled to another object in Modern
     * Treasury, the type will be populated here, otherwise null. This can be one of
     * payment_order, incoming_payment_detail, expected_payment, return, or reversal.
     */
    ledgerable_type?:
      | 'counterparty'
      | 'expected_payment'
      | 'incoming_payment_detail'
      | 'internal_account'
      | 'line_item'
      | 'paper_item'
      | 'payment_order'
      | 'payment_order_attempt'
      | 'return'
      | 'reversal';

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: Record<string, string>;

    /**
     * To post a ledger transaction at creation, use `posted`.
     */
    status?: 'archived' | 'pending' | 'posted';
  }

  export namespace LedgerTransaction {
    export interface LedgerEntry {
      /**
       * Value in specified currency's smallest unit. e.g. $10 would be represented
       * as 1000. Can be any integer up to 36 digits.
       */
      amount: number;

      /**
       * One of `credit`, `debit`. Describes the direction money is flowing in the
       * transaction. A `credit` moves money from your account to someone else's. A
       * `debit` pulls money from someone else's account to your own. Note that wire,
       * rtp, and check payments will always be `credit`.
       */
      direction: Shared.TransactionDirection;

      /**
       * The ledger account that this ledger entry is associated with.
       */
      ledger_account_id: string;

      /**
       * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the
       * account’s available balance. If any of these conditions would be false after the
       * transaction is created, the entire call will fail with error code 422.
       */
      available_balance_amount?: Record<string, number> | null;

      /**
       * Lock version of the ledger account. This can be passed when creating a ledger
       * transaction to only succeed if no ledger transactions have posted since the
       * given version. See our post about Designing the Ledgers API with Optimistic
       * Locking for more details.
       */
      lock_version?: number | null;

      /**
       * Additional data represented as key-value pairs. Both the key and value must be
       * strings.
       */
      metadata?: Record<string, string>;

      /**
       * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the
       * account’s pending balance. If any of these conditions would be false after the
       * transaction is created, the entire call will fail with error code 422.
       */
      pending_balance_amount?: Record<string, number> | null;

      /**
       * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the
       * account’s posted balance. If any of these conditions would be false after the
       * transaction is created, the entire call will fail with error code 422.
       */
      posted_balance_amount?: Record<string, number> | null;

      /**
       * If true, response will include the balance of the associated ledger account for
       * the entry.
       */
      show_resulting_ledger_account_balances?: boolean | null;
    }
  }

  export interface LineItem {
    /**
     * Value in specified currency's smallest unit. e.g. $10 would be represented
     * as 1000.
     */
    amount: number;

    /**
     * The ID of one of your accounting categories. Note that these will only be
     * accessible if your accounting system has been connected.
     */
    accounting_category_id?: string | null;

    /**
     * A free-form description of the line item.
     */
    description?: string | null;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: Record<string, string>;
  }

  /**
   * Either `receiving_account` or `receiving_account_id` must be present. When using
   * `receiving_account_id`, you may pass the id of an external account or an
   * internal account.
   */
  export interface ReceivingAccount {
    account_details?: Array<ReceivingAccount.AccountDetail>;

    /**
     * Can be `checking`, `savings` or `other`.
     */
    account_type?: ExternalAccountsAPI.ExternalAccountType;

    contact_details?: Array<ReceivingAccount.ContactDetail>;

    /**
     * Specifies a ledger account object that will be created with the external
     * account. The resulting ledger account is linked to the external account for
     * auto-ledgering Payment objects. See
     * https://docs.moderntreasury.com/docs/linking-to-other-modern-treasury-objects
     * for more details.
     */
    ledger_account?: ReceivingAccount.LedgerAccount;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: Record<string, string>;

    /**
     * A nickname for the external account. This is only for internal usage and won't
     * affect any payments
     */
    name?: string | null;

    /**
     * Required if receiving wire payments.
     */
    party_address?: ReceivingAccount.PartyAddress;

    party_identifier?: string;

    /**
     * If this value isn't provided, it will be inherited from the counterparty's name.
     */
    party_name?: string;

    /**
     * Either `individual` or `business`.
     */
    party_type?: 'business' | 'individual' | null;

    /**
     * If you've enabled the Modern Treasury + Plaid integration in your Plaid account,
     * you can pass the processor token in this field.
     */
    plaid_processor_token?: string;

    routing_details?: Array<ReceivingAccount.RoutingDetail>;
  }

  export namespace ReceivingAccount {
    export interface AccountDetail {
      account_number: string;

      account_number_type?: 'iban' | 'hk_number' | 'clabe' | 'wallet_address' | 'pan' | 'other';
    }

    export interface ContactDetail {
      contact_identifier?: string;

      contact_identifier_type?: 'email' | 'phone_number' | 'website';
    }

    /**
     * Specifies a ledger account object that will be created with the external
     * account. The resulting ledger account is linked to the external account for
     * auto-ledgering Payment objects. See
     * https://docs.moderntreasury.com/docs/linking-to-other-modern-treasury-objects
     * for more details.
     */
    export interface LedgerAccount {
      /**
       * The currency of the ledger account.
       */
      currency: string;

      /**
       * The id of the ledger that this account belongs to.
       */
      ledger_id: string;

      /**
       * The name of the ledger account.
       */
      name: string;

      /**
       * The normal balance of the ledger account.
       */
      normal_balance: Shared.TransactionDirection;

      /**
       * The currency exponent of the ledger account.
       */
      currency_exponent?: number | null;

      /**
       * The description of the ledger account.
       */
      description?: string | null;

      /**
       * The array of ledger account category ids that this ledger account should be a
       * child of.
       */
      ledger_account_category_ids?: Array<string>;

      /**
       * If the ledger account links to another object in Modern Treasury, the id will be
       * populated here, otherwise null.
       */
      ledgerable_id?: string;

      /**
       * If the ledger account links to another object in Modern Treasury, the type will
       * be populated here, otherwise null. The value is one of internal_account or
       * external_account.
       */
      ledgerable_type?: 'external_account' | 'internal_account' | 'virtual_account';

      /**
       * Additional data represented as key-value pairs. Both the key and value must be
       * strings.
       */
      metadata?: Record<string, string>;
    }

    /**
     * Required if receiving wire payments.
     */
    export interface PartyAddress {
      /**
       * Country code conforms to [ISO 3166-1 alpha-2]
       */
      country?: string | null;

      line1?: string | null;

      line2?: string | null;

      /**
       * Locality or City.
       */
      locality?: string | null;

      /**
       * The postal code of the address.
       */
      postal_code?: string | null;

      /**
       * Region or State.
       */
      region?: string | null;
    }

    export interface RoutingDetail {
      routing_number: string;

      routing_number_type:
        | 'aba'
        | 'au_bsb'
        | 'br_codigo'
        | 'ca_cpa'
        | 'chips'
        | 'cnaps'
        | 'dk_interbank_clearing_code'
        | 'gb_sort_code'
        | 'hk_interbank_clearing_code'
        | 'hu_interbank_clearing_code'
        | 'id_sknbi_code'
        | 'in_ifsc'
        | 'jp_zengin_code'
        | 'my_branch_code'
        | 'mx_bank_identifier'
        | 'nz_national_clearing_code'
        | 'pl_national_clearing_code'
        | 'se_bankgiro_clearing_code'
        | 'swift';

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
    }
  }
}

export namespace PaymentOrders {
  export import PaymentOrder = PaymentOrdersAPI.PaymentOrder;
  export import PaymentOrderSubtype = PaymentOrdersAPI.PaymentOrderSubtype;
  export import PaymentOrderType = PaymentOrdersAPI.PaymentOrderType;
  export import PaymentOrdersPage = PaymentOrdersAPI.PaymentOrdersPage;
  export import PaymentOrderCreateParams = PaymentOrdersAPI.PaymentOrderCreateParams;
  export import PaymentOrderUpdateParams = PaymentOrdersAPI.PaymentOrderUpdateParams;
  export import PaymentOrderListParams = PaymentOrdersAPI.PaymentOrderListParams;
  export import PaymentOrderCreateAsyncParams = PaymentOrdersAPI.PaymentOrderCreateAsyncParams;
  export import Reversals = ReversalsAPI.Reversals;
  export import Reversal = ReversalsAPI.Reversal;
  export import ReversalsPage = ReversalsAPI.ReversalsPage;
  export import ReversalCreateParams = ReversalsAPI.ReversalCreateParams;
  export import ReversalListParams = ReversalsAPI.ReversalListParams;
}
