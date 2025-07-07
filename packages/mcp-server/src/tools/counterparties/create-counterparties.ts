// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'counterparties',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/counterparties',
  operationId: 'createCounterparty',
};

export const tool: Tool = {
  name: 'create_counterparties',
  description: 'Create a new counterparty.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'A human friendly name for this counterparty.',
      },
      accounting: {
        type: 'object',
        properties: {
          type: {
            type: 'string',
            description:
              'An optional type to auto-sync the counterparty to your ledger. Either `customer` or `vendor`.',
            enum: ['customer', 'vendor'],
          },
        },
        required: [],
      },
      accounts: {
        type: 'array',
        description: 'The accounts for this counterparty.',
        items: {
          type: 'object',
          properties: {
            account_details: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  account_number: {
                    type: 'string',
                  },
                  account_number_type: {
                    type: 'string',
                    enum: [
                      'au_number',
                      'base_address',
                      'clabe',
                      'ethereum_address',
                      'hk_number',
                      'iban',
                      'id_number',
                      'nz_number',
                      'other',
                      'pan',
                      'polygon_address',
                      'sg_number',
                      'solana_address',
                      'wallet_address',
                    ],
                  },
                },
                required: ['account_number'],
              },
            },
            account_type: {
              $ref: '#/$defs/external_account_type',
            },
            contact_details: {
              type: 'array',
              items: {
                $ref: '#/$defs/contact_detail_create_request',
              },
            },
            ledger_account: {
              $ref: '#/$defs/ledger_account_create_request',
            },
            metadata: {
              type: 'object',
              description:
                'Additional data represented as key-value pairs. Both the key and value must be strings.',
            },
            name: {
              type: 'string',
              description:
                "A nickname for the external account. This is only for internal usage and won't affect any payments",
            },
            party_address: {
              $ref: '#/$defs/address_request',
            },
            party_identifier: {
              type: 'string',
            },
            party_name: {
              type: 'string',
              description: "If this value isn't provided, it will be inherited from the counterparty's name.",
            },
            party_type: {
              type: 'string',
              description: 'Either `individual` or `business`.',
              enum: ['business', 'individual'],
            },
            plaid_processor_token: {
              type: 'string',
              description:
                "If you've enabled the Modern Treasury + Plaid integration in your Plaid account, you can pass the processor token in this field.",
            },
            routing_details: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  routing_number: {
                    type: 'string',
                  },
                  routing_number_type: {
                    type: 'string',
                    enum: [
                      'aba',
                      'au_bsb',
                      'br_codigo',
                      'ca_cpa',
                      'chips',
                      'cnaps',
                      'dk_interbank_clearing_code',
                      'gb_sort_code',
                      'hk_interbank_clearing_code',
                      'hu_interbank_clearing_code',
                      'id_sknbi_code',
                      'il_bank_code',
                      'in_ifsc',
                      'jp_zengin_code',
                      'my_branch_code',
                      'mx_bank_identifier',
                      'nz_national_clearing_code',
                      'pl_national_clearing_code',
                      'se_bankgiro_clearing_code',
                      'sg_interbank_clearing_code',
                      'swift',
                      'za_national_clearing_code',
                    ],
                  },
                  payment_type: {
                    type: 'string',
                    enum: [
                      'ach',
                      'au_becs',
                      'bacs',
                      'base',
                      'book',
                      'card',
                      'chats',
                      'check',
                      'cross_border',
                      'dk_nets',
                      'eft',
                      'ethereum',
                      'hu_ics',
                      'interac',
                      'masav',
                      'mx_ccen',
                      'neft',
                      'nics',
                      'nz_becs',
                      'pl_elixir',
                      'polygon',
                      'provxchange',
                      'ro_sent',
                      'rtp',
                      'se_bankgirot',
                      'sen',
                      'sepa',
                      'sg_giro',
                      'sic',
                      'signet',
                      'sknbi',
                      'solana',
                      'wire',
                      'zengin',
                    ],
                  },
                },
                required: ['routing_number', 'routing_number_type'],
              },
            },
          },
          required: [],
        },
      },
      email: {
        type: 'string',
        description: "The counterparty's email.",
      },
      ledger_type: {
        type: 'string',
        description:
          'An optional type to auto-sync the counterparty to your ledger. Either `customer` or `vendor`.',
        enum: ['customer', 'vendor'],
      },
      legal_entity: {
        type: 'object',
        properties: {
          legal_entity_type: {
            type: 'string',
            description: 'The type of legal entity.',
            enum: ['business', 'individual'],
          },
          addresses: {
            type: 'array',
            description: 'A list of addresses for the entity.',
            items: {
              $ref: '#/$defs/legal_entity_address_create_request',
            },
          },
          bank_settings: {
            $ref: '#/$defs/bank_settings',
          },
          business_name: {
            type: 'string',
            description: "The business's legal business name.",
          },
          citizenship_country: {
            type: 'string',
            description: 'The country of citizenship for an individual.',
          },
          compliance_details: {
            $ref: '#/$defs/legal_entity_compliance_detail',
          },
          date_formed: {
            type: 'string',
            description: "A business's formation date (YYYY-MM-DD).",
            format: 'date',
          },
          date_of_birth: {
            type: 'string',
            description: "An individual's date of birth (YYYY-MM-DD).",
            format: 'date',
          },
          doing_business_as_names: {
            type: 'array',
            items: {
              type: 'string',
              description:
                'A list of "Doing Business As" (DBA) / trade names for a business, different than their legal business name.',
            },
          },
          email: {
            type: 'string',
            description: "The entity's primary email.",
          },
          first_name: {
            type: 'string',
            description: "An individual's first name.",
          },
          identifications: {
            type: 'array',
            description: 'A list of identifications for the legal entity.',
            items: {
              $ref: '#/$defs/identification_create_request',
            },
          },
          industry_classifications: {
            type: 'array',
            description: 'A list of industry classifications for the legal entity.',
            items: {
              $ref: '#/$defs/legal_entity_industry_classification',
            },
          },
          last_name: {
            type: 'string',
            description: "An individual's last name.",
          },
          legal_entity_associations: {
            type: 'array',
            description: 'The legal entity associations and its child legal entities.',
            items: {
              type: 'object',
              properties: {
                relationship_types: {
                  type: 'array',
                  items: {
                    type: 'string',
                    description:
                      'A list of relationship types for how the child entity relates to parent entity.',
                    enum: ['beneficial_owner', 'control_person'],
                  },
                },
                child_legal_entity: {
                  $ref: '#/$defs/child_legal_entity_create',
                },
                child_legal_entity_id: {
                  type: 'string',
                  description: 'The ID of the child legal entity.',
                },
                ownership_percentage: {
                  type: 'integer',
                  description: "The child entity's ownership percentage iff they are a beneficial owner.",
                },
                title: {
                  type: 'string',
                  description: 'The job title of the child entity at the parent entity.',
                },
              },
              required: ['relationship_types'],
            },
          },
          legal_structure: {
            type: 'string',
            description: "The business's legal structure.",
            enum: ['corporation', 'llc', 'non_profit', 'partnership', 'sole_proprietorship', 'trust'],
          },
          metadata: {
            type: 'object',
            description:
              'Additional data represented as key-value pairs. Both the key and value must be strings.',
          },
          middle_name: {
            type: 'string',
            description: "An individual's middle name.",
          },
          phone_numbers: {
            type: 'array',
            items: {
              type: 'object',
              description: 'A list of phone numbers in E.164 format.',
              properties: {
                phone_number: {
                  type: 'string',
                },
              },
              required: [],
            },
          },
          politically_exposed_person: {
            type: 'boolean',
            description: 'Whether the individual is a politically exposed person.',
          },
          preferred_name: {
            type: 'string',
            description: "An individual's preferred name.",
          },
          prefix: {
            type: 'string',
            description: "An individual's prefix.",
          },
          risk_rating: {
            type: 'string',
            description: 'The risk rating of the legal entity. One of low, medium, high.',
            enum: ['low', 'medium', 'high'],
          },
          suffix: {
            type: 'string',
            description: "An individual's suffix.",
          },
          wealth_and_employment_details: {
            $ref: '#/$defs/wealth_and_employment_details',
          },
          website: {
            type: 'string',
            description: "The entity's primary website URL.",
          },
        },
        required: ['legal_entity_type'],
      },
      legal_entity_id: {
        type: 'string',
        description: 'The id of the legal entity.',
      },
      metadata: {
        type: 'object',
        description:
          'Additional data represented as key-value pairs. Both the key and value must be strings.',
      },
      send_remittance_advice: {
        type: 'boolean',
        description:
          'Send an email to the counterparty whenever an associated payment order is sent to the bank.',
      },
      taxpayer_identifier: {
        type: 'string',
        description: 'Either a valid SSN or EIN.',
      },
      verification_status: {
        type: 'string',
        description: 'The verification status of the counterparty.',
        enum: ['denied', 'needs_approval', 'unverified', 'verified'],
      },
    },
    $defs: {
      external_account_type: {
        type: 'string',
        description: 'Can be `checking`, `savings` or `other`.',
        enum: [
          'base_wallet',
          'cash',
          'checking',
          'crypto_wallet',
          'ethereum_wallet',
          'general_ledger',
          'loan',
          'non_resident',
          'other',
          'overdraft',
          'polygon_wallet',
          'savings',
          'solana_wallet',
        ],
      },
      contact_detail_create_request: {
        type: 'object',
        properties: {
          contact_identifier: {
            type: 'string',
          },
          contact_identifier_type: {
            type: 'string',
            enum: ['email', 'phone_number', 'website'],
          },
        },
        required: [],
      },
      ledger_account_create_request: {
        type: 'object',
        properties: {
          currency: {
            type: 'string',
            description: 'The currency of the ledger account.',
          },
          ledger_id: {
            type: 'string',
            description: 'The id of the ledger that this account belongs to.',
          },
          name: {
            type: 'string',
            description: 'The name of the ledger account.',
          },
          normal_balance: {
            $ref: '#/$defs/transaction_direction',
          },
          currency_exponent: {
            type: 'integer',
            description: 'The currency exponent of the ledger account.',
          },
          description: {
            type: 'string',
            description: 'The description of the ledger account.',
          },
          ledger_account_category_ids: {
            type: 'array',
            description:
              'The array of ledger account category ids that this ledger account should be a child of.',
            items: {
              type: 'string',
            },
          },
          ledgerable_id: {
            type: 'string',
            description:
              'If the ledger account links to another object in Modern Treasury, the id will be populated here, otherwise null.',
          },
          ledgerable_type: {
            type: 'string',
            description:
              'If the ledger account links to another object in Modern Treasury, the type will be populated here, otherwise null. The value is one of internal_account or external_account.',
            enum: ['counterparty', 'external_account', 'internal_account', 'virtual_account'],
          },
          metadata: {
            type: 'object',
            description:
              'Additional data represented as key-value pairs. Both the key and value must be strings.',
          },
        },
        required: ['currency', 'ledger_id', 'name', 'normal_balance'],
      },
      transaction_direction: {
        type: 'string',
        enum: ['credit', 'debit'],
      },
      address_request: {
        type: 'object',
        properties: {
          country: {
            type: 'string',
            description: 'Country code conforms to [ISO 3166-1 alpha-2]',
          },
          line1: {
            type: 'string',
          },
          line2: {
            type: 'string',
          },
          locality: {
            type: 'string',
            description: 'Locality or City.',
          },
          postal_code: {
            type: 'string',
            description: 'The postal code of the address.',
          },
          region: {
            type: 'string',
            description: 'Region or State.',
          },
        },
        required: [],
      },
      legal_entity_address_create_request: {
        type: 'object',
        properties: {
          country: {
            type: 'string',
            description: 'Country code conforms to [ISO 3166-1 alpha-2]',
          },
          line1: {
            type: 'string',
          },
          locality: {
            type: 'string',
            description: 'Locality or City.',
          },
          postal_code: {
            type: 'string',
            description: 'The postal code of the address.',
          },
          region: {
            type: 'string',
            description: 'Region or State.',
          },
          address_types: {
            type: 'array',
            description: 'The types of this address.',
            items: {
              type: 'string',
              enum: ['business', 'mailing', 'other', 'po_box', 'residential'],
            },
          },
          line2: {
            type: 'string',
          },
        },
        required: ['country', 'line1', 'locality', 'postal_code', 'region'],
      },
      bank_settings: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          backup_withholding_percentage: {
            type: 'integer',
            description: 'The percentage of backup withholding to apply to the legal entity.',
          },
          created_at: {
            type: 'string',
            format: 'date-time',
          },
          discarded_at: {
            type: 'string',
            format: 'date-time',
          },
          enable_backup_withholding: {
            type: 'boolean',
            description:
              'Whether backup withholding is enabled. See more here - https://www.irs.gov/businesses/small-businesses-self-employed/backup-withholding.',
          },
          live_mode: {
            type: 'boolean',
            description:
              'This field will be true if this object exists in the live environment or false if it exists in the test environment.',
          },
          object: {
            type: 'string',
          },
          privacy_opt_out: {
            type: 'boolean',
            description: 'Cross River Bank specific setting to opt out of privacy policy.',
          },
          regulation_o: {
            type: 'boolean',
            description:
              'It covers, among other types of insider loans, extensions of credit by a member bank to an executive officer, director, or principal shareholder of the member bank; a bank holding company of which the member bank is a subsidiary; and any other subsidiary of that bank holding company.',
          },
          updated_at: {
            type: 'string',
            format: 'date-time',
          },
        },
        required: [
          'id',
          'backup_withholding_percentage',
          'created_at',
          'discarded_at',
          'enable_backup_withholding',
          'live_mode',
          'object',
          'privacy_opt_out',
          'regulation_o',
          'updated_at',
        ],
      },
      legal_entity_compliance_detail: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          created_at: {
            type: 'string',
            format: 'date-time',
          },
          discarded_at: {
            type: 'string',
            format: 'date-time',
          },
          issuer: {
            type: 'string',
            description: 'The issuer of the compliance token.',
          },
          live_mode: {
            type: 'boolean',
            description:
              'This field will be true if this object exists in the live environment or false if it exists in the test environment.',
          },
          object: {
            type: 'string',
          },
          token_expires_at: {
            type: 'string',
            description: 'The timestamp when the compliance token expires.',
            format: 'date-time',
          },
          token_issued_at: {
            type: 'string',
            description: 'The timestamp when the compliance token was issued.',
            format: 'date-time',
          },
          token_url: {
            type: 'string',
            description: 'The URL to the compliance token. (ex. provider portal URL)',
          },
          updated_at: {
            type: 'string',
            format: 'date-time',
          },
          validated: {
            type: 'boolean',
            description: 'Whether entity corresponding to the compliance token has been validated.',
          },
          validated_at: {
            type: 'string',
            description: 'The timestamp when the entity was validated.',
            format: 'date-time',
          },
        },
        required: [
          'id',
          'created_at',
          'discarded_at',
          'issuer',
          'live_mode',
          'object',
          'token_expires_at',
          'token_issued_at',
          'token_url',
          'updated_at',
          'validated',
          'validated_at',
        ],
      },
      identification_create_request: {
        type: 'object',
        properties: {
          id_number: {
            type: 'string',
            description: 'The ID number of identification document.',
          },
          id_type: {
            type: 'string',
            description: 'The type of ID number.',
            enum: [
              'ar_cuil',
              'ar_cuit',
              'br_cnpj',
              'br_cpf',
              'cl_run',
              'cl_rut',
              'co_cedulas',
              'co_nit',
              'drivers_license',
              'hn_id',
              'hn_rtn',
              'in_lei',
              'kr_brn',
              'kr_crn',
              'kr_rrn',
              'passport',
              'sa_tin',
              'sa_vat',
              'us_ein',
              'us_itin',
              'us_ssn',
              'vn_tin',
            ],
          },
          expiration_date: {
            type: 'string',
            description:
              'The date when the Identification is no longer considered valid by the issuing authority.',
            format: 'date',
          },
          issuing_country: {
            type: 'string',
            description: 'The ISO 3166-1 alpha-2 country code of the country that issued the identification',
          },
          issuing_region: {
            type: 'string',
            description: 'The region in which the identifcation was issued.',
          },
        },
        required: ['id_number', 'id_type'],
      },
      legal_entity_industry_classification: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          classification_codes: {
            type: 'array',
            description: 'The industry classification codes for the legal entity.',
            items: {
              type: 'string',
            },
          },
          classification_type: {
            type: 'string',
            description: 'The classification system of the classification codes.',
            enum: [
              'anzsic',
              'bics',
              'gics',
              'hsics',
              'icb',
              'isic',
              'mgecs',
              'nace',
              'naics',
              'rbics',
              'sic',
              'sni',
              'trbc',
              'uksic',
              'unspsc',
            ],
          },
          created_at: {
            type: 'string',
            format: 'date-time',
          },
          discarded_at: {
            type: 'string',
            format: 'date-time',
          },
          live_mode: {
            type: 'boolean',
            description:
              'This field will be true if this object exists in the live environment or false if it exists in the test environment.',
          },
          object: {
            type: 'string',
          },
          updated_at: {
            type: 'string',
            format: 'date-time',
          },
        },
        required: [
          'id',
          'classification_codes',
          'classification_type',
          'created_at',
          'discarded_at',
          'live_mode',
          'object',
          'updated_at',
        ],
      },
      child_legal_entity_create: {
        type: 'object',
        properties: {
          addresses: {
            type: 'array',
            description: 'A list of addresses for the entity.',
            items: {
              $ref: '#/$defs/legal_entity_address_create_request',
            },
          },
          bank_settings: {
            $ref: '#/$defs/bank_settings',
          },
          business_name: {
            type: 'string',
            description: "The business's legal business name.",
          },
          citizenship_country: {
            type: 'string',
            description: 'The country of citizenship for an individual.',
          },
          compliance_details: {
            $ref: '#/$defs/legal_entity_compliance_detail',
          },
          date_formed: {
            type: 'string',
            description: "A business's formation date (YYYY-MM-DD).",
            format: 'date',
          },
          date_of_birth: {
            type: 'string',
            description: "An individual's date of birth (YYYY-MM-DD).",
            format: 'date',
          },
          doing_business_as_names: {
            type: 'array',
            items: {
              type: 'string',
              description:
                'A list of "Doing Business As" (DBA) / trade names for a business, different than their legal business name.',
            },
          },
          email: {
            type: 'string',
            description: "The entity's primary email.",
          },
          first_name: {
            type: 'string',
            description: "An individual's first name.",
          },
          identifications: {
            type: 'array',
            description: 'A list of identifications for the legal entity.',
            items: {
              $ref: '#/$defs/identification_create_request',
            },
          },
          industry_classifications: {
            type: 'array',
            description: 'A list of industry classifications for the legal entity.',
            items: {
              $ref: '#/$defs/legal_entity_industry_classification',
            },
          },
          last_name: {
            type: 'string',
            description: "An individual's last name.",
          },
          legal_entity_type: {
            type: 'string',
            description: 'The type of legal entity.',
            enum: ['business', 'individual'],
          },
          legal_structure: {
            type: 'string',
            description: "The business's legal structure.",
            enum: ['corporation', 'llc', 'non_profit', 'partnership', 'sole_proprietorship', 'trust'],
          },
          metadata: {
            type: 'object',
            description:
              'Additional data represented as key-value pairs. Both the key and value must be strings.',
          },
          middle_name: {
            type: 'string',
            description: "An individual's middle name.",
          },
          phone_numbers: {
            type: 'array',
            items: {
              type: 'object',
              description: 'A list of phone numbers in E.164 format.',
              properties: {
                phone_number: {
                  type: 'string',
                },
              },
              required: [],
            },
          },
          politically_exposed_person: {
            type: 'boolean',
            description: 'Whether the individual is a politically exposed person.',
          },
          preferred_name: {
            type: 'string',
            description: "An individual's preferred name.",
          },
          prefix: {
            type: 'string',
            description: "An individual's prefix.",
          },
          risk_rating: {
            type: 'string',
            description: 'The risk rating of the legal entity. One of low, medium, high.',
            enum: ['low', 'medium', 'high'],
          },
          suffix: {
            type: 'string',
            description: "An individual's suffix.",
          },
          wealth_and_employment_details: {
            $ref: '#/$defs/wealth_and_employment_details',
          },
          website: {
            type: 'string',
            description: "The entity's primary website URL.",
          },
        },
        required: [],
      },
      wealth_and_employment_details: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          annual_income: {
            type: 'integer',
            description: 'The annual income of the individual.',
          },
          created_at: {
            type: 'string',
            format: 'date-time',
          },
          discarded_at: {
            type: 'string',
            format: 'date-time',
          },
          employer_country: {
            type: 'string',
            description: 'The country in which the employer is located.',
          },
          employer_name: {
            type: 'string',
            description: 'The name of the employer.',
          },
          employer_state: {
            type: 'string',
            description: 'The state in which the employer is located.',
          },
          employment_status: {
            type: 'string',
            description: 'The employment status of the individual.',
            enum: ['employed', 'retired', 'self_employed', 'student', 'unemployed'],
          },
          income_country: {
            type: 'string',
            description: "The country in which the individual's income is earned.",
          },
          income_source: {
            type: 'string',
            description: "The source of the individual's income.",
            enum: [
              'family_support',
              'government_benefits',
              'inheritance',
              'investments',
              'rental_income',
              'retirement',
              'salary',
              'self_employed',
            ],
          },
          income_state: {
            type: 'string',
            description: "The state in which the individual's income is earned.",
          },
          industry: {
            type: 'string',
            description: 'The industry of the individual.',
            enum: [
              'accounting',
              'agriculture',
              'automotive',
              'chemical_manufacturing',
              'construction',
              'educational_medical',
              'food_service',
              'finance',
              'gasoline',
              'health_stores',
              'laundry',
              'maintenance',
              'manufacturing',
              'merchant_wholesale',
              'mining',
              'performing_arts',
              'professional_non_legal',
              'public_administration',
              'publishing',
              'real_estate',
              'recreation_gambling',
              'religious_charity',
              'rental_services',
              'retail_clothing',
              'retail_electronics',
              'retail_food',
              'retail_furnishing',
              'retail_home',
              'retail_non_store',
              'retail_sporting',
              'transportation',
              'travel',
              'utilities',
            ],
          },
          live_mode: {
            type: 'boolean',
            description:
              'This field will be true if this object exists in the live environment or false if it exists in the test environment.',
          },
          object: {
            type: 'string',
          },
          occupation: {
            type: 'string',
            description: 'The occupation of the individual.',
            enum: [
              'consulting',
              'executive',
              'finance_accounting',
              'food_services',
              'government',
              'healthcare',
              'legal_services',
              'manufacturing',
              'other',
              'sales',
              'science_engineering',
              'technology',
            ],
          },
          source_of_funds: {
            type: 'string',
            description: "The source of the individual's funds.",
            enum: [
              'alimony',
              'annuity',
              'business_owner',
              'general_employee',
              'government_benefits',
              'homemaker',
              'inheritance_gift',
              'investment',
              'legal_settlement',
              'lottery',
              'real_estate',
              'retired',
              'retirement',
              'salary',
              'self_employed',
              'senior_executive',
              'trust_income',
            ],
          },
          updated_at: {
            type: 'string',
            format: 'date-time',
          },
          wealth_source: {
            type: 'string',
            description: "The source of the individual's wealth.",
            enum: [
              'business_sale',
              'family_support',
              'government_benefits',
              'inheritance',
              'investments',
              'other',
              'rental_income',
              'retirement',
              'salary',
              'self_employed',
            ],
          },
        },
        required: [
          'id',
          'annual_income',
          'created_at',
          'discarded_at',
          'employer_country',
          'employer_name',
          'employer_state',
          'employment_status',
          'income_country',
          'income_source',
          'income_state',
          'industry',
          'live_mode',
          'object',
          'occupation',
          'source_of_funds',
          'updated_at',
          'wealth_source',
        ],
      },
    },
  },
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.counterparties.create(body));
};

export default { metadata, tool, handler };
