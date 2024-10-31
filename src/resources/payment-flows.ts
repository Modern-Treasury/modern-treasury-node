// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { Page, type PageParams } from '../pagination';

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
    return this._client.post('/api/payment_flows', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * get payment_flow
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<PaymentFlow> {
    return this._client.get(`/api/payment_flows/${id}`, options);
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
    return this._client.patch(`/api/payment_flows/${id}`, {
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
    return this._client.getAPIList('/api/payment_flows', PaymentFlowsPage, { query, ...options });
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
   * The due date for the flow. Can only be passed in when
   * `effective_date_selection_enabled` is `true`.
   */
  due_date?: string | null;

  /**
   * When `true`, your end-user can schedule the payment `effective_date` while
   * completing the pre-built UI.
   */
  effective_date_selection_enabled?: boolean;

  /**
   * When `verified` and `external_account_collection` is `enabled`, filters the list
   * of external accounts your end-user can select to those with a
   * `verification_status` of `verified`.
   */
  existing_external_accounts_filter?: 'verified' | null;

  /**
   * When `enabled`, your end-user can select from an existing external account when
   * completing the flow. When `disabled`, your end-user must add new payment details
   * when completing the flow.
   */
  external_account_collection?: 'disabled' | 'enabled';

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
   * This field is set after your end-user selects a payment date while completing
   * the pre-built UI. This field is always `null` unless
   * `effective_date_selection_enabled` is `true`.
   */
  selected_effective_date?: string | null;

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

  /**
   * Optional. Can only be passed in when `effective_date_selection_enabled` is
   * `true`. When set, the due date is shown to your end-user in the pre-built UI as
   * they are selecting a payment `effective_date`.
   */
  due_date?: string;
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

PaymentFlows.PaymentFlowsPage = PaymentFlowsPage;

export declare namespace PaymentFlows {
  export {
    type PaymentFlow as PaymentFlow,
    PaymentFlowsPage as PaymentFlowsPage,
    type PaymentFlowCreateParams as PaymentFlowCreateParams,
    type PaymentFlowUpdateParams as PaymentFlowUpdateParams,
    type PaymentFlowListParams as PaymentFlowListParams,
  };
}
