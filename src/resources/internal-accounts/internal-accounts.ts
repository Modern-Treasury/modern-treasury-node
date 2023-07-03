// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as AccountDetails from 'modern-treasury/resources/account-details';
import * as RoutingDetails from 'modern-treasury/resources/routing-details';
import * as Connections from 'modern-treasury/resources/connections';
import { BalanceReports } from './balance-reports';
import * as Shared from 'modern-treasury/resources/shared';
import * as API from './';
import { Page, PageParams } from 'modern-treasury/pagination';

export class InternalAccounts extends APIResource {
  balanceReports: BalanceReports = new BalanceReports(this.client);

  /**
   * create internal account
   */
  create(
    params: InternalAccountCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<InternalAccount>> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this.post('/api/internal_accounts', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey || '', ...options?.headers },
    });
  }

  /**
   * get internal account
   */
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<InternalAccount>> {
    return this.get(`/api/internal_accounts/${id}`, options);
  }

  /**
   * update internal account
   */
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

  /**
   * list internal accounts
   */
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
// alias so we can export it in the namespace
type _InternalAccountsPage = InternalAccountsPage;

export interface InternalAccount {
  id: string;

  /**
   * An array of account detail objects.
   */
  account_details: Array<AccountDetails.AccountDetail>;

  /**
   * Can be checking, savings or other.
   */
  account_type: 'cash' | 'checking' | 'loan' | 'non_resident' | 'other' | 'overdraft' | 'savings' | null;

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
  currency: Shared.Currency | null;

  /**
   * If the internal account links to a ledger account in Modern Treasury, the id of
   * the ledger account will be populated here.
   */
  ledger_account_id: string | null;

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
  /**
   * The address associated with the owner or null.
   */
  export interface PartyAddress {
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

export interface InternalAccountCreateParams {
  /**
   * Body param: The identifier of the financial institution the account belongs to.
   */
  connection_id: string;

  /**
   * Body param: Either "USD" or "CAD". Internal accounts created at Increase only
   * supports "USD".
   */
  currency: 'USD' | 'CAD';

  /**
   * Body param: The nickname of the account.
   */
  name: string;

  /**
   * Body param: The legal name of the entity which owns the account.
   */
  party_name: string;

  /**
   * Body param: The Counterparty associated to this account.
   */
  counterparty_id?: string;

  /**
   * Body param: The identifier of the entity at Increase which owns the account.
   */
  entity_id?: string;

  /**
   * Body param: The parent internal account of this new account.
   */
  parent_account_id?: string;

  /**
   * Body param: The address associated with the owner or null.
   */
  party_address?: InternalAccountCreateParams.PartyAddress;

  /**
   * Header param: This key should be something unique, preferably something like an
   * UUID.
   */
  'Idempotency-Key'?: string;
}

export namespace InternalAccountCreateParams {
  /**
   * The address associated with the owner or null.
   */
  export interface PartyAddress {
    /**
     * Country code conforms to [ISO 3166-1 alpha-2]
     */
    country: string;

    line1: string;

    /**
     * Locality or City.
     */
    locality: string;

    /**
     * The postal code of the address.
     */
    postal_code: string;

    /**
     * Region or State.
     */
    region: string;

    line2?: string;
  }
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
   * The counterparty associated with the internal account.
   */
  counterparty_id?: string;

  /**
   * The currency associated with the internal account.
   */
  currency?: Shared.Currency | null;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;

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
    | 'masav'
    | 'neft'
    | 'provxchange'
    | 'rtp'
    | 'sen'
    | 'sepa'
    | 'signet'
    | 'wire';
}

export namespace InternalAccounts {
  export import InternalAccount = API.InternalAccount;
  export type InternalAccountsPage = _InternalAccountsPage;
  export import InternalAccountCreateParams = API.InternalAccountCreateParams;
  export import InternalAccountUpdateParams = API.InternalAccountUpdateParams;
  export import InternalAccountListParams = API.InternalAccountListParams;

  export import BalanceReports = API.BalanceReports;
  export import BalanceReport = API.BalanceReport;
  export import BalanceReportsPage = API.BalanceReportsPage;
  export import BalanceReportListParams = API.BalanceReportListParams;
}
