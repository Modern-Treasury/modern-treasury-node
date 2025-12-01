// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'modern-treasury-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'documents',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/documents',
  operationId: 'createDocument',
};

export const tool: Tool = {
  name: 'create_documents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a document.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/document',\n  $defs: {\n    document: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        discarded_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        document_details: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              created_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              discarded_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              document_identifier: {\n                type: 'string'\n              },\n              document_identifier_type: {\n                type: 'string'\n              },\n              live_mode: {\n                type: 'boolean',\n                description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n              },\n              object: {\n                type: 'string'\n              },\n              updated_at: {\n                type: 'string',\n                format: 'date-time'\n              }\n            },\n            required: [              'id',\n              'created_at',\n              'discarded_at',\n              'document_identifier',\n              'document_identifier_type',\n              'live_mode',\n              'object',\n              'updated_at'\n            ]\n          }\n        },\n        document_type: {\n          type: 'string',\n          description: 'A category given to the document, can be `null`.'\n        },\n        documentable_id: {\n          type: 'string',\n          description: 'The unique identifier for the associated object.'\n        },\n        documentable_type: {\n          type: 'string',\n          description: 'The type of the associated object. Currently can be one of `payment_order`, `transaction`, `expected_payment`, `counterparty`, `organization`, `case`, `internal_account`, `decision`, or `external_account`.',\n          enum: [            'counterparty',\n            'expected_payment',\n            'external_account',\n            'identification',\n            'incoming_payment_detail',\n            'internal_account',\n            'organization',\n            'payment_order',\n            'transaction',\n            'connection'\n          ]\n        },\n        file: {\n          type: 'object',\n          properties: {\n            content_type: {\n              type: 'string',\n              description: 'The MIME content type of the document.'\n            },\n            filename: {\n              type: 'string',\n              description: 'The original filename of the document.'\n            },\n            size: {\n              type: 'integer',\n              description: 'The size of the document in bytes.'\n            }\n          }\n        },\n        live_mode: {\n          type: 'boolean',\n          description: 'This field will be true if this object exists in the live environment or false if it exists in the test environment.'\n        },\n        object: {\n          type: 'string'\n        },\n        source: {\n          type: 'string',\n          description: 'The source of the document. Can be `vendor`, `customer`, or `modern_treasury`.'\n        },\n        updated_at: {\n          type: 'string',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'discarded_at',\n        'document_details',\n        'document_type',\n        'documentable_id',\n        'documentable_type',\n        'file',\n        'live_mode',\n        'object',\n        'source',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      documentable_id: {
        type: 'string',
        description: 'The unique identifier for the associated object.',
      },
      documentable_type: {
        type: 'string',
        enum: [
          'counterparties',
          'expected_payments',
          'external_accounts',
          'identifications',
          'incoming_payment_details',
          'internal_accounts',
          'organizations',
          'payment_orders',
          'transactions',
          'connections',
        ],
      },
      file: {
        type: 'string',
      },
      document_type: {
        type: 'string',
        description: 'A category given to the document, can be `null`.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['documentable_id', 'documentable_type', 'file'],
  },
  annotations: {},
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.documents.create(body)));
  } catch (error) {
    if (error instanceof ModernTreasury.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
