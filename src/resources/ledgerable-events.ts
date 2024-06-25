// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as LedgerableEventsAPI from './ledgerable-events';

export class LedgerableEvents extends APIResource {
  /**
   * Create a ledgerable event.
   */
  create(
    params: LedgerableEventCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerableEvent> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post('/api/ledgerable_events', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * Get details on a single ledgerable event.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerableEvent> {
    return this._client.get(`/api/ledgerable_events/${id}`, options);
  }
}

export interface LedgerableEvent {
  id: string;

  created_at: string;

  /**
   * Additionally data to be used by the Ledger Event Handler.
   */
  custom_data: unknown | null;

  /**
   * Description of the ledgerable event.
   */
  description: string | null;

  /**
   * Id of the ledger event handler that is used to create a ledger transaction.
   */
  ledger_event_handler_id: string;

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
   * Name of the ledgerable event.
   */
  name: string;

  object: string;

  updated_at: string;
}

export interface LedgerableEventCreateParams {
  /**
   * Name of the ledgerable event.
   */
  name: string;

  /**
   * Additionally data to be used by the Ledger Event Handler.
   */
  custom_data?: unknown | null;

  /**
   * Description of the ledgerable event.
   */
  description?: string | null;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;
}

export namespace LedgerableEvents {
  export import LedgerableEvent = LedgerableEventsAPI.LedgerableEvent;
  export import LedgerableEventCreateParams = LedgerableEventsAPI.LedgerableEventCreateParams;
}
