// File generated from our OpenAPI spec by Stainless.

import qs from 'qs';
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources';
import type { Agent } from 'http';
import * as FileFromPath from 'formdata-node/file-from-path';

type Config = {
  /**
   * Defaults to process.env["MODERN_TREASURY_API_KEY"].
   */
  apiKey?: string;
  baseURL?: string;
  timeout?: number;
  httpAgent?: Agent;
  organizationId?: string | null;
  webhookKey?: string | null;
};

/** Instantiate the API Client. */
export class ModernTreasury extends Core.APIClient {
  apiKey: string;
  organizationId: string;
  webhookKey?: string | null;

  constructor(config: Config) {
    const options: Config = {
      apiKey: process.env['MODERN_TREASURY_API_KEY'] || '',
      baseURL: 'https://app.moderntreasury.com',
      ...config,
    };

    if (!options.apiKey && options.apiKey !== null) {
      throw new Error(
        "The MODERN_TREASURY_API_KEY environment variable is missing or empty; either provide it, or instantiate the ModernTreasury client with an apiKey option, like new ModernTreasury({ apiKey: 'my api key' }).",
      );
    }

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout,
      httpAgent: options.httpAgent,
    });
    this.apiKey = options.apiKey;
    this.idempotencyHeader = 'Idempotency-Key';

    const organizationId = config.organizationId || process.env['MODERN_TREASURY_ORGANIZATION_ID'];
    if (!organizationId) {
      throw new Error(
        "The MODERN_TREASURY_ORGANIZATION_ID environment variable is missing or empty; either provide it, or instantiate the ModernTreasury client with an organizationId option, like new ModernTreasury({ organizationId: 'my-organization-ID' }).",
      );
    }
    this.organizationId = organizationId;
    this.webhookKey = config.webhookKey || process.env['MODERN_TREASURY_WEBHOOK_KEY'] || null;
  }

  connections: API.Connections = new API.Connections(this);
  counterparties: API.Counterparties = new API.Counterparties(this);
  events: API.Events = new API.Events(this);
  expectedPayments: API.ExpectedPayments = new API.ExpectedPayments(this);
  externalAccounts: API.ExternalAccounts = new API.ExternalAccounts(this);
  incomingPaymentDetails: API.IncomingPaymentDetails = new API.IncomingPaymentDetails(this);
  documents: API.Documents = new API.Documents(this);
  accountCollectionFlows: API.AccountCollectionFlows = new API.AccountCollectionFlows(this);
  accountDetails: API.AccountDetails = new API.AccountDetails(this);
  routingDetails: API.RoutingDetails = new API.RoutingDetails(this);
  internalAccounts: API.InternalAccounts = new API.InternalAccounts(this);
  ledgers: API.Ledgers = new API.Ledgers(this);
  ledgerAccountCategories: API.LedgerAccountCategories = new API.LedgerAccountCategories(this);
  ledgerAccounts: API.LedgerAccounts = new API.LedgerAccounts(this);
  ledgerAccountPayouts: API.LedgerAccountPayouts = new API.LedgerAccountPayouts(this);
  ledgerEntries: API.LedgerEntries = new API.LedgerEntries(this);
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

  /**
   * A test endpoint often used to confirm credentials and headers are being passed
   * in correctly.
   */
  ping(options?: Core.RequestOptions): Promise<Core.APIResponse<ModernTreasury.PingResponse>> {
    return this.get('/api/ping', options);
  }

  protected override authHeaders(): Core.Headers {
    const credentials = `${this.organizationId}:${this.apiKey}`;
    const Authorization = `Basic ${Buffer.from(credentials).toString('base64')}`;
    return { Authorization };
  }

  protected override qsOptions(): qs.IStringifyOptions {
    return { arrayFormat: 'repeat' };
  }

  static APIError = Core.APIError;

  static APIConnectionError = Core.APIConnectionError;
  static APIConnectionTimeoutError = Core.APIConnectionTimeoutError;

  static BadRequestError = Core.BadRequestError;
  static AuthenticationError = Core.AuthenticationError;
  static PermissionDeniedError = Core.PermissionDeniedError;
  static NotFoundError = Core.NotFoundError;
  static ConflictError = Core.ConflictError;
  static UnprocessableEntityError = Core.UnprocessableEntityError;
  static RateLimitError = Core.RateLimitError;
  static InternalServerError = Core.InternalServerError;
}

export const {
  APIError,

  APIConnectionError,
  APIConnectionTimeoutError,

  BadRequestError,
  AuthenticationError,
  PermissionDeniedError,
  NotFoundError,
  ConflictError,
  UnprocessableEntityError,
  RateLimitError,
  InternalServerError,
} = ModernTreasury;

