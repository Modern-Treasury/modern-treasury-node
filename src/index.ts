// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type PageParams, PageResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import * as TopLevelAPI from './resources/top-level';
import { PingResponse } from './resources/top-level';
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
  AccountDetailListParams,
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
  IncomingPaymentDetail,
  IncomingPaymentDetailCreateAsyncParams,
  IncomingPaymentDetailListParams,
  IncomingPaymentDetailUpdateParams,
  IncomingPaymentDetails,
  IncomingPaymentDetailsPage,
} from './resources/incoming-payment-details';
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
  LedgerAccountCategoryCreateParams,
  LedgerAccountCategoryListParams,
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
  LedgerEventHandler,
  LedgerEventHandlerCreateParams,
  LedgerEventHandlerListParams,
  LedgerEventHandlerVariable,
  LedgerEventHandlers,
  LedgerEventHandlersPage,
} from './resources/ledger-event-handlers';
import {
  LedgerableEvent,
  LedgerableEventCreateParams,
  LedgerableEvents,
} from './resources/ledgerable-events';
import {
  Ledger,
  LedgerCreateParams,
  LedgerListParams,
  LedgerUpdateParams,
  Ledgers,
  LedgersPage,
} from './resources/ledgers';
import {
  BankSettings,
  LegalEntities,
  LegalEntitiesPage,
  LegalEntity,
  LegalEntityCreateParams,
  LegalEntityListParams,
  LegalEntityUpdateParams,
  WealthAndEmploymentDetails,
} from './resources/legal-entities';
import {
  LegalEntityAssociation,
  LegalEntityAssociationCreateParams,
  LegalEntityAssociations,
} from './resources/legal-entity-associations';
import {
  LineItem,
  LineItemListParams,
  LineItemUpdateParams,
  LineItems,
  LineItemsPage,
} from './resources/line-items';
import { PaperItem, PaperItemListParams, PaperItems, PaperItemsPage } from './resources/paper-items';
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
  RoutingDetailListParams,
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
  InternalAccountUpdateParams,
  InternalAccounts,
  InternalAccountsPage,
} from './resources/internal-accounts/internal-accounts';
import {
  Invoice,
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
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

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
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
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

ModernTreasury.Connections = Connections;
ModernTreasury.ConnectionsPage = ConnectionsPage;
ModernTreasury.Counterparties = Counterparties;
ModernTreasury.CounterpartiesPage = CounterpartiesPage;
ModernTreasury.Events = Events;
ModernTreasury.EventsPage = EventsPage;
ModernTreasury.ExpectedPayments = ExpectedPayments;
ModernTreasury.ExpectedPaymentsPage = ExpectedPaymentsPage;
ModernTreasury.ExternalAccounts = ExternalAccounts;
ModernTreasury.ExternalAccountsPage = ExternalAccountsPage;
ModernTreasury.IncomingPaymentDetails = IncomingPaymentDetails;
ModernTreasury.IncomingPaymentDetailsPage = IncomingPaymentDetailsPage;
ModernTreasury.Invoices = Invoices;
ModernTreasury.InvoicesPage = InvoicesPage;
ModernTreasury.Documents = Documents;
ModernTreasury.DocumentsPage = DocumentsPage;
ModernTreasury.AccountCollectionFlows = AccountCollectionFlows;
ModernTreasury.AccountCollectionFlowsPage = AccountCollectionFlowsPage;
ModernTreasury.AccountDetails = AccountDetails;
ModernTreasury.AccountDetailsPage = AccountDetailsPage;
ModernTreasury.RoutingDetails = RoutingDetails;
ModernTreasury.RoutingDetailsPage = RoutingDetailsPage;
ModernTreasury.InternalAccounts = InternalAccounts;
ModernTreasury.InternalAccountsPage = InternalAccountsPage;
ModernTreasury.Ledgers = Ledgers;
ModernTreasury.LedgersPage = LedgersPage;
ModernTreasury.LedgerableEvents = LedgerableEvents;
ModernTreasury.LedgerAccountCategories = LedgerAccountCategories;
ModernTreasury.LedgerAccountCategoriesPage = LedgerAccountCategoriesPage;
ModernTreasury.LedgerAccounts = LedgerAccounts;
ModernTreasury.LedgerAccountsPage = LedgerAccountsPage;
ModernTreasury.LedgerAccountBalanceMonitors = LedgerAccountBalanceMonitors;
ModernTreasury.LedgerAccountBalanceMonitorsPage = LedgerAccountBalanceMonitorsPage;
ModernTreasury.LedgerAccountStatements = LedgerAccountStatements;
ModernTreasury.LedgerEntries = LedgerEntries;
ModernTreasury.LedgerEntriesPage = LedgerEntriesPage;
ModernTreasury.LedgerEventHandlers = LedgerEventHandlers;
ModernTreasury.LedgerEventHandlersPage = LedgerEventHandlersPage;
ModernTreasury.LedgerTransactions = LedgerTransactions;
ModernTreasury.LedgerTransactionsPage = LedgerTransactionsPage;
ModernTreasury.LineItems = LineItems;
ModernTreasury.LineItemsPage = LineItemsPage;
ModernTreasury.PaymentFlows = PaymentFlows;
ModernTreasury.PaymentFlowsPage = PaymentFlowsPage;
ModernTreasury.PaymentOrders = PaymentOrders;
ModernTreasury.PaymentOrdersPage = PaymentOrdersPage;
ModernTreasury.PaymentReferences = PaymentReferences;
ModernTreasury.PaymentReferencesPage = PaymentReferencesPage;
ModernTreasury.Returns = Returns;
ModernTreasury.ReturnObjectsPage = ReturnObjectsPage;
ModernTreasury.Transactions = Transactions;
ModernTreasury.TransactionsPage = TransactionsPage;
ModernTreasury.Validations = Validations;
ModernTreasury.PaperItems = PaperItems;
ModernTreasury.PaperItemsPage = PaperItemsPage;
ModernTreasury.VirtualAccounts = VirtualAccounts;
ModernTreasury.VirtualAccountsPage = VirtualAccountsPage;
ModernTreasury.BulkRequests = BulkRequests;
ModernTreasury.BulkRequestsPage = BulkRequestsPage;
ModernTreasury.BulkResults = BulkResults;
ModernTreasury.BulkResultsPage = BulkResultsPage;
ModernTreasury.LedgerAccountSettlements = LedgerAccountSettlements;
ModernTreasury.LedgerAccountSettlementsPage = LedgerAccountSettlementsPage;
ModernTreasury.ForeignExchangeQuotes = ForeignExchangeQuotes;
ModernTreasury.ForeignExchangeQuotesPage = ForeignExchangeQuotesPage;
ModernTreasury.ConnectionLegalEntities = ConnectionLegalEntities;
ModernTreasury.ConnectionLegalEntitiesPage = ConnectionLegalEntitiesPage;
ModernTreasury.LegalEntities = LegalEntities;
ModernTreasury.LegalEntitiesPage = LegalEntitiesPage;
ModernTreasury.LegalEntityAssociations = LegalEntityAssociations;
export declare namespace ModernTreasury {
  export type RequestOptions = Core.RequestOptions;

  export import Page = Pagination.Page;
  export { type PageParams as PageParams, type PageResponse as PageResponse };

  export { type PingResponse as PingResponse };

  export {
    Connections as Connections,
    type Connection as Connection,
    ConnectionsPage as ConnectionsPage,
    type ConnectionListParams as ConnectionListParams,
  };

  export {
    Counterparties as Counterparties,
    type Counterparty as Counterparty,
    type CounterpartyCollectAccountResponse as CounterpartyCollectAccountResponse,
    CounterpartiesPage as CounterpartiesPage,
    type CounterpartyCreateParams as CounterpartyCreateParams,
    type CounterpartyUpdateParams as CounterpartyUpdateParams,
    type CounterpartyListParams as CounterpartyListParams,
    type CounterpartyCollectAccountParams as CounterpartyCollectAccountParams,
  };

  export {
    Events as Events,
    type Event as Event,
    EventsPage as EventsPage,
    type EventListParams as EventListParams,
  };

  export {
    ExpectedPayments as ExpectedPayments,
    type ExpectedPayment as ExpectedPayment,
    type ExpectedPaymentType as ExpectedPaymentType,
    type ReconciliationRule as ReconciliationRule,
    ExpectedPaymentsPage as ExpectedPaymentsPage,
    type ExpectedPaymentCreateParams as ExpectedPaymentCreateParams,
    type ExpectedPaymentUpdateParams as ExpectedPaymentUpdateParams,
    type ExpectedPaymentListParams as ExpectedPaymentListParams,
  };

  export {
    ExternalAccounts as ExternalAccounts,
    type ExternalAccount as ExternalAccount,
    type ExternalAccountType as ExternalAccountType,
    type ExternalAccountVerifyResponse as ExternalAccountVerifyResponse,
    ExternalAccountsPage as ExternalAccountsPage,
    type ExternalAccountCreateParams as ExternalAccountCreateParams,
    type ExternalAccountUpdateParams as ExternalAccountUpdateParams,
    type ExternalAccountListParams as ExternalAccountListParams,
    type ExternalAccountCompleteVerificationParams as ExternalAccountCompleteVerificationParams,
    type ExternalAccountVerifyParams as ExternalAccountVerifyParams,
  };

  export {
    IncomingPaymentDetails as IncomingPaymentDetails,
    type IncomingPaymentDetail as IncomingPaymentDetail,
    IncomingPaymentDetailsPage as IncomingPaymentDetailsPage,
    type IncomingPaymentDetailUpdateParams as IncomingPaymentDetailUpdateParams,
    type IncomingPaymentDetailListParams as IncomingPaymentDetailListParams,
    type IncomingPaymentDetailCreateAsyncParams as IncomingPaymentDetailCreateAsyncParams,
  };

  export {
    Invoices as Invoices,
    type Invoice as Invoice,
    InvoicesPage as InvoicesPage,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
  };

  export {
    Documents as Documents,
    type Document as Document,
    DocumentsPage as DocumentsPage,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentListParams as DocumentListParams,
  };

  export {
    AccountCollectionFlows as AccountCollectionFlows,
    type AccountCollectionFlow as AccountCollectionFlow,
    AccountCollectionFlowsPage as AccountCollectionFlowsPage,
    type AccountCollectionFlowCreateParams as AccountCollectionFlowCreateParams,
    type AccountCollectionFlowUpdateParams as AccountCollectionFlowUpdateParams,
    type AccountCollectionFlowListParams as AccountCollectionFlowListParams,
  };

  export {
    AccountDetails as AccountDetails,
    type AccountDetail as AccountDetail,
    AccountDetailsPage as AccountDetailsPage,
    type AccountDetailCreateParams as AccountDetailCreateParams,
    type AccountDetailListParams as AccountDetailListParams,
  };

  export {
    RoutingDetails as RoutingDetails,
    type RoutingDetail as RoutingDetail,
    RoutingDetailsPage as RoutingDetailsPage,
    type RoutingDetailCreateParams as RoutingDetailCreateParams,
    type RoutingDetailListParams as RoutingDetailListParams,
  };

  export {
    InternalAccounts as InternalAccounts,
    type InternalAccount as InternalAccount,
    InternalAccountsPage as InternalAccountsPage,
    type InternalAccountCreateParams as InternalAccountCreateParams,
    type InternalAccountUpdateParams as InternalAccountUpdateParams,
    type InternalAccountListParams as InternalAccountListParams,
  };

  export {
    Ledgers as Ledgers,
    type Ledger as Ledger,
    LedgersPage as LedgersPage,
    type LedgerCreateParams as LedgerCreateParams,
    type LedgerUpdateParams as LedgerUpdateParams,
    type LedgerListParams as LedgerListParams,
  };

  export {
    LedgerableEvents as LedgerableEvents,
    type LedgerableEvent as LedgerableEvent,
    type LedgerableEventCreateParams as LedgerableEventCreateParams,
  };

  export {
    LedgerAccountCategories as LedgerAccountCategories,
    type LedgerAccountCategory as LedgerAccountCategory,
    LedgerAccountCategoriesPage as LedgerAccountCategoriesPage,
    type LedgerAccountCategoryCreateParams as LedgerAccountCategoryCreateParams,
    type LedgerAccountCategoryRetrieveParams as LedgerAccountCategoryRetrieveParams,
    type LedgerAccountCategoryUpdateParams as LedgerAccountCategoryUpdateParams,
    type LedgerAccountCategoryListParams as LedgerAccountCategoryListParams,
  };

  export {
    LedgerAccounts as LedgerAccounts,
    type LedgerAccount as LedgerAccount,
    LedgerAccountsPage as LedgerAccountsPage,
    type LedgerAccountCreateParams as LedgerAccountCreateParams,
    type LedgerAccountRetrieveParams as LedgerAccountRetrieveParams,
    type LedgerAccountUpdateParams as LedgerAccountUpdateParams,
    type LedgerAccountListParams as LedgerAccountListParams,
  };

  export {
    LedgerAccountBalanceMonitors as LedgerAccountBalanceMonitors,
    type LedgerAccountBalanceMonitor as LedgerAccountBalanceMonitor,
    LedgerAccountBalanceMonitorsPage as LedgerAccountBalanceMonitorsPage,
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
    LedgerEntriesPage as LedgerEntriesPage,
    type LedgerEntryRetrieveParams as LedgerEntryRetrieveParams,
    type LedgerEntryUpdateParams as LedgerEntryUpdateParams,
    type LedgerEntryListParams as LedgerEntryListParams,
  };

  export {
    LedgerEventHandlers as LedgerEventHandlers,
    type LedgerEventHandler as LedgerEventHandler,
    type LedgerEventHandlerVariable as LedgerEventHandlerVariable,
    LedgerEventHandlersPage as LedgerEventHandlersPage,
    type LedgerEventHandlerCreateParams as LedgerEventHandlerCreateParams,
    type LedgerEventHandlerListParams as LedgerEventHandlerListParams,
  };

  export {
    LedgerTransactions as LedgerTransactions,
    type LedgerTransaction as LedgerTransaction,
    LedgerTransactionsPage as LedgerTransactionsPage,
    type LedgerTransactionCreateParams as LedgerTransactionCreateParams,
    type LedgerTransactionUpdateParams as LedgerTransactionUpdateParams,
    type LedgerTransactionListParams as LedgerTransactionListParams,
    type LedgerTransactionCreatePartialPostParams as LedgerTransactionCreatePartialPostParams,
    type LedgerTransactionCreateReversalParams as LedgerTransactionCreateReversalParams,
  };

  export {
    LineItems as LineItems,
    type LineItem as LineItem,
    LineItemsPage as LineItemsPage,
    type LineItemUpdateParams as LineItemUpdateParams,
    type LineItemListParams as LineItemListParams,
  };

  export {
    PaymentFlows as PaymentFlows,
    type PaymentFlow as PaymentFlow,
    PaymentFlowsPage as PaymentFlowsPage,
    type PaymentFlowCreateParams as PaymentFlowCreateParams,
    type PaymentFlowUpdateParams as PaymentFlowUpdateParams,
    type PaymentFlowListParams as PaymentFlowListParams,
  };

  export {
    PaymentOrders as PaymentOrders,
    type PaymentOrder as PaymentOrder,
    type PaymentOrderSubtype as PaymentOrderSubtype,
    type PaymentOrderType as PaymentOrderType,
    PaymentOrdersPage as PaymentOrdersPage,
    type PaymentOrderCreateParams as PaymentOrderCreateParams,
    type PaymentOrderUpdateParams as PaymentOrderUpdateParams,
    type PaymentOrderListParams as PaymentOrderListParams,
    type PaymentOrderCreateAsyncParams as PaymentOrderCreateAsyncParams,
  };

  export {
    PaymentReferences as PaymentReferences,
    type PaymentReference as PaymentReference,
    PaymentReferencesPage as PaymentReferencesPage,
    type PaymentReferenceListParams as PaymentReferenceListParams,
  };

  export {
    Returns as Returns,
    type ReturnObject as ReturnObject,
    ReturnObjectsPage as ReturnObjectsPage,
    type ReturnCreateParams as ReturnCreateParams,
    type ReturnListParams as ReturnListParams,
  };

  export {
    Transactions as Transactions,
    type Transaction as Transaction,
    TransactionsPage as TransactionsPage,
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
    PaperItems as PaperItems,
    type PaperItem as PaperItem,
    PaperItemsPage as PaperItemsPage,
    type PaperItemListParams as PaperItemListParams,
  };

  export {
    VirtualAccounts as VirtualAccounts,
    type VirtualAccount as VirtualAccount,
    VirtualAccountsPage as VirtualAccountsPage,
    type VirtualAccountCreateParams as VirtualAccountCreateParams,
    type VirtualAccountUpdateParams as VirtualAccountUpdateParams,
    type VirtualAccountListParams as VirtualAccountListParams,
  };

  export {
    BulkRequests as BulkRequests,
    type BulkRequest as BulkRequest,
    BulkRequestsPage as BulkRequestsPage,
    type BulkRequestCreateParams as BulkRequestCreateParams,
    type BulkRequestListParams as BulkRequestListParams,
  };

  export {
    BulkResults as BulkResults,
    type BulkResult as BulkResult,
    BulkResultsPage as BulkResultsPage,
    type BulkResultListParams as BulkResultListParams,
  };

  export {
    LedgerAccountSettlements as LedgerAccountSettlements,
    type LedgerAccountSettlement as LedgerAccountSettlement,
    LedgerAccountSettlementsPage as LedgerAccountSettlementsPage,
    type LedgerAccountSettlementCreateParams as LedgerAccountSettlementCreateParams,
    type LedgerAccountSettlementUpdateParams as LedgerAccountSettlementUpdateParams,
    type LedgerAccountSettlementListParams as LedgerAccountSettlementListParams,
  };

  export {
    ForeignExchangeQuotes as ForeignExchangeQuotes,
    type ForeignExchangeQuote as ForeignExchangeQuote,
    ForeignExchangeQuotesPage as ForeignExchangeQuotesPage,
    type ForeignExchangeQuoteCreateParams as ForeignExchangeQuoteCreateParams,
    type ForeignExchangeQuoteListParams as ForeignExchangeQuoteListParams,
  };

  export {
    ConnectionLegalEntities as ConnectionLegalEntities,
    type ConnectionLegalEntity as ConnectionLegalEntity,
    ConnectionLegalEntitiesPage as ConnectionLegalEntitiesPage,
    type ConnectionLegalEntityCreateParams as ConnectionLegalEntityCreateParams,
    type ConnectionLegalEntityUpdateParams as ConnectionLegalEntityUpdateParams,
    type ConnectionLegalEntityListParams as ConnectionLegalEntityListParams,
  };

  export {
    LegalEntities as LegalEntities,
    type BankSettings as BankSettings,
    type LegalEntity as LegalEntity,
    type WealthAndEmploymentDetails as WealthAndEmploymentDetails,
    LegalEntitiesPage as LegalEntitiesPage,
    type LegalEntityCreateParams as LegalEntityCreateParams,
    type LegalEntityUpdateParams as LegalEntityUpdateParams,
    type LegalEntityListParams as LegalEntityListParams,
  };

  export {
    LegalEntityAssociations as LegalEntityAssociations,
    type LegalEntityAssociation as LegalEntityAssociation,
    type LegalEntityAssociationCreateParams as LegalEntityAssociationCreateParams,
  };

  export type AccountsType = API.AccountsType;
  export type AsyncResponse = API.AsyncResponse;
  export type Currency = API.Currency;
  export type LegalEntityComplianceDetail = API.LegalEntityComplianceDetail;
  export type LegalEntityIndustryClassification = API.LegalEntityIndustryClassification;
  export type TransactionDirection = API.TransactionDirection;
}

export { toFile, fileFromPath } from './uploads';
export {
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
} from './error';

export default ModernTreasury;
