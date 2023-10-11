// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import * as LedgerAccountStatementsAPI from 'modern-treasury/resources/ledger-account-statements';

export class LedgerAccountStatements extends APIResource {
  /**
   * Create a ledger account statement.
   */
  create(
    params: LedgerAccountStatementCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccountStatementCreateResponse> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this.post('/api/ledger_account_statements', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * Get details on a single ledger account statement.
   */
  retrieve(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccountStatementRetrieveResponse> {
    return this.get(`/api/ledger_account_statements/${id}`, options);
  }
}

export interface LedgerAccountStatementCreateResponse {
  id: string;

  created_at: string;

  /**
   * The description of the ledger account statement.
   */
  description: string | null;

  /**
   * The inclusive lower bound of the effective_at timestamp of the ledger entries to
   * be included in the ledger account statement.
   */
  effective_at_lower_bound: string;

  /**
   * The exclusive upper bound of the effective_at timestamp of the ledger entries to
   * be included in the ledger account statement.
   */
  effective_at_upper_bound: string;

  /**
   * The pending, posted, and available balances for this ledger account at the
   * `effective_at_upper_bound`. The posted balance is the sum of all posted entries
   * on the account. The pending balance is the sum of all pending and posted entries
   * on the account. The available balance is the posted incoming entries minus the
   * sum of the pending and posted outgoing amounts.
   */
  ending_balance: LedgerAccountStatementCreateResponse.EndingBalance;

  /**
   * The id of the ledger account whose ledger entries are queried against, and its
   * balances are computed as a result.
   */
  ledger_account_id: string;

  /**
   * Lock version of the ledger account at the time of statement generation.
   */
  ledger_account_lock_version: number;

  /**
   * The normal balance of the ledger account.
   */
  ledger_account_normal_balance: 'credit' | 'debit';

  /**
   * The id of the ledger that this ledger account statement belongs to.
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

  object: string;

  /**
   * The pending, posted, and available balances for this ledger account at the
   * `effective_at_lower_bound`. The posted balance is the sum of all posted entries
   * on the account. The pending balance is the sum of all pending and posted entries
   * on the account. The available balance is the posted incoming entries minus the
   * sum of the pending and posted outgoing amounts.
   */
  starting_balance: LedgerAccountStatementCreateResponse.StartingBalance;

  updated_at: string;
}

export namespace LedgerAccountStatementCreateResponse {
  /**
   * The pending, posted, and available balances for this ledger account at the
   * `effective_at_upper_bound`. The posted balance is the sum of all posted entries
   * on the account. The pending balance is the sum of all pending and posted entries
   * on the account. The available balance is the posted incoming entries minus the
   * sum of the pending and posted outgoing amounts.
   */
  export interface EndingBalance {
    /**
     * The available_balance is the sum of all posted inbound entries and pending
     * outbound entries. For credit normal, available_amount = posted_credits -
     * pending_debits; for debit normal, available_amount = posted_debits -
     * pending_credits.
     */
    available_balance: EndingBalance.AvailableBalance;

    /**
     * The pending_balance is the sum of all pending and posted entries.
     */
    pending_balance: EndingBalance.PendingBalance;

    /**
     * The posted_balance is the sum of all posted entries.
     */
    posted_balance: EndingBalance.PostedBalance;
  }

  export namespace EndingBalance {
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

  /**
   * The pending, posted, and available balances for this ledger account at the
   * `effective_at_lower_bound`. The posted balance is the sum of all posted entries
   * on the account. The pending balance is the sum of all pending and posted entries
   * on the account. The available balance is the posted incoming entries minus the
   * sum of the pending and posted outgoing amounts.
   */
  export interface StartingBalance {
    /**
     * The available_balance is the sum of all posted inbound entries and pending
     * outbound entries. For credit normal, available_amount = posted_credits -
     * pending_debits; for debit normal, available_amount = posted_debits -
     * pending_credits.
     */
    available_balance: StartingBalance.AvailableBalance;

    /**
     * The pending_balance is the sum of all pending and posted entries.
     */
    pending_balance: StartingBalance.PendingBalance;

    /**
     * The posted_balance is the sum of all posted entries.
     */
    posted_balance: StartingBalance.PostedBalance;
  }

  export namespace StartingBalance {
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

export interface LedgerAccountStatementRetrieveResponse {
  id: string;

  created_at: string;

  /**
   * The description of the ledger account statement.
   */
  description: string | null;

  /**
   * The inclusive lower bound of the effective_at timestamp of the ledger entries to
   * be included in the ledger account statement.
   */
  effective_at_lower_bound: string;

  /**
   * The exclusive upper bound of the effective_at timestamp of the ledger entries to
   * be included in the ledger account statement.
   */
  effective_at_upper_bound: string;

  /**
   * The pending, posted, and available balances for this ledger account at the
   * `effective_at_upper_bound`. The posted balance is the sum of all posted entries
   * on the account. The pending balance is the sum of all pending and posted entries
   * on the account. The available balance is the posted incoming entries minus the
   * sum of the pending and posted outgoing amounts.
   */
  ending_balance: LedgerAccountStatementRetrieveResponse.EndingBalance;

  /**
   * The id of the ledger account whose ledger entries are queried against, and its
   * balances are computed as a result.
   */
  ledger_account_id: string;

  /**
   * Lock version of the ledger account at the time of statement generation.
   */
  ledger_account_lock_version: number;

  /**
   * The normal balance of the ledger account.
   */
  ledger_account_normal_balance: 'credit' | 'debit';

  /**
   * The id of the ledger that this ledger account statement belongs to.
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

  object: string;

  /**
   * The pending, posted, and available balances for this ledger account at the
   * `effective_at_lower_bound`. The posted balance is the sum of all posted entries
   * on the account. The pending balance is the sum of all pending and posted entries
   * on the account. The available balance is the posted incoming entries minus the
   * sum of the pending and posted outgoing amounts.
   */
  starting_balance: LedgerAccountStatementRetrieveResponse.StartingBalance;

  updated_at: string;
}

export namespace LedgerAccountStatementRetrieveResponse {
  /**
   * The pending, posted, and available balances for this ledger account at the
   * `effective_at_upper_bound`. The posted balance is the sum of all posted entries
   * on the account. The pending balance is the sum of all pending and posted entries
   * on the account. The available balance is the posted incoming entries minus the
   * sum of the pending and posted outgoing amounts.
   */
  export interface EndingBalance {
    /**
     * The available_balance is the sum of all posted inbound entries and pending
     * outbound entries. For credit normal, available_amount = posted_credits -
     * pending_debits; for debit normal, available_amount = posted_debits -
     * pending_credits.
     */
    available_balance: EndingBalance.AvailableBalance;

    /**
     * The pending_balance is the sum of all pending and posted entries.
     */
    pending_balance: EndingBalance.PendingBalance;

    /**
     * The posted_balance is the sum of all posted entries.
     */
    posted_balance: EndingBalance.PostedBalance;
  }

  export namespace EndingBalance {
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

  /**
   * The pending, posted, and available balances for this ledger account at the
   * `effective_at_lower_bound`. The posted balance is the sum of all posted entries
   * on the account. The pending balance is the sum of all pending and posted entries
   * on the account. The available balance is the posted incoming entries minus the
   * sum of the pending and posted outgoing amounts.
   */
  export interface StartingBalance {
    /**
     * The available_balance is the sum of all posted inbound entries and pending
     * outbound entries. For credit normal, available_amount = posted_credits -
     * pending_debits; for debit normal, available_amount = posted_debits -
     * pending_credits.
     */
    available_balance: StartingBalance.AvailableBalance;

    /**
     * The pending_balance is the sum of all pending and posted entries.
     */
    pending_balance: StartingBalance.PendingBalance;

    /**
     * The posted_balance is the sum of all posted entries.
     */
    posted_balance: StartingBalance.PostedBalance;
  }

  export namespace StartingBalance {
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

export interface LedgerAccountStatementCreateParams {
  /**
   * The inclusive lower bound of the effective_at timestamp of the ledger entries to
   * be included in the ledger account statement.
   */
  effective_at_lower_bound: string;

  /**
   * The exclusive upper bound of the effective_at timestamp of the ledger entries to
   * be included in the ledger account statement.
   */
  effective_at_upper_bound: string;

  /**
   * The id of the ledger account whose ledger entries are queried against, and its
   * balances are computed as a result.
   */
  ledger_account_id: string;

  /**
   * The description of the ledger account statement.
   */
  description?: string | null;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;
}

export namespace LedgerAccountStatements {
  export import LedgerAccountStatementCreateResponse = LedgerAccountStatementsAPI.LedgerAccountStatementCreateResponse;
  export import LedgerAccountStatementRetrieveResponse = LedgerAccountStatementsAPI.LedgerAccountStatementRetrieveResponse;
  export import LedgerAccountStatementCreateParams = LedgerAccountStatementsAPI.LedgerAccountStatementCreateParams;
}
