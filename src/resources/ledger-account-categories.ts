// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

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
    body: LedgerAccountCategoryCreateParams,
    options?: RequestOptions,
  ): APIPromise<LedgerAccountCategory> {
    return this._client.post('/api/ledger_account_categories', { body, ...options });
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
    query: LedgerAccountCategoryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LedgerAccountCategory> {
    return this._client.get(path`/api/ledger_account_categories/${id}`, { query, ...options });
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
    body: LedgerAccountCategoryUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LedgerAccountCategory> {
    return this._client.patch(path`/api/ledger_account_categories/${id}`, { body, ...options });
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
    query: LedgerAccountCategoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LedgerAccountCategoriesPage, LedgerAccountCategory> {
    return this._client.getAPIList('/api/ledger_account_categories', Page<LedgerAccountCategory>, {
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
   *   await client.ledgerAccountCategories.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<LedgerAccountCategory> {
    return this._client.delete(path`/api/ledger_account_categories/${id}`, options);
  }

  /**
   * Add a ledger account to a ledger account category.
   *
   * @example
   * ```ts
   * await client.ledgerAccountCategories.addLedgerAccount(
   *   'ledger_account_id',
   *   { id: 'id' },
   * );
   * ```
   */
  addLedgerAccount(
    ledgerAccountID: string,
    params: LedgerAccountCategoryAddLedgerAccountParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id } = params;
    return this._client.put(path`/api/ledger_account_categories/${id}/ledger_accounts/${ledgerAccountID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Add a ledger account category to a ledger account category.
   *
   * @example
   * ```ts
   * await client.ledgerAccountCategories.addNestedCategory(
   *   'sub_category_id',
   *   { id: 'id' },
   * );
   * ```
   */
  addNestedCategory(
    subCategoryID: string,
    params: LedgerAccountCategoryAddNestedCategoryParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id } = params;
    return this._client.put(
      path`/api/ledger_account_categories/${id}/ledger_account_categories/${subCategoryID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Remove a ledger account from a ledger account category.
   *
   * @example
   * ```ts
   * await client.ledgerAccountCategories.removeLedgerAccount(
   *   'ledger_account_id',
   *   { id: 'id' },
   * );
   * ```
   */
  removeLedgerAccount(
    ledgerAccountID: string,
    params: LedgerAccountCategoryRemoveLedgerAccountParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id } = params;
    return this._client.delete(
      path`/api/ledger_account_categories/${id}/ledger_accounts/${ledgerAccountID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Delete a ledger account category from a ledger account category.
   *
   * @example
   * ```ts
   * await client.ledgerAccountCategories.removeNestedCategory(
   *   'sub_category_id',
   *   { id: 'id' },
   * );
   * ```
   */
  removeNestedCategory(
    subCategoryID: string,
    params: LedgerAccountCategoryRemoveNestedCategoryParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id } = params;
    return this._client.delete(
      path`/api/ledger_account_categories/${id}/ledger_account_categories/${subCategoryID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export type LedgerAccountCategoriesPage = Page<LedgerAccountCategory>;

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
   * An optional user-defined 180 character unique identifier.
   */
  external_id?: string | null;

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
   * The balances as of a time are inclusive of entries with that exact time, but
   * with respect to the ledger accounts that are currently present in the category.
   */
  balances?: LedgerAccountCategoryRetrieveParams.Balances;
}

export namespace LedgerAccountCategoryRetrieveParams {
  /**
   * For example, if you want the balances as of a particular time (ISO8601), the
   * encoded query string would be `balances%5Beffective_at%5D=2000-12-31T12:00:00Z`.
   * The balances as of a time are inclusive of entries with that exact time, but
   * with respect to the ledger accounts that are currently present in the category.
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
   * The balances as of a time are inclusive of entries with that exact time, but
   * with respect to the ledger accounts that are currently present in the category.
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
   * The balances as of a time are inclusive of entries with that exact time, but
   * with respect to the ledger accounts that are currently present in the category.
   */
  export interface Balances {
    effective_at?: string;
  }
}

export interface LedgerAccountCategoryAddLedgerAccountParams {
  /**
   * id
   */
  id: string;
}

export interface LedgerAccountCategoryAddNestedCategoryParams {
  /**
   * id
   */
  id: string;
}

export interface LedgerAccountCategoryRemoveLedgerAccountParams {
  /**
   * id
   */
  id: string;
}

export interface LedgerAccountCategoryRemoveNestedCategoryParams {
  /**
   * id
   */
  id: string;
}

export declare namespace LedgerAccountCategories {
  export {
    type LedgerAccountCategory as LedgerAccountCategory,
    type LedgerAccountCategoriesPage as LedgerAccountCategoriesPage,
    type LedgerAccountCategoryCreateParams as LedgerAccountCategoryCreateParams,
    type LedgerAccountCategoryRetrieveParams as LedgerAccountCategoryRetrieveParams,
    type LedgerAccountCategoryUpdateParams as LedgerAccountCategoryUpdateParams,
    type LedgerAccountCategoryListParams as LedgerAccountCategoryListParams,
    type LedgerAccountCategoryAddLedgerAccountParams as LedgerAccountCategoryAddLedgerAccountParams,
    type LedgerAccountCategoryAddNestedCategoryParams as LedgerAccountCategoryAddNestedCategoryParams,
    type LedgerAccountCategoryRemoveLedgerAccountParams as LedgerAccountCategoryRemoveLedgerAccountParams,
    type LedgerAccountCategoryRemoveNestedCategoryParams as LedgerAccountCategoryRemoveNestedCategoryParams,
  };
}
