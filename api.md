# Connections

Models:

- <code><a href="./resources/connections.ts">Connection</a></code>

Methods:

- <code title="get /api/connections">client.connections.<a href="./resources/connections.ts">list</a>({ ...params }) -> ConnectionsPage</code>

# Counterparties

Models:

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

Models:

- <code><a href="./resources/events.ts">Event</a></code>

Methods:

- <code title="get /api/events/{id}">client.events.<a href="./resources/events.ts">retrieve</a>(id) -> Event</code>
- <code title="get /api/events">client.events.<a href="./resources/events.ts">list</a>({ ...params }) -> EventsPage</code>

# ExpectedPayments

Models:

- <code><a href="./resources/expected-payments.ts">ExpectedPayment</a></code>
- <code><a href="./resources/expected-payments.ts">ExpectedPaymentType</a></code>

Methods:

- <code title="post /api/expected_payments">client.expectedPayments.<a href="./resources/expected-payments.ts">create</a>({ ...params }) -> ExpectedPayment</code>
- <code title="get /api/expected_payments/{id}">client.expectedPayments.<a href="./resources/expected-payments.ts">retrieve</a>(id) -> ExpectedPayment</code>
- <code title="patch /api/expected_payments/{id}">client.expectedPayments.<a href="./resources/expected-payments.ts">update</a>(id, { ...params }) -> ExpectedPayment</code>
- <code title="get /api/expected_payments">client.expectedPayments.<a href="./resources/expected-payments.ts">list</a>({ ...params }) -> ExpectedPaymentsPage</code>
- <code title="delete /api/expected_payments/{id}">client.expectedPayments.<a href="./resources/expected-payments.ts">del</a>(id) -> ExpectedPayment</code>

# ExternalAccounts

Models:

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

Models:

- <code><a href="./resources/incoming-payment-details.ts">IncomingPaymentDetail</a></code>

Methods:

- <code title="get /api/incoming_payment_details/{id}">client.incomingPaymentDetails.<a href="./resources/incoming-payment-details.ts">retrieve</a>(id) -> IncomingPaymentDetail</code>
- <code title="patch /api/incoming_payment_details/{id}">client.incomingPaymentDetails.<a href="./resources/incoming-payment-details.ts">update</a>(id, { ...params }) -> IncomingPaymentDetail</code>
- <code title="get /api/incoming_payment_details">client.incomingPaymentDetails.<a href="./resources/incoming-payment-details.ts">list</a>({ ...params }) -> IncomingPaymentDetailsPage</code>
- <code title="post /api/simulations/incoming_payment_details/create_async">client.incomingPaymentDetails.<a href="./resources/incoming-payment-details.ts">createAsync</a>({ ...params }) -> AsyncResponse</code>

# Documents

Models:

- <code><a href="./resources/documents.ts">Document</a></code>

Methods:

- <code title="post /api/{documentable_type}/{documentable_id}/documents">client.documents.<a href="./resources/documents.ts">create</a>(documentableType, documentableId, { ...params }) -> Document</code>
- <code title="get /api/{documentable_type}/{documentable_id}/documents/{id}">client.documents.<a href="./resources/documents.ts">retrieve</a>(documentableType, documentableId, id) -> Document</code>
- <code title="get /api/{documentable_type}/{documentable_id}/documents">client.documents.<a href="./resources/documents.ts">list</a>(documentableType, documentableId, { ...params }) -> DocumentsPage</code>

# AccountDetails

Models:

- <code><a href="./resources/account-details.ts">AccountDetail</a></code>

Methods:

- <code title="post /api/{accounts_type}/{account_id}/account_details">client.accountDetails.<a href="./resources/account-details.ts">create</a>(accountsType, accountId, { ...params }) -> AccountDetail</code>
- <code title="get /api/{accounts_type}/{account_id}/account_details/{id}">client.accountDetails.<a href="./resources/account-details.ts">retrieve</a>(accountsType, accountId, id) -> AccountDetail</code>
- <code title="get /api/{accounts_type}/{account_id}/account_details">client.accountDetails.<a href="./resources/account-details.ts">list</a>(accountsType, accountId, { ...params }) -> AccountDetailsPage</code>
- <code title="delete /api/{accounts_type}/{account_id}/account_details/{id}">client.accountDetails.<a href="./resources/account-details.ts">del</a>(accountsType, accountId, id) -> Promise<void></code>

# RoutingDetails

Models:

- <code><a href="./resources/routing-details.ts">RoutingDetail</a></code>

Methods:

