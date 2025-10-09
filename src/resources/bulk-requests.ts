// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ExpectedPaymentsAPI from './expected-payments';
import * as ExternalAccountsAPI from './external-accounts';
import * as Shared from './shared';
import * as PaymentOrdersAPI from './payment-orders/payment-orders';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class BulkRequests extends APIResource {
  /**
   * create bulk_request
   *
   * @example
   * ```ts
   * const bulkRequest = await client.bulkRequests.create({
   *   action_type: 'create',
   *   resource_type: 'payment_order',
   *   resources: [
   *     {
   *       amount: 0,
   *       direction: 'credit',
   *       originating_account_id:
   *         '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       type: 'ach',
   *     },
   *   ],
   * });
   * ```
   */
  create(body: BulkRequestCreateParams, options?: RequestOptions): APIPromise<BulkRequest> {
    return this._client.post('/api/bulk_requests', { body, ...options });
  }

  /**
   * get bulk_request
   *
   * @example
   * ```ts
   * const bulkRequest = await client.bulkRequests.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BulkRequest> {
    return this._client.get(path`/api/bulk_requests/${id}`, options);
  }

  /**
   * list bulk_requests
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const bulkRequest of client.bulkRequests.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: BulkRequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BulkRequestsPage, BulkRequest> {
    return this._client.getAPIList('/api/bulk_requests', Page<BulkRequest>, { query, ...options });
  }
}

export type BulkRequestsPage = Page<BulkRequest>;

export interface BulkRequest {
  id: string;

  /**
   * One of create, or update.
   */
  action_type: 'create' | 'update' | 'delete';

  created_at: string;

  /**
   * Total number of failed bulk results so far for this request
   */
  failed_result_count: number;

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

  /**
   * One of payment_order, expected_payment, or ledger_transaction.
   */
  resource_type:
    | 'payment_order'
    | 'ledger_account'
    | 'ledger_transaction'
    | 'expected_payment'
    | 'transaction'
    | 'transaction_line_item'
    | 'entity_link';

  /**
   * One of pending, processing, or completed.
   */
  status: 'pending' | 'processing' | 'completed';

  /**
   * Total number of successful bulk results so far for this request
   */
  success_result_count: number;

  /**
   * Total number of items in the `resources` array. Once a bulk request is
   * completed, `success_result_count` + `failed_result_count` will be equal to
   * `total_result_count`.
   */
  total_resource_count: number;

  updated_at: string;
}

export interface BulkRequestCreateParams {
  /**
   * One of create, or update.
   */
  action_type: 'create' | 'update' | 'delete';

  /**
   * One of payment_order, expected_payment, or ledger_transaction.
   */
  resource_type:
    | 'payment_order'
    | 'ledger_account'
    | 'ledger_transaction'
    | 'expected_payment'
    | 'transaction'
    | 'transaction_line_item'
    | 'entity_link';

  /**
   * An array of objects where each object contains the input params for a single
   * `action_type` request on a `resource_type` resource
   */
  resources: Array<
    | BulkRequestCreateParams.PaymentOrderAsyncCreateRequest
    | BulkRequestCreateParams.ExpectedPaymentCreateRequest
    | Shared.LedgerTransactionCreateRequest
    | Shared.LedgerAccountCreateRequest
    | BulkRequestCreateParams.TransactionCreateRequest
    | BulkRequestCreateParams.ID
    | BulkRequestCreateParams.PaymentOrderUpdateRequestWithID
    | BulkRequestCreateParams.ExpectedPaymentUpdateRequestWithID
    | BulkRequestCreateParams.TransactionUpdateRequestWithID
    | BulkRequestCreateParams.LedgerTransactionUpdateRequestWithID
  >;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };
}

export namespace BulkRequestCreateParams {
  export interface PaymentOrderAsyncCreateRequest {
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
    type: PaymentOrdersAPI.PaymentOrderType;

    /**
     * @deprecated
     */
    accounting?: PaymentOrderAsyncCreateRequest.Accounting;

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
    line_items?: Array<PaymentOrderAsyncCreateRequest.LineItem>;

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
    receiving_account?: PaymentOrderAsyncCreateRequest.ReceivingAccount;

    /**
     * Either `receiving_account` or `receiving_account_id` must be present. When using
     * `receiving_account_id`, you may pass the id of an external account or an
     * internal account.
     */
    receiving_account_id?: string;

    /**
     * One of `unreconciled`, `tentatively_reconciled` or `reconciled`.
     */
    reconciliation_status?: 'unreconciled' | 'tentatively_reconciled' | 'reconciled';

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
    subtype?: PaymentOrdersAPI.PaymentOrderSubtype | null;

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

  export namespace PaymentOrderAsyncCreateRequest {
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

  export interface ExpectedPaymentCreateRequest {
    /**
     * The lowest amount this expected payment may be equal to. Value in specified
     * currency's smallest unit. e.g. $10 would be represented as 1000.
     */
    amount_lower_bound?: number | null;

    /**
     * The highest amount this expected payment may be equal to. Value in specified
     * currency's smallest unit. e.g. $10 would be represented as 1000.
     */
    amount_upper_bound?: number | null;

