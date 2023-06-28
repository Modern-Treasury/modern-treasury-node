# Connections

Types:

- <code><a href="./resources/connections.ts">Connection</a></code>

Methods:

- <code title="get /api/connections">client.connections.<a href="./resources/connections.ts">list</a>({ ...params }) -> ConnectionsPage</code>

# Counterparties

Types:

- <code><a href="./resources/counterparties.ts">Counterparty</a></code>
- <code><a href="./resources/counterparties.ts">CounterpartyCollectAccountResponse</a></code>

Methods:

- <code title="post /api/counterparties">client.counterparties.<a href="./resources/counterparties.ts">create</a>({ ...params }) -> Counterparty</code>
- <code title="get /api/counterparties/{id}">client.counterparties.<a href="./resources/counterparties.ts">retrieve</a>(id) -> Counterparty</code>
- <code title="patch /api/counterparties/{id}">client.counterparties.<a href="./resources/counterparties.ts">update</a>(id, { ...params }) -> Counterparty</code>
- <code title="get /api/counterparties">client.counterparties.<a href="./resources/counterparties.ts">list</a>({ ...params }) -> CounterpartiesPage</code>
- <code title="delete /api/counterparties/{id}">client.counterparties.<a href="./resources/counterparties.ts">del</a>(id) -> Promise<void></code>
- <code title="post /api/counterparties/{id}/collect_account">client.counterparties.<a href="./resources/counterparties.ts">collectAccount</a>(id, { ...params }) -> CounterpartyCollectAccountResponse</code>

# Events

Types:

- <code><a href="./resources/events.ts">Event</a></code>

Methods:

- <code title="get /api/events/{id}">client.events.<a href="./resources/events.ts">retrieve</a>(id) -> Event</code>
- <code title="get /api/events">client.events.<a href="./resources/events.ts">list</a>({ ...params }) -> EventsPage</code>

# ExpectedPayments

Types:

- <code><a href="./resources/expected-payments.ts">ExpectedPayment</a></code>
- <code><a href="./resources/expected-payments.ts">ExpectedPaymentType</a></code>

Methods:

- <code title="post /api/expected_payments">client.expectedPayments.<a href="./resources/expected-payments.ts">create</a>({ ...params }) -> ExpectedPayment</code>
- <code title="get /api/expected_payments/{id}">client.expectedPayments.<a href="./resources/expected-payments.ts">retrieve</a>(id) -> ExpectedPayment</code>
- <code title="patch /api/expected_payments/{id}">client.expectedPayments.<a href="./resources/expected-payments.ts">update</a>(id, { ...params }) -> ExpectedPayment</code>
- <code title="get /api/expected_payments">client.expectedPayments.<a href="./resources/expected-payments.ts">list</a>({ ...params }) -> ExpectedPaymentsPage</code>
- <code title="delete /api/expected_payments/{id}">client.expectedPayments.<a href="./resources/expected-payments.ts">del</a>(id) -> ExpectedPayment</code>

# ExternalAccounts

Types:

- <code><a href="./resources/external-accounts.ts">ExternalAccount</a></code>
- <code><a href="./resources/external-accounts.ts">ExternalAccountType</a></code>

Methods:

- <code title="post /api/external_accounts">client.externalAccounts.<a href="./resources/external-accounts.ts">create</a>({ ...params }) -> ExternalAccount</code>
- <code title="get /api/external_accounts/{id}">client.externalAccounts.<a href="./resources/external-accounts.ts">retrieve</a>(id) -> ExternalAccount</code>
- <code title="patch /api/external_accounts/{id}">client.externalAccounts.<a href="./resources/external-accounts.ts">update</a>(id, { ...params }) -> ExternalAccount</code>
- <code title="get /api/external_accounts">client.externalAccounts.<a href="./resources/external-accounts.ts">list</a>({ ...params }) -> ExternalAccountsPage</code>
- <code title="delete /api/external_accounts/{id}">client.externalAccounts.<a href="./resources/external-accounts.ts">del</a>(id) -> Promise<void></code>
- <code title="post /api/external_accounts/{id}/complete_verification">client.externalAccounts.<a href="./resources/external-accounts.ts">completeVerification</a>(id, { ...params }) -> ExternalAccount</code>
- <code title="post /api/external_accounts/{id}/verify">client.externalAccounts.<a href="./resources/external-accounts.ts">verify</a>(id, { ...params }) -> ExternalAccount</code>

