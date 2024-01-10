// File generated from our OpenAPI spec by Stainless.

import * as Core from './core';
import * as Pagination from './pagination';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as qs from 'qs';
import * as API from 'modern-treasury/resources/index';
import * as TopLevelAPI from 'modern-treasury/resources/top-level';

export interface ClientOptions {
  /**
   * Defaults to process.env['MODERN_TREASURY_API_KEY'].
   */
  apiKey?: string;

  /**
   * Defaults to process.env['MODERN_TREASURY_ORGANIZATION_ID'].
   */
  organizationId?: string;

  /**
   * Defaults to process.env['MODERN_TREASURY_WEBHOOK_KEY'].
   */
  webhookKey?: string | null;

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
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/** API Client for interfacing with the Modern Treasury API. */
export class ModernTreasury extends Core.APIClient {
  apiKey: string;
  organizationId: string;
  webhookKey: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Modern Treasury API.
   *
   * @param {string} [opts.apiKey=process.env['MODERN_TREASURY_API_KEY'] ?? undefined]
   * @param {string} [opts.organizationId=process.env['MODERN_TREASURY_ORGANIZATION_ID'] ?? undefined]
   * @param {string | null} [opts.webhookKey=process.env['MODERN_TREASURY_WEBHOOK_KEY'] ?? null]
   * @param {string} [opts.baseURL=process.env['MODERN_TREASURY_BASE_URL'] ?? https://app.moderntreasury.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('MODERN_TREASURY_BASE_URL'),
    apiKey = Core.readEnv('MODERN_TREASURY_API_KEY'),
    organizationId = Core.readEnv('MODERN_TREASURY_ORGANIZATION_ID'),
    webhookKey = Core.readEnv('MODERN_TREASURY_WEBHOOK_KEY') ?? null,
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.ModernTreasuryError(
        "The MODERN_TREASURY_API_KEY environment variable is missing or empty; either provide it, or instantiate the ModernTreasury client with an apiKey option, like new ModernTreasury({ apiKey: 'My API Key' }).",
      );
    }
    if (organizationId === undefined) {
      throw new Errors.ModernTreasuryError(
        "The MODERN_TREASURY_ORGANIZATION_ID environment variable is missing or empty; either provide it, or instantiate the ModernTreasury client with an organizationId option, like new ModernTreasury({ organizationId: 'my-organization-ID' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      organizationId,
      webhookKey,
      ...opts,
      baseURL: baseURL || `https://app.moderntreasury.com`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });
    this._options = options;
    this.idempotencyHeader = 'Idempotency-Key';

    this.apiKey = apiKey;
    this.organizationId = organizationId;
    this.webhookKey = webhookKey;
  }

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
  ledgerableEvents: API.LedgerableEvents = new API.LedgerableEvents(this);
  ledgerAccountCategories: API.LedgerAccountCategories = new API.LedgerAccountCategories(this);
  ledgerAccounts: API.LedgerAccounts = new API.LedgerAccounts(this);
  ledgerAccountBalanceMonitors: API.LedgerAccountBalanceMonitors = new API.LedgerAccountBalanceMonitors(this);
  ledgerAccountPayouts: API.LedgerAccountPayouts = new API.LedgerAccountPayouts(this);
  ledgerAccountStatements: API.LedgerAccountStatements = new API.LedgerAccountStatements(this);
  ledgerEntries: API.LedgerEntries = new API.LedgerEntries(this);
  ledgerEventHandlers: API.LedgerEventHandlers = new API.LedgerEventHandlers(this);
  ledgerTransactions: API.LedgerTransactions = new API.LedgerTransactions(this);
  lineItems: API.LineItems = new API.LineItems(this);
  paymentFlows: API.PaymentFlows = new API.PaymentFlows(this);
  paymentOrders: API.PaymentOrders = new API.PaymentOrders(this);
  paymentReferences: API.PaymentReferences = new API.PaymentReferences(this);
  returns: API.Returns = new API.Returns(this);
  transactions: API.Transactions = new API.Transactions(this);
  validations: API.Validations = new API.Validations(this);
  paperItems: API.PaperItems = new API.PaperItems(this);
  webhooks: API.Webhooks = new API.Webhooks(this);
  virtualAccounts: API.VirtualAccounts = new API.VirtualAccounts(this);
  bulkRequests: API.BulkRequests = new API.BulkRequests(this);
  bulkResults: API.BulkResults = new API.BulkResults(this);
  ledgerAccountSettlements: API.LedgerAccountSettlements = new API.LedgerAccountSettlements(this);

