// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import * as API from './index';

export class Validations extends APIResource {
  /**
   * Validates the routing number information supplied without creating a routing
   * detail
   */
  validateRoutingNumber(
    query: ValidationValidateRoutingNumberParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoutingNumberLookupRequest> {
    return this.get('/api/validations/routing_numbers', { query, ...options });
  }
}

export interface RoutingNumberLookupRequest {
  /**
   * The address of the bank.
   */
  bank_address?: RoutingNumberLookupRequest.BankAddress;

  /**
   * The name of the bank.
   */
  bank_name?: string;

  /**
   * The routing number of the bank.
   */
  routing_number?: string;

  /**
   * One of `aba`, `au_bsb`, `br_codigo`, `ca_cpa`, `cnaps`, `gb_sort_code`,
   * `in_ifsc`, `my_branch_code`, or `swift`. In sandbox mode we currently only
   * support `aba` and `swift` with routing numbers '123456789' and 'GRINUST0XXX'
   * respectively.
   */
  routing_number_type?: 'aba' | 'au_bsb' | 'ca_cpa' | 'gb_sort_code' | 'in_ifsc' | 'swift';

  /**
   * An object containing key-value pairs, each with a sanctions list as the key and
   * a boolean value representing whether the bank is on that particular sanctions
   * list. Currently, this includes eu_con, uk_hmt, us_ofac, and un sanctions lists.
   */
  sanctions?: Record<string, unknown>;

  /**
   * An array of payment types that are supported for this routing number. This can
   * include `ach`, `wire`, `rtp`, `sepa`, `bacs`, `au_becs` currently.
   */
  supported_payment_types?: Array<
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
  >;
}

export namespace RoutingNumberLookupRequest {
  /**
   * The address of the bank.
   */
  export interface BankAddress {
    /**
     * Country code conforms to [ISO 3166-1 alpha-2]
     */
    country?: string | null;

    line1?: string | null;

    line2?: string | null;

    /**
     * Locality or City.
     */
    locality?: string | null;

    /**
     * The postal code of the address.
     */
    postal_code?: string | null;

    /**
     * Region or State.
     */
    region?: string | null;
  }
}

export interface ValidationValidateRoutingNumberParams {
  /**
   * The routing number that is being validated.
   */
  routing_number: string;

  /**
   * One of `aba`, `au_bsb`, `br_codigo`, `ca_cpa`, `cnaps`, `gb_sort_code`,
   * `in_ifsc`, `my_branch_code`, or `swift`. In sandbox mode we currently only
   * support `aba` and `swift` with routing numbers '123456789' and 'GRINUST0XXX'
   * respectively.
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
}

export namespace Validations {
  export import RoutingNumberLookupRequest = API.RoutingNumberLookupRequest;
  export import ValidationValidateRoutingNumberParams = API.ValidationValidateRoutingNumberParams;
}
