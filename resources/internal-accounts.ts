// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class InternalAccounts extends APIResource {
  create(
    body: InternalAccountCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<InternalAccount>> {
    return this.post('/api/internal_accounts', { body, ...options });
  }

  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<InternalAccount>> {
    return this.get(`/api/internal_accounts/${id}`, options);
  }

  update(
    id: string,
    body?: InternalAccountUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<InternalAccount>>;
  update(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<InternalAccount>>;
  update(
    id: string,
    body: InternalAccountUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<InternalAccount>> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }

    return this.patch(`/api/internal_accounts/${id}`, { body, ...options });
  }

  list(
    query?: InternalAccountListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InternalAccountsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<InternalAccountsPage>;
  list(
    query: InternalAccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InternalAccountsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/api/internal_accounts', InternalAccountsPage, { query, ...options });
  }
}

export class InternalAccountsPage extends Page<InternalAccount> {}

export interface InternalAccount {
  /**
   * An array of account detail objects.
   */
  account_details: Array<InternalAccount.AccountDetails>;

  /**
   * Can be checking, savings or other.
   */
  account_type: 'checking' | 'other' | 'savings' | null;

  /**
   * Specifies which financial institution the accounts belong to.
   */
  connection: InternalAccount.Connection;

  created_at: string;

  /**
   * The currency of the account.
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

  id: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata: Record<string, string>;

  /**
   * A nickname for the account.
   */
  name: string | null;

  object: string;

  parent_account_id: string | null;

  /**
   * The address associated with the owner or null.
   */
  party_address: InternalAccount.PartyAddress | null;

  /**
   * The legal name of the entity which owns the account.
   */
  party_name: string;

  /**
   * Either individual or business.
   */
  party_type: 'business' | 'individual' | null;

  /**
   * An array of routing detail objects.
   */
  routing_details: Array<InternalAccount.RoutingDetails>;

  updated_at: string;
}

export namespace InternalAccount {
  export interface PartyAddress {
    /**
     * Country code conforms to [ISO 3166-1 alpha-2]
     */
    country: string | null;

    created_at: string;

    id: string;

    line1: string | null;

    line2: string | null;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    /**
     * Locality or City.
     */
    locality: string | null;

    object: string;

    /**
     * The postal code of the address.
     */
    postal_code: string | null;

    /**
     * Region or State.
     */
    region: string | null;

    updated_at: string;
  }

  export interface AccountDetails {
    account_number: string;

    /**
     * Supports iban and clabe, otherwise other if the bank account number is in a
     * generic format.
     */
    account_number_type: 'iban' | 'clabe' | 'wallet_address' | 'pan' | 'other';

    created_at: string;

    discarded_at: string | null;

    id: string;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    object: string;

    updated_at: string;
  }

  export interface RoutingDetails {
    bank_address: RoutingDetails.BankAddress | null;

    bank_name: string;

    created_at: string;

    discarded_at: string | null;

    id: string;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    object: string;

    /**
     * If the routing detail is to be used for a specific payment type this field will
     * be populated, otherwise null.
     */
    payment_type:
      | 'ach'
      | 'au_becs'
      | 'bacs'
      | 'book'
      | 'card'
      | 'check'
      | 'eft'
      | 'interac'
      | 'provxchange'
      | 'rtp'
      | 'sen'
      | 'sepa'
      | 'signet'
      | 'wire'
      | null;

    /**
     * The routing number of the bank.
     */
    routing_number: string;

    routing_number_type:
      | 'aba'
      | 'swift'
      | 'au_bsb'
      | 'ca_cpa'
      | 'cnaps'
      | 'gb_sort_code'
      | 'in_ifsc'
      | 'my_branch_code'
      | 'br_codigo';

    updated_at: string;
  }

  export namespace RoutingDetails {
    export interface BankAddress {
      /**
       * Country code conforms to [ISO 3166-1 alpha-2]
       */
      country: string | null;

      created_at: string;

      id: string;

      line1: string | null;

      line2: string | null;

      /**
       * This field will be true if this object exists in the live environment or false
       * if it exists in the test environment.
       */
      live_mode: boolean;

      /**
       * Locality or City.
       */
      locality: string | null;

      object: string;

      /**
       * The postal code of the address.
       */
      postal_code: string | null;

      /**
       * Region or State.
       */
      region: string | null;

      updated_at: string;
    }
  }

  export interface Connection {
    created_at: string;

    discarded_at: string | null;

    id: string;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    object: string;

    updated_at: string;

    /**
     * The identifier of the vendor bank.
     */
    vendor_customer_id: string | null;

    /**
     * The identifier of the vendor bank.
     */
    vendor_id: string;

    /**
     * The name of the vendor bank.
     */
    vendor_name: string;
  }
}

export interface InternalAccountCreateParams {
  /**
   * The identifier of the financial institution the account belongs to.
   */
  connection_id: string;

  /**
   * Either "USD" or "CAD". Internal accounts created at Increase only supports
   * "USD".
   */
  currency: 'USD' | 'CAD';

  /**
   * The nickname of the account.
   */
  name: string;

  /**
   * The legal name of the entity which owns the account.
   */
  party_name: string;

  /**
   * The identifier of the entity at Increase which owns the account.
   */
  entity_id?: string;

  /**
   * The parent internal account of this new account.
   */
  parent_account_id?: string;
}

export interface InternalAccountUpdateParams {
  /**
   * Additional data in the form of key-value pairs. Pairs can be removed by passing
   * an empty string or `null` as the value.
   */
  metadata?: Record<string, string>;

  /**
   * The nickname for the internal account.
   */
  name?: string;

  /**
   * The parent internal account for this account.
   */
  parent_account_id?: string;
}

export interface InternalAccountListParams extends PageParams {
  /**
   * The currency associated with the internal account.
   */
  currency?:
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
   * The direction of payments that can be made by internal account.
   */
  payment_direction?: 'credit' | 'debit';

  /**
   * The type of payment that can be made by the internal account.
   */
  payment_type?:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'card'
    | 'check'
    | 'eft'
    | 'interac'
    | 'provxchange'
    | 'rtp'
    | 'sen'
    | 'sepa'
    | 'signet'
    | 'wire';
}
