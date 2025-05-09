// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as LineItemsAPI from './line-items';
import {
  LineItemCreateParams,
  LineItemListParams,
  LineItems,
  TransactionLineItem,
  TransactionLineItemsPage,
} from './line-items';
import { Page, type PageParams } from '../../pagination';

export class Transactions extends APIResource {
  lineItems: LineItemsAPI.LineItems = new LineItemsAPI.LineItems(this._client);

  /**
   * create transaction
   *
   * @example
   * ```ts
   * const transaction = await client.transactions.create({
   *   amount: 0,
   *   as_of_date: '2019-12-27',
   *   direction: 'direction',
   *   internal_account_id:
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   vendor_code: 'vendor_code',
   *   vendor_code_type: 'vendor_code_type',
   * });
   * ```
   */
  create(params: TransactionCreateParams, options?: Core.RequestOptions): Core.APIPromise<Transaction> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post('/api/transactions', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * Get details on a single transaction.
   *
   * @example
   * ```ts
   * const transaction = await client.transactions.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Transaction> {
    return this._client.get(`/api/transactions/${id}`, options);
  }

  /**
   * Update a single transaction.
   *
   * @example
   * ```ts
   * const transaction = await client.transactions.update('id');
   * ```
   */
  update(
    id: string,
    body?: TransactionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Transaction>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<Transaction>;
  update(
    id: string,
    body: TransactionUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Transaction> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.patch(`/api/transactions/${id}`, { body, ...options });
  }

  /**
   * Get a list of all transactions.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const transaction of client.transactions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: TransactionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransactionsPage, Transaction>;
  list(options?: Core.RequestOptions): Core.PagePromise<TransactionsPage, Transaction>;
  list(
    query: TransactionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransactionsPage, Transaction> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/transactions', TransactionsPage, { query, ...options });
  }

  /**
   * delete transaction
   *
   * @example
   * ```ts
   * await client.transactions.del('id');
   * ```
   */
  del(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/transactions/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export class TransactionsPage extends Page<Transaction> {}

export interface Transaction {
  id: string;

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

  /**
   * The timezone in which the `as_of_time` is represented. Can be `null` if the bank
   * does not provide timezone info.
   */
  as_of_timezone: string | null;

  created_at: string;

  /**
   * Currency that this transaction is denominated in.
   */
  currency: Shared.Currency;

  /**
   * An object containing key-value pairs, each with a custom identifier as the key
   * and a string value.
   */
  custom_identifiers: Record<string, string>;

  /**
   * Either `credit` or `debit`.
   */
  direction: string;

  discarded_at: string | null;

  /**
   * Associated serialized foreign exchange rate information.
   */
  foreign_exchange_rate: Transaction.ForeignExchangeRate | null;

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
   * The type of the transaction. Examples could be
   * `card, `ach`, `wire`, `check`, `rtp`, `book`, or `sen`.
   */
  type:
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
    | 'other';

  updated_at: string;

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
  vendor_code_type:
    | 'bai2'
    | 'banking_circle'
    | 'bankprov'
    | 'bnk_dev'
    | 'cleartouch'
    | 'column'
    | 'cross_river'
    | 'currencycloud'
    | 'dc_bank'
    | 'dwolla'
    | 'evolve'
    | 'goldman_sachs'
    | 'iso20022'
    | 'jpmc'
    | 'mx'
    | 'paypal'
    | 'plaid'
    | 'pnc'
    | 'rspec_vendor'
    | 'signet'
    | 'silvergate'
    | 'swift'
    | 'us_bank'
    | 'user'
    | null;

  /**
   * An identifier given to this transaction by the bank, often `null`.
   */
  vendor_customer_id: string | null;

  /**
   * An identifier given to this transaction by the bank.
   */
  vendor_id: string | null;

  /**
   * This field contains additional information that the bank provided about the
   * transaction. This is structured data. Some of the data in here might overlap
   * with what is in the `vendor_description`. For example, the OBI could be a part
   * of the vendor description, and it would also be included in here. The attributes
   * that are passed through the details field will vary based on your banking
   * partner. Currently, the following keys may be in the details object:
   * `originator_name`, `originator_to_beneficiary_information`.
   */
  details?: Record<string, string>;

  /**
   * The transaction detail text that often appears in on your bank statement and in
   * your banking portal.
   */
  vendor_description?: string | null;
}

export namespace Transaction {
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
    base_currency: Shared.Currency;

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
    target_currency: Shared.Currency;

    /**
     * The whole number component of the rate. The decimal is calculated as `value` /
     * (10 ^ `exponent`).
     */
    value: number;
  }
}

export interface TransactionCreateParams {
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
  metadata?: Record<string, string>;

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
    | 'other'
    | null;

  /**
   * The transaction detail text that often appears in on your bank statement and in
   * your banking portal.
   */
  vendor_description?: string | null;
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

  /**
   * Filters for transactions including the queried vendor id (an identifier given to
   * transactions by the bank).
   */
  vendor_id?: string;

  virtual_account_id?: string;
}

Transactions.TransactionsPage = TransactionsPage;
Transactions.LineItems = LineItems;
Transactions.TransactionLineItemsPage = TransactionLineItemsPage;

export declare namespace Transactions {
  export {
    type Transaction as Transaction,
    TransactionsPage as TransactionsPage,
    type TransactionCreateParams as TransactionCreateParams,
    type TransactionUpdateParams as TransactionUpdateParams,
    type TransactionListParams as TransactionListParams,
  };

  export {
    LineItems as LineItems,
    type TransactionLineItem as TransactionLineItem,
    TransactionLineItemsPage as TransactionLineItemsPage,
    type LineItemCreateParams as LineItemCreateParams,
    type LineItemListParams as LineItemListParams,
  };
}
