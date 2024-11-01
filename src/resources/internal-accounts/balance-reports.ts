// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import { Page, type PageParams } from '../../pagination';

export class BalanceReports extends APIResource {
  /**
   * create balance reports
   */
  create(
    internalAccountId: string,
    params: BalanceReportCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BalanceReport> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post(`/api/internal_accounts/${internalAccountId}/balance_reports`, {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * Get a single balance report for a given internal account.
   */
  retrieve(
    internalAccountId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BalanceReport> {
    return this._client.get(`/api/internal_accounts/${internalAccountId}/balance_reports/${id}`, options);
  }

  /**
   * Get all balance reports for a given internal account.
   */
  list(
    internalAccountId: string,
    query?: BalanceReportListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BalanceReportsPage, BalanceReport>;
  list(
    internalAccountId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BalanceReportsPage, BalanceReport>;
  list(
    internalAccountId: string,
    query: BalanceReportListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<BalanceReportsPage, BalanceReport> {
    if (isRequestOptions(query)) {
      return this.list(internalAccountId, {}, query);
    }
    return this._client.getAPIList(
      `/api/internal_accounts/${internalAccountId}/balance_reports`,
      BalanceReportsPage,
      { query, ...options },
    );
  }

  /**
   * Deletes a given balance report.
   */
  del(internalAccountId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/internal_accounts/${internalAccountId}/balance_reports/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export class BalanceReportsPage extends Page<BalanceReport> {}

export interface BalanceReport {
  id: string;

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
  balances: Array<BalanceReport.Balance>;

  created_at: string;

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
  export interface Balance {
    id: string;

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
     * The type of `vendor_code` being reported. Can be one of `bai2`, `bankprov`,
     * `bnk_dev`, `cleartouch`, `currencycloud`, `cross_river`, `dc_bank`, `dwolla`,
     * `evolve`, `goldman_sachs`, `iso20022`, `jpmc`, `mx`, `signet`, `silvergate`,
     * `swift`, or `us_bank`.
     */
    vendor_code_type: string | null;
  }
}

export interface BalanceReportCreateParams {
  /**
   * The date of the balance report in local time.
   */
  as_of_date: string;

  /**
   * The time (24-hour clock) of the balance report in local time.
   */
  as_of_time: string;

  /**
   * The specific type of balance report. One of `intraday`, `previous_day`,
   * `real_time`, or `other`.
   */
  balance_report_type: 'intraday' | 'other' | 'previous_day' | 'real_time';

  /**
   * An array of `Balance` objects.
   */
  balances: Array<BalanceReportCreateParams.Balance>;
}

export namespace BalanceReportCreateParams {
  export interface Balance {
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

    /**
     * The code used by the bank when reporting this specific balance.
     */
    vendor_code: string;

    /**
     * The type of `vendor_code` being reported. Can be one of `bai2`, `bankprov`,
     * `bnk_dev`, `cleartouch`, `currencycloud`, `cross_river`, `dc_bank`, `dwolla`,
     * `evolve`, `goldman_sachs`, `iso20022`, `jpmc`, `mx`, `signet`, `silvergate`,
     * `swift`, or `us_bank`.
     */
    vendor_code_type: string | null;
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

BalanceReports.BalanceReportsPage = BalanceReportsPage;

export declare namespace BalanceReports {
  export {
    type BalanceReport as BalanceReport,
    BalanceReportsPage as BalanceReportsPage,
    type BalanceReportCreateParams as BalanceReportCreateParams,
    type BalanceReportListParams as BalanceReportListParams,
  };
}
