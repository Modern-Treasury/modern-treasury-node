// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as Shared from '~/resources/shared';
import * as API from './';
import { Page, PageParams } from '~/pagination';

export class ExpectedPayments extends APIResource {
  /**
   * create expected payment
   */
  create(
    params: ExpectedPaymentCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ExpectedPayment>> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this.post('/api/expected_payments', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey || '', ...options?.headers },
    });
  }

  /**
   * get expected payment
   */
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<ExpectedPayment>> {
    return this.get(`/api/expected_payments/${id}`, options);
  }

  /**
   * update expected payment
   */
  update(
    id: string,
    body?: ExpectedPaymentUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ExpectedPayment>>;
  update(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<ExpectedPayment>>;
  update(
    id: string,
    body: ExpectedPaymentUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ExpectedPayment>> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this.patch(`/api/expected_payments/${id}`, { body, ...options });
  }

  /**
   * list expected_payments
   */
  list(
    query?: ExpectedPaymentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExpectedPaymentsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<ExpectedPaymentsPage>;
  list(
    query: ExpectedPaymentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExpectedPaymentsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/api/expected_payments', ExpectedPaymentsPage, { query, ...options });
  }

  /**
   * delete expected payment
   */
  del(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<ExpectedPayment>> {
    return this.delete(`/api/expected_payments/${id}`, options);
  }
}

export class ExpectedPaymentsPage extends Page<ExpectedPayment> {}

export interface ExpectedPayment {
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
  direction: 'credit' | 'debit';

  id: string;

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
   * One of unreconciled, reconciled, or archived.
   */
  status: 'archived' | 'reconciled' | 'unreconciled';

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
  | 'check'
  | 'cross_border'
  | 'eft'
  | 'interac'
  | 'masav'
  | 'neft'
  | 'provxchange'
  | 'rtp'
  | 'sen'
  | 'sepa'
  | 'signet'
  | 'wire'
  | null;

export interface ExpectedPaymentCreateParams {
  /**
   * Body param: The lowest amount this expected payment may be equal to. Value in
   * specified currency's smallest unit. e.g. $10 would be represented as 1000.
   */
  amount_lower_bound: number;

  /**
   * Body param: The highest amount this expected payment may be equal to. Value in
   * specified currency's smallest unit. e.g. $10 would be represented as 1000.
   */
  amount_upper_bound: number;

  /**
   * Body param: One of credit or debit. When you are receiving money, use credit.
   * When you are being charged, use debit.
   */
  direction: 'credit' | 'debit';

  /**
   * Body param: The ID of the Internal Account for the expected payment.
   */
  internal_account_id: string;

  /**
   * Body param: The ID of the counterparty you expect for this payment.
   */
  counterparty_id?: string | null;

  /**
   * Body param: Must conform to ISO 4217. Defaults to the currency of the internal
   * account.
   */
  currency?: Shared.Currency | null;

  /**
   * Body param: The earliest date the payment may come in. Format: yyyy-mm-dd
   */
  date_lower_bound?: string | null;

  /**
   * Body param: The latest date the payment may come in. Format: yyyy-mm-dd
   */
  date_upper_bound?: string | null;

  /**
   * Body param: An optional description for internal use.
   */
  description?: string | null;

  /**
   * Body param:
   */
  line_items?: Array<ExpectedPaymentCreateParams.LineItem>;

  /**
   * Body param: Additional data represented as key-value pairs. Both the key and
   * value must be strings.
   */
  metadata?: Record<string, string>;

  /**
   * Body param: The reconciliation filters you have for this payment.
   */
  reconciliation_filters?: unknown | null;

  /**
   * Body param: The reconciliation groups you have for this payment.
   */
  reconciliation_groups?: unknown | null;

  /**
   * Body param: For `ach`, this field will be passed through on an addenda record.
   * For `wire` payments the field will be passed through as the "Originator to
   * Beneficiary Information", also known as OBI or Fedwire tag 6000.
   */
  remittance_information?: string | null;

  /**
   * Body param: The statement description you expect to see on the transaction. For
   * ACH payments, this will be the full line item passed from the bank. For wire
   * payments, this will be the OBI field on the wire. For check payments, this will
   * be the memo field.
   */
  statement_descriptor?: string | null;

  /**
   * Body param: One of: ach, au_becs, bacs, book, check, eft, interac, provxchange,
   * rtp, sen, sepa, signet, wire.
   */
  type?: ExpectedPaymentType | null;

  /**
   * Header param: This key should be something unique, preferably something like an
   * UUID.
   */
  'Idempotency-Key'?: string;
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
  direction?: 'credit' | 'debit';

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
  direction?: 'credit' | 'debit';

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
  status?: 'archived' | 'reconciled' | 'unreconciled';

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
    | 'check'
    | 'cross_border'
    | 'eft'
    | 'interac'
    | 'masav'
    | 'neft'
    | 'provxchange'
    | 'rtp'
    | 'sen'
    | 'sepa'
    | 'signet'
    | 'wire';
}

export namespace ExpectedPayments {
  export import ExpectedPayment = API.ExpectedPayment;
  export import ExpectedPaymentType = API.ExpectedPaymentType;
  export import ExpectedPaymentsPage = API.ExpectedPaymentsPage;
  export import ExpectedPaymentCreateParams = API.ExpectedPaymentCreateParams;
  export import ExpectedPaymentUpdateParams = API.ExpectedPaymentUpdateParams;
  export import ExpectedPaymentListParams = API.ExpectedPaymentListParams;
}
