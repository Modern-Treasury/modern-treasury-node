# ModernTreasury

Types:

- <code><a href="./src/resources/top-level.ts">PingResponse</a></code>

Methods:

- <code title="get /api/ping">client.<a href="./src/index.ts">ping</a>() -> PingResponse</code>

# Shared

Types:

- <code><a href="./src/resources/shared.ts">AccountsType</a></code>
- <code><a href="./src/resources/shared.ts">AsyncResponse</a></code>
- <code><a href="./src/resources/shared.ts">Currency</a></code>

# Connections

Types:

- <code><a href="./src/resources/connections.ts">Connection</a></code>

Methods:

- <code title="get /api/connections">client.connections.<a href="./src/resources/connections.ts">list</a>({ ...params }) -> ConnectionsPage</code>

# Counterparties

Types:

- <code><a href="./src/resources/counterparties.ts">Counterparty</a></code>
- <code><a href="./src/resources/counterparties.ts">CounterpartyCollectAccountResponse</a></code>

Methods:

- <code title="post /api/counterparties">client.counterparties.<a href="./src/resources/counterparties.ts">create</a>({ ...params }) -> Counterparty</code>
- <code title="get /api/counterparties/{id}">client.counterparties.<a href="./src/resources/counterparties.ts">retrieve</a>(id) -> Counterparty</code>
- <code title="patch /api/counterparties/{id}">client.counterparties.<a href="./src/resources/counterparties.ts">update</a>(id, { ...params }) -> Counterparty</code>
- <code title="get /api/counterparties">client.counterparties.<a href="./src/resources/counterparties.ts">list</a>({ ...params }) -> CounterpartiesPage</code>
- <code title="delete /api/counterparties/{id}">client.counterparties.<a href="./src/resources/counterparties.ts">del</a>(id) -> void</code>
- <code title="post /api/counterparties/{id}/collect_account">client.counterparties.<a href="./src/resources/counterparties.ts">collectAccount</a>(id, { ...params }) -> CounterpartyCollectAccountResponse</code>

# Events

Types:

- <code><a href="./src/resources/events.ts">Event</a></code>

Methods:

- <code title="get /api/events/{id}">client.events.<a href="./src/resources/events.ts">retrieve</a>(id) -> Event</code>
- <code title="get /api/events">client.events.<a href="./src/resources/events.ts">list</a>({ ...params }) -> EventsPage</code>

# ExpectedPayments

Types:

- <code><a href="./src/resources/expected-payments.ts">ExpectedPayment</a></code>
- <code><a href="./src/resources/expected-payments.ts">ExpectedPaymentType</a></code>

Methods:

- <code title="post /api/expected_payments">client.expectedPayments.<a href="./src/resources/expected-payments.ts">create</a>({ ...params }) -> ExpectedPayment</code>
- <code title="get /api/expected_payments/{id}">client.expectedPayments.<a href="./src/resources/expected-payments.ts">retrieve</a>(id) -> ExpectedPayment</code>
- <code title="patch /api/expected_payments/{id}">client.expectedPayments.<a href="./src/resources/expected-payments.ts">update</a>(id, { ...params }) -> ExpectedPayment</code>
- <code title="get /api/expected_payments">client.expectedPayments.<a href="./src/resources/expected-payments.ts">list</a>({ ...params }) -> ExpectedPaymentsPage</code>
- <code title="delete /api/expected_payments/{id}">client.expectedPayments.<a href="./src/resources/expected-payments.ts">del</a>(id) -> ExpectedPayment</code>

# ExternalAccounts

Types:

- <code><a href="./src/resources/external-accounts.ts">ExternalAccount</a></code>
- <code><a href="./src/resources/external-accounts.ts">ExternalAccountType</a></code>

Methods:

