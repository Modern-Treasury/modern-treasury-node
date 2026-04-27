// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class JournalEntries extends APIResource {
  /**
   * Retrieve a specific journal entry
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/journal_entries/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of journal entries
   */
  list(query: JournalEntryListParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/journal_entries', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface JournalEntryListParams {
  /**
   * The ID of the journal report
   */
  journal_report_id: string;

  /**
   * Page number for pagination
   */
  page?: number;

  /**
   * Number of items per page
   */
  per_page?: number;
}

export declare namespace JournalEntries {
  export { type JournalEntryListParams as JournalEntryListParams };
}
