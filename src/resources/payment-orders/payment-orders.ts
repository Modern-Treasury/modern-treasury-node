// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as PaymentOrdersAPI from './payment-orders';
import * as ExternalAccountsAPI from '../external-accounts';
import * as ReturnsAPI from '../returns';
import * as Shared from '../shared';
import * as VirtualAccountsAPI from '../virtual-accounts';
import * as InternalAccountsAPI from '../internal-accounts/internal-accounts';
import * as ReversalsAPI from './reversals';
import { Reversal, ReversalCreateParams, ReversalListParams, Reversals, ReversalsPage } from './reversals';
import { Page, type PageParams } from '../../pagination';

export class PaymentOrders extends APIResource {
  reversals: ReversalsAPI.Reversals = new ReversalsAPI.Reversals(this._client);

  /**
   * Create a new Payment Order
   *
   * @example
   * ```ts
   * const paymentOrder = await client.paymentOrders.create({
   *   amount: 0,
   *   direction: 'credit',
   *   originating_account_id:
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   type: 'ach',
   * });
   * ```
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
      Core.maybeMultipartFormRequestOptions({
        body,
        ...options,
        headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
      }),
    );
  }

  /**
   * Get details on a single payment order
   *
   * @example
   * ```ts
   * const paymentOrder = await client.paymentOrders.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<PaymentOrder> {
    return this._client.get(`/api/payment_orders/${id}`, options);
  }

  /**
   * Update a payment order
   *
   * @example
   * ```ts
   * const paymentOrder = await client.paymentOrders.update(
   *   'id',
   * );
   * ```
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
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const paymentOrder of client.paymentOrders.list()) {
   *   // ...
   * }
   * ```
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
   *
   * @example
   * ```ts
   * const asyncResponse =
   *   await client.paymentOrders.createAsync({
   *     amount: 0,
   *     direction: 'credit',
   *     originating_account_id:
   *       '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     type: 'ach',
   *   });
   * ```
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

export interface ContactDetailCreateRequest {
  contact_identifier?: string;

  contact_identifier_type?: 'email' | 'phone_number' | 'website';
}

export interface PaymentOrder {
  id: string;

  /**
   * @deprecated
   */
  accounting: PaymentOrder.Accounting;

  /**
   * @deprecated The ID of one of your accounting categories. Note that these will
   * only be accessible if your accounting system has been connected.
   */
  accounting_category_id: string | null;

  /**
   * @deprecated The ID of one of your accounting ledger classes. Note that these
   * will only be accessible if your accounting system has been connected.
   */
  accounting_ledger_class_id: string | null;

  /**
   * Value in specified currency's smallest unit. e.g. $10 would be represented as
   * 1000 (cents). For RTP, the maximum amount allowed by the network is $100,000.
   */
  amount: number;

  /**
   * The party that will pay the fees for the payment order. See
   * https://docs.moderntreasury.com/payments/docs/charge-bearer to understand the
   * differences between the options.
   */
  charge_bearer: 'shared' | 'sender' | 'receiver' | null;

  /**
   * If the payment order is tied to a specific Counterparty, their id will appear,
   * otherwise `null`.
   */
  counterparty_id: string | null;

  created_at: string;

  /**
   * Defaults to the currency of the originating account.
   */
  currency: Shared.Currency;