- <code title="post /api/external_accounts">client.externalAccounts.<a href="./src/resources/external-accounts.ts">create</a>({ ...params }) -> ExternalAccount</code>
- <code title="get /api/external_accounts/{id}">client.externalAccounts.<a href="./src/resources/external-accounts.ts">retrieve</a>(id) -> ExternalAccount</code>
- <code title="patch /api/external_accounts/{id}">client.externalAccounts.<a href="./src/resources/external-accounts.ts">update</a>(id, { ...params }) -> ExternalAccount</code>
- <code title="get /api/external_accounts">client.externalAccounts.<a href="./src/resources/external-accounts.ts">list</a>({ ...params }) -> ExternalAccountsPage</code>
- <code title="delete /api/external_accounts/{id}">client.externalAccounts.<a href="./src/resources/external-accounts.ts">del</a>(id) -> void</code>
- <code title="post /api/external_accounts/{id}/complete_verification">client.externalAccounts.<a href="./src/resources/external-accounts.ts">completeVerification</a>(id, { ...params }) -> ExternalAccount</code>
- <code title="post /api/external_accounts/{id}/verify">client.externalAccounts.<a href="./src/resources/external-accounts.ts">verify</a>(id, { ...params }) -> ExternalAccount</code>

# IncomingPaymentDetails

Types:

- <code><a href="./src/resources/incoming-payment-details.ts">IncomingPaymentDetail</a></code>

Methods:

- <code title="get /api/incoming_payment_details/{id}">client.incomingPaymentDetails.<a href="./src/resources/incoming-payment-details.ts">retrieve</a>(id) -> IncomingPaymentDetail</code>
- <code title="patch /api/incoming_payment_details/{id}">client.incomingPaymentDetails.<a href="./src/resources/incoming-payment-details.ts">update</a>(id, { ...params }) -> IncomingPaymentDetail</code>
- <code title="get /api/incoming_payment_details">client.incomingPaymentDetails.<a href="./src/resources/incoming-payment-details.ts">list</a>({ ...params }) -> IncomingPaymentDetailsPage</code>
- <code title="post /api/simulations/incoming_payment_details/create_async">client.incomingPaymentDetails.<a href="./src/resources/incoming-payment-details.ts">createAsync</a>({ ...params }) -> Shared.AsyncResponse</code>

# Invoices

Types:

- <code><a href="./src/resources/invoices/invoices.ts">Invoice</a></code>

Methods:

- <code title="post /api/invoices">client.invoices.<a href="./src/resources/invoices/invoices.ts">create</a>({ ...params }) -> Invoice</code>
- <code title="get /api/invoices/{id}">client.invoices.<a href="./src/resources/invoices/invoices.ts">retrieve</a>(id) -> Invoice</code>
- <code title="patch /api/invoices/{id}">client.invoices.<a href="./src/resources/invoices/invoices.ts">update</a>(id, { ...params }) -> Invoice</code>
- <code title="get /api/invoices">client.invoices.<a href="./src/resources/invoices/invoices.ts">list</a>({ ...params }) -> InvoicesPage</code>
- <code title="put /api/invoices/{id}/payment_orders/{payment_order_id}">client.invoices.<a href="./src/resources/invoices/invoices.ts">addPaymentOrder</a>(id, paymentOrderId) -> void</code>

## LineItems

Types:

- <code><a href="./src/resources/invoices/line-items.ts">InvoiceLineItem</a></code>

Methods:

- <code title="post /api/invoices/{invoice_id}/invoice_line_items">client.invoices.lineItems.<a href="./src/resources/invoices/line-items.ts">create</a>(invoiceId, { ...params }) -> InvoiceLineItem</code>
- <code title="get /api/invoices/{invoice_id}/invoice_line_items/{id}">client.invoices.lineItems.<a href="./src/resources/invoices/line-items.ts">retrieve</a>(invoiceId, id) -> InvoiceLineItem</code>
- <code title="patch /api/invoices/{invoice_id}/invoice_line_items/{id}">client.invoices.lineItems.<a href="./src/resources/invoices/line-items.ts">update</a>(invoiceId, id, { ...params }) -> InvoiceLineItem</code>
- <code title="get /api/invoices/{invoice_id}/invoice_line_items">client.invoices.lineItems.<a href="./src/resources/invoices/line-items.ts">list</a>(invoiceId, { ...params }) -> InvoiceLineItemsPage</code>
- <code title="delete /api/invoices/{invoice_id}/invoice_line_items/{id}">client.invoices.lineItems.<a href="./src/resources/invoices/line-items.ts">del</a>(invoiceId, id) -> InvoiceLineItem</code>

