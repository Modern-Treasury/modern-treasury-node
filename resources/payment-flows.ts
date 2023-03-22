// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class PaymentFlows extends APIResource {
  /**
   * create payment_flow
   */
  create(
    body: PaymentFlowCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<PaymentFlow>> {
    return this.post('/api/payment_flows', { body, ...options });
  }

  /**
   * get payment_flow
   */
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<PaymentFlow>> {
    return this.get(`/api/payment_flows/${id}`, options);
  }

  /**
   * update payment_flow
   */
  update(
    id: string,
    body: PaymentFlowUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<PaymentFlow>> {
    return this.patch(`/api/payment_flows/${id}`, { body, ...options });
  }

  /**
   * list payment_flows
   */
  list(query?: PaymentFlowListParams, options?: Core.RequestOptions): Core.PagePromise<PaymentFlowsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<PaymentFlowsPage>;
  list(
    query: PaymentFlowListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaymentFlowsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/api/payment_flows', PaymentFlowsPage, { query, ...options });
  }
}

export class PaymentFlowsPage extends Page<PaymentFlow> {}

export interface PaymentFlow {
  /**
   * Value in specified currency's smallest unit. e.g. $10 would be represented
   * as 1000. Can be any integer up to 36 digits.
   */
  amount?: number;

  /**
   * The client token of the payment flow. This token can be used to embed a payment
   * workflow in your client-side application.
   */
  client_token?: string;

  /**
   * The ID of a counterparty associated with the payment. As part of the payment
   * workflow an external account will be associated with this counterparty.
   */
  counterparty_id?: string | null;

  created_at?: string;

  /**
   * The currency of the payment.
   */
  currency?: string;

  /**
   * Describes the direction money is flowing in the transaction. Can only be
   * `debit`. A `debit` pulls money from someone else's account to your own.
   */
  direction?: 'credit' | 'debit';

  id?: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode?: boolean;

  object?: string;

  /**
   * The ID of one of your organization's internal accounts.
   */
  originating_account_id?: string | null;

  /**
   * If present, the ID of the payment order created using this flow.
   */
  payment_order_id?: string | null;

  /**
   * If present, the ID of the external account created using this flow.
   */
  receiving_account_id?: string | null;

  /**
   * The current status of the payment flow. One of `pending`, `completed`,
   * `expired`, or `cancelled`.
   */
  status?: 'cancelled' | 'completed' | 'expired' | 'pending';

  updated_at?: string;
}

export interface PaymentFlowCreateParams {
  /**
   * Required. Value in specified currency's smallest unit. e.g. $10 would be
   * represented as 1000. Can be any integer up to 36 digits.
   */
  amount: number;

  /**
   * Required. The ID of a counterparty associated with the payment. As part of the
   * payment workflow an external account will be associated with this model.
   */
  counterparty_id: string;

  /**
   * Required. The currency of the payment.
   */
  currency: string;

  /**
   * Required. Describes the direction money is flowing in the transaction. Can only
   * be `debit`. A `debit` pulls money from someone else's account to your own.
   */
  direction: 'credit' | 'debit';

  /**
   * Required. The ID of one of your organization's internal accounts.
   */
  originating_account_id: string;
}

export interface PaymentFlowUpdateParams {
  /**
   * Required. The updated status of the payment flow. Can only be used to mark a
   * flow as `cancelled`.
   */
  status: 'cancelled';
}

export interface PaymentFlowListParams extends PageParams {
  client_token?: string;

  counterparty_id?: string;

  originating_account_id?: string;

  payment_order_id?: string;

  receiving_account_id?: string;

  status?: string;
}
