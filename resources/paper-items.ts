// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as Shared from '~/resources/shared';
import * as API from './';
import { Page, PageParams } from '~/pagination';

export class PaperItems extends APIResource {
  /**
   * Get details on a single paper item.
   */
  retrieve(id: string, options?: Core.RequestOptions): Promise<Core.APIResponse<PaperItem>> {
    return this.get(`/api/paper_items/${id}`, options);
  }

  /**
   * Get a list of all paper items.
   */
  list(query?: PaperItemListParams, options?: Core.RequestOptions): Core.PagePromise<PaperItemsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<PaperItemsPage>;
  list(
    query: PaperItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PaperItemsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/api/paper_items', PaperItemsPage, { query, ...options });
  }
}

export class PaperItemsPage extends Page<PaperItem> {}

export interface PaperItem {
  /**
   * The account number on the paper item.
   */
  account_number: string | null;

  /**
   * The last 4 digits of the account_number.
   */
  account_number_safe: string | null;

  /**
   * The amount of the paper item.
   */
  amount: number;

  /**
   * The check number on the paper item.
   */
  check_number: string | null;

  created_at: string;

  /**
   * The currency of the paper item.
   */
  currency: Shared.Currency | null;

  /**
   * The date the paper item was deposited into your organization's bank account.
   */
  deposit_date: string;

  id: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  /**
   * The identifier for the lockbox assigned by the bank.
   */
  lockbox_number: string;

  /**
   * The memo field on the paper item.
   */
  memo_field: string | null;

  object: string;

  /**
   * The name of the remitter on the paper item.
   */
  remitter_name: string | null;

  /**
   * The routing number on the paper item.
   */
  routing_number: string | null;

  /**
   * The current status of the paper item. One of `pending`, `completed`, or
   * `returned`.
   */
  status: 'completed' | 'pending' | 'returned';

  /**
   * The ID of the reconciled Transaction or `null`.
   */
  transaction_id: string | null;

  /**
   * The ID of the reconciled Transaction Line Item or `null`.
   */
  transaction_line_item_id: string | null;

  updated_at: string;
}

export interface PaperItemListParams extends PageParams {
  /**
   * Specify an inclusive end date (YYYY-MM-DD) when filtering by deposit_date
   */
  deposit_date_end?: string;

  /**
   * Specify an inclusive start date (YYYY-MM-DD) when filtering by deposit_date
   */
  deposit_date_start?: string;

  /**
   * Specify `lockbox_number` if you wish to see paper items that are associated with
   * a specific lockbox number.
   */
  lockbox_number?: string;
}

export namespace PaperItems {
  export import PaperItem = API.PaperItem;
  export import PaperItemsPage = API.PaperItemsPage;
  export import PaperItemListParams = API.PaperItemListParams;
}
