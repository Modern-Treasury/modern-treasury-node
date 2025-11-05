// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class JournalReports extends APIResource {
  /**
   * Retrieve a specific journal report
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/journal_reports/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update a journal report
   */
  update(
    id: string,
    body: JournalReportUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.patch(path`/api/journal_reports/${id}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of journal reports
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/journal_reports', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface JournalReportUpdateParams {
  metadata?: unknown;

  status?: string;
}

export declare namespace JournalReports {
  export { type JournalReportUpdateParams as JournalReportUpdateParams };
}
