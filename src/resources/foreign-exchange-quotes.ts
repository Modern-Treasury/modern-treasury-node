// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ForeignExchangeQuotesAPI from './foreign-exchange-quotes';
import * as Shared from './shared';
import { Page, type PageParams } from '../pagination';

export class ForeignExchangeQuotes extends APIResource {
  /**
   * create foreign_exchange_quote
   */
  create(
    params: ForeignExchangeQuoteCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ForeignExchangeQuote> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post('/api/foreign_exchange_quotes', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * get foreign_exchange_quote
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ForeignExchangeQuote> {
    return this._client.get(`/api/foreign_exchange_quotes/${id}`, options);
  }

  /**
   * list foreign_exchange_quotes
   */
  list(
    query?: ForeignExchangeQuoteListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ForeignExchangeQuotesPage, ForeignExchangeQuote>;
  list(options?: Core.RequestOptions): Core.PagePromise<ForeignExchangeQuotesPage, ForeignExchangeQuote>;
  list(
    query: ForeignExchangeQuoteListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ForeignExchangeQuotesPage, ForeignExchangeQuote> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/foreign_exchange_quotes', ForeignExchangeQuotesPage, {
      query,
      ...options,
    });
  }
}

export class ForeignExchangeQuotesPage extends Page<ForeignExchangeQuote> {}

export interface ForeignExchangeQuote {
  id: string;

  created_at: string;

  /**
   * The timestamp until when the quoted rate is valid.
   */
  effective_at: string;

  /**
   * The timestamp until which the quote must be booked by.
   */
  expires_at: string;

  /**
   * Either `fixed_to_variable` if the `base_amount` was specified, or
   * `variable_to_fixed` if the `target_amount` was specified when requesting the
   * quote.
   */
  foreign_exchange_indicator: string;

  /**
   * The serialized rate information represented by this quote.
   */
  foreign_exchange_rate: ForeignExchangeQuote.ForeignExchangeRate;

  /**
   * The ID for the `InternalAccount` this quote is associated with.
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

  updated_at: string;

  /**
   * This vendor assigned ID for this quote.
   */
  vendor_id?: string;
}

export namespace ForeignExchangeQuote {
  /**
   * The serialized rate information represented by this quote.
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

export interface ForeignExchangeQuoteCreateParams {
  /**
   * The ID for the `InternalAccount` this quote is associated with.
   */
  internal_account_id: string;

  /**
   * Currency to convert the `base_currency` to, often called the "buy" currency.
   */
  target_currency: Shared.Currency;

  /**
   * Amount in the lowest denomination of the `base_currency` to convert, often
   * called the "sell" amount.
   */
  base_amount?: number;

  /**
   * Currency to convert, often called the "sell" currency.
   */
  base_currency?: Shared.Currency;

  /**
   * The timestamp until when the quoted rate is valid.
   */
  effective_at?: string;

  /**
   * Amount in the lowest denomination of the `target_currency`, often called the
   * "buy" amount.
   */
  target_amount?: number;
}

export interface ForeignExchangeQuoteListParams extends PageParams {
  /**
   * Currency to convert, often called the "sell" currency.
   */
  base_currency?: string;

  /**
   * An inclusive upper bound for searching effective_at
   */
  effective_at_end?: string;

  /**
   * An inclusive lower bound for searching effective_at
   */
  effective_at_start?: string;

  /**
   * The timestamp until which the quote must be booked by.
   */
  expires_at?: string;

  /**
   * The ID for the `InternalAccount` this quote is associated with.
   */
  internal_account_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;

  /**
   * Currency to convert the `base_currency` to, often called the "buy" currency.
   */
  target_currency?: string;
}

export namespace ForeignExchangeQuotes {
  export import ForeignExchangeQuote = ForeignExchangeQuotesAPI.ForeignExchangeQuote;
  export import ForeignExchangeQuotesPage = ForeignExchangeQuotesAPI.ForeignExchangeQuotesPage;
  export import ForeignExchangeQuoteCreateParams = ForeignExchangeQuotesAPI.ForeignExchangeQuoteCreateParams;
  export import ForeignExchangeQuoteListParams = ForeignExchangeQuotesAPI.ForeignExchangeQuoteListParams;
}
