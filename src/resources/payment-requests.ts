// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PaymentRequests extends APIResource {
  /**
   * Lists incoming drawdown requests.
   */
  list(
    query: PaymentRequestListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PaymentRequestsPage, PaymentRequest> {
    return this._client.getAPIList('/api/payment_requests', Page<PaymentRequest>, { query, ...options });
  }

  /**
   * Gets an incoming drawdown request.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PaymentRequest> {
    return this._client.get(path`/api/payment_requests/${id}`, options);
  }

  /**
   * Approves or declines a pending drawdown request.
   */
  update(id: string, body: PaymentRequestUpdateParams, options?: RequestOptions): APIPromise<PaymentRequest> {
    return this._client.patch(path`/api/payment_requests/${id}`, { body, ...options });
  }

  /**
   * Simulates receiving a wire drawdown request in sandbox.
   */
  simulate(body: PaymentRequestSimulateParams, options?: RequestOptions): APIPromise<PaymentRequest> {
    return this._client.post('/api/simulations/payment_requests', { body, ...options });
  }

  /**
   * Simulates cancellation of a pending wire drawdown request in sandbox.
   */
  cancelSimulation(
    id: string,
    body: PaymentRequestCancelSimulationParams,
    options?: RequestOptions,
  ): APIPromise<PaymentRequest> {
    return this._client.patch(path`/api/simulations/payment_requests/${id}`, { body, ...options });
  }
}

export type PaymentRequestsPage = Page<PaymentRequest>;

export interface PaymentRequest {
  id: string;

  /**
   * Value in specified currency's smallest unit. e.g. $10 would be represented
   * as 1000.
   */
  amount: number;

  created_at: string;

  /**
   * Three-letter ISO currency code.
   */
  currency: Shared.Currency;

  description: string | null;

  internal_account_id: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  payment_type: 'wire' | 'rtp';

  requesting_party_name: string;

  requesting_routing_number: string;

  status: 'approved' | 'cancelled' | 'declined' | 'pending';

  updated_at: string;
}

export interface PaymentRequestListParams extends PageParams {
  id?: string;

  created_at_end?: string;

  created_at_start?: string;

  internal_account_id?: string;

  payment_type?: 'wire' | 'rtp';

  status?: 'approved' | 'cancelled' | 'declined' | 'pending';
}

export interface PaymentRequestUpdateParams {
  /**
   * Approve the request and create a payment order, or decline the request.
   */
  status: 'approved' | 'declined';
}

export interface PaymentRequestSimulateParams {
  /**
   * Value in specified currency's smallest unit. e.g. $10 would be represented
   * as 1000.
   */
  amount: number;

  internal_account_id: string;

  requesting_account_number: string;

  requesting_party_name: string;

  requesting_routing_number: string;

  /**
   * An optional description for internal use.
   */
  description?: string | null;
}

export interface PaymentRequestCancelSimulationParams {
  status: 'cancelled';
}

export declare namespace PaymentRequests {
  export {
    type PaymentRequest as PaymentRequest,
    type PaymentRequestsPage as PaymentRequestsPage,
    type PaymentRequestListParams as PaymentRequestListParams,
    type PaymentRequestUpdateParams as PaymentRequestUpdateParams,
    type PaymentRequestSimulateParams as PaymentRequestSimulateParams,
    type PaymentRequestCancelSimulationParams as PaymentRequestCancelSimulationParams,
  };
}
