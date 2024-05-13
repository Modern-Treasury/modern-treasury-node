// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as ExpectedPaymentsAPI from './expected-payments';
import * as Shared from './shared';
import { Page, type PageParams } from '../pagination';

export class ExpectedPayments extends APIResource {
  /**
   * create expected payment
   */
  create(
    params: ExpectedPaymentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExpectedPayment> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post('/api/expected_payments', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * get expected payment
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ExpectedPayment> {
    return this._client.get(`/api/expected_payments/${id}`, options);
  }

  /**
   * update expected payment
   */
  update(
    id: string,
    body?: ExpectedPaymentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExpectedPayment>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<ExpectedPayment>;
  update(
    id: string,
    body: ExpectedPaymentUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExpectedPayment> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.patch(`/api/expected_payments/${id}`, { body, ...options });
  }

  /**
   * list expected_payments
   */
  list(
    query?: ExpectedPaymentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExpectedPaymentsPage, ExpectedPayment>;
  list(options?: Core.RequestOptions): Core.PagePromise<ExpectedPaymentsPage, ExpectedPayment>;
  list(
    query: ExpectedPaymentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExpectedPaymentsPage, ExpectedPayment> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/expected_payments', ExpectedPaymentsPage, { query, ...options });
  }

  /**
   * delete expected payment
   */
  del(id: string, options?: Core.RequestOptions): Core.APIPromise<ExpectedPayment> {
    return this._client.delete(`/api/expected_payments/${id}`, options);
  }
}

export class ExpectedPaymentsPage extends Page<ExpectedPayment> {}

export interface ExpectedPayment {
  id: string;

  /**
   * The lowest amount this expected payment may be equal to. Value in specified
   * currency's smallest unit. e.g. $10 would be represented as 1000.
   */
  amount_lower_bound: number;

  /**
   * The highest amount this expected payment may be equal to. Value in specified
   * currency's smallest unit. e.g. $10 would be represented as 1000.
   */
  amount_upper_bound: number;

  /**
   * The ID of the counterparty you expect for this payment.
   */
  counterparty_id: string | null;

  created_at: string;

  /**
   * Must conform to ISO 4217. Defaults to the currency of the internal account.
   */
  currency: Shared.Currency | null;

  /**
   * The earliest date the payment may come in. Format: yyyy-mm-dd
   */
  date_lower_bound: string | null;

  /**
   * The latest date the payment may come in. Format: yyyy-mm-dd
   */
  date_upper_bound: string | null;

  /**
   * An optional description for internal use.
   */
  description: string | null;

  /**
   * One of credit or debit. When you are receiving money, use credit. When you are
   * being charged, use debit.
   */
  direction: Shared.TransactionDirection;

  /**
   * The ID of the Internal Account for the expected payment.
   */
  internal_account_id: string;

  /**
   * The ID of the ledger transaction linked to the expected payment.
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

  object: string;

  /**
   * The reconciliation filters you have for this payment.
   */
  reconciliation_filters: unknown | null;

  /**
   * The reconciliation groups you have for this payment.
   */
  reconciliation_groups: unknown | null;

  /**
   * One of manual if this expected payment was manually reconciled in the dashboard,
   * automatic if it was automatically reconciled by Modern Treasury, or null if it
   * is unreconciled.
   */
  reconciliation_method: 'automatic' | 'manual' | null;

  /**
   * An array of reconciliation rule variables for this payment.
   */
  reconciliation_rule_variables: Array<Record<string, string>> | null;

  /**
   * For `ach`, this field will be passed through on an addenda record. For `wire`
   * payments the field will be passed through as the "Originator to Beneficiary
   * Information", also known as OBI or Fedwire tag 6000.
   */
  remittance_information: string | null;

  /**
   * The statement description you expect to see on the transaction. For ACH
   * payments, this will be the full line item passed from the bank. For wire
   * payments, this will be the OBI field on the wire. For check payments, this will
   * be the memo field.
   */
  statement_descriptor: string | null;

  /**
   * One of unreconciled, partially_reconciled, reconciled, or archived.
   */
  status: 'archived' | 'partially_reconciled' | 'reconciled' | 'unreconciled';

  /**
   * The ID of the Transaction this expected payment object has been matched to.
   */
  transaction_id: string | null;

  /**
   * The ID of the Transaction Line Item this expected payment has been matched to.
   */
  transaction_line_item_id: string | null;

  /**
   * One of: ach, au_becs, bacs, book, check, eft, interac, provxchange, rtp, sen,
   * sepa, signet, wire.
   */
  type: ExpectedPaymentType | null;

  updated_at: string;
}

/**
 * One of: ach, au_becs, bacs, book, check, eft, interac, provxchange, rtp, sen,
 * sepa, signet, wire.
 */
export type ExpectedPaymentType =
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
  | 'zengin'
  | null;

export interface ExpectedPaymentCreateParams {
  /**
   * The lowest amount this expected payment may be equal to. Value in specified
   * currency's smallest unit. e.g. $10 would be represented as 1000.
   */
  amount_lower_bound: number;

  /**
   * The highest amount this expected payment may be equal to. Value in specified
   * currency's smallest unit. e.g. $10 would be represented as 1000.
   */
  amount_upper_bound: number;

  /**
   * One of credit or debit. When you are receiving money, use credit. When you are
   * being charged, use debit.
   */
  direction: Shared.TransactionDirection;

  /**
   * The ID of the Internal Account for the expected payment.
   */
  internal_account_id: string;

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
   * Specifies a ledger transaction object that will be created with the expected
   * payment. If the ledger transaction cannot be created, then the expected payment
   * creation will fail. The resulting ledger transaction will mirror the status of
   * the expected payment.
   */
  ledger_transaction?: ExpectedPaymentCreateParams.LedgerTransaction;

  /**
   * Either ledger_transaction or ledger_transaction_id can be provided. Only a
   * pending ledger transaction can be attached upon expected payment creation. Once
   * the expected payment is created, the status of the ledger transaction tracks the
   * expected payment automatically.
   */
  ledger_transaction_id?: string;

  line_items?: Array<ExpectedPaymentCreateParams.LineItem>;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;

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
  reconciliation_rule_variables?: Array<Record<string, string>> | null;

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
  type?: ExpectedPaymentType | null;
}

export namespace ExpectedPaymentCreateParams {
  /**
   * Specifies a ledger transaction object that will be created with the expected
   * payment. If the ledger transaction cannot be created, then the expected payment
   * creation will fail. The resulting ledger transaction will mirror the status of
   * the expected payment.
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
     * payment_order, incoming_payment_detail, expected_payment, return, paper_item, or
     * reversal.
     */
    ledgerable_type?:
      | 'expected_payment'
      | 'incoming_payment_detail'
      | 'paper_item'
      | 'payment_order'
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
}

export interface ExpectedPaymentUpdateParams {
  /**
   * The lowest amount this expected payment may be equal to. Value in specified
   * currency's smallest unit. e.g. $10 would be represented as 1000.
   */
  amount_lower_bound?: number;

  /**
   * The highest amount this expected payment may be equal to. Value in specified
   * currency's smallest unit. e.g. $10 would be represented as 1000.
   */
  amount_upper_bound?: number;

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
  direction?: Shared.TransactionDirection;

  /**
   * The ID of the Internal Account for the expected payment.
   */
  internal_account_id?: string;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;

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
  reconciliation_rule_variables?: Array<Record<string, string>> | null;

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
  type?: ExpectedPaymentType | null;
}

export interface ExpectedPaymentListParams extends PageParams {
  /**
   * Specify counterparty_id to see expected_payments for a specific account.
   */
  counterparty_id?: string;

  /**
   * Used to return expected payments created after some datetime
   */
  created_at_lower_bound?: string;

  /**
   * Used to return expected payments created before some datetime
   */
  created_at_upper_bound?: string;

  /**
   * One of credit, debit
   */
  direction?: Shared.TransactionDirection;

  /**
   * Specify internal_account_id to see expected_payments for a specific account.
   */
  internal_account_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;

  /**
   * One of unreconciled, reconciled, or archived.
   */
  status?: 'archived' | 'partially_reconciled' | 'reconciled' | 'unreconciled';

  /**
   * One of: ach, au_becs, bacs, book, check, eft, interac, provxchange, rtp,sen,
   * sepa, signet, wire
   */
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

export namespace ExpectedPayments {
  export import ExpectedPayment = ExpectedPaymentsAPI.ExpectedPayment;
  export import ExpectedPaymentType = ExpectedPaymentsAPI.ExpectedPaymentType;
  export import ExpectedPaymentsPage = ExpectedPaymentsAPI.ExpectedPaymentsPage;
  export import ExpectedPaymentCreateParams = ExpectedPaymentsAPI.ExpectedPaymentCreateParams;
  export import ExpectedPaymentUpdateParams = ExpectedPaymentsAPI.ExpectedPaymentUpdateParams;
  export import ExpectedPaymentListParams = ExpectedPaymentsAPI.ExpectedPaymentListParams;
}
