// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as LegalEntitiesAPI from './legal-entities';

export interface Accounting {
  /**
   * The ID of one of your accounting categories. Note that these will only be
   * accessible if your accounting system has been connected.
   */
  account_id?: string | null;

  /**
   * The ID of one of the class objects in your accounting system. Class objects
   * track segments of your business independent of client or project. Note that
   * these will only be accessible if your accounting system has been connected.
   */
  class_id?: string | null;
}

export type AccountsType = 'external_accounts' | 'internal_accounts';

export interface Address {
  id: string;

  /**
   * Country code conforms to [ISO 3166-1 alpha-2]
   */
  country: string | null;

  created_at: string;

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

export interface AddressRequest {
  /**
   * Country code conforms to [ISO 3166-1 alpha-2]
   */
  country?: string | null;

  line1?: string | null;

  line2?: string | null;

  /**
   * Locality or City.
   */
  locality?: string | null;

  /**
   * The postal code of the address.
   */
  postal_code?: string | null;

  /**
   * Region or State.
   */
  region?: string | null;
}

export interface AsyncResponse {
  id: string;

  object: string;
}

export interface ChildLegalEntityCreate {
  /**
   * A list of addresses for the entity.
   */
  addresses?: Array<LegalEntityAddressCreateRequest>;

  bank_settings?: LegalEntitiesAPI.BankSettings | null;

  /**
   * The business's legal business name.
   */
  business_name?: string | null;

  /**
   * The country of citizenship for an individual.
   */
  citizenship_country?: string | null;

  compliance_details?: LegalEntityComplianceDetail | null;

  /**
   * A business's formation date (YYYY-MM-DD).
   */
  date_formed?: string | null;

  /**
   * An individual's date of birth (YYYY-MM-DD).
   */
  date_of_birth?: string | null;

  doing_business_as_names?: Array<string>;

  /**
   * The entity's primary email.
   */
  email?: string | null;

  /**
   * An individual's first name.
   */
  first_name?: string | null;

  /**
   * A list of identifications for the legal entity.
   */
  identifications?: Array<IdentificationCreateRequest>;

  /**
   * A list of industry classifications for the legal entity.
   */
  industry_classifications?: Array<LegalEntityIndustryClassification>;

  /**
   * An individual's last name.
   */
  last_name?: string | null;

  /**
   * The type of legal entity.
   */
  legal_entity_type?: 'business' | 'individual';

  /**
   * The business's legal structure.
   */
  legal_structure?:
    | 'corporation'
    | 'llc'
    | 'non_profit'
    | 'partnership'
    | 'sole_proprietorship'
    | 'trust'
    | null;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };

  /**
   * An individual's middle name.
   */
  middle_name?: string | null;

  phone_numbers?: Array<ChildLegalEntityCreate.PhoneNumber>;

  /**
   * Whether the individual is a politically exposed person.
   */
  politically_exposed_person?: boolean | null;

  /**
   * An individual's preferred name.
   */
  preferred_name?: string | null;

  /**
   * An individual's prefix.
   */
  prefix?: string | null;

  /**
   * The risk rating of the legal entity. One of low, medium, high.
   */
  risk_rating?: 'low' | 'medium' | 'high' | null;

  /**
   * An individual's suffix.
   */
  suffix?: string | null;

  wealth_and_employment_details?: LegalEntitiesAPI.WealthAndEmploymentDetails | null;

  /**
   * The entity's primary website URL.
   */
  website?: string | null;
}

export namespace ChildLegalEntityCreate {
  /**
   * A list of phone numbers in E.164 format.
   */
  export interface PhoneNumber {
    phone_number?: string;
  }
}

export interface ContactDetail {
  id: string;

  contact_identifier: string;

  contact_identifier_type: 'email' | 'phone_number' | 'website';

  created_at: string;

  discarded_at: string | null;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  updated_at: string;
}

/**
 * Three-letter ISO currency code.
 */
export type Currency =
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
  | 'EURC'
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
  | 'PYUSD'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBC'
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
  | 'USDB'
  | 'USDC'
  | 'USDP'
  | 'USDT'
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

export interface ForeignExchangeRate {
  /**
   * Amount in the lowest denomination of the `base_currency` to convert, often
   * called the "sell" amount.
   */
  base_amount: number;

