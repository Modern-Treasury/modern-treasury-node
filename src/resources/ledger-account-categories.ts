// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import { Page, type PageParams } from '../pagination';

export class LedgerAccountCategories extends APIResource {
  /**
   * Create a ledger account category.
   *
   * @example
   * ```ts
   * const ledgerAccountCategory =
   *   await client.ledgerAccountCategories.create({
   *     currency: 'currency',
   *     ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     name: 'name',
   *     normal_balance: 'credit',
   *   });
   * ```
   */
  create(
    params: LedgerAccountCategoryCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccountCategory> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post('/api/ledger_account_categories', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * Get the details on a single ledger account category.
   *
   * @example
   * ```ts
   * const ledgerAccountCategory =
   *   await client.ledgerAccountCategories.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query?: LedgerAccountCategoryRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccountCategory>;
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerAccountCategory>;
  retrieve(
    id: string,
    query: LedgerAccountCategoryRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccountCategory> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/api/ledger_account_categories/${id}`, { query, ...options });
  }

  /**
   * Update the details of a ledger account category.
   *
   * @example
   * ```ts
   * const ledgerAccountCategory =
   *   await client.ledgerAccountCategories.update('id');
   * ```
   */
  update(
    id: string,
    body?: LedgerAccountCategoryUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccountCategory>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerAccountCategory>;
  update(
    id: string,
    body: LedgerAccountCategoryUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccountCategory> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.patch(`/api/ledger_account_categories/${id}`, { body, ...options });
  }

  /**
   * Get a list of ledger account categories.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ledgerAccountCategory of client.ledgerAccountCategories.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: LedgerAccountCategoryListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerAccountCategoriesPage, LedgerAccountCategory>;
  list(options?: Core.RequestOptions): Core.PagePromise<LedgerAccountCategoriesPage, LedgerAccountCategory>;
  list(
    query: LedgerAccountCategoryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerAccountCategoriesPage, LedgerAccountCategory> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/ledger_account_categories', LedgerAccountCategoriesPage, {
      query,
      ...options,
    });
  }

  /**
   * Delete a ledger account category.
   *
   * @example
   * ```ts
   * const ledgerAccountCategory =
   *   await client.ledgerAccountCategories.del('id');
   * ```
   */
  del(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerAccountCategory> {
    return this._client.delete(`/api/ledger_account_categories/${id}`, options);
  }

  /**
   * Add a ledger account to a ledger account category.
   *
   * @example
   * ```ts
   * await client.ledgerAccountCategories.addLedgerAccount(
   *   'id',
   *   'ledger_account_id',
   * );
   * ```
   */
  addLedgerAccount(
    id: string,
    ledgerAccountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put(`/api/ledger_account_categories/${id}/ledger_accounts/${ledgerAccountId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Add a ledger account category to a ledger account category.
   *
   * @example
   * ```ts
   * await client.ledgerAccountCategories.addNestedCategory(
   *   'id',
   *   'sub_category_id',
   * );
   * ```
   */
  addNestedCategory(id: string, subCategoryId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(
      `/api/ledger_account_categories/${id}/ledger_account_categories/${subCategoryId}`,
      { ...options, headers: { Accept: '*/*', ...options?.headers } },
    );
  }

  /**
   * Remove a ledger account from a ledger account category.
   *
   * @example
   * ```ts
   * await client.ledgerAccountCategories.removeLedgerAccount(
   *   'id',
   *   'ledger_account_id',
   * );
   * ```
   */
  removeLedgerAccount(
    id: string,
    ledgerAccountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(`/api/ledger_account_categories/${id}/ledger_accounts/${ledgerAccountId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Delete a ledger account category from a ledger account category.
   *
   * @example
   * ```ts
   * await client.ledgerAccountCategories.removeNestedCategory(
   *   'id',
   *   'sub_category_id',
   * );
   * ```
   */
  removeNestedCategory(
    id: string,
    subCategoryId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.delete(
      `/api/ledger_account_categories/${id}/ledger_account_categories/${subCategoryId}`,
      { ...options, headers: { Accept: '*/*', ...options?.headers } },
    );
  }
}

export class LedgerAccountCategoriesPage extends Page<LedgerAccountCategory> {}

export interface LedgerAccountCategory {
  id: string;

  /**
   * The pending, posted, and available balances for this ledger account category.
   * The posted balance is the sum of all posted entries on the account. The pending
   * balance is the sum of all pending and posted entries on the account. The
   * available balance is the posted incoming entries minus the sum of the pending
   * and posted outgoing amounts.
   */
  balances: Shared.LedgerBalances;

  created_at: string;

  /**
   * The description of the ledger account category.
   */
  description: string | null;

  discarded_at: string | null;

  /**
   * An optional user-defined 180 character unique identifier.
   */
  external_id: string | null;

  /**
   * The id of the ledger that this account category belongs to.
   */
  ledger_id: string;

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
   * The name of the ledger account category.
   */
  name: string;

  /**
   * The normal balance of the ledger account category.
   */
  normal_balance: Shared.TransactionDirection;

  object: string;

  updated_at: string;
}

export interface LedgerAccountCategoryCreateParams {
  /**
   * The currency of the ledger account category.
   */
  currency: string;

  /**
   * The id of the ledger that this account category belongs to.
   */
  ledger_id: string;

  /**
   * The name of the ledger account category.
   */
  name: string;

  /**
   * The normal balance of the ledger account category.
   */
  normal_balance: Shared.TransactionDirection;

  /**
   * The currency exponent of the ledger account category.
   */
  currency_exponent?: number | null;

  /**
   * The description of the ledger account category.
   */
  description?: string | null;

  /**
   * The array of ledger account category ids that this ledger account category
   * should be a child of.
   */
  ledger_account_category_ids?: Array<string>;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };
}

export interface LedgerAccountCategoryRetrieveParams {
  /**
   * For example, if you want the balances as of a particular time (ISO8601), the
   * encoded query string would be `balances%5Beffective_at%5D=2000-12-31T12:00:00Z`.
   * The balances as of a time are inclusive of entries with that exact time.
   */
  balances?: LedgerAccountCategoryRetrieveParams.Balances;
}

export namespace LedgerAccountCategoryRetrieveParams {
  /**
   * For example, if you want the balances as of a particular time (ISO8601), the
   * encoded query string would be `balances%5Beffective_at%5D=2000-12-31T12:00:00Z`.
   * The balances as of a time are inclusive of entries with that exact time.
   */
  export interface Balances {
    as_of_date?: string;

    effective_at?: string;
  }
}

export interface LedgerAccountCategoryUpdateParams {
  /**
   * The description of the ledger account category.
   */
  description?: string | null;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };

  /**
   * The name of the ledger account category.
   */
  name?: string;
}

export interface LedgerAccountCategoryListParams extends PageParams {
  /**
   * If you have specific IDs to retrieve in bulk, you can pass them as query
   * parameters delimited with `id[]=`, for example `?id[]=123&id[]=abc`.
   */
  id?: Array<string>;

  /**
   * For example, if you want the balances as of a particular time (ISO8601), the
   * encoded query string would be `balances%5Beffective_at%5D=2000-12-31T12:00:00Z`.
   * The balances as of a time are inclusive of entries with that exact time.
   */
  balances?: LedgerAccountCategoryListParams.Balances;

  currency?: string;

  external_id?: string;

  /**
   * Query categories which contain a ledger account directly or through child
   * categories.
   */
  ledger_account_id?: string;

  ledger_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: { [key: string]: string };

  name?: string;

  /**
   * Query categories that are nested underneath a parent category
   */
  parent_ledger_account_category_id?: string;
}

export namespace LedgerAccountCategoryListParams {
  /**
   * For example, if you want the balances as of a particular time (ISO8601), the
   * encoded query string would be `balances%5Beffective_at%5D=2000-12-31T12:00:00Z`.
   * The balances as of a time are inclusive of entries with that exact time.
   */
  export interface Balances {
    effective_at?: string;
  }
}

LedgerAccountCategories.LedgerAccountCategoriesPage = LedgerAccountCategoriesPage;

export declare namespace LedgerAccountCategories {
  export {
    type LedgerAccountCategory as LedgerAccountCategory,
    LedgerAccountCategoriesPage as LedgerAccountCategoriesPage,
    type LedgerAccountCategoryCreateParams as LedgerAccountCategoryCreateParams,
    type LedgerAccountCategoryRetrieveParams as LedgerAccountCategoryRetrieveParams,
    type LedgerAccountCategoryUpdateParams as LedgerAccountCategoryUpdateParams,
    type LedgerAccountCategoryListParams as LedgerAccountCategoryListParams,
  };
}
