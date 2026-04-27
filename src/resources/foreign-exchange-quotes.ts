// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ForeignExchangeQuotes extends APIResource {
  /**
   * create foreign_exchange_quote
   */
  create(body: ForeignExchangeQuoteCreateParams, options?: RequestOptions): APIPromise<ForeignExchangeQuote> {
    return this._client.post('/api/foreign_exchange_quotes', { body, ...options });
  }

  /**
   * get foreign_exchange_quote
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ForeignExchangeQuote> {
    return this._client.get(path`/api/foreign_exchange_quotes/${id}`, options);
  }

  /**
   * list foreign_exchange_quotes
   */
  list(
    query: ForeignExchangeQuoteListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ForeignExchangeQuotesPage, ForeignExchangeQuote> {
    return this._client.getAPIList('/api/foreign_exchange_quotes', Page<ForeignExchangeQuote>, {
      query,
      ...options,
    });
  }
}

export type ForeignExchangeQuotesPage = Page<ForeignExchangeQuote>;

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
  foreign_exchange_rate: Shared.ForeignExchangeRate;

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
  metadata: { [key: string]: string };

  object: string;

  updated_at: string;

  /**
   * This vendor assigned ID for this quote.
   */
  vendor_id?: string;
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
  metadata?: { [key: string]: string };

  /**
   * Currency to convert the `base_currency` to, often called the "buy" currency.
   */
  target_currency?: string;
}

export declare namespace ForeignExchangeQuotes {
  export {
    type ForeignExchangeQuote as ForeignExchangeQuote,
    type ForeignExchangeQuotesPage as ForeignExchangeQuotesPage,
    type ForeignExchangeQuoteCreateParams as ForeignExchangeQuoteCreateParams,
    type ForeignExchangeQuoteListParams as ForeignExchangeQuoteListParams,
  };
}
