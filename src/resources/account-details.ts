// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as AccountDetailsAPI from 'modern-treasury/resources/account-details';
import * as Shared from 'modern-treasury/resources/shared';
import { Page, type PageParams } from 'modern-treasury/pagination';

export class AccountDetails extends APIResource {
  /**
   * Create an account detail for an external account.
   */
  create(
    accountsType: 'external_accounts',
    accountId: string,
    params: AccountDetailCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountDetail> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post(`/api/${accountsType}/${accountId}/account_details`, {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * Get a single account detail for a single internal or external account.
   */
  retrieve(
    accountsType: Shared.AccountsType,
    accountId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountDetail> {
    return this._client.get(`/api/${accountsType}/${accountId}/account_details/${id}`, options);
  }

  /**
   * Get a list of account details for a single internal or external account.
   */
  list(
    accountsType: Shared.AccountsType,
    accountId: string,
    query?: AccountDetailListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountDetailsPage, AccountDetail>;
  list(
    accountsType: Shared.AccountsType,
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountDetailsPage, AccountDetail>;
  list(
    accountsType: Shared.AccountsType,
    accountId: string,
    query: AccountDetailListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountDetailsPage, AccountDetail> {
    if (isRequestOptions(query)) {
      return this.list(accountsType, accountId, {}, query);
    }
    return this._client.getAPIList(`/api/${accountsType}/${accountId}/account_details`, AccountDetailsPage, {
      query,
      ...options,
    });
  }

  /**
   * Delete a single account detail for an external account.
   */
  del(
    accountsType: 'external_accounts',
    accountId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(`/api/${accountsType}/${accountId}/account_details/${id}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }
}

export class AccountDetailsPage extends Page<AccountDetail> {}

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
  account_number_type: 'clabe' | 'hk_number' | 'iban' | 'other' | 'pan' | 'wallet_address';

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
   * The account number for the bank account.
   */
  account_number: string;

  /**
   * One of `iban`, `clabe`, `wallet_address`, or `other`. Use `other` if the bank
   * account number is in a generic format.
   */
  account_number_type?: 'clabe' | 'hk_number' | 'iban' | 'other' | 'pan' | 'wallet_address';
}

export interface AccountDetailListParams extends PageParams {}

export namespace AccountDetails {
  export import AccountDetail = AccountDetailsAPI.AccountDetail;
  export import AccountDetailsPage = AccountDetailsAPI.AccountDetailsPage;
  export import AccountDetailCreateParams = AccountDetailsAPI.AccountDetailCreateParams;
  export import AccountDetailListParams = AccountDetailsAPI.AccountDetailListParams;
}
