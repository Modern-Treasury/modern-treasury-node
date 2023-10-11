// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as IncomingPaymentDetailsAPI from 'modern-treasury/resources/incoming-payment-details';
import * as Shared from 'modern-treasury/resources/shared';
import * as VirtualAccountsAPI from 'modern-treasury/resources/virtual-accounts';
import { Page, type PageParams } from 'modern-treasury/pagination';

export class IncomingPaymentDetails extends APIResource {
  /**
   * Get an existing Incoming Payment Detail.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<IncomingPaymentDetail> {
    return this.get(`/api/incoming_payment_details/${id}`, options);
  }

  /**
   * Update an existing Incoming Payment Detail.
   */
  update(
    id: string,
    body?: IncomingPaymentDetailUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncomingPaymentDetail>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<IncomingPaymentDetail>;
  update(
    id: string,
    body: IncomingPaymentDetailUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IncomingPaymentDetail> {
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
  ): Core.PagePromise<IncomingPaymentDetailsPage, IncomingPaymentDetail>;
  list(options?: Core.RequestOptions): Core.PagePromise<IncomingPaymentDetailsPage, IncomingPaymentDetail>;
  list(
    query: IncomingPaymentDetailListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<IncomingPaymentDetailsPage, IncomingPaymentDetail> {
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
  createAsync(
    params?: IncomingPaymentDetailCreateAsyncParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.AsyncResponse>;
  createAsync(options?: Core.RequestOptions): Core.APIPromise<Shared.AsyncResponse>;
  createAsync(
    params: IncomingPaymentDetailCreateAsyncParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.AsyncResponse> {
    if (isRequestOptions(params)) {
      return this.createAsync({}, params);
    }
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this.post('/api/simulations/incoming_payment_details/create_async', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }
}

export class IncomingPaymentDetailsPage extends Page<IncomingPaymentDetail> {}

export interface IncomingPaymentDetail {
  id: string;

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
  currency: Shared.Currency | null;

  /**
   * The raw data from the payment pre-notification file that we get from the bank.
   */
  data: Record<string, unknown>;

  /**
   * One of `credit` or `debit`.
   */
  direction: 'credit' | 'debit';

  /**
   * The ID of the Internal Account for the incoming payment detail. This is always
   * present.
   */
  internal_account_id: string;

  /**
   * The ID of the ledger transaction linked to the incoming payment detail or
   * `null`.
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
   * The last 4 digits of the originating account_number for the incoming payment
   * detail.
   */
  originating_account_number_safe: string | null;

  /**
   * The type of the originating account number for the incoming payment detail.
   */
  originating_account_number_type: 'clabe' | 'iban' | 'other' | 'pan' | 'wallet_address' | null;

  /**
   * The routing number of the originating account for the incoming payment detail.
   */
  originating_routing_number: string | null;

  /**
   * The type of the originating routing number for the incoming payment detail.
   */
  originating_routing_number_type:
    | 'aba'
    | 'au_bsb'
    | 'br_codigo'
    | 'ca_cpa'
    | 'chips'
    | 'cnaps'
    | 'gb_sort_code'
    | 'in_ifsc'
    | 'jp_zengin_code'
    | 'my_branch_code'
    | 'se_bankgiro_clearing_code'
    | 'swift'
    | null;

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
   * One of: `ach`, `book`, `check`, `eft`, `interac`, `rtp`, `sepa`, `signet`, or
   * `wire`.
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
  virtual_account: VirtualAccountsAPI.VirtualAccount | null;

  /**
   * If the incoming payment detail is in a virtual account, the ID of the Virtual
   * Account.
   */
  virtual_account_id: string | null;

  /**
   * The account number of the originating account for the incoming payment detail.
   */
  originating_account_number?: string | null;
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
   * One of: `ach`, `book`, `check`, `eft`, `interac`, `rtp`, `sepa`, `signet`, or
   * `wire`.
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
  currency?: Shared.Currency | null;

  /**
   * Defaults to a random description.
   */
  description?: string | null;

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

export namespace IncomingPaymentDetails {
  export type IncomingPaymentDetail = IncomingPaymentDetailsAPI.IncomingPaymentDetail;
  export import IncomingPaymentDetailsPage = IncomingPaymentDetailsAPI.IncomingPaymentDetailsPage;
  export type IncomingPaymentDetailUpdateParams = IncomingPaymentDetailsAPI.IncomingPaymentDetailUpdateParams;
  export type IncomingPaymentDetailListParams = IncomingPaymentDetailsAPI.IncomingPaymentDetailListParams;
  export type IncomingPaymentDetailCreateAsyncParams =
    IncomingPaymentDetailsAPI.IncomingPaymentDetailCreateAsyncParams;
}
