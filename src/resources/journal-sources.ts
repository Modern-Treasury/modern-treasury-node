// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class JournalSources extends APIResource {
  /**
   * Retrieve a list of journal sources
   */
  list(query: JournalSourceListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/journal_sources', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a specific journal source
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/journal_sources/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface JournalSourceListParams {
  /**
   * The ID of the journal entry
   */
  journal_entry_id?: string;

  /**
   * The ID of the journal report
   */
  journal_report_id?: string;

  /**
   * Page number for pagination
   */
  page?: number;

  /**
   * Number of items per page
   */
  per_page?: number;

  /**
   * The ID of the source object
   */
  source_id?: string;

  /**
   * The type of the source object
   */
  source_type?: string;
}

export declare namespace JournalSources {
  export { type JournalSourceListParams as JournalSourceListParams };
}
