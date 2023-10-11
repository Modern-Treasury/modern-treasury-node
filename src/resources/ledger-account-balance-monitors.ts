// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as LedgerAccountBalanceMonitorsAPI from 'modern-treasury/resources/ledger-account-balance-monitors';
import { Page, type PageParams } from 'modern-treasury/pagination';

export class LedgerAccountBalanceMonitors extends APIResource {
  /**
   * Create a ledger account balance monitor.
   */
  create(
    params: LedgerAccountBalanceMonitorCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccountBalanceMonitor> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this.post('/api/ledger_account_balance_monitors', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * Get details on a single ledger account balance monitor.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerAccountBalanceMonitor> {
    return this.get(`/api/ledger_account_balance_monitors/${id}`, options);
  }

  /**
   * Update a ledger account balance monitor.
   */
  update(
    id: string,
    body?: LedgerAccountBalanceMonitorUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccountBalanceMonitor>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerAccountBalanceMonitor>;
  update(
    id: string,
    body: LedgerAccountBalanceMonitorUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerAccountBalanceMonitor> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this.patch(`/api/ledger_account_balance_monitors/${id}`, { body, ...options });
  }

  /**
   * Get a list of ledger account balance monitors.
   */
  list(
    query?: LedgerAccountBalanceMonitorListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerAccountBalanceMonitorsPage, LedgerAccountBalanceMonitor>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerAccountBalanceMonitorsPage, LedgerAccountBalanceMonitor>;
  list(
    query: LedgerAccountBalanceMonitorListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerAccountBalanceMonitorsPage, LedgerAccountBalanceMonitor> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/api/ledger_account_balance_monitors', LedgerAccountBalanceMonitorsPage, {
      query,
      ...options,
    });
  }

  /**
   * Delete a ledger account balance monitor.
   */
  del(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerAccountBalanceMonitor> {
    return this.delete(`/api/ledger_account_balance_monitors/${id}`, options);
  }
}

export class LedgerAccountBalanceMonitorsPage extends Page<LedgerAccountBalanceMonitor> {}

export interface LedgerAccountBalanceMonitor {
  id: string;

  /**
   * Describes the condition that must be satisfied for the monitor to be triggered.
   */
  alert_condition: LedgerAccountBalanceMonitor.AlertCondition;

  created_at: string;

  /**
   * The ledger account's balances and the monitor state as of the current ledger
   * account lock version.
   */
  current_ledger_account_balance_state: LedgerAccountBalanceMonitor.CurrentLedgerAccountBalanceState;

  /**
   * An optional, free-form description for internal use.
   */
  description: string | null;

  discarded_at: string | null;

  /**
   * The ledger account associated with this balance monitor.
   */
  ledger_account_id: string;

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

  updated_at: string;
}

export namespace LedgerAccountBalanceMonitor {
  /**
   * Describes the condition that must be satisfied for the monitor to be triggered.
   */
  export interface AlertCondition {
    /**
     * One of `available_balance_amount`, `pending_balance_amount`,
     * `posted_balance_amount`, `ledger_account_lock_version`.
     */
    field: string;

    /**
     * A logical operator to compare the `field` against the `value`. One of
     * `less_than`, `less_than_or_equals`, `equals`, `greater_than_or_equals`,
     * `greater_than`.
     */
    operator: string;

    /**
     * The monitor's `current_ledger_account_balance_state.triggered` will be `true`
     * when comparing the `field` to this integer value using the `operator` is
     * logically true.
     */
    value: number;
  }

  /**
   * The ledger account's balances and the monitor state as of the current ledger
   * account lock version.
   */
  export interface CurrentLedgerAccountBalanceState {
    balances: CurrentLedgerAccountBalanceState.Balances;

    /**
     * The current lock version of the ledger account.
     */
    ledger_account_lock_version: number;

    /**
     * If `true`, the ledger account's balances satisfy the `alert_condition` at this
     * lock version.
     */
    triggered: boolean;
  }

  export namespace CurrentLedgerAccountBalanceState {
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
}

export interface LedgerAccountBalanceMonitorCreateParams {
  /**
   * Describes the condition that must be satisfied for the monitor to be triggered.
   */
  alert_condition: LedgerAccountBalanceMonitorCreateParams.AlertCondition;

  /**
   * The ledger account associated with this balance monitor.
   */
  ledger_account_id: string;

  /**
   * An optional, free-form description for internal use.
   */
  description?: string;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;
}

export namespace LedgerAccountBalanceMonitorCreateParams {
  /**
   * Describes the condition that must be satisfied for the monitor to be triggered.
   */
  export interface AlertCondition {
    /**
     * One of `available_balance_amount`, `pending_balance_amount`,
     * `posted_balance_amount`, `ledger_account_lock_version`.
     */
    field: string;

    /**
     * A logical operator to compare the `field` against the `value`. One of
     * `less_than`, `less_than_or_equals`, `equals`, `greater_than_or_equals`,
     * `greater_than`.
     */
    operator: string;

    /**
     * The monitor's `current_ledger_account_balance_state.triggered` will be `true`
     * when comparing the `field` to this integer value using the `operator` is
     * logically true.
     */
    value: number;
  }
}

export interface LedgerAccountBalanceMonitorUpdateParams {
  /**
   * An optional, free-form description for internal use.
   */
  description?: string;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;
}

export interface LedgerAccountBalanceMonitorListParams extends PageParams {
  /**
   * If you have specific IDs to retrieve in bulk, you can pass them as query
   * parameters delimited with `id[]=`, for example `?id[]=123&id[]=abc`.
   */
  id?: Array<string>;

  /**
   * Query the balance monitors for a single ledger account.
   */
  ledger_account_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;
}

export namespace LedgerAccountBalanceMonitors {
  export import LedgerAccountBalanceMonitor = LedgerAccountBalanceMonitorsAPI.LedgerAccountBalanceMonitor;
  export import LedgerAccountBalanceMonitorsPage = LedgerAccountBalanceMonitorsAPI.LedgerAccountBalanceMonitorsPage;
  export import LedgerAccountBalanceMonitorCreateParams = LedgerAccountBalanceMonitorsAPI.LedgerAccountBalanceMonitorCreateParams;
  export import LedgerAccountBalanceMonitorUpdateParams = LedgerAccountBalanceMonitorsAPI.LedgerAccountBalanceMonitorUpdateParams;
  export import LedgerAccountBalanceMonitorListParams = LedgerAccountBalanceMonitorsAPI.LedgerAccountBalanceMonitorListParams;
}
