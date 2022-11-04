// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class BalanceReports extends APIResource {
  /**
   * Get a single balance report for a given internal account.
   */
  retrieve(
    internalAccountId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<BalanceReport>> {
    return this.get(`/api/internal_accounts/${internalAccountId}/balance_reports/${id}`, options);
  }

  /**
   * Get all balance reports for a given internal account.
   */
  list(
    internalAccountId: string,
    query?: BalanceReportListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BalanceReportsPage>;
  list(internalAccountId: string, options?: Core.RequestOptions): Core.PagePromise<BalanceReportsPage>;
  list(
    internalAccountId: string,
    query: BalanceReportListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<BalanceReportsPage> {
    if (isRequestOptions(query)) {
      return this.list(internalAccountId, {}, query);
    }

    return this.getAPIList(
      `/api/internal_accounts/${internalAccountId}/balance_reports`,
      BalanceReportsPage,
      { query, ...options },
    );
  }
}

export class BalanceReportsPage extends Page<BalanceReport> {}

export interface BalanceReport {
  /**
   * The date of the balance report in local time.
   */
  as_of_date: string;

  /**
   * The time (24-hour clock) of the balance report in local time.
   */
  as_of_time: string | null;

  /**
   * The specific type of balance report. One of `intraday`, `previous_day`,
   * `real_time`, or `other`.
   */
  balance_report_type: 'intraday' | 'other' | 'previous_day' | 'real_time';

  /**
   * An array of `Balance` objects.
   */
  balances: Array<Record<string, unknown>>;

  created_at: string;

  id: string;

  /**
   * The ID of one of your organization's Internal Accounts.
   */
  internal_account_id: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  updated_at: string;
}

export interface BalanceReportListParams extends PageParams {
  /**
   * The date of the balance report in local time.
   */
  as_of_date?: string;

  /**
   * The specific type of balance report. One of `intraday`, `previous_day`,
   * `real_time`, or `other`.
   */
  balance_report_type?: 'intraday' | 'other' | 'previous_day' | 'real_time';
}
