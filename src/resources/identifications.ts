// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DocumentsAPI from './documents';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Identifications extends APIResource {
  /**
   * Create an Identification for a Legal Entity.
   */
  create(body: IdentificationCreateParams, options?: RequestOptions): APIPromise<Identification> {
    return this._client.post('/api/identifications', { body, ...options });
  }

  /**
   * Get an existing Identification.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Identification> {
    return this._client.get(path`/api/identifications/${id}`, options);
  }

  /**
   * Update an existing Identification.
   */
  update(
    id: string,
    body: IdentificationUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Identification> {
    return this._client.patch(path`/api/identifications/${id}`, { body, ...options });
  }
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
    | 'hk_brn'
    | 'hk_hkid'
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

export interface IdentificationCreateParams {
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
    | 'hk_brn'
    | 'hk_hkid'
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
   * The ID of the Legal Entity the identification belongs to.
   */
  legal_entity_id: string;

  /**
   * A list of documents to attach to the identification.
   */
  documents?: Array<IdentificationCreateParams.Document>;

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

export namespace IdentificationCreateParams {
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

export interface IdentificationUpdateParams {
  /**
   * The date when the Identification is no longer considered valid by the issuing
   * authority.
   */
  expiration_date?: string | null;

  /**
   * The ID number of identification document.
   */
  id_number?: string;

  /**
   * The type of ID number.
   */
  id_type?:
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
    | 'hk_brn'
    | 'hk_hkid'
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
  issuing_country?: string | null;

  /**
   * The region in which the identifcation was issued.
   */
  issuing_region?: string | null;
}

export declare namespace Identifications {
  export {
    type Identification as Identification,
    type IdentificationCreateParams as IdentificationCreateParams,
    type IdentificationUpdateParams as IdentificationUpdateParams,
  };
}