# IncomingPaymentDetails

Types:

- <code><a href="./resources/incoming-payment-details.ts">IncomingPaymentDetail</a></code>

Methods:

- <code title="get /api/incoming_payment_details/{id}">client.incomingPaymentDetails.<a href="./resources/incoming-payment-details.ts">retrieve</a>(id) -> IncomingPaymentDetail</code>
- <code title="patch /api/incoming_payment_details/{id}">client.incomingPaymentDetails.<a href="./resources/incoming-payment-details.ts">update</a>(id, { ...params }) -> IncomingPaymentDetail</code>
- <code title="get /api/incoming_payment_details">client.incomingPaymentDetails.<a href="./resources/incoming-payment-details.ts">list</a>({ ...params }) -> IncomingPaymentDetailsPage</code>
- <code title="post /api/simulations/incoming_payment_details/create_async">client.incomingPaymentDetails.<a href="./resources/incoming-payment-details.ts">createAsync</a>({ ...params }) -> AsyncResponse</code>

# Invoices

Types:

- <code><a href="./resources/invoices/invoices.ts">Invoice</a></code>

Methods:

- <code title="post /api/invoices">client.invoices.<a href="./resources/invoices/invoices.ts">create</a>({ ...params }) -> Invoice</code>
- <code title="get /api/invoices/{id}">client.invoices.<a href="./resources/invoices/invoices.ts">retrieve</a>(id) -> Invoice</code>
- <code title="patch /api/invoices/{id}">client.invoices.<a href="./resources/invoices/invoices.ts">update</a>(id, { ...params }) -> Invoice</code>
- <code title="get /api/invoices">client.invoices.<a href="./resources/invoices/invoices.ts">list</a>({ ...params }) -> InvoicesPage</code>

## LineItems

Types:

- <code><a href="./resources/invoices/line-items.ts">InvoiceLineItem</a></code>

Methods:

- <code title="post /api/invoices/{invoice_id}/invoice_line_items">client.invoices.lineItems.<a href="./resources/invoices/line-items.ts">create</a>(invoiceId, { ...params }) -> InvoiceLineItem</code>
- <code title="get /api/invoices/{invoice_id}/invoice_line_items/{id}">client.invoices.lineItems.<a href="./resources/invoices/line-items.ts">retrieve</a>(invoiceId, id) -> InvoiceLineItem</code>
- <code title="patch /api/invoices/{invoice_id}/invoice_line_items/{id}">client.invoices.lineItems.<a href="./resources/invoices/line-items.ts">update</a>(invoiceId, id, { ...params }) -> InvoiceLineItem</code>
- <code title="get /api/invoices/{invoice_id}/invoice_line_items">client.invoices.lineItems.<a href="./resources/invoices/line-items.ts">list</a>(invoiceId, { ...params }) -> InvoiceLineItemsPage</code>
- <code title="delete /api/invoices/{invoice_id}/invoice_line_items/{id}">client.invoices.lineItems.<a href="./resources/invoices/line-items.ts">del</a>(invoiceId, id) -> InvoiceLineItem</code>

# Documents

Types:

- <code><a href="./resources/documents.ts">Document</a></code>

Methods:

- <code title="post /api/documents">client.documents.<a href="./resources/documents.ts">create</a>({ ...params }) -> Document</code>
- <code title="get /api/documents/{id}">client.documents.<a href="./resources/documents.ts">retrieve</a>(id) -> Document</code>
- <code title="get /api/documents">client.documents.<a href="./resources/documents.ts">list</a>({ ...params }) -> DocumentsPage</code>

# AccountCollectionFlows

Types:

- <code><a href="./resources/account-collection-flows.ts">AccountConnectionFlow</a></code>

Methods:

- <code title="post /api/account_collection_flows">client.accountCollectionFlows.<a href="./resources/account-collection-flows.ts">create</a>({ ...params }) -> AccountConnectionFlow</code>
- <code title="get /api/account_collection_flows/{id}">client.accountCollectionFlows.<a href="./resources/account-collection-flows.ts">retrieve</a>(id, { ...params }) -> AccountConnectionFlow</code>
- <code title="patch /api/account_collection_flows/{id}">client.accountCollectionFlows.<a href="./resources/account-collection-flows.ts">update</a>(id, { ...params }) -> AccountConnectionFlow</code>
- <code title="get /api/account_collection_flows">client.accountCollectionFlows.<a href="./resources/account-collection-flows.ts">list</a>({ ...params }) -> AccountConnectionFlowsPage</code>

