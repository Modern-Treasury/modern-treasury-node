// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { Page, type PageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BalanceReports extends APIResource {
  /**
   * create balance reports
   *
   * @example
   * ```ts
   * const balanceReport =
   *   await client.internalAccounts.balanceReports.create(
   *     'internal_account_id',
   *     {
   *       as_of_date: '2019-12-27',
   *       as_of_time: 'as_of_time',
   *       balance_report_type: 'intraday',
   *       balances: [
   *         {
   *           amount: 0,
   *           balance_type: 'closing_available',
   *           vendor_code: 'vendor_code',
   *           vendor_code_type: 'vendor_code_type',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  create(
    internalAccountID: string,
    body: BalanceReportCreateParams,
    options?: RequestOptions,
  ): APIPromise<BalanceReport> {
    return this._client.post(path`/api/internal_accounts/${internalAccountID}/balance_reports`, {
      body,
      ...options,
    });
  }

  /**
   * Get a single balance report for a given internal account.
   *
   * @example
   * ```ts
   * const balanceReport =
   *   await client.internalAccounts.balanceReports.retrieve(
   *     'string',
   *     { internal_account_id: 'internal_account_id' },
   *   );
   * ```
   */
  retrieve(
    id: (string & {}) | 'latest',
    params: BalanceReportRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BalanceReport> {
    const { internal_account_id } = params;
    return this._client.get(
      path`/api/internal_accounts/${internal_account_id}/balance_reports/${id}`,
      options,
    );
  }

  /**
   * Get all balance reports for a given internal account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const balanceReport of client.internalAccounts.balanceReports.list(
   *   'internal_account_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    internalAccountID: string,
    query: BalanceReportListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BalanceReportsPage, BalanceReport> {
    return this._client.getAPIList(
      path`/api/internal_accounts/${internalAccountID}/balance_reports`,
      Page<BalanceReport>,
      { query, ...options },
    );
  }

  /**
   * Deletes a given balance report.
   *
   * @example
   * ```ts
   * await client.internalAccounts.balanceReports.delete('id', {
   *   internal_account_id: 'internal_account_id',
   * });
   * ```
   */
  delete(id: string, params: BalanceReportDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { internal_account_id } = params;
    return this._client.delete(path`/api/internal_accounts/${internal_account_id}/balance_reports/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type BalanceReportsPage = Page<BalanceReport>;

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
     * The date on which the balance became true for the account.
     */
    as_of_date: string | null;

    /**
     * The time on which the balance became true for the account.
     */
    as_of_time: string | null;

    /**
     * The specific type of balance reported. One of `opening_ledger`,
     * `closing_ledger`, `current_ledger`, `opening_available`,
     * `opening_available_next_business_day`, `closing_available`, `current_available`,
     * 'previously_closed_book', or `other`.
     */
    balance_type:
      | 'closing_available'
      | 'closing_ledger'
      | 'current_available'
      | 'current_ledger'
      | 'opening_available'
      | 'opening_available_next_business_day'
      | 'opening_ledger'
      | 'other'
      | 'previously_closed_book';

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
     * The date on which the balance becomes available.
     */
    value_date: string | null;

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
     * 'previously_closed_book', or `other`.
     */
    balance_type:
      | 'closing_available'
      | 'closing_ledger'
      | 'current_available'
      | 'current_ledger'
      | 'opening_available'
      | 'opening_available_next_business_day'
      | 'opening_ledger'
      | 'other'
      | 'previously_closed_book';

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

export interface BalanceReportRetrieveParams {
  internal_account_id: string;
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

export interface BalanceReportDeleteParams {
  internal_account_id: string;
}

export declare namespace BalanceReports {
  export {
    type BalanceReport as BalanceReport,
    type BalanceReportsPage as BalanceReportsPage,
    type BalanceReportCreateParams as BalanceReportCreateParams,
    type BalanceReportRetrieveParams as BalanceReportRetrieveParams,
    type BalanceReportListParams as BalanceReportListParams,
    type BalanceReportDeleteParams as BalanceReportDeleteParams,
  };
}
