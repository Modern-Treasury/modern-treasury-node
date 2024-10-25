// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources/index';
import * as TopLevelAPI from './resources/top-level';

export interface ClientOptions {
  /**
   * Defaults to process.env['MODERN_TREASURY_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Defaults to process.env['MODERN_TREASURY_ORGANIZATION_ID'].
   */
  organizationId?: string | undefined;

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

/**
 * API Client for interfacing with the Modern Treasury API.
 */
export class ModernTreasury extends Core.APIClient {
  apiKey: string;
  organizationId: string;
  webhookKey: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Modern Treasury API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['MODERN_TREASURY_API_KEY'] ?? undefined]
   * @param {string | undefined} [opts.organizationId=process.env['MODERN_TREASURY_ORGANIZATION_ID'] ?? undefined]
   * @param {string | null | undefined} [opts.webhookKey=process.env['MODERN_TREASURY_WEBHOOK_KEY'] ?? null]
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
  virtualAccounts: API.VirtualAccounts = new API.VirtualAccounts(this);
  bulkRequests: API.BulkRequests = new API.BulkRequests(this);
  bulkResults: API.BulkResults = new API.BulkResults(this);
  ledgerAccountSettlements: API.LedgerAccountSettlements = new API.LedgerAccountSettlements(this);
  foreignExchangeQuotes: API.ForeignExchangeQuotes = new API.ForeignExchangeQuotes(this);
  connectionLegalEntities: API.ConnectionLegalEntities = new API.ConnectionLegalEntities(this);
  legalEntities: API.LegalEntities = new API.LegalEntities(this);
  legalEntityAssociations: API.LegalEntityAssociations = new API.LegalEntityAssociations(this);

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
  static fileFromPath = Uploads.fileFromPath;
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
  export type RequestOptions = Core.RequestOptions;

  export import Page = Pagination.Page;
  export type PageParams = Pagination.PageParams;
  export type PageResponse<T> = Pagination.PageResponse<T>;

  export type PingResponse = API.PingResponse;

  export import Connections = API.Connections;
  export type Connection = API.Connection;
  export import ConnectionsPage = API.ConnectionsPage;
  export type ConnectionListParams = API.ConnectionListParams;

  export import Counterparties = API.Counterparties;
  export type Counterparty = API.Counterparty;
  export type CounterpartyCollectAccountResponse = API.CounterpartyCollectAccountResponse;
  export import CounterpartiesPage = API.CounterpartiesPage;
  export type CounterpartyCreateParams = API.CounterpartyCreateParams;
  export type CounterpartyUpdateParams = API.CounterpartyUpdateParams;
  export type CounterpartyListParams = API.CounterpartyListParams;
  export type CounterpartyCollectAccountParams = API.CounterpartyCollectAccountParams;

  export import Events = API.Events;
  export type Event = API.Event;
  export import EventsPage = API.EventsPage;
  export type EventListParams = API.EventListParams;

  export import ExpectedPayments = API.ExpectedPayments;
  export type ExpectedPayment = API.ExpectedPayment;
  export type ExpectedPaymentType = API.ExpectedPaymentType;
  export type ReconciliationRule = API.ReconciliationRule;
  export import ExpectedPaymentsPage = API.ExpectedPaymentsPage;
  export type ExpectedPaymentCreateParams = API.ExpectedPaymentCreateParams;
  export type ExpectedPaymentUpdateParams = API.ExpectedPaymentUpdateParams;
  export type ExpectedPaymentListParams = API.ExpectedPaymentListParams;

  export import ExternalAccounts = API.ExternalAccounts;
  export type ExternalAccount = API.ExternalAccount;
  export type ExternalAccountType = API.ExternalAccountType;
  export type ExternalAccountVerifyResponse = API.ExternalAccountVerifyResponse;
  export import ExternalAccountsPage = API.ExternalAccountsPage;
  export type ExternalAccountCreateParams = API.ExternalAccountCreateParams;
  export type ExternalAccountUpdateParams = API.ExternalAccountUpdateParams;
  export type ExternalAccountListParams = API.ExternalAccountListParams;
  export type ExternalAccountCompleteVerificationParams = API.ExternalAccountCompleteVerificationParams;
  export type ExternalAccountVerifyParams = API.ExternalAccountVerifyParams;

