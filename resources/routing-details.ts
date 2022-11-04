// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';
import * as Shared from '~/resources/shared';

export class RoutingDetails extends APIResource {
  /**
   * Create a routing detail for a single external account.
   */
  create(
    accountsType: 'external_accounts',
    accountId: string,
    body: RoutingDetailCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Shared.RoutingDetail>> {
    return this.post(`/api/${accountsType}/${accountId}/routing_details`, { body, ...options });
  }

  /**
   * Get a single routing detail for a single internal or external account.
   */
  retrieve(
    accountsType: 'external_accounts' | 'internal_accounts',
    accountId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Shared.RoutingDetail>> {
    return this.get(`/api/${accountsType}/${accountId}/routing_details/${id}`, options);
  }

  /**
   * Get a list of routing details for a single internal or external account.
   */
  list(
    accountsType: 'external_accounts' | 'internal_accounts',
    accountId: string,
    query?: RoutingDetailListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RoutingDetailsPage>;
  list(
    accountsType: 'external_accounts' | 'internal_accounts',
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RoutingDetailsPage>;
  list(
    accountsType: 'external_accounts' | 'internal_accounts',
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
  ): Promise<void> {
    return this.delete(`/api/${accountsType}/${accountId}/routing_details/${id}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }
}

export class RoutingDetailsPage extends Page<Shared.RoutingDetail> {}

export interface RoutingDetailCreateParams {
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
    | 'cnaps'
    | 'gb_sort_code'
    | 'in_ifsc'
    | 'my_branch_code'
    | 'swift';

  /**
   * If the routing detail is to be used for a specific payment type this field will
   * be populated, otherwise null.
   */
  payment_type?:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'card'
    | 'check'
    | 'eft'
    | 'global_pay'
    | 'interac'
    | 'provxchange'
    | 'rtp'
    | 'sen'
    | 'sepa'
    | 'signet'
    | 'wire'
    | null;
}

export interface RoutingDetailListParams extends PageParams {}
