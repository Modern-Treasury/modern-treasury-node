// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'modern-treasury-mcp/filtering';
import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'payment_references',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/payment_references',
  operationId: 'listPaymentReferences',
};

export const tool: Tool = {
  name: 'list_payment_references',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nlist payment_references\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/payment_reference'\n  },\n  $defs: {\n    payment_reference: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        object: {\n          type: 'string'\n        },\n        reference_number: {\n          type: 'string',\n          description: 'The actual reference number assigned by the bank.'\n        },\n        reference_number_type: {\n          type: 'string',\n          description: 'The type of reference number.',\n          enum: [            'ach_original_trace_number',\n            'ach_trace_number',\n            'bankprov_payment_activity_date',\n            'bankprov_payment_id',\n            'bnk_dev_prenotification_id',\n            'bnk_dev_transfer_id',\n            'bofa_end_to_end_id',\n            'bofa_transaction_id',\n            'brale_transfer_id',\n            'bridge_destination_transaction_hash',\n            'bridge_source_transaction_hash',\n            'bridge_transfer_id',\n            'check_number',\n            'citibank_reference_number',\n            'citibank_worldlink_clearing_system_reference_number',\n            'column_fx_quote_id',\n            'column_reversal_pair_transfer_id',\n            'column_transfer_id',\n            'cross_river_core_transaction_id',\n            'cross_river_fed_batch_id',\n            'cross_river_payment_id',\n            'cross_river_service_message',\n            'cross_river_transaction_id',\n            'currencycloud_conversion_id',\n            'currencycloud_payment_id',\n            'dc_bank_transaction_id',\n            'eft_trace_number',\n            'evolve_transaction_id',\n            'fedwire_imad',\n            'fedwire_omad',\n            'first_republic_internal_id',\n            'goldman_sachs_collection_request_id',\n            'goldman_sachs_end_to_end_id',\n            'goldman_sachs_payment_request_id',\n            'goldman_sachs_request_id',\n            'goldman_sachs_unique_payment_id',\n            'hifi_offramp_id',\n            'hifi_transfer_id',\n            'interac_message_id',\n            'jpmc_ccn',\n            'jpmc_clearing_system_reference',\n            'jpmc_customer_reference_id',\n            'jpmc_end_to_end_id',\n            'jpmc_firm_root_id',\n            'jpmc_fx_trn_id',\n            'jpmc_p3_id',\n            'jpmc_payment_batch_id',\n            'jpmc_payment_information_id',\n            'jpmc_payment_returned_datetime',\n            'jpmc_transaction_reference_number',\n            'lob_check_id',\n            'other',\n            'partial_swift_mir',\n            'pnc_clearing_reference',\n            'pnc_instruction_id',\n            'pnc_multipayment_id',\n            'pnc_payment_trace_id',\n            'pnc_request_for_payment_id',\n            'pnc_transaction_reference_number',\n            'rbc_wire_reference_id',\n            'rspec_vendor_payment_id',\n            'rtp_instruction_id',\n            'signet_api_reference_id',\n            'signet_confirmation_id',\n            'signet_request_id',\n            'silvergate_payment_id',\n            'svb_end_to_end_id',\n            'svb_payment_id',\n            'svb_transaction_cleared_for_sanctions_review',\n            'svb_transaction_held_for_sanctions_review',\n            'swift_mir',\n            'swift_uetr',\n            'umb_product_partner_account_number',\n            'usbank_payment_application_reference_id',\n            'usbank_payment_id',\n            'usbank_pending_rtp_payment_id',\n            'usbank_posted_rtp_payment_id',\n            'wells_fargo_end_to_end_id',\n            'wells_fargo_payment_id',\n            'wells_fargo_trace_number',\n            'wells_fargo_uetr'\n          ]\n        },\n        referenceable_id: {\n          type: 'string',\n          description: 'The id of the referenceable to search for. Must be accompanied by the referenceable_type or will return an error.'\n        },\n        referenceable_type: {\n          type: 'string',\n          description: 'One of the referenceable types. This must be accompanied by the id of the referenceable or will return an error.',\n          enum: [            'payment_order',\n            'reversal',\n            'return'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'live_mode',\n        'object',\n        'reference_number',\n        'reference_number_type',\n        'referenceable_id',\n        'referenceable_type',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      after_cursor: {
        type: 'string',
      },
      per_page: {
        type: 'integer',
      },
      reference_number: {
        type: 'string',
        description: 'The actual reference number assigned by the bank.',
      },
      referenceable_id: {
        type: 'string',
        description:
          'The id of the referenceable to search for. Must be accompanied by the referenceable_type or will return an error.',
      },
      referenceable_type: {
        type: 'string',
        description:
          'One of the referenceable types. This must be accompanied by the id of the referenceable or will return an error.',
        enum: ['payment_order', 'return', 'reversal'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.paymentReferences.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