  export import IncomingPaymentDetails = API.IncomingPaymentDetails;
  export type IncomingPaymentDetail = API.IncomingPaymentDetail;
  export import IncomingPaymentDetailsPage = API.IncomingPaymentDetailsPage;
  export type IncomingPaymentDetailUpdateParams = API.IncomingPaymentDetailUpdateParams;
  export type IncomingPaymentDetailListParams = API.IncomingPaymentDetailListParams;
  export type IncomingPaymentDetailCreateAsyncParams = API.IncomingPaymentDetailCreateAsyncParams;

  export import Invoices = API.Invoices;
  export type Invoice = API.Invoice;
  export import InvoicesPage = API.InvoicesPage;
  export type InvoiceCreateParams = API.InvoiceCreateParams;
  export type InvoiceUpdateParams = API.InvoiceUpdateParams;
  export type InvoiceListParams = API.InvoiceListParams;

  export import Documents = API.Documents;
  export type Document = API.Document;
  export import DocumentsPage = API.DocumentsPage;
  export type DocumentCreateParams = API.DocumentCreateParams;
  export type DocumentListParams = API.DocumentListParams;

  export import AccountCollectionFlows = API.AccountCollectionFlows;
  export type AccountCollectionFlow = API.AccountCollectionFlow;
  export import AccountCollectionFlowsPage = API.AccountCollectionFlowsPage;
  export type AccountCollectionFlowCreateParams = API.AccountCollectionFlowCreateParams;
  export type AccountCollectionFlowUpdateParams = API.AccountCollectionFlowUpdateParams;
  export type AccountCollectionFlowListParams = API.AccountCollectionFlowListParams;

  export import AccountDetails = API.AccountDetails;
  export type AccountDetail = API.AccountDetail;
  export import AccountDetailsPage = API.AccountDetailsPage;
  export type AccountDetailCreateParams = API.AccountDetailCreateParams;
  export type AccountDetailListParams = API.AccountDetailListParams;

  export import RoutingDetails = API.RoutingDetails;
  export type RoutingDetail = API.RoutingDetail;
  export import RoutingDetailsPage = API.RoutingDetailsPage;
  export type RoutingDetailCreateParams = API.RoutingDetailCreateParams;
  export type RoutingDetailListParams = API.RoutingDetailListParams;

  export import InternalAccounts = API.InternalAccounts;
  export type InternalAccount = API.InternalAccount;
  export import InternalAccountsPage = API.InternalAccountsPage;
  export type InternalAccountCreateParams = API.InternalAccountCreateParams;
  export type InternalAccountUpdateParams = API.InternalAccountUpdateParams;
  export type InternalAccountListParams = API.InternalAccountListParams;

  export import Ledgers = API.Ledgers;
  export type Ledger = API.Ledger;
  export import LedgersPage = API.LedgersPage;
  export type LedgerCreateParams = API.LedgerCreateParams;
  export type LedgerUpdateParams = API.LedgerUpdateParams;
  export type LedgerListParams = API.LedgerListParams;

  export import LedgerableEvents = API.LedgerableEvents;
  export type LedgerableEvent = API.LedgerableEvent;
  export type LedgerableEventCreateParams = API.LedgerableEventCreateParams;

  export import LedgerAccountCategories = API.LedgerAccountCategories;
  export type LedgerAccountCategory = API.LedgerAccountCategory;
  export import LedgerAccountCategoriesPage = API.LedgerAccountCategoriesPage;
  export type LedgerAccountCategoryCreateParams = API.LedgerAccountCategoryCreateParams;
  export type LedgerAccountCategoryRetrieveParams = API.LedgerAccountCategoryRetrieveParams;
  export type LedgerAccountCategoryUpdateParams = API.LedgerAccountCategoryUpdateParams;
  export type LedgerAccountCategoryListParams = API.LedgerAccountCategoryListParams;

  export import LedgerAccounts = API.LedgerAccounts;
  export type LedgerAccount = API.LedgerAccount;
  export import LedgerAccountsPage = API.LedgerAccountsPage;
  export type LedgerAccountCreateParams = API.LedgerAccountCreateParams;
  export type LedgerAccountRetrieveParams = API.LedgerAccountRetrieveParams;
  export type LedgerAccountUpdateParams = API.LedgerAccountUpdateParams;
  export type LedgerAccountListParams = API.LedgerAccountListParams;

