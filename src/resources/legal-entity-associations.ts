// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DocumentsAPI from './documents';
import * as LegalEntitiesAPI from './legal-entities';
import * as Shared from './shared';

export class LegalEntityAssociations extends APIResource {}

export interface ChildLegalEntity {
  id: string;

  /**
   * A list of addresses for the entity.
   */
  addresses: Array<ChildLegalEntity.Address>;

  bank_settings: LegalEntitiesAPI.BankSettings | null;

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
   * The country code where the business is incorporated in the ISO 3166-1 alpha-2 or
   * alpha-3 formats.
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
  identifications: Array<ChildLegalEntity.Identification>;

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
   * The legal entity associations and its child legal entities.
   */
  legal_entity_associations: Array<LegalEntityAssociation> | null;

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
   * A list of countries where the business operates (ISO 3166-1 alpha-2 or alpha-3
   * codes).
   */
  operating_jurisdictions: Array<string>;

  phone_numbers: Array<ChildLegalEntity.PhoneNumber>;

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
  regulators: Array<ChildLegalEntity.Regulator> | null;

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
  terms_of_use: ChildLegalEntity.TermsOfUse | null;

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

  wealth_and_employment_details: LegalEntitiesAPI.WealthAndEmploymentDetails | null;

  /**
   * The entity's primary website URL.
   */
  website: string | null;
}

export namespace ChildLegalEntity {
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
     * Locality or City.
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
     * Region or State.
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

export interface LegalEntityAssociation {
  id: string;

  /**
   * The child legal entity.
   */
  child_legal_entity: ChildLegalEntity;

  created_at: string;

  discarded_at: string | null;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  /**
   * The child entity's ownership percentage iff they are a beneficial owner.
   */
  ownership_percentage: number | null;

  /**
   * The ID of the parent legal entity. This must be a business legal entity.
   */
  parent_legal_entity_id: string;

  relationship_types: Array<'authorized_signer' | 'beneficial_owner' | 'control_person'>;

  /**
   * The job title of the child entity at the parent entity.
   */
  title: string | null;

  updated_at: string;
}

export declare namespace LegalEntityAssociations {
  export { type ChildLegalEntity as ChildLegalEntity, type LegalEntityAssociation as LegalEntityAssociation };
}
