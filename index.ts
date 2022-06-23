// File generated from our OpenAPI spec by Stainless.
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources';

import type { Agent } from 'http';

type Config = {
  /**
   * Defaults to to process.env["MODERN_TREASURY_API_KEY"]. Set it to null if you want to send unauthenticated requests.
   */
  apiKey?: string | null;
  baseURL?: string;
  timeout?: number;
  httpAgent?: Agent;
  organizationId?: string | null;
  webhookKey?: string | null;
};

export class ModernTreasury extends Core.APIClient {
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
        "The MODERN_TREASURY_API_KEY environment variable is missing or empty; either provide it, or instantiate the ModernTreasury client with an apiKey option, like new ModernTreasury({apiKey: 'my api key'}).",
      );
    }

    super({
      apiKey: options.apiKey,
      baseURL: options.baseURL!,
      timeout: options.timeout,
      httpAgent: options.httpAgent,
    });
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

  counterparties: API.Counterparties = new API.Counterparties(this);
  events: API.Events = new API.Events(this);
  expectedPayments: API.ExpectedPayments = new API.ExpectedPayments(this);
  externalAccounts: API.ExternalAccounts = new API.ExternalAccounts(this);
  incomingPaymentDetails: API.IncomingPaymentDetails = new API.IncomingPaymentDetails(this);
  documents: API.Documents = new API.Documents(this);
  internalAccounts: API.InternalAccounts = new API.InternalAccounts(this);
  lineItems: API.LineItems = new API.LineItems(this);
  paymentOrders: API.PaymentOrders = new API.PaymentOrders(this);
  returns: API.Returns = new API.Returns(this);
  transactions: API.Transactions = new API.Transactions(this);
  validations: API.Validations = new API.Validations(this);
  paperItems: API.PaperItems = new API.PaperItems(this);
  webhooks: API.Webhooks = new API.Webhooks(this);

  /**
   * A test endpoint often used to confirm credentials and headers are being passed
   * in correctly.
   */
  ping(options?: Core.RequestOptions): Promise<Core.APIResponse<ModernTreasury.PingResponse>> {
    return this.get('/api/ping', options);
  }

  protected override authHeaders(): Core.Headers {
    const creds = `${this.organizationId}:${this.apiKey}`;
    const Authorization = `Basic ${Buffer.from(creds).toString('base64')}`;
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

export namespace ModernTreasury {
  export import Page = Pagination.Page;
  export import PageParams = Pagination.PageParams;
  export import PageResponse = Pagination.PageResponse;

  export import PingResponse = API.PingResponse;

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
  export import ExpectedPaymentsPage = API.ExpectedPaymentsPage;
  export import ExpectedPaymentCreateParams = API.ExpectedPaymentCreateParams;
  export import ExpectedPaymentUpdateParams = API.ExpectedPaymentUpdateParams;
  export import ExpectedPaymentListParams = API.ExpectedPaymentListParams;

  export import ExternalAccount = API.ExternalAccount;
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

  export import Document = API.Document;
  export import DocumentsPage = API.DocumentsPage;
  export import DocumentListParams = API.DocumentListParams;

  export import InternalAccount = API.InternalAccount;
  export import InternalAccountsPage = API.InternalAccountsPage;
  export import InternalAccountCreateParams = API.InternalAccountCreateParams;
  export import InternalAccountUpdateParams = API.InternalAccountUpdateParams;
  export import InternalAccountListParams = API.InternalAccountListParams;

  export import LineItem = API.LineItem;
  export import LineItemsPage = API.LineItemsPage;
  export import LineItemUpdateParams = API.LineItemUpdateParams;
  export import LineItemListParams = API.LineItemListParams;

  export import PaymentOrder = API.PaymentOrder;
  export import PaymentOrdersPage = API.PaymentOrdersPage;
  export import PaymentOrderCreateParams = API.PaymentOrderCreateParams;
  export import PaymentOrderUpdateParams = API.PaymentOrderUpdateParams;
  export import PaymentOrderListParams = API.PaymentOrderListParams;
  export import PaymentOrderCreateAsyncParams = API.PaymentOrderCreateAsyncParams;

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
}

exports = module.exports = ModernTreasury;
export default ModernTreasury;
