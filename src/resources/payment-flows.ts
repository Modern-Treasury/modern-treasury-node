// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PaymentFlows extends APIResource {
  /**
   * create payment_flow
   */
  create(body: PaymentFlowCreateParams, options?: RequestOptions): APIPromise<PaymentFlow> {
    return this._client.post('/api/payment_flows', { body, ...options });
  }

  /**
   * get payment_flow
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PaymentFlow> {
    return this._client.get(path`/api/payment_flows/${id}`, options);
  }

  /**
   * update payment_flow
   */
  update(id: string, body: PaymentFlowUpdateParams, options?: RequestOptions): APIPromise<PaymentFlow> {
    return this._client.patch(path`/api/payment_flows/${id}`, { body, ...options });
  }

  /**
   * list payment_flows
   */
  list(
    query: PaymentFlowListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PaymentFlowsPage, PaymentFlow> {
    return this._client.getAPIList('/api/payment_flows', Page<PaymentFlow>, { query, ...options });
  }
}

export type PaymentFlowsPage = Page<PaymentFlow>;

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

export declare namespace PaymentFlows {
  export {
    type PaymentFlow as PaymentFlow,
    type PaymentFlowsPage as PaymentFlowsPage,
    type PaymentFlowCreateParams as PaymentFlowCreateParams,
    type PaymentFlowUpdateParams as PaymentFlowUpdateParams,
    type PaymentFlowListParams as PaymentFlowListParams,
  };
}
