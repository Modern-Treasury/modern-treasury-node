// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountDetailsAPI from './account-details';
import * as RoutingDetailsAPI from './routing-details';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class VirtualAccounts extends APIResource {
  /**
   * create virtual_account
   */
  create(body: VirtualAccountCreateParams, options?: RequestOptions): APIPromise<VirtualAccount> {
    return this._client.post('/api/virtual_accounts', { body, ...options });
  }

  /**
   * get virtual_account
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<VirtualAccount> {
    return this._client.get(path`/api/virtual_accounts/${id}`, options);
  }

  /**
   * update virtual_account
   */
  update(
    id: string,
    body: VirtualAccountUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VirtualAccount> {
    return this._client.patch(path`/api/virtual_accounts/${id}`, { body, ...options });
  }

  /**
   * Get a list of virtual accounts.
   */
  list(
    query: VirtualAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VirtualAccountsPage, VirtualAccount> {
    return this._client.getAPIList('/api/virtual_accounts', Page<VirtualAccount>, { query, ...options });
  }

  /**
   * delete virtual_account
   */
  delete(id: string, options?: RequestOptions): APIPromise<VirtualAccount> {
    return this._client.delete(path`/api/virtual_accounts/${id}`, options);
  }
}

export type VirtualAccountsPage = Page<VirtualAccount>;

export interface VirtualAccount {
  id: string;

  /**
   * An array of account detail objects.
   */
  account_details: Array<AccountDetailsAPI.AccountDetail>;

  /**
   * The ID of a counterparty that the virtual account belongs to. Optional.
   */
  counterparty_id: string | null;

  created_at: string;

  /**
   * The ID of a credit normal ledger account. When money enters the virtual account,
   * this ledger account will be credited. Must be accompanied by a
   * debit_ledger_account_id if present.
   */
  credit_ledger_account_id: string | null;

  /**
   * The ID of a debit normal ledger account. When money enters the virtual account,
   * this ledger account will be debited. Must be accompanied by a
   * credit_ledger_account_id if present.
   */
  debit_ledger_account_id: string | null;

  /**
   * An optional free-form description for internal use.
   */
  description: string | null;

  discarded_at: string | null;

  /**
   * The ID of the internal account that the virtual account is in.
   */
  internal_account_id: string;

  /**
   * If the virtual account links to a ledger account in Modern Treasury, the id of
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
  metadata: { [key: string]: string };

  /**
   * The name of the virtual account.
   */
  name: string;

  object: string;

  /**
   * An array of routing detail objects. These will be the routing details of the
   * internal account.
   */
  routing_details: Array<RoutingDetailsAPI.RoutingDetail>;

  updated_at: string;
}

export interface VirtualAccountCreateParams {
  /**
   * The ID of the internal account that this virtual account is associated with.
   */
  internal_account_id: string;

  /**
   * The name of the virtual account.
   */
  name: string;

  /**
   * An array of account detail objects.
   */
  account_details?: Array<VirtualAccountCreateParams.AccountDetail>;

  /**
   * The ID of the counterparty that the virtual account belongs to.
   */
  counterparty_id?: string;

  /**
   * The ID of a credit normal ledger account. When money leaves the virtual account,
   * this ledger account will be credited. Must be accompanied by a
   * debit_ledger_account_id if present.
   */
  credit_ledger_account_id?: string;

  /**
   * The ID of a debit normal ledger account. When money enters the virtual account,
   * this ledger account will be debited. Must be accompanied by a
   * credit_ledger_account_id if present.
   */
  debit_ledger_account_id?: string;

  /**
   * An optional description for internal use.
   */
  description?: string;

  /**
   * Specifies a ledger account object that will be created with the virtual account.
   * The resulting ledger account is linked to the virtual account for auto-ledgering
   * IPDs.
   */
  ledger_account?: Shared.LedgerAccountCreateRequest;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };

  /**
   * An array of routing detail objects.
   */
  routing_details?: Array<VirtualAccountCreateParams.RoutingDetail>;
}

export namespace VirtualAccountCreateParams {
  export interface AccountDetail {
    /**
     * The account number for the bank account.
     */
    account_number: string;

    /**
     * One of `iban`, `clabe`, `wallet_address`, or `other`. Use `other` if the bank
     * account number is in a generic format.
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

  export interface RoutingDetail {
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

    /**
     * If the routing detail is to be used for a specific payment type this field will
     * be populated, otherwise null.
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
      | 'zengin'
      | null;
  }
}

export interface VirtualAccountUpdateParams {
  counterparty_id?: string;

  /**
   * The ledger account that you'd like to link to the virtual account.
   */
  ledger_account_id?: string;

  metadata?: { [key: string]: string };

  name?: string | null;
}

export interface VirtualAccountListParams extends PageParams {
  counterparty_id?: string;

  internal_account_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: { [key: string]: string };
}

export declare namespace VirtualAccounts {
  export {
    type VirtualAccount as VirtualAccount,
    type VirtualAccountsPage as VirtualAccountsPage,
    type VirtualAccountCreateParams as VirtualAccountCreateParams,
    type VirtualAccountUpdateParams as VirtualAccountUpdateParams,
    type VirtualAccountListParams as VirtualAccountListParams,
  };
}
