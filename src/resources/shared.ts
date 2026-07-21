// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as LegalEntitiesAPI from './legal-entities';

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
   * A description of the business.
   */
  business_description?: string | null;

  /**
   * The business's legal business name.
   */
  business_name?: string | null;

  /**
   * The country of citizenship for an individual.
   */
  citizenship_country?: string | null;

  /**
   * @deprecated
   */
  compliance_details?: unknown | null;

  /**
   * The connection ID for the connection the legal entity is associated with.
   * Defaults to the id of the connection designated with an is_default value of true
   * or the id of an existing operational connection if only one is available. Pass
   * in a value of null to prevent the connection from being associated with the
   * legal entity.
   */
  connection_id?: string | null;

  /**
   * The country where the business is incorporated, as an ISO 3166-1 alpha-2 country
   * code (e.g. US).
   */
  country_of_incorporation?: string | null;

  /**
   * A business's formation date (YYYY-MM-DD).
   */
  date_formed?: string | null;

  /**
   * An individual's date of birth (YYYY-MM-DD).
   */
  date_of_birth?: string | null;

  /**
   * A list of documents to attach to the legal entity (e.g. articles of
   * incorporation, certificate of good standing, proof of address).
   */
  documents?: Array<ChildLegalEntityCreate.Document>;

  doing_business_as_names?: Array<string>;

  /**
   * The entity's primary email.
   */
  email?: string | null;

  /**
   * Monthly expected transaction volume in USD.
   */
  expected_activity_volume?: number | null;

  /**
   * An optional user-defined 180 character unique identifier.
   */
  external_id?: string | null;

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
   * A description of the intended use of the legal entity.
   */
  intended_use?: string | null;

  /**
   * An individual's last name.
   */
  last_name?: string | null;

  /**
   * The legal entity associations and its child legal entities.
   */
  legal_entity_associations?: Array<LegalEntityAssociationInlineCreate> | null;

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
   * ISO 10383 market identifier code.
   */
  listed_exchange?: string | null;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };

  /**
   * An individual's middle name.
   */
  middle_name?: string | null;

  /**
   * A list of countries where the business operates, as ISO 3166-1 alpha-2 country
   * codes (e.g. ["US", "CA"]).
   */
  operating_jurisdictions?: Array<string>;

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
   * A list of primary social media URLs for the business.
   */
  primary_social_media_sites?: Array<string>;

  /**
   * Array of regulatory bodies overseeing this institution.
   */
  regulators?: Array<ChildLegalEntityCreate.Regulator> | null;

  /**
   * The risk rating of the legal entity. One of low, medium, high.
   */
  risk_rating?: 'low' | 'medium' | 'high' | null;

  /**
   * The UUID of the parent legal entity in the service provider tree.
   */
  service_provider_legal_entity_id?: string | null;

  /**
   * An individual's suffix.
   */
  suffix?: string | null;

  /**
   * Acceptance of terms of use by the legal entity.
   */
  terms_of_use?: ChildLegalEntityCreate.TermsOfUse | null;

  /**
   * @deprecated Deprecated. Use `third_party_verifications` instead.
   */
  third_party_verification?: ThirdPartyVerification | null;

  /**
   * A list of third-party verifications run by external vendors.
   */
  third_party_verifications?: Array<ThirdPartyVerification>;

  /**
   * Stock ticker symbol for publicly traded companies.
   */
  ticker_symbol?: string | null;

  wealth_and_employment_details?: LegalEntitiesAPI.WealthAndEmploymentDetails | null;

  /**
   * The entity's primary website URL.
   */
  website?: string | null;
}

export namespace ChildLegalEntityCreate {
  export interface Document {
    /**
     * A category given to the document, can be `null`.
     */
    document_type:
      | 'articles_of_incorporation'
      | 'certificate_of_good_standing'
      | 'ein_letter'
      | 'generic'
      | 'identification_back'
      | 'identification_front'
      | 'proof_of_address';

    /**
     * Base64-encoded file content for the document.
     */
    file_data: string;

    /**
     * The original filename of the document.
     */
    filename?: string;
  }

  /**
   * A list of phone numbers in E.164 format.
   */
  export interface PhoneNumber {
    phone_number?: string;
  }

  export interface Regulator {
    /**
     * The country code where the regulator operates in the ISO 3166-1 alpha-2 format
     * (e.g., "US", "CA", "GB").
     */
    jurisdiction: string;

    /**
     * Full name of the regulatory body.
     */
    name: string;

    /**
     * Registration or identification number with the regulator.
     */
    registration_number: string;
  }

  /**
   * Acceptance of terms of use by the legal entity.
   */
  export interface TermsOfUse {
    /**
     * The ISO 8601 timestamp indicating when the terms of use were accepted.
     */
    accepted_at?: string;

