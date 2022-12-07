// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';
import * as Shared from '~/resources/shared';
import * as VirtualAccounts from '~/resources/virtual-accounts';

export class IncomingPaymentDetails extends APIResource {
  /**
   * Get an existing Incoming Payment Detail.
   */
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<IncomingPaymentDetail>> {
    return this.get(`/api/incoming_payment_details/${id}`, options);
  }

  /**
   * Update an existing Incoming Payment Detail.
   */
  update(
    id: string,
    body?: IncomingPaymentDetailUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<IncomingPaymentDetail>>;
  update(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<IncomingPaymentDetail>>;
  update(
    id: string,
    body: IncomingPaymentDetailUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<IncomingPaymentDetail>> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }

    return this.patch(`/api/incoming_payment_details/${id}`, { body, ...options });
  }

  /**
   * Get a list of Incoming Payment Details.
   */
  list(
    query?: IncomingPaymentDetailListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<IncomingPaymentDetailsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<IncomingPaymentDetailsPage>;
  list(
    query: IncomingPaymentDetailListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<IncomingPaymentDetailsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/api/incoming_payment_details', IncomingPaymentDetailsPage, {
      query,
      ...options,
    });
  }

  /**
   * Simulate Incoming Payment Detail
   */
  createAsync(body?: IncomingPaymentDetailCreateAsyncParams, options?: Core.RequestOptions): Promise<void>;
  createAsync(options?: Core.RequestOptions): Promise<void>;
  createAsync(
    body: IncomingPaymentDetailCreateAsyncParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<void> {
    if (isRequestOptions(body)) {
      return this.createAsync({}, body);
    }

    return this.post('/api/simulations/incoming_payment_details/create_async', {
      body,
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }
}

export class IncomingPaymentDetailsPage extends Page<IncomingPaymentDetail> {}

export interface IncomingPaymentDetail {
  /**
   * Value in specified currency's smallest unit. e.g. $10 would be represented
   * as 1000.
   */
  amount: number;

  /**
   * The date on which the corresponding transaction will occur.
   */
  as_of_date: string;

  created_at: string;

  /**
   * The currency of the incoming payment detail.
   */
  currency: Shared.Currency;

  /**
   * The raw data from the payment pre-notification file that we get from the bank.
   */
  data: unknown;

  /**
   * One of `credit` or `debit`.
   */
  direction: 'credit' | 'debit';

  id: string;

  /**
   * The ID of the Internal Account for the incoming payment detail. This is always
   * present.
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
   * The current status of the incoming payment order. One of `pending`, `completed`,
   * or `returned`.
   */
  status: 'completed' | 'pending' | 'returned';

  /**
   * The ID of the reconciled Transaction or `null`.
   */
  transaction_id: string | null;

  /**
   * The ID of the reconciled Transaction Line Item or `null`.
   */
  transaction_line_item_id: string | null;

  /**
   * One of: `ach`, `wire`, `check`, `rtp`, `sepa`, `signet`.
   */
  type: 'ach' | 'book' | 'check' | 'eft' | 'interac' | 'rtp' | 'sepa' | 'signet' | 'wire';

  updated_at: string;

  /**
   * The identifier of the vendor bank.
   */
  vendor_id: string | null;

  /**
   * If the incoming payment detail is in a virtual account, the serialized virtual
   * account object.
   */
  virtual_account: VirtualAccounts.VirtualAccount | null;

  /**
   * If the incoming payment detail is in a virtual account, the ID of the Virtual
   * Account.
   */
  virtual_account_id: string | null;
}

export interface IncomingPaymentDetailUpdateParams {
  /**
   * Additional data in the form of key-value pairs. Pairs can be removed by passing
   * an empty string or `null` as the value.
   */
  metadata?: Record<string, string>;
}

export interface IncomingPaymentDetailListParams extends PageParams {
  /**
   * Filters incoming payment details with an as_of_date starting on or before the
   * specified date (YYYY-MM-DD).
   */
  as_of_date_end?: string;

  /**
   * Filters incoming payment details with an as_of_date starting on or after the
   * specified date (YYYY-MM-DD).
   */
  as_of_date_start?: string;

  /**
   * One of `credit` or `debit`.
   */
  direction?: 'credit' | 'debit';

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;

  /**
   * The current status of the incoming payment order. One of `pending`, `completed`,
   * or `returned`.
   */
  status?: 'completed' | 'pending' | 'returned';

  /**
   * One of: `ach`, `wire`, `check`, `rtp`, `sepa`, `signet`.
   */
  type?: 'ach' | 'book' | 'check' | 'eft' | 'interac' | 'rtp' | 'sepa' | 'signet' | 'wire';

  /**
   * If the incoming payment detail is in a virtual account, the ID of the Virtual
   * Account.
   */
  virtual_account_id?: string;
}

export interface IncomingPaymentDetailCreateAsyncParams {
  /**
   * Value in specified currency's smallest unit. e.g. $10 would be represented
   * as 1000.
   */
  amount?: number;

  /**
   * Defaults to today.
   */
  as_of_date?: string | null;

  /**
   * Defaults to the currency of the originating account.
   */
  currency?: Shared.Currency;

  /**
   * One of `credit`, `debit`.
   */
  direction?: 'credit' | 'debit';

  /**
   * The ID of one of your internal accounts.
   */
  internal_account_id?: string;

  /**
   * One of `ach`, `wire`, `check`.
   */
  type?: 'ach' | 'book' | 'check' | 'eft' | 'interac' | 'rtp' | 'sepa' | 'signet' | 'wire';

  /**
   * An optional parameter to associate the incoming payment detail to a virtual
   * account.
   */
  virtual_account_id?: string | null;
}