  /**
   * If the payment order's status is `returned`, this will include the return
   * object's data.
   */
  current_return: ReturnsAPI.ReturnObject | null;

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
   * An optional user-defined 180 character unique identifier.
   */
  external_id: string | null;

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
  foreign_exchange_rate: Shared.ForeignExchangeRate | null;

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
  metadata: { [key: string]: string };

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
   * "InstrForDbtrAgt" field in the ISO20022 file. For `eft`, this field is the 3
   * digit CPA Code that will be attached to the payment.
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
    | 'sent'
    | 'stopped';

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
   * One of `ach`, `se_bankgirot`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`,
   * `sepa`, `bacs`, `au_becs`, `interac`, `neft`, `nics`,
   * `nz_national_clearing_code`, `sic`, `signet`, `provexchange`, `zengin`.
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
   * Additional vendor specific fields for this payment. Data must be represented as
   * key-value pairs.
   */
  vendor_attributes: unknown | null;

  /**
   * This field will be populated if a vendor failure occurs. Logic shouldn't be
   * built on its value as it is free-form.
   */
  vendor_failure_reason: string | null;
}

export namespace PaymentOrder {
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
      | 'bny_mellon_transaction_reference_number'
      | 'bofa_end_to_end_id'
      | 'bofa_transaction_id'
      | 'brale_transfer_id'
      | 'bridge_destination_transaction_hash'
      | 'bridge_source_transaction_hash'
      | 'bridge_transfer_id'
      | 'check_number'
      | 'citibank_reference_number'
      | 'citibank_worldlink_clearing_system_reference_number'
      | 'column_fx_quote_id'
      | 'column_reversal_pair_transfer_id'
      | 'column_transfer_id'
      | 'cross_river_core_transaction_id'
      | 'cross_river_fed_batch_id'
      | 'cross_river_payment_id'
      | 'cross_river_service_message'
      | 'cross_river_transaction_id'
      | 'currencycloud_conversion_id'
      | 'currencycloud_payment_id'
      | 'dc_bank_transaction_id'
      | 'eft_trace_number'
      | 'evolve_core_batch'
      | 'evolve_core_file_key'
      | 'evolve_core_seq'
      | 'evolve_transaction_id'
      | 'fake_vendor_payment_id'
      | 'fedwire_imad'
      | 'fedwire_omad'
      | 'first_republic_internal_id'
      | 'goldman_sachs_collection_request_id'
      | 'goldman_sachs_end_to_end_id'
      | 'goldman_sachs_payment_request_id'
      | 'goldman_sachs_request_id'
      | 'goldman_sachs_unique_payment_id'
      | 'hifi_offramp_id'
      | 'hifi_transfer_id'
      | 'interac_message_id'
      | 'jpmc_ccn'
      | 'jpmc_clearing_system_reference'
      | 'jpmc_customer_reference_id'
      | 'jpmc_end_to_end_id'
      | 'jpmc_firm_root_id'
      | 'jpmc_fx_trn_id'
      | 'jpmc_p3_id'
      | 'jpmc_payment_batch_id'
      | 'jpmc_payment_information_id'
      | 'jpmc_payment_returned_datetime'
      | 'jpmc_transaction_reference_number'
      | 'lob_check_id'
      | 'mt_fof_transfer_id'
      | 'other'
      | 'partial_swift_mir'
      | 'pnc_clearing_reference'
      | 'pnc_instruction_id'
      | 'pnc_multipayment_id'
      | 'pnc_payment_trace_id'
      | 'pnc_request_for_payment_id'
      | 'pnc_transaction_reference_number'
      | 'rbc_wire_reference_id'
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
      | 'usbank_payment_application_reference_id'
      | 'usbank_payment_id'
      | 'usbank_pending_rtp_payment_id'
      | 'usbank_posted_rtp_payment_id'
      | 'wells_fargo_end_to_end_id'
      | 'wells_fargo_payment_id'
      | 'wells_fargo_trace_number'
      | 'wells_fargo_uetr'
      | 'western_alliance_payment_id'
      | 'western_alliance_transaction_id'
      | 'western_alliance_wire_confirmation_number';

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
  | 'au_becs'
  | 'bacs'
  | 'chats'
  | 'dk_nets'
  | 'eft'
  | 'hu_ics'
  | 'masav'
  | 'mx_ccen'
  | 'neft'
  | 'nics'
  | 'nz_becs'
  | 'pl_elixir'
  | 'ro_sent'
  | 'se_bankgirot'
  | 'sepa'
  | 'sg_giro'
  | 'sic'
  | 'sknbi'
  | 'zengin'
  | null;

/**
 * One of `ach`, `se_bankgirot`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`,
 * `sepa`, `bacs`, `au_becs`, `interac`, `neft`, `nics`,
 * `nz_national_clearing_code`, `sic`, `signet`, `provexchange`, `zengin`.
 */
export type PaymentOrderType =
  | 'ach'
  | 'au_becs'
  | 'bacs'
  | 'base'
  | 'book'
  | 'card'
  | 'chats'
  | 'check'
  | 'cross_border'
  | 'dk_nets'
  | 'eft'
  | 'ethereum'
  | 'gb_fps'
  | 'hu_ics'
  | 'interac'
  | 'masav'
  | 'mx_ccen'
  | 'neft'
  | 'nics'
  | 'nz_becs'
  | 'pl_elixir'
  | 'polygon'
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
  | 'solana'
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
   * One of `ach`, `se_bankgirot`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`,
   * `sepa`, `bacs`, `au_becs`, `interac`, `neft`, `nics`,
   * `nz_national_clearing_code`, `sic`, `signet`, `provexchange`, `zengin`.
   */
  type: PaymentOrderType;

  /**
   * @deprecated
   */
  accounting?: PaymentOrderCreateParams.Accounting;

  /**
   * @deprecated The ID of one of your accounting categories. Note that these will
   * only be accessible if your accounting system has been connected.
   */
  accounting_category_id?: string | null;

  /**
   * @deprecated The ID of one of your accounting ledger classes. Note that these
   * will only be accessible if your accounting system has been connected.
   */
  accounting_ledger_class_id?: string | null;

  /**
   * The party that will pay the fees for the payment order. See
   * https://docs.moderntreasury.com/payments/docs/charge-bearer to understand the
   * differences between the options.
   */
  charge_bearer?: 'shared' | 'sender' | 'receiver' | null;

  /**
   * Defaults to the currency of the originating account.
   */
  currency?: Shared.Currency;

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
  ledger_transaction?: Shared.LedgerTransactionCreateRequest;

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
  metadata?: { [key: string]: string };

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
   * "InstrForDbtrAgt" field in the ISO20022 file. For `eft`, this field is the 3
   * digit CPA Code that will be attached to the payment.
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

  export interface Document {
    /**
     * The unique identifier for the associated object.
     */
    documentable_id: string;

    documentable_type:
      | 'counterparties'
      | 'expected_payments'
      | 'external_accounts'
      | 'identifications'
      | 'incoming_payment_details'
      | 'internal_accounts'
      | 'organizations'
      | 'payment_orders'
      | 'transactions'
      | 'connections';

    file: Core.Uploadable;

    /**
     * A category given to the document, can be `null`.
     */
    document_type?: string;
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
    metadata?: { [key: string]: string };
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

    contact_details?: Array<PaymentOrdersAPI.ContactDetailCreateRequest>;

    /**
     * An optional user-defined 180 character unique identifier.
     */
    external_id?: string | null;

    /**
     * Specifies a ledger account object that will be created with the external
     * account. The resulting ledger account is linked to the external account for
     * auto-ledgering Payment objects. See
     * https://docs.moderntreasury.com/docs/linking-to-other-modern-treasury-objects
     * for more details.
     */
    ledger_account?: Shared.LedgerAccountCreateRequest;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: { [key: string]: string };

    /**
     * A nickname for the external account. This is only for internal usage and won't
     * affect any payments
     */
    name?: string | null;

    /**
     * Required if receiving wire payments.
     */
    party_address?: Shared.AddressRequest;

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

      account_number_type?:
        | 'au_number'
        | 'base_address'
        | 'clabe'
        | 'ethereum_address'
        | 'hk_number'
        | 'iban'
        | 'id_number'
        | 'nz_number'
        | 'other'
        | 'pan'
        | 'polygon_address'
        | 'sg_number'
        | 'solana_address'
        | 'wallet_address';
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
        | 'il_bank_code'
        | 'in_ifsc'
        | 'jp_zengin_code'
        | 'my_branch_code'
        | 'mx_bank_identifier'
        | 'nz_national_clearing_code'
        | 'pl_national_clearing_code'
        | 'se_bankgiro_clearing_code'
        | 'sg_interbank_clearing_code'
        | 'swift'
        | 'za_national_clearing_code';

      payment_type?:
        | 'ach'
        | 'au_becs'
        | 'bacs'
        | 'base'
        | 'book'
        | 'card'
        | 'chats'
        | 'check'
        | 'cross_border'
        | 'dk_nets'
        | 'eft'
        | 'ethereum'
        | 'gb_fps'
        | 'hu_ics'
        | 'interac'
        | 'masav'
        | 'mx_ccen'
        | 'neft'
        | 'nics'
        | 'nz_becs'
        | 'pl_elixir'
        | 'polygon'
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
        | 'solana'
        | 'wire'
        | 'zengin';
    }
  }
}

export interface PaymentOrderUpdateParams {
  /**
   * @deprecated
   */
  accounting?: PaymentOrderUpdateParams.Accounting;

  /**
   * @deprecated The ID of one of your accounting categories. Note that these will
   * only be accessible if your accounting system has been connected.
   */
  accounting_category_id?: string | null;

  /**
   * @deprecated The ID of one of your accounting ledger classes. Note that these
   * will only be accessible if your accounting system has been connected.
   */
  accounting_ledger_class_id?: string | null;

  /**
   * Value in specified currency's smallest unit. e.g. $10 would be represented as
   * 1000 (cents). For RTP, the maximum amount allowed by the network is $100,000.
   */
  amount?: number;

  /**
   * The party that will pay the fees for the payment order. See
   * https://docs.moderntreasury.com/payments/docs/charge-bearer to understand the
   * differences between the options.
   */
  charge_bearer?: 'shared' | 'sender' | 'receiver' | null;

  /**
   * Required when receiving_account_id is passed the ID of an external account.
   */
  counterparty_id?: string | null;

  /**
   * Defaults to the currency of the originating account.
   */
  currency?: Shared.Currency;

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
  metadata?: { [key: string]: string };

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
   * "InstrForDbtrAgt" field in the ISO20022 file. For `eft`, this field is the 3
   * digit CPA Code that will be attached to the payment.
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
    | 'sent'
    | 'stopped';

  /**
   * An additional layer of classification for the type of payment order you are
   * doing. This field is only used for `ach` payment orders currently. For `ach`
   * payment orders, the `subtype` represents the SEC code. We currently support
   * `CCD`, `PPD`, `IAT`, `CTX`, `WEB`, `CIE`, and `TEL`.
   */
  subtype?: PaymentOrderSubtype | null;

  /**
   * One of `ach`, `se_bankgirot`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`,
   * `sepa`, `bacs`, `au_becs`, `interac`, `neft`, `nics`,
   * `nz_national_clearing_code`, `sic`, `signet`, `provexchange`, `zengin`.
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
    metadata?: { [key: string]: string };
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

