// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { BalanceReports } from './balance-reports';
import { Page, PageParams } from '~/pagination';
import * as Shared from '~/resources/shared';
import * as AccountDetails from '~/resources/account-details';
import * as RoutingDetails from '~/resources/routing-details';
import * as Connections from '~/resources/connections';

export class InternalAccounts extends APIResource {
  balanceReports: BalanceReports = new BalanceReports(this.client);

  create(
    body: InternalAccountCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<InternalAccount>> {
    return this.post('/api/internal_accounts', { body, ...options });
  }

  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<InternalAccount>> {
    return this.get(`/api/internal_accounts/${id}`, options);
  }

  update(
    id: string,
    body?: InternalAccountUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<InternalAccount>>;
  update(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<InternalAccount>>;
  update(
    id: string,
    body: InternalAccountUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<InternalAccount>> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }

    return this.patch(`/api/internal_accounts/${id}`, { body, ...options });
  }

  list(
    query?: InternalAccountListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InternalAccountsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<InternalAccountsPage>;
  list(
    query: InternalAccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InternalAccountsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/api/internal_accounts', InternalAccountsPage, { query, ...options });
  }
}

export class InternalAccountsPage extends Page<InternalAccount> {}

export interface InternalAccount {
  /**
   * An array of account detail objects.
   */
  account_details: Array<AccountDetails.AccountDetail>;

  /**
   * Can be checking, savings or other.
   */
  account_type: 'checking' | 'other' | 'savings' | null;

  /**
   * Specifies which financial institution the accounts belong to.
   */
  connection: Connections.Connection;

  /**
   * The Counterparty associated to this account.
   */
  counterparty_id: string | null;

  created_at: string;

  /**
   * The currency of the account.
   */
  currency: Shared.Currency;

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
   * A nickname for the account.
   */
  name: string | null;

  object: string;

  /**
   * The parent InternalAccount of this account.
   */
  parent_account_id: string | null;

  /**
   * The address associated with the owner or null.
   */
  party_address: InternalAccount.PartyAddress | null;

  /**
   * The legal name of the entity which owns the account.
   */
  party_name: string;

  /**
   * Either individual or business.
   */
  party_type: 'business' | 'individual' | null;

  /**
   * An array of routing detail objects.
   */
  routing_details: Array<RoutingDetails.RoutingDetail>;

  updated_at: string;
}

export namespace InternalAccount {
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
}

export interface InternalAccountCreateParams {
  /**
   * The identifier of the financial institution the account belongs to.
   */
  connection_id: string;

  /**
   * Either "USD" or "CAD". Internal accounts created at Increase only supports
   * "USD".
   */
  currency: 'USD' | 'CAD';

  /**
   * The nickname of the account.
   */
  name: string;

  /**
   * The legal name of the entity which owns the account.
   */
  party_name: string;

  /**
   * The Counterparty associated to this account.
   */
  counterparty_id?: string;

  /**
   * The identifier of the entity at Increase which owns the account.
   */
  entity_id?: string;

  /**
   * The parent internal account of this new account.
   */
  parent_account_id?: string;
}

export interface InternalAccountUpdateParams {
  /**
   * The Counterparty associated to this account.
   */
  counterparty_id?: string;

  /**
   * Additional data in the form of key-value pairs. Pairs can be removed by passing
   * an empty string or `null` as the value.
   */
  metadata?: Record<string, string>;

  /**
   * The nickname for the internal account.
   */
  name?: string;

  /**
   * The parent internal account for this account.
   */
  parent_account_id?: string;
}

export interface InternalAccountListParams extends PageParams {
  /**
   * The currency associated with the internal account.
   */
  currency?: Shared.Currency;

  /**
   * The direction of payments that can be made by internal account.
   */
  payment_direction?: 'credit' | 'debit';

  /**
   * The type of payment that can be made by the internal account.
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
    | 'provxchange'
    | 'rtp'
    | 'sen'
    | 'sepa'
    | 'signet'
    | 'wire';
}
