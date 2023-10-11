// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as ExternalAccountsAPI from 'modern-treasury/resources/external-accounts';
import * as AccountDetailsAPI from 'modern-treasury/resources/account-details';
import * as RoutingDetailsAPI from 'modern-treasury/resources/routing-details';
import * as Shared from 'modern-treasury/resources/shared';
import { Page, type PageParams } from 'modern-treasury/pagination';

export class ExternalAccounts extends APIResource {
  /**
   * create external account
   */
  create(
    params: ExternalAccountCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExternalAccount> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this.post('/api/external_accounts', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * show external account
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ExternalAccount> {
    return this.get(`/api/external_accounts/${id}`, options);
  }

  /**
   * update external account
   */
  update(
    id: string,
    body?: ExternalAccountUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExternalAccount>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<ExternalAccount>;
  update(
    id: string,
    body: ExternalAccountUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExternalAccount> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this.patch(`/api/external_accounts/${id}`, { body, ...options });
  }

  /**
   * list external accounts
   */
  list(
    query?: ExternalAccountListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExternalAccountsPage, ExternalAccount>;
  list(options?: Core.RequestOptions): Core.PagePromise<ExternalAccountsPage, ExternalAccount>;
  list(
    query: ExternalAccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExternalAccountsPage, ExternalAccount> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/api/external_accounts', ExternalAccountsPage, { query, ...options });
  }

  /**
   * delete external account
   */
  del(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this.delete(`/api/external_accounts/${id}`, {
      ...options,
      headers: { Accept: '', ...options?.headers },
    });
  }

  /**
   * complete verification of external account
   */
  completeVerification(
    id: string,
    params?: ExternalAccountCompleteVerificationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExternalAccount>;
  completeVerification(id: string, options?: Core.RequestOptions): Core.APIPromise<ExternalAccount>;
  completeVerification(
    id: string,
    params: ExternalAccountCompleteVerificationParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExternalAccount> {
    if (isRequestOptions(params)) {
      return this.completeVerification(id, {}, params);
    }
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this.post(`/api/external_accounts/${id}/complete_verification`, {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * verify external account
   */
  verify(
    id: string,
    params: ExternalAccountVerifyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExternalAccount> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this.post(`/api/external_accounts/${id}/verify`, {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }
}

export class ExternalAccountsPage extends Page<ExternalAccount> {}

export interface ExternalAccount {
  id: string;

  account_details: Array<AccountDetailsAPI.AccountDetail>;

  /**
   * Can be `checking`, `savings` or `other`.
   */
  account_type: ExternalAccountType;

  contact_details: Array<ExternalAccount.ContactDetail>;

  counterparty_id: string | null;

  created_at: string;

  discarded_at: string | null;

  /**
   * If the external account links to a ledger account in Modern Treasury, the id of
   * the ledger account will be populated here.
   */
  ledger_account_id: string | null;

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
   * A nickname for the external account. This is only for internal usage and won't
   * affect any payments
   */
  name: string | null;

  object: string;

  /**
   * The address associated with the owner or `null`.
   */
  party_address: ExternalAccount.PartyAddress | null;

  /**
   * The legal name of the entity which owns the account.
   */
  party_name: string;

  /**
   * Either `individual` or `business`.
   */
  party_type: 'business' | 'individual' | null;

  routing_details: Array<RoutingDetailsAPI.RoutingDetail>;

  updated_at: string;

  verification_status: 'pending_verification' | 'unverified' | 'verified';
}

export namespace ExternalAccount {
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

/**
 * Can be `checking`, `savings` or `other`.
 */
export type ExternalAccountType =
  | 'cash'
  | 'checking'
  | 'loan'
  | 'non_resident'
  | 'other'
  | 'overdraft'
  | 'savings';

export interface ExternalAccountCreateParams {
  counterparty_id: string | null;

  account_details?: Array<ExternalAccountCreateParams.AccountDetail>;

  /**
   * Can be `checking`, `savings` or `other`.
   */
  account_type?: ExternalAccountType;

  contact_details?: Array<ExternalAccountCreateParams.ContactDetail>;

  /**
   * Specifies a ledger account object that will be created with the external
   * account. The resulting ledger account is linked to the external account for
   * auto-ledgering Payment objects. See
   * https://docs.moderntreasury.com/docs/linking-to-other-modern-treasury-objects
   * for more details.
   */
  ledger_account?: ExternalAccountCreateParams.LedgerAccount;

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
  party_address?: ExternalAccountCreateParams.PartyAddress;

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

  routing_details?: Array<ExternalAccountCreateParams.RoutingDetail>;
}

export namespace ExternalAccountCreateParams {
  export interface AccountDetail {
    account_number: string;

    account_number_type?: 'iban' | 'clabe' | 'wallet_address' | 'pan' | 'other';
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
    normal_balance: 'credit' | 'debit';

    /**
     * The currency exponent of the ledger account.
     */
    currency_exponent?: number | null;

    /**
     * The description of the ledger account.
     */
    description?: string | null;

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
    ledgerable_type?: 'external_account' | 'internal_account';

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
      | 'se_bankgiro_clearing_code'
      | 'br_codigo'
      | 'ca_cpa'
      | 'chips'
      | 'cnaps'
      | 'gb_sort_code'
      | 'in_ifsc'
      | 'my_branch_code'
      | 'swift'
      | 'jp_zengin_code';

    payment_type?:
      | 'ach'
      | 'au_becs'
      | 'se_bankgirot'
      | 'bacs'
      | 'book'
      | 'card'
      | 'check'
      | 'eft'
      | 'cross_border'
      | 'interac'
      | 'masav'
      | 'neft'
      | 'nics'
      | 'provxchange'
      | 'rtp'
      | 'sen'
      | 'sic'
      | 'sepa'
      | 'signet'
      | 'wire'
      | 'zengin';
  }
}

export interface ExternalAccountUpdateParams {
  /**
   * Can be `checking`, `savings` or `other`.
   */
  account_type?: ExternalAccountType;

  counterparty_id?: string | null;

  /**
   * Additional data in the form of key-value pairs. Pairs can be removed by passing
   * an empty string or `null` as the value.
   */
  metadata?: Record<string, string>;

  /**
   * A nickname for the external account. This is only for internal usage and won't
   * affect any payments
   */
  name?: string | null;

  party_address?: ExternalAccountUpdateParams.PartyAddress;

  /**
   * If this value isn't provided, it will be inherited from the counterparty's name.
   */
  party_name?: string;

  /**
   * Either `individual` or `business`.
   */
  party_type?: 'business' | 'individual' | null;
}

export namespace ExternalAccountUpdateParams {
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
}

export interface ExternalAccountListParams extends PageParams {
  counterparty_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;

  /**
   * Searches the ExternalAccount's party_name AND the Counterparty's party_name
   */
  party_name?: string;
}

export interface ExternalAccountCompleteVerificationParams {
  amounts?: Array<number>;
}

export interface ExternalAccountVerifyParams {
  /**
   * The ID of the internal account where the micro-deposits originate from. Both
   * credit and debit capabilities must be enabled.
   */
  originating_account_id: string;

  /**
   * Both ach and eft are supported payment types.
   */
  payment_type:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'card'
    | 'check'
    | 'cross_border'
    | 'eft'
    | 'interac'
    | 'masav'
    | 'neft'
    | 'nics'
    | 'provxchange'
    | 'rtp'
    | 'se_bankgirot'
    | 'sen'
    | 'sepa'
    | 'sic'
    | 'signet'
    | 'wire'
    | 'zengin';

  /**
   * Defaults to the currency of the originating account.
   */
  currency?: Shared.Currency | null;
}

export namespace ExternalAccounts {
  export type ExternalAccount = ExternalAccountsAPI.ExternalAccount;
  export type ExternalAccountType = ExternalAccountsAPI.ExternalAccountType;
  export import ExternalAccountsPage = ExternalAccountsAPI.ExternalAccountsPage;
  export type ExternalAccountCreateParams = ExternalAccountsAPI.ExternalAccountCreateParams;
  export type ExternalAccountUpdateParams = ExternalAccountsAPI.ExternalAccountUpdateParams;
  export type ExternalAccountListParams = ExternalAccountsAPI.ExternalAccountListParams;
  export type ExternalAccountCompleteVerificationParams =
    ExternalAccountsAPI.ExternalAccountCompleteVerificationParams;
  export type ExternalAccountVerifyParams = ExternalAccountsAPI.ExternalAccountVerifyParams;
}