# Documents

Types:

- <code><a href="./src/resources/documents.ts">Document</a></code>

Methods:

- <code title="post /api/documents">client.documents.<a href="./src/resources/documents.ts">create</a>({ ...params }) -> Document</code>
- <code title="get /api/documents/{id}">client.documents.<a href="./src/resources/documents.ts">retrieve</a>(id) -> Document</code>
- <code title="get /api/documents">client.documents.<a href="./src/resources/documents.ts">list</a>({ ...params }) -> DocumentsPage</code>

# AccountCollectionFlows

Types:

- <code><a href="./src/resources/account-collection-flows.ts">AccountCollectionFlow</a></code>

Methods:

- <code title="post /api/account_collection_flows">client.accountCollectionFlows.<a href="./src/resources/account-collection-flows.ts">create</a>({ ...params }) -> AccountCollectionFlow</code>
- <code title="get /api/account_collection_flows/{id}">client.accountCollectionFlows.<a href="./src/resources/account-collection-flows.ts">retrieve</a>(id) -> AccountCollectionFlow</code>
- <code title="patch /api/account_collection_flows/{id}">client.accountCollectionFlows.<a href="./src/resources/account-collection-flows.ts">update</a>(id, { ...params }) -> AccountCollectionFlow</code>
- <code title="get /api/account_collection_flows">client.accountCollectionFlows.<a href="./src/resources/account-collection-flows.ts">list</a>({ ...params }) -> AccountCollectionFlowsPage</code>

# AccountDetails

Types:

- <code><a href="./src/resources/account-details.ts">AccountDetail</a></code>

Methods:

- <code title="post /api/{accounts_type}/{account_id}/account_details">client.accountDetails.<a href="./src/resources/account-details.ts">create</a>(accountsType, accountId, { ...params }) -> AccountDetail</code>
- <code title="get /api/{accounts_type}/{account_id}/account_details/{id}">client.accountDetails.<a href="./src/resources/account-details.ts">retrieve</a>(accountsType, accountId, id) -> AccountDetail</code>
- <code title="get /api/{accounts_type}/{account_id}/account_details">client.accountDetails.<a href="./src/resources/account-details.ts">list</a>(accountsType, accountId, { ...params }) -> AccountDetailsPage</code>
- <code title="delete /api/{accounts_type}/{account_id}/account_details/{id}">client.accountDetails.<a href="./src/resources/account-details.ts">del</a>(accountsType, accountId, id) -> void</code>

# RoutingDetails

Types:

- <code><a href="./src/resources/routing-details.ts">RoutingDetail</a></code>

Methods:

- <code title="post /api/{accounts_type}/{account_id}/routing_details">client.routingDetails.<a href="./src/resources/routing-details.ts">create</a>(accountsType, accountId, { ...params }) -> RoutingDetail</code>
- <code title="get /api/{accounts_type}/{account_id}/routing_details/{id}">client.routingDetails.<a href="./src/resources/routing-details.ts">retrieve</a>(accountsType, accountId, id) -> RoutingDetail</code>
- <code title="get /api/{accounts_type}/{account_id}/routing_details">client.routingDetails.<a href="./src/resources/routing-details.ts">list</a>(accountsType, accountId, { ...params }) -> RoutingDetailsPage</code>
- <code title="delete /api/{accounts_type}/{account_id}/routing_details/{id}">client.routingDetails.<a href="./src/resources/routing-details.ts">del</a>(accountsType, accountId, id) -> void</code>

# InternalAccounts

Types:

- <code><a href="./src/resources/internal-accounts/internal-accounts.ts">InternalAccount</a></code>

Methods:

- <code title="post /api/internal_accounts">client.internalAccounts.<a href="./src/resources/internal-accounts/internal-accounts.ts">create</a>({ ...params }) -> InternalAccount</code>
- <code title="get /api/internal_accounts/{id}">client.internalAccounts.<a href="./src/resources/internal-accounts/internal-accounts.ts">retrieve</a>(id) -> InternalAccount</code>
- <code title="patch /api/internal_accounts/{id}">client.internalAccounts.<a href="./src/resources/internal-accounts/internal-accounts.ts">update</a>(id, { ...params }) -> InternalAccount</code>
- <code title="get /api/internal_accounts">client.internalAccounts.<a href="./src/resources/internal-accounts/internal-accounts.ts">list</a>({ ...params }) -> InternalAccountsPage</code>

