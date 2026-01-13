// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RoutingDetails extends APIResource {
  /**
   * Create a routing detail for a single external account.
   */
  create(
    accountID: string,
    params: RoutingDetailCreateParams,
    options?: RequestOptions,
  ): APIPromise<RoutingDetail> {
    const { accounts_type, ...body } = params;
    return this._client.post(path`/api/${accounts_type}/${accountID}/routing_details`, { body, ...options });
  }

  /**
   * Get a single routing detail for a single internal or external account.
   */
  retrieve(
    id: string,
    params: RoutingDetailRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RoutingDetail> {
    const { accounts_type, account_id } = params;
    return this._client.get(path`/api/${accounts_type}/${account_id}/routing_details/${id}`, options);
  }

  /**
   * Get a list of routing details for a single internal or external account.
   */
  list(
    accountID: string,
    params: RoutingDetailListParams,
    options?: RequestOptions,
  ): PagePromise<RoutingDetailsPage, RoutingDetail> {
    const { accounts_type, ...query } = params;
    return this._client.getAPIList(
      path`/api/${accounts_type}/${accountID}/routing_details`,
      Page<RoutingDetail>,
      { query, ...options },
    );
  }

  /**
   * Delete a routing detail for a single external account.
   */
  delete(id: string, params: RoutingDetailDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { accounts_type, account_id } = params;
    return this._client.delete(path`/api/${accounts_type}/${account_id}/routing_details/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type RoutingDetailsPage = Page<RoutingDetail>;

export interface RoutingDetail {
  id: string;

  bank_address: Shared.Address | null;

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
    | 'base'
    | 'book'
    | 'card'
    | 'chats'
    | 'check'
    | 'cross_border'
    | 'dk_nets'
    | 'eft'
    | 'ethereum'
    | 'gb_fps'
    | 'hu_ics'
    | 'interac'
    | 'masav'
    | 'mx_ccen'
    | 'neft'
    | 'nics'
    | 'nz_becs'
    | 'pl_elixir'
    | 'polygon'
    | 'provxchange'
    | 'ro_sent'
    | 'rtp'
    | 'se_bankgirot'
    | 'sen'
    | 'sepa'
    | 'sg_giro'
    | 'sic'
    | 'signet'
    | 'sknbi'
    | 'solana'
    | 'wire'
    | 'zengin'
    | null;

  /**
   * The routing number of the bank.
   */
  routing_number: string;

  /**
   * The type of routing number. See
   * https://docs.moderntreasury.com/platform/reference/routing-detail-object for
   * more details.
   */
  routing_number_type:
    | 'aba'
    | 'au_bsb'
    | 'br_codigo'
    | 'ca_cpa'
    | 'chips'
    | 'cnaps'
    | 'dk_interbank_clearing_code'
    | 'gb_sort_code'
    | 'hk_interbank_clearing_code'
    | 'hu_interbank_clearing_code'
    | 'id_sknbi_code'
    | 'il_bank_code'
    | 'in_ifsc'
    | 'jp_zengin_code'
    | 'mx_bank_identifier'
    | 'my_branch_code'
    | 'nz_national_clearing_code'
    | 'pl_national_clearing_code'
    | 'se_bankgiro_clearing_code'
    | 'sg_interbank_clearing_code'
    | 'swift'
    | 'za_national_clearing_code';

  updated_at: string;
}

export interface RoutingDetailCreateParams {
  /**
   * Path param
   */
  accounts_type: 'external_accounts';

  /**
   * Body param: The routing number of the bank.
   */
  routing_number: string;

  /**
   * Body param: The type of routing number. See
   * https://docs.moderntreasury.com/platform/reference/routing-detail-object for
   * more details.
   */
  routing_number_type:
    | 'aba'
    | 'au_bsb'
    | 'br_codigo'
    | 'ca_cpa'
    | 'chips'
    | 'cnaps'
    | 'dk_interbank_clearing_code'
    | 'gb_sort_code'
    | 'hk_interbank_clearing_code'
    | 'hu_interbank_clearing_code'
    | 'id_sknbi_code'
    | 'il_bank_code'
    | 'in_ifsc'
    | 'jp_zengin_code'
    | 'mx_bank_identifier'
    | 'my_branch_code'
    | 'nz_national_clearing_code'
    | 'pl_national_clearing_code'
    | 'se_bankgiro_clearing_code'
    | 'sg_interbank_clearing_code'
    | 'swift'
    | 'za_national_clearing_code';

  /**
   * Body param: If the routing detail is to be used for a specific payment type this
   * field will be populated, otherwise null.
   */
  payment_type?:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'base'
    | 'book'
    | 'card'
    | 'chats'
    | 'check'
    | 'cross_border'
    | 'dk_nets'
    | 'eft'
    | 'ethereum'
    | 'gb_fps'
    | 'hu_ics'
    | 'interac'
    | 'masav'
    | 'mx_ccen'
    | 'neft'
    | 'nics'
    | 'nz_becs'
    | 'pl_elixir'
    | 'polygon'
    | 'provxchange'
    | 'ro_sent'
    | 'rtp'
    | 'se_bankgirot'
    | 'sen'
    | 'sepa'
    | 'sg_giro'
    | 'sic'
    | 'signet'
    | 'sknbi'
    | 'solana'
    | 'wire'
    | 'zengin'
    | null;
}

export interface RoutingDetailRetrieveParams {
  accounts_type: Shared.AccountsType;

  /**
   * The ID of the account.
   */
  account_id: string;
}

export interface RoutingDetailListParams extends PageParams {
  /**
   * Path param
   */
  accounts_type: Shared.AccountsType;
}

export interface RoutingDetailDeleteParams {
  accounts_type: 'external_accounts';

  /**
   * The ID of the account.
   */
  account_id: string;
}

export declare namespace RoutingDetails {
  export {
    type RoutingDetail as RoutingDetail,
    type RoutingDetailsPage as RoutingDetailsPage,
    type RoutingDetailCreateParams as RoutingDetailCreateParams,
    type RoutingDetailRetrieveParams as RoutingDetailRetrieveParams,
    type RoutingDetailListParams as RoutingDetailListParams,
    type RoutingDetailDeleteParams as RoutingDetailDeleteParams,
  };
}
