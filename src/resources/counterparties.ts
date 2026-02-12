// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountDetailsAPI from './account-details';
import * as ExternalAccountsAPI from './external-accounts';
import * as RoutingDetailsAPI from './routing-details';
import * as Shared from './shared';
import * as PaymentOrdersAPI from './payment-orders/payment-orders';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Counterparties extends APIResource {
  /**
   * Create a new counterparty.
   *
   * @example
   * ```ts
   * const counterparty = await client.counterparties.create({
   *   name: 'name',
   * });
   * ```
   */
  create(body: CounterpartyCreateParams, options?: RequestOptions): APIPromise<Counterparty> {
    return this._client.post('/api/counterparties', { body, ...options });
  }

  /**
   * Get details on a single counterparty.
   *
   * @example
   * ```ts
   * const counterparty = await client.counterparties.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Counterparty> {
    return this._client.get(path`/api/counterparties/${id}`, options);
  }

  /**
   * Updates a given counterparty with new information.
   *
   * @example
   * ```ts
   * const counterparty = await client.counterparties.update(
   *   'id',
   * );
   * ```
   */
  update(
    id: string,
    body: CounterpartyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Counterparty> {
    return this._client.patch(path`/api/counterparties/${id}`, { body, ...options });
  }

  /**
   * Get a paginated list of all counterparties.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const counterparty of client.counterparties.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CounterpartyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CounterpartiesPage, Counterparty> {
    return this._client.getAPIList('/api/counterparties', Page<Counterparty>, { query, ...options });
  }

  /**
   * Deletes a given counterparty.
   *
   * @example
   * ```ts
   * await client.counterparties.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/counterparties/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Send an email requesting account details.
   *
   * @example
   * ```ts
   * const counterpartyCollectAccountResponse =
   *   await client.counterparties.collectAccount('id', {
   *     direction: 'credit',
   *   });
   * ```
   */
  collectAccount(
    id: string,
    body: CounterpartyCollectAccountParams,
    options?: RequestOptions,
  ): APIPromise<CounterpartyCollectAccountResponse> {
    return this._client.post(path`/api/counterparties/${id}/collect_account`, { body, ...options });
  }
}

export type CounterpartiesPage = Page<Counterparty>;

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
   * An optional user-defined 180 character unique identifier.
   */
  external_id: string | null;

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
  metadata: { [key: string]: string };

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
   * @deprecated The verification status of the counterparty.
   */
  verification_status: string;
}

export namespace Counterparty {
  export interface Account {
    id?: string;

    account_details?: Array<AccountDetailsAPI.AccountDetail>;

    /**
     * Can be `checking`, `savings` or `other`.
     */
    account_type?: ExternalAccountsAPI.ExternalAccountType;

    contact_details?: Array<Shared.ContactDetail>;

    created_at?: string;

    discarded_at?: string | null;

    /**
     * An optional user-defined 180 character unique identifier.
     */
    external_id?: string | null;

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
    metadata?: { [key: string]: string };

    /**
     * A nickname for the external account. This is only for internal usage and won't
     * affect any payments
     */
    name?: string | null;

    object?: string;

    /**
     * The address associated with the owner or `null`.
     */
    party_address?: Shared.Address | null;

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

    verification_source?: 'ach_prenote' | 'microdeposits' | 'plaid' | null;

    verification_status?: 'pending_verification' | 'unverified' | 'verified';
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

  /**
   * @deprecated
   */
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
   * An optional user-defined 180 character unique identifier.
   */
  external_id?: string | null;

  /**
   * @deprecated An optional type to auto-sync the counterparty to your ledger.
   * Either `customer` or `vendor`.
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
  metadata?: { [key: string]: string };

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
   * @deprecated The verification status of the counterparty.
   */
  verification_status?: string;
}

export namespace CounterpartyCreateParams {
  /**
   * @deprecated
   */
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

    contact_details?: Array<PaymentOrdersAPI.ContactDetailCreateRequest>;

    /**
     * An optional user-defined 180 character unique identifier.
     */
    external_id?: string | null;

    /**
     * Specifies a ledger account object that will be created with the external
     * account. The resulting ledger account is linked to the external account for
     * auto-ledgering Payment objects. See
     * https://docs.moderntreasury.com/docs/linking-to-other-modern-treasury-objects
     * for more details.
     */
    ledger_account?: Shared.LedgerAccountCreateRequest;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata?: { [key: string]: string };

    /**
     * A nickname for the external account. This is only for internal usage and won't
     * affect any payments
     */
    name?: string | null;

    /**
     * Required if receiving wire payments.
     */
    party_address?: Shared.AddressRequest;

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

