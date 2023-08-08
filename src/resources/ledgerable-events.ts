// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import * as API from './index';

export class LedgerableEvents extends APIResource {
  /**
   * Translation missing:
   * en.openapi.descriptions.ledger.operations.create_ledgerable_event
   */
  create(
    params: LedgerableEventCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LedgerableEvent> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this.post('/api/ledgerable_events', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey || '', ...options?.headers },
    });
  }

  /**
   * Get details on a single ledgerable event.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<LedgerableEvent> {
    return this.get(`/api/ledgerable_events/${id}`, options);
  }
}

export interface LedgerableEvent {
  id: string;

  /**
   * Value in specified currency's smallest unit. e.g. $10 would be represented
   * as 1000.
   */
  amount: number;

  created_at: string;

  /**
   * An ISO 4217 conformed currency or a custom currency.
   */
  currency: string;

  /**
   * Must be included if currency is a custom currency. The currency_exponent cannot
   * exceed 30.
   */
  currency_exponent: number | null;

  /**
   * Additionally data to be used by the Ledger Event Handler.
   */
  custom_data: unknown | null;

  /**
   * Description of the ledgerable event.
   */
  description: string | null;

  /**
   * One of `credit`, `debit`.
   */
  direction: string | null;

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
   * Body param: Value in specified currency's smallest unit. e.g. $10 would be
   * represented as 1000.
   */
  amount: number;

  /**
   * Body param: Name of the ledgerable event.
   */
  name: string;

  /**
   * Body param: An ISO 4217 conformed currency or a custom currency.
   */
  currency?: string | null;

  /**
   * Body param: Must be included if currency is a custom currency. The
   * currency_exponent cannot exceed 30.
   */
  currency_exponent?: number | null;

  /**
   * Body param: Additionally data to be used by the Ledger Event Handler.
   */
  custom_data?: unknown | null;

  /**
   * Body param: Description of the ledgerable event.
   */
  description?: string | null;

  /**
   * Body param: One of `credit`, `debit`.
   */
  direction?: string | null;

  /**
   * Body param: Additional data represented as key-value pairs. Both the key and
   * value must be strings.
   */
  metadata?: Record<string, string>;

  /**
   * Header param: This key should be something unique, preferably something like an
   * UUID.
   */
  'Idempotency-Key'?: string;
}

export namespace LedgerableEvents {
  export import LedgerableEvent = API.LedgerableEvent;
  export import LedgerableEventCreateParams = API.LedgerableEventCreateParams;
}
