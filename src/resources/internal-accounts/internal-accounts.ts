// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AccountDetailsAPI from '../account-details';
import * as ConnectionsAPI from '../connections';
import * as RoutingDetailsAPI from '../routing-details';
import * as Shared from '../shared';
import * as BalanceReportsAPI from './balance-reports';
import {
  BalanceReport,
  BalanceReportCreateParams,
  BalanceReportListParams,
  BalanceReports,
  BalanceReportsPage,
} from './balance-reports';
import { Page, type PageParams } from '../../pagination';

export class InternalAccounts extends APIResource {
  balanceReports: BalanceReportsAPI.BalanceReports = new BalanceReportsAPI.BalanceReports(this._client);

  /**
   * create internal account
   *
   * @example
   * ```ts
   * const internalAccount =
   *   await client.internalAccounts.create({
   *     connection_id: 'connection_id',
   *     currency: 'USD',
   *     name: 'name',
   *     party_name: 'party_name',
   *   });
   * ```
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
   *
   * @example
   * ```ts
   * const internalAccount =
   *   await client.internalAccounts.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<InternalAccount> {
    return this._client.get(`/api/internal_accounts/${id}`, options);
  }

  /**
   * update internal account
   *
   * @example
   * ```ts
   * const internalAccount =
   *   await client.internalAccounts.update('id');
   * ```
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
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const internalAccount of client.internalAccounts.list()) {
   *   // ...
   * }
   * ```
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
   * An array of AccountCapability objects that list the originating abilities of the
   * internal account and any relevant information for them.
   */
  account_capabilities: Array<InternalAccount.AccountCapability>;

  /**
   * An array of account detail objects.
   */
  account_details: Array<AccountDetailsAPI.AccountDetail>;

  /**
   * Can be checking, savings or other.
   */
  account_type:
    | 'base_wallet'
    | 'cash'
    | 'checking'
    | 'crypto_wallet'
    | 'ethereum_wallet'
    | 'general_ledger'
    | 'loan'
    | 'non_resident'
    | 'other'
    | 'overdraft'
    | 'polygon_wallet'
    | 'savings'
    | 'solana_wallet'
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
   * The Legal Entity associated to this account.
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
  metadata: { [key: string]: string };

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

  /**
   * The vendor ID associated with this account.
   */
  vendor_id: string | null;
}

export namespace InternalAccount {
  export interface AccountCapability {
    id: string;

    created_at: string;

    /**
     * One of `debit` or `credit`. Indicates the direction of money movement this
     * capability is responsible for.
     */
    direction: Shared.TransactionDirection;

    discarded_at: string | null;

    /**
     * A unique reference assigned by your bank for tracking and recognizing payment
     * files. It is important this is formatted exactly how the bank assigned it.
     */
    identifier: string | null;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    object: string;

    /**
     * Indicates the the type of payment this capability is responsible for
     * originating.
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
      | 'zengin';

    updated_at: string;

    [k: string]: unknown;
  }

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
   * An array of AccountCapability objects that list the originating abilities of the
   * internal account and any relevant information for them.
   */
  account_capabilities?: Array<InternalAccountCreateParams.AccountCapability>;

  /**
   * The account type, used to provision the appropriate account at the financial
   * institution.
   */
  account_type?:
    | 'base_wallet'
    | 'cash'
    | 'checking'
    | 'crypto_wallet'
    | 'ethereum_wallet'
    | 'general_ledger'
    | 'loan'
    | 'non_resident'
    | 'other'
    | 'overdraft'
    | 'polygon_wallet'
    | 'savings'
    | 'solana_wallet';

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
  vendor_attributes?: { [key: string]: string };
}

export namespace InternalAccountCreateParams {
  export interface AccountCapability {
    id: string;

    created_at: string;

    /**
     * One of `debit` or `credit`. Indicates the direction of money movement this
     * capability is responsible for.
     */
    direction: Shared.TransactionDirection;

    discarded_at: string | null;

    /**
     * A unique reference assigned by your bank for tracking and recognizing payment
     * files. It is important this is formatted exactly how the bank assigned it.
     */
    identifier: string | null;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    object: string;

    /**
     * Indicates the the type of payment this capability is responsible for
     * originating.
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
      | 'zengin';

    updated_at: string;

    [k: string]: unknown;
  }

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
  metadata?: { [key: string]: string };

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
  metadata?: { [key: string]: string };

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
    | 'zengin';
}

InternalAccounts.InternalAccountsPage = InternalAccountsPage;
InternalAccounts.BalanceReports = BalanceReports;
InternalAccounts.BalanceReportsPage = BalanceReportsPage;

export declare namespace InternalAccounts {
  export {
    type InternalAccount as InternalAccount,
    InternalAccountsPage as InternalAccountsPage,
    type InternalAccountCreateParams as InternalAccountCreateParams,
    type InternalAccountUpdateParams as InternalAccountUpdateParams,
    type InternalAccountListParams as InternalAccountListParams,
  };

  export {
    BalanceReports as BalanceReports,
    type BalanceReport as BalanceReport,
    BalanceReportsPage as BalanceReportsPage,
    type BalanceReportCreateParams as BalanceReportCreateParams,
    type BalanceReportListParams as BalanceReportListParams,
  };
}
