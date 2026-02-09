import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.ping',
    fullyQualifiedName: 'ping',
    httpMethod: 'get',
    httpPath: '/api/ping',
  },
  {
    clientCallName: 'client.connections.list',
    fullyQualifiedName: 'connections.list',
    httpMethod: 'get',
    httpPath: '/api/connections',
  },
  {
    clientCallName: 'client.counterparties.create',
    fullyQualifiedName: 'counterparties.create',
    httpMethod: 'post',
    httpPath: '/api/counterparties',
  },
  {
    clientCallName: 'client.counterparties.retrieve',
    fullyQualifiedName: 'counterparties.retrieve',
    httpMethod: 'get',
    httpPath: '/api/counterparties/{id}',
  },
  {
    clientCallName: 'client.counterparties.update',
    fullyQualifiedName: 'counterparties.update',
    httpMethod: 'patch',
    httpPath: '/api/counterparties/{id}',
  },
  {
    clientCallName: 'client.counterparties.list',
    fullyQualifiedName: 'counterparties.list',
    httpMethod: 'get',
    httpPath: '/api/counterparties',
  },
  {
    clientCallName: 'client.counterparties.delete',
    fullyQualifiedName: 'counterparties.delete',
    httpMethod: 'delete',
    httpPath: '/api/counterparties/{id}',
  },
  {
    clientCallName: 'client.counterparties.collectAccount',
    fullyQualifiedName: 'counterparties.collectAccount',
    httpMethod: 'post',
    httpPath: '/api/counterparties/{id}/collect_account',
  },
  {
    clientCallName: 'client.events.retrieve',
    fullyQualifiedName: 'events.retrieve',
    httpMethod: 'get',
    httpPath: '/api/events/{id}',
  },
  {
    clientCallName: 'client.events.list',
    fullyQualifiedName: 'events.list',
    httpMethod: 'get',
    httpPath: '/api/events',
  },
  {
    clientCallName: 'client.expectedPayments.create',
    fullyQualifiedName: 'expectedPayments.create',
    httpMethod: 'post',
    httpPath: '/api/expected_payments',
  },
  {
    clientCallName: 'client.expectedPayments.retrieve',
    fullyQualifiedName: 'expectedPayments.retrieve',
    httpMethod: 'get',
    httpPath: '/api/expected_payments/{id}',
  },
  {
    clientCallName: 'client.expectedPayments.update',
    fullyQualifiedName: 'expectedPayments.update',
    httpMethod: 'patch',
    httpPath: '/api/expected_payments/{id}',
  },
  {
    clientCallName: 'client.expectedPayments.list',
    fullyQualifiedName: 'expectedPayments.list',
    httpMethod: 'get',
    httpPath: '/api/expected_payments',
  },
  {
    clientCallName: 'client.expectedPayments.delete',
    fullyQualifiedName: 'expectedPayments.delete',
    httpMethod: 'delete',
    httpPath: '/api/expected_payments/{id}',
  },
  {
    clientCallName: 'client.externalAccounts.create',
    fullyQualifiedName: 'externalAccounts.create',
    httpMethod: 'post',
    httpPath: '/api/external_accounts',
  },
  {
    clientCallName: 'client.externalAccounts.retrieve',
    fullyQualifiedName: 'externalAccounts.retrieve',
    httpMethod: 'get',
    httpPath: '/api/external_accounts/{id}',
  },
  {
    clientCallName: 'client.externalAccounts.update',
    fullyQualifiedName: 'externalAccounts.update',
    httpMethod: 'patch',
    httpPath: '/api/external_accounts/{id}',
  },
  {
    clientCallName: 'client.externalAccounts.list',
    fullyQualifiedName: 'externalAccounts.list',
    httpMethod: 'get',
    httpPath: '/api/external_accounts',
  },
  {
    clientCallName: 'client.externalAccounts.delete',
    fullyQualifiedName: 'externalAccounts.delete',
    httpMethod: 'delete',
    httpPath: '/api/external_accounts/{id}',
  },
  {
    clientCallName: 'client.externalAccounts.completeVerification',
    fullyQualifiedName: 'externalAccounts.completeVerification',
    httpMethod: 'post',
    httpPath: '/api/external_accounts/{id}/complete_verification',
  },
  {
    clientCallName: 'client.externalAccounts.verify',
    fullyQualifiedName: 'externalAccounts.verify',
    httpMethod: 'post',
    httpPath: '/api/external_accounts/{id}/verify',
  },
  {
    clientCallName: 'client.incomingPaymentDetails.retrieve',
    fullyQualifiedName: 'incomingPaymentDetails.retrieve',
    httpMethod: 'get',
    httpPath: '/api/incoming_payment_details/{id}',
  },
  {
    clientCallName: 'client.incomingPaymentDetails.update',
    fullyQualifiedName: 'incomingPaymentDetails.update',
    httpMethod: 'patch',
    httpPath: '/api/incoming_payment_details/{id}',
  },
  {
    clientCallName: 'client.incomingPaymentDetails.list',
    fullyQualifiedName: 'incomingPaymentDetails.list',
    httpMethod: 'get',
    httpPath: '/api/incoming_payment_details',
  },
  {
    clientCallName: 'client.incomingPaymentDetails.createAsync',
    fullyQualifiedName: 'incomingPaymentDetails.createAsync',
    httpMethod: 'post',
    httpPath: '/api/simulations/incoming_payment_details/create_async',
  },
  {
    clientCallName: 'client.invoices.create',
    fullyQualifiedName: 'invoices.create',
    httpMethod: 'post',
    httpPath: '/api/invoices',
  },
  {
    clientCallName: 'client.invoices.retrieve',
    fullyQualifiedName: 'invoices.retrieve',
    httpMethod: 'get',
    httpPath: '/api/invoices/{id}',
  },
  {
    clientCallName: 'client.invoices.update',
    fullyQualifiedName: 'invoices.update',
    httpMethod: 'patch',
    httpPath: '/api/invoices/{id}',
  },
  {
    clientCallName: 'client.invoices.list',
    fullyQualifiedName: 'invoices.list',
    httpMethod: 'get',
    httpPath: '/api/invoices',
  },
  {
    clientCallName: 'client.invoices.addPaymentOrder',
    fullyQualifiedName: 'invoices.addPaymentOrder',
    httpMethod: 'put',
    httpPath: '/api/invoices/{id}/payment_orders/{payment_order_id}',
  },
  {
    clientCallName: 'client.invoices.lineItems.create',
    fullyQualifiedName: 'invoices.lineItems.create',
    httpMethod: 'post',
    httpPath: '/api/invoices/{invoice_id}/invoice_line_items',
  },
  {
    clientCallName: 'client.invoices.lineItems.retrieve',
    fullyQualifiedName: 'invoices.lineItems.retrieve',
    httpMethod: 'get',
    httpPath: '/api/invoices/{invoice_id}/invoice_line_items/{id}',
  },
  {
    clientCallName: 'client.invoices.lineItems.update',
    fullyQualifiedName: 'invoices.lineItems.update',
    httpMethod: 'patch',
    httpPath: '/api/invoices/{invoice_id}/invoice_line_items/{id}',
  },
  {
    clientCallName: 'client.invoices.lineItems.list',
    fullyQualifiedName: 'invoices.lineItems.list',
    httpMethod: 'get',
    httpPath: '/api/invoices/{invoice_id}/invoice_line_items',
  },
  {
    clientCallName: 'client.invoices.lineItems.delete',
    fullyQualifiedName: 'invoices.lineItems.delete',
    httpMethod: 'delete',
    httpPath: '/api/invoices/{invoice_id}/invoice_line_items/{id}',
  },
  {
    clientCallName: 'client.documents.create',
    fullyQualifiedName: 'documents.create',
    httpMethod: 'post',
    httpPath: '/api/documents',
  },
  {
    clientCallName: 'client.documents.retrieve',
    fullyQualifiedName: 'documents.retrieve',
    httpMethod: 'get',
    httpPath: '/api/documents/{id}',
  },
  {
    clientCallName: 'client.documents.list',
    fullyQualifiedName: 'documents.list',
    httpMethod: 'get',
    httpPath: '/api/documents',
  },
  {
    clientCallName: 'client.accountCollectionFlows.create',
    fullyQualifiedName: 'accountCollectionFlows.create',
    httpMethod: 'post',
    httpPath: '/api/account_collection_flows',
  },
  {
    clientCallName: 'client.accountCollectionFlows.retrieve',
    fullyQualifiedName: 'accountCollectionFlows.retrieve',
    httpMethod: 'get',
    httpPath: '/api/account_collection_flows/{id}',
  },
  {
    clientCallName: 'client.accountCollectionFlows.update',
    fullyQualifiedName: 'accountCollectionFlows.update',
    httpMethod: 'patch',
    httpPath: '/api/account_collection_flows/{id}',
  },
  {
    clientCallName: 'client.accountCollectionFlows.list',
    fullyQualifiedName: 'accountCollectionFlows.list',
    httpMethod: 'get',
    httpPath: '/api/account_collection_flows',
  },
  {
    clientCallName: 'client.accountDetails.create',
    fullyQualifiedName: 'accountDetails.create',
    httpMethod: 'post',
    httpPath: '/api/{accounts_type}/{account_id}/account_details',
  },
  {
    clientCallName: 'client.accountDetails.retrieve',
    fullyQualifiedName: 'accountDetails.retrieve',
    httpMethod: 'get',
    httpPath: '/api/{accounts_type}/{account_id}/account_details/{id}',
  },
  {
    clientCallName: 'client.accountDetails.list',
    fullyQualifiedName: 'accountDetails.list',
    httpMethod: 'get',
    httpPath: '/api/{accounts_type}/{account_id}/account_details',
  },
  {
    clientCallName: 'client.accountDetails.delete',
    fullyQualifiedName: 'accountDetails.delete',
    httpMethod: 'delete',
    httpPath: '/api/{accounts_type}/{account_id}/account_details/{id}',
  },
  {
    clientCallName: 'client.routingDetails.create',
    fullyQualifiedName: 'routingDetails.create',
    httpMethod: 'post',
    httpPath: '/api/{accounts_type}/{account_id}/routing_details',
  },
  {
    clientCallName: 'client.routingDetails.retrieve',
    fullyQualifiedName: 'routingDetails.retrieve',
    httpMethod: 'get',
    httpPath: '/api/{accounts_type}/{account_id}/routing_details/{id}',
  },
  {
    clientCallName: 'client.routingDetails.list',
    fullyQualifiedName: 'routingDetails.list',
    httpMethod: 'get',
    httpPath: '/api/{accounts_type}/{account_id}/routing_details',
  },
  {
    clientCallName: 'client.routingDetails.delete',
    fullyQualifiedName: 'routingDetails.delete',
    httpMethod: 'delete',
    httpPath: '/api/{accounts_type}/{account_id}/routing_details/{id}',
  },
  {
    clientCallName: 'client.internalAccounts.create',
    fullyQualifiedName: 'internalAccounts.create',
    httpMethod: 'post',
    httpPath: '/api/internal_accounts',
  },
  {
    clientCallName: 'client.internalAccounts.retrieve',
    fullyQualifiedName: 'internalAccounts.retrieve',
    httpMethod: 'get',
    httpPath: '/api/internal_accounts/{id}',
  },
  {
    clientCallName: 'client.internalAccounts.update',
    fullyQualifiedName: 'internalAccounts.update',
    httpMethod: 'patch',
    httpPath: '/api/internal_accounts/{id}',
  },
  {
    clientCallName: 'client.internalAccounts.list',
    fullyQualifiedName: 'internalAccounts.list',
    httpMethod: 'get',
    httpPath: '/api/internal_accounts',
  },
  {
    clientCallName: 'client.internalAccounts.requestClosure',
    fullyQualifiedName: 'internalAccounts.requestClosure',
    httpMethod: 'post',
    httpPath: '/api/internal_accounts/{id}/request_closure',
  },
  {
    clientCallName: 'client.internalAccounts.updateAccountCapability',
    fullyQualifiedName: 'internalAccounts.updateAccountCapability',
    httpMethod: 'patch',
    httpPath: '/api/internal_accounts/{internal_account_id}/account_capabilities/{id}',
  },
  {
    clientCallName: 'client.internalAccounts.balanceReports.create',
    fullyQualifiedName: 'internalAccounts.balanceReports.create',
    httpMethod: 'post',
    httpPath: '/api/internal_accounts/{internal_account_id}/balance_reports',
  },
  {
    clientCallName: 'client.internalAccounts.balanceReports.retrieve',
    fullyQualifiedName: 'internalAccounts.balanceReports.retrieve',
    httpMethod: 'get',
    httpPath: '/api/internal_accounts/{internal_account_id}/balance_reports/{id}',
  },
  {
    clientCallName: 'client.internalAccounts.balanceReports.list',
    fullyQualifiedName: 'internalAccounts.balanceReports.list',
    httpMethod: 'get',
    httpPath: '/api/internal_accounts/{internal_account_id}/balance_reports',
  },
  {
    clientCallName: 'client.internalAccounts.balanceReports.delete',
    fullyQualifiedName: 'internalAccounts.balanceReports.delete',
    httpMethod: 'delete',
    httpPath: '/api/internal_accounts/{internal_account_id}/balance_reports/{id}',
  },
  {
    clientCallName: 'client.ledgers.create',
    fullyQualifiedName: 'ledgers.create',
    httpMethod: 'post',
    httpPath: '/api/ledgers',
  },
  {
    clientCallName: 'client.ledgers.retrieve',
    fullyQualifiedName: 'ledgers.retrieve',
    httpMethod: 'get',
    httpPath: '/api/ledgers/{id}',
  },
  {
    clientCallName: 'client.ledgers.update',
    fullyQualifiedName: 'ledgers.update',
    httpMethod: 'patch',
    httpPath: '/api/ledgers/{id}',
  },
  {
    clientCallName: 'client.ledgers.list',
    fullyQualifiedName: 'ledgers.list',
    httpMethod: 'get',
    httpPath: '/api/ledgers',
  },
  {
    clientCallName: 'client.ledgers.delete',
    fullyQualifiedName: 'ledgers.delete',
    httpMethod: 'delete',
    httpPath: '/api/ledgers/{id}',
  },
  {
    clientCallName: 'client.ledgerAccountCategories.create',
    fullyQualifiedName: 'ledgerAccountCategories.create',
    httpMethod: 'post',
    httpPath: '/api/ledger_account_categories',
  },
  {
    clientCallName: 'client.ledgerAccountCategories.retrieve',
    fullyQualifiedName: 'ledgerAccountCategories.retrieve',
    httpMethod: 'get',
    httpPath: '/api/ledger_account_categories/{id}',
  },
  {
    clientCallName: 'client.ledgerAccountCategories.update',
    fullyQualifiedName: 'ledgerAccountCategories.update',
    httpMethod: 'patch',
    httpPath: '/api/ledger_account_categories/{id}',
  },
  {
    clientCallName: 'client.ledgerAccountCategories.list',
    fullyQualifiedName: 'ledgerAccountCategories.list',
    httpMethod: 'get',
    httpPath: '/api/ledger_account_categories',
  },
  {
    clientCallName: 'client.ledgerAccountCategories.delete',
    fullyQualifiedName: 'ledgerAccountCategories.delete',
    httpMethod: 'delete',
    httpPath: '/api/ledger_account_categories/{id}',
  },
  {
    clientCallName: 'client.ledgerAccountCategories.addLedgerAccount',
    fullyQualifiedName: 'ledgerAccountCategories.addLedgerAccount',
    httpMethod: 'put',
    httpPath: '/api/ledger_account_categories/{id}/ledger_accounts/{ledger_account_id}',
  },
  {
    clientCallName: 'client.ledgerAccountCategories.addNestedCategory',
    fullyQualifiedName: 'ledgerAccountCategories.addNestedCategory',
    httpMethod: 'put',
    httpPath: '/api/ledger_account_categories/{id}/ledger_account_categories/{sub_category_id}',
  },
  {
    clientCallName: 'client.ledgerAccountCategories.removeLedgerAccount',
    fullyQualifiedName: 'ledgerAccountCategories.removeLedgerAccount',
    httpMethod: 'delete',
    httpPath: '/api/ledger_account_categories/{id}/ledger_accounts/{ledger_account_id}',
  },
  {
    clientCallName: 'client.ledgerAccountCategories.removeNestedCategory',
    fullyQualifiedName: 'ledgerAccountCategories.removeNestedCategory',
    httpMethod: 'delete',
    httpPath: '/api/ledger_account_categories/{id}/ledger_account_categories/{sub_category_id}',
  },
  {
    clientCallName: 'client.ledgerAccounts.create',
    fullyQualifiedName: 'ledgerAccounts.create',
    httpMethod: 'post',
    httpPath: '/api/ledger_accounts',
  },
  {
    clientCallName: 'client.ledgerAccounts.retrieve',
    fullyQualifiedName: 'ledgerAccounts.retrieve',
    httpMethod: 'get',
    httpPath: '/api/ledger_accounts/{id}',
  },
  {
    clientCallName: 'client.ledgerAccounts.update',
    fullyQualifiedName: 'ledgerAccounts.update',
    httpMethod: 'patch',
    httpPath: '/api/ledger_accounts/{id}',
  },
  {
    clientCallName: 'client.ledgerAccounts.list',
    fullyQualifiedName: 'ledgerAccounts.list',
    httpMethod: 'get',
    httpPath: '/api/ledger_accounts',
  },
  {
    clientCallName: 'client.ledgerAccounts.delete',
    fullyQualifiedName: 'ledgerAccounts.delete',
    httpMethod: 'delete',
    httpPath: '/api/ledger_accounts/{id}',
  },
  {
    clientCallName: 'client.ledgerAccountBalanceMonitors.create',
    fullyQualifiedName: 'ledgerAccountBalanceMonitors.create',
    httpMethod: 'post',
    httpPath: '/api/ledger_account_balance_monitors',
  },
  {
    clientCallName: 'client.ledgerAccountBalanceMonitors.retrieve',
    fullyQualifiedName: 'ledgerAccountBalanceMonitors.retrieve',
    httpMethod: 'get',
    httpPath: '/api/ledger_account_balance_monitors/{id}',
  },
  {
    clientCallName: 'client.ledgerAccountBalanceMonitors.update',
    fullyQualifiedName: 'ledgerAccountBalanceMonitors.update',
    httpMethod: 'patch',
    httpPath: '/api/ledger_account_balance_monitors/{id}',
  },
  {
    clientCallName: 'client.ledgerAccountBalanceMonitors.list',
    fullyQualifiedName: 'ledgerAccountBalanceMonitors.list',
    httpMethod: 'get',
    httpPath: '/api/ledger_account_balance_monitors',
  },
  {
    clientCallName: 'client.ledgerAccountBalanceMonitors.delete',
    fullyQualifiedName: 'ledgerAccountBalanceMonitors.delete',
    httpMethod: 'delete',
    httpPath: '/api/ledger_account_balance_monitors/{id}',
  },
  {
    clientCallName: 'client.ledgerAccountStatements.create',
    fullyQualifiedName: 'ledgerAccountStatements.create',
    httpMethod: 'post',
    httpPath: '/api/ledger_account_statements',
  },
  {
    clientCallName: 'client.ledgerAccountStatements.retrieve',
    fullyQualifiedName: 'ledgerAccountStatements.retrieve',
    httpMethod: 'get',
    httpPath: '/api/ledger_account_statements/{id}',
  },
  {
    clientCallName: 'client.ledgerEntries.retrieve',
    fullyQualifiedName: 'ledgerEntries.retrieve',
    httpMethod: 'get',
    httpPath: '/api/ledger_entries/{id}',
  },
  {
    clientCallName: 'client.ledgerEntries.update',
    fullyQualifiedName: 'ledgerEntries.update',
    httpMethod: 'patch',
    httpPath: '/api/ledger_entries/{id}',
  },
  {
    clientCallName: 'client.ledgerEntries.list',
    fullyQualifiedName: 'ledgerEntries.list',
    httpMethod: 'get',
    httpPath: '/api/ledger_entries',
  },
  {
    clientCallName: 'client.ledgerTransactions.create',
    fullyQualifiedName: 'ledgerTransactions.create',
    httpMethod: 'post',
    httpPath: '/api/ledger_transactions',
  },
  {
    clientCallName: 'client.ledgerTransactions.retrieve',
    fullyQualifiedName: 'ledgerTransactions.retrieve',
    httpMethod: 'get',
    httpPath: '/api/ledger_transactions/{id}',
  },
  {
    clientCallName: 'client.ledgerTransactions.update',
    fullyQualifiedName: 'ledgerTransactions.update',
    httpMethod: 'patch',
    httpPath: '/api/ledger_transactions/{id}',
  },
  {
    clientCallName: 'client.ledgerTransactions.list',
    fullyQualifiedName: 'ledgerTransactions.list',
    httpMethod: 'get',
    httpPath: '/api/ledger_transactions',
  },
  {
    clientCallName: 'client.ledgerTransactions.createPartialPost',
    fullyQualifiedName: 'ledgerTransactions.createPartialPost',
    httpMethod: 'post',
    httpPath: '/api/ledger_transactions/{id}/partial_post',
  },
  {
    clientCallName: 'client.ledgerTransactions.createReversal',
    fullyQualifiedName: 'ledgerTransactions.createReversal',
    httpMethod: 'post',
    httpPath: '/api/ledger_transactions/{id}/reversal',
  },
  {
    clientCallName: 'client.ledgerTransactions.versions.list',
    fullyQualifiedName: 'ledgerTransactions.versions.list',
    httpMethod: 'get',
    httpPath: '/api/ledger_transaction_versions',
  },
  {
    clientCallName: 'client.lineItems.retrieve',
    fullyQualifiedName: 'lineItems.retrieve',
    httpMethod: 'get',
    httpPath: '/api/{itemizable_type}/{itemizable_id}/line_items/{id}',
  },
  {
    clientCallName: 'client.lineItems.update',
    fullyQualifiedName: 'lineItems.update',
    httpMethod: 'patch',
    httpPath: '/api/{itemizable_type}/{itemizable_id}/line_items/{id}',
  },
  {
    clientCallName: 'client.lineItems.list',
    fullyQualifiedName: 'lineItems.list',
    httpMethod: 'get',
    httpPath: '/api/{itemizable_type}/{itemizable_id}/line_items',
  },
  {
    clientCallName: 'client.paymentFlows.create',
    fullyQualifiedName: 'paymentFlows.create',
    httpMethod: 'post',
    httpPath: '/api/payment_flows',
  },
  {
    clientCallName: 'client.paymentFlows.retrieve',
    fullyQualifiedName: 'paymentFlows.retrieve',
    httpMethod: 'get',
    httpPath: '/api/payment_flows/{id}',
  },
  {
    clientCallName: 'client.paymentFlows.update',
    fullyQualifiedName: 'paymentFlows.update',
    httpMethod: 'patch',
    httpPath: '/api/payment_flows/{id}',
  },
  {
    clientCallName: 'client.paymentFlows.list',
    fullyQualifiedName: 'paymentFlows.list',
    httpMethod: 'get',
    httpPath: '/api/payment_flows',
  },
  {
    clientCallName: 'client.paymentOrders.create',
    fullyQualifiedName: 'paymentOrders.create',
    httpMethod: 'post',
    httpPath: '/api/payment_orders',
  },
  {
    clientCallName: 'client.paymentOrders.retrieve',
    fullyQualifiedName: 'paymentOrders.retrieve',
    httpMethod: 'get',
    httpPath: '/api/payment_orders/{id}',
  },
  {
    clientCallName: 'client.paymentOrders.update',
    fullyQualifiedName: 'paymentOrders.update',
    httpMethod: 'patch',
    httpPath: '/api/payment_orders/{id}',
  },
  {
    clientCallName: 'client.paymentOrders.list',
    fullyQualifiedName: 'paymentOrders.list',
    httpMethod: 'get',
    httpPath: '/api/payment_orders',
  },
  {
    clientCallName: 'client.paymentOrders.createAsync',
    fullyQualifiedName: 'paymentOrders.createAsync',
    httpMethod: 'post',
    httpPath: '/api/payment_orders/create_async',
  },
  {
    clientCallName: 'client.paymentOrders.reversals.create',
    fullyQualifiedName: 'paymentOrders.reversals.create',
    httpMethod: 'post',
    httpPath: '/api/payment_orders/{payment_order_id}/reversals',
  },
  {
    clientCallName: 'client.paymentOrders.reversals.retrieve',
    fullyQualifiedName: 'paymentOrders.reversals.retrieve',
    httpMethod: 'get',
    httpPath: '/api/payment_orders/{payment_order_id}/reversals/{reversal_id}',
  },
  {
    clientCallName: 'client.paymentOrders.reversals.list',
    fullyQualifiedName: 'paymentOrders.reversals.list',
    httpMethod: 'get',
    httpPath: '/api/payment_orders/{payment_order_id}/reversals',
  },
  {
    clientCallName: 'client.paymentReferences.retrieve',
    fullyQualifiedName: 'paymentReferences.retrieve',
    httpMethod: 'get',
    httpPath: '/api/payment_references/{id}',
  },
  {
    clientCallName: 'client.paymentReferences.list',
    fullyQualifiedName: 'paymentReferences.list',
    httpMethod: 'get',
    httpPath: '/api/payment_references',
  },
  { clientCallName: 'client.paymentReferences.retireve', fullyQualifiedName: 'paymentReferences.retireve' },
  {
    clientCallName: 'client.returns.create',
    fullyQualifiedName: 'returns.create',
    httpMethod: 'post',
    httpPath: '/api/returns',
  },
  {
    clientCallName: 'client.returns.retrieve',
    fullyQualifiedName: 'returns.retrieve',
    httpMethod: 'get',
    httpPath: '/api/returns/{id}',
  },
  {
    clientCallName: 'client.returns.list',
    fullyQualifiedName: 'returns.list',
    httpMethod: 'get',
    httpPath: '/api/returns',
  },
  {
    clientCallName: 'client.transactions.create',
    fullyQualifiedName: 'transactions.create',
    httpMethod: 'post',
    httpPath: '/api/transactions',
  },
  {
    clientCallName: 'client.transactions.retrieve',
    fullyQualifiedName: 'transactions.retrieve',
    httpMethod: 'get',
    httpPath: '/api/transactions/{id}',
  },
  {
    clientCallName: 'client.transactions.update',
    fullyQualifiedName: 'transactions.update',
    httpMethod: 'patch',
    httpPath: '/api/transactions/{id}',
  },
  {
    clientCallName: 'client.transactions.list',
    fullyQualifiedName: 'transactions.list',
    httpMethod: 'get',
    httpPath: '/api/transactions',
  },
  {
    clientCallName: 'client.transactions.delete',
    fullyQualifiedName: 'transactions.delete',
    httpMethod: 'delete',
    httpPath: '/api/transactions/{id}',
  },
  {
    clientCallName: 'client.transactions.lineItems.create',
    fullyQualifiedName: 'transactions.lineItems.create',
    httpMethod: 'post',
    httpPath: '/api/transaction_line_items',
  },
  {
    clientCallName: 'client.transactions.lineItems.retrieve',
    fullyQualifiedName: 'transactions.lineItems.retrieve',
    httpMethod: 'get',
    httpPath: '/api/transaction_line_items/{id}',
  },
  {
    clientCallName: 'client.transactions.lineItems.list',
    fullyQualifiedName: 'transactions.lineItems.list',
    httpMethod: 'get',
    httpPath: '/api/transaction_line_items',
  },
  {
    clientCallName: 'client.transactions.lineItems.delete',
    fullyQualifiedName: 'transactions.lineItems.delete',
    httpMethod: 'delete',
    httpPath: '/api/transaction_line_items/{id}',
  },
  {
    clientCallName: 'client.validations.validateRoutingNumber',
    fullyQualifiedName: 'validations.validateRoutingNumber',
    httpMethod: 'get',
    httpPath: '/api/validations/routing_numbers',
  },
  {
    clientCallName: 'client.virtualAccounts.create',
    fullyQualifiedName: 'virtualAccounts.create',
    httpMethod: 'post',
    httpPath: '/api/virtual_accounts',
  },
  {
    clientCallName: 'client.virtualAccounts.retrieve',
    fullyQualifiedName: 'virtualAccounts.retrieve',
    httpMethod: 'get',
    httpPath: '/api/virtual_accounts/{id}',
  },
  {
    clientCallName: 'client.virtualAccounts.update',
    fullyQualifiedName: 'virtualAccounts.update',
    httpMethod: 'patch',
    httpPath: '/api/virtual_accounts/{id}',
  },
  {
    clientCallName: 'client.virtualAccounts.list',
    fullyQualifiedName: 'virtualAccounts.list',
    httpMethod: 'get',
    httpPath: '/api/virtual_accounts',
  },
  {
    clientCallName: 'client.virtualAccounts.delete',
    fullyQualifiedName: 'virtualAccounts.delete',
    httpMethod: 'delete',
    httpPath: '/api/virtual_accounts/{id}',
  },
  {
    clientCallName: 'client.bulkRequests.create',
    fullyQualifiedName: 'bulkRequests.create',
    httpMethod: 'post',
    httpPath: '/api/bulk_requests',
  },
  {
    clientCallName: 'client.bulkRequests.retrieve',
    fullyQualifiedName: 'bulkRequests.retrieve',
    httpMethod: 'get',
    httpPath: '/api/bulk_requests/{id}',
  },
  {
    clientCallName: 'client.bulkRequests.list',
    fullyQualifiedName: 'bulkRequests.list',
    httpMethod: 'get',
    httpPath: '/api/bulk_requests',
  },
  {
    clientCallName: 'client.bulkResults.retrieve',
    fullyQualifiedName: 'bulkResults.retrieve',
    httpMethod: 'get',
    httpPath: '/api/bulk_results/{id}',
  },
  {
    clientCallName: 'client.bulkResults.list',
    fullyQualifiedName: 'bulkResults.list',
    httpMethod: 'get',
    httpPath: '/api/bulk_results',
  },
  {
    clientCallName: 'client.ledgerAccountSettlements.create',
    fullyQualifiedName: 'ledgerAccountSettlements.create',
    httpMethod: 'post',
    httpPath: '/api/ledger_account_settlements',
  },
  {
    clientCallName: 'client.ledgerAccountSettlements.retrieve',
    fullyQualifiedName: 'ledgerAccountSettlements.retrieve',
    httpMethod: 'get',
    httpPath: '/api/ledger_account_settlements/{id}',
  },
  {
    clientCallName: 'client.ledgerAccountSettlements.update',
    fullyQualifiedName: 'ledgerAccountSettlements.update',
    httpMethod: 'patch',
    httpPath: '/api/ledger_account_settlements/{id}',
  },
  {
    clientCallName: 'client.ledgerAccountSettlements.list',
    fullyQualifiedName: 'ledgerAccountSettlements.list',
    httpMethod: 'get',
    httpPath: '/api/ledger_account_settlements',
  },
  {
    clientCallName: 'client.ledgerAccountSettlements.accountEntries.update',
    fullyQualifiedName: 'ledgerAccountSettlements.accountEntries.update',
    httpMethod: 'patch',
    httpPath: '/api/ledger_account_settlements/{id}/ledger_entries',
  },
  {
    clientCallName: 'client.ledgerAccountSettlements.accountEntries.delete',
    fullyQualifiedName: 'ledgerAccountSettlements.accountEntries.delete',
    httpMethod: 'delete',
    httpPath: '/api/ledger_account_settlements/{id}/ledger_entries',
  },
  {
    clientCallName: 'client.foreignExchangeQuotes.create',
    fullyQualifiedName: 'foreignExchangeQuotes.create',
    httpMethod: 'post',
    httpPath: '/api/foreign_exchange_quotes',
  },
  {
    clientCallName: 'client.foreignExchangeQuotes.retrieve',
    fullyQualifiedName: 'foreignExchangeQuotes.retrieve',
    httpMethod: 'get',
    httpPath: '/api/foreign_exchange_quotes/{id}',
  },
  {
    clientCallName: 'client.foreignExchangeQuotes.list',
    fullyQualifiedName: 'foreignExchangeQuotes.list',
    httpMethod: 'get',
    httpPath: '/api/foreign_exchange_quotes',
  },
  {
    clientCallName: 'client.connectionLegalEntities.create',
    fullyQualifiedName: 'connectionLegalEntities.create',
    httpMethod: 'post',
    httpPath: '/api/connection_legal_entities',
  },
  {
    clientCallName: 'client.connectionLegalEntities.retrieve',
    fullyQualifiedName: 'connectionLegalEntities.retrieve',
    httpMethod: 'get',
    httpPath: '/api/connection_legal_entities/{id}',
  },
  {
    clientCallName: 'client.connectionLegalEntities.update',
    fullyQualifiedName: 'connectionLegalEntities.update',
    httpMethod: 'patch',
    httpPath: '/api/connection_legal_entities/{id}',
  },
  {
    clientCallName: 'client.connectionLegalEntities.list',
    fullyQualifiedName: 'connectionLegalEntities.list',
    httpMethod: 'get',
    httpPath: '/api/connection_legal_entities',
  },
  {
    clientCallName: 'client.legalEntities.create',
    fullyQualifiedName: 'legalEntities.create',
    httpMethod: 'post',
    httpPath: '/api/legal_entities',
  },
  {
    clientCallName: 'client.legalEntities.retrieve',
    fullyQualifiedName: 'legalEntities.retrieve',
    httpMethod: 'get',
    httpPath: '/api/legal_entities/{id}',
  },
  {
    clientCallName: 'client.legalEntities.update',
    fullyQualifiedName: 'legalEntities.update',
    httpMethod: 'patch',
    httpPath: '/api/legal_entities/{id}',
  },
  {
    clientCallName: 'client.legalEntities.list',
    fullyQualifiedName: 'legalEntities.list',
    httpMethod: 'get',
    httpPath: '/api/legal_entities',
  },
  {
    clientCallName: 'client.legalEntityAssociations.create',
    fullyQualifiedName: 'legalEntityAssociations.create',
    httpMethod: 'post',
    httpPath: '/api/legal_entity_associations',
  },
  {
    clientCallName: 'client.paymentActions.create',
    fullyQualifiedName: 'paymentActions.create',
    httpMethod: 'post',
    httpPath: '/api/payment_actions',
  },
  {
    clientCallName: 'client.paymentActions.retrieve',
    fullyQualifiedName: 'paymentActions.retrieve',
    httpMethod: 'get',
    httpPath: '/api/payment_actions/{id}',
  },
  {
    clientCallName: 'client.paymentActions.update',
    fullyQualifiedName: 'paymentActions.update',
    httpMethod: 'patch',
    httpPath: '/api/payment_actions/{id}',
  },
  {
    clientCallName: 'client.paymentActions.list',
    fullyQualifiedName: 'paymentActions.list',
    httpMethod: 'get',
    httpPath: '/api/payment_actions',
  },
  {
    clientCallName: 'client.journalEntries.retrieve',
    fullyQualifiedName: 'journalEntries.retrieve',
    httpMethod: 'get',
    httpPath: '/api/journal_entries/{id}',
  },
  {
    clientCallName: 'client.journalEntries.list',
    fullyQualifiedName: 'journalEntries.list',
    httpMethod: 'get',
    httpPath: '/api/journal_entries',
  },
  {
    clientCallName: 'client.journalReports.retrieve',
    fullyQualifiedName: 'journalReports.retrieve',
    httpMethod: 'get',
    httpPath: '/api/journal_reports/{id}',
  },
  {
    clientCallName: 'client.journalReports.update',
    fullyQualifiedName: 'journalReports.update',
    httpMethod: 'patch',
    httpPath: '/api/journal_reports/{id}',
  },
  {
    clientCallName: 'client.journalReports.list',
    fullyQualifiedName: 'journalReports.list',
    httpMethod: 'get',
    httpPath: '/api/journal_reports',
  },
  {
    clientCallName: 'client.holds.create',
    fullyQualifiedName: 'holds.create',
    httpMethod: 'post',
    httpPath: '/api/holds',
  },
  {
    clientCallName: 'client.holds.retrieve',
    fullyQualifiedName: 'holds.retrieve',
    httpMethod: 'get',
    httpPath: '/api/holds/{id}',
  },
  {
    clientCallName: 'client.holds.update',
    fullyQualifiedName: 'holds.update',
    httpMethod: 'patch',
    httpPath: '/api/holds/{id}',
  },
  {
    clientCallName: 'client.holds.list',
    fullyQualifiedName: 'holds.list',
    httpMethod: 'get',
    httpPath: '/api/holds',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
