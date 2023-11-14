// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as EventsAPI from 'modern-treasury/resources/events';
import { Page, type PageParams } from 'modern-treasury/pagination';

export class Events extends APIResource {
  /**
   * get event
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Event> {
    return this._client.get(`/api/events/${id}`, options);
  }

  /**
   * list events
   */
  list(query?: EventListParams, options?: Core.RequestOptions): Core.PagePromise<EventsPage, Event>;
  list(options?: Core.RequestOptions): Core.PagePromise<EventsPage, Event>;
  list(
    query: EventListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<EventsPage, Event> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/events', EventsPage, { query, ...options });
  }
}

export class EventsPage extends Page<Event> {}

export interface Event {
  id: string;

  created_at: string;

  /**
   * The body of the event.
   */
  data: Record<string, unknown>;

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

export namespace Events {
  export import Event = EventsAPI.Event;
  export import EventsPage = EventsAPI.EventsPage;
  export import EventListParams = EventsAPI.EventListParams;
}