## BalanceReports

Types:

- <code><a href="./src/resources/internal-accounts/balance-reports.ts">BalanceReport</a></code>

Methods:

- <code title="get /api/internal_accounts/{internal_account_id}/balance_reports/{id}">client.internalAccounts.balanceReports.<a href="./src/resources/internal-accounts/balance-reports.ts">retrieve</a>(internalAccountId, id) -> BalanceReport</code>
- <code title="get /api/internal_accounts/{internal_account_id}/balance_reports">client.internalAccounts.balanceReports.<a href="./src/resources/internal-accounts/balance-reports.ts">list</a>(internalAccountId, { ...params }) -> BalanceReportsPage</code>

# Ledgers

Types:

- <code><a href="./src/resources/ledgers.ts">Ledger</a></code>

Methods:

- <code title="post /api/ledgers">client.ledgers.<a href="./src/resources/ledgers.ts">create</a>({ ...params }) -> Ledger</code>
- <code title="get /api/ledgers/{id}">client.ledgers.<a href="./src/resources/ledgers.ts">retrieve</a>(id) -> Ledger</code>
- <code title="patch /api/ledgers/{id}">client.ledgers.<a href="./src/resources/ledgers.ts">update</a>(id, { ...params }) -> Ledger</code>
- <code title="get /api/ledgers">client.ledgers.<a href="./src/resources/ledgers.ts">list</a>({ ...params }) -> LedgersPage</code>
- <code title="delete /api/ledgers/{id}">client.ledgers.<a href="./src/resources/ledgers.ts">del</a>(id) -> Ledger</code>

# LedgerableEvents

Types:

- <code><a href="./src/resources/ledgerable-events.ts">LedgerableEvent</a></code>

Methods:

- <code title="post /api/ledgerable_events">client.ledgerableEvents.<a href="./src/resources/ledgerable-events.ts">create</a>({ ...params }) -> LedgerableEvent</code>
- <code title="get /api/ledgerable_events/{id}">client.ledgerableEvents.<a href="./src/resources/ledgerable-events.ts">retrieve</a>(id) -> LedgerableEvent</code>

# LedgerAccountCategories

Types:

- <code><a href="./src/resources/ledger-account-categories.ts">LedgerAccountCategory</a></code>

Methods:

- <code title="post /api/ledger_account_categories">client.ledgerAccountCategories.<a href="./src/resources/ledger-account-categories.ts">create</a>({ ...params }) -> LedgerAccountCategory</code>
- <code title="get /api/ledger_account_categories/{id}">client.ledgerAccountCategories.<a href="./src/resources/ledger-account-categories.ts">retrieve</a>(id, { ...params }) -> LedgerAccountCategory</code>
- <code title="patch /api/ledger_account_categories/{id}">client.ledgerAccountCategories.<a href="./src/resources/ledger-account-categories.ts">update</a>(id, { ...params }) -> LedgerAccountCategory</code>
- <code title="get /api/ledger_account_categories">client.ledgerAccountCategories.<a href="./src/resources/ledger-account-categories.ts">list</a>({ ...params }) -> LedgerAccountCategoriesPage</code>
- <code title="delete /api/ledger_account_categories/{id}">client.ledgerAccountCategories.<a href="./src/resources/ledger-account-categories.ts">del</a>(id) -> LedgerAccountCategory</code>
- <code title="put /api/ledger_account_categories/{id}/ledger_accounts/{ledger_account_id}">client.ledgerAccountCategories.<a href="./src/resources/ledger-account-categories.ts">addLedgerAccount</a>(id, ledgerAccountId) -> void</code>
- <code title="put /api/ledger_account_categories/{id}/ledger_account_categories/{sub_category_id}">client.ledgerAccountCategories.<a href="./src/resources/ledger-account-categories.ts">addNestedCategory</a>(id, subCategoryId) -> void</code>
- <code title="delete /api/ledger_account_categories/{id}/ledger_accounts/{ledger_account_id}">client.ledgerAccountCategories.<a href="./src/resources/ledger-account-categories.ts">removeLedgerAccount</a>(id, ledgerAccountId) -> void</code>
- <code title="delete /api/ledger_account_categories/{id}/ledger_account_categories/{sub_category_id}">client.ledgerAccountCategories.<a href="./src/resources/ledger-account-categories.ts">removeNestedCategory</a>(id, subCategoryId) -> void</code>