  /**
   * Currency to convert, often called the "sell" currency.
   */
  base_currency: Currency;

  /**
   * The exponent component of the rate. The decimal is calculated as `value` / (10 ^
   * `exponent`).
   */
  exponent: number;

  /**
   * A string representation of the rate.
   */
  rate_string: string;

  /**
   * Amount in the lowest denomination of the `target_currency`, often called the
   * "buy" amount.
   */
  target_amount: number;

  /**
   * Currency to convert the `base_currency` to, often called the "buy" currency.
   */
  target_currency: Currency;

  /**
   * The whole number component of the rate. The decimal is calculated as `value` /
   * (10 ^ `exponent`).
   */
  value: number;
}

export interface IdentificationCreateRequest {
  /**
   * The ID number of identification document.
   */
  id_number: string;

  /**
   * The type of ID number.
   */
  id_type:
    | 'ar_cuil'
    | 'ar_cuit'
    | 'br_cnpj'
    | 'br_cpf'
    | 'cl_run'
    | 'cl_rut'
    | 'co_cedulas'
    | 'co_nit'
    | 'drivers_license'
    | 'hn_id'
    | 'hn_rtn'
    | 'in_lei'
    | 'kr_brn'
    | 'kr_crn'
    | 'kr_rrn'
    | 'passport'
    | 'sa_tin'
    | 'sa_vat'
    | 'us_ein'
    | 'us_itin'
    | 'us_ssn'
    | 'vn_tin';

  /**
   * The date when the Identification is no longer considered valid by the issuing
   * authority.
   */
  expiration_date?: string | null;

  /**
   * The ISO 3166-1 alpha-2 country code of the country that issued the
   * identification
   */
  issuing_country?: string | null;

  /**
   * The region in which the identifcation was issued.
   */
  issuing_region?: string | null;
}

export interface LedgerAccountCreateRequest {
  /**
   * The currency of the ledger account.
   */
  currency: string;

  /**
   * The id of the ledger that this account belongs to.
   */
  ledger_id: string;

  /**
   * The name of the ledger account.
   */
  name: string;

  /**
   * The normal balance of the ledger account.
   */
  normal_balance: TransactionDirection;

  /**
   * The currency exponent of the ledger account.
   */
  currency_exponent?: number | null;

  /**
   * The description of the ledger account.
   */
  description?: string | null;

  /**
   * The array of ledger account category ids that this ledger account should be a
   * child of.
   */
  ledger_account_category_ids?: Array<string>;

  /**
   * If the ledger account links to another object in Modern Treasury, the id will be
   * populated here, otherwise null.
   */
  ledgerable_id?: string;

  /**
   * If the ledger account links to another object in Modern Treasury, the type will
   * be populated here, otherwise null. The value is one of internal_account or
   * external_account.
   */
  ledgerable_type?: 'counterparty' | 'external_account' | 'internal_account' | 'virtual_account';

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };
}

export interface LedgerBalance {
  amount: number;

  credits: number;

  /**
   * The currency of the ledger account.
   */
  currency: string;

  /**
   * The currency exponent of the ledger account.
   */
  currency_exponent: number;

  debits: number;
}

export interface LedgerBalances {
  /**
   * The available_balance is the sum of all posted inbound entries and pending
   * outbound entries. For credit normal, available_amount = posted_credits -
   * pending_debits; for debit normal, available_amount = posted_debits -
   * pending_credits.
   */
  available_balance: LedgerBalance;

  /**
   * The pending_balance is the sum of all pending and posted entries.
   */
  pending_balance: LedgerBalance;

  /**
   * The posted_balance is the sum of all posted entries.
   */
  posted_balance: LedgerBalance;
}

export interface LedgerEntryCreateRequest {
  /**
   * Value in specified currency's smallest unit. e.g. $10 would be represented
   * as 1000. Can be any integer up to 36 digits.
   */
  amount: number;

  /**
   * One of `credit`, `debit`. Describes the direction money is flowing in the
   * transaction. A `credit` moves money from your account to someone else's. A
   * `debit` pulls money from someone else's account to your own. Note that wire,
   * rtp, and check payments will always be `credit`.
   */
  direction: TransactionDirection;

