// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Validations extends APIResource {
  /**
   * Validates the routing number information supplied without creating a routing
   * detail
   */
  validateRoutingNumber(
    query: ValidationValidateRoutingNumberParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoutingNumberLookupRequest> {
    return this._client.get('/api/validations/routing_numbers', { query, ...options });
  }
}

export interface RoutingNumberLookupRequest {
  /**
   * The address of the bank.
   */
  bank_address?: Shared.AddressRequest;

  /**
   * The name of the bank.
   */
  bank_name?: string;

  /**
   * The routing number of the bank.
   */
  routing_number?: string;

  /**
   * The type of routing number. See
   * https://docs.moderntreasury.com/platform/reference/routing-detail-object for
   * more details. In sandbox mode we currently only support `aba` and `swift` with
   * routing numbers '123456789' and 'GRINUST0XXX' respectively.
   */
  routing_number_type?:
    | 'aba'
    | 'au_bsb'
    | 'ca_cpa'
    | 'gb_sort_code'
    | 'in_ifsc'
    | 'nz_national_clearing_code'
    | 'se_bankgiro_clearing_code'
    | 'swift'
    | 'za_national_clearing_code';

  /**
   * An object containing key-value pairs, each with a sanctions list as the key and
   * a boolean value representing whether the bank is on that particular sanctions
   * list. Currently, this includes eu_con, uk_hmt, us_ofac, and un sanctions lists.
   */
  sanctions?: { [key: string]: unknown };

  /**
   * An array of payment types that are supported for this routing number. This can
   * include `ach`, `wire`, `rtp`, `sepa`, `bacs`, `au_becs`, and 'fednow' currently.
   */
  supported_payment_types?: Array<
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
  >;
}

export interface ValidationValidateRoutingNumberParams {
  /**
   * The routing number that is being validated.
   */
  routing_number: string;

  /**
   * The type of routing number. See
   * https://docs.moderntreasury.com/platform/reference/routing-detail-object for
   * more details. In sandbox mode we currently only support `aba` and `swift` with
   * routing numbers '123456789' and 'GRINUST0XXX' respectively.
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
}

export declare namespace Validations {
  export {
    type RoutingNumberLookupRequest as RoutingNumberLookupRequest,
    type ValidationValidateRoutingNumberParams as ValidationValidateRoutingNumberParams,
  };
}
