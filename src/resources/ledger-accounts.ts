// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import { Page, type PageParams } from '../pagination';

export class LedgerAccounts extends APIResource {
  /**
   * Create a ledger account.
   *
   * @example
   * ```ts
   * const ledgerAccount = await client.ledgerAccounts.create({
   *   currency: 'currency',
   *   ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   name: 'name',
   *   normal_balance: 'credit',
   * });
   * ```
   */
  create(params: LedgerAccountCreateParams, options?: Core.RequestOptions): Core.APIPromise<LedgerAccount> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post('/api/ledger_accounts', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * Get details on a single ledger account.
   *
   * @example
   * ```ts
   * const ledgerAccount = await client.ledgerAccounts.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query?: LedgerAccountRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccount>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerAccount>;
  retrieve(
    id: string,
    query: LedgerAccountRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccount> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/api/ledger_accounts/${id}`, { query, ...options });
  }

  /**
   * Update the details of a ledger account.
   *
   * @example
   * ```ts
   * const ledgerAccount = await client.ledgerAccounts.update(
   *   'id',
   * );
   * ```
   */
  update(
    id: string,
    body?: LedgerAccountUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccount>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerAccount>;
  update(
    id: string,
    body: LedgerAccountUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccount> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.patch(`/api/ledger_accounts/${id}`, { body, ...options });
  }

  /**
   * Get a list of ledger accounts.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ledgerAccount of client.ledgerAccounts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: LedgerAccountListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerAccountsPage, LedgerAccount>;
  list(options?: Core.RequestOptions): Core.PagePromise<LedgerAccountsPage, LedgerAccount>;
  list(
    query: LedgerAccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerAccountsPage, LedgerAccount> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/ledger_accounts', LedgerAccountsPage, { query, ...options });
  }

  /**
   * Delete a ledger account.
   *
   * @example
   * ```ts
   * const ledgerAccount = await client.ledgerAccounts.del('id');
   * ```
   */
  del(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerAccount> {
    return this._client.delete(`/api/ledger_accounts/${id}`, options);
  }
}

export class LedgerAccountsPage extends Page<LedgerAccount> {}

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
   * An optional user-defined 180 character unique identifier.
   */
  external_id: string | null;

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
  ledgerable_type: 'counterparty' | 'external_account' | 'internal_account' | 'virtual_account' | null;

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
  normal_balance: Shared.TransactionDirection;

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
  normal_balance: Shared.TransactionDirection;

  /**
   * The currency exponent of the ledger account.
   */
  currency_exponent?: number | null;

  /**
   * The description of the ledger account.
   */
  description?: string | null;

  /**
   * The array of ledger account category ids that this ledger account should be a
   * child of.
   */
  ledger_account_category_ids?: Array<string>;

  /**
   * If the ledger account links to another object in Modern Treasury, the id will be
   * populated here, otherwise null.
   */
  ledgerable_id?: string;

  /**
   * If the ledger account links to another object in Modern Treasury, the type will
   * be populated here, otherwise null. The value is one of internal_account or
   * external_account.
   */
  ledgerable_type?: 'counterparty' | 'external_account' | 'internal_account' | 'virtual_account';

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;
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
  /**
   * If you have specific IDs to retrieve in bulk, you can pass them as query
   * parameters delimited with `id[]=`, for example `?id[]=123&id[]=abc`.
   */
  id?: Array<string>;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), `eq` (=), or `not_eq` (!=) to
   * filter by balance amount.
   */
  available_balance_amount?: LedgerAccountListParams.AvailableBalanceAmount;

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

  external_id?: string;

  ledger_account_category_id?: string;

  ledger_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;

  /**
   * If you have specific names to retrieve in bulk, you can pass them as query
   * parameters delimited with `name[]=`, for example `?name[]=123&name[]=abc`.
   */
  name?: Array<string>;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), `eq` (=), or `not_eq` (!=) to
   * filter by balance amount.
   */
  pending_balance_amount?: LedgerAccountListParams.PendingBalanceAmount;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), `eq` (=), or `not_eq` (!=) to
   * filter by balance amount.
   */
  posted_balance_amount?: LedgerAccountListParams.PostedBalanceAmount;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * updated at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use
   * updated_at%5Bgt%5D=2000-01-01T12:00:00Z.
   */
  updated_at?: Record<string, string>;
}

export namespace LedgerAccountListParams {
  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), `eq` (=), or `not_eq` (!=) to
   * filter by balance amount.
   */
  export interface AvailableBalanceAmount {
    eq?: number;

    gt?: number;

    gte?: number;

    lt?: number;

    lte?: number;

    not_eq?: number;
  }

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

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), `eq` (=), or `not_eq` (!=) to
   * filter by balance amount.
   */
  export interface PendingBalanceAmount {
    eq?: number;

    gt?: number;

    gte?: number;

    lt?: number;

    lte?: number;

    not_eq?: number;
  }

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), `eq` (=), or `not_eq` (!=) to
   * filter by balance amount.
   */
  export interface PostedBalanceAmount {
    eq?: number;

    gt?: number;

    gte?: number;

    lt?: number;

    lte?: number;

    not_eq?: number;
  }
}

LedgerAccounts.LedgerAccountsPage = LedgerAccountsPage;

export declare namespace LedgerAccounts {
  export {
    type LedgerAccount as LedgerAccount,
    LedgerAccountsPage as LedgerAccountsPage,
    type LedgerAccountCreateParams as LedgerAccountCreateParams,
    type LedgerAccountRetrieveParams as LedgerAccountRetrieveParams,
    type LedgerAccountUpdateParams as LedgerAccountUpdateParams,
    type LedgerAccountListParams as LedgerAccountListParams,
  };
}
