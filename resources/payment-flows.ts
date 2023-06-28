// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as API from './';
import { Page, PageParams } from '~/pagination';

export class PaymentFlows extends APIResource {
  /**
   * create payment_flow
   */
  create(
    params: PaymentFlowCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<PaymentFlow>> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this.post('/api/payment_flows', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey || '', ...options?.headers },
    });
  }

  /**
   * get payment_flow
   */
  retrieve(
    id: string,
    query?: PaymentFlowRetrieveParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<PaymentFlow>>;
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<PaymentFlow>>;
  retrieve(
    id: string,
    query: PaymentFlowRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<PaymentFlow>> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    const { 'Idempotency-Key': idempotencyKey } = query;
    return this.get(`/api/payment_flows/${id}`, {
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey || '', ...options?.headers },
    });
  }

  /**
   * update payment_flow
   */
  update(
    id: string,
    params: PaymentFlowUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<PaymentFlow>> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this.patch(`/api/payment_flows/${id}`, {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey || '', ...options?.headers },
    });
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
   * Body param: Required. Value in specified currency's smallest unit. e.g. $10
   * would be represented as 1000. Can be any integer up to 36 digits.
   */
  amount: number;

  /**
   * Body param: Required. The ID of a counterparty associated with the payment. As
   * part of the payment workflow an external account will be associated with this
   * model.
   */
  counterparty_id: string;

  /**
   * Body param: Required. The currency of the payment.
   */
  currency: string;

  /**
   * Body param: Required. Describes the direction money is flowing in the
   * transaction. Can only be `debit`. A `debit` pulls money from someone else's
   * account to your own.
   */
  direction: 'credit' | 'debit';

  /**
   * Body param: Required. The ID of one of your organization's internal accounts.
   */
  originating_account_id: string;

  /**
   * Header param: This key should be something unique, preferably something like an
   * UUID.
   */
  'Idempotency-Key'?: string;
}

export interface PaymentFlowRetrieveParams {
  /**
   * This key should be something unique, preferably something like an UUID.
   */
  'Idempotency-Key'?: string;
}

export interface PaymentFlowUpdateParams {
  /**
   * Body param: Required. The updated status of the payment flow. Can only be used
   * to mark a flow as `cancelled`.
   */
  status: 'cancelled';

  /**
   * Header param: This key should be something unique, preferably something like an
   * UUID.
   */
  'Idempotency-Key'?: string;
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
  export import PaymentFlowsPage = API.PaymentFlowsPage;
  export import PaymentFlowCreateParams = API.PaymentFlowCreateParams;
  export import PaymentFlowRetrieveParams = API.PaymentFlowRetrieveParams;
  export import PaymentFlowUpdateParams = API.PaymentFlowUpdateParams;
  export import PaymentFlowListParams = API.PaymentFlowListParams;
}
