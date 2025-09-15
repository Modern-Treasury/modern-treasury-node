// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Returns extends APIResource {
  /**
   * Create a return.
   */
  create(body: ReturnCreateParams, options?: RequestOptions): APIPromise<ReturnObject> {
    return this._client.post('/api/returns', { body, ...options });
  }

  /**
   * Get a single return.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ReturnObject> {
    return this._client.get(path`/api/returns/${id}`, options);
  }

  /**
   * Get a list of returns.
   */
  list(
    query: ReturnListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ReturnObjectsPage, ReturnObject> {
    return this._client.getAPIList('/api/returns', Page<ReturnObject>, { query, ...options });
  }
}

export type ReturnObjectsPage = Page<ReturnObject>;

export interface ReturnObject {
  id: string;

  /**
   * Value in specified currency's smallest unit. e.g. $10 would be represented
   * as 1000.
   */
  amount: number;

  /**
   * The return code. For ACH returns, this is the required ACH return code.
   */
  code:
    | '901'
    | '902'
    | '903'
    | '904'
    | '905'
    | '907'
    | '908'
    | '909'
    | '910'
    | '911'
    | '912'
    | '914'
    | 'C01'
    | 'C02'
    | 'C03'
    | 'C05'
    | 'C06'
    | 'C07'
    | 'C08'
    | 'C09'
    | 'C13'
    | 'C14'
    | 'R01'
    | 'R02'
    | 'R03'
    | 'R04'
    | 'R05'
    | 'R06'
    | 'R07'
    | 'R08'
    | 'R09'
    | 'R10'
    | 'R11'
    | 'R12'
    | 'R13'
    | 'R14'
    | 'R15'
    | 'R16'
    | 'R17'
    | 'R18'
    | 'R19'
    | 'R20'
    | 'R21'
    | 'R22'
    | 'R23'
    | 'R24'
    | 'R25'
    | 'R26'
    | 'R27'
    | 'R28'
    | 'R29'
    | 'R30'
    | 'R31'
    | 'R32'
    | 'R33'
    | 'R34'
    | 'R35'
    | 'R36'
    | 'R37'
    | 'R38'
    | 'R39'
    | 'R40'
    | 'R41'
    | 'R42'
    | 'R43'
    | 'R44'
    | 'R45'
    | 'R46'
    | 'R47'
    | 'R50'
    | 'R51'
    | 'R52'
    | 'R53'
    | 'R61'
    | 'R62'
    | 'R67'
    | 'R68'
    | 'R69'
    | 'R70'
    | 'R71'
    | 'R72'
    | 'R73'
    | 'R74'
    | 'R75'
    | 'R76'
    | 'R77'
    | 'R80'
    | 'R81'
    | 'R82'
    | 'R83'
    | 'R84'
    | 'R85'
    | 'currencycloud'
    | null;

  /**
   * Only relevant for ACH NOC returns. This is an object containing all of the new
   * and corrected information provided by the bank that was previously incorrect on
   * the original outgoing payment.
   */
  corrections: ReturnObject.Corrections | null;

  created_at: string;

  /**
   * Currency that this transaction is denominated in.
   */
  currency: Shared.Currency;

  /**
   * If the return's status is `returned`, this will include the return object's data
   * that is returning this return.
   */
  current_return: ReturnObject | null;

  /**
   * If the return code is `R14` or `R15` this is the date the deceased counterparty
   * passed away.
   */
  date_of_death: string | null;

  discarded_at: string | null;

  /**
   * If an originating return failed to be processed by the bank, a description of
   * the failure reason will be available.
   */
  failure_reason: string | null;

  /**
   * The ID of the relevant Internal Account.
   */
  internal_account_id: string | null;

  /**
   * The ID of the ledger transaction linked to the return.
   */
  ledger_transaction_id: string | null;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  /**
   * Often the bank will provide an explanation for the return, which is a short
   * human readable string.
   */
  reason: string | null;

  /**
   * An array of Payment Reference objects.
   */
  reference_numbers: Array<ReturnObject.ReferenceNumber>;

  /**
   * The ID of the object being returned or `null`.
   */
  returnable_id: string | null;

  /**
   * The type of object being returned or `null`.
   */
  returnable_type: 'incoming_payment_detail' | 'payment_order' | 'return' | 'reversal' | null;

  /**
   * The role of the return, can be `originating` or `receiving`.
   */
  role: 'originating' | 'receiving';

  /**
   * The current status of the return.
   */
  status: 'completed' | 'failed' | 'pending' | 'processing' | 'returned' | 'sent';

  /**
   * The ID of the relevant Transaction or `null`.
   */
  transaction_id: string | null;

  /**
   * The ID of the relevant Transaction Line Item or `null`.
   */
  transaction_line_item_id: string | null;

  /**
   * The type of return. Can be one of: `ach`, `ach_noc`, `au_becs`, `bacs`, `eft`,
   * `interac`, `manual`, `paper_item`, `wire`.
   */
  type:
    | 'ach'
    | 'ach_noc'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'check'
    | 'cross_border'
    | 'eft'
    | 'interac'
    | 'manual'
    | 'sepa'
    | 'wire';

