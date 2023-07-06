// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as Shared from 'modern-treasury/resources/shared';
import * as API from './';
import { Page, PageParams } from 'modern-treasury/pagination';

export class RoutingDetails extends APIResource {
  /**
   * Create a routing detail for a single external account.
   */
  create(
    accountsType: 'external_accounts',
    accountId: string,
    params: RoutingDetailCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<RoutingDetail>> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this.post(`/api/${accountsType}/${accountId}/routing_details`, {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey || '', ...options?.headers },
    });
  }

  /**
   * Get a single routing detail for a single internal or external account.
   */
  retrieve(
    accountsType: Shared.AccountsType,
    accountId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<RoutingDetail>> {
    return this.get(`/api/${accountsType}/${accountId}/routing_details/${id}`, options);
  }

  /**
   * Get a list of routing details for a single internal or external account.
   */
  list(
    accountsType: Shared.AccountsType,
    accountId: string,
    query?: RoutingDetailListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RoutingDetailsPage>;
  list(
    accountsType: Shared.AccountsType,
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RoutingDetailsPage>;
  list(
    accountsType: Shared.AccountsType,
    accountId: string,
    query: RoutingDetailListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<RoutingDetailsPage> {
    if (isRequestOptions(query)) {
      return this.list(accountsType, accountId, {}, query);
    }
    return this.getAPIList(`/api/${accountsType}/${accountId}/routing_details`, RoutingDetailsPage, {
      query,
      ...options,
    });
  }

  /**
   * Delete a routing detail for a single external account.
   */
  del(
    accountsType: 'external_accounts',
    accountId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<void>> {
    return this.delete(`/api/${accountsType}/${accountId}/routing_details/${id}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }
}

export class RoutingDetailsPage extends Page<RoutingDetail> {}
// alias so we can export it in the namespace
type _RoutingDetailsPage = RoutingDetailsPage;

export interface RoutingDetail {
  id: string;

  bank_address: RoutingDetail.BankAddress | null;

  /**
   * The name of the bank.
   */
  bank_name: string;

  created_at: string;

  discarded_at: string | null;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  /**
   * If the routing detail is to be used for a specific payment type this field will
   * be populated, otherwise null.
   */
  payment_type:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'card'
    | 'check'
    | 'cross_border'
    | 'eft'
    | 'interac'
    | 'masav'
    | 'neft'
    | 'provxchange'
    | 'rtp'
    | 'sen'
    | 'sepa'
    | 'signet'
    | 'wire'
    | null;

  /**
   * The routing number of the bank.
   */
  routing_number: string;

  /**
   * One of `aba`, `swift`, `ca_cpa`, `au_bsb`, `gb_sort_code`, `in_ifsc`, `cnaps`.
   */
  routing_number_type:
    | 'aba'
    | 'au_bsb'
    | 'br_codigo'
    | 'ca_cpa'
    | 'chips'
    | 'cnaps'
    | 'gb_sort_code'
    | 'in_ifsc'
    | 'my_branch_code'
    | 'swift';

  updated_at: string;
}

export namespace RoutingDetail {
  export interface BankAddress {
    id: string;

    /**
     * Country code conforms to [ISO 3166-1 alpha-2]
     */
    country: string | null;

    created_at: string;

    line1: string | null;

    line2: string | null;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    /**
     * Locality or City.
     */
    locality: string | null;

    object: string;

    /**
     * The postal code of the address.
     */
    postal_code: string | null;

    /**
     * Region or State.
     */
    region: string | null;

    updated_at: string;
  }
}

export interface RoutingDetailCreateParams {
  /**
   * Body param: The routing number of the bank.
   */
  routing_number: string;

  /**
   * Body param: One of `aba`, `swift`, `ca_cpa`, `au_bsb`, `gb_sort_code`,
   * `in_ifsc`, `cnaps`.
   */
  routing_number_type:
    | 'aba'
    | 'au_bsb'
    | 'br_codigo'
    | 'ca_cpa'
    | 'chips'
    | 'cnaps'
    | 'gb_sort_code'
    | 'in_ifsc'
    | 'my_branch_code'
    | 'swift';

  /**
   * Body param: If the routing detail is to be used for a specific payment type this
   * field will be populated, otherwise null.
   */
  payment_type?:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'card'
    | 'check'
    | 'cross_border'
    | 'eft'
    | 'interac'
    | 'masav'
    | 'neft'
    | 'provxchange'
    | 'rtp'
    | 'sen'
    | 'sepa'
    | 'signet'
    | 'wire'
    | null;

  /**
   * Header param: This key should be something unique, preferably something like an
   * UUID.
   */
  'Idempotency-Key'?: string;
}

export interface RoutingDetailListParams extends PageParams {}

export namespace RoutingDetails {
  export import RoutingDetail = API.RoutingDetail;
  export type RoutingDetailsPage = _RoutingDetailsPage;
  export import RoutingDetailCreateParams = API.RoutingDetailCreateParams;
  export import RoutingDetailListParams = API.RoutingDetailListParams;
}
