// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as LegalEntityAssociationsAPI from './legal-entity-associations';
import * as Shared from './shared';
import { Page, type PageParams } from '../pagination';

export class LegalEntities extends APIResource {
  /**
   * create legal_entity
   *
   * @example
   * ```ts
   * const legalEntity = await client.legalEntities.create({
   *   legal_entity_type: 'business',
   * });
   * ```
   */
  create(params: LegalEntityCreateParams, options?: Core.RequestOptions): Core.APIPromise<LegalEntity> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post('/api/legal_entities', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
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
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<LegalEntity> {
    return this._client.get(`/api/legal_entities/${id}`, options);
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
    body?: LegalEntityUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LegalEntity>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<LegalEntity>;
  update(
    id: string,
    body: LegalEntityUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LegalEntity> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.patch(`/api/legal_entities/${id}`, { body, ...options });
  }

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
    query?: LegalEntityListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LegalEntitiesPage, LegalEntity>;
  list(options?: Core.RequestOptions): Core.PagePromise<LegalEntitiesPage, LegalEntity>;
  list(
    query: LegalEntityListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LegalEntitiesPage, LegalEntity> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/legal_entities', LegalEntitiesPage, { query, ...options });
  }
}

export class LegalEntitiesPage extends Page<LegalEntity> {}

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
   * The business's legal business name.
   */
  business_name: string | null;

  /**
   * The country of citizenship for an individual.
   */
  citizenship_country: string | null;

  compliance_details: Shared.LegalEntityComplianceDetail | null;

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

  doing_business_as_names: Array<string>;

  /**
   * The entity's primary email.
   */
  email: string | null;

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
   * An individual's last name.
   */
  last_name: string | null;

  /**
   * The legal entity associations and its child legal entities.
   */
  legal_entity_associations: Array<LegalEntityAssociationsAPI.LegalEntityAssociation> | null;

  /**
   * The type of legal entity.
   */
  legal_entity_type: 'business' | 'individual' | 'joint';

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
   * The risk rating of the legal entity. One of low, medium, high.
   */
  risk_rating: 'low' | 'medium' | 'high' | null;

  /**
   * An individual's suffix.
   */
  suffix: string | null;

  updated_at: string;

  wealth_and_employment_details: WealthAndEmploymentDetails | null;

  /**
   * The entity's primary website URL.
   */
  website: string | null;
}

export namespace LegalEntity {
  export interface Address {
    id: string;

    /**
     * The types of this address.
     */
    address_types: Array<'business' | 'mailing' | 'other' | 'po_box' | 'residential'>;

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

  export interface Identification {
    id: string;

    created_at: string;

    discarded_at: string | null;

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
    phone_number?: string;
  }
}

export interface WealthAndEmploymentDetails {
  id: string;

  /**
   * The annual income of the individual.
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
   * The state in which the employer is located.
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
    | 'general_employee'
    | 'government_benefits'
    | 'homemaker'
    | 'inheritance_gift'
    | 'investment'
    | 'legal_settlement'
    | 'lottery'
    | 'real_estate'
    | 'retired'
    | 'retirement'
    | 'salary'
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
   * The business's legal business name.
   */
  business_name?: string | null;

  /**
   * The country of citizenship for an individual.
   */
  citizenship_country?: string | null;

  compliance_details?: Shared.LegalEntityComplianceDetail | null;

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
  identifications?: Array<Shared.IdentificationCreateRequest>;

  /**
   * A list of industry classifications for the legal entity.
   */
  industry_classifications?: Array<Shared.LegalEntityIndustryClassification>;

  /**
   * An individual's last name.
   */
  last_name?: string | null;

  /**
   * The legal entity associations and its child legal entities.
   */
  legal_entity_associations?: Array<LegalEntityCreateParams.LegalEntityAssociation> | null;

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
   * The risk rating of the legal entity. One of low, medium, high.
   */
  risk_rating?: 'low' | 'medium' | 'high' | null;

  /**
   * An individual's suffix.
   */
  suffix?: string | null;

  wealth_and_employment_details?: WealthAndEmploymentDetails | null;

  /**
   * The entity's primary website URL.
   */
  website?: string | null;
}

export namespace LegalEntityCreateParams {
  export interface LegalEntityAssociation {
    relationship_types: Array<'beneficial_owner' | 'control_person'>;

    /**
     * The child legal entity.
     */
    child_legal_entity?: Shared.ChildLegalEntityCreate;

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

  /**
   * A list of phone numbers in E.164 format.
   */
  export interface PhoneNumber {
    phone_number?: string;
  }
}

export interface LegalEntityUpdateParams {
  /**
   * A list of addresses for the entity.
   */
  addresses?: Array<Shared.LegalEntityAddressCreateRequest>;

  bank_settings?: BankSettings | null;

  /**
   * The business's legal business name.
   */
  business_name?: string | null;

  /**
   * The country of citizenship for an individual.
   */
  citizenship_country?: string | null;

  compliance_details?: Shared.LegalEntityComplianceDetail | null;

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
  identifications?: Array<Shared.IdentificationCreateRequest>;

  /**
   * A list of industry classifications for the legal entity.
   */
  industry_classifications?: Array<Shared.LegalEntityIndustryClassification>;

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
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: { [key: string]: string };

  /**
   * An individual's middle name.
   */
  middle_name?: string | null;

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
   * The risk rating of the legal entity. One of low, medium, high.
   */
  risk_rating?: 'low' | 'medium' | 'high' | null;

  /**
   * An individual's suffix.
   */
  suffix?: string | null;

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
    phone_number?: string;
  }
}

export interface LegalEntityListParams extends PageParams {
  legal_entity_type?: 'business' | 'individual';

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: { [key: string]: string };

  show_deleted?: string;
}

LegalEntities.LegalEntitiesPage = LegalEntitiesPage;

export declare namespace LegalEntities {
  export {
    type BankSettings as BankSettings,
    type LegalEntity as LegalEntity,
    type WealthAndEmploymentDetails as WealthAndEmploymentDetails,
    LegalEntitiesPage as LegalEntitiesPage,
    type LegalEntityCreateParams as LegalEntityCreateParams,
    type LegalEntityUpdateParams as LegalEntityUpdateParams,
    type LegalEntityListParams as LegalEntityListParams,
  };
}