  export import LedgerAccountBalanceMonitors = API.LedgerAccountBalanceMonitors;
  export type LedgerAccountBalanceMonitor = API.LedgerAccountBalanceMonitor;
  export import LedgerAccountBalanceMonitorsPage = API.LedgerAccountBalanceMonitorsPage;
  export type LedgerAccountBalanceMonitorCreateParams = API.LedgerAccountBalanceMonitorCreateParams;
  export type LedgerAccountBalanceMonitorUpdateParams = API.LedgerAccountBalanceMonitorUpdateParams;
  export type LedgerAccountBalanceMonitorListParams = API.LedgerAccountBalanceMonitorListParams;

  export import LedgerAccountStatements = API.LedgerAccountStatements;
  export type LedgerAccountStatementCreateResponse = API.LedgerAccountStatementCreateResponse;
  export type LedgerAccountStatementRetrieveResponse = API.LedgerAccountStatementRetrieveResponse;
  export type LedgerAccountStatementCreateParams = API.LedgerAccountStatementCreateParams;

  export import LedgerEntries = API.LedgerEntries;
  export type LedgerEntry = API.LedgerEntry;
  export import LedgerEntriesPage = API.LedgerEntriesPage;
  export type LedgerEntryRetrieveParams = API.LedgerEntryRetrieveParams;
  export type LedgerEntryUpdateParams = API.LedgerEntryUpdateParams;
  export type LedgerEntryListParams = API.LedgerEntryListParams;

  export import LedgerEventHandlers = API.LedgerEventHandlers;
  export type LedgerEventHandler = API.LedgerEventHandler;
  export type LedgerEventHandlerVariable = API.LedgerEventHandlerVariable;
  export import LedgerEventHandlersPage = API.LedgerEventHandlersPage;
  export type LedgerEventHandlerCreateParams = API.LedgerEventHandlerCreateParams;
  export type LedgerEventHandlerListParams = API.LedgerEventHandlerListParams;

  export import LedgerTransactions = API.LedgerTransactions;
  export type LedgerTransaction = API.LedgerTransaction;
  export import LedgerTransactionsPage = API.LedgerTransactionsPage;
  export type LedgerTransactionCreateParams = API.LedgerTransactionCreateParams;
  export type LedgerTransactionUpdateParams = API.LedgerTransactionUpdateParams;
  export type LedgerTransactionListParams = API.LedgerTransactionListParams;
  export type LedgerTransactionCreateReversalParams = API.LedgerTransactionCreateReversalParams;

  export import LineItems = API.LineItems;
  export type LineItem = API.LineItem;
  export import LineItemsPage = API.LineItemsPage;
  export type LineItemUpdateParams = API.LineItemUpdateParams;
  export type LineItemListParams = API.LineItemListParams;

  export import PaymentFlows = API.PaymentFlows;
  export type PaymentFlow = API.PaymentFlow;
  export import PaymentFlowsPage = API.PaymentFlowsPage;
  export type PaymentFlowCreateParams = API.PaymentFlowCreateParams;
  export type PaymentFlowUpdateParams = API.PaymentFlowUpdateParams;
  export type PaymentFlowListParams = API.PaymentFlowListParams;

  export import PaymentOrders = API.PaymentOrders;
  export type PaymentOrder = API.PaymentOrder;
  export type PaymentOrderSubtype = API.PaymentOrderSubtype;
  export type PaymentOrderType = API.PaymentOrderType;
  export import PaymentOrdersPage = API.PaymentOrdersPage;
  export type PaymentOrderCreateParams = API.PaymentOrderCreateParams;
  export type PaymentOrderUpdateParams = API.PaymentOrderUpdateParams;
  export type PaymentOrderListParams = API.PaymentOrderListParams;
  export type PaymentOrderCreateAsyncParams = API.PaymentOrderCreateAsyncParams;

  export import PaymentReferences = API.PaymentReferences;
  export type PaymentReference = API.PaymentReference;
  export import PaymentReferencesPage = API.PaymentReferencesPage;
  export type PaymentReferenceListParams = API.PaymentReferenceListParams;

