// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DocumentsAPI from './documents';
import * as LegalEntityAssociationsAPI from './legal-entity-associations';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LegalEntities extends APIResource {
  /**
   * Get a list of all legal entities.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const legalEntity of client.legalEntities.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LegalEntityListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LegalEntitiesPage, LegalEntity> {
    return this._client.getAPIList('/api/legal_entities', Page<LegalEntity>, { query, ...options });
  }

  /**
   * Create a legal entity. All country fields use ISO 3166-1 alpha-2 (e.g. US).
   *
   * @example
   * ```ts
   * const legalEntity = await client.legalEntities.create({
   *   legal_entity_type: 'business',
   * });
   * ```
   */
  create(body: LegalEntityCreateParams, options?: RequestOptions): APIPromise<LegalEntity> {
    return this._client.post('/api/legal_entities', { body, ...options });
  }

  /**
   * Get details on a single legal entity.
   *
   * @example
   * ```ts
   * const legalEntity = await client.legalEntities.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<LegalEntity> {
    return this._client.get(path`/api/legal_entities/${id}`, options);
  }

  /**
   * Update a legal entity.
   *
   * @example
   * ```ts
   * const legalEntity = await client.legalEntities.update('id');
   * ```
   */
  update(
    id: string,
    body: LegalEntityUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LegalEntity> {
    return this._client.patch(path`/api/legal_entities/${id}`, { body, ...options });
  }
}

export type LegalEntitiesPage = Page<LegalEntity>;

export interface BankSettings {
  id: string;

  /**
   * The percentage of backup withholding to apply to the legal entity.
   */
  backup_withholding_percentage: number | null;

  created_at: string;

  discarded_at: string | null;

  /**
   * Whether backup withholding is enabled. See more here -
   * https://www.irs.gov/businesses/small-businesses-self-employed/backup-withholding.
   */
  enable_backup_withholding: boolean | null;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  /**
   * Cross River Bank specific setting to opt out of privacy policy.
   */
  privacy_opt_out: boolean | null;

  /**
   * It covers, among other types of insider loans, extensions of credit by a member
   * bank to an executive officer, director, or principal shareholder of the member
   * bank; a bank holding company of which the member bank is a subsidiary; and any
   * other subsidiary of that bank holding company.
   */
  regulation_o: boolean | null;

  updated_at: string;
}

export interface LegalEntity {
  id: string;

  /**
   * A list of addresses for the entity.
   */
  addresses: Array<LegalEntity.Address>;

  bank_settings: BankSettings | null;

  /**
   * A description of the business.
   */
  business_description: string | null;

  /**
   * The business's legal business name.
   */
  business_name: string | null;

  /**
   * The country of citizenship for an individual.
   */
  citizenship_country: string | null;

  /**
   * @deprecated
   */
  compliance_details: unknown | null;

  /**
   * The country where the business is incorporated, as an ISO 3166-1 alpha-2 country
   * code (e.g. US).
   */
  country_of_incorporation: string | null;

  created_at: string;

  /**
   * A business's formation date (YYYY-MM-DD).
   */
  date_formed: string | null;

  /**
   * An individual's date of birth (YYYY-MM-DD).
   */
  date_of_birth: string | null;

  discarded_at: string | null;

  documents: Array<DocumentsAPI.Document>;

  doing_business_as_names: Array<string>;

  /**
   * The entity's primary email.
   */
  email: string | null;

  /**
   * Monthly expected transaction volume in USD.
   */
  expected_activity_volume: number | null;

  /**
   * An optional user-defined 180 character unique identifier.
   */
  external_id: string | null;

  /**
   * An individual's first name.
   */
  first_name: string | null;

  /**
   * A list of identifications for the legal entity.
   */
  identifications: Array<LegalEntity.Identification>;

  /**
   * A list of industry classifications for the legal entity.
   */
  industry_classifications: Array<Shared.LegalEntityIndustryClassification>;

  /**
   * A description of the intended use of the legal entity.
   */
  intended_use: string | null;

  /**
   * An individual's last name.
   */
  last_name: string | null;

  /**
   * The type of legal entity.
   */
  legal_entity_type: 'business' | 'individual';

  /**
   * The business's legal structure.
   */
  legal_structure:
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
  listed_exchange: string | null;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata: { [key: string]: string };

  /**
   * An individual's middle name.
   */
  middle_name: string | null;

  object: string;

  /**
   * A list of countries where the business operates, as ISO 3166-1 alpha-2 country
   * codes (e.g. ["US", "CA"]).
   */
  operating_jurisdictions: Array<string>;

  phone_numbers: Array<LegalEntity.PhoneNumber>;

  /**
   * Whether the individual is a politically exposed person.
   */
  politically_exposed_person: boolean | null;

  /**
   * An individual's preferred name.
   */
  preferred_name: string | null;

  /**
   * An individual's prefix.
   */
  prefix: string | null;

  /**
   * A list of primary social media URLs for the business.
   */
  primary_social_media_sites: Array<string>;

  /**
   * Array of regulatory bodies overseeing this institution.
   */
  regulators: Array<LegalEntity.Regulator> | null;

  /**
   * The risk rating of the legal entity. One of low, medium, high.
   */
  risk_rating: 'low' | 'medium' | 'high' | null;

  /**
   * The UUID of the parent legal entity in the service provider tree.
   */
  service_provider_legal_entity_id: string | null;

  /**
   * The activation status of the legal entity. One of pending, active, suspended, or
   * denied.
   */
  status: 'active' | 'denied' | 'pending' | 'suspended' | null;

  /**
   * An individual's suffix.
   */
  suffix: string | null;

  /**
   * Acceptance of terms of use by the legal entity.
   */
  terms_of_use: LegalEntity.TermsOfUse | null;

  /**
   * @deprecated Deprecated. Use `third_party_verifications` instead.
   */
  third_party_verification: Shared.ThirdPartyVerification | null;

  /**
   * A list of third-party verifications run by external vendors.
   */
  third_party_verifications: Array<Shared.ThirdPartyVerification>;

  /**
   * Stock ticker symbol for publicly traded companies.
   */
  ticker_symbol: string | null;

  updated_at: string;

  wealth_and_employment_details: WealthAndEmploymentDetails | null;

  /**
   * The entity's primary website URL.
   */
  website: string | null;

  /**
   * The legal entity associations and its child legal entities.
   */
  legal_entity_associations?: Array<LegalEntityAssociationsAPI.LegalEntityAssociation> | null;
}

export namespace LegalEntity {
  export interface Address {
    id: string;

    /**
     * The types of this address.
     */
    address_types: Array<
      | 'business'
      | 'business_physical'
      | 'business_registered'
      | 'mailing'
      | 'other'
      | 'po_box'
      | 'residential'
    >;

    /**
     * Country code conforms to [ISO 3166-1 alpha-2]
     */
    country: string | null;

    created_at: string;

    discarded_at: string | null;

    line1: string | null;

    line2: string | null;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    /**
     * Locality or City. Use the full city name rather than an abbreviation (e.g. San
     * Francisco).
     */
    locality: string | null;

    object: string;

    /**
     * The postal code of the address.
     */
    postal_code: string | null;

    /**
     * Whether this address is the primary address for the legal entity. Optional; when
     * omitted it is inferred from the address types.
     */
    primary: boolean | null;

    /**
     * Region or State. This field is free-form; for US states, we recommend a
     * two-letter code (e.g. CA). Full state names are also accepted.
     */
    region: string | null;

    updated_at: string;
  }

  export interface Identification {
    id: string;

    created_at: string;

    discarded_at: string | null;

    documents: Array<DocumentsAPI.Document>;

    /**
     * The date when the Identification is no longer considered valid by the issuing
     * authority.
     */
    expiration_date: string | null;

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
     * The ISO 3166-1 alpha-2 country code of the country that issued the
     * identification
     */
    issuing_country: string | null;

    /**
     * The region in which the identifcation was issued.
     */
    issuing_region: string | null;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    object: string;

    updated_at: string;
  }

  /**
   * A list of phone numbers in E.164 format.
   */
  export interface PhoneNumber {
    /**
     * A phone number in E.164 format. This format is strictly validated: include a
     * leading + and country code, followed by digits only (no spaces or dashes), e.g.
     * +12025551234.
     */
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

export interface WealthAndEmploymentDetails {
  id: string;

  /**
   * The annual income of the individual in USD.
   */
  annual_income: number | null;

  created_at: string;

  discarded_at: string | null;

  /**
   * The country in which the employer is located.
   */
  employer_country: string | null;

  /**
   * The name of the employer.
   */
  employer_name: string | null;

  /**
   * The state in which the employer is located. This field is free-form text; for US
   * states, we recommend a two-letter abbreviation (e.g. CA).
   */
  employer_state: string | null;

  /**
   * The employment status of the individual.
   */
  employment_status: 'employed' | 'retired' | 'self_employed' | 'student' | 'unemployed' | null;

  /**
   * The country in which the individual's income is earned.
   */
  income_country: string | null;

  /**
   * The source of the individual's income.
   */
  income_source:
    | 'family_support'
    | 'government_benefits'
    | 'inheritance'
    | 'investments'
    | 'rental_income'
    | 'retirement'
    | 'salary'
    | 'self_employed'
    | null;

  /**
   * The state in which the individual's income is earned.
   */
  income_state: string | null;

  /**
   * The industry of the individual.
   */
  industry:
    | 'accounting'
    | 'agriculture'
    | 'automotive'
    | 'chemical_manufacturing'
    | 'construction'
    | 'educational_medical'
    | 'food_service'
    | 'finance'
    | 'gasoline'
    | 'health_stores'
    | 'laundry'
    | 'maintenance'
    | 'manufacturing'
    | 'merchant_wholesale'
    | 'mining'
    | 'performing_arts'
    | 'professional_non_legal'
    | 'public_administration'
    | 'publishing'
    | 'real_estate'
    | 'recreation_gambling'
    | 'religious_charity'
    | 'rental_services'
    | 'retail_clothing'
    | 'retail_electronics'
    | 'retail_food'
    | 'retail_furnishing'
    | 'retail_home'
    | 'retail_non_store'
    | 'retail_sporting'
    | 'transportation'
    | 'travel'
    | 'utilities'
    | null;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  /**
   * The occupation of the individual.
   */
  occupation:
    | 'consulting'
    | 'executive'
    | 'finance_accounting'
    | 'food_services'
    | 'government'
    | 'healthcare'
    | 'legal_services'
    | 'manufacturing'
    | 'other'
    | 'sales'
    | 'science_engineering'
    | 'technology'
    | null;

  /**
   * The source of the individual's funds.
   */
  source_of_funds:
    | 'alimony'
    | 'annuity'
    | 'business_owner'
    | 'business_revenue'
    | 'debt_financing'
    | 'general_employee'
    | 'government_benefits'
    | 'homemaker'
    | 'inheritance_gift'
    | 'intercompany_loan'
    | 'investment'
    | 'investor_funding'
    | 'legal_settlement'
    | 'lottery'
    | 'real_estate'
    | 'retained_earnings_or_savings'
    | 'retired'
    | 'retirement'
    | 'salary'
    | 'sale_of_business_assets'
    | 'sale_of_real_estate'
    | 'self_employed'
    | 'senior_executive'
    | 'trust_income'
    | null;

  updated_at: string;

  /**
   * The source of the individual's wealth.
   */
  wealth_source:
    | 'business_sale'
    | 'family_support'
    | 'government_benefits'
    | 'inheritance'
    | 'investments'
    | 'other'
    | 'rental_income'
    | 'retirement'
    | 'salary'
    | 'self_employed'
    | null;
}

export interface LegalEntityListParams extends PageParams {
  /**
   * An optional user-defined 180 character unique identifier.
   */
  external_id?: string;

  legal_entity_type?: 'business' | 'individual';

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: { [key: string]: string };

  show_deleted?: string;

  status?: 'pending' | 'active' | 'suspended' | 'denied';
}

export interface LegalEntityCreateParams {
  /**
   * The type of legal entity.
   */
  legal_entity_type: 'business' | 'individual';

  /**
   * A list of addresses for the entity.
   */
  addresses?: Array<Shared.LegalEntityAddressCreateRequest>;

  bank_settings?: BankSettings | null;

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
  documents?: Array<LegalEntityCreateParams.Document>;

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
  identifications?: Array<Shared.IdentificationCreateRequest>;

  /**
   * A list of industry classifications for the legal entity.
   */
  industry_classifications?: Array<Shared.LegalEntityIndustryClassification>;

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
  legal_entity_associations?: Array<Shared.LegalEntityAssociationInlineCreate> | null;

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

  phone_numbers?: Array<LegalEntityCreateParams.PhoneNumber>;

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
  regulators?: Array<LegalEntityCreateParams.Regulator> | null;

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
  terms_of_use?: LegalEntityCreateParams.TermsOfUse | null;

  /**
   * Deprecated. Use `third_party_verifications` instead.
   */
  third_party_verification?: Shared.ThirdPartyVerification | null;

  /**
   * A list of third-party verifications run by external vendors.
   */
  third_party_verifications?: Array<Shared.ThirdPartyVerification>;

  /**
   * Stock ticker symbol for publicly traded companies.
   */
  ticker_symbol?: string | null;

  wealth_and_employment_details?: WealthAndEmploymentDetails | null;

  /**
   * The entity's primary website URL.
   */
  website?: string | null;
}

export namespace LegalEntityCreateParams {
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
    /**
     * A phone number in E.164 format. This format is strictly validated: include a
     * leading + and country code, followed by digits only (no spaces or dashes), e.g.
     * +12025551234.
     */
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

export interface LegalEntityUpdateParams {
  /**
   * A list of addresses for the entity.
   */
  addresses?: Array<Shared.LegalEntityAddressCreateRequest>;

  bank_settings?: BankSettings | null;

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
  identifications?: Array<Shared.IdentificationCreateRequest>;

  /**
   * A list of industry classifications for the legal entity.
   */
  industry_classifications?: Array<Shared.LegalEntityIndustryClassification>;

  /**
   * A description of the intended use of the legal entity.
   */
  intended_use?: string | null;

  /**
   * An individual's last name.
   */
  last_name?: string | null;

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

  phone_numbers?: Array<LegalEntityUpdateParams.PhoneNumber>;

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
  regulators?: Array<LegalEntityUpdateParams.Regulator> | null;

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
  terms_of_use?: LegalEntityUpdateParams.TermsOfUse | null;

  /**
   * Deprecated. Use `third_party_verifications` instead.
   */
  third_party_verification?: Shared.ThirdPartyVerification | null;

  /**
   * A list of third-party verifications run by external vendors.
   */
  third_party_verifications?: Array<Shared.ThirdPartyVerification>;

  /**
   * Stock ticker symbol for publicly traded companies.
   */
  ticker_symbol?: string | null;

  wealth_and_employment_details?: WealthAndEmploymentDetails | null;

  /**
   * The entity's primary website URL.
   */
  website?: string | null;
}

export namespace LegalEntityUpdateParams {
  /**
   * A list of phone numbers in E.164 format.
   */
  export interface PhoneNumber {
    /**
     * A phone number in E.164 format. This format is strictly validated: include a
     * leading + and country code, followed by digits only (no spaces or dashes), e.g.
     * +12025551234.
     */
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

export declare namespace LegalEntities {
  export {
    type BankSettings as BankSettings,
    type LegalEntity as LegalEntity,
    type WealthAndEmploymentDetails as WealthAndEmploymentDetails,
    type LegalEntitiesPage as LegalEntitiesPage,
    type LegalEntityListParams as LegalEntityListParams,
    type LegalEntityCreateParams as LegalEntityCreateParams,
    type LegalEntityUpdateParams as LegalEntityUpdateParams,
  };
}
