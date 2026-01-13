// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AccountDetails extends APIResource {
  /**
   * Create an account detail for an external account.
   */
  create(
    accountID: string,
    params: AccountDetailCreateParams,
    options?: RequestOptions,
  ): APIPromise<AccountDetail> {
    const { accounts_type, ...body } = params;
    return this._client.post(path`/api/${accounts_type}/${accountID}/account_details`, { body, ...options });
  }

  /**
   * Get a single account detail for a single internal or external account.
   */
  retrieve(
    id: string,
    params: AccountDetailRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AccountDetail> {
    const { accounts_type, account_id } = params;
    return this._client.get(path`/api/${accounts_type}/${account_id}/account_details/${id}`, options);
  }

  /**
   * Get a list of account details for a single internal or external account.
   */
  list(
    accountID: string,
    params: AccountDetailListParams,
    options?: RequestOptions,
  ): PagePromise<AccountDetailsPage, AccountDetail> {
    const { accounts_type, ...query } = params;
    return this._client.getAPIList(
      path`/api/${accounts_type}/${accountID}/account_details`,
      Page<AccountDetail>,
      { query, ...options },
    );
  }

  /**
   * Delete a single account detail for an external account.
   */
  delete(id: string, params: AccountDetailDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { accounts_type, account_id } = params;
    return this._client.delete(path`/api/${accounts_type}/${account_id}/account_details/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type AccountDetailsPage = Page<AccountDetail>;

export interface AccountDetail {
  id: string;

  /**
   * The last 4 digits of the account_number.
   */
  account_number_safe: string;

  /**
   * One of `iban`, `clabe`, `wallet_address`, or `other`. Use `other` if the bank
   * account number is in a generic format.
   */
  account_number_type:
    | 'au_number'
    | 'base_address'
    | 'clabe'
    | 'ethereum_address'
    | 'hk_number'
    | 'iban'
    | 'id_number'
    | 'nz_number'
    | 'other'
    | 'pan'
    | 'polygon_address'
    | 'sg_number'
    | 'solana_address'
    | 'wallet_address';

  created_at: string;

  discarded_at: string | null;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  updated_at: string;

  /**
   * The account number for the bank account.
   */
  account_number?: string;
}

export interface AccountDetailCreateParams {
  /**
   * Path param
   */
  accounts_type: 'external_accounts';

  /**
   * Body param: The account number for the bank account.
   */
  account_number: string;

  /**
   * Body param: One of `iban`, `clabe`, `wallet_address`, or `other`. Use `other` if
   * the bank account number is in a generic format.
   */
  account_number_type?:
    | 'au_number'
    | 'base_address'
    | 'clabe'
    | 'ethereum_address'
    | 'hk_number'
    | 'iban'
    | 'id_number'
    | 'nz_number'
    | 'other'
    | 'pan'
    | 'polygon_address'
    | 'sg_number'
    | 'solana_address'
    | 'wallet_address';
}

export interface AccountDetailRetrieveParams {
  accounts_type: Shared.AccountsType;

  /**
   * The ID of the account.
   */
  account_id: string;
}

export interface AccountDetailListParams extends PageParams {
  /**
   * Path param
   */
  accounts_type: Shared.AccountsType;
}

export interface AccountDetailDeleteParams {
  accounts_type: 'external_accounts';

  /**
   * The ID of the account.
   */
  account_id: string;
}

export declare namespace AccountDetails {
  export {
    type AccountDetail as AccountDetail,
    type AccountDetailsPage as AccountDetailsPage,
    type AccountDetailCreateParams as AccountDetailCreateParams,
    type AccountDetailRetrieveParams as AccountDetailRetrieveParams,
    type AccountDetailListParams as AccountDetailListParams,
    type AccountDetailDeleteParams as AccountDetailDeleteParams,
  };
}
