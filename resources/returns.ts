// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';
import * as Shared from '~/resources/shared';

export class Returns extends APIResource {
  /**
   * Create a return.
   */
  create(body: ReturnCreateParams, options?: Core.RequestOptions): Promise<Core.APIResponse<ReturnObject>> {
    return this.post('/api/returns', { body, ...options });
  }

  /**
   * Get a single return.
   */
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<ReturnObject>> {
    return this.get(`/api/returns/${id}`, options);
  }

  /**
   * Get a list of returns.
   */
  list(query?: ReturnListParams, options?: Core.RequestOptions): Core.PagePromise<ReturnObjectsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<ReturnObjectsPage>;
  list(
    query: ReturnListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ReturnObjectsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/api/returns', ReturnObjectsPage, { query, ...options });
  }
}

export class ReturnObjectsPage extends Page<ReturnObject> {}

export interface ReturnObject {
  /**
   * Some returns may include additional information from the bank. In these cases,
   * this string will be present.
   */
  additional_information: string | null;

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
    | 'R14'
    | 'R15'
    | 'R16'
    | 'R17'
    | 'R20'
    | 'R21'
    | 'R22'
    | 'R23'
    | 'R24'
    | 'R29'
    | 'R31'
    | 'R33'
    | 'R37'
    | 'R38'
    | 'R39'
    | 'R51'
    | 'R52'
    | 'R53'
    | 'currencycloud'
    | null;

  created_at: string;

  /**
   * Currency that this transaction is denominated in.
   */
  currency: Shared.Currency;

  /**
   * If the return code is `R14` or `R15` this is the date the deceased counterparty
   * passed away.
   */
  date_of_death: string | null;

  /**
   * If an originating return failed to be processed by the bank, a description of
   * the failure reason will be available.
   */
  failure_reason: string | null;

  id: string;

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
  reference_numbers: Array<ReturnObject.ReferenceNumbers>;

  /**
   * The ID of the object being returned or `null`.
   */
  returnable_id: string | null;

  /**
   * The type of object being returned or `null`.
   */
  returnable_type: 'incoming_payment_detail' | 'paper_item' | 'payment_order' | 'return' | 'reversal' | null;

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
  type: 'ach' | 'ach_noc' | 'au_becs' | 'bacs' | 'book' | 'eft' | 'interac' | 'paper_item' | 'sepa' | 'wire';

  updated_at: string;
}

export namespace ReturnObject {
  export interface ReferenceNumbers {
    created_at: string;

    id: string;

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
      | 'bofa_end_to_end_id'
      | 'bofa_transaction_id'
      | 'check_number'
      | 'cross_river_payment_id'
      | 'cross_river_transaction_id'
      | 'currencycloud_conversion_id'
      | 'currencycloud_payment_id'
      | 'dc_bank_transaction_id'
      | 'dwolla_transaction_id'
      | 'eft_trace_number'
      | 'fedwire_imad'
      | 'fedwire_omad'
      | 'first_republic_internal_id'
      | 'goldman_sachs_collection_request_id'
      | 'goldman_sachs_end_to_end_id'
      | 'goldman_sachs_payment_request_id'
      | 'goldman_sachs_request_id'
      | 'goldman_sachs_unique_payment_id'
      | 'interac_message_id'
      | 'jpmc_ccn'
      | 'jpmc_customer_reference_id'
      | 'jpmc_end_to_end_id'
      | 'jpmc_firm_root_id'
      | 'jpmc_p3_id'
      | 'jpmc_payment_batch_id'
      | 'jpmc_payment_information_id'
      | 'lob_check_id'
      | 'other'
      | 'partial_swift_mir'
      | 'pnc_clearing_reference'
      | 'pnc_instruction_id'
      | 'pnc_multipayment_id'
      | 'pnc_payment_trace_id'
      | 'rtp_instruction_id'
      | 'signet_api_reference_id'
      | 'signet_confirmation_id'
      | 'signet_request_id'
      | 'silvergate_payment_id'
      | 'swift_mir'
      | 'swift_uetr'
      | 'usbank_payment_id'
      | 'wells_fargo_payment_id'
      | 'wells_fargo_trace_number';

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
    | 'R14'
    | 'R15'
    | 'R16'
    | 'R17'
    | 'R20'
    | 'R21'
    | 'R22'
    | 'R23'
    | 'R24'
    | 'R29'
    | 'R31'
    | 'R33'
    | 'R37'
    | 'R38'
    | 'R39'
    | 'R51'
    | 'R52'
    | 'R53'
    | 'currencycloud'
    | null;

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
   * One of `payment_order`, `paper_item`, `reversal`, or `incoming_payment_detail`.
   * Must be accompanied by `returnable_id`.
   */
  returnable_type?: 'incoming_payment_detail' | 'paper_item' | 'payment_order' | 'return' | 'reversal';
}
