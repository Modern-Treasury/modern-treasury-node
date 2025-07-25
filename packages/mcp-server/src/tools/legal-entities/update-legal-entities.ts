// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'modern-treasury-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ModernTreasury from 'modern-treasury';

export const metadata: Metadata = {
  resource: 'legal_entities',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/legal_entities/{id}',
  operationId: 'updateLegalEntity',
};

export const tool: Tool = {
  name: 'update_legal_entities',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a legal entity.",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      addresses: {
        type: 'array',
        description: 'A list of addresses for the entity.',
        items: {
          $ref: '#/$defs/legal_entity_address_create_request',
        },
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
      website: {
        type: 'string',
        description: "The entity's primary website URL.",
      },
    },
    required: ['id'],
    $defs: {
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
    },
  },
  annotations: {},
};

export const handler = async (client: ModernTreasury, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.legalEntities.update(id, body));
};

export default { metadata, tool, handler };