- <code title="post /api/{accounts_type}/{account_id}/routing_details">client.routingDetails.<a href="./resources/routing-details.ts">create</a>(accountsType, accountId, { ...params }) -> RoutingDetail</code>
- <code title="get /api/{accounts_type}/{account_id}/routing_details/{id}">client.routingDetails.<a href="./resources/routing-details.ts">retrieve</a>(accountsType, accountId, id) -> RoutingDetail</code>
- <code title="get /api/{accounts_type}/{account_id}/routing_details">client.routingDetails.<a href="./resources/routing-details.ts">list</a>(accountsType, accountId, { ...params }) -> RoutingDetailsPage</code>
- <code title="delete /api/{accounts_type}/{account_id}/routing_details/{id}">client.routingDetails.<a href="./resources/routing-details.ts">del</a>(accountsType, accountId, id) -> Promise<void></code>

# InternalAccounts

Models:

- <code><a href="./resources/internal-accounts/internal-accounts.ts">InternalAccount</a></code>

Methods:

- <code title="post /api/internal_accounts">client.internalAccounts.<a href="./resources/internal-accounts/internal-accounts.ts">create</a>({ ...params }) -> InternalAccount</code>
- <code title="get /api/internal_accounts/{id}">client.internalAccounts.<a href="./resources/internal-accounts/internal-accounts.ts">retrieve</a>(id) -> InternalAccount</code>
- <code title="patch /api/internal_accounts/{id}">client.internalAccounts.<a href="./resources/internal-accounts/internal-accounts.ts">update</a>(id, { ...params }) -> InternalAccount</code>
- <code title="get /api/internal_accounts">client.internalAccounts.<a href="./resources/internal-accounts/internal-accounts.ts">list</a>({ ...params }) -> InternalAccountsPage</code>

## BalanceReports

Models:

- <code><a href="./resources/internal-accounts/balance-reports.ts">BalanceReport</a></code>

Methods:

- <code title="get /api/internal_accounts/{internal_account_id}/balance_reports/{id}">client.internalAccounts.balanceReports.<a href="./resources/internal-accounts/balance-reports.ts">retrieve</a>(internalAccountId, id) -> BalanceReport</code>
- <code title="get /api/internal_accounts/{internal_account_id}/balance_reports">client.internalAccounts.balanceReports.<a href="./resources/internal-accounts/balance-reports.ts">list</a>(internalAccountId, { ...params }) -> BalanceReportsPage</code>

# Ledgers

Models:

- <code><a href="./resources/ledgers.ts">Ledger</a></code>

Methods:

- <code title="post /api/ledgers">client.ledgers.<a href="./resources/ledgers.ts">create</a>({ ...params }) -> Ledger</code>
- <code title="get /api/ledgers/{id}">client.ledgers.<a href="./resources/ledgers.ts">retrieve</a>(id) -> Ledger</code>
- <code title="patch /api/ledgers/{id}">client.ledgers.<a href="./resources/ledgers.ts">update</a>(id, { ...params }) -> Ledger</code>
- <code title="get /api/ledgers">client.ledgers.<a href="./resources/ledgers.ts">list</a>({ ...params }) -> LedgersPage</code>
- <code title="delete /api/ledgers/{id}">client.ledgers.<a href="./resources/ledgers.ts">del</a>(id) -> Ledger</code>

# LedgerAccountCategories

Models:

- <code><a href="./resources/ledger-account-categories.ts">LedgerAccountCategory</a></code>

Methods:

- <code title="post /api/ledger_account_categories">client.ledgerAccountCategories.<a href="./resources/ledger-account-categories.ts">create</a>({ ...params }) -> LedgerAccountCategory</code>
- <code title="get /api/ledger_account_categories/{id}">client.ledgerAccountCategories.<a href="./resources/ledger-account-categories.ts">retrieve</a>(id, { ...params }) -> LedgerAccountCategory</code>
- <code title="patch /api/ledger_account_categories/{id}">client.ledgerAccountCategories.<a href="./resources/ledger-account-categories.ts">update</a>(id, { ...params }) -> LedgerAccountCategory</code>
- <code title="get /api/ledger_account_categories">client.ledgerAccountCategories.<a href="./resources/ledger-account-categories.ts">list</a>({ ...params }) -> LedgerAccountCategoriesPage</code>
- <code title="delete /api/ledger_account_categories/{id}">client.ledgerAccountCategories.<a href="./resources/ledger-account-categories.ts">del</a>(id) -> LedgerAccountCategory</code>
- <code title="put /api/ledger_account_categories/{id}/ledger_accounts/{ledger_account_id}">client.ledgerAccountCategories.<a href="./resources/ledger-account-categories.ts">addLedgerAccount</a>(id, ledgerAccountId) -> Promise<void></code>
- <code title="put /api/ledger_account_categories/{id}/ledger_account_categories/{sub_category_id}">client.ledgerAccountCategories.<a href="./resources/ledger-account-categories.ts">addNestedCategory</a>(id, subCategoryId) -> Promise<void></code>
- <code title="delete /api/ledger_account_categories/{id}/ledger_accounts/{ledger_account_id}">client.ledgerAccountCategories.<a href="./resources/ledger-account-categories.ts">removeLedgerAccount</a>(id, ledgerAccountId) -> Promise<void></code>
- <code title="delete /api/ledger_account_categories/{id}/ledger_account_categories/{sub_category_id}">client.ledgerAccountCategories.<a href="./resources/ledger-account-categories.ts">removeNestedCategory</a>(id, subCategoryId) -> Promise<void></code>