    /**
     * The ID of the counterparty you expect for this payment.
     */
    counterparty_id?: string | null;

    /**
     * Must conform to ISO 4217. Defaults to the currency of the internal account.
     */
    currency?: Shared.Currency | null;

    /**
     * The earliest date the payment may come in. Format: yyyy-mm-dd
     */
    date_lower_bound?: string | null;

    /**
     * The latest date the payment may come in. Format: yyyy-mm-dd
     */
    date_upper_bound?: string | null;

    /**
     * An optional description for internal use.
     */
    description?: string | null;

    /**
     * One of credit or debit. When you are receiving money, use credit. When you are
     * being charged, use debit.
     */
    direction?: 'credit' | 'debit' | null;

    /**
     * An optional user-defined 180 character unique identifier.
     */
    external_id?: string | null;

    /**
     * The ID of the Internal Account for the expected payment.
     */
    internal_account_id?: string | null;

    /**
     * Specifies a ledger transaction object that will be created with the expected
     * payment. If the ledger transaction cannot be created, then the expected payment
     * creation will fail. The resulting ledger transaction will mirror the status of
     * the expected payment.
     */
    ledger_transaction?: Shared.LedgerTransactionCreateRequest;

    /**
     * Either ledger_transaction or ledger_transaction_id can be provided. Only a
     * pending ledger transaction can be attached upon expected payment creation. Once
     * the expected payment is created, the status of the ledger transaction tracks the
     * expected payment automatically.
     */
    ledger_transaction_id?: string;

    line_items?: Array<ExpectedPaymentCreateRequest.LineItem>;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: { [key: string]: string };

    /**
     * The reconciliation filters you have for this payment.
     */
    reconciliation_filters?: unknown | null;

    /**
     * The reconciliation groups you have for this payment.
     */
    reconciliation_groups?: unknown | null;

    /**
     * An array of reconciliation rule variables for this payment.
     */
    reconciliation_rule_variables?: Array<ExpectedPaymentsAPI.ReconciliationRule> | null;

    /**
     * For `ach`, this field will be passed through on an addenda record. For `wire`
     * payments the field will be passed through as the "Originator to Beneficiary
     * Information", also known as OBI or Fedwire tag 6000.
     */
    remittance_information?: string | null;

    /**
     * The statement description you expect to see on the transaction. For ACH
     * payments, this will be the full line item passed from the bank. For wire
     * payments, this will be the OBI field on the wire. For check payments, this will
     * be the memo field.
     */
    statement_descriptor?: string | null;

    /**
     * One of: ach, au_becs, bacs, book, check, eft, interac, provxchange, rtp, sen,
     * sepa, signet, wire.
     */
    type?: ExpectedPaymentsAPI.ExpectedPaymentType | null;
  }

  export namespace ExpectedPaymentCreateRequest {
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
  }

  export interface TransactionCreateRequest {
    /**
     * Value in specified currency's smallest unit. e.g. $10 would be represented
     * as 1000.
     */
    amount: number;

    /**
     * The date on which the transaction occurred.
     */
    as_of_date: string | null;

    /**
     * Either `credit` or `debit`.
     */
    direction: string;

    /**
     * The ID of the relevant Internal Account.
     */
    internal_account_id: string;

    /**
     * When applicable, the bank-given code that determines the transaction's category.
     * For most banks this is the BAI2/BTRS transaction code.
     */
    vendor_code: string | null;

    /**
     * The type of `vendor_code` being reported. Can be one of `bai2`, `bankprov`,
     * `bnk_dev`, `cleartouch`, `currencycloud`, `cross_river`, `dc_bank`, `dwolla`,
     * `evolve`, `goldman_sachs`, `iso20022`, `jpmc`, `mx`, `signet`, `silvergate`,
     * `swift`, `us_bank`, or others.
     */
    vendor_code_type: string | null;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: { [key: string]: string };

    /**
     * This field will be `true` if the transaction has posted to the account.
     */
    posted?: boolean;

    /**
     * The type of the transaction. Examples could be
     * `card, `ach`, `wire`, `check`, `rtp`, `book`, or `sen`.
     */
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
      | 'zengin'
      | 'other'
      | null;

    /**
     * An identifier given to this transaction by the bank, often `null`.
     */
    vendor_customer_id?: string | null;

    /**
     * The transaction detail text that often appears in on your bank statement and in
     * your banking portal.
     */
    vendor_description?: string | null;
  }

  export interface ID {
    id?: string;
  }

  export interface PaymentOrderUpdateRequestWithID {
    id?: string;

    /**
     * @deprecated
     */
    accounting?: PaymentOrderUpdateRequestWithID.Accounting;

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
    line_items?: Array<PaymentOrderUpdateRequestWithID.LineItem>;

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
    receiving_account?: PaymentOrderUpdateRequestWithID.ReceivingAccount;

    /**
     * Either `receiving_account` or `receiving_account_id` must be present. When using
     * `receiving_account_id`, you may pass the id of an external account or an
     * internal account.
     */
    receiving_account_id?: string;