# AccountDetails

Types:

- <code><a href="./resources/account-details.ts">AccountDetail</a></code>

Methods:

- <code title="post /api/{accounts_type}/{account_id}/account_details">client.accountDetails.<a href="./resources/account-details.ts">create</a>(accountsType, accountId, { ...params }) -> AccountDetail</code>
- <code title="get /api/{accounts_type}/{account_id}/account_details/{id}">client.accountDetails.<a href="./resources/account-details.ts">retrieve</a>(accountsType, accountId, id) -> AccountDetail</code>
- <code title="get /api/{accounts_type}/{account_id}/account_details">client.accountDetails.<a href="./resources/account-details.ts">list</a>(accountsType, accountId, { ...params }) -> AccountDetailsPage</code>
- <code title="delete /api/{accounts_type}/{account_id}/account_details/{id}">client.accountDetails.<a href="./resources/account-details.ts">del</a>(accountsType, accountId, id) -> Promise<void></code>

# RoutingDetails

Types:

- <code><a href="./resources/routing-details.ts">RoutingDetail</a></code>

Methods:

- <code title="post /api/{accounts_type}/{account_id}/routing_details">client.routingDetails.<a href="./resources/routing-details.ts">create</a>(accountsType, accountId, { ...params }) -> RoutingDetail</code>
- <code title="get /api/{accounts_type}/{account_id}/routing_details/{id}">client.routingDetails.<a href="./resources/routing-details.ts">retrieve</a>(accountsType, accountId, id) -> RoutingDetail</code>
- <code title="get /api/{accounts_type}/{account_id}/routing_details">client.routingDetails.<a href="./resources/routing-details.ts">list</a>(accountsType, accountId, { ...params }) -> RoutingDetailsPage</code>
- <code title="delete /api/{accounts_type}/{account_id}/routing_details/{id}">client.routingDetails.<a href="./resources/routing-details.ts">del</a>(accountsType, accountId, id) -> Promise<void></code>

# InternalAccounts

Types:

- <code><a href="./resources/internal-accounts/internal-accounts.ts">InternalAccount</a></code>

Methods:

- <code title="post /api/internal_accounts">client.internalAccounts.<a href="./resources/internal-accounts/internal-accounts.ts">create</a>({ ...params }) -> InternalAccount</code>
- <code title="get /api/internal_accounts/{id}">client.internalAccounts.<a href="./resources/internal-accounts/internal-accounts.ts">retrieve</a>(id) -> InternalAccount</code>
- <code title="patch /api/internal_accounts/{id}">client.internalAccounts.<a href="./resources/internal-accounts/internal-accounts.ts">update</a>(id, { ...params }) -> InternalAccount</code>
- <code title="get /api/internal_accounts">client.internalAccounts.<a href="./resources/internal-accounts/internal-accounts.ts">list</a>({ ...params }) -> InternalAccountsPage</code>

## BalanceReports

Types:

- <code><a href="./resources/internal-accounts/balance-reports.ts">BalanceReport</a></code>

Methods:

- <code title="get /api/internal_accounts/{internal_account_id}/balance_reports/{id}">client.internalAccounts.balanceReports.<a href="./resources/internal-accounts/balance-reports.ts">retrieve</a>(internalAccountId, id) -> BalanceReport</code>
- <code title="get /api/internal_accounts/{internal_account_id}/balance_reports">client.internalAccounts.balanceReports.<a href="./resources/internal-accounts/balance-reports.ts">list</a>(internalAccountId, { ...params }) -> BalanceReportsPage</code>

# Ledgers

Types:

- <code><a href="./resources/ledgers.ts">Ledger</a></code>

Methods:

- <code title="post /api/ledgers">client.ledgers.<a href="./resources/ledgers.ts">create</a>({ ...params }) -> Ledger</code>
- <code title="get /api/ledgers/{id}">client.ledgers.<a href="./resources/ledgers.ts">retrieve</a>(id) -> Ledger</code>
- <code title="patch /api/ledgers/{id}">client.ledgers.<a href="./resources/ledgers.ts">update</a>(id, { ...params }) -> Ledger</code>
- <code title="get /api/ledgers">client.ledgers.<a href="./resources/ledgers.ts">list</a>({ ...params }) -> LedgersPage</code>
- <code title="delete /api/ledgers/{id}">client.ledgers.<a href="./resources/ledgers.ts">del</a>(id) -> Ledger</code>

# LedgerableEvents

Types:

- <code><a href="./resources/ledgerable-events.ts">LedgerableEvent</a></code>

Methods:

- <code title="post /api/ledgerable_events">client.ledgerableEvents.<a href="./resources/ledgerable-events.ts">create</a>({ ...params }) -> LedgerableEvent</code>
- <code title="get /api/ledgerable_events/{id}">client.ledgerableEvents.<a href="./resources/ledgerable-events.ts">retrieve</a>(id) -> LedgerableEvent</code>

# LedgerAccountCategories

Types:

- <code><a href="./resources/ledger-account-categories.ts">LedgerAccountCategory</a></code>

Methods:

- <code title="post /api/ledger_account_categories">client.ledgerAccountCategories.<a href="./resources/ledger-account-categories.ts">create</a>({ ...params }) -> LedgerAccountCategory</code>
- <code title="get /api/ledger_account_categories/{id}">client.ledgerAccountCategories.<a href="./resources/ledger-account-categories.ts">retrieve</a>(id, { ...params }) -> LedgerAccountCategory</code>
- <code title="patch /api/ledger_account_categories/{id}">client.ledgerAccountCategories.<a href="./resources/ledger-account-categories.ts">update</a>(id, { ...params }) -> LedgerAccountCategory</code>
- <code title="get /api/ledger_account_categories">client.ledgerAccountCategories.<a href="./resources/ledger-account-categories.ts">list</a>({ ...params }) -> LedgerAccountCategoriesPage</code>
- <code title="delete /api/ledger_account_categories/{id}">client.ledgerAccountCategories.<a href="./resources/ledger-account-categories.ts">del</a>(id, { ...params }) -> LedgerAccountCategory</code>
- <code title="put /api/ledger_account_categories/{id}/ledger_accounts/{ledger_account_id}">client.ledgerAccountCategories.<a href="./resources/ledger-account-categories.ts">addLedgerAccount</a>(id, ledgerAccountId) -> Promise<void></code>
- <code title="put /api/ledger_account_categories/{id}/ledger_account_categories/{sub_category_id}">client.ledgerAccountCategories.<a href="./resources/ledger-account-categories.ts">addNestedCategory</a>(id, subCategoryId) -> Promise<void></code>
- <code title="delete /api/ledger_account_categories/{id}/ledger_accounts/{ledger_account_id}">client.ledgerAccountCategories.<a href="./resources/ledger-account-categories.ts">removeLedgerAccount</a>(id, ledgerAccountId) -> Promise<void></code>
- <code title="delete /api/ledger_account_categories/{id}/ledger_account_categories/{sub_category_id}">client.ledgerAccountCategories.<a href="./resources/ledger-account-categories.ts">removeNestedCategory</a>(id, subCategoryId) -> Promise<void></code>

# LedgerAccounts

Types:

- <code><a href="./resources/ledger-accounts.ts">LedgerAccount</a></code>

Methods:

- <code title="post /api/ledger_accounts">client.ledgerAccounts.<a href="./resources/ledger-accounts.ts">create</a>({ ...params }) -> LedgerAccount</code>
- <code title="get /api/ledger_accounts/{id}">client.ledgerAccounts.<a href="./resources/ledger-accounts.ts">retrieve</a>(id, { ...params }) -> LedgerAccount</code>
- <code title="patch /api/ledger_accounts/{id}">client.ledgerAccounts.<a href="./resources/ledger-accounts.ts">update</a>(id, { ...params }) -> LedgerAccount</code>
- <code title="get /api/ledger_accounts">client.ledgerAccounts.<a href="./resources/ledger-accounts.ts">list</a>({ ...params }) -> LedgerAccountsPage</code>
- <code title="delete /api/ledger_accounts/{id}">client.ledgerAccounts.<a href="./resources/ledger-accounts.ts">del</a>(id) -> LedgerAccount</code>