  updated_at: string;

  /**
   * Some returns may include additional information from the bank. In these cases,
   * this string will be present.
   */
  additional_information?: string | null;

  /**
   * The raw data from the return file that we get from the bank.
   */
  data?: unknown | null;
}

export namespace ReturnObject {
  /**
   * Only relevant for ACH NOC returns. This is an object containing all of the new
   * and corrected information provided by the bank that was previously incorrect on
   * the original outgoing payment.
   */
  export interface Corrections {
    /**
     * The updated account number that should replace the one originally used on the
     * outgoing payment.
     */
    account_number?: string | null;

    /**
     * The updated company ID that should replace the one originally used on the
     * outgoing payment.
     */
    company_id?: string | null;

    /**
     * The updated company name that should replace the one originally used on the
     * outgoing payment.
     */
    company_name?: string | null;

    /**
     * The updated individual identification number that should replace the one
     * originally used on the outgoing payment.
     */
    individual_identification_number?: string | null;

    /**
     * The updated routing number that should replace the one originally used on the
     * outgoing payment.
     */
    routing_number?: string | null;

    /**
     * The updated account type code that should replace the one originally used on the
     * outgoing payment.
     */
    transaction_code?: string | null;
  }

  export interface ReferenceNumber {
    id: string;

    created_at: string;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    object: string;

    /**
     * The vendor reference number.
     */
    reference_number: string;

    /**
     * The type of the reference number. Referring to the vendor payment id.
     */
    reference_number_type:
      | 'ach_original_trace_number'
      | 'ach_trace_number'
      | 'bankprov_payment_activity_date'
      | 'bankprov_payment_id'
      | 'bnk_dev_prenotification_id'
      | 'bnk_dev_transfer_id'
      | 'bny_mellon_transaction_reference_number'
      | 'bofa_end_to_end_id'
      | 'bofa_transaction_id'
      | 'brale_transfer_id'
      | 'bridge_destination_transaction_hash'
      | 'bridge_source_transaction_hash'
      | 'bridge_transfer_id'
      | 'check_number'
      | 'citibank_reference_number'
      | 'citibank_worldlink_clearing_system_reference_number'
      | 'column_fx_quote_id'
      | 'column_reversal_pair_transfer_id'
      | 'column_transfer_id'
      | 'cross_river_core_transaction_id'
      | 'cross_river_fed_batch_id'
      | 'cross_river_payment_id'
      | 'cross_river_service_message'
      | 'cross_river_transaction_id'
      | 'currencycloud_conversion_id'
      | 'currencycloud_payment_id'
      | 'dc_bank_transaction_id'
      | 'eft_trace_number'
      | 'evolve_core_batch'
      | 'evolve_core_file_key'
      | 'evolve_core_seq'
      | 'evolve_transaction_id'
      | 'fake_vendor_payment_id'
      | 'fedwire_imad'
      | 'fedwire_omad'
      | 'first_republic_internal_id'
      | 'goldman_sachs_collection_request_id'
      | 'goldman_sachs_end_to_end_id'
      | 'goldman_sachs_payment_request_id'
      | 'goldman_sachs_request_id'
      | 'goldman_sachs_unique_payment_id'
      | 'hifi_offramp_id'
      | 'hifi_transfer_id'
      | 'interac_message_id'
      | 'jpmc_ccn'
      | 'jpmc_clearing_system_reference'
      | 'jpmc_customer_reference_id'
      | 'jpmc_end_to_end_id'
      | 'jpmc_firm_root_id'
      | 'jpmc_fx_trn_id'
      | 'jpmc_p3_id'
      | 'jpmc_payment_batch_id'
      | 'jpmc_payment_information_id'
      | 'jpmc_payment_returned_datetime'
      | 'jpmc_transaction_reference_number'
      | 'lob_check_id'
      | 'mt_fof_transfer_id'
      | 'other'
      | 'partial_swift_mir'
      | 'pnc_clearing_reference'
      | 'pnc_instruction_id'
      | 'pnc_multipayment_id'
      | 'pnc_payment_trace_id'
      | 'pnc_request_for_payment_id'
      | 'pnc_transaction_reference_number'
      | 'rbc_wire_reference_id'
      | 'rtp_instruction_id'
      | 'signet_api_reference_id'
      | 'signet_confirmation_id'
      | 'signet_request_id'
      | 'silvergate_payment_id'
      | 'svb_end_to_end_id'
      | 'svb_payment_id'
      | 'svb_transaction_cleared_for_sanctions_review'
      | 'svb_transaction_held_for_sanctions_review'
      | 'swift_mir'
      | 'swift_uetr'
      | 'umb_product_partner_account_number'
      | 'usbank_payment_application_reference_id'
      | 'usbank_payment_id'
      | 'usbank_pending_rtp_payment_id'
      | 'usbank_posted_rtp_payment_id'
      | 'wells_fargo_end_to_end_id'
      | 'wells_fargo_payment_id'
      | 'wells_fargo_trace_number'
      | 'wells_fargo_uetr'
      | 'western_alliance_payment_id'
      | 'western_alliance_transaction_id'
      | 'western_alliance_wire_confirmation_number';