      account_number_type?:
        | 'au_number'
        | 'base_address'
        | 'card_token'
        | 'clabe'
        | 'ethereum_address'
        | 'hk_number'
        | 'iban'
        | 'id_number'
        | 'nz_number'
        | 'other'
        | 'pan'
        | 'polygon_address'
        | 'sg_number'
        | 'solana_address'
        | 'wallet_address';
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
        | 'il_bank_code'
        | 'in_ifsc'
        | 'jp_zengin_code'
        | 'my_branch_code'
        | 'mx_bank_identifier'
        | 'nz_national_clearing_code'
        | 'pl_national_clearing_code'
        | 'se_bankgiro_clearing_code'
        | 'sg_interbank_clearing_code'
        | 'swift'
        | 'za_national_clearing_code';

      payment_type?:
        | 'ach'
        | 'au_becs'
        | 'bacs'
        | 'base'
        | 'book'
        | 'card'
        | 'chats'
        | 'check'
        | 'cross_border'
        | 'dk_nets'
        | 'eft'
        | 'ethereum'
        | 'gb_fps'
        | 'hu_ics'
        | 'interac'
        | 'masav'
        | 'mx_ccen'
        | 'neft'
        | 'nics'
        | 'nz_becs'
        | 'pl_elixir'
        | 'polygon'
        | 'provxchange'
        | 'ro_sent'
        | 'rtp'
        | 'se_bankgirot'
        | 'sen'
        | 'sepa'
        | 'sg_giro'
        | 'sic'
        | 'signet'
        | 'sknbi'
        | 'solana'
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
    addresses?: Array<Shared.LegalEntityAddressCreateRequest>;

    bank_settings?: LegalEntity.BankSettings | null;

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
     * The connection ID for the connection the legal entity is associated with.
     * Defaults to the id of the connection designated with an is_default value of true
     * or the id of an existing operational connection if only one is available. Pass
     * in a value of null to prevent the connection from being associated with the
     * legal entity.
     */
    connection_id?: string | null;

    /**
     * The country code where the business is incorporated in the ISO 3166-1 alpha-2 or
     * alpha-3 formats.
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
     * A list of countries where the business operates (ISO 3166-1 alpha-2 or alpha-3
     * codes).
     */
    operating_jurisdictions?: Array<string>;

    phone_numbers?: Array<LegalEntity.PhoneNumber>;

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
    regulators?: Array<LegalEntity.Regulator> | null;

    /**
     * The risk rating of the legal entity. One of low, medium, high.
     */
    risk_rating?: 'low' | 'medium' | 'high' | null;

    /**
     * The activation status of the legal entity. One of pending, active, suspended, or
     * closed.
     */
    status?: 'active' | 'closed' | 'pending' | 'suspended' | null;

    /**
     * An individual's suffix.
     */
    suffix?: string | null;

    /**
     * Information describing a third-party verification run by an external vendor.
     */
    third_party_verification?: LegalEntity.ThirdPartyVerification | null;

    /**
     * Stock ticker symbol for publicly traded companies.
     */
    ticker_symbol?: string | null;

    wealth_and_employment_details?: LegalEntity.WealthAndEmploymentDetails | null;

    /**
     * The entity's primary website URL.
     */
    website?: string | null;
  }

  export namespace LegalEntity {
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
     * Information describing a third-party verification run by an external vendor.
     */
    export interface ThirdPartyVerification {
      /**
       * The vendor that performed the verification, e.g. `persona`.
       */
      vendor: 'persona';

      /**
       * The identification of the third party verification in `vendor`'s system.
       */
      vendor_verification_id: string;
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
  metadata?: { [key: string]: string };

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
   * An optional user-defined 180 character unique identifier.
   */
  external_id?: string;

  /**
   * Filters for counterparties with the given legal entity ID.
   */
  legal_entity_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: { [key: string]: string };

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
    | 'jpZenginCode'
    | 'seBankgiroClearingCode'
    | 'nzNationalClearingCode'
    | 'hkInterbankClearingCode'
    | 'huInterbankClearingCode'
    | 'dkInterbankClearingCode'
    | 'idSknbiCode'
    | 'zaNationalClearingCode'
  >;

  /**
   * By default, Modern Treasury will send an email to your counterparty that
   * includes a link to the form they must fill out. However, if you would like to
   * send the counterparty the link, you can set this parameter to `false`. The JSON
   * body will include the link to the secure Modern Treasury form.
   */
  send_email?: boolean;
}

export declare namespace Counterparties {
  export {
    type Counterparty as Counterparty,
    type CounterpartyCollectAccountResponse as CounterpartyCollectAccountResponse,
    type CounterpartiesPage as CounterpartiesPage,
    type CounterpartyCreateParams as CounterpartyCreateParams,
    type CounterpartyUpdateParams as CounterpartyUpdateParams,
    type CounterpartyListParams as CounterpartyListParams,
    type CounterpartyCollectAccountParams as CounterpartyCollectAccountParams,
  };
}