# LedgerAccountPayouts

Types:

- <code><a href="./resources/ledger-account-payouts.ts">LedgerAccountPayout</a></code>

Methods:

- <code title="post /api/ledger_account_payouts">client.ledgerAccountPayouts.<a href="./resources/ledger-account-payouts.ts">create</a>({ ...params }) -> LedgerAccountPayout</code>
- <code title="patch /api/ledger_account_payouts/{id}">client.ledgerAccountPayouts.<a href="./resources/ledger-account-payouts.ts">update</a>(id, { ...params }) -> LedgerAccountPayout</code>
- <code title="get /api/ledger_account_payouts">client.ledgerAccountPayouts.<a href="./resources/ledger-account-payouts.ts">list</a>({ ...params }) -> LedgerAccountPayoutsPage</code>
- <code title="get /api/ledger_account_payouts/{id}">client.ledgerAccountPayouts.<a href="./resources/ledger-account-payouts.ts">retireve</a>(id) -> LedgerAccountPayout</code>

# LedgerAccountStatements

Types:

- <code><a href="./resources/ledger-account-statements.ts">LedgerAccountStatementCreateResponse</a></code>
- <code><a href="./resources/ledger-account-statements.ts">LedgerAccountStatementRetrieveResponse</a></code>

Methods:

- <code title="post /api/ledger_account_statements">client.ledgerAccountStatements.<a href="./resources/ledger-account-statements.ts">create</a>({ ...params }) -> LedgerAccountStatementCreateResponse</code>
- <code title="get /api/ledger_account_statements/{id}">client.ledgerAccountStatements.<a href="./resources/ledger-account-statements.ts">retrieve</a>(id) -> LedgerAccountStatementRetrieveResponse</code>

# LedgerEntries

Types:

- <code><a href="./resources/ledger-entries.ts">LedgerEntry</a></code>

Methods:

- <code title="get /api/ledger_entries/{id}">client.ledgerEntries.<a href="./resources/ledger-entries.ts">retrieve</a>(id, { ...params }) -> LedgerEntry</code>
- <code title="get /api/ledger_entries">client.ledgerEntries.<a href="./resources/ledger-entries.ts">list</a>({ ...params }) -> LedgerEntriesPage</code>

# LedgerEventHandlers

Types:

- <code><a href="./resources/ledger-event-handlers.ts">LedgerEventHandlerCreateResponse</a></code>
- <code><a href="./resources/ledger-event-handlers.ts">LedgerEventHandlerRetrieveResponse</a></code>
- <code><a href="./resources/ledger-event-handlers.ts">LedgerEventHandlerListResponse</a></code>
- <code><a href="./resources/ledger-event-handlers.ts">LedgerEventHandlerDeleteResponse</a></code>

Methods:

- <code title="post /api/ledger_event_handlers">client.ledgerEventHandlers.<a href="./resources/ledger-event-handlers.ts">create</a>({ ...params }) -> LedgerEventHandlerCreateResponse</code>
- <code title="get /api/ledger_event_handlers/{id}">client.ledgerEventHandlers.<a href="./resources/ledger-event-handlers.ts">retrieve</a>(id) -> LedgerEventHandlerRetrieveResponse</code>
- <code title="get /api/ledger_event_handlers">client.ledgerEventHandlers.<a href="./resources/ledger-event-handlers.ts">list</a>({ ...params }) -> LedgerEventHandlerListResponsesPage</code>
- <code title="delete /api/ledger_event_handlers/{id}">client.ledgerEventHandlers.<a href="./resources/ledger-event-handlers.ts">del</a>(id) -> LedgerEventHandlerDeleteResponse</code>

# LedgerTransactions

Types:

- <code><a href="./resources/ledger-transactions/ledger-transactions.ts">LedgerTransaction</a></code>

Methods:

