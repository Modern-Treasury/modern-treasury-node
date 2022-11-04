// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class Reversals extends APIResource {
  list(
    paymentOrderId: string,
    query?: ReversalListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ReversalsPage>;
  list(paymentOrderId: string, options?: Core.RequestOptions): Core.PagePromise<ReversalsPage>;
  list(
    paymentOrderId: string,
    query: ReversalListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ReversalsPage> {
    if (isRequestOptions(query)) {
      return this.list(paymentOrderId, {}, query);
    }

    return this.getAPIList(`/api/payment_orders/${paymentOrderId}/reversals`, ReversalsPage, {
      query,
      ...options,
    });
  }
}

export class ReversalsPage extends Page<Reversal> {}

export interface Reversal {
  created_at: string;

  id: string;

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
   * The ID of the relevant Payment Order.
   */
  payment_order_id: string | null;

  /**
   * The reason for the reversal.
   */
  reason:
    | 'duplicate'
    | 'incorrect_amount'
    | 'incorrect_receiving_account'
    | 'date_earlier_than_intended'
    | 'date_later_than_intended';

  /**
   * The current status of the reversal.
   */
  status: 'completed' | 'failed' | 'pending' | 'processing' | 'returned' | 'sent';

  updated_at: string;
}

export interface ReversalListParams extends PageParams {}
