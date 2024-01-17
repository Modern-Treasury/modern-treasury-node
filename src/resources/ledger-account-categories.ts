// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as LedgerAccountCategoriesAPI from 'modern-treasury/resources/ledger-account-categories';
import * as Shared from 'modern-treasury/resources/shared';
import { Page, type PageParams } from 'modern-treasury/pagination';

export class LedgerAccountCategories extends APIResource {
  /**
   * Create a ledger account category.
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
   */
  del(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerAccountCategory> {
    return this._client.delete(`/api/ledger_account_categories/${id}`, options);
  }

  /**
   * Add a ledger account to a ledger account category.
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
   */
  addNestedCategory(id: string, subCategoryId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(
      `/api/ledger_account_categories/${id}/ledger_account_categories/${subCategoryId}`,
      { ...options, headers: { Accept: '*/*', ...options?.headers } },
    );
  }

  /**
   * Remove a ledger account from a ledger account category.
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
  balances: LedgerAccountCategory.Balances;

  created_at: string;

  /**
   * The description of the ledger account category.
   */
  description: string | null;

  discarded_at: string | null;

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
  metadata: Record<string, string>;

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

export namespace LedgerAccountCategory {
  /**
   * The pending, posted, and available balances for this ledger account category.
   * The posted balance is the sum of all posted entries on the account. The pending
   * balance is the sum of all pending and posted entries on the account. The
   * available balance is the posted incoming entries minus the sum of the pending
   * and posted outgoing amounts.
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
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;
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
  metadata?: Record<string, string>;

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
  metadata?: Record<string, string>;

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

export namespace LedgerAccountCategories {
  export import LedgerAccountCategory = LedgerAccountCategoriesAPI.LedgerAccountCategory;
  export import LedgerAccountCategoriesPage = LedgerAccountCategoriesAPI.LedgerAccountCategoriesPage;
  export import LedgerAccountCategoryCreateParams = LedgerAccountCategoriesAPI.LedgerAccountCategoryCreateParams;
  export import LedgerAccountCategoryRetrieveParams = LedgerAccountCategoriesAPI.LedgerAccountCategoryRetrieveParams;
  export import LedgerAccountCategoryUpdateParams = LedgerAccountCategoriesAPI.LedgerAccountCategoryUpdateParams;
  export import LedgerAccountCategoryListParams = LedgerAccountCategoriesAPI.LedgerAccountCategoryListParams;
}