    /**
     * The IP address from which the terms of use were accepted. Supports both IPv4 and
     * IPv6 formats.
     */
    ip_address?: string;
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
  | 'ETH'
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
  | 'OP'
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
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SKK'
  | 'SLE'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'SSP'
  | 'STD'
  | 'STN'
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
  | 'USDC'
  | 'USDG'
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
  | 'XCG'
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
  | 'ZWG'
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
    | 'at_atin'
    | 'at_vat'
    | 'au_abn'
    | 'au_tfn'
    | 'be_ent'
    | 'be_nrn'
    | 'br_cnpj'
    | 'br_cpf'
    | 'ca_bn'
    | 'ca_sin'
    | 'ch_ahv'
    | 'ch_uid'
    | 'cl_run'
    | 'cl_rut'
    | 'co_cedulas'
    | 'co_nit'
    | 'cy_tin'
    | 'cz_ico'
    | 'cz_rc'
    | 'de_stid'
    | 'de_stnr'
    | 'de_vat'
    | 'dk_cpr'
    | 'dk_cvr'
    | 'drivers_license'
    | 'ee_ik'
    | 'ee_rk'
    | 'es_nie'
    | 'es_nif'
    | 'fi_hetu'
    | 'fi_ytj'
    | 'fr_nif'
    | 'fr_siren'
    | 'fr_vat'
    | 'gb_nino'
    | 'gb_utr'
    | 'gb_vat'
    | 'generic_international'
    | 'gr_vat'
    | 'hn_id'
    | 'hn_rtn'
    | 'hr_oib'
    | 'hu_adj'
    | 'hu_anum'
    | 'ie_pps'
    | 'ie_trn'
    | 'in_lei'
    | 'is_knt'
    | 'it_cf'
    | 'it_piva'
    | 'jp_hb'
    | 'jp_mn'
    | 'kr_brn'
    | 'kr_crn'
    | 'kr_rrn'
    | 'li_peid'
    | 'lt_ak'
    | 'lt_jak'
    | 'lu_mtc'
    | 'lu_vat'
    | 'lv_pk'
    | 'lv_rn'
    | 'mt_tin'
    | 'mt_vat'
    | 'mx_curp'
    | 'mx_ine'
    | 'mx_rfc'
    | 'national_id'
    | 'nl_bsn'
    | 'nl_btw'
    | 'nl_rsin'
    | 'no_fdn'
    | 'no_mva'
    | 'no_orgnr'
    | 'nz_ird'
    | 'passport'
    | 'pl_nip'
    | 'pl_pesel'
    | 'pt_nif'
    | 'ro_cnp'
    | 'ro_cui'
    | 'sa_tin'
    | 'sa_vat'
    | 'se_orgnr'
    | 'se_pnmr'
    | 'sg_fin'
    | 'sg_nric'
    | 'sg_uen'
    | 'si_dav'
    | 'si_tin'
    | 'sk_ico'
    | 'sk_rc'
    | 'us_ein'
    | 'us_itin'
    | 'us_ssn'
    | 'uy_rut'
    | 'vn_tin';

  /**
   * A list of documents to attach to the identification.
   */
  documents?: Array<IdentificationCreateRequest.Document>;

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

export namespace IdentificationCreateRequest {
  export interface Document {
    /**
     * A category given to the document, can be `null`.
     */
    document_type:
      | 'articles_of_incorporation'
      | 'certificate_of_good_standing'
      | 'ein_letter'
      | 'generic'
      | 'identification_back'
      | 'identification_front'
      | 'proof_of_address';

    /**
     * Base64-encoded file content for the document.
     */
    file_data: string;

    /**
     * The original filename of the document.
     */
    filename?: string;
  }
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
   * An optional user-defined 180 character unique identifier.
   */
  external_id?: string | null;

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

  amount_string: string;

  credits: number;

  credits_string: string;

  /**
   * The currency of the ledger account.
   */
  currency: string;

  /**
   * The currency exponent of the ledger account.
   */
  currency_exponent: number;

  debits: number;

  debits_string: string;
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
   * Value in specified currency's smallest unit. e.g. $10 would be represented
   * as 1000. Can be any integer up to 36 digits.
   */
  amount?: number;

  /**
   * The amount of the ledger entry as a string, preserving full precision for values
   * that may exceed safe integer limits in some languages.
   */
  amount_string?: string;

  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the
   * account’s available balance. If any of these conditions would be false after the
   * transaction is created, the entire call will fail with error code 422.
   */
  available_balance_amount?: { [key: string]: number } | null;

  /**
   * The timestamp (ISO8601 format) at which the ledger transaction happened for
   * reporting purposes.
   */
  effective_at?: string;

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
  address_types?: Array<
    'business' | 'business_physical' | 'business_registered' | 'mailing' | 'other' | 'po_box' | 'residential'
  >;

  line2?: string | null;

  /**
   * Whether this address is the primary address for the legal entity. Optional; when
   * omitted it is inferred from the address types.
   */
  primary?: boolean | null;
}

export interface LegalEntityAssociationInlineCreate {
  relationship_types: Array<'authorized_signer' | 'beneficial_owner' | 'control_person'>;

  /**
   * The child legal entity.
   */
  child_legal_entity?: ChildLegalEntityCreate;

  /**
   * The ID of the child legal entity.
   */
  child_legal_entity_id?: string;

  /**
   * The child entity's ownership percentage iff they are a beneficial owner.
   */
  ownership_percentage?: number | null;

  /**
   * The job title of the child entity at the parent entity.
   */
  title?: string | null;
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

export interface ThirdPartyVerification {
  /**
   * The outcome of the verification. One of `passed` or `failed`.
   */
  outcome: 'passed' | 'failed';

  /**
   * The vendor that performed the verification, e.g. `persona`.
   */
  vendor: 'persona' | 'middesk' | 'alloy' | 'idology' | 'socure' | 'sumsub' | 'veriff';

  /**
   * The identification of the third party verification in `vendor`'s system.
   */
  vendor_verification_id: string;

  /**
   * The category of verification performed.
   */
  verification_category:
    | 'legal_name'
    | 'date_of_birth'
    | 'address'
    | 'government_id_number'
    | 'adverse_media';

  /**
   * The method used to perform the verification.
   */
  verification_method: string;

  /**
   * The timestamp when the verification was performed.
   */
  verification_time: string;

  /**
   * An optional comment about the verification.
   */
  comment?: string | null;
}

export type TransactionDirection = 'credit' | 'debit';
