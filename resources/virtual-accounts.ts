// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as AccountDetails from '~/resources/account-details';
import * as RoutingDetails from '~/resources/routing-details';
import { Page, PageParams } from '~/pagination';

export class VirtualAccounts extends APIResource {
  /**
   * create virtual_account
   */
  create(
    params: VirtualAccountCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<VirtualAccount>> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this.post('/api/virtual_accounts', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey || '', ...options?.headers },
    });
  }

  /**
   * get virtual_account
   */
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Promise<void>>> {
    return this.get(`/api/virtual_accounts/${id}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * update virtual_account
   */
  update(
    id: string,
    body?: VirtualAccountUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<VirtualAccount>>;
  update(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<VirtualAccount>>;
  update(
    id: string,
    body: VirtualAccountUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<VirtualAccount>> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this.patch(`/api/virtual_accounts/${id}`, { body, ...options });
  }

  /**
   * Get a list of virtual accounts.
   */
  list(
    query?: VirtualAccountListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<VirtualAccountsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<VirtualAccountsPage>;
  list(
    query: VirtualAccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<VirtualAccountsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/api/virtual_accounts', VirtualAccountsPage, { query, ...options });
  }

  /**
   * delete virtual_account
   */
  del(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<VirtualAccount>> {
    return this.delete(`/api/virtual_accounts/${id}`, options);
  }
}

export class VirtualAccountsPage extends Page<VirtualAccount> {}

export interface VirtualAccount {
  /**
   * An array of account detail objects.
   */
  account_details: Array<AccountDetails.AccountDetail>;

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

  id: string;

  /**
   * The ID of the internal account that the virtual account is in.
   */
  internal_account_id: string;

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
   * The name of the virtual account.
   */
  name: string;

  object: string;

  /**
   * An array of routing detail objects. These will be the routing details of the
   * internal account.
   */
  routing_details: Array<RoutingDetails.RoutingDetail>;

  updated_at: string;
}

export interface VirtualAccountCreateParams {
  /**
   * Body param: An array of account detail objects.
   */
  account_details?: Array<AccountDetails.AccountDetail>;

  /**
   * Body param: The ID of the counterparty that the virtual account belongs to.
   */
  counterparty_id?: string;

  /**
   * Body param: The ID of a credit normal ledger account. When money leaves the
   * virtual account, this ledger account will be credited. Must be accompanied by a
   * debit_ledger_account_id if present.
   */
  credit_ledger_account_id?: string;

  /**
   * Body param: The ID of a debit normal ledger account. When money enters the
   * virtual account, this ledger account will be debited. Must be accompanied by a
   * credit_ledger_account_id if present.
   */
  debit_ledger_account_id?: string;

  /**
   * Body param: An optional description for internal use.
   */
  description?: string;

  /**
   * Body param: The ID of the internal account that this virtual account is
   * associated with.
   */
  internal_account_id: string;

  /**
   * Body param: Additional data represented as key-value pairs. Both the key and
   * value must be strings.
   */
  metadata?: Record<string, string>;

  /**
   * Body param: The name of the virtual account.
   */
  name: string;

  /**
   * Body param: An array of routing detail objects.
   */
  routing_details?: Array<RoutingDetails.RoutingDetail>;

  /**
   * Header param: This key should be something unique, preferably something like an
   * UUID.
   */
  'Idempotency-Key'?: string;
}

export interface VirtualAccountUpdateParams {
  counterparty_id?: string;

  metadata?: Record<string, string>;

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
  metadata?: Record<string, string>;
}
