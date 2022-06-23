// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import { Page, PageParams } from '~/pagination';

export class Counterparties extends APIResource {
  /**
   * Create a new counterparty.
   */
  create(
    body: CounterpartyCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Counterparty>> {
    return this.post('/api/counterparties', { body, ...options });
  }

  /**
   * Get details on a single counterparty.
   */
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Counterparty>> {
    return this.get(`/api/counterparties/${id}`, options);
  }

  /**
   * Updates a given counterparty with new information.
   */
  update(
    id: string,
    body?: CounterpartyUpdateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Counterparty>>;
  update(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Counterparty>>;
  update(
    id: string,
    body: CounterpartyUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Counterparty>> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }

    return this.patch(`/api/counterparties/${id}`, { body, ...options });
  }

  /**
   * Get a paginated list of all counterparties.
   */
  list(query?: CounterpartyListParams, options?: Core.RequestOptions): Core.PagePromise<CounterpartiesPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<CounterpartiesPage>;
  list(
    query: CounterpartyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CounterpartiesPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }

    return this.getAPIList('/api/counterparties', CounterpartiesPage, { query, ...options });
  }

  /**
   * Deletes a given counterparty.
   */
  del(id: string, options?: Core.RequestOptions): Promise<void> {
    return this.delete(`/api/counterparties/${id}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * Send an email requesting account details.
   */
  collectAccount(
    id: string,
    body: CounterpartyCollectAccountParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<CounterpartyCollectAccountResponse>> {
    return this.post(`/api/counterparties/${id}/collect_account`, { body, ...options });
  }
}

export class CounterpartiesPage extends Page<Counterparty> {}

export interface Counterparty {
  /**
   * The accounts for this counterparty.
   */
  accounts: Array<Counterparty.Accounts>;

  created_at: string;

  discarded_at: string | null;

  /**
   * The counterparty's email.
   */
  email: string | null;

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
   * A human friendly name for this counterparty.
   */
  name: string;

  object: string;

  /**
   * Send an email to the counterparty whenever an associated payment order is sent
   * to the bank.
   */
  send_remittance_advice: boolean;

  updated_at: string;
}

export namespace Counterparty {
  export interface Accounts {
    account_details?: Array<Accounts.AccountDetails>;

    /**
     * Can be `checking`, `savings` or `other`.
     */
    account_type?: 'checking' | 'other' | 'savings';

    contact_details?: Array<Accounts.ContactDetails>;

    created_at?: string;

    discarded_at?: string | null;

    id?: string;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode?: boolean;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: Record<string, string>;

    /**
     * A nickname for the external account. This is only for internal usage and won't
     * affect any payments
     */
    name?: string | null;

    object?: string;

    /**
     * The address associated with the owner or `null`.
     */
    party_address?: Accounts.PartyAddress | null;

    /**
     * The legal name of the entity which owns the account.
     */
    party_name?: string;

    /**
     * Either `individual` or `business`.
     */
    party_type?: 'business' | 'individual' | null;

    routing_details?: Array<Accounts.RoutingDetails>;

    updated_at?: string;

    verification_status?: 'pending_verification' | 'unverified' | 'verified';
  }

  export namespace Accounts {
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

    export interface ContactDetails {
      contact_identifier: string;

      contact_identifier_type: 'email' | 'phone_number';

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
  }
}

export interface CounterpartyCollectAccountResponse {
  /**
   * This is the link to the secure Modern Treasury form. By default, Modern Treasury
   * will send an email to your counterparty that includes a link to this form.
   * However, if `send_email` is passed as `false` in the body then Modern Treasury
   * will not send the email and you can send it to the counterparty directly.
   */
  form_link: string;

  /**
   * The id of the existing counterparty.
   */
  id: string;

  /**
   * This field will be `true` if an email requesting account details has already
   * been sent to this counterparty.
   */
  is_resend: boolean;
}

export interface CounterpartyCreateParams {
  /**
   * A human friendly name for this counterparty.
   */
  name: string;

  /**
   * The accounts for this counterparty.
   */
  accounts?: Array<CounterpartyCreateParams.Accounts>;

  /**
   * The counterparty's email.
   */
  email?: string | null;

  /**
   * An optional type to auto-sync the counterparty to your ledger. Either `customer`
   * or `vendor`.
   */
  ledger_type?: 'customer' | 'vendor';

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;

  /**
   * Send an email to the counterparty whenever an associated payment order is sent
   * to the bank.
   */
  send_remittance_advice?: boolean;

  /**
   * Either a valid SSN or EIN.
   */
  taxpayer_identifier?: string;
}

export namespace CounterpartyCreateParams {
  export interface Accounts {
    account_details?: Array<Accounts.AccountDetails>;

    /**
     * Can be `checking`, `savings` or `other`.
     */
    account_type?: 'checking' | 'other' | 'savings';

    contact_details?: Array<Accounts.ContactDetails>;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: Record<string, string>;

    /**
     * A nickname for the external account. This is only for internal usage and won't
     * affect any payments
     */
    name?: string | null;

    /**
     * Required if receiving wire payments.
     */
    party_address?: Accounts.PartyAddress;

    party_identifier?: string;

    /**
     * If this value isn't provided, it will be inherited from the counterparty's name.
     */
    party_name?: string;

    /**
     * Either `individual` or `business`.
     */
    party_type?: 'business' | 'individual' | null;

    /**
     * If you've enabled the Modern Treasury + Plaid integration in your Plaid account,
     * you can pass the processor token in this field.
     */
    plaid_processor_token?: string;

    routing_details?: Array<Accounts.RoutingDetails>;
  }

  export namespace Accounts {
    export interface PartyAddress {
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

    export interface AccountDetails {
      account_number: string;

      account_number_type?: 'iban' | 'clabe' | 'wallet_address' | 'pan' | 'other';
    }

    export interface RoutingDetails {
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

    export interface ContactDetails {
      contact_identifier?: string;

      contact_identifier_type?: 'email' | 'phone_number';
    }
  }
}

export interface CounterpartyUpdateParams {
  /**
   * A new email for the counterparty.
   */
  email?: string;

  /**
   * Additional data in the form of key-value pairs. Pairs can be removed by passing
   * an empty string or `null` as the value.
   */
  metadata?: Record<string, string>;

  /**
   * A new name for the counterparty. Will only update if passed.
   */
  name?: string;

  /**
   * If this is `true`, Modern Treasury will send an email to the counterparty
   * whenever an associated payment order is sent to the bank.
   */
  send_remittance_advice?: boolean;

  /**
   * Either a valid SSN or EIN.
   */
  taxpayer_identifier?: string;
}

export interface CounterpartyListParams extends PageParams {
  /**
   * Used to return counterparties created after some datetime.
   */
  created_at_lower_bound?: string;

  /**
   * Used to return counterparties created before some datetime.
   */
  created_at_upper_bound?: string;

  /**
   * Performs a partial string match of the email field. This is also case
   * insensitive.
   */
  email?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;

  /**
   * Performs a partial string match of the name field. This is also case
   * insensitive.
   */
  name?: string;
}

export interface CounterpartyCollectAccountParams {
  /**
   * One of `credit` or `debit`. Use `credit` when you want to pay a counterparty.
   * Use `debit` when you need to charge a counterparty. This field helps us send a
   * more tailored email to your counterparties."
   */
  direction: 'credit' | 'debit';

  /**
   * The URL you want your customer to visit upon filling out the form. By default,
   * they will be sent to a Modern Treasury landing page. This must be a valid HTTPS
   * URL if set.
   */
  custom_redirect?: string;

  /**
   * The list of fields you want on the form. This field is optional and if it is not
   * set, will default to [\"nameOnAccount\", \"accountType\", \"accountNumber\",
   * \"routingNumber\", \"address\"]. The full list of options is [\"name\",
   * \"nameOnAccount\", \"taxpayerIdentifier\", \"accountType\", \"accountNumber\",
   * \"routingNumber\", \"address\", \"ibanNumber\", \"swiftCode\"].
   */
  fields?: Array<
    | 'name'
    | 'nameOnAccount'
    | 'taxpayerIdentifier'
    | 'accountType'
    | 'accountNumber'
    | 'routingNumber'
    | 'address'
    | 'ibanNumber'
    | 'swiftCode'
  >;

  /**
   * By default, Modern Treasury will send an email to your counterparty that
   * includes a link to the form they must fill out. However, if you would like to
   * send the counterparty the link, you can set this parameter to `false`. The JSON
   * body will include the link to the secure Modern Treasury form.
   */
  send_email?: boolean;
}