    /**
     * One of `unreconciled`, `tentatively_reconciled` or `reconciled`.
     */
    reconciliation_status?: 'unreconciled' | 'tentatively_reconciled' | 'reconciled';

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
      | 'held'
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
    subtype?: PaymentOrdersAPI.PaymentOrderSubtype | null;

    /**
     * One of `ach`, `se_bankgirot`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`,
     * `sepa`, `bacs`, `au_becs`, `interac`, `neft`, `nics`,
     * `nz_national_clearing_code`, `sic`, `signet`, `provexchange`, `zengin`.
     */
    type?: PaymentOrdersAPI.PaymentOrderType;

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

  export namespace PaymentOrderUpdateRequestWithID {
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

  export interface ExpectedPaymentUpdateRequestWithID {
    id?: string;

    /**
     * The lowest amount this expected payment may be equal to. Value in specified
     * currency's smallest unit. e.g. $10 would be represented as 1000.
     */
    amount_lower_bound?: number | null;

    /**
     * The highest amount this expected payment may be equal to. Value in specified
     * currency's smallest unit. e.g. $10 would be represented as 1000.
     */
    amount_upper_bound?: number | null;

    /**
     * The ID of the counterparty you expect for this payment.
     */
    counterparty_id?: string | null;

    /**
     * Must conform to ISO 4217. Defaults to the currency of the internal account.
     */
    currency?: Shared.Currency | null;

    /**
     * The earliest date the payment may come in. Format: yyyy-mm-dd
     */
    date_lower_bound?: string | null;

    /**
     * The latest date the payment may come in. Format: yyyy-mm-dd
     */
    date_upper_bound?: string | null;

    /**
     * An optional description for internal use.
     */
    description?: string | null;

    /**
     * One of credit or debit. When you are receiving money, use credit. When you are
     * being charged, use debit.
     */
    direction?: 'credit' | 'debit' | null;

    /**
     * An optional user-defined 180 character unique identifier.
     */
    external_id?: string | null;

    /**
     * The ID of the Internal Account for the expected payment.
     */
    internal_account_id?: string | null;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: { [key: string]: string };

    /**
     * The reconciliation filters you have for this payment.
     */
    reconciliation_filters?: unknown | null;

    /**
     * The reconciliation groups you have for this payment.
     */
    reconciliation_groups?: unknown | null;

    /**
     * An array of reconciliation rule variables for this payment.
     */
    reconciliation_rule_variables?: Array<ExpectedPaymentsAPI.ReconciliationRule> | null;

    /**
     * For `ach`, this field will be passed through on an addenda record. For `wire`
     * payments the field will be passed through as the "Originator to Beneficiary
     * Information", also known as OBI or Fedwire tag 6000.
     */
    remittance_information?: string | null;

    /**
     * The statement description you expect to see on the transaction. For ACH
     * payments, this will be the full line item passed from the bank. For wire
     * payments, this will be the OBI field on the wire. For check payments, this will
     * be the memo field.
     */
    statement_descriptor?: string | null;

    /**
     * The Expected Payment's status can be updated from partially_reconciled to
     * reconciled.
     */
    status?: 'reconciled' | null;

    /**
     * One of: ach, au_becs, bacs, book, check, eft, interac, provxchange, rtp, sen,
     * sepa, signet, wire.
     */
    type?: ExpectedPaymentsAPI.ExpectedPaymentType | null;
  }

  export interface TransactionUpdateRequestWithID {
    id?: string;

    /**
     * Additional data in the form of key-value pairs. Pairs can be removed by passing
     * an empty string or `null` as the value.
     */
    metadata?: { [key: string]: string };
  }

  export interface LedgerTransactionUpdateRequestWithID {
    id?: string;

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
     * An array of ledger entry objects.
     */
    ledger_entries?: Array<Shared.LedgerEntryCreateRequest>;

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
      | 'expected_payment'
      | 'incoming_payment_detail'
      | 'payment_order'
      | 'return'
      | 'reversal';

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: { [key: string]: string };

    /**
     * To post a ledger transaction at creation, use `posted`.
     */
    status?: 'archived' | 'pending' | 'posted';
  }
}

export interface BulkRequestListParams extends PageParams {
  /**
   * One of create, or update.
   */
  action_type?: 'create' | 'update' | 'delete';

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: { [key: string]: string };

  /**
   * One of payment_order, expected_payment, or ledger_transaction.
   */
  resource_type?:
    | 'payment_order'
    | 'ledger_account'
    | 'ledger_transaction'
    | 'expected_payment'
    | 'transaction'
    | 'transaction_line_item'
    | 'entity_link';

  /**
   * One of pending, processing, or completed.
   */
  status?: 'pending' | 'processing' | 'completed';
}

export declare namespace BulkRequests {
  export {
    type BulkRequest as BulkRequest,
    type BulkRequestsPage as BulkRequestsPage,
    type BulkRequestCreateParams as BulkRequestCreateParams,
    type BulkRequestListParams as BulkRequestListParams,
  };
}
