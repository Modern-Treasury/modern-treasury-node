// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import ping_client from './top-level/ping-client';
import list_connections from './connections/list-connections';
import create_counterparties from './counterparties/create-counterparties';
import retrieve_counterparties from './counterparties/retrieve-counterparties';
import update_counterparties from './counterparties/update-counterparties';
import list_counterparties from './counterparties/list-counterparties';
import delete_counterparties from './counterparties/delete-counterparties';
import collect_account_counterparties from './counterparties/collect-account-counterparties';
import retrieve_events from './events/retrieve-events';
import list_events from './events/list-events';
import create_expected_payments from './expected-payments/create-expected-payments';
import retrieve_expected_payments from './expected-payments/retrieve-expected-payments';
import update_expected_payments from './expected-payments/update-expected-payments';
import list_expected_payments from './expected-payments/list-expected-payments';
import delete_expected_payments from './expected-payments/delete-expected-payments';
import create_external_accounts from './external-accounts/create-external-accounts';
import retrieve_external_accounts from './external-accounts/retrieve-external-accounts';
import update_external_accounts from './external-accounts/update-external-accounts';
import list_external_accounts from './external-accounts/list-external-accounts';
import delete_external_accounts from './external-accounts/delete-external-accounts';
import complete_verification_external_accounts from './external-accounts/complete-verification-external-accounts';
import verify_external_accounts from './external-accounts/verify-external-accounts';
import retrieve_incoming_payment_details from './incoming-payment-details/retrieve-incoming-payment-details';
import update_incoming_payment_details from './incoming-payment-details/update-incoming-payment-details';
import list_incoming_payment_details from './incoming-payment-details/list-incoming-payment-details';
import create_async_incoming_payment_details from './incoming-payment-details/create-async-incoming-payment-details';
import create_invoices from './invoices/create-invoices';
import retrieve_invoices from './invoices/retrieve-invoices';
import update_invoices from './invoices/update-invoices';
import list_invoices from './invoices/list-invoices';
import add_payment_order_invoices from './invoices/add-payment-order-invoices';
import create_invoices_line_items from './invoices/line-items/create-invoices-line-items';
import retrieve_invoices_line_items from './invoices/line-items/retrieve-invoices-line-items';
import update_invoices_line_items from './invoices/line-items/update-invoices-line-items';
import list_invoices_line_items from './invoices/line-items/list-invoices-line-items';
import delete_invoices_line_items from './invoices/line-items/delete-invoices-line-items';
import create_documents from './documents/create-documents';
import retrieve_documents from './documents/retrieve-documents';
import list_documents from './documents/list-documents';
import create_account_collection_flows from './account-collection-flows/create-account-collection-flows';
import retrieve_account_collection_flows from './account-collection-flows/retrieve-account-collection-flows';
import update_account_collection_flows from './account-collection-flows/update-account-collection-flows';
import list_account_collection_flows from './account-collection-flows/list-account-collection-flows';
import create_account_details from './account-details/create-account-details';
import retrieve_account_details from './account-details/retrieve-account-details';
import list_account_details from './account-details/list-account-details';
import delete_account_details from './account-details/delete-account-details';
import create_routing_details from './routing-details/create-routing-details';
import retrieve_routing_details from './routing-details/retrieve-routing-details';
import list_routing_details from './routing-details/list-routing-details';
import delete_routing_details from './routing-details/delete-routing-details';
import create_internal_accounts from './internal-accounts/create-internal-accounts';
import retrieve_internal_accounts from './internal-accounts/retrieve-internal-accounts';
import update_internal_accounts from './internal-accounts/update-internal-accounts';
import list_internal_accounts from './internal-accounts/list-internal-accounts';
import create_internal_accounts_balance_reports from './internal-accounts/balance-reports/create-internal-accounts-balance-reports';
import retrieve_internal_accounts_balance_reports from './internal-accounts/balance-reports/retrieve-internal-accounts-balance-reports';
import list_internal_accounts_balance_reports from './internal-accounts/balance-reports/list-internal-accounts-balance-reports';
import delete_internal_accounts_balance_reports from './internal-accounts/balance-reports/delete-internal-accounts-balance-reports';
import create_ledgers from './ledgers/create-ledgers';
import retrieve_ledgers from './ledgers/retrieve-ledgers';
import update_ledgers from './ledgers/update-ledgers';
import list_ledgers from './ledgers/list-ledgers';
import delete_ledgers from './ledgers/delete-ledgers';
import create_ledgerable_events from './ledgerable-events/create-ledgerable-events';
import retrieve_ledgerable_events from './ledgerable-events/retrieve-ledgerable-events';
import create_ledger_account_categories from './ledger-account-categories/create-ledger-account-categories';
import retrieve_ledger_account_categories from './ledger-account-categories/retrieve-ledger-account-categories';
import update_ledger_account_categories from './ledger-account-categories/update-ledger-account-categories';
import list_ledger_account_categories from './ledger-account-categories/list-ledger-account-categories';
import delete_ledger_account_categories from './ledger-account-categories/delete-ledger-account-categories';
import add_ledger_account_ledger_account_categories from './ledger-account-categories/add-ledger-account-ledger-account-categories';
import add_nested_category_ledger_account_categories from './ledger-account-categories/add-nested-category-ledger-account-categories';
import remove_ledger_account_ledger_account_categories from './ledger-account-categories/remove-ledger-account-ledger-account-categories';
import remove_nested_category_ledger_account_categories from './ledger-account-categories/remove-nested-category-ledger-account-categories';
import create_ledger_accounts from './ledger-accounts/create-ledger-accounts';
import retrieve_ledger_accounts from './ledger-accounts/retrieve-ledger-accounts';
import update_ledger_accounts from './ledger-accounts/update-ledger-accounts';
import list_ledger_accounts from './ledger-accounts/list-ledger-accounts';
import delete_ledger_accounts from './ledger-accounts/delete-ledger-accounts';
import create_ledger_account_balance_monitors from './ledger-account-balance-monitors/create-ledger-account-balance-monitors';
import retrieve_ledger_account_balance_monitors from './ledger-account-balance-monitors/retrieve-ledger-account-balance-monitors';
import update_ledger_account_balance_monitors from './ledger-account-balance-monitors/update-ledger-account-balance-monitors';
import list_ledger_account_balance_monitors from './ledger-account-balance-monitors/list-ledger-account-balance-monitors';
import delete_ledger_account_balance_monitors from './ledger-account-balance-monitors/delete-ledger-account-balance-monitors';
import create_ledger_account_statements from './ledger-account-statements/create-ledger-account-statements';
import retrieve_ledger_account_statements from './ledger-account-statements/retrieve-ledger-account-statements';
import retrieve_ledger_entries from './ledger-entries/retrieve-ledger-entries';
import update_ledger_entries from './ledger-entries/update-ledger-entries';
import list_ledger_entries from './ledger-entries/list-ledger-entries';
import create_ledger_event_handlers from './ledger-event-handlers/create-ledger-event-handlers';
import retrieve_ledger_event_handlers from './ledger-event-handlers/retrieve-ledger-event-handlers';
import list_ledger_event_handlers from './ledger-event-handlers/list-ledger-event-handlers';
import delete_ledger_event_handlers from './ledger-event-handlers/delete-ledger-event-handlers';
import create_ledger_transactions from './ledger-transactions/create-ledger-transactions';
import retrieve_ledger_transactions from './ledger-transactions/retrieve-ledger-transactions';
import update_ledger_transactions from './ledger-transactions/update-ledger-transactions';
import list_ledger_transactions from './ledger-transactions/list-ledger-transactions';
import create_partial_post_ledger_transactions from './ledger-transactions/create-partial-post-ledger-transactions';
import create_reversal_ledger_transactions from './ledger-transactions/create-reversal-ledger-transactions';
import list_ledger_transactions_versions from './ledger-transactions/versions/list-ledger-transactions-versions';
import retrieve_line_items from './line-items/retrieve-line-items';
import update_line_items from './line-items/update-line-items';
import list_line_items from './line-items/list-line-items';
import create_payment_flows from './payment-flows/create-payment-flows';
import retrieve_payment_flows from './payment-flows/retrieve-payment-flows';
import update_payment_flows from './payment-flows/update-payment-flows';
import list_payment_flows from './payment-flows/list-payment-flows';
import create_payment_orders from './payment-orders/create-payment-orders';
import retrieve_payment_orders from './payment-orders/retrieve-payment-orders';
import update_payment_orders from './payment-orders/update-payment-orders';
import list_payment_orders from './payment-orders/list-payment-orders';
import create_async_payment_orders from './payment-orders/create-async-payment-orders';
import create_payment_orders_reversals from './payment-orders/reversals/create-payment-orders-reversals';
import retrieve_payment_orders_reversals from './payment-orders/reversals/retrieve-payment-orders-reversals';
import list_payment_orders_reversals from './payment-orders/reversals/list-payment-orders-reversals';
import retrieve_payment_references from './payment-references/retrieve-payment-references';
import list_payment_references from './payment-references/list-payment-references';
import retireve_payment_references from './payment-references/retireve-payment-references';
import create_returns from './returns/create-returns';
import retrieve_returns from './returns/retrieve-returns';
import list_returns from './returns/list-returns';
import create_transactions from './transactions/create-transactions';
import retrieve_transactions from './transactions/retrieve-transactions';
import update_transactions from './transactions/update-transactions';
import list_transactions from './transactions/list-transactions';
import delete_transactions from './transactions/delete-transactions';
import create_transactions_line_items from './transactions/line-items/create-transactions-line-items';
import retrieve_transactions_line_items from './transactions/line-items/retrieve-transactions-line-items';
import list_transactions_line_items from './transactions/line-items/list-transactions-line-items';
import delete_transactions_line_items from './transactions/line-items/delete-transactions-line-items';
import validate_routing_number_validations from './validations/validate-routing-number-validations';
import retrieve_paper_items from './paper-items/retrieve-paper-items';
import list_paper_items from './paper-items/list-paper-items';
import create_virtual_accounts from './virtual-accounts/create-virtual-accounts';
import retrieve_virtual_accounts from './virtual-accounts/retrieve-virtual-accounts';
import update_virtual_accounts from './virtual-accounts/update-virtual-accounts';
import list_virtual_accounts from './virtual-accounts/list-virtual-accounts';
import delete_virtual_accounts from './virtual-accounts/delete-virtual-accounts';
import create_bulk_requests from './bulk-requests/create-bulk-requests';
import retrieve_bulk_requests from './bulk-requests/retrieve-bulk-requests';
import list_bulk_requests from './bulk-requests/list-bulk-requests';
import retrieve_bulk_results from './bulk-results/retrieve-bulk-results';
import list_bulk_results from './bulk-results/list-bulk-results';
import create_ledger_account_settlements from './ledger-account-settlements/create-ledger-account-settlements';
import retrieve_ledger_account_settlements from './ledger-account-settlements/retrieve-ledger-account-settlements';
import update_ledger_account_settlements from './ledger-account-settlements/update-ledger-account-settlements';
import list_ledger_account_settlements from './ledger-account-settlements/list-ledger-account-settlements';
import update_ledger_account_settlements_account_entries from './ledger-account-settlements/account-entries/update-ledger-account-settlements-account-entries';
import delete_ledger_account_settlements_account_entries from './ledger-account-settlements/account-entries/delete-ledger-account-settlements-account-entries';
import create_foreign_exchange_quotes from './foreign-exchange-quotes/create-foreign-exchange-quotes';
import retrieve_foreign_exchange_quotes from './foreign-exchange-quotes/retrieve-foreign-exchange-quotes';
import list_foreign_exchange_quotes from './foreign-exchange-quotes/list-foreign-exchange-quotes';
import create_connection_legal_entities from './connection-legal-entities/create-connection-legal-entities';
import retrieve_connection_legal_entities from './connection-legal-entities/retrieve-connection-legal-entities';
import update_connection_legal_entities from './connection-legal-entities/update-connection-legal-entities';
import list_connection_legal_entities from './connection-legal-entities/list-connection-legal-entities';
import create_legal_entities from './legal-entities/create-legal-entities';
import retrieve_legal_entities from './legal-entities/retrieve-legal-entities';
import update_legal_entities from './legal-entities/update-legal-entities';
import list_legal_entities from './legal-entities/list-legal-entities';
import create_legal_entity_associations from './legal-entity-associations/create-legal-entity-associations';
import create_payment_actions from './payment-actions/create-payment-actions';
import retrieve_payment_actions from './payment-actions/retrieve-payment-actions';
import update_payment_actions from './payment-actions/update-payment-actions';
import list_payment_actions from './payment-actions/list-payment-actions';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(ping_client);
addEndpoint(list_connections);
addEndpoint(create_counterparties);
addEndpoint(retrieve_counterparties);
addEndpoint(update_counterparties);
addEndpoint(list_counterparties);
addEndpoint(delete_counterparties);
addEndpoint(collect_account_counterparties);
addEndpoint(retrieve_events);
addEndpoint(list_events);
addEndpoint(create_expected_payments);
addEndpoint(retrieve_expected_payments);
addEndpoint(update_expected_payments);
addEndpoint(list_expected_payments);
addEndpoint(delete_expected_payments);
addEndpoint(create_external_accounts);
addEndpoint(retrieve_external_accounts);
addEndpoint(update_external_accounts);
addEndpoint(list_external_accounts);
addEndpoint(delete_external_accounts);
addEndpoint(complete_verification_external_accounts);
addEndpoint(verify_external_accounts);
addEndpoint(retrieve_incoming_payment_details);
addEndpoint(update_incoming_payment_details);
addEndpoint(list_incoming_payment_details);
addEndpoint(create_async_incoming_payment_details);
addEndpoint(create_invoices);
addEndpoint(retrieve_invoices);
addEndpoint(update_invoices);
addEndpoint(list_invoices);
addEndpoint(add_payment_order_invoices);
addEndpoint(create_invoices_line_items);
addEndpoint(retrieve_invoices_line_items);
addEndpoint(update_invoices_line_items);
addEndpoint(list_invoices_line_items);
addEndpoint(delete_invoices_line_items);
addEndpoint(create_documents);
addEndpoint(retrieve_documents);
addEndpoint(list_documents);
addEndpoint(create_account_collection_flows);
addEndpoint(retrieve_account_collection_flows);
addEndpoint(update_account_collection_flows);
addEndpoint(list_account_collection_flows);
addEndpoint(create_account_details);
addEndpoint(retrieve_account_details);
addEndpoint(list_account_details);
addEndpoint(delete_account_details);
addEndpoint(create_routing_details);
addEndpoint(retrieve_routing_details);
addEndpoint(list_routing_details);
addEndpoint(delete_routing_details);
addEndpoint(create_internal_accounts);
addEndpoint(retrieve_internal_accounts);
addEndpoint(update_internal_accounts);
addEndpoint(list_internal_accounts);
addEndpoint(create_internal_accounts_balance_reports);
addEndpoint(retrieve_internal_accounts_balance_reports);
addEndpoint(list_internal_accounts_balance_reports);
addEndpoint(delete_internal_accounts_balance_reports);
addEndpoint(create_ledgers);
addEndpoint(retrieve_ledgers);
addEndpoint(update_ledgers);
addEndpoint(list_ledgers);
addEndpoint(delete_ledgers);
addEndpoint(create_ledgerable_events);
addEndpoint(retrieve_ledgerable_events);
addEndpoint(create_ledger_account_categories);
addEndpoint(retrieve_ledger_account_categories);
addEndpoint(update_ledger_account_categories);
addEndpoint(list_ledger_account_categories);
addEndpoint(delete_ledger_account_categories);
addEndpoint(add_ledger_account_ledger_account_categories);
addEndpoint(add_nested_category_ledger_account_categories);
addEndpoint(remove_ledger_account_ledger_account_categories);
addEndpoint(remove_nested_category_ledger_account_categories);
addEndpoint(create_ledger_accounts);
addEndpoint(retrieve_ledger_accounts);
addEndpoint(update_ledger_accounts);
addEndpoint(list_ledger_accounts);
addEndpoint(delete_ledger_accounts);
addEndpoint(create_ledger_account_balance_monitors);
addEndpoint(retrieve_ledger_account_balance_monitors);
addEndpoint(update_ledger_account_balance_monitors);
addEndpoint(list_ledger_account_balance_monitors);
addEndpoint(delete_ledger_account_balance_monitors);
addEndpoint(create_ledger_account_statements);
addEndpoint(retrieve_ledger_account_statements);
addEndpoint(retrieve_ledger_entries);
addEndpoint(update_ledger_entries);
addEndpoint(list_ledger_entries);
addEndpoint(create_ledger_event_handlers);
addEndpoint(retrieve_ledger_event_handlers);
addEndpoint(list_ledger_event_handlers);
addEndpoint(delete_ledger_event_handlers);
addEndpoint(create_ledger_transactions);
addEndpoint(retrieve_ledger_transactions);
addEndpoint(update_ledger_transactions);
addEndpoint(list_ledger_transactions);
addEndpoint(create_partial_post_ledger_transactions);
addEndpoint(create_reversal_ledger_transactions);
addEndpoint(list_ledger_transactions_versions);
addEndpoint(retrieve_line_items);
addEndpoint(update_line_items);
addEndpoint(list_line_items);
addEndpoint(create_payment_flows);
addEndpoint(retrieve_payment_flows);
addEndpoint(update_payment_flows);
addEndpoint(list_payment_flows);
addEndpoint(create_payment_orders);
addEndpoint(retrieve_payment_orders);
addEndpoint(update_payment_orders);
addEndpoint(list_payment_orders);
addEndpoint(create_async_payment_orders);
addEndpoint(create_payment_orders_reversals);
addEndpoint(retrieve_payment_orders_reversals);
addEndpoint(list_payment_orders_reversals);
addEndpoint(retrieve_payment_references);
addEndpoint(list_payment_references);
addEndpoint(retireve_payment_references);
addEndpoint(create_returns);
addEndpoint(retrieve_returns);
addEndpoint(list_returns);
addEndpoint(create_transactions);
addEndpoint(retrieve_transactions);
addEndpoint(update_transactions);
addEndpoint(list_transactions);
addEndpoint(delete_transactions);
addEndpoint(create_transactions_line_items);
addEndpoint(retrieve_transactions_line_items);
addEndpoint(list_transactions_line_items);
addEndpoint(delete_transactions_line_items);
addEndpoint(validate_routing_number_validations);
addEndpoint(retrieve_paper_items);
addEndpoint(list_paper_items);
addEndpoint(create_virtual_accounts);
addEndpoint(retrieve_virtual_accounts);
addEndpoint(update_virtual_accounts);
addEndpoint(list_virtual_accounts);
addEndpoint(delete_virtual_accounts);
addEndpoint(create_bulk_requests);
addEndpoint(retrieve_bulk_requests);
addEndpoint(list_bulk_requests);
addEndpoint(retrieve_bulk_results);
addEndpoint(list_bulk_results);
addEndpoint(create_ledger_account_settlements);
addEndpoint(retrieve_ledger_account_settlements);
addEndpoint(update_ledger_account_settlements);
addEndpoint(list_ledger_account_settlements);
addEndpoint(update_ledger_account_settlements_account_entries);
addEndpoint(delete_ledger_account_settlements_account_entries);
addEndpoint(create_foreign_exchange_quotes);
addEndpoint(retrieve_foreign_exchange_quotes);
addEndpoint(list_foreign_exchange_quotes);
addEndpoint(create_connection_legal_entities);
addEndpoint(retrieve_connection_legal_entities);
addEndpoint(update_connection_legal_entities);
addEndpoint(list_connection_legal_entities);
addEndpoint(create_legal_entities);
addEndpoint(retrieve_legal_entities);
addEndpoint(update_legal_entities);
addEndpoint(list_legal_entities);
addEndpoint(create_legal_entity_associations);
addEndpoint(create_payment_actions);
addEndpoint(retrieve_payment_actions);
addEndpoint(update_payment_actions);
addEndpoint(list_payment_actions);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
