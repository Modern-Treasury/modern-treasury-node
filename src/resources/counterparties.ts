// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as CounterpartiesAPI from 'modern-treasury/resources/counterparties';
import * as AccountDetailsAPI from 'modern-treasury/resources/account-details';
import * as ExternalAccountsAPI from 'modern-treasury/resources/external-accounts';
import * as RoutingDetailsAPI from 'modern-treasury/resources/routing-details';
import * as Shared from 'modern-treasury/resources/shared';
import { Page, type PageParams } from 'modern-treasury/pagination';

export class Counterparties extends APIResource {
  /**
   * Create a new counterparty.
   */
  create(params: CounterpartyCreateParams, options?: Core.RequestOptions): Core.APIPromise<Counterparty> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post('/api/counterparties', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * Get details on a single counterparty.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Counterparty> {
    return this._client.get(`/api/counterparties/${id}`, options);
  }

  /**
   * Updates a given counterparty with new information.
   */
  update(
    id: string,
    body?: CounterpartyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Counterparty>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<Counterparty>;
  update(
    id: string,
    body: CounterpartyUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Counterparty> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.patch(`/api/counterparties/${id}`, { body, ...options });
  }

  /**
   * Get a paginated list of all counterparties.
   */
  list(
    query?: CounterpartyListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CounterpartiesPage, Counterparty>;
  list(options?: Core.RequestOptions): Core.PagePromise<CounterpartiesPage, Counterparty>;
  list(
    query: CounterpartyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CounterpartiesPage, Counterparty> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/counterparties', CounterpartiesPage, { query, ...options });
  }

  /**
   * Deletes a given counterparty.
   */
  del(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/api/counterparties/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Send an email requesting account details.
   */
  collectAccount(
    id: string,
    params: CounterpartyCollectAccountParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CounterpartyCollectAccountResponse> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post(`/api/counterparties/${id}/collect_account`, {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }
}

export class CounterpartiesPage extends Page<Counterparty> {}

export interface Counterparty {
  id: string;

  /**
   * The accounts for this counterparty.
   */
  accounts: Array<Counterparty.Account>;

  created_at: string;

  discarded_at: string | null;

  /**
   * The counterparty's email.
   */
  email: string | null;

  /**
   * The id of the legal entity.
   */
  legal_entity_id: string | null;

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
  name: string | null;

  object: string;

  /**
   * Send an email to the counterparty whenever an associated payment order is sent
   * to the bank.
   */
  send_remittance_advice: boolean;

  updated_at: string;

  /**
   * The verification status of the counterparty.
   */
  verification_status: 'denied' | 'needs_approval' | 'unverified' | 'verified';
}

export namespace Counterparty {
  export interface Account {
    id?: string;

    account_details?: Array<AccountDetailsAPI.AccountDetail>;

    /**
     * Can be `checking`, `savings` or `other`.
     */
    account_type?: ExternalAccountsAPI.ExternalAccountType;

    contact_details?: Array<Account.ContactDetail>;

    created_at?: string;

    discarded_at?: string | null;

    /**
     * If the external account links to a ledger account in Modern Treasury, the id of
     * the ledger account will be populated here.
     */
    ledger_account_id?: string | null;

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
    party_address?: Account.PartyAddress | null;

    /**
     * The legal name of the entity which owns the account.
     */
    party_name?: string;

    /**
     * Either `individual` or `business`.
     */
    party_type?: 'business' | 'individual' | null;

    routing_details?: Array<RoutingDetailsAPI.RoutingDetail>;

    updated_at?: string;

    verification_status?: 'pending_verification' | 'unverified' | 'verified';
  }

  export namespace Account {
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
     * The address associated with the owner or `null`.
     */
    export interface PartyAddress {
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
  }
}

export interface CounterpartyCollectAccountResponse {
  /**
   * The id of the existing counterparty.
   */
  id: string;

  /**
   * This is the link to the secure Modern Treasury form. By default, Modern Treasury
   * will send an email to your counterparty that includes a link to this form.
   * However, if `send_email` is passed as `false` in the body then Modern Treasury
   * will not send the email and you can send it to the counterparty directly.
   */
  form_link: string;

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
  name: string | null;

  accounting?: CounterpartyCreateParams.Accounting;

  /**
   * The accounts for this counterparty.
   */
  accounts?: Array<CounterpartyCreateParams.Account>;

  /**
   * The counterparty's email.
   */
  email?: string | null;

  /**
   * An optional type to auto-sync the counterparty to your ledger. Either `customer`
   * or `vendor`.
   */
  ledger_type?: 'customer' | 'vendor';

  legal_entity?: CounterpartyCreateParams.LegalEntity;

  /**
   * The id of the legal entity.
   */
  legal_entity_id?: string | null;

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

  /**
   * The verification status of the counterparty.
   */
  verification_status?: 'denied' | 'needs_approval' | 'unverified' | 'verified';
}

export namespace CounterpartyCreateParams {
  export interface Accounting {
    /**
     * An optional type to auto-sync the counterparty to your ledger. Either `customer`
     * or `vendor`.
     */
    type?: 'customer' | 'vendor';
  }

  export interface Account {
    account_details?: Array<Account.AccountDetail>;

    /**
     * Can be `checking`, `savings` or `other`.
     */
    account_type?: ExternalAccountsAPI.ExternalAccountType;

    contact_details?: Array<Account.ContactDetail>;

    /**
     * Specifies a ledger account object that will be created with the external
     * account. The resulting ledger account is linked to the external account for
     * auto-ledgering Payment objects. See
     * https://docs.moderntreasury.com/docs/linking-to-other-modern-treasury-objects
     * for more details.
     */
    ledger_account?: Account.LedgerAccount;

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
    party_address?: Account.PartyAddress;

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

    routing_details?: Array<Account.RoutingDetail>;
  }

  export namespace Account {
    export interface AccountDetail {
      account_number: string;

      account_number_type?: 'iban' | 'hk_number' | 'clabe' | 'wallet_address' | 'pan' | 'other';
    }

    export interface ContactDetail {
      contact_identifier?: string;

      contact_identifier_type?: 'email' | 'phone_number' | 'website';
    }

    /**
     * Specifies a ledger account object that will be created with the external
     * account. The resulting ledger account is linked to the external account for
     * auto-ledgering Payment objects. See
     * https://docs.moderntreasury.com/docs/linking-to-other-modern-treasury-objects
     * for more details.
     */
    export interface LedgerAccount {
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
      normal_balance: Shared.TransactionDirection;

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
      ledgerable_type?: 'external_account' | 'internal_account' | 'virtual_account';

      /**
       * Additional data represented as key-value pairs. Both the key and value must be
       * strings.
       */
      metadata?: Record<string, string>;
    }

    /**
     * Required if receiving wire payments.
     */
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

    export interface RoutingDetail {
      routing_number: string;

      routing_number_type:
        | 'aba'
        | 'au_bsb'
        | 'br_codigo'
        | 'ca_cpa'
        | 'chips'
        | 'cnaps'
        | 'dk_interbank_clearing_code'
        | 'gb_sort_code'
        | 'hk_interbank_clearing_code'
        | 'hu_interbank_clearing_code'
        | 'id_sknbi_code'
        | 'in_ifsc'
        | 'jp_zengin_code'
        | 'my_branch_code'
        | 'mx_bank_identifier'
        | 'nz_national_clearing_code'
        | 'pl_national_clearing_code'
        | 'se_bankgiro_clearing_code'
        | 'swift';

      payment_type?:
        | 'ach'
        | 'au_becs'
        | 'bacs'
        | 'book'
        | 'card'
        | 'chats'
        | 'check'
        | 'cross_border'
        | 'dk_nets'
        | 'eft'
        | 'hu_ics'
        | 'interac'
        | 'masav'
        | 'mx_ccen'
        | 'neft'
        | 'nics'
        | 'nz_becs'
        | 'pl_elixir'
        | 'provxchange'
        | 'ro_sent'
        | 'rtp'
        | 'sg_giro'
        | 'se_bankgirot'
        | 'sen'
        | 'sepa'
        | 'sic'
        | 'signet'
        | 'sknbi'
        | 'wire'
        | 'zengin';
    }
  }

  export interface LegalEntity {
    /**
     * The type of legal entity.
     */
    legal_entity_type: 'business' | 'individual';

    /**
     * A list of addresses for the entity.
     */
    addresses?: Array<LegalEntity.Address>;

    /**
     * The business's legal business name.
     */
    business_name?: string | null;

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
    identifications?: Array<LegalEntity.Identification>;

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
    metadata?: Record<string, string>;

    phone_numbers?: Array<LegalEntity.PhoneNumber>;

    /**
     * The entity's primary website URL.
     */
    website?: string | null;
  }

  export namespace LegalEntity {
    export interface Address {
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

    export interface Identification {
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
        | 'cl_nut'
        | 'co_cedulas'
        | 'co_nit'
        | 'hn_id'
        | 'hn_rtn'
        | 'passport'
        | 'us_ein'
        | 'us_itin'
        | 'us_ssn';

      /**
       * The ISO 3166-1 alpha-2 country code of the country that issued the
       * identification
       */
      issuing_country?: string | null;
    }

    /**
     * A list of phone numbers in E.164 format.
     */
    export interface PhoneNumber {
      phone_number?: string;
    }
  }
}

export interface CounterpartyUpdateParams {
  /**
   * A new email for the counterparty.
   */
  email?: string;

  /**
   * The id of the legal entity.
   */
  legal_entity_id?: string | null;

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
   * Filters for counterparties with the given legal entity ID.
   */
  legal_entity_id?: string;

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
  direction: Shared.TransactionDirection;

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
    | 'ibanNumber'
    | 'clabeNumber'
    | 'walletAddress'
    | 'panNumber'
    | 'routingNumber'
    | 'abaWireRoutingNumber'
    | 'swiftCode'
    | 'auBsb'
    | 'caCpa'
    | 'cnaps'
    | 'gbSortCode'
    | 'inIfsc'
    | 'myBranchCode'
    | 'brCodigo'
    | 'routingNumberType'
    | 'address'
    | 'jp_zengin_code'
    | 'se_bankgiro_clearing_code'
    | 'nz_national_clearing_code'
    | 'hk_interbank_clearing_code'
    | 'hu_interbank_clearing_code'
    | 'dk_interbank_clearing_code'
    | 'id_sknbi_code'
  >;

  /**
   * By default, Modern Treasury will send an email to your counterparty that
   * includes a link to the form they must fill out. However, if you would like to
   * send the counterparty the link, you can set this parameter to `false`. The JSON
   * body will include the link to the secure Modern Treasury form.
   */
  send_email?: boolean;
}

export namespace Counterparties {
  export import Counterparty = CounterpartiesAPI.Counterparty;
  export import CounterpartyCollectAccountResponse = CounterpartiesAPI.CounterpartyCollectAccountResponse;
  export import CounterpartiesPage = CounterpartiesAPI.CounterpartiesPage;
  export import CounterpartyCreateParams = CounterpartiesAPI.CounterpartyCreateParams;
  export import CounterpartyUpdateParams = CounterpartiesAPI.CounterpartyUpdateParams;
  export import CounterpartyListParams = CounterpartiesAPI.CounterpartyListParams;
  export import CounterpartyCollectAccountParams = CounterpartiesAPI.CounterpartyCollectAccountParams;
}
