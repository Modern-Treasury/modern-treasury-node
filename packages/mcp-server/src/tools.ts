// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ModernTreasury from 'modern-treasury';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

export const tools: Tool[] = [];
export type HandlerFunction = (client: ModernTreasury, args: any) => any;
export const handlers: Record<string, HandlerFunction> = {};

export function registerApiMethod({
  name,
  description,
  inputSchema,
  handler,
}: {
  name: string;
  description: string;
  inputSchema: Tool['inputSchema'];
  handler: HandlerFunction;
}) {
  tools.push({ name, description, inputSchema });
  handlers[name] = handler;
}
