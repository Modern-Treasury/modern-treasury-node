// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';
import * as Shared from '~/resources/shared';

export class Transactions extends APIResource {
  /**
   * Get details on a single transaction.
   */
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Transaction>> {
    return this.get(`/api/transactions/${id}`, options);
  }

  /**
   * Update a single transaction.
   */
  update(
    id: string,
    body?: TransactionUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Transaction>>;
  update(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Transaction>>;
  update(
    id: string,
    body: TransactionUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Transaction>> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }

    return this.patch(`/api/transactions/${id}`, { body, ...options });
  }

  /**
   * Get a list of all transactions.
   */
  list(query?: TransactionListParams, options?: Core.RequestOptions): Core.PagePromise<TransactionsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<TransactionsPage>;
  list(
    query: TransactionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransactionsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/api/transactions', TransactionsPage, { query, ...options });
  }
}

export class TransactionsPage extends Page<Transaction> {}

export interface Transaction {
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
   * The time on which the transaction occurred. Depending on the granularity of the
   * timestamp information received from the bank, it may be `null`.
   */
  as_of_time: string | null;

  created_at: string;

  /**
   * Currency that this transaction is denominated in.
   */
  currency: Shared.Currency;

  /**
   * This field contains additional information that the bank provided about the
   * transaction. This is structured data. Some of the data in here might overlap
   * with what is in the `vendor_description`. For example, the OBI could be a part
   * of the vendor description, and it would also be included in here. The attributes
   * that are passed through the details field will vary based on your banking
   * partner. Currently, the following keys may be in the details object:
   * `originator_name`, `originator_to_beneficiary_information`.
   */
  details: Record<string, string>;

  /**
   * Either `credit` or `debit`.
   */
  direction: string;

  discarded_at: string | null;

  id: string;

  /**
   * The ID of the relevant Internal Account.
   */
  internal_account_id: string;

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
   * This field will be `true` if the transaction has posted to the account.
   */
  posted: boolean;

  /**
   * This field will be `true` if a transaction is reconciled by the Modern Treasury
   * system. This means that it has transaction line items that sum up to the
   * transaction's amount.
   */
  reconciled: boolean;

  /**
   * The type of the transaction. Can be one of `ach`, `wire`, `check`, `rtp`,
   * `book`, or `sen`.
   */
  type:
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

  updated_at: string;

  /**
   * When applicable, the bank-given code that determines the transaction's category.
   * For most banks this is the BAI2/BTRS transaction code.
   */
  vendor_code: string | null;

  /**
   * The type of vendor_code being reported. Can be one of `bai2`, `swift`,
   * `cleartouch`, or `silvergate`.
   */
  vendor_code_type:
    | 'bai2'
    | 'bankprov'
    | 'bnk_dev'
    | 'cleartouch'
    | 'cross_river'
    | 'currencycloud'
    | 'dc_bank'
    | 'dwolla'
    | 'goldman_sachs'
    | 'iso20022'
    | 'jpmc'
    | 'mx'
    | 'signet'
    | 'silvergate'
    | 'swift'
    | 'us_bank'
    | null;

  /**
   * An identifier given to this transaction by the bank, often `null`.
   */
  vendor_customer_id: string | null;

  /**
   * The transaction detail text that often appears in on your bank statement and in
   * your banking portal.
   */
  vendor_description: string | null;

  /**
   * An identifier given to this transaction by the bank.
   */
  vendor_id: string | null;
}

export interface TransactionUpdateParams {
  /**
   * Additional data in the form of key-value pairs. Pairs can be removed by passing
   * an empty string or `null` as the value.
   */
  metadata?: Record<string, string>;
}

export interface TransactionListParams extends PageParams {
  /**
   * Filters transactions with an `as_of_date` starting on or before the specified
   * date (YYYY-MM-DD).
   */
  as_of_date_end?: string;

  /**
   * Filters transactions with an `as_of_date` starting on or after the specified
   * date (YYYY-MM-DD).
   */
  as_of_date_start?: string;

  counterparty_id?: string;

  /**
   * Filters for transactions including the queried string in the description.
   */
  description?: string;

  direction?: string;

  /**
   * Specify `internal_account_id` if you wish to see transactions to/from a specific
   * account.
   */
  internal_account_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;

  payment_type?: string;

  /**
   * Either `true` or `false`.
   */
  posted?: boolean;

  transactable_type?: string;

  virtual_account_id?: string;
}
