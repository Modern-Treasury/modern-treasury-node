// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as InternalAccountsAPI from './internal-accounts';
import * as AccountDetailsAPI from '../account-details';
import * as ConnectionsAPI from '../connections';
import * as RoutingDetailsAPI from '../routing-details';
import * as Shared from '../shared';
import * as BalanceReportsAPI from './balance-reports';
import { Page, type PageParams } from '../../pagination';

export class InternalAccounts extends APIResource {
  balanceReports: BalanceReportsAPI.BalanceReports = new BalanceReportsAPI.BalanceReports(this._client);

  /**
   * create internal account
   */
  create(
    params: InternalAccountCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InternalAccount> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post('/api/internal_accounts', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * get internal account
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<InternalAccount> {
    return this._client.get(`/api/internal_accounts/${id}`, options);
  }

  /**
   * update internal account
   */
  update(
    id: string,
    body?: InternalAccountUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InternalAccount>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<InternalAccount>;
  update(
    id: string,
    body: InternalAccountUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InternalAccount> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.patch(`/api/internal_accounts/${id}`, { body, ...options });
  }

  /**
   * list internal accounts
   */
  list(
    query?: InternalAccountListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InternalAccountsPage, InternalAccount>;
  list(options?: Core.RequestOptions): Core.PagePromise<InternalAccountsPage, InternalAccount>;
  list(
    query: InternalAccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InternalAccountsPage, InternalAccount> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/internal_accounts', InternalAccountsPage, { query, ...options });
  }
}

export class InternalAccountsPage extends Page<InternalAccount> {}

export interface InternalAccount {
  id: string;

  /**
   * An array of account detail objects.
   */
  account_details: Array<AccountDetailsAPI.AccountDetail>;

  /**
   * Can be checking, savings or other.
   */
  account_type:
    | 'cash'
    | 'checking'
    | 'general_ledger'
    | 'loan'
    | 'non_resident'
    | 'other'
    | 'overdraft'
    | 'savings'
    | null;

  /**
   * Specifies which financial institution the accounts belong to.
   */
  connection: ConnectionsAPI.Connection;

  /**
   * The Counterparty associated to this account.
   */
  counterparty_id: string | null;

  created_at: string;

  /**
   * The currency of the account.
   */
  currency: Shared.Currency;

  /**
   * If the internal account links to a ledger account in Modern Treasury, the id of
   * the ledger account will be populated here.
   */
  ledger_account_id: string | null;

  /**
   * The Legal Entity associated to this account
   */
  legal_entity_id: string | null;

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
  routing_details: Array<RoutingDetailsAPI.RoutingDetail>;

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
   * The LegalEntity associated to this account.
   */
  legal_entity_id?: string;

  /**
   * The parent internal account of this new account.
   */
  parent_account_id?: string;

  /**
   * The address associated with the owner or null.
   */
  party_address?: InternalAccountCreateParams.PartyAddress;

  /**
   * A hash of vendor specific attributes that will be used when creating the account
   * at the vendor specified by the given connection.
   */
  vendor_attributes?: Record<string, string>;
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
   * The Ledger Account associated to this account.
   */
  ledger_account_id?: string;

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
   * Only return internal accounts associated with this counterparty.
   */
  counterparty_id?: string;

  /**
   * Only return internal accounts with this currency.
   */
  currency?: Shared.Currency;

  /**
   * Only return internal accounts associated with this legal entity.
   */
  legal_entity_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;

  /**
   * Only return internal accounts that can originate payments with this direction.
   */
  payment_direction?: Shared.TransactionDirection;

  /**
   * Only return internal accounts that can make this type of payment.
   */
  payment_type?:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'card'
    | 'chats'
    | 'check'
    | 'cross_border'
    | 'dk_nets'
    | 'eft'
    | 'hu_ics'
    | 'interac'
    | 'masav'
    | 'mx_ccen'
    | 'neft'
    | 'nics'
    | 'nz_becs'
    | 'pl_elixir'
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
    | 'wire'
    | 'zengin';
}

export namespace InternalAccounts {
  export import InternalAccount = InternalAccountsAPI.InternalAccount;
  export import InternalAccountsPage = InternalAccountsAPI.InternalAccountsPage;
  export import InternalAccountCreateParams = InternalAccountsAPI.InternalAccountCreateParams;
  export import InternalAccountUpdateParams = InternalAccountsAPI.InternalAccountUpdateParams;
  export import InternalAccountListParams = InternalAccountsAPI.InternalAccountListParams;
  export import BalanceReports = BalanceReportsAPI.BalanceReports;
  export import BalanceReport = BalanceReportsAPI.BalanceReport;
  export import BalanceReportsPage = BalanceReportsAPI.BalanceReportsPage;
  export import BalanceReportCreateParams = BalanceReportsAPI.BalanceReportCreateParams;
  export import BalanceReportListParams = BalanceReportsAPI.BalanceReportListParams;
}
