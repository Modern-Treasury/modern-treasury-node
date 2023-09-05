// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as API from './index';
import { Page, PageParams } from 'modern-treasury/pagination';

export class PaymentFlows extends APIResource {
  /**
   * create payment_flow
   */
  create(params: PaymentFlowCreateParams, options?: Core.RequestOptions): Core.APIPromise<PaymentFlow> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this.post('/api/payment_flows', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * get payment_flow
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<PaymentFlow> {
    return this.get(`/api/payment_flows/${id}`, options);
  }

  /**
   * update payment_flow
   */
  update(
    id: string,
    params: PaymentFlowUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PaymentFlow> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this.patch(`/api/payment_flows/${id}`, {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * list payment_flows
   */
  list(
    query?: PaymentFlowListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaymentFlowsPage, PaymentFlow>;
  list(options?: Core.RequestOptions): Core.PagePromise<PaymentFlowsPage, PaymentFlow>;
  list(
    query: PaymentFlowListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaymentFlowsPage, PaymentFlow> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/api/payment_flows', PaymentFlowsPage, { query, ...options });
  }
}

export class PaymentFlowsPage extends Page<PaymentFlow> {}
// alias so we can export it in the namespace
type _PaymentFlowsPage = PaymentFlowsPage;

export interface PaymentFlow {
  id?: string;

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

export namespace PaymentFlows {
  export import PaymentFlow = API.PaymentFlow;
  export type PaymentFlowsPage = _PaymentFlowsPage;
  export import PaymentFlowCreateParams = API.PaymentFlowCreateParams;
  export import PaymentFlowUpdateParams = API.PaymentFlowUpdateParams;
  export import PaymentFlowListParams = API.PaymentFlowListParams;
}
