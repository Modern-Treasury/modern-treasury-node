// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class LedgerAccountCategories extends APIResource {
  /**
   * Create a ledger account category.
   */
  create(
    body: LedgerAccountCategoryCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerAccountCategory>> {
    return this.post('/api/ledger_account_categories', { body, ...options });
  }

  /**
   * Get the details on a single ledger account category.
   */
  retrieve(
    id: string,
    query?: LedgerAccountCategoryRetrieveParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerAccountCategory>>;
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<LedgerAccountCategory>>;
  retrieve(
    id: string,
    query: LedgerAccountCategoryRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerAccountCategory>> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }

    return this.get(`/api/ledger_account_categories/${id}`, { query, ...options });
  }

  /**
   * Update the details of a ledger account category.
   */
  update(
    id: string,
    body?: LedgerAccountCategoryUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerAccountCategory>>;
  update(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<LedgerAccountCategory>>;
  update(
    id: string,
    body: LedgerAccountCategoryUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerAccountCategory>> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }

    return this.patch(`/api/ledger_account_categories/${id}`, { body, ...options });
  }

  /**
   * Get a list of ledger account categories.
   */
  list(
    query?: LedgerAccountCategoryListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerAccountCategoriesPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<LedgerAccountCategoriesPage>;
  list(
    query: LedgerAccountCategoryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerAccountCategoriesPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/api/ledger_account_categories', LedgerAccountCategoriesPage, {
      query,
      ...options,
    });
  }

  /**
   * Delete a ledger account category.
   */
  del(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<LedgerAccountCategory>> {
    return this.delete(`/api/ledger_account_categories/${id}`, options);
  }

  /**
   * Add a ledger account category to an account.
   */
  addLedgerAccount(
    id: string,
    ledgerAccountId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    return this.put(`/api/ledger_account_categories/${id}/ledger_accounts/${ledgerAccountId}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Add a ledger account category to a ledger account category.
   */
  addNestedCategory(
    id: string,
    subCategoryId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    return this.put(`/api/ledger_account_categories/${id}/ledger_account_categories/${subCategoryId}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Delete a ledger account category from an account.
   */
  removeLedgerAccount(
    id: string,
    ledgerAccountId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    return this.delete(`/api/ledger_account_categories/${id}/ledger_accounts/${ledgerAccountId}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Delete a ledger account category from a ledger account category.
   */
  removeNestedCategory(
    id: string,
    subCategoryId: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Promise<void>>> {
    return this.delete(`/api/ledger_account_categories/${id}/ledger_account_categories/${subCategoryId}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }
}

export class LedgerAccountCategoriesPage extends Page<LedgerAccountCategory> {}

export interface LedgerAccountCategory {
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

  id: string;

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
  normal_balance: 'credit' | 'debit';

  object: string;

  updated_at: string;
}

export namespace LedgerAccountCategory {
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
  normal_balance: 'credit' | 'debit';

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
   * For example, if you want the balances as of a particular effective date
   * (YYYY-MM-DD), the encoded query string would be
   * balances%5Bas_of_date%5D=2000-12-31. The balances as of a date are inclusive of
   * entries with that exact date.
   */
  balances?: LedgerAccountCategoryRetrieveParams.Balances;
}

export namespace LedgerAccountCategoryRetrieveParams {
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