    updated_at: string;
  }
}

export interface ReturnCreateParams {
  /**
   * The ID of the object being returned or `null`.
   */
  returnable_id: string | null;

  /**
   * The type of object being returned. Currently, this may only be
   * incoming_payment_detail.
   */
  returnable_type: 'incoming_payment_detail';

  /**
   * Some returns may include additional information from the bank. In these cases,
   * this string will be present.
   */
  additional_information?: string | null;

  /**
   * The return code. For ACH returns, this is the required ACH return code.
   */
  code?:
    | '901'
    | '902'
    | '903'
    | '904'
    | '905'
    | '907'
    | '908'
    | '909'
    | '910'
    | '911'
    | '912'
    | '914'
    | 'C01'
    | 'C02'
    | 'C03'
    | 'C05'
    | 'C06'
    | 'C07'
    | 'C08'
    | 'C09'
    | 'C13'
    | 'C14'
    | 'R01'
    | 'R02'
    | 'R03'
    | 'R04'
    | 'R05'
    | 'R06'
    | 'R07'
    | 'R08'
    | 'R09'
    | 'R10'
    | 'R11'
    | 'R12'
    | 'R13'
    | 'R14'
    | 'R15'
    | 'R16'
    | 'R17'
    | 'R18'
    | 'R19'
    | 'R20'
    | 'R21'
    | 'R22'
    | 'R23'
    | 'R24'
    | 'R25'
    | 'R26'
    | 'R27'
    | 'R28'
    | 'R29'
    | 'R30'
    | 'R31'
    | 'R32'
    | 'R33'
    | 'R34'
    | 'R35'
    | 'R36'
    | 'R37'
    | 'R38'
    | 'R39'
    | 'R40'
    | 'R41'
    | 'R42'
    | 'R43'
    | 'R44'
    | 'R45'
    | 'R46'
    | 'R47'
    | 'R50'
    | 'R51'
    | 'R52'
    | 'R53'
    | 'R61'
    | 'R62'
    | 'R67'
    | 'R68'
    | 'R69'
    | 'R70'
    | 'R71'
    | 'R72'
    | 'R73'
    | 'R74'
    | 'R75'
    | 'R76'
    | 'R77'
    | 'R80'
    | 'R81'
    | 'R82'
    | 'R83'
    | 'R84'
    | 'R85'
    | 'currencycloud'
    | null;

  /**
   * Only relevant for ACH NOC returns. This is an object containing all of the new
   * and corrected information provided by the bank that was previously incorrect on
   * the original outgoing payment.
   */
  corrections?: ReturnCreateParams.Corrections | null;

  /**
   * The raw data from the return file that we get from the bank.
   */
  data?: unknown | null;

  /**
   * If the return code is `R14` or `R15` this is the date the deceased counterparty
   * passed away.
   */
  date_of_death?: string | null;

  /**
   * An optional description of the reason for the return. This is for internal usage
   * and will not be transmitted to the bank.”
   */
  reason?: string | null;
}

export namespace ReturnCreateParams {
  /**
   * Only relevant for ACH NOC returns. This is an object containing all of the new
   * and corrected information provided by the bank that was previously incorrect on
   * the original outgoing payment.
   */
  export interface Corrections {
    /**
     * The updated account number that should replace the one originally used on the
     * outgoing payment.
     */
    account_number?: string | null;

    /**
     * The updated company ID that should replace the one originally used on the
     * outgoing payment.
     */
    company_id?: string | null;

    /**
     * The updated company name that should replace the one originally used on the
     * outgoing payment.
     */
    company_name?: string | null;

    /**
     * The updated individual identification number that should replace the one
     * originally used on the outgoing payment.
     */
    individual_identification_number?: string | null;

    /**
     * The updated routing number that should replace the one originally used on the
     * outgoing payment.
     */
    routing_number?: string | null;

    /**
     * The updated account type code that should replace the one originally used on the
     * outgoing payment.
     */
    transaction_code?: string | null;
  }
}

export interface ReturnListParams extends PageParams {
  /**
   * Specify `counterparty_id` if you wish to see returns that occurred with a
   * specific counterparty.
   */
  counterparty_id?: string;

  /**
   * Specify `internal_account_id` if you wish to see returns to/from a specific
   * account.
   */
  internal_account_id?: string;

  /**
   * The ID of a valid returnable. Must be accompanied by `returnable_type`.
   */
  returnable_id?: string;

  /**
   * One of `payment_order`, `reversal`, or `incoming_payment_detail`. Must be
   * accompanied by `returnable_id`.
   */
  returnable_type?: 'incoming_payment_detail' | 'payment_order' | 'return' | 'reversal';
}

export declare namespace Returns {
  export {
    type ReturnObject as ReturnObject,
    type ReturnObjectsPage as ReturnObjectsPage,
    type ReturnCreateParams as ReturnCreateParams,
    type ReturnListParams as ReturnListParams,
  };
}
