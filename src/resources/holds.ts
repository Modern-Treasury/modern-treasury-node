// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Holds extends APIResource {
  /**
   * Create a new hold
   */
  create(body: HoldCreateParams, options?: RequestOptions): APIPromise<HoldCreateResponse> {
    return this._client.post('/api/holds', { body, ...options });
  }

  /**
   * Get a specific hold
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<HoldRetrieveResponse> {
    return this._client.get(path`/api/holds/${id}`, options);
  }

  /**
   * Update a hold
   */
  update(id: string, body: HoldUpdateParams, options?: RequestOptions): APIPromise<HoldUpdateResponse> {
    return this._client.patch(path`/api/holds/${id}`, { body, ...options });
  }

  /**
   * Get a list of holds.
   */
  list(
    query: HoldListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<HoldListResponsesPage, HoldListResponse> {
    return this._client.getAPIList('/api/holds', Page<HoldListResponse>, { query, ...options });
  }
}

export type HoldListResponsesPage = Page<HoldListResponse>;

export interface HoldCreateResponse {
  id: string;

  created_at: string;

  /**
   * The type of object
   */
  object: 'hold';

  /**
   * The status of the hold
   */
  status: 'active' | 'resolved';

  /**
   * The ID of the target being held
   */
  target_id: string;

  /**
   * The type of target being held
   */
  target_type: 'payment_order';

  updated_at: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode?: boolean;

  /**
   * Additional metadata for the hold
   */
  metadata?: { [key: string]: string } | null;

  /**
   * The reason for the hold
   */
  reason?: string | null;

  /**
   * The resolution of the hold
   */
  resolution?: string | null;

  /**
   * When the hold was resolved
   */
  resolved_at?: string | null;
}

export interface HoldRetrieveResponse {
  id: string;

  created_at: string;

  /**
   * The type of object
   */
  object: 'hold';

  /**
   * The status of the hold
   */
  status: 'active' | 'resolved';

  /**
   * The ID of the target being held
   */
  target_id: string;

  /**
   * The type of target being held
   */
  target_type: 'payment_order';

  updated_at: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode?: boolean;

  /**
   * Additional metadata for the hold
   */
  metadata?: { [key: string]: string } | null;

  /**
   * The reason for the hold
   */
  reason?: string | null;

  /**
   * The resolution of the hold
   */
  resolution?: string | null;

  /**
   * When the hold was resolved
   */
  resolved_at?: string | null;
}

export interface HoldUpdateResponse {
  id: string;

  created_at: string;

  /**
   * The type of object
   */
  object: 'hold';

  /**
   * The status of the hold
   */
  status: 'active' | 'resolved';

  /**
   * The ID of the target being held
   */
  target_id: string;

  /**
   * The type of target being held
   */
  target_type: 'payment_order';

  updated_at: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode?: boolean;

  /**
   * Additional metadata for the hold
   */
  metadata?: { [key: string]: string } | null;

  /**
   * The reason for the hold
   */
  reason?: string | null;

  /**
   * The resolution of the hold
   */
  resolution?: string | null;

  /**
   * When the hold was resolved
   */
  resolved_at?: string | null;
}

export interface HoldListResponse {
  id: string;

  created_at: string;

  /**
   * The type of object
   */
  object: 'hold';

  /**
   * The status of the hold
   */
  status: 'active' | 'resolved';

  /**
   * The ID of the target being held
   */
  target_id: string;

  /**
   * The type of target being held
   */
  target_type: 'payment_order';

  updated_at: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode?: boolean;

  /**
   * Additional metadata for the hold
   */
  metadata?: { [key: string]: string } | null;

  /**
   * The reason for the hold
   */
  reason?: string | null;

  /**
   * The resolution of the hold
   */
  resolution?: string | null;

  /**
   * When the hold was resolved
   */
  resolved_at?: string | null;
}

export interface HoldCreateParams {
  /**
   * The status of the hold
   */
  status: 'active';

  /**
   * The ID of the target to hold
   */
  target_id: string;

  /**
   * The type of target to hold
   */
  target_type: 'payment_order';

  /**
   * Additional metadata for the hold
   */
  metadata?: { [key: string]: string } | null;

  /**
   * The reason for the hold
   */
  reason?: string | null;
}

export interface HoldUpdateParams {
  /**
   * The new status of the hold
   */
  status: 'resolved';

  /**
   * The resolution of the hold
   */
  resolution?: string | null;
}

export interface HoldListParams extends PageParams {
  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: { [key: string]: string };

  /**
   * Translation missing: en.openapi.descriptions.payment_order.query_params.status
   */
  status?: 'active' | 'resolved' | null;

  /**
   * Translation missing:
   * en.openapi.descriptions.payment_order.query_params.target_id
   */
  target_id?: string | null;

  /**
   * Translation missing:
   * en.openapi.descriptions.payment_order.query_params.target_type
   */
  target_type?: 'payment_order' | null;
}

export declare namespace Holds {
  export {
    type HoldCreateResponse as HoldCreateResponse,
    type HoldRetrieveResponse as HoldRetrieveResponse,
    type HoldUpdateResponse as HoldUpdateResponse,
    type HoldListResponse as HoldListResponse,
    type HoldListResponsesPage as HoldListResponsesPage,
    type HoldCreateParams as HoldCreateParams,
    type HoldUpdateParams as HoldUpdateParams,
    type HoldListParams as HoldListParams,
  };
}
