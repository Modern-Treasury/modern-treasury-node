// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import { Page, type PageParams } from '../pagination';

export class ExpectedPayments extends APIResource {
  /**
   * create expected payment
   *
   * @example
   * ```ts
   * const expectedPayment =
   *   await client.expectedPayments.create();
   * ```
   */
  create(
    params?: ExpectedPaymentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExpectedPayment>;
  create(options?: Core.RequestOptions): Core.APIPromise<ExpectedPayment>;
  create(
    params: ExpectedPaymentCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExpectedPayment> {
    if (isRequestOptions(params)) {
      return this.create({}, params);
    }
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
   *
   * @example
   * ```ts
   * const expectedPayment =
   *   await client.expectedPayments.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ExpectedPayment> {
    return this._client.get(`/api/expected_payments/${id}`, options);
  }

  /**
   * update expected payment
   *
   * @example
   * ```ts
   * const expectedPayment =
   *   await client.expectedPayments.update('id');
   * ```
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
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const expectedPayment of client.expectedPayments.list()) {
   *   // ...
   * }
   * ```
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
   *
   * @example
   * ```ts
   * const expectedPayment = await client.expectedPayments.del(
   *   'id',
   * );
   * ```
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
  amount_lower_bound: number | null;

  /**
   * The highest amount this expected payment may be equal to. Value in specified
   * currency's smallest unit. e.g. $10 would be represented as 1000.
   */
  amount_upper_bound: number | null;

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
  direction: 'credit' | 'debit' | null;

  /**
   * An optional user-defined 180 character unique identifier.
   */
  external_id: string | null;

  /**
   * The ID of the Internal Account for the expected payment.
   */
  internal_account_id: string | null;

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
  metadata: { [key: string]: string };

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
  reconciliation_rule_variables: Array<ReconciliationRule> | null;

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
  | 'base'
  | 'book'
  | 'card'
  | 'chats'
  | 'check'
  | 'cross_border'
  | 'dk_nets'
  | 'eft'
  | 'ethereum'
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
  | null;

export interface ReconciliationRule {
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
  direction: 'credit' | 'debit';

  /**
   * The ID of the Internal Account for the expected payment
   */
  internal_account_id: string;

  /**
   * The ID of the counterparty you expect for this payment
   */
  counterparty_id?: string | null;

  /**
   * Must conform to ISO 4217. Defaults to the currency of the internal account
   */
  currency?: Shared.Currency;

  /**
   * A hash of custom identifiers for this payment
   */
  custom_identifiers?: { [key: string]: string } | null;

  /**
   * The earliest date the payment may come in. Format is yyyy-mm-dd
   */
  date_lower_bound?: string | null;

  /**
   * The latest date the payment may come in. Format is yyyy-mm-dd
   */
  date_upper_bound?: string | null;

  /**
   * One of ach, au_becs, bacs, book, check, eft, interac, provxchange, rtp, sen,
   * sepa, signet wire
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
    | null;
}

export interface ExpectedPaymentCreateParams {
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

  line_items?: Array<ExpectedPaymentCreateParams.LineItem>;

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
  reconciliation_rule_variables?: Array<ReconciliationRule> | null;

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

export interface ExpectedPaymentUpdateParams {
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
  reconciliation_rule_variables?: Array<ReconciliationRule> | null;

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

  external_id?: string;

  /**
   * Specify internal_account_id to see expected_payments for a specific account.
   */
  internal_account_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: { [key: string]: string };

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
    | 'base'
    | 'book'
    | 'card'
    | 'chats'
    | 'check'
    | 'cross_border'
    | 'dk_nets'
    | 'eft'
    | 'ethereum'
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

  /**
   * Used to return expected payments updated after some datetime
   */
  updated_at_lower_bound?: string;

  /**
   * Used to return expected payments updated before some datetime
   */
  updated_at_upper_bound?: string;
}

ExpectedPayments.ExpectedPaymentsPage = ExpectedPaymentsPage;

export declare namespace ExpectedPayments {
  export {
    type ExpectedPayment as ExpectedPayment,
    type ExpectedPaymentType as ExpectedPaymentType,
    type ReconciliationRule as ReconciliationRule,
    ExpectedPaymentsPage as ExpectedPaymentsPage,
    type ExpectedPaymentCreateParams as ExpectedPaymentCreateParams,
    type ExpectedPaymentUpdateParams as ExpectedPaymentUpdateParams,
    type ExpectedPaymentListParams as ExpectedPaymentListParams,
  };
}
