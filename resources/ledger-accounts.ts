// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class LedgerAccounts extends APIResource {
  /**
   * Create a ledger account.
   */
  create(
    body: LedgerAccountCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerAccount>> {
    return this.post('/api/ledger_accounts', { body, ...options });
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

export interface LedgerAccount {
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

  id: string;

  /**
   * The id of the ledger that this account belongs to.
   */
  ledger_id: string;

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
  export interface Balances {
    /**
     * The available_balance is the sum of all posted inbound entries and pending
     * outbound entries. For credit normal, available_amount = posted_credits -
     * pending_debits; for debit normal, available_amount = posted_debits -
     * pending_credits.
     */
    available_balance: Balances.AvailableBalance;

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
  }
}

export interface LedgerAccountCreateParams {
  /**
   * The currency of the ledger account.
   */
  currency: string;

  /**
   * The id of the ledger that this account belongs to.
   */
  ledger_id: string;

  /**
   * The name of the ledger account.
   */
  name: string;

  /**
   * The normal balance of the ledger account.
   */
  normal_balance: 'credit' | 'debit';

  /**
   * The currency exponent of the ledger account.
   */
  currency_exponent?: number | null;

  /**
   * The description of the ledger account.
   */
  description?: string | null;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;
}

export interface LedgerAccountRetrieveParams {
  /**
   * For example, if you want the balances as of a particular effective date
   * (YYYY-MM-DD), the encoded query string would be
   * balances%5Bas_of_date%5D=2000-12-31. The balances as of a date are inclusive of
   * entries with that exact date.
   */
  balances?: LedgerAccountRetrieveParams.Balances;
}

export namespace LedgerAccountRetrieveParams {
  export interface Balances {
    as_of_date?: string;
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

  /**
   * The normal balance of the ledger account.
   */
  normal_balance?: 'credit' | 'debit';
}

export interface LedgerAccountListParams extends PageParams {
  /**
   * For example, if you want the balances as of a particular effective date
   * (YYYY-MM-DD), the encoded query string would be
   * balances%5Bas_of_date%5D=2000-12-31. The balances as of a date are inclusive of
   * entries with that exact date.
   */
  balances?: LedgerAccountListParams.Balances;

  id?: string;

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
   * posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use
   * updated_at%5Bgt%5D=2000-01-01T12:00:00Z.
   */
  updated_at?: Record<string, string>;
}

export namespace LedgerAccountListParams {
  export interface Balances {
    as_of_date?: string;
  }
}
