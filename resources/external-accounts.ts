// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as AccountDetails from '~/resources/account-details';
import * as RoutingDetails from '~/resources/routing-details';
import { Page, PageParams } from '~/pagination';
import * as Shared from '~/resources/shared';

export class ExternalAccounts extends APIResource {
  /**
   * create external account
   */
  create(
    body: ExternalAccountCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ExternalAccount>> {
    return this.post('/api/external_accounts', { body, ...options });
  }

  /**
   * show external account
   */
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<ExternalAccount>> {
    return this.get(`/api/external_accounts/${id}`, options);
  }

  /**
   * update external account
   */
  update(
    id: string,
    body?: ExternalAccountUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ExternalAccount>>;
  update(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<ExternalAccount>>;
  update(
    id: string,
    body: ExternalAccountUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ExternalAccount>> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }

    return this.patch(`/api/external_accounts/${id}`, { body, ...options });
  }

  /**
   * list external accounts
   */
  list(
    query?: ExternalAccountListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExternalAccountsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<ExternalAccountsPage>;
  list(
    query: ExternalAccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExternalAccountsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/api/external_accounts', ExternalAccountsPage, { query, ...options });
  }

  /**
   * delete external account
   */
  del(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<void>>> {
    return this.delete(`/api/external_accounts/${id}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * complete verification of external account
   */
  completeVerification(
    id: string,
    body?: ExternalAccountCompleteVerificationParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ExternalAccount>>;
  completeVerification(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<ExternalAccount>>;
  completeVerification(
    id: string,
    body: ExternalAccountCompleteVerificationParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ExternalAccount>> {
    if (isRequestOptions(body)) {
      return this.completeVerification(id, {}, body);
    }

    return this.post(`/api/external_accounts/${id}/complete_verification`, { body, ...options });
  }

  /**
   * verify external account
   */
  verify(
    id: string,
    body: ExternalAccountVerifyParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<ExternalAccount>> {
    return this.post(`/api/external_accounts/${id}/verify`, { body, ...options });
  }
}

export class ExternalAccountsPage extends Page<ExternalAccount> {}

export interface ExternalAccount {
  account_details: Array<AccountDetails.AccountDetail>;

  /**
   * Can be `checking`, `savings` or `other`.
   */
  account_type: ExternalAccountType;

  contact_details: Array<ExternalAccount.ContactDetails>;

  counterparty_id: string | null;

  created_at: string;

  discarded_at: string | null;

  id: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata: Record<string, string>;

  /**
   * A nickname for the external account. This is only for internal usage and won't
   * affect any payments
   */
  name: string | null;

  object: string;

  /**
   * The address associated with the owner or `null`.
   */
  party_address: ExternalAccount.PartyAddress | null;

  /**
   * The legal name of the entity which owns the account.
   */
  party_name: string;

  /**
   * Either `individual` or `business`.
   */
  party_type: 'business' | 'individual' | null;

  routing_details: Array<RoutingDetails.RoutingDetail>;

  updated_at: string;

  verification_status: 'pending_verification' | 'unverified' | 'verified';
}

export namespace ExternalAccount {
  export interface PartyAddress {
    /**
     * Country code conforms to [ISO 3166-1 alpha-2]
     */
    country: string | null;

    created_at: string;

    id: string;

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

  export interface ContactDetails {
    contact_identifier: string;

    contact_identifier_type: 'email' | 'phone_number' | 'website';

    created_at: string;

    discarded_at: string | null;

    id: string;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    object: string;

    updated_at: string;
  }
}

/**
 * Can be `checking`, `savings` or `other`.
 */
export type ExternalAccountType =
  | 'cash'
  | 'checking'
  | 'loan'
  | 'non_resident'
  | 'other'
  | 'overdraft'
  | 'savings';

export interface ExternalAccountCreateParams {
  counterparty_id: string | null;

  account_details?: Array<ExternalAccountCreateParams.AccountDetails>;

  /**
   * Can be `checking`, `savings` or `other`.
   */
  account_type?: ExternalAccountType;

  contact_details?: Array<ExternalAccountCreateParams.ContactDetails>;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;

  /**
   * A nickname for the external account. This is only for internal usage and won't
   * affect any payments
   */
  name?: string | null;

  /**
   * Required if receiving wire payments.
   */
  party_address?: ExternalAccountCreateParams.PartyAddress;

  party_identifier?: string;

  /**
   * If this value isn't provided, it will be inherited from the counterparty's name.
   */
  party_name?: string;

  /**
   * Either `individual` or `business`.
   */
  party_type?: 'business' | 'individual' | null;

  /**
   * If you've enabled the Modern Treasury + Plaid integration in your Plaid account,
   * you can pass the processor token in this field.
   */
  plaid_processor_token?: string;

  routing_details?: Array<ExternalAccountCreateParams.RoutingDetails>;
}

export namespace ExternalAccountCreateParams {
  export interface PartyAddress {
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

  export interface AccountDetails {
    account_number: string;

    account_number_type?: 'iban' | 'clabe' | 'wallet_address' | 'pan' | 'other';
  }

  export interface RoutingDetails {
    routing_number: string;

    routing_number_type:
      | 'aba'
      | 'swift'
      | 'au_bsb'
      | 'ca_cpa'
      | 'cnaps'
      | 'gb_sort_code'
      | 'in_ifsc'
      | 'my_branch_code'
      | 'br_codigo';

    payment_type?:
      | 'ach'
      | 'au_becs'
      | 'bacs'
      | 'book'
      | 'card'
      | 'check'
      | 'eft'
      | 'cross_border'
      | 'interac'
      | 'masav'
      | 'neft'
      | 'provxchange'
      | 'rtp'
      | 'sen'
      | 'sepa'
      | 'signet'
      | 'wire';
  }

  export interface ContactDetails {
    contact_identifier?: string;

    contact_identifier_type?: 'email' | 'phone_number' | 'website';
  }
}

export interface ExternalAccountUpdateParams {
  /**
   * Can be `checking`, `savings` or `other`.
   */
  account_type?: ExternalAccountType;

  counterparty_id?: string | null;

  /**
   * Additional data in the form of key-value pairs. Pairs can be removed by passing
   * an empty string or `null` as the value.
   */
  metadata?: Record<string, string>;

  /**
   * A nickname for the external account. This is only for internal usage and won't
   * affect any payments
   */
  name?: string | null;

  party_address?: ExternalAccountUpdateParams.PartyAddress;

  /**
   * If this value isn't provided, it will be inherited from the counterparty's name.
   */
  party_name?: string;

  /**
   * Either `individual` or `business`.
   */
  party_type?: 'business' | 'individual' | null;
}

export namespace ExternalAccountUpdateParams {
  export interface PartyAddress {
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

export interface ExternalAccountListParams extends PageParams {
  counterparty_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;

  /**
   * Searches the ExternalAccount's party_name AND the Counterparty's party_name
   */
  party_name?: string;
}

export interface ExternalAccountCompleteVerificationParams {
  amounts?: Array<number>;
}

export interface ExternalAccountVerifyParams {
  /**
   * The ID of the internal account where the micro-deposits originate from. Both
   * credit and debit capabilities must be enabled.
   */
  originating_account_id: string;

  /**
   * Both ach and eft are supported payment types.
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
    | 'wire';

  /**
   * Defaults to the currency of the originating account.
   */
  currency?: Shared.Currency | null;
}