export import fileFromPath = FileFromPath.fileFromPath;

export namespace ModernTreasury {
  // Helper functions
  export import fileFromPath = FileFromPath.fileFromPath;

  export import Page = Pagination.Page;
  export import PageParams = Pagination.PageParams;
  export import PageResponse = Pagination.PageResponse;

  export import PingResponse = API.PingResponse;

  export import Connection = API.Connection;
  export import ConnectionsPage = API.ConnectionsPage;
  export import ConnectionListParams = API.ConnectionListParams;

  export import Counterparty = API.Counterparty;
  export import CounterpartyCollectAccountResponse = API.CounterpartyCollectAccountResponse;
  export import CounterpartiesPage = API.CounterpartiesPage;
  export import CounterpartyCreateParams = API.CounterpartyCreateParams;
  export import CounterpartyUpdateParams = API.CounterpartyUpdateParams;
  export import CounterpartyListParams = API.CounterpartyListParams;
  export import CounterpartyCollectAccountParams = API.CounterpartyCollectAccountParams;

  export import Event = API.Event;
  export import EventsPage = API.EventsPage;
  export import EventListParams = API.EventListParams;

  export import ExpectedPayment = API.ExpectedPayment;
  export import ExpectedPaymentType = API.ExpectedPaymentType;
  export import ExpectedPaymentsPage = API.ExpectedPaymentsPage;
  export import ExpectedPaymentCreateParams = API.ExpectedPaymentCreateParams;
  export import ExpectedPaymentUpdateParams = API.ExpectedPaymentUpdateParams;
  export import ExpectedPaymentListParams = API.ExpectedPaymentListParams;

  export import ExternalAccount = API.ExternalAccount;
  export import ExternalAccountType = API.ExternalAccountType;
  export import ExternalAccountsPage = API.ExternalAccountsPage;
  export import ExternalAccountCreateParams = API.ExternalAccountCreateParams;
  export import ExternalAccountUpdateParams = API.ExternalAccountUpdateParams;
  export import ExternalAccountListParams = API.ExternalAccountListParams;
  export import ExternalAccountCompleteVerificationParams = API.ExternalAccountCompleteVerificationParams;
  export import ExternalAccountVerifyParams = API.ExternalAccountVerifyParams;

  export import IncomingPaymentDetail = API.IncomingPaymentDetail;
  export import IncomingPaymentDetailsPage = API.IncomingPaymentDetailsPage;
  export import IncomingPaymentDetailUpdateParams = API.IncomingPaymentDetailUpdateParams;
  export import IncomingPaymentDetailListParams = API.IncomingPaymentDetailListParams;
  export import IncomingPaymentDetailCreateAsyncParams = API.IncomingPaymentDetailCreateAsyncParams;

  export import Document = API.Document;
  export import DocumentsPage = API.DocumentsPage;
  export import DocumentCreateParams = API.DocumentCreateParams;
  export import DocumentListParams = API.DocumentListParams;

  export import AcccountConnectionFlow = API.AcccountConnectionFlow;
  export import AcccountConnectionFlowsPage = API.AcccountConnectionFlowsPage;
  export import AccountCollectionFlowCreateParams = API.AccountCollectionFlowCreateParams;
  export import AccountCollectionFlowUpdateParams = API.AccountCollectionFlowUpdateParams;
  export import AccountCollectionFlowListParams = API.AccountCollectionFlowListParams;

  export import AccountDetail = API.AccountDetail;
  export import AccountDetailsPage = API.AccountDetailsPage;
  export import AccountDetailCreateParams = API.AccountDetailCreateParams;
  export import AccountDetailListParams = API.AccountDetailListParams;

  export import RoutingDetail = API.RoutingDetail;
  export import RoutingDetailsPage = API.RoutingDetailsPage;
  export import RoutingDetailCreateParams = API.RoutingDetailCreateParams;
  export import RoutingDetailListParams = API.RoutingDetailListParams;

  export import InternalAccount = API.InternalAccount;
  export import InternalAccountsPage = API.InternalAccountsPage;
  export import InternalAccountCreateParams = API.InternalAccountCreateParams;
  export import InternalAccountUpdateParams = API.InternalAccountUpdateParams;
  export import InternalAccountListParams = API.InternalAccountListParams;

  export import Ledger = API.Ledger;
  export import LedgersPage = API.LedgersPage;
  export import LedgerCreateParams = API.LedgerCreateParams;
  export import LedgerUpdateParams = API.LedgerUpdateParams;
  export import LedgerListParams = API.LedgerListParams;