  /**
   * A test endpoint often used to confirm credentials and headers are being passed
   * in correctly.
   */
  ping(options?: Core.RequestOptions): Core.APIPromise<TopLevelAPI.PingResponse> {
    return this.get('/api/ping', options);
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    if (!this.organizationId) {
      return {};
    }

    if (!this.apiKey) {
      return {};
    }

    const credentials = `${this.organizationId}:${this.apiKey}`;
    const Authorization = `Basic ${Core.toBase64(credentials)}`;
    return { Authorization };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'brackets' });
  }

  static ModernTreasury = this;

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
}

export const {
  ModernTreasuryError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace ModernTreasury {
  // Helper functions
  export import toFile = Uploads.toFile;
  export import fileFromPath = Uploads.fileFromPath;

  export import RequestOptions = Core.RequestOptions;

  export import Page = Pagination.Page;
  export import PageParams = Pagination.PageParams;
  export import PageResponse = Pagination.PageResponse;

  export import PingResponse = API.PingResponse;

  export import Connections = API.Connections;
  export import Connection = API.Connection;
  export import ConnectionsPage = API.ConnectionsPage;
  export import ConnectionListParams = API.ConnectionListParams;

  export import Counterparties = API.Counterparties;
  export import Counterparty = API.Counterparty;
  export import CounterpartyCollectAccountResponse = API.CounterpartyCollectAccountResponse;
  export import CounterpartiesPage = API.CounterpartiesPage;
  export import CounterpartyCreateParams = API.CounterpartyCreateParams;
  export import CounterpartyUpdateParams = API.CounterpartyUpdateParams;
  export import CounterpartyListParams = API.CounterpartyListParams;
  export import CounterpartyCollectAccountParams = API.CounterpartyCollectAccountParams;

  export import Events = API.Events;
  export import Event = API.Event;
  export import EventsPage = API.EventsPage;
  export import EventListParams = API.EventListParams;

  export import ExpectedPayments = API.ExpectedPayments;
  export import ExpectedPayment = API.ExpectedPayment;
  export import ExpectedPaymentType = API.ExpectedPaymentType;
  export import ExpectedPaymentsPage = API.ExpectedPaymentsPage;
  export import ExpectedPaymentCreateParams = API.ExpectedPaymentCreateParams;
  export import ExpectedPaymentUpdateParams = API.ExpectedPaymentUpdateParams;
  export import ExpectedPaymentListParams = API.ExpectedPaymentListParams;

  export import ExternalAccounts = API.ExternalAccounts;
  export import ExternalAccount = API.ExternalAccount;
  export import ExternalAccountType = API.ExternalAccountType;
  export import ExternalAccountsPage = API.ExternalAccountsPage;
  export import ExternalAccountCreateParams = API.ExternalAccountCreateParams;
  export import ExternalAccountUpdateParams = API.ExternalAccountUpdateParams;
  export import ExternalAccountListParams = API.ExternalAccountListParams;
  export import ExternalAccountCompleteVerificationParams = API.ExternalAccountCompleteVerificationParams;
  export import ExternalAccountVerifyParams = API.ExternalAccountVerifyParams;

  export import IncomingPaymentDetails = API.IncomingPaymentDetails;
  export import IncomingPaymentDetail = API.IncomingPaymentDetail;
  export import IncomingPaymentDetailsPage = API.IncomingPaymentDetailsPage;
  export import IncomingPaymentDetailUpdateParams = API.IncomingPaymentDetailUpdateParams;
  export import IncomingPaymentDetailListParams = API.IncomingPaymentDetailListParams;
  export import IncomingPaymentDetailCreateAsyncParams = API.IncomingPaymentDetailCreateAsyncParams;

  export import Invoices = API.Invoices;
  export import Invoice = API.Invoice;
  export import InvoicesPage = API.InvoicesPage;
  export import InvoiceCreateParams = API.InvoiceCreateParams;
  export import InvoiceUpdateParams = API.InvoiceUpdateParams;
  export import InvoiceListParams = API.InvoiceListParams;

  export import Documents = API.Documents;
  export import Document = API.Document;
  export import DocumentsPage = API.DocumentsPage;
  export import DocumentCreateParams = API.DocumentCreateParams;
  export import DocumentListParams = API.DocumentListParams;

  export import AccountCollectionFlows = API.AccountCollectionFlows;
  export import AccountCollectionFlow = API.AccountCollectionFlow;
  export import AccountCollectionFlowsPage = API.AccountCollectionFlowsPage;
  export import AccountCollectionFlowCreateParams = API.AccountCollectionFlowCreateParams;
  export import AccountCollectionFlowUpdateParams = API.AccountCollectionFlowUpdateParams;
  export import AccountCollectionFlowListParams = API.AccountCollectionFlowListParams;

  export import AccountDetails = API.AccountDetails;
  export import AccountDetail = API.AccountDetail;
  export import AccountDetailsPage = API.AccountDetailsPage;
  export import AccountDetailCreateParams = API.AccountDetailCreateParams;
  export import AccountDetailListParams = API.AccountDetailListParams;

  export import RoutingDetails = API.RoutingDetails;
  export import RoutingDetail = API.RoutingDetail;
  export import RoutingDetailsPage = API.RoutingDetailsPage;
  export import RoutingDetailCreateParams = API.RoutingDetailCreateParams;
  export import RoutingDetailListParams = API.RoutingDetailListParams;

  export import InternalAccounts = API.InternalAccounts;
  export import InternalAccount = API.InternalAccount;
  export import InternalAccountsPage = API.InternalAccountsPage;
  export import InternalAccountCreateParams = API.InternalAccountCreateParams;
  export import InternalAccountUpdateParams = API.InternalAccountUpdateParams;
  export import InternalAccountListParams = API.InternalAccountListParams;

  export import Ledgers = API.Ledgers;
  export import Ledger = API.Ledger;
  export import LedgersPage = API.LedgersPage;
  export import LedgerCreateParams = API.LedgerCreateParams;
  export import LedgerUpdateParams = API.LedgerUpdateParams;
  export import LedgerListParams = API.LedgerListParams;

  export import LedgerableEvents = API.LedgerableEvents;
  export import LedgerableEvent = API.LedgerableEvent;
  export import LedgerableEventCreateParams = API.LedgerableEventCreateParams;

  export import LedgerAccountCategories = API.LedgerAccountCategories;
  export import LedgerAccountCategory = API.LedgerAccountCategory;
  export import LedgerAccountCategoriesPage = API.LedgerAccountCategoriesPage;
  export import LedgerAccountCategoryCreateParams = API.LedgerAccountCategoryCreateParams;
  export import LedgerAccountCategoryRetrieveParams = API.LedgerAccountCategoryRetrieveParams;
  export import LedgerAccountCategoryUpdateParams = API.LedgerAccountCategoryUpdateParams;
  export import LedgerAccountCategoryListParams = API.LedgerAccountCategoryListParams;

  export import LedgerAccounts = API.LedgerAccounts;
  export import LedgerAccount = API.LedgerAccount;
  export import LedgerAccountsPage = API.LedgerAccountsPage;
  export import LedgerAccountCreateParams = API.LedgerAccountCreateParams;
  export import LedgerAccountRetrieveParams = API.LedgerAccountRetrieveParams;
  export import LedgerAccountUpdateParams = API.LedgerAccountUpdateParams;
  export import LedgerAccountListParams = API.LedgerAccountListParams;

  export import LedgerAccountBalanceMonitors = API.LedgerAccountBalanceMonitors;
  export import LedgerAccountBalanceMonitor = API.LedgerAccountBalanceMonitor;
  export import LedgerAccountBalanceMonitorsPage = API.LedgerAccountBalanceMonitorsPage;
  export import LedgerAccountBalanceMonitorCreateParams = API.LedgerAccountBalanceMonitorCreateParams;
  export import LedgerAccountBalanceMonitorUpdateParams = API.LedgerAccountBalanceMonitorUpdateParams;
  export import LedgerAccountBalanceMonitorListParams = API.LedgerAccountBalanceMonitorListParams;

  export import LedgerAccountPayouts = API.LedgerAccountPayouts;
  export import LedgerAccountPayout = API.LedgerAccountPayout;
  export import LedgerAccountPayoutsPage = API.LedgerAccountPayoutsPage;
  export import LedgerAccountPayoutCreateParams = API.LedgerAccountPayoutCreateParams;
  export import LedgerAccountPayoutUpdateParams = API.LedgerAccountPayoutUpdateParams;
  export import LedgerAccountPayoutListParams = API.LedgerAccountPayoutListParams;

  export import LedgerAccountStatements = API.LedgerAccountStatements;
  export import LedgerAccountStatementCreateResponse = API.LedgerAccountStatementCreateResponse;
  export import LedgerAccountStatementRetrieveResponse = API.LedgerAccountStatementRetrieveResponse;
  export import LedgerAccountStatementCreateParams = API.LedgerAccountStatementCreateParams;

  export import LedgerEntries = API.LedgerEntries;
  export import LedgerEntry = API.LedgerEntry;
  export import LedgerEntriesPage = API.LedgerEntriesPage;
  export import LedgerEntryRetrieveParams = API.LedgerEntryRetrieveParams;
  export import LedgerEntryUpdateParams = API.LedgerEntryUpdateParams;
  export import LedgerEntryListParams = API.LedgerEntryListParams;

  export import LedgerEventHandlers = API.LedgerEventHandlers;
  export import LedgerEventHandler = API.LedgerEventHandler;
  export import LedgerEventHandlerVariable = API.LedgerEventHandlerVariable;
  export import LedgerEventHandlersPage = API.LedgerEventHandlersPage;
  export import LedgerEventHandlerCreateParams = API.LedgerEventHandlerCreateParams;
  export import LedgerEventHandlerListParams = API.LedgerEventHandlerListParams;

  export import LedgerTransactions = API.LedgerTransactions;
  export import LedgerTransaction = API.LedgerTransaction;
  export import LedgerTransactionsPage = API.LedgerTransactionsPage;
  export import LedgerTransactionCreateParams = API.LedgerTransactionCreateParams;
  export import LedgerTransactionUpdateParams = API.LedgerTransactionUpdateParams;
  export import LedgerTransactionListParams = API.LedgerTransactionListParams;
  export import LedgerTransactionCreateReversalParams = API.LedgerTransactionCreateReversalParams;

  export import LineItems = API.LineItems;
  export import LineItem = API.LineItem;
  export import LineItemsPage = API.LineItemsPage;
  export import LineItemUpdateParams = API.LineItemUpdateParams;
  export import LineItemListParams = API.LineItemListParams;

  export import PaymentFlows = API.PaymentFlows;
  export import PaymentFlow = API.PaymentFlow;
  export import PaymentFlowsPage = API.PaymentFlowsPage;
  export import PaymentFlowCreateParams = API.PaymentFlowCreateParams;
  export import PaymentFlowUpdateParams = API.PaymentFlowUpdateParams;
  export import PaymentFlowListParams = API.PaymentFlowListParams;

  export import PaymentOrders = API.PaymentOrders;
  export import PaymentOrder = API.PaymentOrder;
  export import PaymentOrderSubtype = API.PaymentOrderSubtype;
  export import PaymentOrderType = API.PaymentOrderType;
  export import PaymentOrdersPage = API.PaymentOrdersPage;
  export import PaymentOrderCreateParams = API.PaymentOrderCreateParams;
  export import PaymentOrderUpdateParams = API.PaymentOrderUpdateParams;
  export import PaymentOrderListParams = API.PaymentOrderListParams;
  export import PaymentOrderCreateAsyncParams = API.PaymentOrderCreateAsyncParams;

  export import PaymentReferences = API.PaymentReferences;
  export import PaymentReference = API.PaymentReference;
  export import PaymentReferencesPage = API.PaymentReferencesPage;
  export import PaymentReferenceListParams = API.PaymentReferenceListParams;

  export import Returns = API.Returns;
  export import ReturnObject = API.ReturnObject;
  export import ReturnObjectsPage = API.ReturnObjectsPage;
  export import ReturnCreateParams = API.ReturnCreateParams;
  export import ReturnListParams = API.ReturnListParams;

  export import Transactions = API.Transactions;
  export import Transaction = API.Transaction;
  export import TransactionsPage = API.TransactionsPage;
  export import TransactionCreateParams = API.TransactionCreateParams;
  export import TransactionUpdateParams = API.TransactionUpdateParams;
  export import TransactionListParams = API.TransactionListParams;

  export import Validations = API.Validations;
  export import RoutingNumberLookupRequest = API.RoutingNumberLookupRequest;
  export import ValidationValidateRoutingNumberParams = API.ValidationValidateRoutingNumberParams;

  export import PaperItems = API.PaperItems;
  export import PaperItem = API.PaperItem;
  export import PaperItemsPage = API.PaperItemsPage;
  export import PaperItemListParams = API.PaperItemListParams;

  export import Webhooks = API.Webhooks;

  export import VirtualAccounts = API.VirtualAccounts;
  export import VirtualAccount = API.VirtualAccount;
  export import VirtualAccountsPage = API.VirtualAccountsPage;
  export import VirtualAccountCreateParams = API.VirtualAccountCreateParams;
  export import VirtualAccountUpdateParams = API.VirtualAccountUpdateParams;
  export import VirtualAccountListParams = API.VirtualAccountListParams;

  export import BulkRequests = API.BulkRequests;
  export import BulkRequest = API.BulkRequest;
  export import BulkRequestsPage = API.BulkRequestsPage;
  export import BulkRequestCreateParams = API.BulkRequestCreateParams;
  export import BulkRequestListParams = API.BulkRequestListParams;

  export import BulkResults = API.BulkResults;
  export import BulkResult = API.BulkResult;
  export import BulkResultsPage = API.BulkResultsPage;
  export import BulkResultListParams = API.BulkResultListParams;

  export import LedgerAccountSettlements = API.LedgerAccountSettlements;
  export import LedgerAccountSettlement = API.LedgerAccountSettlement;
  export import LedgerAccountSettlementsPage = API.LedgerAccountSettlementsPage;
  export import LedgerAccountSettlementCreateParams = API.LedgerAccountSettlementCreateParams;
  export import LedgerAccountSettlementUpdateParams = API.LedgerAccountSettlementUpdateParams;
  export import LedgerAccountSettlementListParams = API.LedgerAccountSettlementListParams;

  export import AccountsType = API.AccountsType;
  export import AsyncResponse = API.AsyncResponse;
  export import Currency = API.Currency;
  export import TransactionDirection = API.TransactionDirection;
}

export default ModernTreasury;
