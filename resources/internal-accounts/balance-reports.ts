// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';
import * as Shared from '~/resources/shared';

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
  balances: Array<BalanceReport.Balances>;

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

export namespace BalanceReport {
  export interface Balances {
    /**
     * The balance amount.
     */
    amount: number;

    /**
     * The specific type of balance reported. One of `opening_ledger`,
     * `closing_ledger`, `current_ledger`, `opening_available`,
     * `opening_available_next_business_day`, `closing_available`, `current_available`,
     * or `other`.
     */
    balance_type:
      | 'closing_available'
      | 'closing_ledger'
      | 'current_available'
      | 'current_ledger'
      | 'opening_available'
      | 'opening_available_next_business_day'
      | 'opening_ledger'
      | 'other';

    created_at: string;

    /**
     * The currency of the balance.
     */
    currency: Shared.Currency;

    id: string;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    object: string;

    updated_at: string;

    /**
     * The code used by the bank when reporting this specific balance.
     */
    vendor_code: string;

    /**
     * The code used by the bank when reporting this specific balance.
     */
    vendor_code_type:
      | 'bai2'
      | 'bankprov'
      | 'bnk_dev'
      | 'cleartouch'
      | 'cross_river'
      | 'currencycloud'
      | 'dc_bank'
      | 'dwolla'
      | 'goldman_sachs'
      | 'iso20022'
      | 'jpmc'
      | 'mx'
      | 'signet'
      | 'silvergate'
      | 'swift'
      | 'us_bank'
      | null;
  }
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
