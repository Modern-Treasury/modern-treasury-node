// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountDetailsAPI from './account-details';
import * as RoutingDetailsAPI from './routing-details';
import * as Shared from './shared';
import * as PaymentOrdersAPI from './payment-orders/payment-orders';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ExternalAccounts extends APIResource {
  /**
   * create external account
   *
   * @example
   * ```ts
   * const externalAccount =
   *   await client.externalAccounts.create({
   *     counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   });
   * ```
   */
  create(params: ExternalAccountCreateParams, options?: RequestOptions): APIPromise<ExternalAccount> {
    const { query_external_id, ...body } = params;
    return this._client.post('/api/external_accounts', {
      query: { external_id: query_external_id },
      body,
      ...options,
    });
  }

  /**
   * show external account
   *
   * @example
   * ```ts
   * const externalAccount =
   *   await client.externalAccounts.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ExternalAccount> {
    return this._client.get(path`/api/external_accounts/${id}`, options);
  }

  /**
   * update external account
   *
   * @example
   * ```ts
   * const externalAccount =
   *   await client.externalAccounts.update('id');
   * ```
   */
  update(
    id: string,
    body: ExternalAccountUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExternalAccount> {
    return this._client.patch(path`/api/external_accounts/${id}`, { body, ...options });
  }

  /**
   * list external accounts
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const externalAccount of client.externalAccounts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ExternalAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ExternalAccountsPage, ExternalAccount> {
    return this._client.getAPIList('/api/external_accounts', Page<ExternalAccount>, { query, ...options });
  }

  /**
   * delete external account
   *
   * @example
   * ```ts
   * await client.externalAccounts.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/external_accounts/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * complete verification of external account
   *
   * @example
   * ```ts
   * const externalAccount =
   *   await client.externalAccounts.completeVerification('id');
   * ```
   */
  completeVerification(
    id: string,
    body: ExternalAccountCompleteVerificationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExternalAccount> {
    return this._client.post(path`/api/external_accounts/${id}/complete_verification`, { body, ...options });
  }

  /**
   * verify external account
   *
   * @example
   * ```ts
   * const response = await client.externalAccounts.verify(
   *   'id',
   *   {
   *     originating_account_id:
   *       '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     payment_type: 'ach',
   *   },
   * );
   * ```
   */
  verify(
    id: string,
    body: ExternalAccountVerifyParams,
    options?: RequestOptions,
  ): APIPromise<ExternalAccountVerifyResponse> {
    return this._client.post(path`/api/external_accounts/${id}/verify`, { body, ...options });
  }
}

export type ExternalAccountsPage = Page<ExternalAccount>;

export interface ExternalAccount {
  id: string;

  account_details: Array<AccountDetailsAPI.AccountDetail>;

  /**
   * Can be `checking`, `savings` or `other`.
   */
  account_type: ExternalAccountType;

  contact_details: Array<Shared.ContactDetail>;

  counterparty_id: string | null;

  created_at: string;

  discarded_at: string | null;

  /**
   * An optional user-defined 180 character unique identifier.
   */
  external_id: string | null;

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
  metadata: { [key: string]: string };

  /**
   * A nickname for the external account. This is only for internal usage and won't
   * affect any payments
   */
  name: string | null;

  object: string;

  /**
   * The address associated with the owner or `null`.
   */
  party_address: Shared.Address | null;

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

  verification_source: 'ach_prenote' | 'microdeposits' | 'plaid' | null;

  verification_status: 'pending_verification' | 'unverified' | 'verified';
}

/**
 * Can be `checking`, `savings` or `other`.
 */
export type ExternalAccountType =
  | 'base_wallet'
  | 'cash'
  | 'checking'
  | 'crypto_wallet'
  | 'ethereum_wallet'
  | 'general_ledger'
  | 'loan'
  | 'non_resident'
  | 'other'
  | 'overdraft'
  | 'polygon_wallet'
  | 'savings'
  | 'solana_wallet';

export type ExternalAccountVerifyResponse =
  | ExternalAccount
  | ExternalAccountVerifyResponse.ExternalAccountVerificationAttempt;

export namespace ExternalAccountVerifyResponse {
  export interface ExternalAccountVerificationAttempt {
    id: string;

    created_at: string;

    /**
     * The ID of the external account.
     */
    external_account_id: string;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    object: string;

    /**
     * The ID of the internal account where the micro-deposits originate from.
     */
    originating_account_id: string;

    /**
     * The type of payment that can be made to this account. Can be `ach`, `eft`, or
     * `rtp`.
     */
    payment_type:
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

    /**
     * The priority of the payment. Can be `normal` or `high`.
     */
    priority: 'high' | 'normal' | null;

    /**
     * The status of the verification attempt. Can be `pending_verification`,
     * `verified`, `failed`, or `cancelled`.
     */
    status: 'cancelled' | 'failed' | 'pending_verification' | 'verified';

    updated_at: string;
  }
}

export interface ExternalAccountCreateParams {
  /**
   * Body param:
   */
  counterparty_id: string | null;

  /**
   * Query param: An optional user-defined 180 character unique identifier.
   */
  query_external_id?: string;

  /**
   * Body param:
   */
  account_details?: Array<ExternalAccountCreateParams.AccountDetail>;

  /**
   * Body param: Can be `checking`, `savings` or `other`.
   */
  account_type?: ExternalAccountType;

  /**
   * Body param:
   */
  contact_details?: Array<PaymentOrdersAPI.ContactDetailCreateRequest>;

  /**
   * Body param: An optional user-defined 180 character unique identifier.
   */
  body_external_id?: string | null;

  /**
   * Body param: Specifies a ledger account object that will be created with the
   * external account. The resulting ledger account is linked to the external account
   * for auto-ledgering Payment objects. See
   * https://docs.moderntreasury.com/docs/linking-to-other-modern-treasury-objects
   * for more details.
   */
  ledger_account?: Shared.LedgerAccountCreateRequest;

  /**
   * Body param: Additional data represented as key-value pairs. Both the key and
   * value must be strings.
   */
  metadata?: { [key: string]: string };

  /**
   * Body param: A nickname for the external account. This is only for internal usage
   * and won't affect any payments
   */
  name?: string | null;

  /**
   * Body param: Required if receiving wire payments.
   */
  party_address?: Shared.AddressRequest;

  /**
   * Body param:
   */
  party_identifier?: string;

  /**
   * Body param: If this value isn't provided, it will be inherited from the
   * counterparty's name.
   */
  party_name?: string;

  /**
   * Body param: Either `individual` or `business`.
   */
  party_type?: 'business' | 'individual' | null;

  /**
   * Body param: If you've enabled the Modern Treasury + Plaid integration in your
   * Plaid account, you can pass the processor token in this field.
   */
  plaid_processor_token?: string;

  /**
   * Body param:
   */
  routing_details?: Array<ExternalAccountCreateParams.RoutingDetail>;
}

export namespace ExternalAccountCreateParams {
  export interface AccountDetail {
    account_number: string;

    account_number_type?:
      | 'au_number'
      | 'base_address'
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
  metadata?: { [key: string]: string };

  /**
   * A nickname for the external account. This is only for internal usage and won't
   * affect any payments
   */
  name?: string | null;

  party_address?: Shared.AddressRequest;

  /**
   * If this value isn't provided, it will be inherited from the counterparty's name.
   */
  party_name?: string;

  /**
   * Either `individual` or `business`.
   */
  party_type?: 'business' | 'individual' | null;
}

export interface ExternalAccountListParams extends PageParams {
  counterparty_id?: string;

  /**
   * An optional user-defined 180 character unique identifier.
   */
  external_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: { [key: string]: string };

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
   * Can be `ach`, `eft`, or `rtp`.
   */
  payment_type:
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

  /**
   * Defaults to the currency of the originating account.
   */
  currency?: Shared.Currency;

  /**
   * A payment type to fallback to if the original type is not valid for the
   * receiving account. Currently, this only supports falling back from RTP to ACH
   * (payment_type=rtp and fallback_type=ach)
   */
  fallback_type?: 'ach';

  /**
   * Either `normal` or `high`. For ACH payments, `high` represents a same-day ACH
   * transfer. This will apply to both `payment_type` and `fallback_type`.
   */
  priority?: 'high' | 'normal';
}

export declare namespace ExternalAccounts {
  export {
    type ExternalAccount as ExternalAccount,
    type ExternalAccountType as ExternalAccountType,
    type ExternalAccountVerifyResponse as ExternalAccountVerifyResponse,
    type ExternalAccountsPage as ExternalAccountsPage,
    type ExternalAccountCreateParams as ExternalAccountCreateParams,
    type ExternalAccountUpdateParams as ExternalAccountUpdateParams,
    type ExternalAccountListParams as ExternalAccountListParams,
    type ExternalAccountCompleteVerificationParams as ExternalAccountCompleteVerificationParams,
    type ExternalAccountVerifyParams as ExternalAccountVerifyParams,
  };
}