# LedgerAccounts

Models:

- <code><a href="./resources/ledger-accounts.ts">LedgerAccount</a></code>

Methods:

- <code title="post /api/ledger_accounts">client.ledgerAccounts.<a href="./resources/ledger-accounts.ts">create</a>({ ...params }) -> LedgerAccount</code>
- <code title="get /api/ledger_accounts/{id}">client.ledgerAccounts.<a href="./resources/ledger-accounts.ts">retrieve</a>(id, { ...params }) -> LedgerAccount</code>
- <code title="patch /api/ledger_accounts/{id}">client.ledgerAccounts.<a href="./resources/ledger-accounts.ts">update</a>(id, { ...params }) -> LedgerAccount</code>
- <code title="get /api/ledger_accounts">client.ledgerAccounts.<a href="./resources/ledger-accounts.ts">list</a>({ ...params }) -> LedgerAccountsPage</code>
- <code title="delete /api/ledger_accounts/{id}">client.ledgerAccounts.<a href="./resources/ledger-accounts.ts">del</a>(id) -> LedgerAccount</code>

# LedgerAccountPayouts

Models:

- <code><a href="./resources/ledger-account-payouts.ts">LedgerAccountPayout</a></code>

Methods:

- <code title="post /api/ledger_account_payouts">client.ledgerAccountPayouts.<a href="./resources/ledger-account-payouts.ts">create</a>({ ...params }) -> LedgerAccountPayout</code>
- <code title="patch /api/ledger_account_payouts/{id}">client.ledgerAccountPayouts.<a href="./resources/ledger-account-payouts.ts">update</a>(id, { ...params }) -> LedgerAccountPayout</code>
- <code title="get /api/ledger_account_payouts">client.ledgerAccountPayouts.<a href="./resources/ledger-account-payouts.ts">list</a>({ ...params }) -> LedgerAccountPayoutsPage</code>
- <code title="get /api/ledger_account_payouts/{id}">client.ledgerAccountPayouts.<a href="./resources/ledger-account-payouts.ts">retireve</a>(id) -> LedgerAccountPayout</code>

# LedgerEntries

Models:

- <code><a href="./resources/ledger-entries.ts">LedgerEntry</a></code>

Methods:

- <code title="get /api/ledger_entries/{id}">client.ledgerEntries.<a href="./resources/ledger-entries.ts">retrieve</a>(id) -> LedgerEntry</code>
- <code title="get /api/ledger_entries">client.ledgerEntries.<a href="./resources/ledger-entries.ts">list</a>({ ...params }) -> LedgerEntriesPage</code>

# LedgerTransactions

Models:

- <code><a href="./resources/ledger-transactions/ledger-transactions.ts">LedgerTransaction</a></code>

Methods:

- <code title="post /api/ledger_transactions">client.ledgerTransactions.<a href="./resources/ledger-transactions/ledger-transactions.ts">create</a>({ ...params }) -> LedgerTransaction</code>
- <code title="get /api/ledger_transactions/{id}">client.ledgerTransactions.<a href="./resources/ledger-transactions/ledger-transactions.ts">retrieve</a>(id) -> LedgerTransaction</code>
- <code title="patch /api/ledger_transactions/{id}">client.ledgerTransactions.<a href="./resources/ledger-transactions/ledger-transactions.ts">update</a>(id, { ...params }) -> LedgerTransaction</code>
- <code title="get /api/ledger_transactions">client.ledgerTransactions.<a href="./resources/ledger-transactions/ledger-transactions.ts">list</a>({ ...params }) -> LedgerTransactionsPage</code>

## Versions

Models:

- <code><a href="./resources/ledger-transactions/versions.ts">LedgerTransactionVersion</a></code>

Methods:

- <code title="get /api/ledger_transactions/{id}/versions">client.ledgerTransactions.versions.<a href="./resources/ledger-transactions/versions.ts">list</a>(id, { ...params }) -> LedgerTransactionVersionsPage</code>

# LineItems

Models:

- <code><a href="./resources/line-items.ts">LineItem</a></code>

Methods:

- <code title="get /api/{itemizable_type}/{itemizable_id}/line_items/{id}">client.lineItems.<a href="./resources/line-items.ts">retrieve</a>(itemizableType, itemizableId, id) -> LineItem</code>
- <code title="patch /api/{itemizable_type}/{itemizable_id}/line_items/{id}">client.lineItems.<a href="./resources/line-items.ts">update</a>(itemizableType, itemizableId, id, { ...params }) -> LineItem</code>
- <code title="get /api/{itemizable_type}/{itemizable_id}/line_items">client.lineItems.<a href="./resources/line-items.ts">list</a>(itemizableType, itemizableId, { ...params }) -> LineItemsPage</code>

# PaymentOrders

Models:

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

Models:

- <code><a href="./resources/payment-orders/reversals.ts">Reversal</a></code>

Methods:

- <code title="post /api/payment_orders/{payment_order_id}/reversals">client.paymentOrders.reversals.<a href="./resources/payment-orders/reversals.ts">create</a>(paymentOrderId, { ...params }) -> Reversal</code>
- <code title="get /api/payment_orders/{payment_order_id}/reversals/{reversal_id}">client.paymentOrders.reversals.<a href="./resources/payment-orders/reversals.ts">retrieve</a>(paymentOrderId, reversalId) -> Reversal</code>
- <code title="get /api/payment_orders/{payment_order_id}/reversals">client.paymentOrders.reversals.<a href="./resources/payment-orders/reversals.ts">list</a>(paymentOrderId, { ...params }) -> ReversalsPage</code>

# PaymentReferences

Models:

- <code><a href="./resources/payment-references.ts">PaymentReference</a></code>

Methods:

- <code title="get /api/payment_references">client.paymentReferences.<a href="./resources/payment-references.ts">list</a>({ ...params }) -> PaymentReferencesPage</code>
- <code title="get /api/payment_references/{id}">client.paymentReferences.<a href="./resources/payment-references.ts">retireve</a>(id) -> PaymentReference</code>

# Returns

Models:

- <code><a href="./resources/returns.ts">ReturnObject</a></code>

Methods:

- <code title="post /api/returns">client.returns.<a href="./resources/returns.ts">create</a>({ ...params }) -> ReturnObject</code>
- <code title="get /api/returns/{id}">client.returns.<a href="./resources/returns.ts">retrieve</a>(id) -> ReturnObject</code>
- <code title="get /api/returns">client.returns.<a href="./resources/returns.ts">list</a>({ ...params }) -> ReturnObjectsPage</code>

# Transactions

Models:

- <code><a href="./resources/transactions.ts">Transaction</a></code>

Methods:

- <code title="get /api/transactions/{id}">client.transactions.<a href="./resources/transactions.ts">retrieve</a>(id) -> Transaction</code>
- <code title="patch /api/transactions/{id}">client.transactions.<a href="./resources/transactions.ts">update</a>(id, { ...params }) -> Transaction</code>
- <code title="get /api/transactions">client.transactions.<a href="./resources/transactions.ts">list</a>({ ...params }) -> TransactionsPage</code>

# Validations

Models:

- <code><a href="./resources/validations.ts">RoutingNumberLookupRequest</a></code>

Methods:

- <code title="get /api/validations/routing_numbers">client.validations.<a href="./resources/validations.ts">validateRoutingNumber</a>({ ...params }) -> RoutingNumberLookupRequest</code>

# PaperItems

Models:

- <code><a href="./resources/paper-items.ts">PaperItem</a></code>

Methods:

- <code title="get /api/paper_items/{id}">client.paperItems.<a href="./resources/paper-items.ts">retrieve</a>(id) -> PaperItem</code>
- <code title="get /api/paper_items">client.paperItems.<a href="./resources/paper-items.ts">list</a>({ ...params }) -> PaperItemsPage</code>

# Webhooks

Custom Methods:

- `getSignature`
- `validateSignature`

# VirtualAccounts

Models:

- <code><a href="./resources/virtual-accounts.ts">VirtualAccount</a></code>

Methods:

- <code title="post /api/virtual_accounts">client.virtualAccounts.<a href="./resources/virtual-accounts.ts">create</a>({ ...params }) -> VirtualAccount</code>
- <code title="get /api/virtual_accounts/{id}">client.virtualAccounts.<a href="./resources/virtual-accounts.ts">retrieve</a>(id) -> Promise<void></code>
- <code title="patch /api/virtual_accounts/{id}">client.virtualAccounts.<a href="./resources/virtual-accounts.ts">update</a>(id, { ...params }) -> VirtualAccount</code>
- <code title="get /api/virtual_accounts">client.virtualAccounts.<a href="./resources/virtual-accounts.ts">list</a>({ ...params }) -> VirtualAccountsPage</code>
- <code title="delete /api/virtual_accounts/{id}">client.virtualAccounts.<a href="./resources/virtual-accounts.ts">del</a>(id) -> VirtualAccount</code>
