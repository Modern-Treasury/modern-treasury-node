// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import * as qs from './internal/qs';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Pagination from './core/pagination';
import { AbstractPage, type PageParams, PageResponse } from './core/pagination';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import * as TopLevelAPI from './resources/top-level';
import { PingResponse } from './resources/top-level';
import { APIPromise } from './core/api-promise';
import {
  AccountCollectionFlow,
  AccountCollectionFlowCreateParams,
  AccountCollectionFlowListParams,
  AccountCollectionFlowUpdateParams,
  AccountCollectionFlows,
  AccountCollectionFlowsPage,
} from './resources/account-collection-flows';
import {
  AccountDetail,
  AccountDetailCreateParams,
  AccountDetailDeleteParams,
  AccountDetailListParams,
  AccountDetailRetrieveParams,
  AccountDetails,
  AccountDetailsPage,
} from './resources/account-details';
import {
  BulkRequest,
  BulkRequestCreateParams,
  BulkRequestListParams,
  BulkRequests,
  BulkRequestsPage,
} from './resources/bulk-requests';
import { BulkResult, BulkResultListParams, BulkResults, BulkResultsPage } from './resources/bulk-results';
import {
  ConnectionLegalEntities,
  ConnectionLegalEntitiesPage,
  ConnectionLegalEntity,
  ConnectionLegalEntityCreateParams,
  ConnectionLegalEntityListParams,
  ConnectionLegalEntityUpdateParams,
} from './resources/connection-legal-entities';
import { Connection, ConnectionListParams, Connections, ConnectionsPage } from './resources/connections';
import {
  Counterparties,
  CounterpartiesPage,
  Counterparty,
  CounterpartyCollectAccountParams,
  CounterpartyCollectAccountResponse,
  CounterpartyCreateParams,
  CounterpartyListParams,
  CounterpartyUpdateParams,
} from './resources/counterparties';
import {
  Document,
  DocumentCreateParams,
  DocumentListParams,
  Documents,
  DocumentsPage,
} from './resources/documents';
import { Event, EventListParams, Events, EventsPage } from './resources/events';
import {
  ExpectedPayment,
  ExpectedPaymentCreateParams,
  ExpectedPaymentListParams,
  ExpectedPaymentType,
  ExpectedPaymentUpdateParams,
  ExpectedPayments,
  ExpectedPaymentsPage,
  ReconciliationRule,
} from './resources/expected-payments';
import {
  ExternalAccount,
  ExternalAccountCompleteVerificationParams,
  ExternalAccountCreateParams,
  ExternalAccountListParams,
  ExternalAccountType,
  ExternalAccountUpdateParams,
  ExternalAccountVerifyParams,
  ExternalAccountVerifyResponse,
  ExternalAccounts,
  ExternalAccountsPage,
} from './resources/external-accounts';
import {
  ForeignExchangeQuote,
  ForeignExchangeQuoteCreateParams,
  ForeignExchangeQuoteListParams,
  ForeignExchangeQuotes,
  ForeignExchangeQuotesPage,
} from './resources/foreign-exchange-quotes';
import {
  HoldCreateParams,
  HoldCreateResponse,
  HoldListParams,
  HoldListResponse,
  HoldListResponsesPage,
  HoldRetrieveResponse,
  HoldUpdateParams,
  HoldUpdateResponse,
  Holds,
} from './resources/holds';
import {
  IncomingPaymentDetail,
  IncomingPaymentDetailCreateAsyncParams,
  IncomingPaymentDetailListParams,
  IncomingPaymentDetailUpdateParams,
  IncomingPaymentDetails,
  IncomingPaymentDetailsPage,
} from './resources/incoming-payment-details';
import { JournalEntries, JournalEntryListParams } from './resources/journal-entries';
import { JournalReportUpdateParams, JournalReports } from './resources/journal-reports';
import {
  LedgerAccountBalanceMonitor,
  LedgerAccountBalanceMonitorCreateParams,
  LedgerAccountBalanceMonitorListParams,
  LedgerAccountBalanceMonitorUpdateParams,
  LedgerAccountBalanceMonitors,
  LedgerAccountBalanceMonitorsPage,
} from './resources/ledger-account-balance-monitors';
import {
  LedgerAccountCategories,
  LedgerAccountCategoriesPage,
  LedgerAccountCategory,
  LedgerAccountCategoryAddLedgerAccountParams,
  LedgerAccountCategoryAddNestedCategoryParams,
  LedgerAccountCategoryCreateParams,
  LedgerAccountCategoryListParams,
  LedgerAccountCategoryRemoveLedgerAccountParams,
  LedgerAccountCategoryRemoveNestedCategoryParams,
  LedgerAccountCategoryRetrieveParams,
  LedgerAccountCategoryUpdateParams,
} from './resources/ledger-account-categories';
import {
  LedgerAccountStatementCreateParams,
  LedgerAccountStatementCreateResponse,
  LedgerAccountStatementRetrieveResponse,
  LedgerAccountStatements,
} from './resources/ledger-account-statements';
import {
  LedgerAccount,
  LedgerAccountCreateParams,
  LedgerAccountListParams,
  LedgerAccountRetrieveParams,
  LedgerAccountUpdateParams,
  LedgerAccounts,
  LedgerAccountsPage,
} from './resources/ledger-accounts';
import {
  LedgerEntries,
  LedgerEntriesPage,
  LedgerEntry,
  LedgerEntryListParams,
  LedgerEntryRetrieveParams,
  LedgerEntryUpdateParams,
} from './resources/ledger-entries';
import {
  Ledger,
  LedgerCreateParams,
  LedgerListParams,
  LedgerUpdateParams,
  Ledgers,
  LedgersPage,
} from './resources/ledgers';
import {
  LegalEntities,
  LegalEntitiesPage,
  LegalEntity,
  LegalEntityCreateParams,
  LegalEntityListParams,
  LegalEntityUpdateParams,
} from './resources/legal-entities';
import {
  ChildLegalEntity,
  LegalEntityAssociation,
  LegalEntityAssociationCreateParams,
  LegalEntityAssociations,
} from './resources/legal-entity-associations';
import {
  LineItem,
  LineItemListParams,
  LineItemRetrieveParams,
  LineItemUpdateParams,
  LineItems,
  LineItemsPage,
} from './resources/line-items';
import {
  PaymentActionCreateParams,
  PaymentActionCreateResponse,
  PaymentActionListParams,
  PaymentActionListResponse,
  PaymentActionListResponsesPage,
  PaymentActionRetrieveResponse,
  PaymentActionUpdateParams,
  PaymentActionUpdateResponse,
  PaymentActions,
} from './resources/payment-actions';
import {
  PaymentFlow,
  PaymentFlowCreateParams,
  PaymentFlowListParams,
  PaymentFlowUpdateParams,
  PaymentFlows,
  PaymentFlowsPage,
} from './resources/payment-flows';
import {
  PaymentReference,
  PaymentReferenceListParams,
  PaymentReferences,
  PaymentReferencesPage,
} from './resources/payment-references';
import {
  ReturnCreateParams,
  ReturnListParams,
  ReturnObject,
  ReturnObjectsPage,
  Returns,
} from './resources/returns';
import {
  RoutingDetail,
  RoutingDetailCreateParams,
  RoutingDetailDeleteParams,
  RoutingDetailListParams,
  RoutingDetailRetrieveParams,
  RoutingDetails,
  RoutingDetailsPage,
} from './resources/routing-details';
import {
  RoutingNumberLookupRequest,
  ValidationValidateRoutingNumberParams,
  Validations,
} from './resources/validations';
import {
  VirtualAccount,
  VirtualAccountCreateParams,
  VirtualAccountListParams,
  VirtualAccountUpdateParams,
  VirtualAccounts,
  VirtualAccountsPage,
} from './resources/virtual-accounts';
import {
  InternalAccount,
  InternalAccountCreateParams,
  InternalAccountListParams,
  InternalAccountUpdateAccountCapabilityParams,
  InternalAccountUpdateAccountCapabilityResponse,
  InternalAccountUpdateParams,
  InternalAccounts,
  InternalAccountsPage,
} from './resources/internal-accounts/internal-accounts';
import {
  Invoice,
  InvoiceAddPaymentOrderParams,
  InvoiceCreateParams,
  InvoiceListParams,
  InvoiceUpdateParams,
  Invoices,
  InvoicesPage,
} from './resources/invoices/invoices';
import {
  LedgerAccountSettlement,
  LedgerAccountSettlementCreateParams,
  LedgerAccountSettlementListParams,
  LedgerAccountSettlementUpdateParams,
  LedgerAccountSettlements,
  LedgerAccountSettlementsPage,
} from './resources/ledger-account-settlements/ledger-account-settlements';
import {
  LedgerTransaction,
  LedgerTransactionCreateParams,
  LedgerTransactionCreatePartialPostParams,
  LedgerTransactionCreateReversalParams,
  LedgerTransactionListParams,
  LedgerTransactionUpdateParams,
  LedgerTransactions,
  LedgerTransactionsPage,
} from './resources/ledger-transactions/ledger-transactions';
import {
  ContactDetailCreateRequest,
  PaymentOrder,
  PaymentOrderCreateAsyncParams,
  PaymentOrderCreateParams,
  PaymentOrderListParams,
  PaymentOrderSubtype,
  PaymentOrderType,
  PaymentOrderUpdateParams,
  PaymentOrders,
  PaymentOrdersPage,
} from './resources/payment-orders/payment-orders';
import {
  Transaction,
  TransactionCreateParams,
  TransactionListParams,
  TransactionUpdateParams,
  Transactions,
  TransactionsPage,
} from './resources/transactions/transactions';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { toBase64 } from './internal/utils/base64';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