# LedgerAccounts

Types:

- <code><a href="./src/resources/ledger-accounts.ts">LedgerAccount</a></code>

Methods:

- <code title="post /api/ledger_accounts">client.ledgerAccounts.<a href="./src/resources/ledger-accounts.ts">create</a>({ ...params }) -> LedgerAccount</code>
- <code title="get /api/ledger_accounts/{id}">client.ledgerAccounts.<a href="./src/resources/ledger-accounts.ts">retrieve</a>(id, { ...params }) -> LedgerAccount</code>
- <code title="patch /api/ledger_accounts/{id}">client.ledgerAccounts.<a href="./src/resources/ledger-accounts.ts">update</a>(id, { ...params }) -> LedgerAccount</code>
- <code title="get /api/ledger_accounts">client.ledgerAccounts.<a href="./src/resources/ledger-accounts.ts">list</a>({ ...params }) -> LedgerAccountsPage</code>
- <code title="delete /api/ledger_accounts/{id}">client.ledgerAccounts.<a href="./src/resources/ledger-accounts.ts">del</a>(id) -> LedgerAccount</code>

# LedgerAccountBalanceMonitors

Types:

- <code><a href="./src/resources/ledger-account-balance-monitors.ts">LedgerAccountBalanceMonitor</a></code>

Methods:

- <code title="post /api/ledger_account_balance_monitors">client.ledgerAccountBalanceMonitors.<a href="./src/resources/ledger-account-balance-monitors.ts">create</a>({ ...params }) -> LedgerAccountBalanceMonitor</code>
- <code title="get /api/ledger_account_balance_monitors/{id}">client.ledgerAccountBalanceMonitors.<a href="./src/resources/ledger-account-balance-monitors.ts">retrieve</a>(id) -> LedgerAccountBalanceMonitor</code>
- <code title="patch /api/ledger_account_balance_monitors/{id}">client.ledgerAccountBalanceMonitors.<a href="./src/resources/ledger-account-balance-monitors.ts">update</a>(id, { ...params }) -> LedgerAccountBalanceMonitor</code>
- <code title="get /api/ledger_account_balance_monitors">client.ledgerAccountBalanceMonitors.<a href="./src/resources/ledger-account-balance-monitors.ts">list</a>({ ...params }) -> LedgerAccountBalanceMonitorsPage</code>
- <code title="delete /api/ledger_account_balance_monitors/{id}">client.ledgerAccountBalanceMonitors.<a href="./src/resources/ledger-account-balance-monitors.ts">del</a>(id) -> LedgerAccountBalanceMonitor</code>

# LedgerAccountPayouts

Types:

- <code><a href="./src/resources/ledger-account-payouts.ts">LedgerAccountPayout</a></code>

Methods:

- <code title="post /api/ledger_account_payouts">client.ledgerAccountPayouts.<a href="./src/resources/ledger-account-payouts.ts">create</a>({ ...params }) -> LedgerAccountPayout</code>
- <code title="get /api/ledger_account_payouts/{id}">client.ledgerAccountPayouts.<a href="./src/resources/ledger-account-payouts.ts">retrieve</a>(id) -> LedgerAccountPayout</code>
- <code title="patch /api/ledger_account_payouts/{id}">client.ledgerAccountPayouts.<a href="./src/resources/ledger-account-payouts.ts">update</a>(id, { ...params }) -> LedgerAccountPayout</code>
- <code title="get /api/ledger_account_payouts">client.ledgerAccountPayouts.<a href="./src/resources/ledger-account-payouts.ts">list</a>({ ...params }) -> LedgerAccountPayoutsPage</code>

