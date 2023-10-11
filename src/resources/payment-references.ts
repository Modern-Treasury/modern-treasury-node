// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as PaymentReferencesAPI from 'modern-treasury/resources/payment-references';
import { Page, type PageParams } from 'modern-treasury/pagination';

export class PaymentReferences extends APIResource {
  /**
   * get payment_reference
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<PaymentReference> {
    return this.get(`/api/payment_references/${id}`, options);
  }

  /**
   * list payment_references
   */
  list(
    query?: PaymentReferenceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaymentReferencesPage, PaymentReference>;
  list(options?: Core.RequestOptions): Core.PagePromise<PaymentReferencesPage, PaymentReference>;
  list(
    query: PaymentReferenceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaymentReferencesPage, PaymentReference> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/api/payment_references', PaymentReferencesPage, { query, ...options });
  }

  /**
   * @deprecated use `retrieve` instead
   */
  retireve = this.retrieve;
}

export class PaymentReferencesPage extends Page<PaymentReference> {}

export interface PaymentReference {
  id: string;

  created_at: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  /**
   * The actual reference number assigned by the bank.
   */
  reference_number: string;

  /**
   * The type of reference number.
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
    | 'column_fx_quote_id'
    | 'column_reversal_pair_transfer_id'
    | 'column_transfer_id'
    | 'cross_river_payment_id'
    | 'cross_river_transaction_id'
    | 'currencycloud_conversion_id'
    | 'currencycloud_payment_id'
    | 'dc_bank_transaction_id'
    | 'dwolla_transaction_id'
    | 'eft_trace_number'
    | 'evolve_transaction_id'
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
    | 'jpmc_payment_returned_datetime'
    | 'lob_check_id'
    | 'other'
    | 'partial_swift_mir'
    | 'pnc_clearing_reference'
    | 'pnc_instruction_id'
    | 'pnc_multipayment_id'
    | 'pnc_payment_trace_id'
    | 'rspec_vendor_payment_id'
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

  /**
   * The id of the referenceable to search for. Must be accompanied by the
   * referenceable_type or will return an error.
   */
  referenceable_id: string;

  /**
   * One of the referenceable types. This must be accompanied by the id of the
   * referenceable or will return an error.
   */
  referenceable_type: 'payment_order' | 'reversal' | 'return';

  updated_at: string;
}

export interface PaymentReferenceListParams extends PageParams {
  /**
   * The actual reference number assigned by the bank.
   */
  reference_number?: string;

  /**
   * The id of the referenceable to search for. Must be accompanied by the
   * referenceable_type or will return an error.
   */
  referenceable_id?: string;

  /**
   * One of the referenceable types. This must be accompanied by the id of the
   * referenceable or will return an error.
   */
  referenceable_type?: 'payment_order' | 'return' | 'reversal';
}

export namespace PaymentReferences {
  export import PaymentReference = PaymentReferencesAPI.PaymentReference;
  export import PaymentReferencesPage = PaymentReferencesAPI.PaymentReferencesPage;
  export import PaymentReferenceListParams = PaymentReferencesAPI.PaymentReferenceListParams;
}
