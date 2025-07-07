// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import { Page, type PageParams } from '../pagination';

export class LedgerAccountBalanceMonitors extends APIResource {
  /**
   * Create a ledger account balance monitor.
   *
   * @example
   * ```ts
   * const ledgerAccountBalanceMonitor =
   *   await client.ledgerAccountBalanceMonitors.create({
   *     alert_condition: {
   *       field: 'field',
   *       operator: 'operator',
   *       value: 0,
   *     },
   *     ledger_account_id: 'ledger_account_id',
   *   });
   * ```
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
    return this._client.post('/api/ledger_account_balance_monitors', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * Get details on a single ledger account balance monitor.
   *
   * @example
   * ```ts
   * const ledgerAccountBalanceMonitor =
   *   await client.ledgerAccountBalanceMonitors.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerAccountBalanceMonitor> {
    return this._client.get(`/api/ledger_account_balance_monitors/${id}`, options);
  }

  /**
   * Update a ledger account balance monitor.
   *
   * @example
   * ```ts
   * const ledgerAccountBalanceMonitor =
   *   await client.ledgerAccountBalanceMonitors.update('id');
   * ```
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
    return this._client.patch(`/api/ledger_account_balance_monitors/${id}`, { body, ...options });
  }

  /**
   * Get a list of ledger account balance monitors.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ledgerAccountBalanceMonitor of client.ledgerAccountBalanceMonitors.list()) {
   *   // ...
   * }
   * ```
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
    return this._client.getAPIList('/api/ledger_account_balance_monitors', LedgerAccountBalanceMonitorsPage, {
      query,
      ...options,
    });
  }

  /**
   * Delete a ledger account balance monitor.
   *
   * @example
   * ```ts
   * const ledgerAccountBalanceMonitor =
   *   await client.ledgerAccountBalanceMonitors.del('id');
   * ```
   */
  del(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerAccountBalanceMonitor> {
    return this._client.delete(`/api/ledger_account_balance_monitors/${id}`, options);
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
  metadata: { [key: string]: string };

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
    balances: Shared.LedgerBalances;

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
  metadata?: { [key: string]: string };
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
  metadata?: { [key: string]: string };
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
  metadata?: { [key: string]: string };
}

LedgerAccountBalanceMonitors.LedgerAccountBalanceMonitorsPage = LedgerAccountBalanceMonitorsPage;

export declare namespace LedgerAccountBalanceMonitors {
  export {
    type LedgerAccountBalanceMonitor as LedgerAccountBalanceMonitor,
    LedgerAccountBalanceMonitorsPage as LedgerAccountBalanceMonitorsPage,
    type LedgerAccountBalanceMonitorCreateParams as LedgerAccountBalanceMonitorCreateParams,
    type LedgerAccountBalanceMonitorUpdateParams as LedgerAccountBalanceMonitorUpdateParams,
    type LedgerAccountBalanceMonitorListParams as LedgerAccountBalanceMonitorListParams,
  };
}
