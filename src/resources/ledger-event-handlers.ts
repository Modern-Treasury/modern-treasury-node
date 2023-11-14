// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as LedgerEventHandlersAPI from 'modern-treasury/resources/ledger-event-handlers';
import { Page, type PageParams } from 'modern-treasury/pagination';

export class LedgerEventHandlers extends APIResource {
  /**
   * create ledger_event_handler
   */
  create(
    params: LedgerEventHandlerCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerEventHandler> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post('/api/ledger_event_handlers', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * Get details on a single ledger event handler.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerEventHandler> {
    return this._client.get(`/api/ledger_event_handlers/${id}`, options);
  }

  /**
   * Get a list of ledger event handlers.
   */
  list(
    query?: LedgerEventHandlerListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerEventHandlersPage, LedgerEventHandler>;
  list(options?: Core.RequestOptions): Core.PagePromise<LedgerEventHandlersPage, LedgerEventHandler>;
  list(
    query: LedgerEventHandlerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerEventHandlersPage, LedgerEventHandler> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/ledger_event_handlers', LedgerEventHandlersPage, {
      query,
      ...options,
    });
  }

  /**
   * Archive a ledger event handler.
   */
  del(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerEventHandler> {
    return this._client.delete(`/api/ledger_event_handlers/${id}`, options);
  }
}

export class LedgerEventHandlersPage extends Page<LedgerEventHandler> {}

export interface LedgerEventHandler {
  id: string;

  conditions: LedgerEventHandler.Conditions | null;

  created_at: string;

  /**
   * An optional description.
   */
  description: string | null;

  discarded_at: string | null;

  /**
   * The id of the ledger that this event handler belongs to.
   */
  ledger_id: string | null;

  ledger_transaction_template: LedgerEventHandler.LedgerTransactionTemplate;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata: Record<string, string> | null;

  /**
   * Name of the ledger event handler.
   */
  name: string;

  object: string;

  updated_at: string;

  variables: Record<string, LedgerEventHandlerVariable> | null;
}

export namespace LedgerEventHandler {
  export interface Conditions {
    /**
     * The LHS of the conditional.
     */
    field: string;

    /**
     * What the operator between the `field` and `value` is.
     */
    operator: string;

    /**
     * The RHS of the conditional.
     */
    value: string;
  }

  export interface LedgerTransactionTemplate {
    /**
     * An optional description for internal use.
     */
    description: string | null;

    /**
     * The timestamp (ISO8601 format) at which the ledger transaction happened for
     * reporting purposes.
     */
    effective_at: string | null;

    /**
     * An array of ledger entry objects.
     */
    ledger_entries: Array<LedgerTransactionTemplate.LedgerEntry>;

    /**
     * To post a ledger transaction at creation, use `posted`.
     */
    status: string | null;
  }

  export namespace LedgerTransactionTemplate {
    export interface LedgerEntry {
      /**
       * The LHS of the conditional.
       */
      amount: string;

      /**
       * What the operator between the `field` and `value` is.
       */
      direction: string;

      /**
       * The RHS of the conditional.
       */
      ledger_account_id: string;
    }
  }
}

export interface LedgerEventHandlerVariable {
  query: LedgerEventHandlerVariable.Query;

  /**
   * The type of object this variable is. Currently, only "ledger_account" is
   * supported.
   */
  type: string;
}

export namespace LedgerEventHandlerVariable {
  export interface Query {
    /**
     * The LHS of the conditional.
     */
    field: string;

    /**
     * What the operator between the `field` and `value` is.
     */
    operator: string;

    /**
     * The RHS of the conditional.
     */
    value: string;
  }
}

export interface LedgerEventHandlerCreateParams {
  ledger_transaction_template: LedgerEventHandlerCreateParams.LedgerTransactionTemplate;

  /**
   * Name of the ledger event handler.
   */
  name: string;

  conditions?: LedgerEventHandlerCreateParams.Conditions | null;

  /**
   * An optional description.
   */
  description?: string | null;

  /**
   * The id of the ledger that this account belongs to.
   */
  ledger_id?: string;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string> | null;

  variables?: Record<string, LedgerEventHandlerVariable> | null;
}

export namespace LedgerEventHandlerCreateParams {
  export interface LedgerTransactionTemplate {
    /**
     * An optional description for internal use.
     */
    description: string | null;

    /**
     * The timestamp (ISO8601 format) at which the ledger transaction happened for
     * reporting purposes.
     */
    effective_at: string | null;

    /**
     * An array of ledger entry objects.
     */
    ledger_entries: Array<LedgerTransactionTemplate.LedgerEntry>;

    /**
     * To post a ledger transaction at creation, use `posted`.
     */
    status: string | null;
  }

  export namespace LedgerTransactionTemplate {
    export interface LedgerEntry {
      /**
       * The LHS of the conditional.
       */
      amount: string;

      /**
       * What the operator between the `field` and `value` is.
       */
      direction: string;

      /**
       * The RHS of the conditional.
       */
      ledger_account_id: string;
    }
  }

  export interface Conditions {
    /**
     * The LHS of the conditional.
     */
    field: string;

    /**
     * What the operator between the `field` and `value` is.
     */
    operator: string;

    /**
     * The RHS of the conditional.
     */
    value: string;
  }
}

export interface LedgerEventHandlerListParams extends PageParams {
  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use
   * created_at%5Bgt%5D=2000-01-01T12:00:00Z.
   */
  created_at?: Record<string, string>;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;

  name?: string;
}

export namespace LedgerEventHandlers {
  export import LedgerEventHandler = LedgerEventHandlersAPI.LedgerEventHandler;
  export import LedgerEventHandlerVariable = LedgerEventHandlersAPI.LedgerEventHandlerVariable;
  export import LedgerEventHandlersPage = LedgerEventHandlersAPI.LedgerEventHandlersPage;
  export import LedgerEventHandlerCreateParams = LedgerEventHandlersAPI.LedgerEventHandlerCreateParams;
  export import LedgerEventHandlerListParams = LedgerEventHandlersAPI.LedgerEventHandlerListParams;
}