export interface ClientOptions {
  /**
   * Defaults to process.env['MODERN_TREASURY_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Defaults to process.env['MODERN_TREASURY_ORGANIZATION_ID'].
   */
  organizationID?: string | undefined;

  /**
   * Defaults to process.env['MODERN_TREASURY_WEBHOOK_KEY'].
   */
  webhookKey?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['MODERN_TREASURY_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['MODERN_TREASURY_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Modern Treasury API.
 */
export class ModernTreasury {
  apiKey: string;
  organizationID: string;
  webhookKey: string | null;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Modern Treasury API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['MODERN_TREASURY_API_KEY'] ?? undefined]
   * @param {string | undefined} [opts.organizationID=process.env['MODERN_TREASURY_ORGANIZATION_ID'] ?? undefined]
   * @param {string | null | undefined} [opts.webhookKey=process.env['MODERN_TREASURY_WEBHOOK_KEY'] ?? null]
   * @param {string} [opts.baseURL=process.env['MODERN_TREASURY_BASE_URL'] ?? https://app.moderntreasury.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('MODERN_TREASURY_BASE_URL'),
    apiKey = readEnv('MODERN_TREASURY_API_KEY'),
    organizationID = readEnv('MODERN_TREASURY_ORGANIZATION_ID'),
    webhookKey = readEnv('MODERN_TREASURY_WEBHOOK_KEY') ?? null,
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.ModernTreasuryError(
        "The MODERN_TREASURY_API_KEY environment variable is missing or empty; either provide it, or instantiate the ModernTreasury client with an apiKey option, like new ModernTreasury({ apiKey: 'My API Key' }).",
      );
    }
    if (organizationID === undefined) {
      throw new Errors.ModernTreasuryError(
        "The MODERN_TREASURY_ORGANIZATION_ID environment variable is missing or empty; either provide it, or instantiate the ModernTreasury client with an organizationID option, like new ModernTreasury({ organizationID: 'my-organization-ID' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      organizationID,
      webhookKey,
      ...opts,
      baseURL: baseURL || `https://app.moderntreasury.com`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? ModernTreasury.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('MODERN_TREASURY_LOG'), "process.env['MODERN_TREASURY_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;
    this.idempotencyHeader = 'Idempotency-Key';

    this.apiKey = apiKey;
    this.organizationID = organizationID;
    this.webhookKey = webhookKey;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      organizationID: this.organizationID,
      webhookKey: this.webhookKey,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://app.moderntreasury.com';
  }

  /**
   * A test endpoint often used to confirm credentials and headers are being passed
   * in correctly.
   */
  ping(options?: RequestOptions): APIPromise<TopLevelAPI.PingResponse> {
    return this.get('/api/ping', options);
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    if (!this.organizationID) {
      return undefined;
    }

    if (!this.apiKey) {
      return undefined;
    }

    const credentials = `${this.organizationID}:${this.apiKey}`;
    const Authorization = `Basic ${toBase64(credentials)}`;
    return buildHeaders([{ Authorization }]);
  }

  protected stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'brackets' });
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  getAPIList<Item, PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>>(
    path: string,
    Page: new (...args: any[]) => PageClass,
    opts?: PromiseOrValue<RequestOptions>,
  ): Pagination.PagePromise<PageClass, Item> {
    return this.requestAPIList(
      Page,
      opts && 'then' in opts ?
        opts.then((opts) => ({ method: 'get', path, ...opts }))
      : { method: 'get', path, ...opts },
    );
  }