  export import LedgerAccountCategory = API.LedgerAccountCategory;
  export import LedgerAccountCategoriesPage = API.LedgerAccountCategoriesPage;
  export import LedgerAccountCategoryCreateParams = API.LedgerAccountCategoryCreateParams;
  export import LedgerAccountCategoryRetrieveParams = API.LedgerAccountCategoryRetrieveParams;
  export import LedgerAccountCategoryUpdateParams = API.LedgerAccountCategoryUpdateParams;
  export import LedgerAccountCategoryListParams = API.LedgerAccountCategoryListParams;

  export import LedgerAccount = API.LedgerAccount;
  export import LedgerAccountsPage = API.LedgerAccountsPage;
  export import LedgerAccountCreateParams = API.LedgerAccountCreateParams;
  export import LedgerAccountRetrieveParams = API.LedgerAccountRetrieveParams;
  export import LedgerAccountUpdateParams = API.LedgerAccountUpdateParams;
  export import LedgerAccountListParams = API.LedgerAccountListParams;

  export import LedgerAccountPayout = API.LedgerAccountPayout;
  export import LedgerAccountPayoutsPage = API.LedgerAccountPayoutsPage;
  export import LedgerAccountPayoutCreateParams = API.LedgerAccountPayoutCreateParams;
  export import LedgerAccountPayoutUpdateParams = API.LedgerAccountPayoutUpdateParams;
  export import LedgerAccountPayoutListParams = API.LedgerAccountPayoutListParams;

  export import LedgerEntry = API.LedgerEntry;
  export import LedgerEntriesPage = API.LedgerEntriesPage;
  export import LedgerEntryListParams = API.LedgerEntryListParams;

  export import LedgerTransaction = API.LedgerTransaction;
  export import LedgerTransactionsPage = API.LedgerTransactionsPage;
  export import LedgerTransactionCreateParams = API.LedgerTransactionCreateParams;
  export import LedgerTransactionUpdateParams = API.LedgerTransactionUpdateParams;
  export import LedgerTransactionListParams = API.LedgerTransactionListParams;

  export import LineItem = API.LineItem;
  export import LineItemsPage = API.LineItemsPage;
  export import LineItemUpdateParams = API.LineItemUpdateParams;
  export import LineItemListParams = API.LineItemListParams;

  export import PaymentFlow = API.PaymentFlow;
  export import PaymentFlowsPage = API.PaymentFlowsPage;
  export import PaymentFlowCreateParams = API.PaymentFlowCreateParams;
  export import PaymentFlowUpdateParams = API.PaymentFlowUpdateParams;
  export import PaymentFlowListParams = API.PaymentFlowListParams;

  export import PaymentOrder = API.PaymentOrder;
  export import PaymentOrderSubtype = API.PaymentOrderSubtype;
  export import PaymentOrderType = API.PaymentOrderType;
  export import PaymentOrdersPage = API.PaymentOrdersPage;
  export import PaymentOrderCreateParams = API.PaymentOrderCreateParams;
  export import PaymentOrderUpdateParams = API.PaymentOrderUpdateParams;
  export import PaymentOrderListParams = API.PaymentOrderListParams;
  export import PaymentOrderCreateAsyncParams = API.PaymentOrderCreateAsyncParams;

  export import PaymentReference = API.PaymentReference;
  export import PaymentReferencesPage = API.PaymentReferencesPage;
  export import PaymentReferenceListParams = API.PaymentReferenceListParams;

  export import ReturnObject = API.ReturnObject;
  export import ReturnObjectsPage = API.ReturnObjectsPage;
  export import ReturnCreateParams = API.ReturnCreateParams;
  export import ReturnListParams = API.ReturnListParams;

  export import Transaction = API.Transaction;
  export import TransactionsPage = API.TransactionsPage;
  export import TransactionUpdateParams = API.TransactionUpdateParams;
  export import TransactionListParams = API.TransactionListParams;

  export import RoutingNumberLookupRequest = API.RoutingNumberLookupRequest;
  export import ValidationValidateRoutingNumberParams = API.ValidationValidateRoutingNumberParams;

  export import PaperItem = API.PaperItem;
  export import PaperItemsPage = API.PaperItemsPage;
  export import PaperItemListParams = API.PaperItemListParams;

  export import VirtualAccount = API.VirtualAccount;
  export import VirtualAccountsPage = API.VirtualAccountsPage;
  export import VirtualAccountCreateParams = API.VirtualAccountCreateParams;
  export import VirtualAccountUpdateParams = API.VirtualAccountUpdateParams;
  export import VirtualAccountListParams = API.VirtualAccountListParams;

  export import AccountsType = API.AccountsType;
  export import AsyncResponse = API.AsyncResponse;
  export import Currency = API.Currency;
}

exports = module.exports = ModernTreasury;
export default ModernTreasury;
