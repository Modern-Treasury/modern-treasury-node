// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Page, type PageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class VirtualAccountSettings extends APIResource {
  /**
   * List virtual account settings.
   */
  list(
    query: VirtualAccountSettingListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VirtualAccountSettingsPage, VirtualAccountSetting> {
    return this._client.getAPIList('/api/virtual_account_settings', Page<VirtualAccountSetting>, {
      query,
      ...options,
    });
  }

  /**
   * Create a virtual account setting.
   */
  create(
    body: VirtualAccountSettingCreateParams,
    options?: RequestOptions,
  ): APIPromise<VirtualAccountSetting> {
    return this._client.post('/api/virtual_account_settings', { body, ...options });
  }
}

export type VirtualAccountSettingsPage = Page<VirtualAccountSetting>;

export interface VirtualAccountSetting {
  id: string;

  created_at: string;

  /**
   * A user-defined identifier for the virtual account setting.
   */
  external_id: string | null;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  updated_at: string;
}

export interface VirtualAccountSettingListParams extends PageParams {
  /**
   * A user-defined identifier for the virtual account setting.
   */
  external_id?: string;
}

export interface VirtualAccountSettingCreateParams {
  /**
   * The method used to allocate virtual account numbers.
   */
  allocation_type: string;

  /**
   * The ID of the internal account for the virtual account setting.
   */
  internal_account_id: string;

  /**
   * The prefix, suffix, or bank-assigned identifier for the virtual account numbers.
   */
  allocation_identifier?: string | null;

  /**
   * The total length of generated virtual account numbers.
   */
  allocation_length?: number | null;

  /**
   * The inclusive end of the virtual account number range.
   */
  allocation_range_end?: string | null;

  /**
   * The inclusive start of the virtual account number range.
   */
  allocation_range_start?: string | null;

  /**
   * A user-defined identifier for the virtual account setting.
   */
  external_id?: string | null;

  /**
   * The length of a generated virtual account setting prefix.
   */
  generated_allocation_identifier_length?: number | null;
}

export declare namespace VirtualAccountSettings {
  export {
    type VirtualAccountSetting as VirtualAccountSetting,
    type VirtualAccountSettingsPage as VirtualAccountSettingsPage,
    type VirtualAccountSettingListParams as VirtualAccountSettingListParams,
    type VirtualAccountSettingCreateParams as VirtualAccountSettingCreateParams,
  };
}