  requestAPIList<
    Item = unknown,
    PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>,
  >(
    Page: new (...args: ConstructorParameters<typeof Pagination.AbstractPage>) => PageClass,
    options: PromiseOrValue<FinalRequestOptions>,
  ): Pagination.PagePromise<PageClass, Item> {
    const request = this.makeRequest(options, null, undefined);
    return new Pagination.PagePromise<PageClass, Item>(this as any as ModernTreasury, request, Page);
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    const abort = this._makeAbort(controller);
    if (signal) signal.addEventListener('abort', abort, { once: true });

    const timeout = setTimeout(abort, ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private _makeAbort(controller: AbortController) {
    // note: we can't just inline this method inside `fetchWithTimeout()` because then the closure
    //       would capture all request options, and cause a memory leak.
    return () => controller.abort();
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static ModernTreasury = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static ModernTreasuryError = Errors.ModernTreasuryError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  webhooks: API.Webhooks = new API.Webhooks(this);

  connections: API.Connections = new API.Connections(this);
  counterparties: API.Counterparties = new API.Counterparties(this);
  events: API.Events = new API.Events(this);
  expectedPayments: API.ExpectedPayments = new API.ExpectedPayments(this);
  externalAccounts: API.ExternalAccounts = new API.ExternalAccounts(this);
  incomingPaymentDetails: API.IncomingPaymentDetails = new API.IncomingPaymentDetails(this);
  invoices: API.Invoices = new API.Invoices(this);
  documents: API.Documents = new API.Documents(this);
  accountCollectionFlows: API.AccountCollectionFlows = new API.AccountCollectionFlows(this);
  accountDetails: API.AccountDetails = new API.AccountDetails(this);
  routingDetails: API.RoutingDetails = new API.RoutingDetails(this);
  internalAccounts: API.InternalAccounts = new API.InternalAccounts(this);
  ledgers: API.Ledgers = new API.Ledgers(this);
  ledgerAccountCategories: API.LedgerAccountCategories = new API.LedgerAccountCategories(this);
  ledgerAccounts: API.LedgerAccounts = new API.LedgerAccounts(this);
  ledgerAccountBalanceMonitors: API.LedgerAccountBalanceMonitors = new API.LedgerAccountBalanceMonitors(this);
  ledgerAccountStatements: API.LedgerAccountStatements = new API.LedgerAccountStatements(this);
  ledgerEntries: API.LedgerEntries = new API.LedgerEntries(this);
  ledgerTransactions: API.LedgerTransactions = new API.LedgerTransactions(this);
  lineItems: API.LineItems = new API.LineItems(this);
  paymentFlows: API.PaymentFlows = new API.PaymentFlows(this);
  paymentOrders: API.PaymentOrders = new API.PaymentOrders(this);
  paymentReferences: API.PaymentReferences = new API.PaymentReferences(this);
  returns: API.Returns = new API.Returns(this);
  transactions: API.Transactions = new API.Transactions(this);
  validations: API.Validations = new API.Validations(this);
  virtualAccounts: API.VirtualAccounts = new API.VirtualAccounts(this);
  bulkRequests: API.BulkRequests = new API.BulkRequests(this);
  bulkResults: API.BulkResults = new API.BulkResults(this);
  ledgerAccountSettlements: API.LedgerAccountSettlements = new API.LedgerAccountSettlements(this);
  foreignExchangeQuotes: API.ForeignExchangeQuotes = new API.ForeignExchangeQuotes(this);
  connectionLegalEntities: API.ConnectionLegalEntities = new API.ConnectionLegalEntities(this);
  legalEntities: API.LegalEntities = new API.LegalEntities(this);
  legalEntityAssociations: API.LegalEntityAssociations = new API.LegalEntityAssociations(this);
  paymentActions: API.PaymentActions = new API.PaymentActions(this);
  journalEntries: API.JournalEntries = new API.JournalEntries(this);
  journalReports: API.JournalReports = new API.JournalReports(this);
  holds: API.Holds = new API.Holds(this);
}

ModernTreasury.Connections = Connections;
ModernTreasury.Counterparties = Counterparties;
ModernTreasury.Events = Events;
ModernTreasury.ExpectedPayments = ExpectedPayments;
ModernTreasury.ExternalAccounts = ExternalAccounts;
ModernTreasury.IncomingPaymentDetails = IncomingPaymentDetails;
ModernTreasury.Invoices = Invoices;
ModernTreasury.Documents = Documents;
ModernTreasury.AccountCollectionFlows = AccountCollectionFlows;
ModernTreasury.AccountDetails = AccountDetails;
ModernTreasury.RoutingDetails = RoutingDetails;
ModernTreasury.InternalAccounts = InternalAccounts;
ModernTreasury.Ledgers = Ledgers;
ModernTreasury.LedgerAccountCategories = LedgerAccountCategories;
ModernTreasury.LedgerAccounts = LedgerAccounts;
ModernTreasury.LedgerAccountBalanceMonitors = LedgerAccountBalanceMonitors;
ModernTreasury.LedgerAccountStatements = LedgerAccountStatements;
ModernTreasury.LedgerEntries = LedgerEntries;
ModernTreasury.LedgerTransactions = LedgerTransactions;
ModernTreasury.LineItems = LineItems;
ModernTreasury.PaymentFlows = PaymentFlows;
ModernTreasury.PaymentOrders = PaymentOrders;
ModernTreasury.PaymentReferences = PaymentReferences;
ModernTreasury.Returns = Returns;
ModernTreasury.Transactions = Transactions;
ModernTreasury.Validations = Validations;
ModernTreasury.VirtualAccounts = VirtualAccounts;
ModernTreasury.BulkRequests = BulkRequests;
ModernTreasury.BulkResults = BulkResults;
ModernTreasury.LedgerAccountSettlements = LedgerAccountSettlements;
ModernTreasury.ForeignExchangeQuotes = ForeignExchangeQuotes;
ModernTreasury.ConnectionLegalEntities = ConnectionLegalEntities;
ModernTreasury.LegalEntities = LegalEntities;
ModernTreasury.LegalEntityAssociations = LegalEntityAssociations;
ModernTreasury.PaymentActions = PaymentActions;
ModernTreasury.JournalEntries = JournalEntries;
ModernTreasury.JournalReports = JournalReports;
ModernTreasury.Holds = Holds;

export declare namespace ModernTreasury {
  export type RequestOptions = Opts.RequestOptions;

  export import Page = Pagination.Page;
  export { type PageParams as PageParams, type PageResponse as PageResponse };

  export { type PingResponse as PingResponse };

  export {
    Connections as Connections,
    type Connection as Connection,
    type ConnectionsPage as ConnectionsPage,
    type ConnectionListParams as ConnectionListParams,
  };

  export {
    Counterparties as Counterparties,
    type Counterparty as Counterparty,
    type CounterpartyCollectAccountResponse as CounterpartyCollectAccountResponse,
    type CounterpartiesPage as CounterpartiesPage,
    type CounterpartyCreateParams as CounterpartyCreateParams,
    type CounterpartyUpdateParams as CounterpartyUpdateParams,
    type CounterpartyListParams as CounterpartyListParams,
    type CounterpartyCollectAccountParams as CounterpartyCollectAccountParams,
  };

  export {
    Events as Events,
    type Event as Event,
    type EventsPage as EventsPage,
    type EventListParams as EventListParams,
  };

  export {
    ExpectedPayments as ExpectedPayments,
    type ExpectedPayment as ExpectedPayment,
    type ExpectedPaymentType as ExpectedPaymentType,
    type ReconciliationRule as ReconciliationRule,
    type ExpectedPaymentsPage as ExpectedPaymentsPage,
    type ExpectedPaymentCreateParams as ExpectedPaymentCreateParams,
    type ExpectedPaymentUpdateParams as ExpectedPaymentUpdateParams,
    type ExpectedPaymentListParams as ExpectedPaymentListParams,
  };

  export {
    ExternalAccounts as ExternalAccounts,
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

  export {
    IncomingPaymentDetails as IncomingPaymentDetails,
    type IncomingPaymentDetail as IncomingPaymentDetail,
    type IncomingPaymentDetailsPage as IncomingPaymentDetailsPage,
    type IncomingPaymentDetailUpdateParams as IncomingPaymentDetailUpdateParams,
    type IncomingPaymentDetailListParams as IncomingPaymentDetailListParams,
    type IncomingPaymentDetailCreateAsyncParams as IncomingPaymentDetailCreateAsyncParams,
  };

  export {
    Invoices as Invoices,
    type Invoice as Invoice,
    type InvoicesPage as InvoicesPage,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
    type InvoiceAddPaymentOrderParams as InvoiceAddPaymentOrderParams,
  };

  export {
    Documents as Documents,
    type Document as Document,
    type DocumentsPage as DocumentsPage,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentListParams as DocumentListParams,
  };

  export {
    AccountCollectionFlows as AccountCollectionFlows,
    type AccountCollectionFlow as AccountCollectionFlow,
    type AccountCollectionFlowsPage as AccountCollectionFlowsPage,
    type AccountCollectionFlowCreateParams as AccountCollectionFlowCreateParams,
    type AccountCollectionFlowUpdateParams as AccountCollectionFlowUpdateParams,
    type AccountCollectionFlowListParams as AccountCollectionFlowListParams,
  };

  export {
    AccountDetails as AccountDetails,
    type AccountDetail as AccountDetail,
    type AccountDetailsPage as AccountDetailsPage,
    type AccountDetailCreateParams as AccountDetailCreateParams,
    type AccountDetailRetrieveParams as AccountDetailRetrieveParams,
    type AccountDetailListParams as AccountDetailListParams,
    type AccountDetailDeleteParams as AccountDetailDeleteParams,
  };

  export {
    RoutingDetails as RoutingDetails,
    type RoutingDetail as RoutingDetail,
    type RoutingDetailsPage as RoutingDetailsPage,
    type RoutingDetailCreateParams as RoutingDetailCreateParams,
    type RoutingDetailRetrieveParams as RoutingDetailRetrieveParams,
    type RoutingDetailListParams as RoutingDetailListParams,
    type RoutingDetailDeleteParams as RoutingDetailDeleteParams,
  };

  export {
    InternalAccounts as InternalAccounts,
    type InternalAccount as InternalAccount,
    type InternalAccountUpdateAccountCapabilityResponse as InternalAccountUpdateAccountCapabilityResponse,
    type InternalAccountsPage as InternalAccountsPage,
    type InternalAccountCreateParams as InternalAccountCreateParams,
    type InternalAccountUpdateParams as InternalAccountUpdateParams,
    type InternalAccountListParams as InternalAccountListParams,
    type InternalAccountUpdateAccountCapabilityParams as InternalAccountUpdateAccountCapabilityParams,
  };

  export {
    Ledgers as Ledgers,
    type Ledger as Ledger,
    type LedgersPage as LedgersPage,
    type LedgerCreateParams as LedgerCreateParams,
    type LedgerUpdateParams as LedgerUpdateParams,
    type LedgerListParams as LedgerListParams,
  };

  export {
    LedgerAccountCategories as LedgerAccountCategories,
    type LedgerAccountCategory as LedgerAccountCategory,
    type LedgerAccountCategoriesPage as LedgerAccountCategoriesPage,
    type LedgerAccountCategoryCreateParams as LedgerAccountCategoryCreateParams,
    type LedgerAccountCategoryRetrieveParams as LedgerAccountCategoryRetrieveParams,
    type LedgerAccountCategoryUpdateParams as LedgerAccountCategoryUpdateParams,
    type LedgerAccountCategoryListParams as LedgerAccountCategoryListParams,
    type LedgerAccountCategoryAddLedgerAccountParams as LedgerAccountCategoryAddLedgerAccountParams,
    type LedgerAccountCategoryAddNestedCategoryParams as LedgerAccountCategoryAddNestedCategoryParams,
    type LedgerAccountCategoryRemoveLedgerAccountParams as LedgerAccountCategoryRemoveLedgerAccountParams,
    type LedgerAccountCategoryRemoveNestedCategoryParams as LedgerAccountCategoryRemoveNestedCategoryParams,
  };

  export {
    LedgerAccounts as LedgerAccounts,
    type LedgerAccount as LedgerAccount,
    type LedgerAccountsPage as LedgerAccountsPage,
    type LedgerAccountCreateParams as LedgerAccountCreateParams,
    type LedgerAccountRetrieveParams as LedgerAccountRetrieveParams,
    type LedgerAccountUpdateParams as LedgerAccountUpdateParams,
    type LedgerAccountListParams as LedgerAccountListParams,
  };

  export {
    LedgerAccountBalanceMonitors as LedgerAccountBalanceMonitors,
    type LedgerAccountBalanceMonitor as LedgerAccountBalanceMonitor,
    type LedgerAccountBalanceMonitorsPage as LedgerAccountBalanceMonitorsPage,
    type LedgerAccountBalanceMonitorCreateParams as LedgerAccountBalanceMonitorCreateParams,
    type LedgerAccountBalanceMonitorUpdateParams as LedgerAccountBalanceMonitorUpdateParams,
    type LedgerAccountBalanceMonitorListParams as LedgerAccountBalanceMonitorListParams,
  };

  export {
    LedgerAccountStatements as LedgerAccountStatements,
    type LedgerAccountStatementCreateResponse as LedgerAccountStatementCreateResponse,
    type LedgerAccountStatementRetrieveResponse as LedgerAccountStatementRetrieveResponse,
    type LedgerAccountStatementCreateParams as LedgerAccountStatementCreateParams,
  };

  export {
    LedgerEntries as LedgerEntries,
    type LedgerEntry as LedgerEntry,
    type LedgerEntriesPage as LedgerEntriesPage,
    type LedgerEntryRetrieveParams as LedgerEntryRetrieveParams,
    type LedgerEntryUpdateParams as LedgerEntryUpdateParams,
    type LedgerEntryListParams as LedgerEntryListParams,
  };

  export {
    LedgerTransactions as LedgerTransactions,
    type LedgerTransaction as LedgerTransaction,
    type LedgerTransactionsPage as LedgerTransactionsPage,
    type LedgerTransactionCreateParams as LedgerTransactionCreateParams,
    type LedgerTransactionUpdateParams as LedgerTransactionUpdateParams,
    type LedgerTransactionListParams as LedgerTransactionListParams,
    type LedgerTransactionCreatePartialPostParams as LedgerTransactionCreatePartialPostParams,
    type LedgerTransactionCreateReversalParams as LedgerTransactionCreateReversalParams,
  };

  export {
    LineItems as LineItems,
    type LineItem as LineItem,
    type LineItemsPage as LineItemsPage,
    type LineItemRetrieveParams as LineItemRetrieveParams,
    type LineItemUpdateParams as LineItemUpdateParams,
    type LineItemListParams as LineItemListParams,
  };

  export {
    PaymentFlows as PaymentFlows,
    type PaymentFlow as PaymentFlow,
    type PaymentFlowsPage as PaymentFlowsPage,
    type PaymentFlowCreateParams as PaymentFlowCreateParams,
    type PaymentFlowUpdateParams as PaymentFlowUpdateParams,
    type PaymentFlowListParams as PaymentFlowListParams,
  };

  export {
    PaymentOrders as PaymentOrders,
    type ContactDetailCreateRequest as ContactDetailCreateRequest,
    type PaymentOrder as PaymentOrder,
    type PaymentOrderSubtype as PaymentOrderSubtype,
    type PaymentOrderType as PaymentOrderType,
    type PaymentOrdersPage as PaymentOrdersPage,
    type PaymentOrderCreateParams as PaymentOrderCreateParams,
    type PaymentOrderUpdateParams as PaymentOrderUpdateParams,
    type PaymentOrderListParams as PaymentOrderListParams,
    type PaymentOrderCreateAsyncParams as PaymentOrderCreateAsyncParams,
  };

  export {
    PaymentReferences as PaymentReferences,
    type PaymentReference as PaymentReference,
    type PaymentReferencesPage as PaymentReferencesPage,
    type PaymentReferenceListParams as PaymentReferenceListParams,
  };

  export {
    Returns as Returns,
    type ReturnObject as ReturnObject,
    type ReturnObjectsPage as ReturnObjectsPage,
    type ReturnCreateParams as ReturnCreateParams,
    type ReturnListParams as ReturnListParams,
  };

  export {
    Transactions as Transactions,
    type Transaction as Transaction,
    type TransactionsPage as TransactionsPage,
    type TransactionCreateParams as TransactionCreateParams,
    type TransactionUpdateParams as TransactionUpdateParams,
    type TransactionListParams as TransactionListParams,
  };

  export {
    Validations as Validations,
    type RoutingNumberLookupRequest as RoutingNumberLookupRequest,
    type ValidationValidateRoutingNumberParams as ValidationValidateRoutingNumberParams,
  };

  export {
    VirtualAccounts as VirtualAccounts,
    type VirtualAccount as VirtualAccount,
    type VirtualAccountsPage as VirtualAccountsPage,
    type VirtualAccountCreateParams as VirtualAccountCreateParams,
    type VirtualAccountUpdateParams as VirtualAccountUpdateParams,
    type VirtualAccountListParams as VirtualAccountListParams,
  };

  export {
    BulkRequests as BulkRequests,
    type BulkRequest as BulkRequest,
    type BulkRequestsPage as BulkRequestsPage,
    type BulkRequestCreateParams as BulkRequestCreateParams,
    type BulkRequestListParams as BulkRequestListParams,
  };

  export {
    BulkResults as BulkResults,
    type BulkResult as BulkResult,
    type BulkResultsPage as BulkResultsPage,
    type BulkResultListParams as BulkResultListParams,
  };

  export {
    LedgerAccountSettlements as LedgerAccountSettlements,
    type LedgerAccountSettlement as LedgerAccountSettlement,
    type LedgerAccountSettlementsPage as LedgerAccountSettlementsPage,
    type LedgerAccountSettlementCreateParams as LedgerAccountSettlementCreateParams,
    type LedgerAccountSettlementUpdateParams as LedgerAccountSettlementUpdateParams,
    type LedgerAccountSettlementListParams as LedgerAccountSettlementListParams,
  };

  export {
    ForeignExchangeQuotes as ForeignExchangeQuotes,
    type ForeignExchangeQuote as ForeignExchangeQuote,
    type ForeignExchangeQuotesPage as ForeignExchangeQuotesPage,
    type ForeignExchangeQuoteCreateParams as ForeignExchangeQuoteCreateParams,
    type ForeignExchangeQuoteListParams as ForeignExchangeQuoteListParams,
  };

  export {
    ConnectionLegalEntities as ConnectionLegalEntities,
    type ConnectionLegalEntity as ConnectionLegalEntity,
    type ConnectionLegalEntitiesPage as ConnectionLegalEntitiesPage,
    type ConnectionLegalEntityCreateParams as ConnectionLegalEntityCreateParams,
    type ConnectionLegalEntityUpdateParams as ConnectionLegalEntityUpdateParams,
    type ConnectionLegalEntityListParams as ConnectionLegalEntityListParams,
  };

  export {
    LegalEntities as LegalEntities,
    type LegalEntity as LegalEntity,
    type LegalEntitiesPage as LegalEntitiesPage,
    type LegalEntityCreateParams as LegalEntityCreateParams,
    type LegalEntityUpdateParams as LegalEntityUpdateParams,
    type LegalEntityListParams as LegalEntityListParams,
  };

  export {
    LegalEntityAssociations as LegalEntityAssociations,
    type ChildLegalEntity as ChildLegalEntity,
    type LegalEntityAssociation as LegalEntityAssociation,
    type LegalEntityAssociationCreateParams as LegalEntityAssociationCreateParams,
  };

  export {
    PaymentActions as PaymentActions,
    type PaymentActionCreateResponse as PaymentActionCreateResponse,
    type PaymentActionRetrieveResponse as PaymentActionRetrieveResponse,
    type PaymentActionUpdateResponse as PaymentActionUpdateResponse,
    type PaymentActionListResponse as PaymentActionListResponse,
    type PaymentActionListResponsesPage as PaymentActionListResponsesPage,
    type PaymentActionCreateParams as PaymentActionCreateParams,
    type PaymentActionUpdateParams as PaymentActionUpdateParams,
    type PaymentActionListParams as PaymentActionListParams,
  };

  export { JournalEntries as JournalEntries, type JournalEntryListParams as JournalEntryListParams };

  export { JournalReports as JournalReports, type JournalReportUpdateParams as JournalReportUpdateParams };

  export {
    Holds as Holds,
    type HoldCreateResponse as HoldCreateResponse,
    type HoldRetrieveResponse as HoldRetrieveResponse,
    type HoldUpdateResponse as HoldUpdateResponse,
    type HoldListResponse as HoldListResponse,
    type HoldListResponsesPage as HoldListResponsesPage,
    type HoldCreateParams as HoldCreateParams,
    type HoldUpdateParams as HoldUpdateParams,
    type HoldListParams as HoldListParams,
  };

  export type AccountsType = API.AccountsType;
  export type Address = API.Address;
  export type AddressRequest = API.AddressRequest;
  export type AsyncResponse = API.AsyncResponse;
  export type ChildLegalEntityCreate = API.ChildLegalEntityCreate;
  export type ContactDetail = API.ContactDetail;
  export type Currency = API.Currency;
  export type ForeignExchangeRate = API.ForeignExchangeRate;
  export type IdentificationCreateRequest = API.IdentificationCreateRequest;
  export type LedgerAccountCreateRequest = API.LedgerAccountCreateRequest;
  export type LedgerBalance = API.LedgerBalance;
  export type LedgerBalances = API.LedgerBalances;
  export type LedgerEntryCreateRequest = API.LedgerEntryCreateRequest;
  export type LedgerTransactionCreateRequest = API.LedgerTransactionCreateRequest;
  export type LegalEntityAddressCreateRequest = API.LegalEntityAddressCreateRequest;
  export type LegalEntityAssociationInlineCreate = API.LegalEntityAssociationInlineCreate;
  export type LegalEntityComplianceDetail = API.LegalEntityComplianceDetail;
  export type LegalEntityIndustryClassification = API.LegalEntityIndustryClassification;
  export type TransactionDirection = API.TransactionDirection;
}