# LedgerAccountStatements

Types:

- <code><a href="./src/resources/ledger-account-statements.ts">LedgerAccountStatementCreateResponse</a></code>
- <code><a href="./src/resources/ledger-account-statements.ts">LedgerAccountStatementRetrieveResponse</a></code>

Methods:

- <code title="post /api/ledger_account_statements">client.ledgerAccountStatements.<a href="./src/resources/ledger-account-statements.ts">create</a>({ ...params }) -> LedgerAccountStatementCreateResponse</code>
- <code title="get /api/ledger_account_statements/{id}">client.ledgerAccountStatements.<a href="./src/resources/ledger-account-statements.ts">retrieve</a>(id) -> LedgerAccountStatementRetrieveResponse</code>

# LedgerEntries

Types:

- <code><a href="./src/resources/ledger-entries.ts">LedgerEntry</a></code>

Methods:

- <code title="get /api/ledger_entries/{id}">client.ledgerEntries.<a href="./src/resources/ledger-entries.ts">retrieve</a>(id, { ...params }) -> LedgerEntry</code>
- <code title="get /api/ledger_entries">client.ledgerEntries.<a href="./src/resources/ledger-entries.ts">list</a>({ ...params }) -> LedgerEntriesPage</code>

# LedgerEventHandlers

Types:

- <code><a href="./src/resources/ledger-event-handlers.ts">LedgerEventHandlerCreateResponse</a></code>
- <code><a href="./src/resources/ledger-event-handlers.ts">LedgerEventHandlerRetrieveResponse</a></code>
- <code><a href="./src/resources/ledger-event-handlers.ts">LedgerEventHandlerListResponse</a></code>
- <code><a href="./src/resources/ledger-event-handlers.ts">LedgerEventHandlerDeleteResponse</a></code>

Methods:

- <code title="post /api/ledger_event_handlers">client.ledgerEventHandlers.<a href="./src/resources/ledger-event-handlers.ts">create</a>({ ...params }) -> LedgerEventHandlerCreateResponse</code>
- <code title="get /api/ledger_event_handlers/{id}">client.ledgerEventHandlers.<a href="./src/resources/ledger-event-handlers.ts">retrieve</a>(id) -> LedgerEventHandlerRetrieveResponse</code>
- <code title="get /api/ledger_event_handlers">client.ledgerEventHandlers.<a href="./src/resources/ledger-event-handlers.ts">list</a>({ ...params }) -> LedgerEventHandlerListResponsesPage</code>
- <code title="delete /api/ledger_event_handlers/{id}">client.ledgerEventHandlers.<a href="./src/resources/ledger-event-handlers.ts">del</a>(id) -> LedgerEventHandlerDeleteResponse</code>

# LedgerTransactions

Types:

- <code><a href="./src/resources/ledger-transactions/ledger-transactions.ts">LedgerTransaction</a></code>

Methods:

- <code title="post /api/ledger_transactions">client.ledgerTransactions.<a href="./src/resources/ledger-transactions/ledger-transactions.ts">create</a>({ ...params }) -> LedgerTransaction</code>
- <code title="get /api/ledger_transactions/{id}">client.ledgerTransactions.<a href="./src/resources/ledger-transactions/ledger-transactions.ts">retrieve</a>(id) -> LedgerTransaction</code>
- <code title="patch /api/ledger_transactions/{id}">client.ledgerTransactions.<a href="./src/resources/ledger-transactions/ledger-transactions.ts">update</a>(id, { ...params }) -> LedgerTransaction</code>
- <code title="get /api/ledger_transactions">client.ledgerTransactions.<a href="./src/resources/ledger-transactions/ledger-transactions.ts">list</a>({ ...params }) -> LedgerTransactionsPage</code>
- <code title="post /api/ledger_transactions/{id}/reversal">client.ledgerTransactions.<a href="./src/resources/ledger-transactions/ledger-transactions.ts">createReversal</a>(id, { ...params }) -> LedgerTransaction</code>

## Versions

Types:

- <code><a href="./src/resources/ledger-transactions/versions.ts">LedgerTransactionVersion</a></code>

Methods:

- <code title="get /api/ledger_transaction_versions">client.ledgerTransactions.versions.<a href="./src/resources/ledger-transactions/versions.ts">list</a>({ ...params }) -> LedgerTransactionVersionsPage</code>

# LineItems

Types:

- <code><a href="./src/resources/line-items.ts">LineItem</a></code>

Methods:

- <code title="get /api/{itemizable_type}/{itemizable_id}/line_items/{id}">client.lineItems.<a href="./src/resources/line-items.ts">retrieve</a>(itemizableType, itemizableId, id) -> LineItem</code>
- <code title="patch /api/{itemizable_type}/{itemizable_id}/line_items/{id}">client.lineItems.<a href="./src/resources/line-items.ts">update</a>(itemizableType, itemizableId, id, { ...params }) -> LineItem</code>
- <code title="get /api/{itemizable_type}/{itemizable_id}/line_items">client.lineItems.<a href="./src/resources/line-items.ts">list</a>(itemizableType, itemizableId, { ...params }) -> LineItemsPage</code>

# PaymentFlows

Types:

- <code><a href="./src/resources/payment-flows.ts">PaymentFlow</a></code>

Methods:

- <code title="post /api/payment_flows">client.paymentFlows.<a href="./src/resources/payment-flows.ts">create</a>({ ...params }) -> PaymentFlow</code>
- <code title="get /api/payment_flows/{id}">client.paymentFlows.<a href="./src/resources/payment-flows.ts">retrieve</a>(id) -> PaymentFlow</code>
- <code title="patch /api/payment_flows/{id}">client.paymentFlows.<a href="./src/resources/payment-flows.ts">update</a>(id, { ...params }) -> PaymentFlow</code>
- <code title="get /api/payment_flows">client.paymentFlows.<a href="./src/resources/payment-flows.ts">list</a>({ ...params }) -> PaymentFlowsPage</code>

# PaymentOrders

Types:

- <code><a href="./src/resources/payment-orders/payment-orders.ts">PaymentOrder</a></code>
- <code><a href="./src/resources/payment-orders/payment-orders.ts">PaymentOrderSubtype</a></code>
- <code><a href="./src/resources/payment-orders/payment-orders.ts">PaymentOrderType</a></code>

Methods:

- <code title="post /api/payment_orders">client.paymentOrders.<a href="./src/resources/payment-orders/payment-orders.ts">create</a>({ ...params }) -> PaymentOrder</code>
- <code title="get /api/payment_orders/{id}">client.paymentOrders.<a href="./src/resources/payment-orders/payment-orders.ts">retrieve</a>(id) -> PaymentOrder</code>
- <code title="patch /api/payment_orders/{id}">client.paymentOrders.<a href="./src/resources/payment-orders/payment-orders.ts">update</a>(id, { ...params }) -> PaymentOrder</code>
- <code title="get /api/payment_orders">client.paymentOrders.<a href="./src/resources/payment-orders/payment-orders.ts">list</a>({ ...params }) -> PaymentOrdersPage</code>
- <code title="post /api/payment_orders/create_async">client.paymentOrders.<a href="./src/resources/payment-orders/payment-orders.ts">createAsync</a>({ ...params }) -> Shared.AsyncResponse</code>

## Reversals

Types:

- <code><a href="./src/resources/payment-orders/reversals.ts">Reversal</a></code>

Methods:

- <code title="post /api/payment_orders/{payment_order_id}/reversals">client.paymentOrders.reversals.<a href="./src/resources/payment-orders/reversals.ts">create</a>(paymentOrderId, { ...params }) -> Reversal</code>
- <code title="get /api/payment_orders/{payment_order_id}/reversals/{reversal_id}">client.paymentOrders.reversals.<a href="./src/resources/payment-orders/reversals.ts">retrieve</a>(paymentOrderId, reversalId) -> Reversal</code>
- <code title="get /api/payment_orders/{payment_order_id}/reversals">client.paymentOrders.reversals.<a href="./src/resources/payment-orders/reversals.ts">list</a>(paymentOrderId, { ...params }) -> ReversalsPage</code>

# PaymentReferences

Types:

- <code><a href="./src/resources/payment-references.ts">PaymentReference</a></code>