  /**
   * The ledger account that this ledger entry is associated with.
   */
  ledger_account_id: string;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the
   * account’s available balance. If any of these conditions would be false after the
   * transaction is created, the entire call will fail with error code 422.
   */
  available_balance_amount?: { [key: string]: number } | null;

  /**
   * Lock version of the ledger account. This can be passed when creating a ledger
   * transaction to only succeed if no ledger transactions have posted since the
   * given version. See our post about Designing the Ledgers API with Optimistic
   * Locking for more details.
   */
  lock_version?: number | null;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the
   * account’s pending balance. If any of these conditions would be false after the
   * transaction is created, the entire call will fail with error code 422.
   */
  pending_balance_amount?: { [key: string]: number } | null;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the
   * account’s posted balance. If any of these conditions would be false after the
   * transaction is created, the entire call will fail with error code 422.
   */
  posted_balance_amount?: { [key: string]: number } | null;

  /**
   * If true, response will include the balance of the associated ledger account for
   * the entry.
   */
  show_resulting_ledger_account_balances?: boolean | null;
}

export interface LedgerTransactionCreateRequest {
  /**
   * An array of ledger entry objects.
   */
  ledger_entries: Array<LedgerEntryCreateRequest>;

  /**
   * An optional description for internal use.
   */
  description?: string | null;

  /**
   * The timestamp (ISO8601 format) at which the ledger transaction happened for
   * reporting purposes.
   */
  effective_at?: string;

  /**
   * The date (YYYY-MM-DD) on which the ledger transaction happened for reporting
   * purposes.
   */
  effective_date?: string;

  /**
   * A unique string to represent the ledger transaction. Only one pending or posted
   * ledger transaction may have this ID in the ledger.
   */
  external_id?: string;

  /**
   * If the ledger transaction can be reconciled to another object in Modern
   * Treasury, the id will be populated here, otherwise null.
   */
  ledgerable_id?: string;

  /**
   * If the ledger transaction can be reconciled to another object in Modern
   * Treasury, the type will be populated here, otherwise null. This can be one of
   * payment_order, incoming_payment_detail, expected_payment, return, or reversal.
   */
  ledgerable_type?: 'expected_payment' | 'incoming_payment_detail' | 'payment_order' | 'return' | 'reversal';

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };

  /**
   * To post a ledger transaction at creation, use `posted`.
   */
  status?: 'archived' | 'pending' | 'posted';
}

export interface LegalEntityAddressCreateRequest {
  /**
   * Country code conforms to [ISO 3166-1 alpha-2]
   */
  country: string | null;

  line1: string | null;

  /**
   * Locality or City.
   */
  locality: string | null;

  /**
   * The postal code of the address.
   */
  postal_code: string | null;

  /**
   * Region or State.
   */
  region: string | null;

  /**
   * The types of this address.
   */
  address_types?: Array<'business' | 'mailing' | 'other' | 'po_box' | 'residential'>;

  line2?: string | null;
}

export interface LegalEntityComplianceDetail {
  id: string;

  created_at: string;

  discarded_at: string | null;

  /**
   * The issuer of the compliance token.
   */
  issuer: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  /**
   * The timestamp when the compliance token expires.
   */
  token_expires_at: string | null;

  /**
   * The timestamp when the compliance token was issued.
   */
  token_issued_at: string | null;

  /**
   * The URL to the compliance token. (ex. provider portal URL)
   */
  token_url: string | null;

  updated_at: string;

  /**
   * Whether entity corresponding to the compliance token has been validated.
   */
  validated: boolean;

  /**
   * The timestamp when the entity was validated.
   */
  validated_at: string | null;
}

export interface LegalEntityIndustryClassification {
  id: string;

  /**
   * The industry classification codes for the legal entity.
   */
  classification_codes: Array<string>;

  /**
   * The classification system of the classification codes.
   */
  classification_type:
    | 'anzsic'
    | 'bics'
    | 'gics'
    | 'hsics'
    | 'icb'
    | 'isic'
    | 'mgecs'
    | 'nace'
    | 'naics'
    | 'rbics'
    | 'sic'
    | 'sni'
    | 'trbc'
    | 'uksic'
    | 'unspsc';

  created_at: string;

  discarded_at: string | null;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  updated_at: string;
}

export type TransactionDirection = 'credit' | 'debit';
