// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PaymentActions extends APIResource {
  /**
   * Create a payment action.
   */
  create(body: PaymentActionCreateParams, options?: RequestOptions): APIPromise<PaymentActionCreateResponse> {
    return this._client.post('/api/payment_actions', { body, ...options });
  }

  /**
   * Get details on a single payment action.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PaymentActionRetrieveResponse> {
    return this._client.get(path`/api/payment_actions/${id}`, options);
  }

  /**
   * Update a single payment action.
   */
  update(
    id: string,
    body: PaymentActionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PaymentActionUpdateResponse> {
    return this._client.patch(path`/api/payment_actions/${id}`, { body, ...options });
  }

  /**
   * Get a list of all payment actions.
   */
  list(
    query: PaymentActionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PaymentActionListResponsesPage, PaymentActionListResponse> {
    return this._client.getAPIList('/api/payment_actions', Page<PaymentActionListResponse>, {
      query,
      ...options,
    });
  }
}

export type PaymentActionListResponsesPage = Page<PaymentActionListResponse>;

export interface PaymentActionCreateResponse {
  id: string;

  /**
   * The ID of the associated actionable object.
   */
  actionable_id: string | null;

  /**
   * The type of the associated actionable object. One of `payment_order`,
   * `expected_payment`.
   */
  actionable_type: string | null;

  created_at: string;

  /**
   * The specifc details of the payment action based on type.
   */
  details: unknown;

  /**
   * The ID of the internal account associated with the payment action.
   */
  internal_account_id: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  /**
   * The current status of the payment action. One of `pending`, `processing`,
   * `sent`, `cancelled`, or `failed`.
   */
  status: string;

  /**
   * The type of the payment action. Determines the action to be taken.
   */
  type: string;

  updated_at: string;
}

export interface PaymentActionRetrieveResponse {
  id: string;

  /**
   * The ID of the associated actionable object.
   */
  actionable_id: string | null;

  /**
   * The type of the associated actionable object. One of `payment_order`,
   * `expected_payment`.
   */
  actionable_type: string | null;

  created_at: string;

  /**
   * The specifc details of the payment action based on type.
   */
  details: unknown;

  /**
   * The ID of the internal account associated with the payment action.
   */
  internal_account_id: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  /**
   * The current status of the payment action. One of `pending`, `processing`,
   * `sent`, `cancelled`, or `failed`.
   */
  status: string;

  /**
   * The type of the payment action. Determines the action to be taken.
   */
  type: string;

  updated_at: string;
}

export interface PaymentActionUpdateResponse {
  id: string;

  /**
   * The ID of the associated actionable object.
   */
  actionable_id: string | null;

  /**
   * The type of the associated actionable object. One of `payment_order`,
   * `expected_payment`.
   */
  actionable_type: string | null;

  created_at: string;

  /**
   * The specifc details of the payment action based on type.
   */
  details: unknown;

  /**
   * The ID of the internal account associated with the payment action.
   */
  internal_account_id: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  /**
   * The current status of the payment action. One of `pending`, `processing`,
   * `sent`, `cancelled`, or `failed`.
   */
  status: string;

  /**
   * The type of the payment action. Determines the action to be taken.
   */
  type: string;

  updated_at: string;
}

export interface PaymentActionListResponse {
  id: string;

  /**
   * The ID of the associated actionable object.
   */
  actionable_id: string | null;

  /**
   * The type of the associated actionable object. One of `payment_order`,
   * `expected_payment`.
   */
  actionable_type: string | null;

  created_at: string;

  /**
   * The specifc details of the payment action based on type.
   */
  details: unknown;

  /**
   * The ID of the internal account associated with the payment action.
   */
  internal_account_id: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  /**
   * The current status of the payment action. One of `pending`, `processing`,
   * `sent`, `cancelled`, or `failed`.
   */
  status: string;

  /**
   * The type of the payment action. Determines the action to be taken.
   */
  type: string;

  updated_at: string;
}

export interface PaymentActionCreateParams {
  /**
   * Required. The type of the payment action. Determines the action to be taken.
   */
  type: string;

  /**
   * Optional. The ID of the associated actionable object.
   */
  actionable_id?: string;

  /**
   * Optional. The type of the associated actionable object. One of `payment_order`,
   * `expected_payment`. Required if `actionable_id` is passed.
   */
  actionable_type?: string;

  /**
   * Optional. The specifc details of the payment action based on type.
   */
  details?: unknown;

  /**
   * Optional. The ID of one of your organization's internal accounts. Required if
   * `actionable_id` is not passed.
   */
  internal_account_id?: string;
}

export interface PaymentActionUpdateParams {
  /**
   * Optional. Set the status of the payment action to `cancelled` to cancel the
   * payment action. This will only work if the payment action is in a `pending`
   * state.
   */
  status: 'pending' | 'processable' | 'processing' | 'sent' | 'failed' | 'cancelled';
}

export interface PaymentActionListParams extends PageParams {
  /**
   * The ID of the associated actionable object.
   */
  actionable_id?: string;

  /**
   * The type of the associated actionable object. One of `payment_order`,
   * `expected_payment`.
   */
  actionable_type?: string;

  /**
   * Filter by `created_at` using comparison operators like `gt` (>), `gte` (>=),
   * `lt` (<), `lte` (<=), or `eq` (=) to filter by the created at timestamp. For
   * example, `created_at[gte]=2024-01-01T00:00:00Z`
   */
  created_at?: PaymentActionListParams.CreatedAt;

  /**
   * The ID of one of your internal accounts.
   */
  internal_account_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: { [key: string]: string };

  /**
   * Filter by payment actions of a specific status.
   */
  status?: 'pending' | 'processable' | 'processing' | 'sent' | 'failed' | 'cancelled';

  /**
   * The type of payment action.
   */
  type?: 'evolve_non_processing_transaction' | 'control_file' | 'stop' | 'issue';
}

export namespace PaymentActionListParams {
  /**
   * Filter by `created_at` using comparison operators like `gt` (>), `gte` (>=),
   * `lt` (<), `lte` (<=), or `eq` (=) to filter by the created at timestamp. For
   * example, `created_at[gte]=2024-01-01T00:00:00Z`
   */
  export interface CreatedAt {
    eq?: string;

    gt?: string;

    gte?: string;

    lt?: string;

    lte?: string;
  }
}

export declare namespace PaymentActions {
  export {
    type PaymentActionCreateResponse as PaymentActionCreateResponse,
    type PaymentActionRetrieveResponse as PaymentActionRetrieveResponse,
    type PaymentActionUpdateResponse as PaymentActionUpdateResponse,
    type PaymentActionListResponse as PaymentActionListResponse,
    type PaymentActionListResponsesPage as PaymentActionListResponsesPage,
    type PaymentActionCreateParams as PaymentActionCreateParams,
    type PaymentActionUpdateParams as PaymentActionUpdateParams,
    type PaymentActionListParams as PaymentActionListParams,
  };
}