Methods:

- <code title="get /api/payment_references/{id}">client.paymentReferences.<a href="./src/resources/payment-references.ts">retrieve</a>(id) -> PaymentReference</code>
- <code title="get /api/payment_references">client.paymentReferences.<a href="./src/resources/payment-references.ts">list</a>({ ...params }) -> PaymentReferencesPage</code>

# Returns

Types:

- <code><a href="./src/resources/returns.ts">ReturnObject</a></code>

Methods:

- <code title="post /api/returns">client.returns.<a href="./src/resources/returns.ts">create</a>({ ...params }) -> ReturnObject</code>
- <code title="get /api/returns/{id}">client.returns.<a href="./src/resources/returns.ts">retrieve</a>(id) -> ReturnObject</code>
- <code title="get /api/returns">client.returns.<a href="./src/resources/returns.ts">list</a>({ ...params }) -> ReturnObjectsPage</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions/transactions.ts">Transaction</a></code>

Methods:

- <code title="get /api/transactions/{id}">client.transactions.<a href="./src/resources/transactions/transactions.ts">retrieve</a>(id) -> Transaction</code>
- <code title="patch /api/transactions/{id}">client.transactions.<a href="./src/resources/transactions/transactions.ts">update</a>(id, { ...params }) -> Transaction</code>
- <code title="get /api/transactions">client.transactions.<a href="./src/resources/transactions/transactions.ts">list</a>({ ...params }) -> TransactionsPage</code>

## LineItems

Types:

- <code><a href="./src/resources/transactions/line-items.ts">TransactionLineItem</a></code>

Methods:

- <code title="get /api/transaction_line_items/{id}">client.transactions.lineItems.<a href="./src/resources/transactions/line-items.ts">retrieve</a>(id) -> TransactionLineItem</code>
- <code title="get /api/transaction_line_items">client.transactions.lineItems.<a href="./src/resources/transactions/line-items.ts">list</a>({ ...params }) -> TransactionLineItemsPage</code>

# Validations

Types:

- <code><a href="./src/resources/validations.ts">RoutingNumberLookupRequest</a></code>

Methods:

- <code title="get /api/validations/routing_numbers">client.validations.<a href="./src/resources/validations.ts">validateRoutingNumber</a>({ ...params }) -> RoutingNumberLookupRequest</code>

# PaperItems

Types:

- <code><a href="./src/resources/paper-items.ts">PaperItem</a></code>

Methods:

- <code title="get /api/paper_items/{id}">client.paperItems.<a href="./src/resources/paper-items.ts">retrieve</a>(id) -> PaperItem</code>
- <code title="get /api/paper_items">client.paperItems.<a href="./src/resources/paper-items.ts">list</a>({ ...params }) -> PaperItemsPage</code>

# Webhooks

Methods:

- <code>client.webhooks.<a href="./src/resources/webhooks.ts">getSignature</a>(payload, opts?) -> string</code>
- <code>client.webhooks.<a href="./src/resources/webhooks.ts">validateSignature</a>(payload, headers, opts?) -> boolean</code>

# VirtualAccounts

Types:

- <code><a href="./src/resources/virtual-accounts.ts">VirtualAccount</a></code>

Methods:

- <code title="post /api/virtual_accounts">client.virtualAccounts.<a href="./src/resources/virtual-accounts.ts">create</a>({ ...params }) -> VirtualAccount</code>
- <code title="get /api/virtual_accounts/{id}">client.virtualAccounts.<a href="./src/resources/virtual-accounts.ts">retrieve</a>(id) -> VirtualAccount</code>
- <code title="patch /api/virtual_accounts/{id}">client.virtualAccounts.<a href="./src/resources/virtual-accounts.ts">update</a>(id, { ...params }) -> VirtualAccount</code>
- <code title="get /api/virtual_accounts">client.virtualAccounts.<a href="./src/resources/virtual-accounts.ts">list</a>({ ...params }) -> VirtualAccountsPage</code>
- <code title="delete /api/virtual_accounts/{id}">client.virtualAccounts.<a href="./src/resources/virtual-accounts.ts">del</a>(id) -> VirtualAccount</code>