    contact_details?: Array<PaymentOrdersAPI.ContactDetailCreateRequest>;

    /**
     * An optional user-defined 180 character unique identifier.
     */
    external_id?: string | null;

    /**
     * Specifies a ledger account object that will be created with the external
     * account. The resulting ledger account is linked to the external account for
     * auto-ledgering Payment objects. See
     * https://docs.moderntreasury.com/docs/linking-to-other-modern-treasury-objects
     * for more details.
     */
    ledger_account?: Shared.LedgerAccountCreateRequest;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: { [key: string]: string };

    /**
     * A nickname for the external account. This is only for internal usage and won't
     * affect any payments
     */
    name?: string | null;

    /**
     * Required if receiving wire payments.
     */
    party_address?: Shared.AddressRequest;

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

      account_number_type?:
        | 'au_number'
        | 'base_address'
        | 'clabe'
        | 'ethereum_address'
        | 'hk_number'
        | 'iban'
        | 'id_number'
        | 'nz_number'
        | 'other'
        | 'pan'
        | 'polygon_address'
        | 'sg_number'
        | 'solana_address'
        | 'wallet_address';
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
        | 'il_bank_code'
        | 'in_ifsc'
        | 'jp_zengin_code'
        | 'my_branch_code'
        | 'mx_bank_identifier'
        | 'nz_national_clearing_code'
        | 'pl_national_clearing_code'
        | 'se_bankgiro_clearing_code'
        | 'sg_interbank_clearing_code'
        | 'swift'
        | 'za_national_clearing_code';

