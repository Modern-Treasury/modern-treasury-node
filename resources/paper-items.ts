// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class PaperItems extends APIResource {
  /**
   * Get details on a single paper item.
   */
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<PaperItem>> {
    return this.get(`/api/paper_items/${id}`, options);
  }

  /**
   * Get a list of all paper items.
   */
  list(query?: PaperItemListParams, options?: Core.RequestOptions): Core.PagePromise<PaperItemsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<PaperItemsPage>;
  list(
    query: PaperItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaperItemsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/api/paper_items', PaperItemsPage, { query, ...options });
  }
}

export class PaperItemsPage extends Page<PaperItem> {}

export interface PaperItem {
  /**
   * The account number on the paper item.
   */
  account_number: string | null;

  /**
   * The amount of the paper item.
   */
  amount: number;

  /**
   * The check number on the paper item.
   */
  check_number: string | null;

  created_at: string;

  /**
   * The currency of the paper item.
   */
  currency:
    | 'AED'
    | 'AFN'
    | 'ALL'
    | 'AMD'
    | 'ANG'
    | 'AOA'
    | 'ARS'
    | 'AUD'
    | 'AWG'
    | 'AZN'
    | 'BAM'
    | 'BBD'
    | 'BCH'
    | 'BDT'
    | 'BGN'
    | 'BHD'
    | 'BIF'
    | 'BMD'
    | 'BND'
    | 'BOB'
    | 'BRL'
    | 'BSD'
    | 'BTC'
    | 'BTN'
    | 'BWP'
    | 'BYN'
    | 'BYR'
    | 'BZD'
    | 'CAD'
    | 'CDF'
    | 'CHF'
    | 'CLF'
    | 'CLP'
    | 'CNH'
    | 'CNY'
    | 'COP'
    | 'CRC'
    | 'CUC'
    | 'CUP'
    | 'CVE'
    | 'CZK'
    | 'DJF'
    | 'DKK'
    | 'DOP'
    | 'DZD'
    | 'EEK'
    | 'EGP'
    | 'ERN'
    | 'ETB'
    | 'EUR'
    | 'FJD'
    | 'FKP'
    | 'GBP'
    | 'GBX'
    | 'GEL'
    | 'GGP'
    | 'GHS'
    | 'GIP'
    | 'GMD'
    | 'GNF'
    | 'GTQ'
    | 'GYD'
    | 'HKD'
    | 'HNL'
    | 'HRK'
    | 'HTG'
    | 'HUF'
    | 'IDR'
    | 'ILS'
    | 'IMP'
    | 'INR'
    | 'IQD'
    | 'IRR'
    | 'ISK'
    | 'JEP'
    | 'JMD'
    | 'JOD'
    | 'JPY'
    | 'KES'
    | 'KGS'
    | 'KHR'
    | 'KMF'
    | 'KPW'
    | 'KRW'
    | 'KWD'
    | 'KYD'
    | 'KZT'
    | 'LAK'
    | 'LBP'
    | 'LKR'
    | 'LRD'
    | 'LSL'
    | 'LTL'
    | 'LVL'
    | 'LYD'
    | 'MAD'
    | 'MDL'
    | 'MGA'
    | 'MKD'
    | 'MMK'
    | 'MNT'
    | 'MOP'
    | 'MRO'
    | 'MRU'
    | 'MTL'
    | 'MUR'
    | 'MVR'
    | 'MWK'
    | 'MXN'
    | 'MYR'
    | 'MZN'
    | 'NAD'
    | 'NGN'
    | 'NIO'
    | 'NOK'
    | 'NPR'
    | 'NZD'
    | 'OMR'
    | 'PAB'
    | 'PEN'
    | 'PGK'
    | 'PHP'
    | 'PKR'
    | 'PLN'
    | 'PYG'
    | 'QAR'
    | 'RON'
    | 'RSD'
    | 'RUB'
    | 'RWF'
    | 'SAR'
    | 'SBD'
    | 'SCR'
    | 'SDG'
    | 'SEK'
    | 'SGD'
    | 'SHP'
    | 'SKK'
    | 'SLL'
    | 'SOS'
    | 'SRD'
    | 'SSP'
    | 'STD'
    | 'SVC'
    | 'SYP'
    | 'SZL'
    | 'THB'
    | 'TJS'
    | 'TMM'
    | 'TMT'
    | 'TND'
    | 'TOP'
    | 'TRY'
    | 'TTD'
    | 'TWD'
    | 'TZS'
    | 'UAH'
    | 'UGX'
    | 'USD'
    | 'UYU'
    | 'UZS'
    | 'VEF'
    | 'VES'
    | 'VND'
    | 'VUV'
    | 'WST'
    | 'XAF'
    | 'XAG'
    | 'XAU'
    | 'XBA'
    | 'XBB'
    | 'XBC'
    | 'XBD'
    | 'XCD'
    | 'XDR'
    | 'XFU'
    | 'XOF'
    | 'XPD'
    | 'XPF'
    | 'XPT'
    | 'XTS'
    | 'YER'
    | 'ZAR'
    | 'ZMK'
    | 'ZMW'
    | 'ZWD'
    | 'ZWL'
    | 'ZWN'
    | 'ZWR';

  /**
   * The date the paper item was deposited into your organization's bank account.
   */
  deposit_date: string;

  id: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  /**
   * The identifier for the lockbox assigned by the bank.
   */
  lockbox_number: string;

  /**
   * The memo field on the paper item.
   */
  memo_field: string | null;

  object: string;

  /**
   * The name of the remitter on the paper item.
   */
  remitter_name: string | null;

  /**
   * The routing number on the paper item.
   */
  routing_number: string | null;

  /**
   * The current status of the paper item. One of `pending`, `completed`, or
   * `returned`.
   */
  status: 'completed' | 'pending' | 'returned';

  /**
   * The ID of the reconciled Transaction or `null`.
   */
  transaction_id: string | null;

  /**
   * The ID of the reconciled Transaction Line Item or `null`.
   */
  transaction_line_item_id: string | null;

  updated_at: string;
}

export interface PaperItemListParams extends PageParams {
  /**
   * Specify an inclusive end date (YYYY-MM-DD) when filtering by deposit_date
   */
  deposit_date_end?: string;

  /**
   * Specify an inclusive start date (YYYY-MM-DD) when filtering by deposit_date
   */
  deposit_date_start?: string;

  /**
   * Specify `lockbox_number` if you wish to see paper items that are associated with
   * a specific lockbox number.
   */
  lockbox_number?: string;
}