  export import Returns = API.Returns;
  export type ReturnObject = API.ReturnObject;
  export import ReturnObjectsPage = API.ReturnObjectsPage;
  export type ReturnCreateParams = API.ReturnCreateParams;
  export type ReturnListParams = API.ReturnListParams;

  export import Transactions = API.Transactions;
  export type Transaction = API.Transaction;
  export import TransactionsPage = API.TransactionsPage;
  export type TransactionCreateParams = API.TransactionCreateParams;
  export type TransactionUpdateParams = API.TransactionUpdateParams;
  export type TransactionListParams = API.TransactionListParams;

  export import Validations = API.Validations;
  export type RoutingNumberLookupRequest = API.RoutingNumberLookupRequest;
  export type ValidationValidateRoutingNumberParams = API.ValidationValidateRoutingNumberParams;

  export import PaperItems = API.PaperItems;
  export type PaperItem = API.PaperItem;
  export import PaperItemsPage = API.PaperItemsPage;
  export type PaperItemListParams = API.PaperItemListParams;

  export import VirtualAccounts = API.VirtualAccounts;
  export type VirtualAccount = API.VirtualAccount;
  export import VirtualAccountsPage = API.VirtualAccountsPage;
  export type VirtualAccountCreateParams = API.VirtualAccountCreateParams;
  export type VirtualAccountUpdateParams = API.VirtualAccountUpdateParams;
  export type VirtualAccountListParams = API.VirtualAccountListParams;

  export import BulkRequests = API.BulkRequests;
  export type BulkRequest = API.BulkRequest;
  export import BulkRequestsPage = API.BulkRequestsPage;
  export type BulkRequestCreateParams = API.BulkRequestCreateParams;
  export type BulkRequestListParams = API.BulkRequestListParams;

  export import BulkResults = API.BulkResults;
  export type BulkResult = API.BulkResult;
  export import BulkResultsPage = API.BulkResultsPage;
  export type BulkResultListParams = API.BulkResultListParams;

  export import LedgerAccountSettlements = API.LedgerAccountSettlements;
  export type LedgerAccountSettlement = API.LedgerAccountSettlement;
  export import LedgerAccountSettlementsPage = API.LedgerAccountSettlementsPage;
  export type LedgerAccountSettlementCreateParams = API.LedgerAccountSettlementCreateParams;
  export type LedgerAccountSettlementUpdateParams = API.LedgerAccountSettlementUpdateParams;
  export type LedgerAccountSettlementListParams = API.LedgerAccountSettlementListParams;

  export import ForeignExchangeQuotes = API.ForeignExchangeQuotes;
  export type ForeignExchangeQuote = API.ForeignExchangeQuote;
  export import ForeignExchangeQuotesPage = API.ForeignExchangeQuotesPage;
  export type ForeignExchangeQuoteCreateParams = API.ForeignExchangeQuoteCreateParams;
  export type ForeignExchangeQuoteListParams = API.ForeignExchangeQuoteListParams;

  export import ConnectionLegalEntities = API.ConnectionLegalEntities;
  export type ConnectionLegalEntity = API.ConnectionLegalEntity;
  export import ConnectionLegalEntitiesPage = API.ConnectionLegalEntitiesPage;
  export type ConnectionLegalEntityCreateParams = API.ConnectionLegalEntityCreateParams;
  export type ConnectionLegalEntityUpdateParams = API.ConnectionLegalEntityUpdateParams;
  export type ConnectionLegalEntityListParams = API.ConnectionLegalEntityListParams;

  export import LegalEntities = API.LegalEntities;
  export type LegalEntity = API.LegalEntity;
  export import LegalEntitiesPage = API.LegalEntitiesPage;
  export type LegalEntityCreateParams = API.LegalEntityCreateParams;
  export type LegalEntityUpdateParams = API.LegalEntityUpdateParams;
  export type LegalEntityListParams = API.LegalEntityListParams;

  export import LegalEntityAssociations = API.LegalEntityAssociations;
  export type LegalEntityAssociation = API.LegalEntityAssociation;
  export type LegalEntityAssociationCreateParams = API.LegalEntityAssociationCreateParams;

  export type AccountsType = API.AccountsType;
  export type AsyncResponse = API.AsyncResponse;
  export type Currency = API.Currency;
  export type TransactionDirection = API.TransactionDirection;
}

export default ModernTreasury;
