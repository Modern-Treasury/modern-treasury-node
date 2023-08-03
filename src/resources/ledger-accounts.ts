// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as API from './index';
import { Page, PageParams } from 'modern-treasury/pagination';

export class LedgerAccounts extends APIResource {
  /**
   * Create a ledger account.
   */
  create(
    params: LedgerAccountCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerAccount>> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this.post('/api/ledger_accounts', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey || '', ...options?.headers },
    });
  }

  /**
   * Get details on a single ledger account.
   */
  retrieve(
    id: string,
    query?: LedgerAccountRetrieveParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerAccount>>;
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<LedgerAccount>>;
  retrieve(
    id: string,
    query: LedgerAccountRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerAccount>> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this.get(`/api/ledger_accounts/${id}`, { query, ...options });
  }

  /**
   * Update the details of a ledger account.
   */
  update(
    id: string,
    body?: LedgerAccountUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerAccount>>;
  update(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<LedgerAccount>>;
  update(
    id: string,
    body: LedgerAccountUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerAccount>> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this.patch(`/api/ledger_accounts/${id}`, { body, ...options });
  }

  /**
   * Get a list of ledger accounts.
   */
  list(query?: LedgerAccountListParams, options?: Core.RequestOptions): Core.PagePromise<LedgerAccountsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<LedgerAccountsPage>;
  list(
    query: LedgerAccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerAccountsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/api/ledger_accounts', LedgerAccountsPage, { query, ...options });
  }

  /**
   * Delete a ledger account.
   */
  del(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<LedgerAccount>> {
    return this.delete(`/api/ledger_accounts/${id}`, options);
  }
}

export class LedgerAccountsPage extends Page<LedgerAccount> {}
// alias so we can export it in the namespace
type _LedgerAccountsPage = LedgerAccountsPage;

export interface LedgerAccount {
  id: string;

  /**
   * The pending, posted, and available balances for this ledger account. The posted
   * balance is the sum of all posted entries on the account. The pending balance is
   * the sum of all pending and posted entries on the account. The available balance
   * is the posted incoming entries minus the sum of the pending and posted outgoing
   * amounts.
   */
  balances: LedgerAccount.Balances;

  created_at: string;

  /**
   * The description of the ledger account.
   */
  description: string | null;

  discarded_at: string | null;

  /**
   * The id of the ledger that this account belongs to.
   */
  ledger_id: string;

  /**
   * If the ledger account links to another object in Modern Treasury, the id will be
   * populated here, otherwise null.
   */
  ledgerable_id: string | null;

  /**
   * If the ledger account links to another object in Modern Treasury, the type will
   * be populated here, otherwise null. The value is one of internal_account or
   * external_account.
   */
  ledgerable_type: 'external_account' | 'internal_account' | null;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  /**
   * Lock version of the ledger account.
   */
  lock_version: number;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata: Record<string, string>;

  /**
   * The name of the ledger account.
   */
  name: string;

  /**
   * The normal balance of the ledger account.
   */
  normal_balance: 'credit' | 'debit';

  object: string;

  updated_at: string;
}

export namespace LedgerAccount {
  /**
   * The pending, posted, and available balances for this ledger account. The posted
   * balance is the sum of all posted entries on the account. The pending balance is
   * the sum of all pending and posted entries on the account. The available balance
   * is the posted incoming entries minus the sum of the pending and posted outgoing
   * amounts.
   */
  export interface Balances {
    /**
     * The available_balance is the sum of all posted inbound entries and pending
     * outbound entries. For credit normal, available_amount = posted_credits -
     * pending_debits; for debit normal, available_amount = posted_debits -
     * pending_credits.
     */
    available_balance: Balances.AvailableBalance;

    /**
     * The inclusive lower bound of the effective_at timestamp for the returned
     * balances.
     */
    effective_at_lower_bound: string | null;

    /**
     * The exclusive upper bound of the effective_at timestamp for the returned
     * balances.
     */
    effective_at_upper_bound: string | null;

    /**
     * The pending_balance is the sum of all pending and posted entries.
     */
    pending_balance: Balances.PendingBalance;

    /**
     * The posted_balance is the sum of all posted entries.
     */
    posted_balance: Balances.PostedBalance;
  }

  export namespace Balances {
    /**
     * The available_balance is the sum of all posted inbound entries and pending
     * outbound entries. For credit normal, available_amount = posted_credits -
     * pending_debits; for debit normal, available_amount = posted_debits -
     * pending_credits.
     */
    export interface AvailableBalance {
      amount: number;

      credits: number;

      /**
       * The currency of the ledger account.
       */
      currency: string;

      /**
       * The currency exponent of the ledger account.
       */
      currency_exponent: number;

      debits: number;
    }

    /**
     * The pending_balance is the sum of all pending and posted entries.
     */
    export interface PendingBalance {
      amount: number;

      credits: number;

      /**
       * The currency of the ledger account.
       */
      currency: string;

      /**
       * The currency exponent of the ledger account.
       */
      currency_exponent: number;

      debits: number;
    }

    /**
     * The posted_balance is the sum of all posted entries.
     */
    export interface PostedBalance {
      amount: number;

      credits: number;

      /**
       * The currency of the ledger account.
       */
      currency: string;

      /**
       * The currency exponent of the ledger account.
       */
      currency_exponent: number;

      debits: number;
    }
  }
}

export interface LedgerAccountCreateParams {
  /**
   * Body param: The currency of the ledger account.
   */
  currency: string;

  /**
   * Body param: The id of the ledger that this account belongs to.
   */
  ledger_id: string;

  /**
   * Body param: The name of the ledger account.
   */
  name: string;

  /**
   * Body param: The normal balance of the ledger account.
   */
  normal_balance: 'credit' | 'debit';

  /**
   * Body param: The currency exponent of the ledger account.
   */
  currency_exponent?: number | null;

  /**
   * Body param: The description of the ledger account.
   */
  description?: string | null;

  /**
   * Body param: If the ledger account links to another object in Modern Treasury,
   * the id will be populated here, otherwise null.
   */
  ledgerable_id?: string;

  /**
   * Body param: If the ledger account links to another object in Modern Treasury,
   * the type will be populated here, otherwise null. The value is one of
   * internal_account or external_account.
   */
  ledgerable_type?: 'external_account' | 'internal_account';

  /**
   * Body param: Additional data represented as key-value pairs. Both the key and
   * value must be strings.
   */
  metadata?: Record<string, string>;

  /**
   * Header param: This key should be something unique, preferably something like an
   * UUID.
   */
  'Idempotency-Key'?: string;
}

export interface LedgerAccountRetrieveParams {
  /**
   * Use `balances[effective_at_lower_bound]` and
   * `balances[effective_at_upper_bound]` to get the balances change between the two
   * timestamps. The lower bound is inclusive while the upper bound is exclusive of
   * the provided timestamps. If no value is supplied the balances will be retrieved
   * not including that bound. Use `balances[as_of_lock_version]` to retrieve a
   * balance as of a specific Ledger Account `lock_version`.
   */
  balances?: LedgerAccountRetrieveParams.Balances;
}

export namespace LedgerAccountRetrieveParams {
  /**
   * Use `balances[effective_at_lower_bound]` and
   * `balances[effective_at_upper_bound]` to get the balances change between the two
   * timestamps. The lower bound is inclusive while the upper bound is exclusive of
   * the provided timestamps. If no value is supplied the balances will be retrieved
   * not including that bound. Use `balances[as_of_lock_version]` to retrieve a
   * balance as of a specific Ledger Account `lock_version`.
   */
  export interface Balances {
    as_of_date?: string;

    as_of_lock_version?: number;

    effective_at?: string;

    effective_at_lower_bound?: string;

    effective_at_upper_bound?: string;
  }
}

export interface LedgerAccountUpdateParams {
  /**
   * The description of the ledger account.
   */
  description?: string | null;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;

  /**
   * The name of the ledger account.
   */
  name?: string;
}

export interface LedgerAccountListParams extends PageParams {
  id?: string;

  /**
   * Use `balances[effective_at_lower_bound]` and
   * `balances[effective_at_upper_bound]` to get the balances change between the two
   * timestamps. The lower bound is inclusive while the upper bound is exclusive of
   * the provided timestamps. If no value is supplied the balances will be retrieved
   * not including that bound.
   */
  balances?: LedgerAccountListParams.Balances;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * created at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use
   * created_at%5Bgt%5D=2000-01-01T12:00:00Z.
   */
  created_at?: Record<string, string>;

  currency?: string;

  ledger_account_category_id?: string;

  ledger_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;

  name?: string;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * updated at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use
   * updated_at%5Bgt%5D=2000-01-01T12:00:00Z.
   */
  updated_at?: Record<string, string>;
}

export namespace LedgerAccountListParams {
  /**
   * Use `balances[effective_at_lower_bound]` and
   * `balances[effective_at_upper_bound]` to get the balances change between the two
   * timestamps. The lower bound is inclusive while the upper bound is exclusive of
   * the provided timestamps. If no value is supplied the balances will be retrieved
   * not including that bound.
   */
  export interface Balances {
    as_of_date?: string;

    effective_at?: string;

    effective_at_lower_bound?: string;

    effective_at_upper_bound?: string;
  }
}

export namespace LedgerAccounts {
  export import LedgerAccount = API.LedgerAccount;
  export type LedgerAccountsPage = _LedgerAccountsPage;
  export import LedgerAccountCreateParams = API.LedgerAccountCreateParams;
  export import LedgerAccountRetrieveParams = API.LedgerAccountRetrieveParams;
  export import LedgerAccountUpdateParams = API.LedgerAccountUpdateParams;
  export import LedgerAccountListParams = API.LedgerAccountListParams;
}