      payment_type?:
        | 'ach'
        | 'au_becs'
        | 'bacs'
        | 'base'
        | 'book'
        | 'card'
        | 'chats'
        | 'check'
        | 'cross_border'
        | 'dk_nets'
        | 'eft'
        | 'ethereum'
        | 'gb_fps'
        | 'hu_ics'
        | 'interac'
        | 'masav'
        | 'mx_ccen'
        | 'neft'
        | 'nics'
        | 'nz_becs'
        | 'pl_elixir'
        | 'polygon'
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
        | 'solana'
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

  external_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: { [key: string]: string };

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
    | 'sent'
    | 'stopped';

  /**
   * The ID of a transaction that the payment order has been reconciled to.
   */
  transaction_id?: string;

  type?:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'base'
    | 'book'
    | 'card'
    | 'chats'
    | 'check'
    | 'cross_border'
    | 'dk_nets'
    | 'eft'
    | 'ethereum'
    | 'gb_fps'
    | 'hu_ics'
    | 'interac'
    | 'masav'
    | 'mx_ccen'
    | 'neft'
    | 'nics'
    | 'nz_becs'
    | 'pl_elixir'
    | 'polygon'
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
    | 'solana'
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
   * One of `ach`, `se_bankgirot`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`,
   * `sepa`, `bacs`, `au_becs`, `interac`, `neft`, `nics`,
   * `nz_national_clearing_code`, `sic`, `signet`, `provexchange`, `zengin`.
   */
  type: PaymentOrderType;

  /**
   * @deprecated
   */
  accounting?: PaymentOrderCreateAsyncParams.Accounting;

  /**
   * @deprecated The ID of one of your accounting categories. Note that these will
   * only be accessible if your accounting system has been connected.
   */
  accounting_category_id?: string | null;

  /**
   * @deprecated The ID of one of your accounting ledger classes. Note that these
   * will only be accessible if your accounting system has been connected.
   */
  accounting_ledger_class_id?: string | null;

  /**
   * The party that will pay the fees for the payment order. See
   * https://docs.moderntreasury.com/payments/docs/charge-bearer to understand the
   * differences between the options.
   */
  charge_bearer?: 'shared' | 'sender' | 'receiver' | null;

  /**
   * Defaults to the currency of the originating account.
   */
  currency?: Shared.Currency;

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
  ledger_transaction?: Shared.LedgerTransactionCreateRequest;

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
  metadata?: { [key: string]: string };

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
   * "InstrForDbtrAgt" field in the ISO20022 file. For `eft`, this field is the 3
   * digit CPA Code that will be attached to the payment.
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
    metadata?: { [key: string]: string };
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

    contact_details?: Array<PaymentOrdersAPI.ContactDetailCreateRequest>;

    /**
     * An optional user-defined 180 character unique identifier.
     */
    external_id?: string | null;

    /**
     * Specifies a ledger account object that will be created with the external
     * account. The resulting ledger account is linked to the external account for
     * auto-ledgering Payment objects. See
     * https://docs.moderntreasury.com/docs/linking-to-other-modern-treasury-objects
     * for more details.
     */
    ledger_account?: Shared.LedgerAccountCreateRequest;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: { [key: string]: string };

    /**
     * A nickname for the external account. This is only for internal usage and won't
     * affect any payments
     */
    name?: string | null;

    /**
     * Required if receiving wire payments.
     */
    party_address?: Shared.AddressRequest;

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

      account_number_type?:
        | 'au_number'
        | 'base_address'
        | 'clabe'
        | 'ethereum_address'
        | 'hk_number'
        | 'iban'
        | 'id_number'
        | 'nz_number'
        | 'other'
        | 'pan'
        | 'polygon_address'
        | 'sg_number'
        | 'solana_address'
        | 'wallet_address';
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
        | 'il_bank_code'
        | 'in_ifsc'
        | 'jp_zengin_code'
        | 'my_branch_code'
        | 'mx_bank_identifier'
        | 'nz_national_clearing_code'
        | 'pl_national_clearing_code'
        | 'se_bankgiro_clearing_code'
        | 'sg_interbank_clearing_code'
        | 'swift'
        | 'za_national_clearing_code';

      payment_type?:
        | 'ach'
        | 'au_becs'
        | 'bacs'
        | 'base'
        | 'book'
        | 'card'
        | 'chats'
        | 'check'
        | 'cross_border'
        | 'dk_nets'
        | 'eft'
        | 'ethereum'
        | 'gb_fps'
        | 'hu_ics'
        | 'interac'
        | 'masav'
        | 'mx_ccen'
        | 'neft'
        | 'nics'
        | 'nz_becs'
        | 'pl_elixir'
        | 'polygon'
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
        | 'solana'
        | 'wire'
        | 'zengin';
    }
  }
}

PaymentOrders.PaymentOrdersPage = PaymentOrdersPage;
PaymentOrders.Reversals = Reversals;
PaymentOrders.ReversalsPage = ReversalsPage;

export declare namespace PaymentOrders {
  export {
    type ContactDetailCreateRequest as ContactDetailCreateRequest,
    type PaymentOrder as PaymentOrder,
    type PaymentOrderSubtype as PaymentOrderSubtype,
    type PaymentOrderType as PaymentOrderType,
    PaymentOrdersPage as PaymentOrdersPage,
    type PaymentOrderCreateParams as PaymentOrderCreateParams,
    type PaymentOrderUpdateParams as PaymentOrderUpdateParams,
    type PaymentOrderListParams as PaymentOrderListParams,
    type PaymentOrderCreateAsyncParams as PaymentOrderCreateAsyncParams,
  };

  export {
    Reversals as Reversals,
    type Reversal as Reversal,
    ReversalsPage as ReversalsPage,
    type ReversalCreateParams as ReversalCreateParams,
    type ReversalListParams as ReversalListParams,
  };
}