- <code title="post /api/ledger_transactions">client.ledgerTransactions.<a href="./resources/ledger-transactions/ledger-transactions.ts">create</a>({ ...params }) -> LedgerTransaction</code>
- <code title="get /api/ledger_transactions/{id}">client.ledgerTransactions.<a href="./resources/ledger-transactions/ledger-transactions.ts">retrieve</a>(id) -> LedgerTransaction</code>
- <code title="patch /api/ledger_transactions/{id}">client.ledgerTransactions.<a href="./resources/ledger-transactions/ledger-transactions.ts">update</a>(id, { ...params }) -> LedgerTransaction</code>
- <code title="get /api/ledger_transactions">client.ledgerTransactions.<a href="./resources/ledger-transactions/ledger-transactions.ts">list</a>({ ...params }) -> LedgerTransactionsPage</code>
- <code title="post /api/ledger_transactions/{ledger_transaction_id}/reversal">client.ledgerTransactions.<a href="./resources/ledger-transactions/ledger-transactions.ts">createReversal</a>(ledgerTransactionId, { ...params }) -> LedgerTransaction</code>

## Versions

Types:

- <code><a href="./resources/ledger-transactions/versions.ts">LedgerTransactionVersion</a></code>

Methods:

- <code title="get /api/ledger_transaction_versions">client.ledgerTransactions.versions.<a href="./resources/ledger-transactions/versions.ts">list</a>({ ...params }) -> LedgerTransactionVersionsPage</code>

# LineItems

Types:

- <code><a href="./resources/line-items.ts">LineItem</a></code>

Methods:

- <code title="get /api/{itemizable_type}/{itemizable_id}/line_items/{id}">client.lineItems.<a href="./resources/line-items.ts">retrieve</a>(itemizableType, itemizableId, id) -> LineItem</code>
- <code title="patch /api/{itemizable_type}/{itemizable_id}/line_items/{id}">client.lineItems.<a href="./resources/line-items.ts">update</a>(itemizableType, itemizableId, id, { ...params }) -> LineItem</code>
- <code title="get /api/{itemizable_type}/{itemizable_id}/line_items">client.lineItems.<a href="./resources/line-items.ts">list</a>(itemizableType, itemizableId, { ...params }) -> LineItemsPage</code>

# PaymentFlows

Types:

- <code><a href="./resources/payment-flows.ts">PaymentFlow</a></code>

Methods:

- <code title="post /api/payment_flows">client.paymentFlows.<a href="./resources/payment-flows.ts">create</a>({ ...params }) -> PaymentFlow</code>
- <code title="get /api/payment_flows/{id}">client.paymentFlows.<a href="./resources/payment-flows.ts">retrieve</a>(id, { ...params }) -> PaymentFlow</code>
- <code title="patch /api/payment_flows/{id}">client.paymentFlows.<a href="./resources/payment-flows.ts">update</a>(id, { ...params }) -> PaymentFlow</code>
- <code title="get /api/payment_flows">client.paymentFlows.<a href="./resources/payment-flows.ts">list</a>({ ...params }) -> PaymentFlowsPage</code>

# PaymentOrders

Types:

- <code><a href="./resources/payment-orders/payment-orders.ts">PaymentOrder</a></code>
- <code><a href="./resources/payment-orders/payment-orders.ts">PaymentOrderSubtype</a></code>
- <code><a href="./resources/payment-orders/payment-orders.ts">PaymentOrderType</a></code>

Methods:

- <code title="post /api/payment_orders">client.paymentOrders.<a href="./resources/payment-orders/payment-orders.ts">create</a>({ ...params }) -> PaymentOrder</code>
- <code title="get /api/payment_orders/{id}">client.paymentOrders.<a href="./resources/payment-orders/payment-orders.ts">retrieve</a>(id) -> PaymentOrder</code>
- <code title="patch /api/payment_orders/{id}">client.paymentOrders.<a href="./resources/payment-orders/payment-orders.ts">update</a>(id, { ...params }) -> PaymentOrder</code>
- <code title="get /api/payment_orders">client.paymentOrders.<a href="./resources/payment-orders/payment-orders.ts">list</a>({ ...params }) -> PaymentOrdersPage</code>
- <code title="post /api/payment_orders/create_async">client.paymentOrders.<a href="./resources/payment-orders/payment-orders.ts">createAsync</a>({ ...params }) -> AsyncResponse</code>

## Reversals

Types:

- <code><a href="./resources/payment-orders/reversals.ts">Reversal</a></code>

Methods:

- <code title="post /api/payment_orders/{payment_order_id}/reversals">client.paymentOrders.reversals.<a href="./resources/payment-orders/reversals.ts">create</a>(paymentOrderId, { ...params }) -> Reversal</code>
- <code title="get /api/payment_orders/{payment_order_id}/reversals/{reversal_id}">client.paymentOrders.reversals.<a href="./resources/payment-orders/reversals.ts">retrieve</a>(paymentOrderId, reversalId) -> Reversal</code>
- <code title="get /api/payment_orders/{payment_order_id}/reversals">client.paymentOrders.reversals.<a href="./resources/payment-orders/reversals.ts">list</a>(paymentOrderId, { ...params }) -> ReversalsPage</code>

# PaymentReferences

Types:

- <code><a href="./resources/payment-references.ts">PaymentReference</a></code>

Methods:

- <code title="get /api/payment_references">client.paymentReferences.<a href="./resources/payment-references.ts">list</a>({ ...params }) -> PaymentReferencesPage</code>
- <code title="get /api/payment_references/{id}">client.paymentReferences.<a href="./resources/payment-references.ts">retireve</a>(id) -> PaymentReference</code>

# Returns

Types:

- <code><a href="./resources/returns.ts">ReturnObject</a></code>

Methods:

- <code title="post /api/returns">client.returns.<a href="./resources/returns.ts">create</a>({ ...params }) -> ReturnObject</code>
- <code title="get /api/returns/{id}">client.returns.<a href="./resources/returns.ts">retrieve</a>(id) -> ReturnObject</code>
- <code title="get /api/returns">client.returns.<a href="./resources/returns.ts">list</a>({ ...params }) -> ReturnObjectsPage</code>

# Transactions

Types:

- <code><a href="./resources/transactions/transactions.ts">Transaction</a></code>

Methods:

- <code title="get /api/transactions/{id}">client.transactions.<a href="./resources/transactions/transactions.ts">retrieve</a>(id) -> Transaction</code>
- <code title="patch /api/transactions/{id}">client.transactions.<a href="./resources/transactions/transactions.ts">update</a>(id, { ...params }) -> Transaction</code>
- <code title="get /api/transactions">client.transactions.<a href="./resources/transactions/transactions.ts">list</a>({ ...params }) -> TransactionsPage</code>

## LineItems

Types:

- <code><a href="./resources/transactions/line-items.ts">TransactionLineItem</a></code>

Methods:

- <code title="get /api/transactions/{transaction_id}/line_items">client.transactions.lineItems.<a href="./resources/transactions/line-items.ts">list</a>(transactionId, { ...params }) -> TransactionLineItemsPage</code>

# Validations

Types:

- <code><a href="./resources/validations.ts">RoutingNumberLookupRequest</a></code>

Methods:

- <code title="get /api/validations/routing_numbers">client.validations.<a href="./resources/validations.ts">validateRoutingNumber</a>({ ...params }) -> RoutingNumberLookupRequest</code>

# PaperItems

Types:

- <code><a href="./resources/paper-items.ts">PaperItem</a></code>

Methods:

- <code title="get /api/paper_items/{id}">client.paperItems.<a href="./resources/paper-items.ts">retrieve</a>(id) -> PaperItem</code>
- <code title="get /api/paper_items">client.paperItems.<a href="./resources/paper-items.ts">list</a>({ ...params }) -> PaperItemsPage</code>

# Webhooks

Methods:

- `getSignature`
- `validateSignature`

# VirtualAccounts

Types:

- <code><a href="./resources/virtual-accounts.ts">VirtualAccount</a></code>

Methods:

- <code title="post /api/virtual_accounts">client.virtualAccounts.<a href="./resources/virtual-accounts.ts">create</a>({ ...params }) -> VirtualAccount</code>
- <code title="get /api/virtual_accounts/{id}">client.virtualAccounts.<a href="./resources/virtual-accounts.ts">retrieve</a>(id) -> Promise<void></code>
- <code title="patch /api/virtual_accounts/{id}">client.virtualAccounts.<a href="./resources/virtual-accounts.ts">update</a>(id, { ...params }) -> VirtualAccount</code>
- <code title="get /api/virtual_accounts">client.virtualAccounts.<a href="./resources/virtual-accounts.ts">list</a>({ ...params }) -> VirtualAccountsPage</code>
- <code title="delete /api/virtual_accounts/{id}">client.virtualAccounts.<a href="./resources/virtual-accounts.ts">del</a>(id) -> VirtualAccount</code>
