// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Events extends APIResource {
  /**
   * get event
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Event> {
    return this._client.get(path`/api/events/${id}`, options);
  }

  /**
   * list events
   */
  list(
    query: EventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EventsPage, Event> {
    return this._client.getAPIList('/api/events', Page<Event>, { query, ...options });
  }
}

export type EventsPage = Page<Event>;

export interface Event {
  id: string;

  created_at: string;

  /**
   * The body of the event.
   */
  data: { [key: string]: unknown };

  /**
   * The ID of the entity for the event.
   */
  entity_id: string;

  /**
   * The name of the event.
   */
  event_name: string;

  /**
   * The time of the event.
   */
  event_time: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  /**
   * The type of resource for the event.
   */
  resource: string;

  updated_at: string;
}

export interface EventListParams extends PageParams {
  entity_id?: string;

  event_name?: string;

  /**
   * An inclusive upper bound for when the event occurred
   */
  event_time_end?: string;

  /**
   * An inclusive lower bound for when the event occurred
   */
  event_time_start?: string;

  resource?: string;
}

export declare namespace Events {
  export { type Event as Event, type EventsPage as EventsPage, type EventListParams as EventListParams };
}
